import Link from "next/link";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import ShareButtons from "@/components/ShareButtons";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "شعر الوطنيات — أجمل أبيات شعر الوطن والانتماء",
  description:
    "أجمل أبيات شعر الوطن والوطنيات في الشعر العربي الحديث — الشابي وأحمد شوقي ومحمود درويش وفدوى طوقان وسميح القاسم والجواهري وبدوي الجبل. شعر الحرية والهوية والانتماء.",
  openGraph: {
    title: "شعر الوطنيات — أجمل أبيات شعر الوطن في الشعر العربي | مسامرات شعرية",
    description:
      "أجمل أبيات شعر الوطن العربي — من الشابي وأحمد شوقي إلى محمود درويش وسميح القاسم.",
  },
  alternates: {
    canonical: "https://shi3r.com/explore/themes/wataniyat",
  },
};

const WATANIYAT_VERSES = [
  {
    h1: "إذا الشعبُ يوماً أرادَ الحياةَ",
    h2: "فلا بدَّ أن يستجيبَ القدرْ",
    poet: "أبو القاسم الشابي",
    poetId: 24,
    country: "تونس",
    meaning:
      "أشهر بيت في الشعر العربي الحديث — يؤكد أن إرادة الشعوب قوة تتجاوز كل عائق، وأن القدر نفسه لا يملك إلا أن يستجيب للأمم التي تختار الحياة حرةً أبيّة.",
  },
  {
    h1: "ولا بدَّ لليلِ أن ينجليَ",
    h2: "ولا بدَّ للقيدِ أن ينكسرْ",
    poet: "أبو القاسم الشابي",
    poetId: 24,
    country: "تونس",
    meaning:
      "تتمة المقطع الخالد من قصيدة 'إرادة الحياة' — رسالة أمل راسخة بأن كل ظلم إلى زوال، وكل قيد إلى انكسار، وكل ليل لا بدّ له من فجر.",
  },
  {
    h1: "وطني لو شُغلتُ بالخلدِ عنهُ",
    h2: "نازعتني إليهِ في الخلدِ نفسي",
    poet: "أحمد شوقي",
    poetId: 16,
    country: "مصر",
    meaning:
      "أشهر بيت في الحنين للوطن — يقول شوقي إنه لو انشغل بنعيم الخلد فستظل نفسه تنازعه الشوق إلى وطنه. الوطن وجدان لا يُنسى بأي نعيم.",
  },
  {
    h1: "بلادي وإن جارتْ عليَّ عزيزةٌ",
    h2: "وأهلي وإن ضنُّوا عليَّ كرامُ",
    poet: "أحمد شوقي",
    poetId: 16,
    country: "مصر",
    meaning:
      "شعار الوفاء للوطن رغم الجور والقسوة — الانتماء للأرض والأهل لا يشترط العدل ولا الكرم، بل هو حبٌّ غير مشروط يُشبه حبّ الأم.",
  },
  {
    h1: "سلامٌ من صبا بردى أرقُّ",
    h2: "ودمعٌ لا يُكفكفُ يا دمشقُ",
    poet: "أحمد شوقي",
    poetId: 16,
    country: "سوريا",
    meaning:
      "يرسل شوقي سلامه إلى دمشق من منفاه في الأندلس — دموع الاشتياق لعاصمة الأمويين ومهد الحضارة العربية، وبردى نهرها الخالد.",
  },
  {
    h1: "يا دجلةَ الخيرِ يا أمَّ البساتينِ",
    h2: "يا شاهدَ الحضاراتِ والقرونِ",
    poet: "الجواهري",
    poetId: 44,
    country: "العراق",
    meaning:
      "النداء الخالد لنهر دجلة وقلب العراق — يُناديه الجواهري أمّاً للبساتين وشاهداً على حضارات بين النهرين عبر آلاف السنين، من سومر حتى اليوم.",
  },
  {
    h1: "عِشْ عزيزاً أو مُتْ وأنتَ كريمٌ",
    h2: "بينَ عيشٍ يُذِلُّ أو إعدامِ",
    poet: "الجواهري",
    poetId: 44,
    country: "العراق",
    meaning:
      "قاعدة الكرامة التي بنى عليها الجواهري مسيرته — الخيار بين العيش بكرامة والموت بشموخ، لا وسط بينهما، وكلاهما أشرف من حياة الذل والهوان.",
  },
  {
    h1: "سجِّل أنا عربيٌّ",
    h2: "ورقمُ بطاقتي خمسون ألف",
    poet: "محمود درويش",
    poetId: 19,
    country: "فلسطين",
    meaning:
      "المقطع الأشهر من قصيدة 'بطاقة هوية' — صرخة الهوية العربية الفلسطينية في وجه كل من يطلب الإثبات. الرقم والاسم موجودان، والانتماء للأرض لا يحتاج ترخيصاً.",
  },
  {
    h1: "على هذه الأرضِ ما يستحقُّ الحياةَ",
    h2: "تردُّدُ أبريلَ عتبةَ آذارِ",
    poet: "محمود درويش",
    poetId: 19,
    country: "فلسطين",
    meaning:
      "مفتتح قصيدة 'على هذه الأرض' الشهيرة — إعلان حب للحياة والأرض رغم كل شيء. في التفاصيل الصغيرة — تردد الربيع، رائحة الخبز، عيون الأحبة — ما يجعل الحياة تستحق.",
  },
  {
    h1: "يكفيني أن أموتَ على أرضي",
    h2: "وأُدفنَ فيها",
    poet: "فدوى طوقان",
    poetId: 56,
    country: "فلسطين",
    meaning:
      "شعار المقاومة الهادئة عند شاعرة فلسطين — الموت على أرض الوطن ودفنها في ترابه أسمى من أي حياة في المنفى. كلمات قليلة تحمل ثقل أمة بأكملها.",
  },
  {
    h1: "أنا الأرضُ والأرضُ أنا",
    h2: "لا أرضَ بدوني ولا أنا بلا أرض",
    poet: "فدوى طوقان",
    poetId: 56,
    country: "فلسطين",
    meaning:
      "توحّد الشاعرة مع أرضها الفلسطينية حتى الاندماج التام — ليست الأرض ملكاً تحمله، بل هي أرض ولا هوية لها بدونها، والأرض لا معنى لها بدون أهلها.",
  },
  {
    h1: "أنا مِن هذي الأرضِ لستُ راحلاً",
    h2: "جذوريَ في الصخرِ والصخرُ في دمي",
    poet: "سميح القاسم",
    poetId: 35,
    country: "فلسطين",
    meaning:
      "إعلان التجذّر والإقامة الأبدية في الأرض — جذوره لا في التراب اللين بل في الصخر الصلب، والصخر نفسه أصبح جزءاً من دمه، فلا قوة في الأرض تقتلعه.",
  },
  {
    h1: "في النهايةِ ستنتصرُ الحياةُ",
    h2: "وتُزهرُ أرضُنا رغمَ الجراحِ",
    poet: "سميح القاسم",
    poetId: 35,
    country: "فلسطين",
    meaning:
      "رسالة الأمل التي لا تنكسر عند شاعر المقاومة — مهما اشتدّت الجراح وطال الليل، فالحياة أقوى من الموت والأرض أصبر من المحتل، وللزهور موعد مع كل ربيع.",
  },
  {
    h1: "وطنُ الحُرِّ غالٍ ليسَ تُعطيهِ",
    h2: "الأيامُ مَن يطلبُهُ بالضَّعفِ والهوانِ",
    poet: "بدوي الجبل",
    poetId: 36,
    country: "سوريا",
    meaning:
      "حكمة راسخة في علاقة الحرّ بوطنه — الوطن لا يُمنح لمن يطرق بابه خانعاً ذليلاً، بل هو جائزة الشجاعة والكرامة والإباء التي لا تُعطى إلا لمن يستحقها.",
  },
  {
    h1: "وطني الذي أحببتُهُ دمٌ في دمي",
    h2: "ونورٌ في عينيَّ وصوتٌ في فمي",
    poet: "فاروق جويدة",
    poetId: 34,
    country: "مصر",
    meaning:
      "تعريف الشاعر للوطن بلغة الجسد والروح — ليس الوطن أرضاً أو علماً أو نشيداً، بل هو دم يجري في العروق ونور يرى به العيون وصوت يتشكّل منه الكلام.",
  },
];

