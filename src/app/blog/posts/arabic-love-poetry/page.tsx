import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout from "@/components/BlogPost";
import { getPostBySlug } from "@/lib/blog-data";

const post = getPostBySlug("arabic-love-poetry")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  openGraph: {
    title: `${post.title} | مسامرات شعرية`,
    description: post.description,
  },
};

const TOC = [
  { id: "intro", title: "الغزل في الشعر العربي" },
  { id: "udhri", title: "الغزل العذري" },
  { id: "sensual", title: "الغزل الصريح" },
  { id: "modern", title: "الغزل الحديث" },
  { id: "best", title: "أجمل أبيات الغزل" },
];

const UDHRI_VERSES = [
  {
    poet: "قيس بن الملوح (مجنون ليلى)",
    verse: "أُريد أُعزّيه عن ليلى فيَعصيني\nهيهاتَ مَن يملك القلبَ المعنّى",
    meaning: "يحاول أن يُعزّي قلبه عن ليلى فيأبى — القلب العاشق لا يطيع العقل.",
  },
  {
    poet: "جميل بثينة",
    verse: "أَلا لَيتَ شِعري هَل أَبيتَنَّ لَيلَةً\nوَبَيني وَبَينَ الظاعِنينَ قَريبُ",
    meaning: "حنين العاشق إلى قرب محبوبته — وهو حنين لم يتحقق أبداً في قصته.",
  },
];

const SENSUAL_VERSES = [
  {
    poet: "أبو نواس",
    verse: "دَعْ عَنكَ لَومي فإنَّ اللَّومَ إغراءُ\nوَداوِني بِالَّتي كانَت هيَ الداءُ",
    meaning: "يطلب من لائمه أن يكفّ — فاللوم لا يُبعد العاشق عن هواه بل يزيده.",
  },
];

const MODERN_VERSES = [
  {
    poet: "نزار قباني",
    verse: "أحبّكِ فوق ما تتصوّرين\nوأكثر مما تحتملين الكلمات",
    meaning: "الحب عند نزار يتجاوز اللغة — وهو مفارقة جميلة من شاعر يعيش على الكلمات.",
  },
  {
    poet: "محمود درويش",
    verse: "أنتِ منذ الآن ليلايَ وما تبقّى من عمري\nأنتِ... أنتِ",
    meaning: "إيقاع التكرار الدرويشي — التوقف عند 'أنتِ' يقول ما لا تستطيع الجملة الكاملة قوله.",
  },
  {
    poet: "إيليا أبو ماضي",
    verse: "أنا لا أعرف من أكون\nلكنّي أعرف أنّي أُحبّ",
    meaning: "المحبة عنده أصل والوجود فرع — وهي فلسفة رومانسية على طريقة أبي ماضي.",
  },
];

const ALL_BEST = [
  { poet: "امرؤ القيس", verse: "ولو أنّ ما أسعى لأدنى معيشةٍ\nكفاني ولم أطلب قليلٌ من المالِ" },
  { poet: "عنترة عن عبلة", verse: "وإنّي لأرجو منكِ نظرةَ عاطفٍ\nأُعاد بها من بعد ما بي من الضنا" },
  { poet: "جميل بثينة", verse: "بثينةُ قالت يا جميلُ أَفَنتني\nفقلتُ كلانا يا بثينُ مُفتَّنُ" },
];

