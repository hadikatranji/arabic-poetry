import Link from "next/link";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import ShareButtons from "@/components/ShareButtons";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "شعر في مدح النبي ﷺ — أجمل قصائد المدح النبوي",
  description:
    "أجمل ما قاله الشعراء العرب في مدح النبي محمد ﷺ — من البردة الشريفة للبوصيري وبانت سعاد لكعب بن زهير إلى نهج البردة لأحمد شوقي. 10 أبيات مختارة مع المعاني.",
  openGraph: {
    title: "شعر في مدح النبي ﷺ | مسامرات شعرية",
    description:
      "أجمل ما قاله الشعراء في مدح النبي ﷺ — البوصيري وحسان بن ثابت وكعب بن زهير وأحمد شوقي.",
  },
  alternates: {
    canonical: "https://www.shi3r.com/explore/themes/madh-nabawi",
  },
};

const MADH_VERSES = [
  // ============================================================
  // البوصيري — البردة الشريفة
  // ============================================================
  {
    h1: "أمن تذكّر جيرانٍ بذي سلمِ",
    h2: "مزجت دمعاً جرى من مقلةٍ بدمِ",
    poet: "البوصيري",
    poetId: 23,
    era: "عباسي",
    source: "البردة الشريفة",
    meaning:
      "مطلع البردة الشريفة — يصف البوصيري شوقه وتعلّقه بذكر النبي ﷺ حتى مزج دموع الحنين بدم الوجد.",
  },
  {
    h1: "محمدٌ سيّد الكونين والثقلين",
    h2: "والفريقين من عربٍ ومن عجمِ",
    poet: "البوصيري",
    poetId: 23,
    era: "عباسي",
    source: "البردة الشريفة",
    meaning:
      "النبي ﷺ سيّد جميع الخلق — الإنس والجن، العرب والعجم، الدنيا والآخرة.",
  },
  {
    h1: "هو الحبيب الذي تُرجى شفاعتُه",
    h2: "لكل هولٍ من الأهوال مقتحمِ",
    poet: "البوصيري",
    poetId: 23,
    era: "عباسي",
    source: "البردة الشريفة",
    meaning:
      "النبي ﷺ الشفيع الأعظم الذي يُرتجى لكل موقف عظيم مهول يوم الحساب.",
  },
  // ============================================================
  // حسان بن ثابت — شاعر النبي ﷺ
  // ============================================================
  {
    h1: "وأحسن منك لم تر قطّ عيني",
    h2: "وأجمل منك لم تلد النساءُ",
    poet: "حسان بن ثابت",
    poetId: 47,
    era: "إسلامي",
    source: "في مدح النبي ﷺ",
    meaning:
      "شهادة شاعر النبي ﷺ أنّ عينيه لم تريا أجمل منه ولا ولدت أمٌّ ما يضاهيه في الحسن.",
  },
  {
    h1: "خُلقت مبرّأً من كل عيبٍ",
    h2: "كأنّك قد خُلقت كما تشاءُ",
    poet: "حسان بن ثابت",
    poetId: 47,
    era: "إسلامي",
    source: "في مدح النبي ﷺ",
    meaning:
      "خُلق النبي ﷺ كاملاً منزّهاً عن كل نقص أو عيب، كأنّه هو من اختار صورته وجماله وخُلُقه.",
  },
  // ============================================================
  // كعب بن زهير — بانت سعاد
  // ============================================================
  {
    h1: "بانت سعاد فقلبي اليوم متبولُ",
    h2: "مُتيَّمٌ إثرها لم يُفدَ مكبولُ",
    poet: "كعب بن زهير",
    poetId: 48,
    era: "إسلامي",
    source: "بانت سعاد",
    meaning:
      "مطلع القصيدة الذهبية التي أُنشدت بين يدي النبي ﷺ فخلع عليه بردته الشريفة — وهي من أشهر قصائد العربية.",
  },
  {
    h1: "إنّ الرسول لنورٌ يُستضاء به",
    h2: "مهنَّدٌ من سيوف الله مسلولُ",
    poet: "كعب بن زهير",
    poetId: 48,
    era: "إسلامي",
    source: "بانت سعاد",
    meaning:
      "النبي ﷺ نورٌ يُهتدى به في الظلمات، وسيفٌ قاطع من سيوف الله في الحق لا يُردّ.",
  },
  // ============================================================
  // أحمد شوقي — نهج البردة
  // ============================================================
  {
    h1: "وُلد الهدى فالكائنات ضياءُ",
    h2: "وفم الزمان تبسُّمٌ وثناءُ",
    poet: "أحمد شوقي",
    poetId: 16,
    era: "حديث",
    source: "نهج البردة",
    meaning:
      "في مولد النبي ﷺ أشرقت الكائنات كلّها نوراً، وابتسم الزمان بشارةً بالهدى القادم.",
  },
  // ============================================================
  // الإمام الشافعي — في آل بيت النبي ﷺ
  // ============================================================
  {
    h1: "آل النبيّ ذريعتي",
    h2: "وهم إليه وسيلتي",
    poet: "الإمام الشافعي",
    poetId: 22,
    era: "عباسي",
    source: "في آل البيت النبوي",
    meaning:
      "يجعل الإمام الشافعي آل بيت النبي ﷺ واسطته وذريعته إلى الله في الدنيا والآخرة.",
  },
  {
    h1: "أرجو بهم أُعطى غداً",
    h2: "بيد اليمين صحيفتي",
    poet: "الإمام الشافعي",
    poetId: 22,
    era: "عباسي",
    source: "في آل البيت النبوي",
    meaning:
      "يأمل الشافعي أن تُعطى صحيفة أعماله باليمين يوم الحساب بفضل محبّته لآل بيت النبي ﷺ.",
  },
];

