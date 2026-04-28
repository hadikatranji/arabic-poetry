import Link from "next/link";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "الأغراض الشعرية",
  description:
    "تصفّح الشعر العربي حسب الغرض — غزل، فخر، حكمة، رثاء، وطنيات، مدح، حماسة وأكثر",
  openGraph: {
    title: "الأغراض الشعرية | مسامرات شعرية",
    description:
      "تصفّح الشعر العربي حسب الغرض — غزل، فخر، حكمة، رثاء، وطنيات ومدح",
  },
};

const THEMES = [
  {
    name: "الغزل",
    nameEn: "Ghazal — Love Poetry",
    icon: "🌹",
    href: "/explore/themes/ghazal",
    desc: "شعر الحب والوجد والشوق — من عنترة ومجنون ليلى إلى نزار قباني",
    examples: ["مجنون ليلى", "عنترة بن شداد", "نزار قباني", "المتنبي"],
    color: "var(--accent)",
    dedicated: true,
  },
  {
    name: "الفخر",
    nameEn: "Fakhr — Boasting & Pride",
    icon: "⚔️",
    href: "/explore/themes/fakhr",
    desc: "الفخر بالنفس والقبيلة والشجاعة والكرم",
    examples: ["عنترة بن شداد", "الفرزدق", "جرير", "أبو فراس الحمداني"],
    color: "var(--gold)",
    dedicated: true,
  },
  {
    name: "الحكمة",
    nameEn: "Hikmah — Wisdom",
    icon: "📜",
    href: "/explore/themes/hikma",
    desc: "أبيات الحكمة والتأمل في الحياة والإنسان",
    examples: ["زهير بن أبي سلمى", "المتنبي", "أبو العلاء المعري", "إيليا أبو ماضي"],
    color: "var(--gold)",
    dedicated: true,
  },
  {
    name: "الرثاء",
    nameEn: "Ritha' — Elegy",
    icon: "🕊️",
    href: "/explore/themes/ritha",
    desc: "رثاء الأحبة والأبطال والمدن الضائعة — من الخنساء في رثاء صخر إلى أبو تمام وأحمد شوقي",
    examples: ["الخنساء", "أبو ذؤيب الهذلي", "أبو تمام", "أحمد شوقي"],
    color: "var(--muted)",
    dedicated: true,
  },
  {
    name: "شعر الأم",
    nameEn: "Poetry of Motherhood",
    icon: "🤍",
    href: "/explore/themes/om",
    desc: "أجمل ما قاله الشعراء العرب في الأم — من حافظ إبراهيم 'الأم مدرسة' إلى درويش 'أحنّ إلى خبز أمي'",
    examples: ["حافظ إبراهيم", "محمود درويش", "نزار قباني", "أحمد شوقي"],
    color: "#60a5fa",
    dedicated: true,
  },
  {
    name: "الوطنيات",
    nameEn: "Wataniyyat — Patriotic",
    icon: "🌙",
    href: "/explore/themes/wataniyyat",
    desc: "شعر الوطن والهوية والانتماء — من الشابي وشوقي وحافظ إبراهيم إلى محمود درويش",
    examples: ["أبو القاسم الشابي", "أحمد شوقي", "محمود درويش", "حافظ إبراهيم"],
    color: "var(--accent)",
    dedicated: true,
  },
  {
    name: "المدح",
    nameEn: "Madh — Panegyric",
    icon: "👑",
    href: `/poems?theme=${encodeURIComponent("المدح")}`,
    desc: "مدح الملوك والأمراء والأبطال",
    examples: ["المتنبي", "البحتري", "أبو تمام", "النابغة الذبياني"],
    color: "var(--gold)",
    dedicated: false,
  },
  {
    name: "الحماسة",
    nameEn: "Hamasa — Heroic Poetry",
    icon: "🗡️",
    href: `/poems?theme=${encodeURIComponent("الحماسة")}`,
    desc: "شعر الحرب والبطولة والشجاعة في المعارك",
    examples: ["عنترة بن شداد", "أبو فراس الحمداني", "أبو تمام", "طرفة بن العبد"],
    color: "var(--gold)",
    dedicated: false,
  },
  {
    name: "الوصف",
    nameEn: "Wasf — Descriptive",
    icon: "🌿",
    href: `/poems?theme=${encodeURIComponent("الوصف")}`,
    desc: "وصف الطبيعة والناقة والخيل والفصول",
    examples: ["امرؤ القيس", "البحتري", "أبو نواس", "زهير بن أبي سلمى"],
    color: "var(--muted)",
    dedicated: false,
  },
  {
    name: "الزهد والتصوف",
    nameEn: "Zuhd — Ascetic Poetry",
    icon: "🌙",
    href: "/explore/themes/zuhd",
    desc: "التأمل في الزوال والفناء والبُعد عن ملذات الدنيا — من أبي العتاهية والإمام الشافعي",
    examples: ["أبو العتاهية", "الإمام الشافعي", "الإمام علي بن أبي طالب"],
    color: "var(--muted)",
    dedicated: true,
  },
  {
    name: "الشعر الأندلسي",
    nameEn: "Andalusian Poetry",
    icon: "🌸",
    href: "/explore/themes/andalusi",
    desc: "روائع شعراء الأندلس في الحب والطبيعة والحنين — من قرطبة إلى غرناطة",
    examples: ["ابن زيدون", "ابن حزم الأندلسي", "ابن خفاجة"],
    color: "#5c3d7a",
    dedicated: true,
  },
  {
    name: "المدح النبوي",
    nameEn: "Prophetic Praise Poetry",
    icon: "☪️",
    href: "/explore/themes/madh-nabawi",
    desc: "أجمل ما قاله الشعراء في مدح النبي ﷺ — من البردة الشريفة وبانت سعاد إلى نهج البردة",
    examples: ["البوصيري", "حسان بن ثابت", "كعب بن زهير", "أحمد شوقي"],
    color: "var(--gold)",
    dedicated: true,
  },
];

