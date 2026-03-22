/**
 * المساجلة الشعرية — Poetry Duel Game Engine
 *
 * Core game logic:
 * 1. User says a verse
 * 2. App responds with a verse starting with the last letter of user's verse
 * 3. User must respond starting with the last letter of app's verse
 * 4. If no verse found, the side that can't respond loses
 */

import { extractLastLetter, extractFirstLetter, hasArabicText } from "./arabic";
import { query } from "./db";

export interface GameTurn {
  userVerse: string;
  appVerse: string | null;
  appVerseId: number | null;
  letterChain: string; // The letter that connected user → app
  nextLetter: string; // The letter user must start with next
  poetName?: string;
}

export interface GameSession {
  id: number;
  turns: GameTurn[];
  score: number;
  difficulty: "easy" | "normal" | "hard";
  usedVerseIds: number[];
}

interface VerseCandidate {
  id: number;
  full_verse: string;
  first_letter: string;
  last_letter: string;
  poet_id: number;
  poet_name: string;
  era: string;
  poem_title: string;
}

/**
 * Validate that the user's verse starts with the required letter.
 * On the first turn, any letter is accepted.
 */
export function validateUserVerse(
  verse: string,
  requiredFirstLetter: string | null
): { valid: boolean; error?: string } {
  if (!hasArabicText(verse)) {
    return { valid: false, error: "الرجاء كتابة بيت شعر بالعربية" };
  }

  if (verse.trim().length < 5) {
    return { valid: false, error: "البيت قصير جداً" };
  }

  if (requiredFirstLetter) {
    const firstLetter = extractFirstLetter(verse);
    if (firstLetter !== requiredFirstLetter) {
      return {
        valid: false,
        error: `يجب أن يبدأ بيتك بحرف "${requiredFirstLetter}"`,
      };
    }
  }

  return { valid: true };
}

/**
 * Find a response verse from the database.
 * Returns a verse whose first letter matches the last letter of the user's verse.
 */
export async function findResponseVerse(
  userVerse: string,
  usedVerseIds: number[],
  difficulty: "easy" | "normal" | "hard" = "normal",
  lastPoetId?: number
): Promise<VerseCandidate | null> {
  const lastLetter = extractLastLetter(userVerse);
  if (!lastLetter) return null;

  let difficultyFilter = "";
  const params: unknown[] = [lastLetter, usedVerseIds.length > 0 ? usedVerseIds : [0]];

  if (difficulty === "normal" && lastPoetId) {
    difficultyFilter = "AND po.id != $3";
    params.push(lastPoetId);
  }

  const candidates = await query<VerseCandidate>(
    `SELECT v.id, v.full_verse, v.first_letter, v.last_letter,
            po.id as poet_id, po.name_ar as poet_name, po.era,
            p.title_ar as poem_title
     FROM verses v
     JOIN poems p ON v.poem_id = p.id
     JOIN poets po ON p.poet_id = po.id
     WHERE v.first_letter = $1
       AND v.id != ALL($2)
       ${difficultyFilter}
     ORDER BY RANDOM()
     LIMIT 1`,
    params
  );

  return candidates[0] ?? null;
}

/**
 * Process a complete game turn.
 */
export async function processGameTurn(
  userVerse: string,
  session: GameSession
): Promise<{
  type: "verse" | "concede" | "error";
  turn?: GameTurn;
  message?: string;
}> {
  // Determine required first letter (null on first turn)
  const lastTurn = session.turns[session.turns.length - 1];
  const requiredFirstLetter = lastTurn?.nextLetter ?? null;

  // Validate user's verse
  const validation = validateUserVerse(userVerse, requiredFirstLetter);
  if (!validation.valid) {
    return { type: "error", message: validation.error };
  }

  // Find a response verse
  const lastPoetId = lastTurn
    ? (session.turns[session.turns.length - 1] as GameTurn & { poetId?: number })?.poetId
    : undefined;

  const response = await findResponseVerse(
    userVerse,
    session.usedVerseIds,
    session.difficulty,
    lastPoetId as number | undefined
  );

  if (!response) {
    return {
      type: "concede",
      message: "أحسنت! لم أجد بيتاً يبدأ بهذا الحرف. فزت في هذه الجولة! 🏆",
    };
  }

  const turn: GameTurn = {
    userVerse,
    appVerse: response.full_verse,
    appVerseId: response.id,
    letterChain: extractLastLetter(userVerse),
    nextLetter: response.last_letter,
    poetName: response.poet_name,
  };

  return { type: "verse", turn };
}