const ERA_COLORS: Record<string, string> = {
  جاهلي: "var(--gold)",
  إسلامي: "#34d399",
  أموي: "#4ade80",
  عباسي: "#f87171",
  أندلسي: "#a78bfa",
  حديث: "#60a5fa",
};

export default function MadhNabawiPage() {
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
        <h1 className="text-3xl">المدح النبوي</h1>
        <ThemeToggle />
      </div>

      {/* Intro */}
      <div className="mb-8 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md">
        <p className="text-[var(--muted)] leading-relaxed text-sm">
          المدح النبوي غرضٌ شعري رفيع في الأدب العربي، يتجاوز مدح البشر إلى
          التعبير عن الحبّ الإلهي في أسمى صوره. من حسان بن ثابت شاعر النبي ﷺ
          وكعب بن زهير في &ldquo;بانت سعاد&rdquo;، إلى البوصيري في &ldquo;البردة الشريفة&rdquo;
          وأحمد شوقي في &ldquo;نهج البردة&rdquo; — تتوالى القصائد جيلاً بعد جيل شوقاً
          وحنيناً إلى خير الأنام.
        </p>
        <p className="text-xs mt-3" style={{ color: "var(--gold)" }}>
          {MADH_VERSES.length} بيت مختار
        </p>
      </div>

      {/* Verses */}
      <div className="space-y-6">
        {MADH_VERSES.map((verse, i) => (
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
              <div className="flex items-center gap-2">
                <Link
                  href={`/poets/${verse.poetId}`}
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  — {verse.poet}
                </Link>
                <span className="opacity-50">·</span>
                <span className="italic opacity-70">{verse.source}</span>
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
          url="https://www.shi3r.com/explore/themes/madh-nabawi"
          title="شعر في مدح النبي ﷺ — أجمل قصائد المدح النبوي"
          text="أجمل ما قاله الشعراء في مدح النبي ﷺ — من البردة الشريفة إلى بانت سعاد"
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
          href="/poets"
          className="text-[var(--muted)] hover:text-[var(--fg)]"
        >
          تصفّح الشعراء ←
        </Link>
      </div>

      <Disclaimer />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "شعر في مدح النبي ﷺ — أجمل قصائد المدح النبوي",
            description:
              "أجمل ما قاله الشعراء العرب في مدح النبي محمد ﷺ من البردة الشريفة وبانت سعاد ونهج البردة",
            url: "https://www.shi3r.com/explore/themes/madh-nabawi",
            inLanguage: "ar",
            hasPart: MADH_VERSES.map((v) => ({
              "@type": "CreativeWork",
              name: v.h1,
              text: `${v.h1} ${v.h2}`,
              isPartOf: v.source,
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
