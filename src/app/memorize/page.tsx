"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import Disclaimer from "@/components/Disclaimer";
import { SAMPLE_VERSES } from "@/lib/sample-verses";

export default function MemorizePage() {
  const poetGroups = SAMPLE_VERSES.reduce(
    (acc, v) => {
      if (!acc[v.poetName]) acc[v.poetName] = [];
      acc[v.poetName].push(v);
      return acc;
    },
    {} as Record<string, typeof SAMPLE_VERSES>
  );

  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-10">
        <Link href="/" className="text-[var(--muted)] hover:text-[var(--fg)] text-sm">
          العودة
        </Link>
        <h1 className="text-3xl">الحفظ</h1>
        <ThemeToggle />
      </div>

      <p className="text-[var(--muted)] text-sm mb-8">
        اختر شاعراً لحفظ أبياته
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(poetGroups).map(([poet, verses]) => (
          <Link
            key={poet}
            href={`/memorize/${encodeURIComponent(poet)}`}
            className="block p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md hover:border-[var(--accent)] transition-all"
          >
            <h3 className="text-lg">{poet}</h3>
            <p className="text-xs text-[var(--muted)] mt-1">
              {verses.length} بيت
            </p>
            <p className="verse-text text-sm text-[var(--muted)] mt-3 line-clamp-1">
              {verses[0].firstHemistich}...
            </p>
          </Link>
        ))}
      </div>

      <Disclaimer />
    </main>
  );
}
