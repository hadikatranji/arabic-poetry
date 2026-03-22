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
    desc: "شعر الحب والوجد والشوق — من عنترة ومجنون ليلى إلى نزار قباني",
    examples: ["مجنون ليلى", "عنترة بن شداد", "نزار قباني", "المتنبي"],
    color: "var(--accent)",
  },
  {
    name: "الفخر",
    nameEn: "Fakhr — Boasting & Pride",
    icon: "⚔️",
    desc: "الفخر بالنفس والقبيلة والشجاعة والكرم",
    examples: ["عنترة بن شداد", "الفرزدق", "جرير", "أبو فراس الحمداني"],
    color: "var(--gold)",
  },
  {
    name: "الحكمة",
    nameEn: "Hikmah — Wisdom",
    icon: "📜",
    desc: "أبيات الحكمة والتأمل في الحياة والإنسان",
    examples: ["زهير بن أبي سلمى", "المتنبي", "أبو العلاء المعري", "إيليا أبو ماضي"],
    color: "var(--muted)",
  },
  {
    name: "الرثاء",
    nameEn: "Ritha' — Elegy",
    icon: "🕊️",
    desc: "رثاء الأحبة والأبطال والمدن الضائعة",
    examples: ["أحمد شوقي", "محمود درويش", "جرير", "لبيد بن ربيعة"],
    color: "var(--muted)",
  },
  {
    name: "الوطنيات",
    nameEn: "Wataniyyat — Patriotic",
    icon: "🌙",
    desc: "شعر الوطن والهوية والانتماء — غرض أدبي يعبّر عن الارتباط بالأرض والذاكرة الجماعية",
    examples: ["أحمد شوقي", "حافظ إبراهيم", "محمود درويش", "نزار قباني"],
    color: "var(--accent)",
  },
  {
    name: "المدح",
    nameEn: "Madh — Panegyric",
    icon: "👑",
    desc: "مدح الملوك والأمراء والأبطال",
    examples: ["المتنبي", "البحتري", "أبو تمام", "النابغة الذبياني"],
    color: "var(--gold)",
  },
  {
    name: "الحماسة",
    nameEn: "Hamasa — Heroic Poetry",
    icon: "🗡️",
    desc: "شعر الحرب والبطولة والشجاعة في المعارك",
    examples: ["عنترة بن شداد", "أبو فراس الحمداني", "أبو تمام", "طرفة بن العبد"],
    color: "var(--gold)",
  },
  {
    name: "الوصف",
    nameEn: "Wasf — Descriptive",
    icon: "🌿",
    desc: "وصف الطبيعة والناقة والخيل والفصول",
    examples: ["امرؤ القيس", "البحتري", "أبو نواس", "زهير بن أبي سلمى"],
    color: "var(--muted)",
  },
  {
    name: "الزهد والتصوف",
    nameEn: "Zuhd — Ascetic Poetry",
    icon: "🌙",
    desc: "التأمل في الزوال والفناء والبُعد عن ملذات الدنيا — غرض أدبي فلسفي عميق",
    examples: ["أبو العلاء المعري", "أبو نواس", "لبيد بن ربيعة"],
    color: "var(--muted)",
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
            href={`/poems?theme=${encodeURIComponent(theme.name)}`}
            className="block p-6 bg-[var(--surface)] border border-[var(--border)] rounded-md hover:border-[var(--accent)] transition-all group"
          >
            <div className="flex items-start justify-between mb-2">
              <h2 className="text-xl group-hover:text-[var(--accent)] transition-colors">
                {theme.name}
              </h2>
              <span className="text-xs text-[var(--muted)] mt-1">
                {theme.nameEn}
              </span>
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