export default function ArabicLovePoetryPost() {
  return (
    <BlogPostLayout post={post} tableOfContents={TOC}>
      <section id="intro">
        <h2 className="text-xl text-[var(--accent)] mt-2 mb-3">الغزل في الشعر العربي</h2>
        <p>
          الغزل أقدم أغراض الشعر العربي وأكثرها قرباً من الإنسان. منذ الشعر
          الجاهلي حتى اليوم، ظلّ الشعراء العرب يكتبون عن الحب بطرق لا تُحصى.
          ومن المفارقات الجميلة أن العربية — لغة بدوية نشأت في صحراء قاسية —
          أنتجت أرقّ أشعار الغزل في تاريخ الأدب الإنساني.
        </p>
        <p>
          ينقسم الغزل العربي تقليدياً إلى مدرستين كبيرتين: الغزل العذري الذي يرفع
          الحب إلى مرتبة الإيمان، والغزل الصريح الذي يتناول الحب من منظور مختلف.
          ثم جاء الشعر الحديث ليمزج الاثنين ويبتكر لغة عاطفية جديدة.
        </p>
      </section>

      <section id="udhri">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">الغزل العذري</h2>
        <p className="text-[var(--muted)] mb-5">
          الغزل العذري نسبة إلى قبيلة عُذرة التي يُقال عنها &ldquo;يموت أبناؤها حباً&rdquo;.
          هو حب أفلاطوني نقيّ يُقدّس المحبوبة ولا يطلب منها سوى النظرة والكلمة.
          أشهر أزواجه: قيس وليلى، جميل وبثينة، كثيّر وعزّة.
        </p>
        <div className="space-y-6">
          {UDHRI_VERSES.map((item, i) => (
            <div
              key={i}
              className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md"
            >
              <div className="text-xs text-[var(--accent)] mb-3">{item.poet}</div>
              <p className="verse-text text-lg text-center mb-4 whitespace-pre-line leading-loose">
                {item.verse}
              </p>
              <p className="text-[var(--muted)] text-sm leading-relaxed">
                <strong className="text-[var(--fg)]">المعنى: </strong>
                {item.meaning}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="sensual">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">الغزل الصريح</h2>
        <p className="text-[var(--muted)] mb-5">
          ازدهر الغزل الصريح في العصر العباسي مع أبي نواس وأمثاله. هو شعر
          يحتفي بالجمال المحسوس ولا يستحيي من الحياة كما هي.
        </p>
        <div className="space-y-6">
          {SENSUAL_VERSES.map((item, i) => (
            <div
              key={i}
              className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md"
            >
              <div className="text-xs text-[var(--accent)] mb-3">{item.poet}</div>
              <p className="verse-text text-lg text-center mb-4 whitespace-pre-line leading-loose">
                {item.verse}
              </p>
              <p className="text-[var(--muted)] text-sm leading-relaxed">
                <strong className="text-[var(--fg)]">المعنى: </strong>
                {item.meaning}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="modern">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">الغزل الحديث</h2>
        <p className="text-[var(--muted)] mb-5">
          أعاد الشعراء المحدثون اختراع الغزل بلغة أقرب إلى الروح المعاصرة،
          محتفظين بعمق الكلاسيكيين وأضافوا إليه بُعداً وجودياً وسياسياً.
        </p>
        <div className="space-y-6">
          {MODERN_VERSES.map((item, i) => (
            <div
              key={i}
              className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md"
            >
              <div className="text-xs text-[var(--accent)] mb-3">{item.poet}</div>
              <p className="verse-text text-lg text-center mb-4 whitespace-pre-line leading-loose">
                {item.verse}
              </p>
              <p className="text-[var(--muted)] text-sm leading-relaxed">
                <strong className="text-[var(--fg)]">المعنى: </strong>
                {item.meaning}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="best">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">أجمل أبيات الغزل عبر العصور</h2>
        <div className="space-y-5">
          {ALL_BEST.map((item, i) => (
            <div
              key={i}
              className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md"
            >
              <div className="text-xs text-[var(--accent)] mb-2">{item.poet}</div>
              <p className="verse-text text-base text-center">{item.verse}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center">
        <p className="text-[var(--accent)] mb-3">جرّب لعبة المساجلة الشعرية</p>
        <Link
          href="/musajalah"
          className="inline-block bg-[var(--fg)] text-[var(--bg)] px-6 py-2 rounded text-sm hover:opacity-80 transition-opacity"
        >
          العب الآن
        </Link>
      </div>
    </BlogPostLayout>
  );
}
