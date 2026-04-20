import Link from "next/link";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import ShareButtons from "@/components/ShareButtons";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "أبيات الفخر في الشعر العربي",
  description:
    "أجمل أبيات الفخر والتبجّح في الشعر العربي — من المتنبي وأبو فراس الحمداني والفرزدق وجرير وعنترة بن شداد. 12+ بيت مختار مع شرح المعاني.",
  openGraph: {
    title: "أبيات الفخر في الشعر العربي | مسامرات شعرية",
    description:
      "أجمل أبيات الفخر والتبجّح في الشعر العربي — من المتنبي وأبو فراس الحمداني والفرزدق وجرير وعنترة.",
  },
  alternates: {
    canonical: "https://www.shi3r.com/explore/themes/fakhr",
  },
};

const FAKHR_VERSES = [
  {
    h1: "الخيل والليل والبيداء تعرفني",
    h2: "والسيف والرمح والقرطاس والقلمُ",
    poet: "المتنبي",
    poetId: 10,
    era: "عباسي",
    meaning:
      "يجمع المتنبي في هذا البيت بين الفروسية والأدب — يفخر بتفرده في الحرب والشعر والعلم معاً، لا يُبارى في ميدان ولا في قلم.",
  },
  {
    h1: "أنا الذي نظر الأعمى إلى أدبي",
    h2: "وأسمعت كلماتي من به صممُ",
    poet: "المتنبي",
    poetId: 10,
    era: "عباسي",
    meaning:
      "يفخر بأدبه الخارق المؤثر الذي أيقظ الحواس وأبهر العقول — أدبٌ يُبصره الأعمى ويسمعه الأصمّ.",
  },
  {
    h1: "أنام ملء جفوني عن شواردها",
    h2: "ويسهر الخلق جرّاها ويختصمُ",
    poet: "المتنبي",
    poetId: 10,
    era: "عباسي",
    meaning:
      "يطمئن إلى قيمة شعره وهو نائم، بينما يسهر الناس متجادلين في معانيه — ثقةٌ عميقة بالنفس والإبداع.",
  },
  {
    h1: "أعزّ مكانٍ في الدنى سرج سابحٍ",
    h2: "وخير جليسٍ في الزمان كتابُ",
    poet: "المتنبي",
    poetId: 10,
    era: "عباسي",
    meaning:
      "يفخر بأن أشرف مكانٍ هو صهوة الجواد، وأن خير الجلساء كتاب — جمعٌ بين الفروسية والعلم في قيمتين لا تُعلوهما قيمة.",
  },
  {
    h1: "سيذكرني قومي إذا جدّ جدّهم",
    h2: "وفي الليلة الظلماء يُفتقد البدرُ",
    poet: "أبو فراس الحمداني",
    poetId: 13,
    era: "عباسي",
    meaning:
      "يفخر بأن قومه لن يُدركوا قدره إلا حين تشتد الملمّات — كالبدر لا تُعرف قيمته إلا في ظلمة الليل.",
  },
  {
    h1: "ونحن أناسٌ لا توسّط عندنا",
    h2: "لنا الصدر دون العالمين أو القبرُ",
    poet: "أبو فراس الحمداني",
    poetId: 13,
    era: "عباسي",
    meaning:
      "فخرٌ صارم بالعزة والأنفة — إما الصدارة والعلو على الجميع وإما الموت. لا وسط بين العزّ والفناء.",
  },
  {
    h1: "إن الذي سمك السماء بنى لنا",
    h2: "بيتاً دعائمه أعزّ وأطولُ",
    poet: "الفرزدق",
    poetId: 9,
    era: "أموي",
    meaning:
      "يفخر بأن بيته ونسبه من البناء الرفيع كالسماء — دعائم شرفه أعزّ وأعلى من كل شرف، لا يُطال ولا يُبارى.",
  },
  {
    h1: "ألستم خير من ركب المطايا",
    h2: "وأندى العالمين بطون راحِ",
    poet: "جرير",
    poetId: 8,
    era: "أموي",
    meaning:
      "يفخر بقبيلته تميم ويعدّها خير الناس ركوباً وأغزرهم كرماً — الفخر بالانتساب إلى أشرف القبائل وأكرمها.",
  },
  {
    h1: "ومن لا يذد عن حوضه بسلاحه",
    h2: "يُهدَّم ومن لا يظلم الناس يُظلَمِ",
    poet: "زهير بن أبي سلمى",
    poetId: 3,
    era: "جاهلي",
    meaning:
      "الدفاع عن النفس والقبيلة واجب — من لا يحمي حوضه بسلاحه فُتح له باب الهوان، ومن لا يقتدر على الأذى أُوذي.",
  },
  {
    h1: "يخبّرك من شهد الوقيعة أنني",
    h2: "أغشى الوغى وأعفّ عند المغنمِ",
    poet: "عنترة بن شداد",
    poetId: 2,
    era: "جاهلي",
    meaning:
      "يفخر بشجاعته في المعركة وعفّته عند الغنيمة — شهادةٌ من رآه لا ادّعاء، وجمعٌ بين الشجاعة والنبل.",
  },
  {
    h1: "السيف أصدق إنباءً من الكتبِ",
    h2: "في حدّه الحدّ بين الجدّ واللعبِ",
    poet: "أبو تمام",
    poetId: 14,
    era: "عباسي",
    meaning:
      "يفخر بالبطولة والسيف، معتبراً إياه أصدق معلّم من الكتب — حدّ السيف هو الفيصل الحقيقي بين الجد والهزل.",
  },
  {
    h1: "ولا عيب فيهم غير أن سيوفهم",
    h2: "بهنّ فلولٌ من قراع الكتائبِ",
    poet: "النابغة الذبياني",
    poetId: 6,
    era: "جاهلي",
    meaning:
      "من أبلغ أساليب الفخر — يقول إن القوم لا عيب فيهم إلا أن سيوفهم تشقّقت من كثرة ضرب الأعداء، وهو فخرٌ في صورة عيب.",
  },
];