export default function ThemesPage() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-10">
        <Link
          href="/explore"
          className="text-[var(--muted)] hover:text-[var(--fg)] text-sm"
        >
          العودة
        </Link>
        <h1 className="text-3xl">الأغراض الشعرية</h1>
        <ThemeToggle />
      </div>

      <p className="text-[var(--muted)] text-sm mb-8 leading-relaxed">
        الشعر العربي غني بأغراضه المتنوعة — تصفّح الأغراض الشعرية الكلاسيكية
        وتعرّف على أبرز شعراء كل غرض
      </p>

      <div className="space-y-4">
        {THEMES.map((theme) => (
          <Link
            key={theme.name}
            href={theme.href}
            className="block p-6 bg-[var(--surface)] border border-[var(--border)] rounded-md hover:border-[var(--accent)] transition-all group"
          >
            <div className="flex items-start justify-between mb-2">
              <h2 className="text-xl group-hover:text-[var(--accent)] transition-colors">
                {theme.name}
              </h2>
              <div className="flex items-center gap-2">
                {theme.dedicated && (
                  <span
                    className="text-xs px-2 py-0.5 rounded-full border"
                    style={{ color: "var(--gold)", borderColor: "var(--gold)" }}
                  >
                    صفحة مخصصة
                  </span>
                )}
                <span className="text-xs text-[var(--muted)] mt-1">
                  {theme.nameEn}
                </span>
              </div>
            </div>
            <p className="text-sm text-[var(--muted)] mb-3 leading-relaxed">
              {theme.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {theme.examples.map((poet) => (
                <span
                  key={poet}
                  className="text-xs text-[var(--muted)] border border-[var(--border)] px-2 py-0.5 rounded"
                >
                  {poet}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/poets"
          className="inline-block text-sm text-[var(--accent)] border border-[var(--accent)] px-6 py-2 rounded hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all"
        >
          تصفّح الشعراء ←
        </Link>
      </div>

      <Disclaimer />
    </main>
  );
}
