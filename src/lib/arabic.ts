/**
 * Arabic text processing utilities for the poetry app.
 * Handles diacritics stripping, letter normalization, and
 * first/last letter extraction for the musajalah game.
 */

// Arabic diacritics (tashkeel) Unicode ranges
const DIACRITICS_RE =
  /[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E8\u06EA-\u06ED]/g;

// Tatweel (kashida) character
const TATWEEL = "\u0640";

// Alef variants → bare alef
const ALEF_VARIANTS: Record<string, string> = {
  "\u0622": "\u0627", // آ → ا
  "\u0623": "\u0627", // أ → ا
  "\u0625": "\u0627", // إ → ا
  "\u0671": "\u0627", // ٱ → ا
};

// Taa marbuta → Haa (traditional musajalah rule)
const TAA_MARBUTA = "\u0629";
const HAA = "\u0647";

// Arabic letter range (from hamza to ya)
const ARABIC_LETTER_MIN = 0x0621;
const ARABIC_LETTER_MAX = 0x064a;

function isArabicLetter(char: string): boolean {
  const code = char.charCodeAt(0);
  return code >= ARABIC_LETTER_MIN && code <= ARABIC_LETTER_MAX;
}

/**
 * Strip all diacritics (tashkeel) and tatweel from Arabic text.
 */
export function stripDiacritics(text: string): string {
  return text.replace(DIACRITICS_RE, "").replaceAll(TATWEEL, "");
}

/**
 * Normalize a single Arabic letter for game matching.
 * - Strips diacritics
 * - Normalizes alef variants to bare alef
 * - Converts taa marbuta to haa
 */
export function normalizeLetter(char: string): string {
  let c = char.replace(DIACRITICS_RE, "").replace(TATWEEL, "");
  c = ALEF_VARIANTS[c] ?? c;
  if (c === TAA_MARBUTA) c = HAA;
  return c;
}

/**
 * Extract the first Arabic letter of a verse, normalized.
 */
export function extractFirstLetter(verse: string): string {
  const cleaned = stripDiacritics(verse);
  for (const char of cleaned) {
    if (isArabicLetter(char)) {
      return normalizeLetter(char);
    }
  }
  return "";
}

/**
 * Extract the last Arabic letter of a verse, normalized.
 */
export function extractLastLetter(verse: string): string {
  const cleaned = stripDiacritics(verse);
  for (let i = cleaned.length - 1; i >= 0; i--) {
    if (isArabicLetter(cleaned[i])) {
      return normalizeLetter(cleaned[i]);
    }
  }
  return "";
}

/**
 * Check if text contains Arabic characters.
 */
export function hasArabicText(text: string): boolean {
  for (const char of text) {
    if (isArabicLetter(char)) return true;
  }
  return false;
}

/**
 * Normalize full text for comparison (strip diacritics + normalize alefs).
 */
export function normalizeText(text: string): string {
  let result = stripDiacritics(text);
  for (const [variant, normalized] of Object.entries(ALEF_VARIANTS)) {
    result = result.replaceAll(variant, normalized);
  }
  return result.replaceAll(TAA_MARBUTA, HAA).trim();
}

/**
 * All 28 Arabic letters (for display and game reference).
 */
export const ARABIC_LETTERS = [
  "ا", "ب", "ت", "ث", "ج", "ح", "خ",
  "د", "ذ", "ر", "ز", "س", "ش", "ص",
  "ض", "ط", "ظ", "ع", "غ", "ف", "ق",
  "ك", "ل", "م", "ن", "ه", "و", "ي",
] as const;
