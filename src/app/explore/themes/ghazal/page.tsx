import Link from "next/link";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "شعر الغزل — أجمل أبيات الحب في الشعر العربي",
  description:
    "أجمل أبيات الغزل والحب في الشعر العربي — من امرؤ القيس ومجنون ليلى وعنترة وجرير إلى نزار قباني. 16+ بيت مختار مع شرح معانيها.",
  openGraph: {
    title: "شعر الغزل — أجمل أبيات الحب في الشعر العربي | مسامرات شعرية",
    description:
      "أجمل أبيات الغزل والحب في الشعر العربي — من امرؤ القيس ومجنون ليلى وجرير إلى نزار قباني.",
  },
  alternates: {
    canonical: "https://shi3r.com/explore/themes/ghazal",
  },
};

const GHAZAL_VERSES = [
  {
    h1: "قفا نبكِ من ذكرى حبيبٍ ومنزلِ",
    h2: "بسقط اللوى بين الدخول فحوملِ",
    poet: "امرؤ القيس",
    poetId: 1,
    era: "جاهلي",
    meaning:
      "أشهر مطلع في الشعر العربي — الشاعر يستوقف رفيقيه ليبكيا معه على ذكرى حبيبته ومنازلها الدارسة.",
  },
  {
    h1: "ألا أيها الليل الطويل ألا انجلِ",
    h2: "بصبح وما الإصباح منك بأمثلِ",
    poet: "امرؤ القيس",
    poetId: 1,
    era: "جاهلي",
    meaning:
      "يناجي الليل الطويل طالباً منه الانجلاء، لكنه يعلم أن الصباح لن يخفف وطأة الهمّ عليه.",
  },
  {
    h1: "تعلّق روحي روحها قبل خلقنا",
    h2: "ومن بعد ما كنّا نطافاً وفي المهدِ",
    poet: "مجنون ليلى",
    poetId: 7,
    era: "أموي",
    meaning:
      "حبه لليلى سابق لوجودهما — روحاهما التقتا قبل الخلق، فكأن الحب قضاء مقدّر لا خيار له فيه.",
  },
  {
    h1: "أمرّ على الديار ديار ليلى",
    h2: "أقبّل ذا الجدار وذا الجدارا",
    poet: "مجنون ليلى",
    poetId: 7,
    era: "أموي",
    meaning:
      "يمرّ بديار محبوبته ويقبّل جدرانها — وهو تعبير رمزي عن شدّة الشوق وتعلّق القلب بكل ما ينتسب إليها.",
  },
  {
    h1: "وما حبّ الديار شغفن قلبي",
    h2: "ولكن حبّ من سكن الديارا",
    poet: "مجنون ليلى",
    poetId: 7,
    era: "أموي",
    meaning:
      "لا الديار هي التي يحبها، بل من تسكنها — والحب للشخص ينعكس حبًّا على كل ما يتعلق به.",
  },
  {
    h1: "يقولون ليلى بالعراق مريضةٌ",
    h2: "فيا ليتني كنت الطبيب المداويا",
    poet: "مجنون ليلى",
    poetId: 7,
    era: "أموي",
    meaning:
      "حين بلغه مرض ليلى تمنّى أن يكون طبيبها — فالمحبّ يتمنّى أن يكون سبب شفاء من يحب.",
  },
  {
    h1: "إن العيون التي في طرفها حورٌ",
    h2: "قتلننا ثم لم يحيين قتلانا",
    poet: "جرير",
    poetId: 8,
    era: "أموي",
    meaning:
      "العيون الحوراء تقتل قلوب العشاق بجمالها، ثم لا ترحم من أهلكت — في أبلغ وصف لسحر عيون الحبيبة.",
  },
  {
    h1: "يصرعن ذا اللبّ حتى لا حراك به",
    h2: "وهنّ أضعف خلق الله إنسانا",
    poet: "جرير",
    poetId: 8,
    era: "أموي",
    meaning:
      "النساء يُسقطن العاقل الجبار رغم ضعف أجسادهن — تناقض طريف يصف قوة الحب وسلطة الجمال.",
  },
  {
    h1: "يا دارَ عبلةَ بالجواءِ تكلّمي",
    h2: "وعِمي صباحاً دار عبلةَ واسلمي",
    poet: "عنترة بن شداد",
    poetId: 2,
    era: "جاهلي",
    meaning:
      "يخاطب دار عبلة محبوبته مرحِّباً بها — ومخاطبة الديار أسلوب شعري يعبّر عن شدة الوجد والشوق.",
  },
  {
    h1: "هل غادر الشعراء من متردّمِ",
    h2: "أم هل عرفت الدار بعد توهّمِ",
    poet: "عنترة بن شداد",
    poetId: 2,
    era: "جاهلي",
    meaning:
      "يتساءل عنترة إن كان الشعراء قد تركوا شيئاً جديداً يقوله — اعتراف بعراقة موضوع الحب في الشعر وتحدٍّ أدبي في الوقت ذاته.",
  },
  {
    h1: "أراك عصيّ الدمع شيمتك الصبرُ",
    h2: "أما للهوى نهيٌ عليك ولا أمرُ",
    poet: "أبو فراس الحمداني",
    poetId: 13,
    era: "عباسي",
    meaning:
      "يعاتب قلبه على صبره وحبسه للدمع — فالهوى لا ينبغي أن يُقيَّد بالصبر، والحبّ يستحق أن يُبكى عليه.",
  },
  {
    h1: "أقول وقد ناحت بقربي حمامةٌ",
    h2: "أيا جارتا هل تشعرين بحالي",
    poet: "أبو فراس الحمداني",
    poetId: 13,
    era: "عباسي",
    meaning:
      "يتعاطف مع حمامة تنوح كما ينوح هو في أسره — يجد في أنين الطير رفيقاً يُشاركه وجعه وبُعده عن أحبته.",
  },
  {
    h1: "علّمني حبّك أن أحزنا",
    h2: "وأنا محتاجٌ منذ عصور لامرأةٍ تجعلني أحزنا",
    poet: "نزار قباني",
    poetId: 18,
    era: "حديث",
    meaning:
      "نزار يصف الحزن كمعرفة يُكسبها الحب — الألم دليل على العمق، وهو يشتاق لمن تحرّك فيه هذا الإحساس.",
  },
  {
    h1: "حبيبتي من تكون أنتِ",
    h2: "حبيبتي من أيّ كوكبٍ أنتِ",
    poet: "نزار قباني",
    poetId: 18,
    era: "حديث",
    meaning:
      "تساؤل مفتون بالمرأة التي يحبّ — كأنها كائن من عالم آخر لا تنتمي لهذا الواقع بعظمة حضورها في حياته.",
  },
  {
    h1: "قالت سأعطيك ما لا تعطيه امرأةٌ",
    h2: "عيني وكل زجاجات العطور لكا",
    poet: "نزار قباني",
    poetId: 18,
    era: "حديث",
    meaning:
      "المرأة تعِد بمنح كل ما تملك من جمال وعطر — صورة نزار الغنائية التي تجعل المرأة قصيدة حية.",
  },
  {
    h1: "كليني لهمٍّ يا أميمة ناصبِ",
    h2: "وليل أُقاسيه بطيء الكواكبِ",
    poet: "طرفة بن العبد",
    poetId: 4,
    era: "جاهلي",
    meaning:
      "يطلب من محبوبته أميمة أن تتركه لهمّه في ليل طويل ثقيل — تصوير حيّ للأرق العاطفي وثقل الانتظار.",
  },
];

