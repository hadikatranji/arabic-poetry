import Link from "next/link";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "شعر الغزل — أجمل أبيات الحب في الشعر العربي",
  description:
    "أجمل أبيات الغزل والحب في الشعر العربي — من معلقة امرئ القيس وعنترة إلى مجنون ليلى وأبي فراس الحمداني. 10 أبيات مختارة مع شرح معانيها.",
  openGraph: {
    title: "شعر الغزل | مسامرات شعرية",
    description:
      "أجمل أبيات الغزل والحب في الشعر العربي — من امرئ القيس وعنترة ومجنون ليلى وأبي فراس الحمداني.",
  },
  alternates: {
    canonical: "https://shi3r.com/explore/themes/ghazal",
  },
};

const GHAZAL_VERSES = [
  {
    h1: "قِفَا نَبْكِ مِنْ ذِكْرَى حَبِيبٍ وَمَنْزِلِ",
    h2: "بِسِقْطِ اللِّوَى بَيْنَ الدَّخُولِ فَحَوْمَلِ",
    poet: "امرؤ القيس",
    poetId: 1,
    era: "جاهلي",
    source: "معلقة امرئ القيس",
    meaning:
      "يدعو امرؤ القيس صاحبَيه للوقوف والبكاء على ديار محبوبته — مطلع معلقته الشهيرة، وأشهر مطلع في تاريخ الغزل العربي.",
  },
  {
    h1: "أَفَاطِمَ مَهْلاً بَعْضَ هَذَا التَّدَلُّلِ",
    h2: "وَإِنْ كُنْتِ قَدْ أَزْمَعْتِ صَرْمِي فَأَجْمِلِي",
    poet: "امرؤ القيس",
    poetId: 1,
    era: "جاهلي",
    source: "معلقة امرئ القيس",
    meaning:
      "يناجي امرؤ القيس محبوبته فاطمة طالباً منها أن تخفّف من دلالها، وإن عزمت على هجره فلتكن في هجرها جميلة.",
  },
  {
    h1: "يَا دَارَ عَبْلَةَ بِالجِوَاءِ تَكَلَّمِي",
    h2: "وَعِمِي صَبَاحاً دَارَ عَبْلَةَ وَاسْلَمِي",
    poet: "عنترة بن شداد",
    poetId: 2,
    era: "جاهلي",
    source: "معلقة عنترة",
    meaning:
      "يناجي عنترة ديار محبوبته عبلة بحنين عميق — المطلع الشهير لمعلقته، يُحيّي الديار الخالية بدلاً من ساكنتها الغائبة.",
  },
  {
    h1: "وَإِذَا ذَكَرْتُكِ وَالرِّمَاحُ شَوَارِعٌ",
    h2: "وَالبِيضُ تَقْطُرُ مِنْ دِمَائِهَا قَطْرَا",
    poet: "عنترة بن شداد",
    poetId: 2,
    era: "جاهلي",
    source: "معلقة عنترة",
    meaning:
      "في أشدّ لحظات المعركة حين تُشرع الرماح وتسيل الدماء، يتذكر عنترة عبلة — الحبّ الذي يزيده شجاعةً واشتياقاً.",
  },
  {
    h1: "لِخَوْلَةَ أَطْلالٌ بِبُرْقَةِ ثَهْمَدِ",
    h2: "تَلُوحُ كَبَاقِي الوَشْمِ فِي ظَاهِرِ اليَدِ",
    poet: "طرفة بن العبد",
    poetId: 4,
    era: "جاهلي",
    source: "معلقة طرفة",
    meaning:
      "يقف طرفة على آثار ديار محبوبته خولة التي بلغت من الخفاء مبلغ وشمٍ خافت على اليد — صورة بديعة في تلاشي الذكرى.",
  },
  {
    h1: "أَمُرُّ عَلَى الدِّيَارِ دِيَارِ لَيْلَى",
    h2: "أُقَبِّلُ ذَا الجِدَارَ وَذَا الجِدَارَا",
    poet: "مجنون ليلى",
    poetId: 7,
    era: "أموي",
    source: "ديوان مجنون ليلى",
    meaning:
      "يمرّ قيس على ديار ليلى فيُقبّل جدرانها — صورة من أشهر صور الغزل العذري، حيث يقنع العاشق بلمس الأثر حين يُحرم من المحبوب.",
  },
  {
    h1: "تَعَلَّقْتُ لَيْلَى وَهْيَ ذَاتُ ذُؤَابَةٍ",
    h2: "وَلَمْ يَبْدُ لِلأَتْرَابِ مِنْ ثَدْيِهَا حَجْمُ",
    poet: "مجنون ليلى",
    poetId: 7,
    era: "أموي",
    source: "ديوان مجنون ليلى",
    meaning:
      "يروي مجنون ليلى بداية حبّه لها وهي ما زالت في طفولتها — حبٌّ ولد باكراً وملأ حياته حتى أفضى إلى الجنون.",
  },
  {
    h1: "إِنَّ العُيُونَ الَّتِي فِي طَرْفِهَا حَوَرٌ",
    h2: "قَتَلْنَنَا ثُمَّ لَمْ يُحْيِينَ قَتْلانَا",
    poet: "جرير",
    poetId: 8,
    era: "أموي",
    source: "ديوان جرير",
    meaning:
      "يصف جرير فتنة العيون الحوراء بأنها تقتل العاشقين بنظراتها ثم لا تُحييهم — من أشهر أبيات الغزل في الشعر الأموي.",
  },
  {
    h1: "أَرَاكَ عَصِيَّ الدَّمْعِ شِيمَتُكَ الصَّبْرُ",
    h2: "أَمَا لِلْهَوَى نَهْيٌ عَلَيْكَ وَلا أَمْرُ",
    poet: "أبو فراس الحمداني",
    poetId: 13,
    era: "عباسي",
    source: "الروميات",
    meaning:
      "في أسره لدى الروم، يخاطب أبو فراس نفسه: كيف تصمد دموعك والقلب محترق بالهوى؟ مطلع من أعذب قصائد الشوق في الشعر العباسي.",
  },
  {
    h1: "بَلَى أَنَا مُشْتَاقٌ وَعِنْدِي لَوْعَةٌ",
    h2: "وَلَكِنَّ مِثْلِي لا يُذَاعُ لَهُ سِرُّ",
    poet: "أبو فراس الحمداني",
    poetId: 13,
    era: "عباسي",
    source: "الروميات",
    meaning:
      "يعترف أبو فراس بالشوق واللوعة، لكنه يأبى البوح بها — الكبرياء والحبّ يتعايشان في قلب الفارس الأمير.",
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
          الغزل أعرق أغراض الشعر العربي وأكثرها إنسانيةً. من وقفة امرئ القيس
          على الأطلال باكياً ذكرى حبيبته، إلى عنترة الذي يتذكر عبلة والسيوف
          مسلولة، إلى مجنون ليلى الذي يُقبّل جدران الديار — هنا أجمل ما قاله
          شعراء العرب في الحبّ والشوق عبر العصور.
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
              <div className="flex items-center gap-3">
                <Link
                  href={`/poets/${verse.poetId}`}
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  — {verse.poet}
                </Link>
                <span className="opacity-50">|</span>
                <span className="opacity-70">{verse.source}</span>
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
          url="https://shi3r.com/explore/themes/ghazal"
          title="شعر الغزل — أجمل أبيات الحب في الشعر العربي"
          text="أجمل أبيات الغزل والحب في الشعر العربي — من امرئ القيس ومجنون ليلى وأبي فراس الحمداني"
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
              "أجمل أبيات الغزل والحب في الشعر العربي من امرئ القيس وعنترة ومجنون ليلى وأبي فراس الحمداني",
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
