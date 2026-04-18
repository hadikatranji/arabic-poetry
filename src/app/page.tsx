import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import Disclaimer from "@/components/Disclaimer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "مسامرات شعرية",
  alternateName: "Poetry Nights — shi3r.com",
  description: "تعلّم الشعر العربي وتحدَّ نفسك في المساجلة الشعرية",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  inLanguage: "ar",
  url: "https://www.shi3r.com",
  author: { "@type": "Person", name: "Hadi Katranji" },
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen flex flex-col items-center px-6 pt-20 pb-16">
        <div className="fixed top-5 left-5 z-20">
          <ThemeToggle />
        </div>

        <p className="ornament mb-6">٭ ٭ ٭</p>

        <h1 className="text-5xl md:text-7xl text-center mb-3 leading-tight">
          مسامرات شعرية
        </h1>

        <p className="text-center text-[var(--muted)] text-lg max-w-md leading-relaxed mb-4">
          أهلاً بك في مجلس الشعر
        </p>
        <p className="text-center text-[var(--muted)] text-sm max-w-sm leading-relaxed mb-16">
          تحدَّ نفسك في المساجلة، استكشف دواوين الشعراء، أو تعلّم المتون
        </p>

        {/* 4 Main Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-md w-full mb-20">
          <NavCard
            href="/musajalah"
            title="المساجلة"
            desc="مبارزة شعرية تفاعلية"
            highlight
          />
          <NavCard
            href="/explore"
            title="استكشف"
            desc="شعراء · أغراض · عصور"
          />
          <NavCard
            href="/learn"
            title="تعلّم"
            desc="متون · حفظ · تسميع"
          />
          <NavCard
            href="/blog"
            title="المدوّنة"
            desc="مقالات عن الشعر"
          />
        </div>

        <p className="ornament mb-8">❊</p>

        <div className="text-center max-w-lg">
          <p className="verse-text text-xl">
            على قدر أهل العزم تأتي العزائمُ
            <span className="hemistich-separator">✶</span>
            وتأتي على قدر الكرام المكارمُ
          </p>
          <p className="text-[var(--muted)] text-xs mt-4">— المتنبي</p>
        </div>

        <div className="w-full max-w-md mt-8">
          <Disclaimer />
        </div>
      </main>
    </>
  );
}

function NavCard({
  href,
  title,
  desc,
  highlight,
}: {
  href: string;
  title: string;
  desc: string;
  highlight?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`block px-6 py-5 border rounded-md transition-all group ${
        highlight
          ? "border-[var(--accent)] bg-[var(--surface)]"
          : "border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--surface)]"
      }`}
    >
      <h2 className="text-2xl group-hover:text-[var(--accent)] transition-colors">
        {title}
      </h2>
      <p className="text-sm text-[var(--muted)] mt-1">{desc}</p>
    </Link>
  );
}
