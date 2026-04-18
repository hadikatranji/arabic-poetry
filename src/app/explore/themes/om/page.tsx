import Link from "next/link";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import ShareButtons from "@/components/ShareButtons";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "شعر عن الأم — أجمل أبيات الحب والعرفان للأمهات",
  description:
    "أجمل ما قاله الشعراء العرب في الأم — من حافظ إبراهيم ومحمود درويش ونزار قباني. 8 أبيات مختارة مع شرح معانيها تجليلاً لمقام الأمومة.",
  openGraph: {
    title: "شعر عن الأم — أجمل أبيات الحب والعرفان للأمهات | مسامرات شعرية",
    description:
      "أجمل ما قاله الشعراء العرب في الأم — من حافظ إبراهيم ومحمود درويش ونزار قباني.",
  },
  alternates: {
    canonical: "https://www.shi3r.com/explore/themes/om",
  },
};

const OM_VERSES = [
  // حافظ إبراهيم — الأم مدرسة
  {
    h1: "الأم مدرسةٌ إذا أعددتها",
    h2: "أعددت شعباً طيّب الأعراق",
    poet: "حافظ إبراهيم",
    poetId: 17,
    era: "حديث",
    meaning:
      "أشهر بيت في الشعر العربي عن الأمومة — تربية الأم هي تربية الأمم بأسرها، فمنها يخرج الأبناء طيّبي الأصل والخُلق.",
  },
  {
    h1: "الأم روضٌ إن تعهّده الحيا",
    h2: "بالريّ أورق أيّما إيراق",
    poet: "حافظ إبراهيم",
    poetId: 17,
    era: "حديث",
    meaning:
      "الأم كالروضة الخضراء — إذا أُسقيت بالعلم والتهذيب أثمرت وازدهرت وأخرجت خير النتاج. صورة طبيعية رائعة تُجسّد فضل الأمومة.",
  },
  {
    h1: "الأمّ أستاذ الأساتذة الألى",
    h2: "شغلت مآثرهم مدى الآفاق",
    poet: "حافظ إبراهيم",
    poetId: 17,
    era: "حديث",
    meaning:
      "الأم هي أستاذ كل الأساتذة الذين ملأت أعمالهم الآفاق — فمن يدها الحانية خرج العلماء والشعراء وبنّاة الحضارة.",
  },
  // نزار قباني — أمي
  {
    h1: "أمّي تعلّمت الوضوء من القمر",
    h2: "والطهر أخذته عن الماء والشجر",
    poet: "نزار قباني",
    poetId: 18,
    era: "حديث",
    meaning:
      "صورة مُضيئة من قصيدة نزار قباني 'أمي' — يصف طهر أمه وتديّنها الفطري بأنه ليس مُكتسباً من كتب بل من القمر والماء والطبيعة النقية.",
  },
  // محمود درويش — إلى أمي
  {
    h1: "أحنّ إلى خبز أمي",
    h2: "وقهوة أمي ولمسة أمي",
    poet: "محمود درويش",
    poetId: 19,
    era: "حديث",
    meaning:
      "مطلع قصيدة 'إلى أمي' الشهيرة لمحمود درويش — الحنين إلى الأم يتجلّى في أبسط التفاصيل: خبزها وقهوتها ولمستها، وفيها تتكثّف هوية الإنسان بأسرها.",
  },
  {
    h1: "وتكبر فيّ الطفولة",
    h2: "يوماً على صدر أمي",
    poet: "محمود درويش",
    poetId: 19,
    era: "حديث",
    meaning:
      "من القصيدة ذاتها — الطفولة لا تموت في داخلنا، بل تظل حيّة ومتنامية ما دامت الأم موجودة. صدرها هو الوطن الأول والأكثر أماناً.",
  },
  {
    h1: "وأعشق عمري لأني",
    h2: "إذا متُّ أخجل من دموع أمي",
    poet: "محمود درويش",
    poetId: 19,
    era: "حديث",
    meaning:
      "خاتمة القصيدة — درويش يُحبّ الحياة لأن موته سيُبكي أمه، وهو يستحي من دموعها. لا شيء أثقل على قلب الشاعر من حزن أمه.",
  },
  // أحمد شوقي
  {
    h1: "وللأمّ من الحنان بحرٌ لجيٌّ",
    h2: "لو أن ولدها صبّ فيه أغرقا",
    poet: "أحمد شوقي",
    poetId: 16,
    era: "حديث",
    meaning:
      "أمير الشعراء يُشبّه حنان الأم ببحر لا قرار له — حتى لو أفرغ الابن محبّته كلها فيه لغرق فيه ولم يُنقصه شيئاً. مبالغة شعرية تُصوّر لانهائية الحنان الأمومي.",
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
        <h1 className="text-3xl">شعر الأم</h1>
        <ThemeToggle />
      </div>

      {/* Intro */}
      <div className="mb-8 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md">
        <p className="text-[var(--muted)] leading-relaxed text-sm">
          الأمومة موضوع أزلي في الشعر العربي — من الإشارات العابرة في الشعر
          الجاهلي إلى القصائد الكاملة في العصر الحديث. في القرن العشرين، أفرد
          شعراء كبار كحافظ إبراهيم ومحمود درويش ونزار قباني قصائد خاصة
          يُجلّلون فيها الأم ويُعبّرون عن حنينهم إليها وامتنانهم لها. هنا أجمل
          ما قيل في الأم في الشعر العربي الحديث.
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
          url="https://www.shi3r.com/explore/themes/om"
          title="شعر عن الأم — أجمل أبيات الحب والعرفان للأمهات"
          text="أجمل ما قاله الشعراء العرب في الأم — من حافظ إبراهيم ومحمود درويش ونزار قباني"
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
          href="/explore/themes/ritha"
          className="text-[var(--muted)] hover:text-[var(--fg)]"
        >
          شعر الرثاء ←
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
            name: "شعر عن الأم — أجمل أبيات الحب والعرفان للأمهات",
            description:
              "أجمل ما قاله الشعراء العرب في الأم من حافظ إبراهيم ومحمود درويش ونزار قباني وأحمد شوقي",
            url: "https://www.shi3r.com/explore/themes/om",
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
