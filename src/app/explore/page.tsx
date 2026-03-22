import Link from "next/link";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "استكشف الشعر العربي",
  description:
    "تصفّح الشعر العربي حسب الشاعر أو الغرض أو العصر — 20 شاعراً من الجاهلية إلى العصر الحديث",
};

const SECTIONS = [
  {
    href: "/poets",
    title: "الشعراء",
    desc: "20 شاعراً من الجاهلية إلى العصر الحديث — سيرهم وأشعارهم",
  },
  {
    href: "/poems",
    title: "الأبيات",
    desc: "تصفّح 120+ بيت وابحث في الشعر العربي",
  },
  {
    href: "/explore/themes",
    title: "الأغراض الشعرية",
    desc: "غزل · فخر · حكمة · رثاء · وطنيات · مدح",
  },
];

export default function ExplorePage() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-10">
        <Link href="/" className="text-[var(--muted)] hover:text-[var(--fg)] text-sm">
          العودة
        </Link>
        <h1 className="text-3xl">استكشف</h1>
        <ThemeToggle />
      </div>

      <p className="text-[var(--muted)] text-sm mb-8">
        تصفّح الشعر العربي حسب الشاعر أو الغرض أو العصر
      </p>

      <div className="space-y-4">
        {SECTIONS.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="block p-6 bg-[var(--surface)] border border-[var(--border)] rounded-md hover:border-[var(--accent)] transition-all"
          >
            <h2 className="text-xl mb-1">{s.title}</h2>
            <p className="text-sm text-[var(--muted)]">{s.desc}</p>
          </Link>
        ))}
      </div>

      <Disclaimer />
    </main>
  );
}
