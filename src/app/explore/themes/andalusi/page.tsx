import Link from "next/link";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import ShareButtons from "@/components/ShareButtons";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "الشعر الأندلسي — روائع شعراء الأندلس",
  description:
    "روائع الشعر الأندلسي — من ابن زيدون وابن حزم وابن خفاجة. 13 بيت مختار من جنّة الأندلس مع شرح معانيها.",
  openGraph: {
    title: "الشعر الأندلسي — روائع شعراء الأندلس | مسامرات شعرية",
    description:
      "روائع الشعر الأندلسي — من ابن زيدون وابن حزم وابن خفاجة. جنّة الشعر في قرطبة وغرناطة وإشبيلية.",
  },
  alternates: {
    canonical: "https://shi3r.com/explore/themes/andalusi",
  },
};

const ANDALUSI_VERSES = [
  // ابن زيدون — النونية
  {
    h1: "أضحى التنائي بديلاً من تدانينا",
    h2: "وناب عن طيبِ لقيانا تجافينا",
    poet: "ابن زيدون",
    poetId: 28,
    era: "أندلسي",
    meaning:
      "البُعد حلَّ محلَّ القُرب، والجفاء ناب عن اللقاء — مطلع النونية الشهيرة في وصف فراق ولادة.",
  },
  {
    h1: "بنتم وبِنَّا فما ابتلَّت جوانحنا",
    h2: "شوقاً إليكم ولا جفَّت مآقينا",
    poet: "ابن زيدون",
    poetId: 28,
    era: "أندلسي",
    meaning:
      "رحلتم ورحلنا، فلم تجفَّ دموعنا شوقاً إليكم — الشوق مقيم في الجوانح لا يبرحها.",
  },
  {
    h1: "نكادُ حينَ تناجيكم ضمائرُنا",
    h2: "يقضي علينا الأسى لولا تأسِّينا",
    poet: "ابن زيدون",
    poetId: 28,
    era: "أندلسي",
    meaning:
      "حين تحدِّث النفسَ عنكم كاد الحزن يقضي علينا — لولا أن بعض العزاء يُعين على الصبر.",
  },
  {
    h1: "كأنَّنا لم نبِت والوصلُ جامعُنا",
    h2: "ولم يكن لنا ليلٌ عليكم يُقضينا",
    poet: "ابن زيدون",
    poetId: 28,
    era: "أندلسي",
    meaning:
      "كأن ليالي الوصل والقرب لم تكن — بعد الفراق يُصبح الماضي كأنه حلم.",
  },
  {
    h1: "يا جنَّةَ الخُلدِ أُبدلنا بسلسلِها",
    h2: "والكوثرِ العذبِ زقُّوماً وغِسلينا",
    poet: "ابن زيدون",
    poetId: 28,
    era: "أندلسي",
    meaning:
      "استبدلنا جنّة وصلكم بعذاب الفراق — صورة شعرية من القرآن الكريم في أبدع توظيف.",
  },
  {
    h1: "ما ضرَّ لو خطرت منكم على بصرٍ",
    h2: "بيضُ الصحائف نُسوِّدُ المحاجينا",
    poet: "ابن زيدون",
    poetId: 28,
    era: "أندلسي",
    meaning:
      "ما كان يضرُّكم لو نظرتم إلى رسائلنا البيضاء التي سوَّدناها بالحبر — استعارة للكتب المتبادلة.",
  },
  // ابن حزم الأندلسي — طوق الحمامة
  {
    h1: "يا ظالمي أتراه يجهلُ أنني",
    h2: "قد طالَ ما قاسيتُه وصَبَرتُ",
    poet: "ابن حزم الأندلسي",
    poetId: 30,
    era: "أندلسي",
    meaning:
      "أيجهل ظالمي ما عانيته؟ أم يعلم وتعمَّد الظلم؟ — عتاب الحبيب الذي يطيل الصبر على الجفاء.",
  },
  {
    h1: "إذا اشتبكت دموعٌ في خدودٍ",
    h2: "تبيَّن من بكى ممَّن تباكى",
    poet: "ابن حزم الأندلسي",
    poetId: 30,
    era: "أندلسي",
    meaning:
      "حين تتشابك الدموع تنكشف الحقيقة — البكاء الصادق يفترق عن التباكي والتظاهر.",
  },
  {
    h1: "ودَّعتُكم وفؤادي عند فُرقتكم",
    h2: "يبكي دماً فالدمعُ ليس بكافِ",
    poet: "ابن حزم الأندلسي",
    poetId: 30,
    era: "أندلسي",
    meaning:
      "وداع بعد فراق يجعل الدموع لا تكفي — حتى الدم لا يوفّي ما تستحقه آلام البُعد.",
  },
  {
    h1: "فرَّق الدهرُ بيننا وهو جمعُنا",
    h2: "في كفِّ دهرٍ لا يَنامُ ولا يدعُ",
    poet: "ابن حزم الأندلسي",
    poetId: 30,
    era: "أندلسي",
    meaning:
      "الزمان الذي جمعنا هو نفسه الذي فرَّقنا — إشارة إلى التقلّب والتحوّل الذي لا يهدأ.",
  },
  // ابن خفاجة — الطبيعة الأندلسية
  {
    h1: "يا أهلَ أندلسٍ للهِ دركمُ",
    h2: "ماءٌ وظلٌّ وأنهارٌ وأشجارُ",
    poet: "ابن خفاجة",
    poetId: 31,
    era: "أندلسي",
    meaning:
      "أشهر أبيات الشعر الأندلسي — يصف ابن خفاجة جنّة الأندلس بمائها وظلّها وأنهارها وأشجارها.",
  },
  {
    h1: "أتاكَ الربيعُ الطَّلقُ يختالُ ضاحكاً",
    h2: "من الحسنِ حتى كادَ أن يتكلَّما",
    poet: "ابن خفاجة",
    poetId: 31,
    era: "أندلسي",
    meaning:
      "الربيع يأتي مزهواً بجماله كأنه إنسان يختال — الطبيعة عند ابن خفاجة تتحرك وتتكلم.",
  },
  {
    h1: "وأيَّامَنا في ظلِّ أندلسٍ كأنَّها",
    h2: "أماني قلبٍ أو كأحلامِ نائمِ",
    poet: "ابن خفاجة",
    poetId: 31,
    era: "أندلسي",
    meaning:
      "أيام الأندلس الجميلة كأنها أحلام لا تدوم — حنين للماضي الجميل الذي يمرّ كالطيف.",
  },
];

