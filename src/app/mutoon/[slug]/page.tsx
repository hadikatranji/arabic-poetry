"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import ShareButtons from "@/components/ShareButtons";
import Disclaimer from "@/components/Disclaimer";
import { getMatnBySlug } from "@/lib/mutoon-data";

export default function MatnPage({ params }: { params: { slug: string } }) {
  const matn = getMatnBySlug(params.slug);
  const [expandedChapter, setExpandedChapter] = useState<number | null>(0);
  const [showExplanations, setShowExplanations] = useState(true);

  if (!matn) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-[var(--muted)]">لم يتم العثور على هذا المتن</p>
      </main>
    );
  }

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
        </div>
      </div>

      <p className="text-sm text-[var(--muted)] mb-6 leading-relaxed">
        {matn.description}
      </p>

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
          <a
            href={matn.youtubeSearch}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md hover:border-[var(--accent)] transition-all text-center"
          >
            <p className="text-lg mb-1">استمع إلى {matn.title}</p>
            <p className="text-sm text-[var(--muted)]">ابحث على يوتيوب ←</p>
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
        {matn.chapters.map((chapter, ci) => (
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
              <span className="text-base">{chapter.title}</span>
              <span className="text-xs text-[var(--muted)]">
                {chapter.verses.length} بيت
              </span>
            </button>

            {expandedChapter === ci && (
              <div className="p-4 space-y-5">
                {chapter.verses.map((verse) => (
                  <div
                    key={verse.id}
                    className="pb-4 border-b border-[var(--border)] last:border-0 last:pb-0"
                  >
                    <p className="text-xs text-[var(--muted)] mb-2">
                      {verse.id}
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
                ))}
              </div>
            )}
          </div>
        ))}
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

      <Disclaimer />
    </main>
  );
}
