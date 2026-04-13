import Link from "next/link";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import ShareButtons from "@/components/ShareButtons";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "أبيات الحكمة في الشعر العربي",
  description:
    "أجمل أبيات الحكمة والفلسفة في الشعر العربي — من المتنبي وزهير بن أبي سلمى وأبي العلاء المعري وإيليا أبو ماضي. 15+ بيت مختار مع شرح معانيها.",
  openGraph: {
    title: "أبيات الحكمة في الشعر العربي | مسامرات شعرية",
    description:
      "أجمل أبيات الحكمة والفلسفة في الشعر العربي — من المتنبي وزهير بن أبي سلمى وأبي العلاء المعري وإيليا أبو ماضي.",
  },
  alternates: {
    canonical: "https://shi3r.com/explore/themes/hikma",
  },
};

const HIKMA_VERSES = [
  {
    h1: "على قدر أهل العزم تأتي العزائمُ",
    h2: "وتأتي على قدر الكرام المكارمُ",
    poet: "المتنبي",
    poetId: 10,
    era: "عباسي",
    meaning:
      "العزيمة والهمّة تكون على قدر صاحبها — فمن كانت همّته عالية أتته المعالي.",
  },
  {
    h1: "ما كل ما يتمنى المرء يدركه",
    h2: "تجري الرياح بما لا تشتهي السفنُ",
    poet: "المتنبي",
    poetId: 10,
    era: "عباسي",
    meaning:
      "ليس كل ما يتمناه الإنسان يحققه — فالأقدار لا تسير دائماً كما نريد.",
  },
  {
    h1: "ذو العقل يشقى في النعيم بعقله",
    h2: "وأخو الجهالة في الشقاوة ينعمُ",
    poet: "المتنبي",
    poetId: 10,
    era: "عباسي",
    meaning:
      "العاقل يتعذب بتفكيره حتى في الرخاء، بينما الجاهل سعيد في جهله.",
  },
  {
    h1: "سئمت تكاليف الحياة ومن يعش",
    h2: "ثمانين حولاً لا أبا لك يسأمِ",
    poet: "زهير بن أبي سلمى",
    poetId: 3,
    era: "جاهلي",
    meaning: "الحياة تكاليف ومشقّات — ومن عاش طويلاً أدرك ذلك حتماً.",
  },
  {
    h1: "ومهما تكن عند امرئ من خليقةٍ",
    h2: "وإن خالها تخفى على الناس تُعلمِ",
    poet: "زهير بن أبي سلمى",
    poetId: 3,
    era: "جاهلي",
    meaning:
      "مهما حاول الإنسان إخفاء طبيعته فإنها ستنكشف في نهاية المطاف.",
  },
  {
    h1: "ومن لم يصانع في أمور كثيرةٍ",
    h2: "يُضرَّس بأنياب ويُوطأ بمنسمِ",
    poet: "زهير بن أبي سلمى",
    poetId: 3,
    era: "جاهلي",
    meaning:
      "من لم يتعامل بحكمة ومرونة في الحياة تعرّض للأذى والهوان.",
  },
  {
    h1: "تعبٌ كلّها الحياة فما أعـ",
    h2: "ـجبُ إلا من راغبٍ في ازديادِ",
    poet: "أبو العلاء المعري",
    poetId: 12,
    era: "عباسي",
    meaning:
      "الحياة كلّها تعب ومشقّة، فالعجب من الإنسان الذي يسعى إلى المزيد منها.",
  },
  {
    h1: "ألا كل شيء ما خلا الله باطلُ",
    h2: "وكل نعيم لا محالة زائلُ",
    poet: "لبيد بن ربيعة",
    poetId: 5,
    era: "جاهلي",
    meaning:
      "كل شيء في الدنيا زائل وفانٍ إلا الله — أعمق حكمة في الشعر الجاهلي.",
  },
  {
    h1: "نعيب زماننا والعيب فينا",
    h2: "وما لزماننا عيبٌ سوانا",
    poet: "الإمام الشافعي",
    poetId: 10,
    era: "عباسي",
    meaning:
      "نلوم الزمان على أحوالنا، والحقيقة أن العيب فينا نحن لا في الزمان.",
  },
  {
    h1: "كن بلسماً إن صار دهرك أرقما",
    h2: "وحلاوةً إن صار غيرك علقما",
    poet: "إيليا أبو ماضي",
    poetId: 20,
    era: "حديث",
    meaning:
      "كن أنت السبب في الخير حتى لو كان من حولك أسباباً للشرّ.",
  },
  {
    h1: "قال السماء كئيبةٌ وتجهّما",
    h2: "قلت ابتسم يكفي التجهّم في السما",
    poet: "إيليا أبو ماضي",
    poetId: 20,
    era: "حديث",
    meaning: "الابتسامة والتفاؤل واجب حتى في أحلك الأوقات.",
  },
  {
    h1: "ستبدي لك الأيام ما كنت جاهلاً",
    h2: "ويأتيك بالأخبار من لم تزوّدِ",
    poet: "طرفة بن العبد",
    poetId: 4,
    era: "جاهلي",
    meaning: "الزمن يكشف ما غابت عنك معرفته — والحياة علم مستمر.",
  },
  {
    h1: "وما نيل المطالب بالتمنّي",
    h2: "ولكن تُؤخذ الدنيا غلابا",
    poet: "أحمد شوقي",
    poetId: 16,
    era: "حديث",
    meaning:
      "الأحلام والتمنّيات لا تكفي — الدنيا تُؤخذ بالعمل والإصرار.",
  },
  {
    h1: "إذا أنت أكرمت الكريم ملكته",
    h2: "وإن أنت أكرمت اللئيم تمرّدا",
    poet: "المتنبي",
    poetId: 10,
    era: "عباسي",
    meaning:
      "الكريم يقدّر الإحسان فيكون لك، واللئيم يتكبّر إذا أحسنت إليه.",
  },
  {
    h1: "ومن نكد الدنيا على الحرّ أن يرى",
    h2: "عدوّاً له ما من صداقته بدُّ",
    poet: "المتنبي",
    poetId: 10,
    era: "عباسي",
    meaning: "من أصعب ما في الدنيا أن تضطر لمصادقة من تكره.",
  },
  {
    h1: "وإذا صبرت النفس عن شهواتها",
    h2: "فهناك تسمو فوق هام الأنجمِ",
    poet: "عنترة بن شداد",
    poetId: 2,
    era: "جاهلي",
    meaning:
      "حين تتحكم النفس في شهواتها وتصبر ترتفع إلى مقام يفوق النجوم.",
  },
];

