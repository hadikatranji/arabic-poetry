import Link from "next/link";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import PoetAvatar from "@/components/PoetAvatar";
import Disclaimer from "@/components/Disclaimer";
import { getPoetsByEra } from "@/lib/sample-poets";

export const metadata: Metadata = {
  title: "الشعراء",
  description:
    "تصفّح سيرة أعظم شعراء العربية من الجاهلية إلى العصر الحديث — 20 شاعراً مع أشعارهم",
  openGraph: {
    title: "الشعراء | مسامرات شعرية",
    description: "تصفّح سيرة أعظم شعراء العربية من الجاهلية إلى العصر الحديث",
  },
};

const ERA_LABELS: Record<string, string> = {
  "جاهلي": "العصر الجاهلي",
  "أموي": "العصر الأموي",
  "عباسي": "العصر العباسي",
  "حديث": "العصر الحديث",
};

export default function PoetsPage() {
  const poetsByEra = getPoetsByEra();

  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-10">
        <Link href="/" className="text-[var(--muted)] hover:text-[var(--fg)] text-sm">
          العودة
        </Link>
        <h1 className="text-3xl">الشعراء</h1>
        <ThemeToggle />
      </div>

      {Object.entries(poetsByEra).map(([era, poets]) => (
        <section key={era} className="mb-12">
          <h2 className="text-xl text-[var(--accent)] mb-4 pb-2 border-b border-[var(--border)]">
            {ERA_LABELS[era] || era}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {poets.map((poet) => (
              <Link
                key={poet.id}
                href={`/poets/${poet.id}`}
                className="flex items-start gap-4 p-5 bg-[var(--surface)] rounded-md border border-[var(--border)] hover:border-[var(--accent)] transition-all"
              >
                <PoetAvatar name={poet.nameAr} era={poet.era} poetId={poet.id} size="md" />
                <div className="min-w-0">
                  <h3 className="text-lg">{poet.nameAr}</h3>
                  <p className="text-xs text-[var(--muted)] mt-1">{poet.nameEn}</p>
                  <p className="text-sm text-[var(--muted)] mt-2 line-clamp-2 leading-relaxed">
                    {poet.biographyAr}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <Disclaimer />
    </main>
  );
}
