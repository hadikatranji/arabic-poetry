"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import Disclaimer from "@/components/Disclaimer";
import { SAMPLE_VERSES } from "@/lib/sample-verses";

export default function PoemsPage() {
  const [search, setSearch] = useState("");
  const [selectedPoet, setSelectedPoet] = useState<string>("all");

  const poets = Array.from(new Set(SAMPLE_VERSES.map((v) => v.poetName)));

  const filtered = SAMPLE_VERSES.filter((v) => {
    const matchesSearch =
      !search || v.fullVerse.includes(search) || v.poetName.includes(search);
    const matchesPoet = selectedPoet === "all" || v.poetName === selectedPoet;
    return matchesSearch && matchesPoet;
  });

  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-10">
        <Link href="/" className="text-[var(--muted)] hover:text-[var(--fg)] text-sm">
          العودة
        </Link>
        <h1 className="text-3xl">الأبيات</h1>
        <ThemeToggle />
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="ابحث..."
          className="flex-1 bg-[var(--surface)] border border-[var(--border)] rounded-md px-4 py-3 text-base focus:outline-none focus:border-[var(--accent)] placeholder:text-[var(--muted)]"
          dir="rtl"
        />
        <select
          value={selectedPoet}
          onChange={(e) => setSelectedPoet(e.target.value)}
          className="bg-[var(--surface)] border border-[var(--border)] rounded-md px-4 py-3 focus:outline-none focus:border-[var(--accent)]"
        >
          <option value="all">جميع الشعراء</option>
          {poets.map((poet) => (
            <option key={poet} value={poet}>
              {poet}
            </option>
          ))}
        </select>
      </div>

      {/* Results */}
      <div className="space-y-1">
        {filtered.map((verse) => (
          <div
            key={verse.id}
            className="py-5 border-b border-[var(--border)]"
          >
            <p className="verse-text text-lg text-center mb-2">
              {verse.firstHemistich}
              <span className="hemistich-separator">✶</span>
              {verse.secondHemistich}
            </p>
            <p className="text-center text-xs text-[var(--muted)]">
              — {verse.poetName}
            </p>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-[var(--muted)] mt-16">لا نتائج</p>
      )}

      <p className="text-center text-[var(--muted)] text-xs mt-8">
        {filtered.length} بيت
      </p>

      <Disclaimer />
    </main>
  );
}
