import Link from "next/link";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import ShareButtons from "@/components/ShareButtons";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "شعر الوطنيات — أجمل القصائد الوطنية في الشعر العربي",
  description:
    "أجمل أبيات الشعر الوطني العربي — من أبو القاسم الشابي وأحمد شوقي وحافظ إبراهيم إلى محمود درويش. قصائد عن الوطن والهوية والانتماء والكرامة.",
  openGraph: {
    title: "شعر الوطنيات — أجمل القصائد الوطنية في الشعر العربي | مسامرات شعرية",
    description:
      "أجمل أبيات الشعر الوطني العربي — من الشابي وشوقي وحافظ إبراهيم إلى محمود درويش.",
  },
  alternates: {
    canonical: "https://shi3r.com/explore/themes/wataniyyat",
  },
};

const WATANIYYAT_VERSES = [
  {
    h1: "إذا الشعبُ يوماً أراد الحياةَ",
    h2: "فلا بدَّ أن يستجيبَ القَدَر",
    poet: "أبو القاسم الشابي",
    poetId: 24,
    era: "حديث",
    meaning:
      "أشهر بيت في الشعر العربي الحديث — يُجسّد إرادة الشعوب التي لا تُقهر. قالها الشابي في قصيدة 'إرادة الحياة' عام 1933، وهو في الخامسة والعشرين، واستُلهم منها النشيد الوطني التونسي.",
  },
  {
    h1: "ولا بدَّ لليل أن ينجلي",
    h2: "ولا بدَّ للقيد أن ينكسر",
    poet: "أبو القاسم الشابي",
    poetId: 24,
    era: "حديث",
    meaning:
      "تتمّة قصيدة 'إرادة الحياة' — وعد الشابي بأن الظلام لا يدوم وأن القيد لا بدَّ زائل. تفاؤل لا يُمارى بانتصار الإرادة الحرّة على كل قهر.",
  },
  {
    h1: "ومن يتهيَّب صعودَ الجبال",
    h2: "يعِش أبدَ الدهرِ بين الحُفَر",
    poet: "أبو القاسم الشابي",
    poetId: 24,
    era: "حديث",
    meaning:
      "يدعو الشابي إلى الطموح ومواجهة الصعاب — من يهرب من المشقة يبقى في القاع إلى الأبد. فلسفة حياة تربط الكرامة بالسعي والتحدّي لا بالاستسلام.",
  },
  {
    h1: "سجّل — أنا عربيٌّ",
    h2: "ورقمُ بطاقتي ألفٌ وخمسون ألفاً",
    poet: "محمود درويش",
    poetId: 19,
    era: "حديث",
    meaning:
      "مطلع قصيدة 'بطاقة هوية' (1964) — يُخاطب درويش موظّف الاحتلال مُعلناً هويّته بكبرياء لا بتوسّل. واحدة من أشهر قصائد المقاومة في تاريخ الشعر العربي.",
  },
  {
    h1: "على هذه الأرض ما يستحق الحياةَ",
    h2: "تردّدُ أبريلَ، رائحةُ الخبزِ في الفجر",
    poet: "محمود درويش",
    poetId: 19,
    era: "حديث",
    meaning:
      "من قصيدة 'على هذه الأرض' (1984) — يُعدّد درويش ما يجعل الأرض تستحق أن تُعاش وتُحبّ: بساطة الربيع وعطر الخبز الطازج والإنسان في تفاصيله اليومية.",
  },
  {
    h1: "وطني لو شُغِلتُ بالخُلدِ عنه",
    h2: "نازعتني إليه في الخُلدِ نفسي",
    poet: "أحمد شوقي",
    poetId: 16,
    era: "حديث",
    meaning:
      "أمير الشعراء يُعلن أن الوطن أعمق من الجنّة في النفس — حتى لو شغله الخلود عن أرضه فإن روحه ستظل تحنّ إليه. أرقى تعبير شعري عن الانتماء الفطري المتجذّر.",
  },
  {
    h1: "سلامٌ من صبا بردى أرقَّ",
    h2: "ودمعٌ لا يُكفكَفُ يا دمشق",
    poet: "أحمد شوقي",
    poetId: 16,
    era: "حديث",
    meaning:
      "يُرسل شوقي سلامه إلى دمشق عبر نسيم بردى — دمعٌ لا يُمسَح على مدينة عريقة وعصر ذهبي مضى. من أجمل قصائده في الحنين والولاء للمدن العربية.",
  },
  {
    h1: "أنا البحرُ في أحشائه الدرُّ كامنٌ",
    h2: "فهل سألوا الغوّاصَ عن صدفاتي",
    poet: "حافظ إبراهيم",
    poetId: 17,
    era: "حديث",
    meaning:
      "شاعر النيل يتكلّم على لسان اللغة العربية — بحرٌ يكتنز الكنوز في أعماقه، لكن من يتعب في الغوص ليستخرجها؟ صرخة حضارية ثقافية لا تزال صداها يُلهم.",
  },
  {
    h1: "يا نيلُ أنت أكبرُ الأنهارِ",
    h2: "وأغزرُ الأنهارِ بالأسرار",
    poet: "حافظ إبراهيم",
    poetId: 17,
    era: "حديث",
    meaning:
      "يمجّد حافظ إبراهيم نهر النيل رمزاً للحضارة والسرّ الدفين — النيل ليس مجرد نهر بل هو شريان التاريخ وذاكرة الأمم.",
  },
  {
    h1: "كلّ ابن أنثى وإن طالت سلامتُه",
    h2: "يوماً على آلةٍ حدباءَ محمولُ",
    poet: "زهير بن أبي سلمى",
    poetId: 3,
    era: "جاهلي",
    meaning:
      "حكمة زهير الخالدة — كل إنسان مهما عاش سيُحمَل يوماً على النعش. دعوة للسلام ورفض الحرب، من معلّقته التي وصفها المتنبي بأنها أبلغ ما قيل في ذم الحرب.",
  },
  {
    h1: "وما أنا إلا من غَزِيّةَ إن غوَت",
    h2: "غويتُ وإن تَرشُد غزيّةُ أرشُدِ",
    poet: "دُريد بن الصمّة",
    poetId: 6,
    era: "جاهلي",
    meaning:
      "من أشهر أبيات الانتماء القبلي في الشعر الجاهلي — الشاعر يُعلن تضامنه المطلق مع قبيلته في الحق والباطل. ضربٌ مثلٌ للولاء الذي يتجاوز الحساب الشخصي.",
  },
];

