import Link from "next/link";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import ShareButtons from "@/components/ShareButtons";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "شعر الزهد — أجمل أبيات الزهد في الشعر العربي",
  description:
    "أجمل أبيات الزهد والتأمل في الشعر العربي — من أبي العتاهية والإمام الشافعي والإمام علي. 16 بيت مختار مع شرح معانيها.",
  openGraph: {
    title: "شعر الزهد — أجمل أبيات الزهد في الشعر العربي | مسامرات شعرية",
    description:
      "أجمل أبيات الزهد في الشعر العربي — من أبي العتاهية والإمام الشافعي والإمام علي بن أبي طالب.",
  },
  alternates: {
    canonical: "https://www.shi3r.com/explore/themes/zuhd",
  },
};

const ZUHD_VERSES = [
  // أبو العتاهية
  {
    h1: "إنَّ الشبابَ والفراغَ والجِدَهْ",
    h2: "مفسدةٌ للمرءِ أيُّ مفسدهْ",
    poet: "أبو العتاهية",
    poetId: 29,
    era: "عباسي",
    meaning:
      "ثلاثة أشياء إذا اجتمعت أفسدت الإنسان: الشباب بطيشه، والفراغ بما يملؤه، والمال بما يُغري.",
  },
  {
    h1: "عجبتُ للمرءِ يُصلحُ مالَه",
    h2: "ويُفسدُ ما يُصلحُه عمرُه",
    poet: "أبو العتاهية",
    poetId: 29,
    era: "عباسي",
    meaning:
      "يعجب الشاعر من الإنسان الذي يحرص على ماله لكنه يهدر عمره — فالمال يكسب والعمر لا يُعاد.",
  },
  {
    h1: "تركنا البناءَ على غرورِ عمارةٍ",
    h2: "وبيوتُنا نحنُ فيها وهيَ القبورُ",
    poet: "أبو العتاهية",
    poetId: 29,
    era: "عباسي",
    meaning:
      "نبني الدور ونُشيد القصور واهمين، وبيتنا الحقيقي هو القبر الذي لا مفرّ منه.",
  },
  {
    h1: "إلهي لا تُعذِّبني فإنِّي",
    h2: "مُقرٌّ بالذي قد كانَ منِّي",
    poet: "أبو العتاهية",
    poetId: 29,
    era: "عباسي",
    meaning:
      "ضراعة إلى الله بالاعتراف بالذنب والرجاء في العفو — من أصدق أبيات الزهد في التوبة والخوف.",
  },
  {
    h1: "ألا يا موتُ لم أرَ منكَ بُدّاً",
    h2: "أراكَ تعُمُّ في الدنيا وتَخصّا",
    poet: "أبو العتاهية",
    poetId: 29,
    era: "عباسي",
    meaning:
      "لا مفرَّ من الموت — فهو يشمل الجميع دون استثناء، الصغير والكبير، الشريف والوضيع.",
  },
  {
    h1: "تعالى اللهُ يا دُنيا تعالى",
    h2: "فما يصفو لذي عقلٍ مقامُ",
    poet: "أبو العتاهية",
    poetId: 29,
    era: "عباسي",
    meaning:
      "الدنيا لا تصفو لعاقل — فمن أعمل عقله أدرك أن المقام فيها لا يصفو أبداً.",
  },
  // الإمام الشافعي
  {
    h1: "نعيب زماننا والعيب فينا",
    h2: "وما لزماننا عيبٌ سوانا",
    poet: "الإمام الشافعي",
    poetId: 22,
    era: "عباسي",
    meaning:
      "نلوم الزمان على أحوالنا، والحقيقة أن العيب فينا نحن لا في الزمان — دعوة للمحاسبة الذاتية.",
  },
  {
    h1: "ونهجو ذا الزمان بغير ذنبٍ",
    h2: "ولو نطق الزمان لنا هجانا",
    poet: "الإمام الشافعي",
    poetId: 22,
    era: "عباسي",
    meaning:
      "نهجو الزمان ظلماً، ولو استطاع الزمان الكلام لردَّ علينا الهجاء بأضعاف ما قلنا.",
  },
  {
    h1: "دع الأيام تفعل ما تشاءُ",
    h2: "وطِب نفساً إذا حكم القضاءُ",
    poet: "الإمام الشافعي",
    poetId: 22,
    era: "عباسي",
    meaning:
      "التسليم بالقضاء وطمأنينة النفس — الزهد لا يعني ترك العمل بل الرضا بما قضى الله.",
  },
  {
    h1: "ولا تجزع لحادثة الليالي",
    h2: "فما لحوادث الدنيا بقاءُ",
    poet: "الإمام الشافعي",
    poetId: 22,
    era: "عباسي",
    meaning:
      "لا تحزن للمصائب فهي زائلة — الدنيا وأحداثها لا تدوم، والفرج يأتي بعد الشدة.",
  },
  {
    h1: "وكن رجلاً على الأهوال جلداً",
    h2: "وشيمتك السماحة والوفاءُ",
    poet: "الإمام الشافعي",
    poetId: 22,
    era: "عباسي",
    meaning:
      "التحلّي بالصبر والشجاعة في مواجهة الشدائد، مع الحفاظ على السماحة والوفاء كأصول الشخصية.",
  },
  {
    h1: "إذا المرء لا يرعاك إلا تكلفاً",
    h2: "فدعه ولا تُكثر عليه التأسفا",
    poet: "الإمام الشافعي",
    poetId: 22,
    era: "عباسي",
    meaning:
      "من لم يُعطك وداده عفواً بلا تصنّع فدعه — الزهد في الناس كالزهد في الدنيا.",
  },
  {
    h1: "احفظ لسانك أيها الإنسانُ",
    h2: "لا يلدغنّك إنه ثُعبانُ",
    poet: "الإمام الشافعي",
    poetId: 22,
    era: "عباسي",
    meaning:
      "اللسان ثعبان يلدغ صاحبه قبل غيره — الصمت في موضعه من أعظم الزهد عن الباطل.",
  },
  {
    h1: "ففي الناس أبدال وفي الترك راحةٌ",
    h2: "وفي القلب صبرٌ للحبيب ومعرفا",
    poet: "الإمام الشافعي",
    poetId: 22,
    era: "عباسي",
    meaning:
      "للناس بدلاء، وفي ترك ما لا يُفيد راحة — والقلب يجد الصبر بالمعرفة والتسليم.",
  },
  // الإمام علي بن أبي طالب
  {
    h1: "دواؤك فيك وما تُبصرُ",
    h2: "وداؤك منك وما تشعرُ",
    poet: "الإمام علي بن أبي طالب",
    poetId: 21,
    era: "إسلامي",
    meaning:
      "الدواء في نفس الإنسان وهو لا يراه، والداء يأتي منه وهو لا يشعر — دعوة للتأمل الداخلي.",
  },
  {
    h1: "وتحسبُ أنك جرمٌ صغيرٌ",
    h2: "وفيك انطوى العالمُ الأكبرُ",
    poet: "الإمام علي بن أبي طالب",
    poetId: 21,
    era: "إسلامي",
    meaning:
      "الإنسان يحسبه الجسد الصغير، لكنه يحمل في داخله عالماً أكبر من الكون — فلسفة الوجود الإنساني.",
  },
];

