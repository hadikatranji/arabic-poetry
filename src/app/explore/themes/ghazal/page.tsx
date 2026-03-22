import Link from "next/link";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "شعر الغزل — أجمل أبيات الحب في الشعر العربي",
  description:
    "أجمل أبيات الغزل والحب في الشعر العربي — من مجنون ليلى وعنترة وامرئ القيس إلى أبي فراس الحمداني ونزار قباني. 15+ بيت مختار مع شرح معانيها.",
  openGraph: {
    title: "شعر الغزل | مسامرات شعرية",
    description:
      "أجمل أبيات الغزل والحب في الشعر العربي — من مجنون ليلى وعنترة وامرئ القيس إلى نزار قباني.",
  },
  alternates: {
    canonical: "https://shi3r.com/explore/themes/ghazal",
  },
};

const GHAZAL_VERSES = [
  {
    h1: "قِفا نَبكِ مِن ذِكرى حَبيبٍ وَمَنزِلِ",
    h2: "بِسِقطِ اللِّوى بَينَ الدَّخولِ فَحَومَلِ",
    poet: "امرؤ القيس",
    poetId: 1,
    era: "جاهلي",
    meaning:
      "أشهر مطلع في تاريخ الشعر العربي — دعوة للوقوف والبكاء على ذكرى الحبيبة والديار الخالية.",
  },
  {
    h1: "يا دارَ عَبلَةَ بِالجِواءِ تَكَلَّمي",
    h2: "وَعِمي صَباحاً دارَ عَبلَةَ وَاسلَمي",
    poet: "عنترة بن شداد",
    poetId: 2,
    era: "جاهلي",
    meaning:
      "عنترة يخاطب ديار حبيبته عبلة ويدعو لها بالسلام — في خطاب الديار تعبير عن العشق العذري الأصيل.",
  },
  {
    h1: "وَلَقَد ذَكَرتُكِ وَالرِّماحُ نَواهِلٌ مِنّي",
    h2: "وَبِيضُ الهِندِ تَقطُرُ مِن دَمي",
    poet: "عنترة بن شداد",
    poetId: 2,
    era: "جاهلي",
    meaning:
      "في أشدّ لحظات الحرب احتداماً، يبقى تفكيره في حبيبته عبلة — حبٌّ يتجاوز الموت ولا يطفئه النزيف.",
  },
  {
    h1: "يا عبلَ قد كَفكَفتُ عنكِ مَدامِعي",
    h2: "وَصَرَفتُ عَنكِ عَوادِيَ الأَحزانِ",
    poet: "عنترة بن شداد",
    poetId: 2,
    era: "جاهلي",
    meaning:
      "عنترة يحاول كبح دموعه صبراً وكرماً — الفارس يُخفي حزنه على الحبيبة البعيدة.",
  },
  {
    h1: "أَمُرُّ عَلى الدِّيارِ دِيارِ لَيلى",
    h2: "أُقَبِّلُ ذا الجِدارَ وَذا الجِدارا",
    poet: "مجنون ليلى",
    poetId: 7,
    era: "أموي",
    meaning:
      "قيس يطوف بديار ليلى ويُقبّل جدرانها — في هذا التعلّق بالأماكن تعبير عن حبٍّ يتجاوز حدود العقل.",
  },
  {
    h1: "وَما حُبُّ الدِّيارِ شَغَفنَ قَلبي",
    h2: "وَلَكِن حُبُّ مَن سَكَنَ الدِّيارا",
    poet: "مجنون ليلى",
    poetId: 7,
    era: "أموي",
    meaning:
      "يوضّح أنه لا يحبّ الديار لذاتها بل لأنّ حبيبته سكنتها — من أبلغ ما قيل في الحبّ المتعلق بالأشخاص لا الأماكن.",
  },
  {
    h1: "يَقولونَ لَيلى بِالعِراقِ مَريضَةٌ",
    h2: "فَيا لَيتَني كُنتُ الطَّبيبَ المُداوِيا",
    poet: "مجنون ليلى",
    poetId: 7,
    era: "أموي",
    meaning:
      "حين يسمع بمرض حبيبته، يتمنّى أن يكون طبيبها — الحبّ الحقيقي يجعل الألم مشتركاً والشفاء مشتهى.",
  },
  {
    h1: "تَذَكَّرتُ لَيلى وَالسِّنينَ الخَوالِيا",
    h2: "وَأَيّاماً لا نَخشى عَلى الحُبِّ ناهِيا",
    poet: "مجنون ليلى",
    poetId: 7,
    era: "أموي",
    meaning:
      "حنين إلى أيام الحبّ الأولى حين لم يكن ثمّة من يمنع أو يُفرّق — العشق البريء قبل أن تتدخّل الأقدار.",
  },
  {
    h1: "أَراكَ عَصِيَّ الدَّمعِ شيمَتُكَ الصَّبرُ",
    h2: "أَما لِلهَوى نَهيٌ عَلَيكَ وَلا أَمرُ",
    poet: "أبو فراس الحمداني",
    poetId: 13,
    era: "عباسي",
    meaning:
      "الشاعر يتساءل: أيصمد الصبر أمام ألم الهوى؟ مطلع واحدة من أرقّ قصائد الغزل في الشعر العباسي.",
  },
  {
    h1: "بَلى أَنا مُشتاقٌ وَعِندِي لَوعَةٌ",
    h2: "وَلَكِنَّ مِثلي لا يُذاعُ لَهُ سِرُّ",
    poet: "أبو فراس الحمداني",
    poetId: 13,
    era: "عباسي",
    meaning:
      "يعترف باشتياقه وكمده، لكنّ كبرياءه يمنعه من البوح — الحبّ المكتوم الذي يحرق ولا يُعلن.",
  },
  {
    h1: "أَقولُ وَقَد ناحَت بِقُربي حَمامَةٌ",
    h2: "أَيا جارَتا هَل تَشعُرينَ بِحالي",
    poet: "أبو فراس الحمداني",
    poetId: 13,
    era: "عباسي",
    meaning:
      "يشكو لحمامة تناح بجانبه وهو في الأسر — الوحدة والشوق يجعلانه يُحدّث الطير عن همومه.",
  },
  {
    h1: "مُعَلِّلَتي بِالوَصلِ وَالمَوتُ دونَهُ",
    h2: "إِذا مُتُّ ظَمآناً فَلا نَزَلَ القَطرُ",
    poet: "أبو فراس الحمداني",
    poetId: 13,
    era: "عباسي",
    meaning:
      "تُعِدُهُ بالوصال والموت يقفُ بينهما — إن مات دون أن ينال وصالها فليمتنع المطر عن النزول.",
  },
  {
    h1: "عَلَّمَني حُبُّكِ أَن أَحزَنا",
    h2: "وَأَنا مُحتاجٌ مُنذُ عُصورٍ لِامرَأَةٍ تَجعَلُني أَحزَنا",
    poet: "نزار قباني",
    poetId: 18,
    era: "حديث",
    meaning:
      "نزار يقلب المعادلة — الحزن الذي يُورثه الحبّ لا يُثبّط بل يُلهم، والمرأة التي تُحزن هي التي تُحيي الشعر.",
  },
  {
    h1: "حَبيبَتي مِن تَكونُ أَنتِ",
    h2: "حَبيبَتي مِن أَيِّ كَوكَبٍ أَنتِ",
    poet: "نزار قباني",
    poetId: 18,
    era: "حديث",
    meaning:
      "الدهشة الأولى أمام الحبيبة — التساؤل الذي لا جواب له يُعبّر عن عجز اللغة أمام جمال المحبوبة.",
  },
  {
    h1: "تَعَلَّقَ روحي روحَها قَبلَ خَلقِنا",
    h2: "وَمِن بَعدِ ما كُنّا نُطَفاً وَفي المَهدِ",
    poet: "مجنون ليلى",
    poetId: 7,
    era: "أموي",
    meaning:
      "الحبّ الأزلي الذي سبق الوجود — أرواح تعارفت قبل أن تُخلق أجساد، من أعمق صور الغزل العذري.",
  },
  {
    h1: "وَلَيلٍ كَمَوجِ البَحرِ أَرخى سُدولَهُ",
    h2: "عَلَيَّ بِأَنواعِ الهُمومِ لِيَبتَلي",
    poet: "امرؤ القيس",
    poetId: 1,
    era: "جاهلي",
    meaning:
      "الليل الطويل المثقل بالهموم والشوق — صورة من أجمل ما رسمه الشعراء للسهر المتعب على ذكرى الحبيبة.",
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
          الغزل أعرق أغراض الشعر العربي وأوسعها انتشاراً — من دموع امرئ القيس
          على الأطلال، إلى جنون قيس بن الملوح في ديار ليلى، إلى رقّة أبي فراس
          الحمداني في الأسر، إلى جرأة نزار قباني في الحداثة. هنا أجمل ما نظمه
          الشعراء في الحبّ والشوق والوجد.
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
          text="أجمل أبيات الغزل والحب في الشعر العربي — من مجنون ليلى وعنترة إلى نزار قباني"
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
              "أجمل أبيات الغزل والحب في الشعر العربي من كبار الشعراء عبر العصور",
            url: "https://shi3r.com/explore/themes/ghazal",
            inLanguage: "ar",
            keywords: "شعر غزل, شعر حب, غزل عربي, أبيات الحب, قصائد الحب",
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