const ERA_COLORS: Record<string, string> = {
  جاهلي: "var(--gold)",
  أموي: "#4ade80",
  عباسي: "#f87171",
  حديث: "#60a5fa",
  إسلامي: "#a78bfa",
};

export default function WataniyyatThemePage() {
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
        <h1 className="text-3xl">الوطنيات</h1>
        <ThemeToggle />
      </div>

      {/* Intro */}
      <div className="mb-8 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md">
        <p className="text-[var(--muted)] leading-relaxed text-sm">
          الشعر الوطني من أعمق أغراض الشعر العربي الحديث — يتغذّى من الانتماء
          للأرض والهوية والذاكرة الجماعية. بدأ ذا جذور قبلية في الجاهلية،
          ونما مع الحركات التحررية في القرن العشرين ليصير صوتاً للمقاومة
          والكرامة الإنسانية. هنا أجمل ما قاله الشعراء العرب في الوطن عبر
          العصور.
        </p>
        <p className="text-xs mt-3" style={{ color: "var(--gold)" }}>
          {WATANIYYAT_VERSES.length} بيت مختار
        </p>
      </div>

      {/* Verses */}
      <div className="space-y-6">
        {WATANIYYAT_VERSES.map((verse, i) => (
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
          url="https://shi3r.com/explore/themes/wataniyyat"
          title="شعر الوطنيات — أجمل القصائد الوطنية في الشعر العربي"
          text="أجمل أبيات الشعر الوطني العربي — من الشابي وشوقي وحافظ إبراهيم إلى محمود درويش"
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

      <Disclaimer />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "شعر الوطنيات — أجمل القصائد الوطنية في الشعر العربي",
            description:
              "أجمل أبيات الشعر الوطني العربي من أبو القاسم الشابي وأحمد شوقي وحافظ إبراهيم ومحمود درويش",
            url: "https://shi3r.com/explore/themes/wataniyyat",
            inLanguage: "ar",
            hasPart: WATANIYYAT_VERSES.map((v) => ({
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
