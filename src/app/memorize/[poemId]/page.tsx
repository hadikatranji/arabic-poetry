"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { SAMPLE_VERSES } from "@/lib/sample-verses";
import { stripDiacritics } from "@/lib/arabic";

type Mode = "reveal" | "fillBlank" | "fullTest";

export default function MemorizePoemPage({
  params,
}: {
  params: { poemId: string };
}) {
  const poetName = decodeURIComponent(params.poemId);
  const verses = SAMPLE_VERSES.filter((v) => v.poetName === poetName);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [mode, setMode] = useState<Mode>("reveal");
  const [showSecondHemistich, setShowSecondHemistich] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [mastered, setMastered] = useState<Set<number>>(new Set());

  const currentVerse = verses[currentIndex];

  const checkAnswer = useCallback(() => {
    if (!currentVerse) return;

    const normalize = (s: string) =>
      stripDiacritics(s).replace(/\s+/g, " ").trim();
    const correct = normalize(currentVerse.secondHemistich);
    const answer = normalize(userAnswer);

    if (answer === correct) {
      setFeedback("أحسنت! إجابة صحيحة");
      setMastered((prev) => new Set(prev).add(currentVerse.id));
    } else {
      const words1 = correct.split(" ");
      const words2 = answer.split(" ");
      const matching = words1.filter((w) => words2.includes(w)).length;
      const percent = Math.round((matching / words1.length) * 100);

      if (percent >= 70) {
        setFeedback(`قريب! ${percent}% صحيح`);
      } else {
        setFeedback("حاول مرة أخرى");
      }
    }
    setShowSecondHemistich(true);
  }, [currentVerse, userAnswer]);

  function nextVerse() {
    setShowSecondHemistich(false);
    setUserAnswer("");
    setFeedback(null);
    setCurrentIndex((i) => Math.min(i + 1, verses.length - 1));
  }

  function prevVerse() {
    setShowSecondHemistich(false);
    setUserAnswer("");
    setFeedback(null);
    setCurrentIndex((i) => Math.max(i - 1, 0));
  }

  if (verses.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-[var(--muted)]">لم يتم العثور على أبيات</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen max-w-2xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <Link href="/memorize" className="text-[var(--muted)] hover:text-[var(--fg)] text-sm">
          العودة
        </Link>
        <ThemeToggle />
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl mb-2">{poetName}</h1>
        <p className="text-[var(--muted)] text-sm">
          {currentIndex + 1} / {verses.length}
          {mastered.size > 0 && ` — تم حفظ ${mastered.size}`}
        </p>
        {/* Progress */}
        <div className="w-full bg-[var(--border)] rounded-full h-1 mt-4 max-w-xs mx-auto">
          <div
            className="bg-[var(--accent)] h-1 rounded-full transition-all"
            style={{ width: `${(mastered.size / verses.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Mode Selector */}
      <div className="flex justify-center gap-2 mb-8">
        {(["reveal", "fillBlank", "fullTest"] as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => { setMode(m); setShowSecondHemistich(false); setFeedback(null); }}
            className={`px-4 py-2 rounded text-sm transition-colors ${
              mode === m
                ? "bg-[var(--fg)] text-[var(--bg)]"
                : "text-[var(--muted)] hover:text-[var(--fg)]"
            }`}
          >
            {m === "reveal" ? "كشف" : m === "fillBlank" ? "أكمل" : "اختبار"}
          </button>
        ))}
      </div>

      {/* Verse Area */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-8 mb-6">
        {mode === "reveal" && (
          <div className="text-center">
            <p className="verse-text text-xl mb-6">{currentVerse.firstHemistich}</p>
            {showSecondHemistich ? (
              <p className="verse-text text-xl text-[var(--accent)]">{currentVerse.secondHemistich}</p>
            ) : (
              <button
                onClick={() => setShowSecondHemistich(true)}
                className="text-[var(--accent)] border border-[var(--accent)] px-6 py-2 rounded text-sm hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors"
              >
                اكشف العجز
              </button>
            )}
          </div>
        )}

        {mode === "fillBlank" && (
          <div className="text-center">
            <p className="verse-text text-xl mb-4">{currentVerse.firstHemistich}</p>
            <p className="text-[var(--muted)] text-sm mb-4">أكمل عجز البيت:</p>
            <textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="..."
              className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-md px-4 py-3 text-center focus:outline-none focus:border-[var(--accent)] resize-none"
              rows={2}
              dir="rtl"
              disabled={showSecondHemistich}
            />
            {feedback && (
              <p className={`mt-3 text-sm ${feedback.includes("أحسنت") ? "text-green-600" : "text-[var(--accent)]"}`}>
                {feedback}
              </p>
            )}
            {showSecondHemistich && (
              <p className="verse-text text-lg text-[var(--accent)] mt-3">{currentVerse.secondHemistich}</p>
            )}
            {!showSecondHemistich && (
              <button
                onClick={checkAnswer}
                disabled={!userAnswer.trim()}
                className="mt-4 bg-[var(--fg)] text-[var(--bg)] px-6 py-2 rounded text-sm hover:opacity-80 disabled:opacity-30 transition-opacity"
              >
                تحقق
              </button>
            )}
          </div>
        )}

        {mode === "fullTest" && (
          <div className="text-center">
            <p className="text-[var(--muted)] text-sm mb-2">اكتب البيت كاملاً</p>
            <p className="text-xs text-[var(--muted)] mb-4">تلميح: {currentVerse.poetName}</p>
            <textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="..."
              className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-md px-4 py-3 text-center focus:outline-none focus:border-[var(--accent)] resize-none"
              rows={3}
              dir="rtl"
              disabled={showSecondHemistich}
            />
            {feedback && (
              <p className={`mt-3 text-sm ${feedback.includes("أحسنت") ? "text-green-600" : "text-[var(--accent)]"}`}>
                {feedback}
              </p>
            )}
            {showSecondHemistich && (
              <p className="verse-text text-lg text-[var(--accent)] mt-3">
                {currentVerse.firstHemistich}
                <span className="hemistich-separator">✶</span>
                {currentVerse.secondHemistich}
              </p>
            )}
            {!showSecondHemistich && (
              <button
                onClick={checkAnswer}
                disabled={!userAnswer.trim()}
                className="mt-4 bg-[var(--fg)] text-[var(--bg)] px-6 py-2 rounded text-sm hover:opacity-80 disabled:opacity-30 transition-opacity"
              >
                تحقق
              </button>
            )}
          </div>
        )}
      </div>

      {/* Nav */}
      <div className="flex justify-between items-center">
        <button
          onClick={prevVerse}
          disabled={currentIndex === 0}
          className="text-sm text-[var(--muted)] hover:text-[var(--fg)] disabled:opacity-30 transition-colors"
        >
          السابق
        </button>
        {mastered.has(currentVerse.id) && (
          <span className="text-green-600 text-xs">تم الحفظ</span>
        )}
        <button
          onClick={nextVerse}
          disabled={currentIndex === verses.length - 1}
          className="text-sm text-[var(--muted)] hover:text-[var(--fg)] disabled:opacity-30 transition-colors"
        >
          التالي
        </button>
      </div>
    </main>
  );
}