const ERA_COLORS: Record<string, string> = {
  جاهلي: "var(--gold)",
  أموي: "#4ade80",
  عباسي: "#f87171",
  حديث: "#60a5fa",
};

export default function HikmaThemePage() {
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
        <h1 className="text-3xl">الحكمة</h1>
        <ThemeToggle />
      </div>

      {/* Intro */}
      <div className="mb-8 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md">
        <p className="text-[var(--muted)] leading-relaxed text-sm">
          الحكمة غرضٌ شعري عريق في الأدب العربي، يسعى فيه الشاعر إلى التأمّل
          في الحياة وتقطير تجربته في أبيات موجزة تبقى على مرّ العصور. من زهير
          في الجاهلية إلى إيليا أبو ماضي في الحديث، هنا أجمل ما قاله الشعراء
          في حكمة الحياة.
        </p>
        <p
          className="text-xs mt-3"
          style={{ color: "var(--gold)" }}
        >
          {HIKMA_VERSES.length} بيت مختار
        </p>
      </div>

      {/* Verses */}
      <div className="space-y-6">
        {HIKMA_VERSES.map((verse, i) => (
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
          url="https://shi3r.com/explore/themes/hikma"
          title="أبيات الحكمة في الشعر العربي"
          text="أجمل أبيات الحكمة في الشعر العربي — من المتنبي وزهير وأبي العلاء المعري"
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
            name: "أبيات الحكمة في الشعر العربي",
            description:
              "أجمل أبيات الحكمة والفلسفة في الشعر العربي من كبار الشعراء",
            url: "https://shi3r.com/explore/themes/hikma",
            inLanguage: "ar",
            hasPart: HIKMA_VERSES.map((v) => ({
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
