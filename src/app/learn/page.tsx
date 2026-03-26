import Link from "next/link";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import Disclaimer from "@/components/Disclaimer";
import { MUTOON } from "@/lib/mutoon-data";

export const metadata: Metadata = {
  title: "تعلّم الشعر والمتون",
  description:
    "تعلّم واحفظ المتون العلمية والشعر العربي — تحفة الأطفال، الجزرية، ألفية ابن مالك، البردة، مع تسميع تفاعلي",
  openGraph: {
    title: "تعلّم الشعر والمتون | مسامرات شعرية",
    description: "تعلّم واحفظ المتون العلمية والشعر العربي مع تسميع تفاعلي",
  },
};

export default function LearnPage() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-10">
        <Link href="/" className="text-[var(--muted)] hover:text-[var(--fg)] text-sm">
          العودة
        </Link>
        <h1 className="text-3xl">تعلّم</h1>
        <ThemeToggle />
      </div>

      {/* Memorize */}
      <section className="mb-12">
        <Link
          href="/memorize"
          className="block p-6 bg-[var(--surface)] border border-[var(--border)] rounded-md hover:border-[var(--accent)] transition-all"
        >
          <h2 className="text-xl mb-1">الحفظ والتسميع</h2>
          <p className="text-sm text-[var(--muted)]">
            تمارين تفاعلية لحفظ الأبيات — كشف تدريجي وإكمال واختبار
          </p>
        </Link>
      </section>

      {/* Mutoon */}
      <section>
        <h2 className="text-xl text-[var(--accent)] mb-4 pb-2 border-b border-[var(--border)]">
          المتون العلمية
        </h2>
        <div className="space-y-4">
          {MUTOON.map((matn) => (
            <Link
              key={matn.slug}
              href={`/mutoon/${matn.slug}`}
              className="block p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md hover:border-[var(--accent)] transition-all"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg">{matn.title}</h3>
                  <p className="text-xs text-[var(--muted)] mt-1">
                    {matn.author} — {matn.subject}
                  </p>
                </div>
                <span className="text-xs text-[var(--accent)] border border-[var(--border)] px-2 py-1 rounded shrink-0">
                  {matn.verseCount} بيت
                </span>
              </div>
              <p className="text-sm text-[var(--muted)] mt-2">{matn.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <Disclaimer />
    </main>
  );
}