const ERA_COLORS: Record<string, string> = {
  جاهلي: "var(--gold)",
  أموي: "#4ade80",
  عباسي: "#f87171",
  حديث: "#60a5fa",
};

export default function FakhrThemePage() {
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
        <h1 className="text-3xl">الفخر</h1>
        <ThemeToggle />
      </div>

      {/* Intro */}
      <div className="mb-8 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md">
        <p className="text-[var(--muted)] leading-relaxed text-sm">
          الفخر غرضٌ شعري راسخ في الأدب العربي، يُعبّر فيه الشاعر عن اعتداده
          بنفسه وقبيلته وخصاله من شجاعةٍ وكرمٍ وحسب. من عنترة في الجاهلية إلى
          المتنبي في العصر العباسي، الفخر ليس تبجّحاً فارغاً بل إعلانٌ عن الهوية
          والقيم في وجه الزمن.
        </p>
        <p className="text-xs mt-3" style={{ color: "var(--gold)" }}>
          {FAKHR_VERSES.length} بيت مختار
        </p>
      </div>

      {/* Verses */}
      <div className="space-y-6">
        {FAKHR_VERSES.map((verse, i) => (
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
              <Link
                href={`/poets/${verse.poetId}`}
                className="hover:text-[var(--accent)] transition-colors"
              >
                — {verse.poet}
              </Link>
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
          url="https://www.shi3r.com/explore/themes/fakhr"
          title="أبيات الفخر في الشعر العربي"
          text="أجمل أبيات الفخر في الشعر العربي — من المتنبي وأبو فراس الحمداني والفرزدق وعنترة"
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
          href="/poems"
          className="text-[var(--muted)] hover:text-[var(--fg)]"
        >
          تصفّح كل الأبيات ←
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
            name: "أبيات الفخر في الشعر العربي",
            description:
              "أجمل أبيات الفخر والتبجّح في الشعر العربي من كبار الشعراء",
            url: "https://www.shi3r.com/explore/themes/fakhr",
            inLanguage: "ar",
            hasPart: FAKHR_VERSES.map((v) => ({
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
