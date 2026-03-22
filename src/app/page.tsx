import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

// JSON-LD structured data for search engines
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "مسامرات شعرية",
  alternateName: "Poetry Nights",
  description:
    "تعلّم الشعر العربي وتحدَّ نفسك في المساجلة الشعرية — 20 شاعراً و120+ بيت",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  inLanguage: "ar",
  author: {
    "@type": "Person",
    name: "Hadi Katranji",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen flex flex-col items-center px-6 pt-20 pb-16">
        {/* Theme toggle */}
        <div className="fixed top-5 left-5 z-20">
          <ThemeToggle />
        </div>

        {/* Ornament */}
        <p className="ornament mb-6">٭ ٭ ٭</p>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl text-center mb-3 leading-tight">
          مسامرات شعرية
        </h1>

        {/* Welcome */}
        <p className="text-center text-[var(--muted)] text-lg max-w-md leading-relaxed mb-4">
          أهلاً بك في مجلس الشعر
        </p>
        <p className="text-center text-[var(--muted)] text-sm max-w-sm leading-relaxed mb-16">
          تصفّح دواوين الشعراء، احفظ الأبيات، أو ادخل المساجلة وتحدَّ نفسك
        </p>

        {/* Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-md w-full mb-20">
          <NavCard href="/musajalah" title="المساجلة" desc="مبارزة شعرية" />
          <NavCard href="/poets" title="الشعراء" desc="حياتهم وأشعارهم" />
          <NavCard href="/memorize" title="الحفظ" desc="تسميع تفاعلي" />
          <NavCard href="/poems" title="الأبيات" desc="تصفّح وابحث" />
          <NavCard href="/blog" title="المدوّنة" desc="مقالات عن الشعر" />
        </div>

        {/* Ornament */}
        <p className="ornament mb-8">❊</p>

        {/* A verse */}
        <div className="text-center max-w-lg">
          <p className="verse-text text-xl">
            على قدر أهل العزم تأتي العزائمُ
            <span className="hemistich-separator">✶</span>
            وتأتي على قدر الكرام المكارمُ
          </p>
          <p className="text-[var(--muted)] text-xs mt-4">— المتنبي</p>
        </div>
      </main>
    </>
  );
}

function NavCard({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="block px-6 py-5 border border-[var(--border)] rounded-md hover:border-[var(--accent)] hover:bg-[var(--surface)] transition-all group"
    >
      <h2 className="text-2xl group-hover:text-[var(--accent)] transition-colors">{title}</h2>
      <p className="text-sm text-[var(--muted)] mt-1">{desc}</p>
    </Link>
  );
}
