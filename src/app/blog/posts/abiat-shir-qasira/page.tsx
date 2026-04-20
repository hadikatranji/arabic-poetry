import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout from "@/components/BlogPost";
import { getPostBySlug } from "@/lib/blog-data";

const post = getPostBySlug("abiat-shir-qasira")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  openGraph: {
    title: `${post.title} | مسامرات شعرية`,
    description: post.description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.description,
  datePublished: post.date,
  author: {
    "@type": "Organization",
    name: "مسامرات شعرية",
  },
  publisher: {
    "@type": "Organization",
    name: "مسامرات شعرية",
    url: "https://www.shi3r.com",
  },
  inLanguage: "ar",
};

const TOC = [
  { id: "intro", title: "البيت الواحد الذي يكفي" },
  { id: "hikma", title: "أبيات في الحكمة" },
  { id: "ghazal", title: "أبيات في الغزل والحب" },
  { id: "watan", title: "أبيات في الوطن" },
  { id: "fakhr", title: "أبيات في الفخر والشجاعة" },
  { id: "explore", title: "استكشف المزيد" },
];

const MUTANABBI_VERSE = {
  verse:
    "على قَدرِ أهلِ العَزمِ تأتي العَزائِمُ\nوتأتي على قَدرِ الكِرامِ المَكارِمُ",
  poet: "المتنبي",
  meaning:
    "من أشهر ما قاله المتنبي في الطموح والعزم. المعنى: العزائم الكبيرة لا تُلهم إلا النفوس الكبيرة، والمكارم لا تصدر إلا من كرام الأصل والخُلق. البيت يُلمح إلى أن العظمة لا تُكتسب بالادّعاء بل بحقيقة النفس.",
};

const SHAFII_VERSE = {
  verse:
    "نَعيبُ زَمانَنا وَالعَيبُ فينا\nوَما لِزَمانِنا عَيبٌ سِوانا",
  poet: "الإمام الشافعي",
  meaning:
    "بيت منسوب إلى الإمام الشافعي في ديوانه، وهو من أكثر الأبيات تداولاً حتى اليوم. المعنى: البشر يلومون العصر والزمان على مشكلاتهم، والحقيقة أن العيب فيهم هم — الزمن بريء. هذا النقد الذاتي الشجاع نادر في ثقافة تُسهل إلقاء اللوم على الآخر.",
};

const IBN_ZAYDUN_VERSE = {
  verse:
    "إني ذَكرتُكِ بالزَّهراءِ مُشتاقاً\nوالأُفقُ طَلقٌ ومَرأى الأرضِ قد راقا",
  poet: "ابن زيدون",
  meaning:
    "مطلع قصيدة ابن زيدون الشهيرة، كتبها من مدينة الزهراء (القصر الأموي قرب قرطبة) يتذكّر فيها حبيبته ولادة بنت المستكفي. الأُفق الطلق والأرض الجميلة يتناقضان مع ألم الغياب — الطبيعة جميلة لكن المشاعر موجعة. من أرقّ مطالع الغزل الأندلسي.",
};

const TUQAN_VERSE = {
  verse:
    "وطني لو شُغِلتُ بالخُلدِ عنهُ\nنازَعتني إليهِ في الخُلدِ نَفسي",
  poet: "إبراهيم طوقان",
  meaning:
    "بيت الشاعر الفلسطيني إبراهيم طوقان (1905–1941م)، يُلخّص فكرة الوطن كانتماء لا يمكن اجتثاثه حتى بالجنّة. لو كنت في الجنة وشُغلت عن وطني، لظلّت نفسي تشتاق إليه. بيت يُردَّد في الأدب الفلسطيني والعربي كرمز لعمق الانتماء.",
};

const ABU_TAMMAM_VERSE = {
  verse:
    "السيفُ أصدقُ إنباءً من الكُتُبِ\nفي حدِّهِ الحدُّ بينَ الجِدِّ واللعبِ",
  poet: "أبو تمام",
  meaning:
    "مطلع قصيدة أبي تمام في فتح عمورية (838م)، وهو من أشهر مطالع الشعر العربي. المعنى: السيف (العمل والحسم) أصدق خبراً من الكتب والعلم النظري — الفرق بين الجدّ واللعب يُعرف بالفعل لا بالكلام. الحدّ المادي للسيف يوازي الحدّ الفاصل بين الأمور الجدية والتافهة.",
};

