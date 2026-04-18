import Link from "next/link";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import ShareButtons from "@/components/ShareButtons";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "شعر الرثاء — أجمل قصائد الحزن والفقد في الأدب العربي",
  description:
    "أجمل أبيات الرثاء في الشعر العربي — من الخنساء في رثاء صخر وأبو ذؤيب الهذلي وأبو تمام وأحمد شوقي. 10 أبيات مختارة مع شرح معانيها.",
  openGraph: {
    title: "شعر الرثاء — أجمل قصائد الحزن والفقد | مسامرات شعرية",
    description:
      "أجمل أبيات الرثاء في الشعر العربي — من الخنساء وأبو تمام وأحمد شوقي وابن الرومي. قصائد الحزن والفقد عبر العصور.",
  },
  alternates: {
    canonical: "https://www.shi3r.com/explore/themes/ritha",
  },
};

const RITHA_VERSES = [
  // الخنساء — رثاء أخيها صخر
  {
    h1: "يذكّرني طلوع الشمس صخرا",
    h2: "وأذكره لكلّ غروب شمسِ",
    poet: "الخنساء",
    poetId: 25,
    era: "جاهلي",
    meaning:
      "مع كل شروق ومع كل غروب تتذكّر الخنساء أخاها الراحل — الفقد يصاحبها في كل لحظة من لحظات اليوم.",
  },
  {
    h1: "وإن صخراً لتأتمّ الهداة به",
    h2: "كأنه علمٌ في رأسه نارُ",
    poet: "الخنساء",
    poetId: 25,
    era: "جاهلي",
    meaning:
      "كان صخر المرشد الذي يهتدي به الناس كأنه منارة مضاءة في الظلام — صورة فريدة في الرثاء العربي.",
  },
  {
    h1: "أعيني جودا ولا تجمدا",
    h2: "ألا تبكيان لصخر الندى",
    poet: "الخنساء",
    poetId: 25,
    era: "جاهلي",
    meaning:
      "تطلب الخنساء من عينيها ألّا تجفّا بعد رحيل أخيها الكريم، فهو أهل لأن تفيض الدموع عليه.",
  },
  // أبو ذؤيب الهذلي — رثاء أبنائه
  {
    h1: "أمِن المنونِ وريبِها تتوجّعُ",
    h2: "والدهرُ ليس بمعتبٍ من يجزعُ",
    poet: "أبو ذؤيب الهذلي",
    poetId: null,
    era: "جاهلي",
    meaning:
      "هل تشكو من صروف الدهر وقسوة الموت؟ والحقيقة أن الزمن لا يعبأ بأحزان أحد ولا يعوّض فاقداً بجزعه.",
  },
  {
    h1: "وإذا المنيّةُ أنشبت أظفارَها",
    h2: "ألفيتَ كلَّ تميمةٍ لا تنفعُ",
    poet: "أبو ذؤيب الهذلي",
    poetId: null,
    era: "جاهلي",
    meaning:
      "حين تمسك المنيّة بأحد لا تنفع التمائم والأدعية — الموت حكمٌ لا مردّ له، وهذا قمّة الرثاء الجاهلي.",
  },
  // أبو تمام — رثاء محمد بن حميد الطوسي
  {
    h1: "كذا فليجلَّ الخطبُ وليفدح الأمرُ",
    h2: "فليس لعينٍ لم يفض ماؤها عذرُ",
    poet: "أبو تمام",
    poetId: 14,
    era: "عباسي",
    meaning:
      "المصيبة الحقيقية هكذا تكون عظيمة جليلة — من لم تفض دموعه على هذا الرحيل فلا يقبل منه العذر.",
  },
  {
    h1: "توفّيت الآمالُ بعد محمّدٍ",
    h2: "وأصبح في شغلٍ عن السفر السفرُ",
    poet: "أبو تمام",
    poetId: 14,
    era: "عباسي",
    meaning:
      "مع رحيل محمد بن حميد انطفأت كل الآمال المعقودة عليه، وأصبح حتى المسافرون في حيرة وذهول عن أسفارهم.",
  },
  // ابن الرومي — رثاء ولده
  {
    h1: "بُكاؤكما يشفي وإن كان لا يُجدي",
    h2: "فجودا فإن الدمع يُقطع للوجدِ",
    poet: "ابن الرومي",
    poetId: 32,
    era: "عباسي",
    meaning:
      "يخاطب ابن الرومي عينيه في رثاء ولده: البكاء يشفي قليلاً حتى لو لم يردّ الفقيد، فأجودا بالدموع لتخفيف الوجد.",
  },
  // أحمد شوقي — رثاء (من قصيدة موت ليلى)
  {
    h1: "لكلّ شيءٍ إذا ما تمَّ نقصانُ",
    h2: "فلا يُغرَّ بطيب العيش إنسانُ",
    poet: "أحمد شوقي",
    poetId: 16,
    era: "حديث",
    meaning:
      "في كل كمالٍ نقصان وفي كل فرح بذرة الحزن — شوقي يصوغ في مطلع رثائه حكمة دورة الوجود كلها.",
  },
  {
    h1: "هي الأمور كما شاهدتها دُوَلٌ",
    h2: "من سرَّه زمنٌ ساءَتهُ أزمانُ",
    poet: "أحمد شوقي",
    poetId: 16,
    era: "حديث",
    meaning:
      "الدهر يتقلّب بين السراء والضراء — من أسعده الزمن يوماً نالته المحن في أيام أخرى، فلا دوام إلا لله.",
  },
];

