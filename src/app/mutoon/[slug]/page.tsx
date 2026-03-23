"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import ShareButtons from "@/components/ShareButtons";
import { getMatnBySlug, type MatnChapter } from "@/lib/mutoon-data";

type ReadMode = "list" | "reader" | "quiz";

export default function MatnPage({ params }: { params: { slug: string } }) {
  const matn = getMatnBySlug(params.slug);
  const [expandedChapter, setExpandedChapter] = useState<number | null>(0);
  const [showExplanations, setShowExplanations] = useState(true);
  const [mode, setMode] = useState<ReadMode>("list");
  const [activeChapter, setActiveChapter] = useState(0);
  const [verseIndex, setVerseIndex] = useState(0);
  const [revealedVerses, setRevealedVerses] = useState<Set<string>>(new Set());
  const [readVerses, setReadVerses] = useState<Set<string>>(new Set());

  if (!matn) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-[var(--muted)]">لم يتم العثور على هذا المتن</p>
      </main>
    );
  }

  function enterMode(m: ReadMode, chapterIndex = 0) {
    setMode(m);
    setActiveChapter(chapterIndex);
    setVerseIndex(0);
    setRevealedVerses(new Set());
  }

  function markRead(chapterIdx: number, verseId: number) {
    setReadVerses((prev) => new Set(prev).add(`${chapterIdx}-${verseId}`));
  }

  function goNext(chapter: MatnChapter, chapterIdx: number) {
    markRead(chapterIdx, chapter.verses[verseIndex].id);
    if (verseIndex < chapter.verses.length - 1) {
      setVerseIndex(verseIndex + 1);
      setRevealedVerses(new Set());
    } else if (activeChapter < matn!.chapters.length - 1) {
      setActiveChapter(activeChapter + 1);
      setVerseIndex(0);
      setRevealedVerses(new Set());
    }
  }

  function goPrev() {
    if (verseIndex > 0) {
      setVerseIndex(verseIndex - 1);
      setRevealedVerses(new Set());
    } else if (activeChapter > 0) {
      const prevChapter = matn!.chapters[activeChapter - 1];
      setActiveChapter(activeChapter - 1);
      setVerseIndex(prevChapter.verses.length - 1);
      setRevealedVerses(new Set());
    }
  }

  function toggleReveal(key: string) {
    setRevealedVerses((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function chapterProgress(chapterIdx: number, chapter: MatnChapter) {
    const done = chapter.verses.filter((v) =>
      readVerses.has(`${chapterIdx}-${v.id}`)
    ).length;
    return { done, total: chapter.verses.length };
  }

  const totalRead = readVerses.size;
  const totalVerses = matn.chapters.reduce((s, c) => s + c.verses.length, 0);

  // ── READER / QUIZ MODE ──────────────────────────────────────────
  if (mode === "reader" || mode === "quiz") {
    const chapter = matn.chapters[activeChapter];
    const verse = chapter.verses[verseIndex];
    const isLast =
      activeChapter === matn.chapters.length - 1 &&
      verseIndex === chapter.verses.length - 1;
    const isFirst = activeChapter === 0 && verseIndex === 0;
    const revealKey = `${activeChapter}-${verseIndex}`;
    const isRevealed = revealedVerses.has(revealKey);

    return (
      <main className="min-h-screen max-w-2xl mx-auto px-6 py-8 flex flex-col">
        {/* Nav */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setMode("list")}
            className="text-[var(--muted)] hover:text-[var(--fg)] text-sm"
          >
            ← قائمة الأبواب
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => enterMode(mode === "reader" ? "quiz" : "reader", activeChapter)}
              className="text-xs border border-[var(--border)] px-3 py-1 rounded hover:border-[var(--accent)] text-[var(--muted)] transition-colors"
            >
              {mode === "reader" ? "وضع الاختبار" : "وضع القراءة"}
            </button>
            <ThemeToggle />
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-2">
          <div className="flex justify-between text-xs text-[var(--muted)] mb-1">
            <span>{chapter.title}</span>
            <span>
              {verseIndex + 1} / {chapter.verses.length}
            </span>
          </div>
          <div className="h-1 bg-[var(--border)] rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--accent)] transition-all duration-300"
              style={{
                width: `${((verseIndex + 1) / chapter.verses.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Chapter selector */}
        <div className="flex gap-2 overflow-x-auto py-2 mb-6 scrollbar-hide">
          {matn.chapters.map((ch, ci) => {
            const prog = chapterProgress(ci, ch);
            return (
              <button
                key={ci}
                onClick={() => {
                  setActiveChapter(ci);
                  setVerseIndex(0);
                  setRevealedVerses(new Set());
                }}
                className={`shrink-0 text-xs px-3 py-1.5 rounded border transition-colors ${
                  ci === activeChapter
                    ? "border-[var(--accent)] text-[var(--accent)]"
                    : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--fg)]"
                }`}
              >
                {ch.title}
                {prog.done > 0 && (
                  <span className="mr-1 opacity-60">
                    ({prog.done}/{prog.total})
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Verse card */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full p-8 bg-[var(--surface)] border border-[var(--border)] rounded-xl text-center">
            <div className="text-xs text-[var(--muted)] mb-6">
              البيت {verse.id}
            </div>

            {/* First hemistich — always shown */}
            <p className="verse-text text-2xl leading-loose mb-2">{verse.h1}</p>

            {/* Separator + second hemistich */}
            {mode === "reader" ? (
              <>
                <span className="text-[var(--accent)] text-lg mx-3">✶</span>
                <p className="verse-text text-2xl leading-loose mb-6">{verse.h2}</p>
              </>
            ) : (
              <div className="my-4">
                {isRevealed ? (
                  <>
                    <span className="text-[var(--accent)] text-lg mx-3">✶</span>
                    <p className="verse-text text-2xl leading-loose mb-4">{verse.h2}</p>
                  </>
                ) : (
                  <button
                    onClick={() => toggleReveal(revealKey)}
                    className="mt-2 mb-4 text-sm text-[var(--accent)] border border-[var(--accent)] px-5 py-2 rounded hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors"
                  >
                    اكشف العجز
                  </button>
                )}
              </div>
            )}

            {/* Explanation */}
            {showExplanations && verse.explanation && (
              <div className="mt-4 pt-4 border-t border-[var(--border)] text-sm text-[var(--muted)] text-right leading-relaxed">
                {verse.explanation}
              </div>
            )}
          </div>

          <button
            onClick={() => setShowExplanations(!showExplanations)}
            className="mt-3 text-xs text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
          >
            {showExplanations ? "إخفاء الشرح" : "إظهار الشرح"}
          </button>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={goPrev}
            disabled={isFirst}
            className="px-5 py-2 border border-[var(--border)] rounded text-sm text-[var(--muted)] hover:border-[var(--fg)] hover:text-[var(--fg)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            ← السابق
          </button>

          {isLast ? (
            <button
              onClick={() => setMode("list")}
              className="px-5 py-2 bg-[var(--accent)] text-[var(--bg)] rounded text-sm hover:opacity-80 transition-opacity"
            >
              انتهيت ✓
            </button>
          ) : (
            <button
              onClick={() => goNext(chapter, activeChapter)}
              className="px-5 py-2 bg-[var(--fg)] text-[var(--bg)] rounded text-sm hover:opacity-80 transition-opacity"
            >
              التالي →
            </button>
          )}
        </div>
      </main>
    );
  }

  // ── LIST MODE (default) ─────────────────────────────────────────
  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <Link href="/learn" className="text-[var(--muted)] hover:text-[var(--fg)] text-sm">
          العودة
        </Link>
        <ThemeToggle />
      </div>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl mb-2">{matn.title}</h1>
        <p className="text-[var(--muted)] text-sm">{matn.authorFull}</p>
        <div className="flex gap-3 mt-3">
          <span className="text-xs text-[var(--accent)] border border-[var(--border)] px-2 py-1 rounded">
            {matn.subject}
          </span>
          <span className="text-xs text-[var(--muted)] border border-[var(--border)] px-2 py-1 rounded">
            {matn.verseCount} بيت
          </span>
          {totalRead > 0 && (
            <span className="text-xs text-[var(--accent)] border border-[var(--accent)] px-2 py-1 rounded">
              قرأت {totalRead} / {totalVerses}
            </span>
          )}
        </div>
      </div>

      <p className="text-sm text-[var(--muted)] mb-6 leading-relaxed">
        {matn.description}
      </p>

      {/* Start reading buttons */}
      <div className="flex gap-3 mb-6 flex-wrap">
        <button
          onClick={() => enterMode("reader")}
          className="px-5 py-2.5 bg-[var(--fg)] text-[var(--bg)] rounded text-sm hover:opacity-80 transition-opacity"
        >
          ابدأ القراءة →
        </button>
        <button
          onClick={() => enterMode("quiz")}
          className="px-5 py-2.5 border border-[var(--accent)] text-[var(--accent)] rounded text-sm hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors"
        >
          وضع الاختبار
        </button>
      </div>

      <div className="mb-6">
        <ShareButtons
          url={`https://shi3r.com/mutoon/${matn.slug}`}
          title={`${matn.title} — مسامرات شعرية`}
          text={`تعلّم واحفظ ${matn.title} — ${matn.verseCount} بيت مع الشرح`}
        />
      </div>

      {/* Audio */}
      {matn.youtubeSearch && (
        <div className="mb-8">
          <h2 className="text-lg text-[var(--accent)] mb-3">الاستماع</h2>
          <a
            href={matn.youtubeSearch}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--fg)] hover:border-[var(--accent)] transition-colors"
          >
            <span className="text-xl">▶</span>
            <span>ابحث عن {matn.title} على يوتيوب</span>
          </a>
        </div>
      )}

      {/* Controls */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg text-[var(--accent)]">الأبواب</h2>
        <button
          onClick={() => setShowExplanations(!showExplanations)}
          className="text-xs text-[var(--muted)] border border-[var(--border)] px-3 py-1 rounded hover:border-[var(--accent)] transition-colors"
        >
          {showExplanations ? "إخفاء الشرح" : "إظهار الشرح"}
        </button>
      </div>

      {/* Chapters */}
      <div className="space-y-4">
        {matn.chapters.map((chapter, ci) => {
          const prog = chapterProgress(ci, chapter);
          return (
            <div
              key={ci}
              className="border border-[var(--border)] rounded-md overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedChapter(expandedChapter === ci ? null : ci)
                }
                className="w-full text-right p-4 bg-[var(--surface)] hover:bg-[var(--border)] transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="text-base">{chapter.title}</span>
                  {prog.done > 0 && (
                    <span className="text-xs text-[var(--accent)]">
                      {prog.done}/{prog.total} ✓
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <span
                    role="button"
                    tabIndex={0}
                    onClick={(e) => {
                      e.stopPropagation();
                      enterMode("reader", ci);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.stopPropagation();
                        enterMode("reader", ci);
                      }
                    }}
                    className="text-xs text-[var(--accent)] border border-[var(--border)] px-2 py-0.5 rounded hover:border-[var(--accent)] transition-colors cursor-pointer"
                  >
                    اقرأ
                  </span>
                  <span className="text-xs text-[var(--muted)]">
                    {chapter.verses.length} بيت
                  </span>
                </div>
              </button>

              {expandedChapter === ci && (
                <div className="p-4 space-y-5">
                  {chapter.verses.map((verse) => {
                    const isRead = readVerses.has(`${ci}-${verse.id}`);
                    return (
                      <div
                        key={verse.id}
                        className={`pb-4 border-b border-[var(--border)] last:border-0 last:pb-0 ${
                          isRead ? "opacity-60" : ""
                        }`}
                      >
                        <p className="text-xs text-[var(--muted)] mb-2">
                          {verse.id}
                          {isRead && <span className="mr-2 text-[var(--accent)]">✓</span>}
                        </p>
                        <p className="verse-text text-base text-center leading-relaxed">
                          {verse.h1}
                          <span className="hemistich-separator">✶</span>
                          {verse.h2}
                        </p>
                        {showExplanations && verse.explanation && (
                          <p className="text-sm text-[var(--muted)] mt-3 leading-relaxed bg-[var(--surface)] rounded p-3">
                            {verse.explanation}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Link to memorize */}
      <div className="mt-10 p-6 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center">
        <p className="text-[var(--accent)] mb-4">تريد حفظ هذا المتن؟</p>
        <Link
          href="/memorize"
          className="inline-block bg-[var(--fg)] text-[var(--bg)] px-6 py-2 rounded text-sm hover:opacity-80 transition-opacity"
        >
          ابدأ الحفظ
        </Link>
      </div>
    </main>
  );
}