const COUNTRY_COLORS: Record<string, string> = {
  فلسطين: "#4ade80",
  مصر: "var(--gold)",
  تونس: "#f87171",
  العراق: "#fb923c",
  سوريا: "#c084fc",
};

export default function WataniyatThemePage() {
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
          الوطنيات غرضٌ شعري ازدهر مع الحركات التحررية في العالم العربي —
          بدءاً من مقاومة الاستعمار في مصر وتونس والشام، مروراً بقصائد
          المقاومة الفلسطينية، وصولاً إلى نداءات دجلة والفرات في العراق.
          الوطن هنا ليس مجرد أرض جغرافية، بل هوية ودم وانتماء لا يُنزع.
        </p>
        <p className="text-xs mt-3" style={{ color: "var(--gold)" }}>
          {WATANIYAT_VERSES.length} بيت مختار — من تونس والشام ومصر والعراق وفلسطين
        </p>
      </div>

      {/* Verses */}
      <div className="space-y-6">
        {WATANIYAT_VERSES.map((verse, i) => (
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
                  color: COUNTRY_COLORS[verse.country] ?? "var(--muted)",
                  border: `1px solid ${COUNTRY_COLORS[verse.country] ?? "var(--border)"}`,
                }}
              >
                {verse.country}
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
          url="https://shi3r.com/explore/themes/wataniyat"
          title="شعر الوطنيات — أجمل أبيات شعر الوطن والانتماء"
          text="أجمل أبيات شعر الوطن العربي — من الشابي وأحمد شوقي إلى محمود درويش وسميح القاسم"
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
            name: "شعر الوطنيات — أجمل أبيات شعر الوطن والانتماء",
            description:
              "أجمل أبيات شعر الوطن في الشعر العربي الحديث — الشابي وأحمد شوقي ومحمود درويش وفدوى طوقان وسميح القاسم والجواهري وبدوي الجبل",
            url: "https://shi3r.com/explore/themes/wataniyat",
            inLanguage: "ar",
            hasPart: WATANIYAT_VERSES.map((v) => ({
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