const ERA_COLORS: Record<string, string> = {
  جاهلي: "var(--gold)",
  أموي: "#4ade80",
  عباسي: "#f87171",
  حديث: "#60a5fa",
};

export default function GhazalThemePage() {
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
        <h1 className="text-3xl">الغزل</h1>
        <ThemeToggle />
      </div>

      {/* Intro */}
      <div className="mb-8 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md">
        <p className="text-[var(--muted)] leading-relaxed text-sm">
          الغزل أقدم أغراض الشعر العربي وأغزرها شعراءً وأبياتاً — من الوقوف
          على الأطلال في الجاهلية، إلى الحب العذري في العصر الأموي، إلى الغزل
          الصريح عند نزار قباني في القرن العشرين. هنا أجمل ما قاله الشعراء
          العرب في الحب والوجد والشوق عبر العصور.
        </p>
        <p className="text-xs mt-3" style={{ color: "var(--gold)" }}>
          {GHAZAL_VERSES.length} بيت مختار
        </p>
      </div>

      {/* Verses */}
      <div className="space-y-6">
        {GHAZAL_VERSES.map((verse, i) => (
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
          url="https://shi3r.com/explore/themes/ghazal"
          title="شعر الغزل — أجمل أبيات الحب في الشعر العربي"
          text="أجمل أبيات الغزل والحب في الشعر العربي — من امرؤ القيس ومجنون ليلى إلى نزار قباني"
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
          href="/explore/themes/hikma"
          className="text-[var(--muted)] hover:text-[var(--fg)]"
        >
          أبيات الحكمة ←
        </Link>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "شعر الغزل — أجمل أبيات الحب في الشعر العربي",
            description:
              "أجمل أبيات الغزل والحب في الشعر العربي من امرؤ القيس ومجنون ليلى وعنترة وجرير ونزار قباني",
            url: "https://shi3r.com/explore/themes/ghazal",
            inLanguage: "ar",
            hasPart: GHAZAL_VERSES.map((v) => ({
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