const ERA_COLORS: Record<string, string> = {
  جاهلي: "var(--gold)",
  أموي: "#4ade80",
  عباسي: "#f87171",
  حديث: "#60a5fa",
};

export default function RithaThemePage() {
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
        <h1 className="text-3xl">الرثاء</h1>
        <ThemeToggle />
      </div>

      {/* Intro */}
      <div className="mb-8 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md">
        <p className="text-[var(--muted)] leading-relaxed text-sm">
          الرثاء غرضٌ من أعرق أغراض الشعر العربي وأشدّها تأثيراً في النفوس —
          يُعبّر فيه الشاعر عن الفقد والحزن ويُخلّد ذكرى الراحلين. من الخنساء
          التي بكت أخاها صخراً حتى صارت بكاؤها ضرباً من المثل، إلى أبو ذؤيب
          الهذلي في رثاء أبنائه، إلى أبو تمام وأحمد شوقي — هنا أجمل ما قيل في
          الفقد عبر عصور الشعر العربي.
        </p>
        <p className="text-xs mt-3" style={{ color: "var(--gold)" }}>
          {RITHA_VERSES.length} بيت مختار
        </p>
      </div>

      {/* Verses */}
      <div className="space-y-6">
        {RITHA_VERSES.map((verse, i) => (
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
              {verse.poetId ? (
                <Link
                  href={`/poets/${verse.poetId}`}
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  — {verse.poet}
                </Link>
              ) : (
                <span>— {verse.poet}</span>
              )}
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
          url="https://www.shi3r.com/explore/themes/ritha"
          title="شعر الرثاء — أجمل قصائد الحزن والفقد في الشعر العربي"
          text="أجمل أبيات الرثاء في الشعر العربي — من الخنساء وأبو تمام وأحمد شوقي"
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
            name: "شعر الرثاء — أجمل قصائد الحزن والفقد في الأدب العربي",
            description:
              "أجمل أبيات الرثاء في الشعر العربي من الخنساء وأبو ذؤيب الهذلي وأبو تمام وأحمد شوقي وابن الرومي",
            url: "https://www.shi3r.com/explore/themes/ritha",
            inLanguage: "ar",
            keywords:
              "شعر الرثاء, قصائد الرثاء, رثاء عربي, الخنساء, أبو تمام, أحمد شوقي",
            hasPart: RITHA_VERSES.map((v) => ({
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
