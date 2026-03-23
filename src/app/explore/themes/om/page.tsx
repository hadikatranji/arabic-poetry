import Link from "next/link";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "شعر عن الأم — أجمل ما قاله الشعراء في الأمهات",
  description:
    "أجمل أبيات الشعر العربي عن الأم — من حافظ إبراهيم ومحمود درويش. الأم مدرسة، إلى أمّي، وأروع ما قيل في حبّ الأمهات. 5 أبيات مختارة مع شرح معانيها.",
  openGraph: {
    title: "شعر عن الأم | مسامرات شعرية",
    description:
      "أجمل أبيات الشعر العربي عن الأم — من حافظ إبراهيم ومحمود درويش. الأم مدرسة وإلى أمّي.",
  },
  alternates: {
    canonical: "https://shi3r.com/explore/themes/om",
  },
};

const OM_VERSES = [
  {
    h1: "الأُمُّ مَدْرَسَةٌ إِذَا أَعْدَدْتَهَا",
    h2: "أَعْدَدْتَ شَعْباً طَيِّبَ الأَعْرَاقِ",
    poet: "حافظ إبراهيم",
    poetId: 17,
    era: "حديث",
    source: "قصيدة مصر تتكلم عن نفسها",
    meaning:
      "أشهر بيت في تاريخ الشعر العربي عن الأم — تربية الأم الواعية هي الأساس الذي تُبنى عليه الشعوب، فالأمة لا تنهض إلا بأمّهاتها.",
  },
  {
    h1: "الأُمُّ رَوْضٌ إِنْ تَعَهَّدَهُ الحَيَا",
    h2: "بِالرِّيِّ أَوْرَقَ أَيَّمَا إِيرَاقِ",
    poet: "حافظ إبراهيم",
    poetId: 17,
    era: "حديث",
    source: "قصيدة مصر تتكلم عن نفسها",
    meaning:
      "الأم كالروضة الخضراء — إذا نالت التربية والرعاية ازدهرت وأثمرت أجيالاً تُثمر. الاستثمار في تعليم المرأة ثمرته أمّة بأكملها.",
  },
  {
    h1: "أَحِنُّ إِلَى خُبْزِ أُمِّي",
    h2: "وَقَهْوَةِ أُمِّي وَلَمْسَةِ أُمِّي",
    poet: "محمود درويش",
    poetId: 19,
    era: "حديث",
    source: "قصيدة إلى أمّي",
    meaning:
      "أشهر مطلع في الشعر الفلسطيني الحديث — درويش المنفيّ يحنُّ إلى أبسط تفاصيل الأمومة: خبزٌ ساخن، قهوةٌ في الصباح، ويدٌ دافئة. الأم هي الوطن الأول.",
  },
  {
    h1: "وَتَكْبُرُ فِيَّ الطُّفُولَةُ",
    h2: "يَوْماً عَلَى صَدْرِ أُمِّي",
    poet: "محمود درويش",
    poetId: 19,
    era: "حديث",
    source: "قصيدة إلى أمّي",
    meaning:
      "كلّما كبر الإنسان ازداد حنينه إلى أحضان أمّه — الطفولة لا تموت بل تنام في القلب وتستيقظ عند اشتداد الغربة والألم.",
  },
  {
    h1: "وَأَعْشَقُ عُمْرِي لِأَنِّي",
    h2: "إِذَا مُتُّ أَخْجَلُ مِنْ دُمُوعِ أُمِّي",
    poet: "محمود درويش",
    poetId: 19,
    era: "حديث",
    source: "قصيدة إلى أمّي",
    meaning:
      "ختام قصيدة «إلى أمّي» — درويش يُحبّ الحياة ليس لذاتها بل كي لا يُبكي أمّه. الأم هي السبب في التمسك بالوجود.",
  },
];

const ERA_COLORS: Record<string, string> = {
  جاهلي: "var(--gold)",
  أموي: "#4ade80",
  عباسي: "#f87171",
  حديث: "#60a5fa",
};

export default function OmThemePage() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-8" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <Link
          href="/explore/themes"
          className="text-[var(--muted)] hover:text-[var(--fg)] text-sm"
        >
          ← الأغراض
        </Link>
        <h1 className="text-3xl">شعر عن الأم</h1>
        <ThemeToggle />
      </div>

      {/* Intro */}
      <div className="mb-8 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md">
        <p className="text-[var(--muted)] leading-relaxed text-sm">
          لم يُنصف الشعر العربي شيئاً كما أنصف الأم — فهي الوطن الأول، والمدرسة
          الأعمق، والحنين الذي لا يهدأ. من حافظ إبراهيم الذي جعل منها مدرسةً
          للأمم، إلى محمود درويش الذي جعل شوقه إليها خبزاً وقهوةً ولمسةً —
          هنا أجمل ما قاله الشعراء في حقّ الأمهات.
        </p>
        <p className="text-xs mt-3" style={{ color: "var(--gold)" }}>
          {OM_VERSES.length} أبيات مختارة
        </p>
      </div>

      {/* Verses */}
      <div className="space-y-6">
        {OM_VERSES.map((verse, i) => (
          <article
            key={i}
            className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md"
          >
            <p className="verse-text text-lg text-center mb-4 leading-loose">
              {verse.h1}
              <span
                className="mx-3 opacity-40"
                style={{ color: "var(--gold)" }}
              >
                ✦
              </span>
              {verse.h2}
            </p>
            <div className="flex items-center justify-between text-xs text-[var(--muted)] mb-3">
              <div className="flex items-center gap-3">
                <Link
                  href={`/poets/${verse.poetId}`}
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  — {verse.poet}
                </Link>
                <span className="opacity-50">|</span>
                <span className="opacity-70">{verse.source}</span>
              </div>
              <span
                className="px-2 py-0.5 rounded-full text-[10px]"
                style={{
                  color: ERA_COLORS[verse.era] ?? "var(--muted)",
                  border: `1px solid ${ERA_COLORS[verse.era] ?? "var(--border)"}`,
                }}
              >
                {verse.era}
              </span>
            </div>
            <p className="text-[var(--muted)] text-sm leading-relaxed border-t border-[var(--border)] pt-3">
              <span className="text-[var(--fg)] font-medium">المعنى: </span>
              {verse.meaning}
            </p>
          </article>
        ))}
      </div>

      {/* Share */}
      <div className="mt-10">
        <ShareButtons
          url="https://shi3r.com/explore/themes/om"
          title="شعر عن الأم — أجمل ما قاله الشعراء في الأمهات"
          text="أجمل أبيات الشعر العربي عن الأم — الأم مدرسة لحافظ إبراهيم وإلى أمّي لمحمود درويش"
        />
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-between text-sm">
        <Link
          href="/explore/themes"
          className="text-[var(--muted)] hover:text-[var(--fg)]"
        >
          ← جميع الأغراض
        </Link>
        <Link
          href="/explore/themes/ghazal"
          className="text-[var(--muted)] hover:text-[var(--fg)]"
        >
          شعر الغزل ←
        </Link>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "شعر عن الأم — أجمل ما قاله الشعراء في الأمهات",
            description:
              "أجمل أبيات الشعر العربي عن الأم من حافظ إبراهيم ومحمود درويش",
            url: "https://shi3r.com/explore/themes/om",
            inLanguage: "ar",
            hasPart: OM_VERSES.map((v) => ({
              "@type": "CreativeWork",
              name: v.h1,
              text: `${v.h1} ${v.h2}`,
              author: {
                "@type": "Person",
                name: v.poet,
              },
              inLanguage: "ar",
            })),
          }),
        }}
      />
    </main>
  );
}