const ERA_COLOR = "#5c3d7a"; // أندلسي — purple

export default function AndalusiThemePage() {
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
        <h1 className="text-3xl">الشعر الأندلسي</h1>
        <ThemeToggle />
      </div>

      {/* Intro */}
      <div className="mb-8 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md">
        <p className="text-[var(--muted)] leading-relaxed text-sm">
          الأندلس جنّةٌ أنجبت أعظم شعراء اللغة العربية — في ظلالها جرت أنهار
          الشعر ورنّت أوتار الغزل والحنين. من قرطبة ابن زيدون وابن حزم إلى
          بلنسية ابن خفاجة، هنا روائع شعراء الأندلس في الحب والطبيعة والفراق.
        </p>
        <p className="text-xs mt-3" style={{ color: ERA_COLOR }}>
          {ANDALUSI_VERSES.length} بيت مختار
        </p>
      </div>

      {/* Verses */}
      <div className="space-y-6">
        {ANDALUSI_VERSES.map((verse, i) => (
          <article
            key={i}
            className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md"
          >
            <p className="verse-text text-lg text-center mb-4 leading-loose">
              {verse.h1}
              <span className="mx-3 opacity-40" style={{ color: ERA_COLOR }}>
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
                  color: ERA_COLOR,
                  border: `1px solid ${ERA_COLOR}`,
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
          url="https://shi3r.com/explore/themes/andalusi"
          title="الشعر الأندلسي — روائع شعراء الأندلس"
          text="روائع الشعر الأندلسي — من ابن زيدون وابن حزم وابن خفاجة"
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
          href="/poets/28"
          className="text-[var(--muted)] hover:text-[var(--fg)]"
        >
          صفحة ابن زيدون ←
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
            name: "الشعر الأندلسي — روائع شعراء الأندلس",
            description:
              "روائع الشعر الأندلسي من ابن زيدون وابن حزم وابن خفاجة",
            url: "https://shi3r.com/explore/themes/andalusi",
            inLanguage: "ar",
            hasPart: ANDALUSI_VERSES.map((v) => ({
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
