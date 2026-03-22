import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import PoetAvatar from "@/components/PoetAvatar";
import ShareButtons from "@/components/ShareButtons";
import { getPoetById, SAMPLE_POETS } from "@/lib/sample-poets";
import { SAMPLE_VERSES } from "@/lib/sample-verses";

export function generateStaticParams() {
  return SAMPLE_POETS.map((p) => ({ id: String(p.id) }));
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const poet = getPoetById(Number(params.id));
  if (!poet) return {};

  return {
    title: poet.nameAr,
    description: `${poet.biographyAr} — اقرأ أشعار ${poet.nameAr} في مسامرات شعرية`,
    openGraph: {
      title: `${poet.nameAr} | مسامرات شعرية`,
      description: poet.biographyAr,
    },
  };
}

export default function PoetDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const poet = getPoetById(Number(params.id));
  if (!poet) return notFound();

  const poetVerses = SAMPLE_VERSES.filter((v) => v.poetId === poet.id);

  // JSON-LD for the poet
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: poet.nameAr,
    alternateName: poet.nameEn,
    description: poet.biographyAr,
    birthDate: poet.birthYear?.toString(),
    deathDate: poet.deathYear?.toString(),
    nationality: "عربي",
    knowsAbout: "الشعر العربي",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen max-w-3xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link href="/poets" className="text-[var(--muted)] hover:text-[var(--fg)] text-sm">
            العودة
          </Link>
          <ThemeToggle />
        </div>

        {/* Poet Header */}
        <div className="flex items-start gap-6 mb-10">
          <PoetAvatar name={poet.nameAr} era={poet.era} poetId={poet.id} size="lg" />
          <div>
            <h1 className="text-4xl mb-2">{poet.nameAr}</h1>
            <p className="text-[var(--muted)] text-sm">{poet.nameEn}</p>
            <div className="flex gap-3 mt-3">
              <span className="text-xs text-[var(--accent)] border border-[var(--border)] px-2 py-1 rounded">
                {poet.era}
              </span>
              {poet.birthYear && poet.deathYear && (
                <span className="text-xs text-[var(--muted)] border border-[var(--border)] px-2 py-1 rounded">
                  {poet.birthYear} - {poet.deathYear} م
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <ShareButtons
            url={`https://shi3r.com/poets/${poet.id}`}
            title={`${poet.nameAr} — مسامرات شعرية`}
            text={`اقرأ أشعار ${poet.nameAr} في مسامرات شعرية`}
          />
        </div>

        <div className="mb-8">
          <h2 className="text-lg text-[var(--accent)] mb-3">السيرة</h2>
          <p className="leading-relaxed text-sm">{poet.biographyAr}</p>
        </div>

        <div className="mb-10">
          <h2 className="text-lg text-[var(--accent)] mb-3">الأسلوب</h2>
          <p className="text-[var(--muted)] text-sm">{poet.styleNotes}</p>
        </div>

        {/* Verses */}
        {poetVerses.length > 0 && (
          <div>
            <p className="ornament text-center mb-6">❊</p>
            <h2 className="text-lg text-[var(--accent)] mb-6">
              من أشعاره ({poetVerses.length} بيت)
            </h2>
            <div className="space-y-6">
              {poetVerses.map((verse) => (
                <div
                  key={verse.id}
                  className="text-center py-4 border-b border-[var(--border)] last:border-0"
                >
                  <p className="verse-text text-lg">
                    {verse.firstHemistich}
                    <span className="hemistich-separator">✶</span>
                    {verse.secondHemistich}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