const MUTANABBI_FAKHR_VERSE = {
  verse:
    "أنا الذي نَظَرَ الأعمى إلى أدَبي\nوأسمَعَت كَلِماتي من به صَمَمُ",
  poet: "المتنبي",
  meaning:
    "من أعظم أبيات الفخر والثقة بالنفس في الشعر العربي. المتنبي يدّعي أن شعره بلغ من الروعة أن الأعمى يرى جماله والأصم يسمع موسيقاه — مبالغة بلاغية تُعبّر عن يقينه المطلق بعبقريته. هذا الصدق الصريح في الثقة بالنفس جعله محبوباً ومكروهاً في آنٍ معاً.",
};

export default function AbiatShirQasiraPost() {
  return (
    <BlogPostLayout post={post} tableOfContents={TOC}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section id="intro">
        <h2 className="text-xl text-[var(--accent)] mt-2 mb-3">
          البيت الواحد الذي يكفي
        </h2>
        <p>
          في الشعر العربي، كثيراً ما يُختصر الديوان كلّه في بيت واحد. بيت
          يُحمل في الذاكرة دهراً، يُردَّد في مجلس أو يُكتب على جدار، يُعبّر
          عمّا لا تستطيع الفقرات الطويلة التعبير عنه. هذه القدرة على الاختزال
          والكثافة هي ما يجعل الشعر العربي فريداً بين الآداب العالمية.
        </p>
        <p>
          البحث عن «أبيات شعر قصيرة» يعكس حاجة حقيقية: ليس كل القراء لديهم
          وقت لقصيدة كاملة، لكن الجميع يحمل في قلبه مكاناً لبيت واحد يلمسه.
          في هذا المقال نختار لك أجمل الأبيات القصيرة المعبّرة في الشعر
          العربي — حكمة، وغزلاً، ووطنيات، وفخراً — مع شرح معنى كل بيت.
        </p>
      </section>

      <section id="hikma">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          أبيات قصيرة في الحكمة والحياة
        </h2>
        <p className="text-[var(--muted)] mb-5">
          الحكمة في بيتين — هذه هي عبقرية الشعر العربي. من المتنبي إلى
          الشافعي، صاغ الشعراء رؤى فلسفية كاملة في سطرين لا يُنسيان.
        </p>

        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-4">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {MUTANABBI_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المتنبي — </strong>
            {MUTANABBI_VERSE.meaning}
          </p>
        </div>

        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {SHAFII_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">الإمام الشافعي — </strong>
            {SHAFII_VERSE.meaning}
          </p>
        </div>

        <p>
          لاحظ كيف أن الشافعي في بيت واحد يقلب المنظور كلياً: بدلاً من «الزمان
          سيئ»، يقول «الزمان بريء ونحن من نُلوّثه». هذا النوع من النقد الذاتي
          الشجاع نادر ويجعل البيت خالداً لأنه يُربك القارئ بالحق.
        </p>
      </section>

      <section id="ghazal">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          أبيات قصيرة في الغزل والحب
        </h2>
        <p className="text-[var(--muted)] mb-5">
          ابن زيدون (1003–1071م)، شاعر قرطبة الأكبر، أحبّ ولادة بنت
          المستكفي حبّاً جمع بين الشعر والسياسة والمأساة. في إحدى زياراته
          لمدينة الزهراء (القصر الأموي قرب قرطبة) كتب هذه القصيدة متذكّراً حبيبته:
        </p>

        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {IBN_ZAYDUN_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">ابن زيدون — </strong>
            {IBN_ZAYDUN_VERSE.meaning}
          </p>
        </div>

        <p>
          ما يميّز هذا المطلع أنه يُقدّم الغياب من خلال الحضور: الأفق الجميل
          والأرض الجذابة تزيد من ألم الغياب بدل أن تُخفّفه. هذا التوتّر بين
          جمال المكان وألم الفُرقة هو روح الغزل الأندلسي.
        </p>
      </section>

      <section id="watan">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          أبيات قصيرة في الوطن
        </h2>
        <p className="text-[var(--muted)] mb-5">
          إبراهيم طوقان (1905–1941م)، الشاعر الفلسطيني الذي وصف وطنه بحرارة
          نادرة. مات شاباً عن ست وثلاثين سنة، لكنه ترك للأدب الفلسطيني
          والعربي أبياتاً لا تُنسى:
        </p>

        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {TUQAN_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">إبراهيم طوقان — </strong>
            {TUQAN_VERSE.meaning}
          </p>
        </div>

        <p>
          بيت إبراهيم طوقان فريد لأنه يستخدم فرضية مستحيلة (الجنة) لإثبات
          استحالة نسيان الوطن. لو أن الجنة نفسها لم تكن كافية للسهو عن الوطن،
          فما يفعله الوطن بالنفس أكبر من أي وصف.
        </p>
      </section>

      <section id="fakhr">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          أبيات قصيرة في الفخر والشجاعة
        </h2>
        <p className="text-[var(--muted)] mb-5">
          الفخر في الشعر العربي ليس غروراً فارغاً — بل هو تعبير عن هوية
          وانتماء وثقة. أبو تمام والمتنبي يرفعانه إلى مستوى فلسفي يتجاوز
          حدود الأنا.
        </p>

        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-4">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {ABU_TAMMAM_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">أبو تمام — </strong>
            {ABU_TAMMAM_VERSE.meaning}
          </p>
        </div>

        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {MUTANABBI_FAKHR_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المتنبي — </strong>
            {MUTANABBI_FAKHR_VERSE.meaning}
          </p>
        </div>

        <p>
          الفرق بين بيت أبي تمام وبيت المتنبي لافت: أبو تمام يتكلم عن الفعل
          الجماعي والحسم السياسي، بينما المتنبي يفخر بذاته الفردية وعبقريته
          الشخصية. كلاهما يمثّل طرفاً حقيقياً في الشعر العربي: شعر الأمة وشعر
          الفرد.
        </p>
      </section>

      <section id="explore">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          ابحث عن المزيد من الأبيات
        </h2>
        <p className="text-[var(--muted)] mb-4">
          هذه الأبيات مجرد بداية. في مسامرات شعرية آلاف الأبيات المُصنّفة حسب
          الشاعر والعصر والموضوع — استكشفها أو اختبر نفسك في المساجلة.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <Link
            href="/explore/themes/hikma"
            className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
          >
            <p className="text-[var(--accent)] mb-1">شعر الحكمة</p>
            <p className="text-[var(--muted)] text-xs">أبيات الحكمة والتأمل</p>
          </Link>
          <Link
            href="/explore/themes/ghazal"
            className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
          >
            <p className="text-[var(--accent)] mb-1">شعر الغزل</p>
            <p className="text-[var(--muted)] text-xs">أبيات الحب والعشق</p>
          </Link>
          <Link
            href="/musajalah"
            className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
          >
            <p className="text-[var(--accent)] mb-1">المساجلة</p>
            <p className="text-[var(--muted)] text-xs">اختبر حفظك للأبيات</p>
          </Link>
        </div>
        <p className="text-[var(--muted)] text-sm mb-2">مقالات ذات صلة:</p>
        <ul className="space-y-1 text-sm">
          <li>
            <Link
              href="/blog/posts/top-10-mutanabbi"
              className="text-[var(--accent)] hover:underline"
            >
              أجمل 10 أبيات للمتنبي — حكمة الشعر العربي
            </Link>
          </li>
          <li>
            <Link
              href="/blog/posts/arabic-love-poetry"
              className="text-[var(--accent)] hover:underline"
            >
              الغزل في الشعر العربي — من العذري إلى الحديث
            </Link>
          </li>
          <li>
            <Link
              href="/blog/posts/shir-an-al-watan"
              className="text-[var(--accent)] hover:underline"
            >
              شعر عن الوطن — أجمل ما قيل في حبّ الأوطان
            </Link>
          </li>
          <li>
            <Link
              href="/blog/posts/how-to-memorize-poetry"
              className="text-[var(--accent)] hover:underline"
            >
              كيف تحفظ الشعر بسرعة — 5 تقنيات علمية
            </Link>
          </li>
        </ul>
      </section>

      <div className="mt-10 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center">
        <p className="text-[var(--accent)] mb-1 text-lg">
          لا يكتمل الشعر إلا بالمساجلة
        </p>
        <p className="text-[var(--muted)] text-sm mb-4">
          جرّب لعبة المساجلة الشعرية: أكمل البيت بحرفه الأخير
        </p>
        <Link
          href="/musajalah"
          className="inline-block bg-[var(--fg)] text-[var(--bg)] px-6 py-2 rounded text-sm hover:opacity-80 transition-opacity"
        >
          ابدأ المساجلة
        </Link>
      </div>
    </BlogPostLayout>
  );
}
