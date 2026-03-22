import { NextRequest, NextResponse } from "next/server";
import {
  extractFirstLetter,
  extractLastLetter,
  hasArabicText,
} from "@/lib/arabic";
import { findVerseByFirstLetter } from "@/lib/sample-verses";

// In-memory session store (for local dev; replace with DB in production)
const sessions = new Map<
  string,
  { usedVerseIds: number[]; score: number }
>();

export async function DELETE() {
  sessions.delete("default");
  return NextResponse.json({ ok: true });
}

export async function POST(req: NextRequest) {
  try {
    const { userVerse, requiredFirstLetter, sessionId = "default" } =
      await req.json();

    // Get or create session
    if (!sessions.has(sessionId)) {
      sessions.set(sessionId, { usedVerseIds: [], score: 0 });
    }
    const session = sessions.get(sessionId)!;

    // Validate: must be Arabic text
    if (!hasArabicText(userVerse) || userVerse.trim().length < 5) {
      return NextResponse.json({
        type: "error",
        message: "الرجاء كتابة بيت شعر بالعربية",
      });
    }

    // Validate: must start with required letter (if not first turn)
    if (requiredFirstLetter) {
      const firstLetter = extractFirstLetter(userVerse);
      if (firstLetter !== requiredFirstLetter) {
        return NextResponse.json({
          type: "error",
          message: `يجب أن يبدأ بيتك بحرف "${requiredFirstLetter}"`,
        });
      }
    }

    // Extract last letter of user's verse
    const lastLetter = extractLastLetter(userVerse);
    if (!lastLetter) {
      return NextResponse.json({
        type: "error",
        message: "لم أتمكن من تحديد آخر حرف في بيتك",
      });
    }

    // Find a response verse
    const response = findVerseByFirstLetter(lastLetter, session.usedVerseIds);

    if (!response) {
      // App concedes
      sessions.delete(sessionId);
      return NextResponse.json({
        type: "concede",
        message:
          "أحسنت! لم أجد بيتاً يبدأ بهذا الحرف. فزت في هذه الجولة! 🏆",
      });
    }

    // Track used verse
    session.usedVerseIds.push(response.id);
    session.score += 1;

    return NextResponse.json({
      type: "verse",
      turn: {
        userVerse,
        appVerse: response.fullVerse,
        appVerseId: response.id,
        letterChain: lastLetter,
        nextLetter: response.lastLetter,
        poetName: response.poetName,
      },
    });
  } catch {
    return NextResponse.json(
      { type: "error", message: "حدث خطأ في الخادم" },
      { status: 500 }
    );
  }
}