const ERA_COLORS: Record<string, string> = {
  إسلامي: "#4a6741",
  عباسي: "#f87171",
  حديث: "#60a5fa",
};

export default function ZuhdThemePage() {
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
        <h1 className="text-3xl">الزهد</h1>
        <ThemeToggle />
      </div>

      {/* Intro */}
      <div className="mb-8 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md">
        <p className="text-[var(--muted)] leading-relaxed text-sm">
          شعر الزهد غرضٌ عميق في الأدب العربي، يدعو فيه الشاعر إلى التأمل في
          فناء الدنيا والزهد في ملذّاتها والتوجه إلى ما هو أبقى. من أبي
          العتاهية في العصر العباسي إلى الإمام الشافعي والإمام علي، هنا أجمل ما
          قاله الشعراء في الزهد والموعظة.
        </p>
        <p className="text-xs mt-3" style={{ color: "var(--gold)" }}>
          {ZUHD_VERSES.length} بيت مختار
        </p>
      </div>

      {/* Verses */}
      <div className="space-y-6">
        {ZUHD_VERSES.map((verse, i) => (
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
          url="https://www.shi3r.com/explore/themes/zuhd"
          title="شعر الزهد — أجمل أبيات الزهد في الشعر العربي"
          text="أجمل أبيات الزهد في الشعر العربي — من أبي العتاهية والإمام الشافعي والإمام علي"
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
            name: "شعر الزهد — أجمل أبيات الزهد في الشعر العربي",
            description:
              "أجمل أبيات الزهد في الشعر العربي من أبي العتاهية والإمام الشافعي والإمام علي",
            url: "https://www.shi3r.com/explore/themes/zuhd",
            inLanguage: "ar",
            hasPart: ZUHD_VERSES.map((v) => ({
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
