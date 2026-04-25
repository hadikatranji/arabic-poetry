import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout from "@/components/BlogPost";
import { getPostBySlug } from "@/lib/blog-data";

const post = getPostBySlug("ahmad-shawqi-amir-al-shuara")!;

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
  { id: "intro", title: "من هو أحمد شوقي؟" },
  { id: "nahj-al-burda", title: "نهج البردة: مدح النبي" },
  { id: "watani", title: "شعر الوطن: مصر في القلب" },
  { id: "hikma", title: "الحكمة الشوقية" },
  { id: "muallim", title: "قم للمعلم: أشهر بيت في التربية" },
  { id: "manfa", title: "المنفى والعودة" },
  { id: "explore", title: "استكشف المزيد" },
];

const NAHJ_VERSE = {
  verse: "وُلِدَ الهُدى فَالكائِناتُ ضِياءُ\nوَفَمُ الزَّمانِ تَبَسُّمٌ وَثَناءُ",
  poet: "أحمد شوقي — نهج البردة",
  meaning:
    "من أشهر أبيات شوقي على الإطلاق، يصف فيها ميلاد النبي محمد ﷺ كحدث كوني يُضيء الوجود كله. الكائنات لا تشهد ولادة إنسان — بل تشهد بزوغ النور. الزمان نفسه يبتسم ويُثني. البيت جمع بين الصورة الكونية الكبرى والدفء الإنساني الحميم في شطرين.",
};

const WATANI_VERSE = {
  verse: "وَطَني لَو شُغِلتُ بِالخُلدِ عَنهُ\nنازَعَتني إِلَيهِ في الخُلدِ نَفسي",
  poet: "أحمد شوقي — شعر الوطن",
  meaning:
    "بيت يُلخّص فلسفة الانتماء عند شوقي: الجنة لن تُنسيه مصر. حتى في الخلد — حيث لا حزن ولا اشتياق — ستظل نفسه تتوق إلى الوطن. هذا المبالغة الجميلة ليست مجرد شعر بل هي تعبير عن هوية عميقة لا تُقتلع بالسعادة ولا بالنعيم.",
};

const HIKMA_VERSE = {
  verse: "وَإِذا أَرادَ اللَّهُ نَشرَ فَضيلَةٍ\nطُوِيَت أَتاحَ لَها لِسانَ حَسودٍ",
  poet: "أحمد شوقي",
  meaning:
    "حكمة عميقة من حِكَم شوقي: الحاسد يعتقد أنه يؤذي — لكن الله يجعل حسده أداةً لنشر ما أراد إخفاءه. الفضيلة المكتومة تُنشر بلسان المُعادي. التاريخ يُثبت هذه الحكمة مراراً: كل مَن هاجم عظيماً ضاعف شهرته.",
};

const MUALLIM_VERSE = {
  verse: "قُم لِلمُعَلِّمِ وَفِّهِ التَّبجيلا\nكادَ المُعَلِّمُ أَن يَكونَ رَسولا",
  poet: "أحمد شوقي — رسالة المعلم",
  meaning:
    "أشهر بيت في مدح المعلم في تاريخ الأدب العربي. شوقي يضع المعلم في مرتبة تقترب من مرتبة الرسالة — الرسول مُعلِّم بعثه الله، والمعلم رسول يبعثه المجتمع. «كاد» تزيد المعنى بلاغةً: لم يقل «هو رسول» بل قال إنه يكاد — وهذا التردد هو أبلغ تشريف.",
};

export default function AhmadShawqiPost() {
  return (
    <BlogPostLayout post={post} tableOfContents={TOC}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section id="intro">
        <h2 className="text-xl text-[var(--accent)] mt-2 mb-3">
          أمير الشعراء — لقبٌ استحقّه
        </h2>
        <p>
          في عام 1927م، اجتمع الشعراء العرب في القاهرة وتوّجوا أحمد شوقي
          بلقب «أمير الشعراء» — ليس مجاملةً بل اعترافاً. كان شوقي (1868–1932م)
          قد أنتج في تلك اللحظة ديواناً يجمع بين الروح الكلاسيكية العربية
          والروح الحديثة، بين المدح الديني والشعر الوطني والحكمة والغزل.
        </p>
        <p>
          وُلد في القاهرة لأسرة من أصول شركسية ويونانية وعربية، وتربّى في
          بلاط الخديوي توفيق، ثم درس القانون في فرنسا. هذه الهوية المتشعّبة
          أعطته مزيجاً نادراً: أعماق اللغة العربية مع نافذة مفتوحة على
          الغرب وأدبه. عاد من باريس شاعراً متكاملاً يرى في العربية لغة العالم.
        </p>
        <p>
          ما يميّز شوقي هو أنه لم يُقلّد القدماء — بل استوعبهم ثم تجاوزهم.
          حين يقرأ المتنبي والبحتري والبوصيري، تشعر أن شوقي تلميذٌ نجيب يحمل
          إرث الكلاسيك ويُجدّد روحه.
        </p>
      </section>

      <section id="nahj-al-burda">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          نهج البردة — أجمل ما قيل في مدح النبي
        </h2>
        <p className="text-[var(--muted)] mb-5">
          كتب شوقي «نهج البردة» على منوال بردة البوصيري الشهيرة، في مدح النبي
          محمد ﷺ. وقد نسج القصيدة بروح عصره وذوقه الأدبي، فجاءت تُنافس الأصل
          في شهرتها. افتتحها بواحدٍ من أجمل أبياته على الإطلاق:
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {NAHJ_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            {NAHJ_VERSE.meaning}
          </p>
        </div>
        <p>
          نهج البردة ليست مجرد قصيدة مدح — بل هي شهادة فنية لشاعر يؤمن أن
          أرقى ما يصنعه القلم هو الرفع، لا الهجاء ولا العتاب. شوقي في هذه
          القصيدة يجمع بين الإيمان العميق والصنعة الشعرية المُحكمة، فتُقرأ
          في المجالس الدينية كما تُقرأ في دروس الأدب.
        </p>
        <p>
          ظلّت نهج البردة تُنشد في المحافل الإسلامية من المغرب إلى إندونيسيا،
          وهو دليل على قدرتها على تجاوز الزمن والجغرافيا — كما فعلت بردة
          البوصيري من قبلها بستة قرون.
        </p>
      </section>

      <section id="watani">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          شعر الوطن — مصر في قلب شوقي
        </h2>
        <p className="text-[var(--muted)] mb-5">
          لم يكن شوقي شاعر بلاط فحسب — كان شاعر وطن. مصر كانت في شعره روحاً
          لا مجرد موضوع. وحين نُفي إلى إسبانيا إبان الحرب العالمية الأولى
          (1915–1919م)، تعمّقت هذه العلاقة وأصبحت لهيباً حقيقياً. من
          قصائد الوطن الشوقية الأكثر تعبيراً:
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {WATANI_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            {WATANI_VERSE.meaning}
          </p>
        </div>
        <p>
          الشعر الوطني عند شوقي لا يكتفي بالتصريح — بل يصنع صوراً تُغوص في
          الوجدان. مصر عنده هي النيل والأهرام والتاريخ والحضارة والناس معاً.
          لم يقتصر على الفخر بالماضي بل دعا إلى النهضة والعلم والوحدة
          العربية بلغة الشعر لا لغة السياسة.
        </p>
        <p>
          كتب في النيل والسويس والجيش المصري، وفي أبطال الحرية من عرابي إلى
          مصطفى كامل. كان لسان حال جيل نهضوي يرى مصر تستيقظ على أنقاض قرون
          من النوم.
        </p>
      </section>

      <section id="hikma">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          الحكمة الشوقية — فلسفة في بيتين
        </h2>
        <p className="text-[var(--muted)] mb-5">
          من أبرز ما يميّز شوقي قدرته على صياغة الحكمة الإنسانية العميقة
          في بيت أو بيتين تلتصق بالذاكرة وتصمد أمام الزمن. يكفيك بيت واحد
          من حكمه لتحمله معك طوال حياتك:
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {HIKMA_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            {HIKMA_VERSE.meaning}
          </p>
        </div>
        <p>
          حكم شوقي ليست مجرد مواعظ — بل هي ملاحظات دقيقة للطبيعة البشرية
          نسجها في أبيات موزونة مقفّاة. الفارق بين الحكمة المكتوبة نثراً
          والحكمة المنظومة شعراً هو الفارق بين الخبر والفن: الأولى تُقنع
          العقل، والثانية تُسكن القلب.
        </p>
        <p>
          ومن أشهر حِكَمه أيضاً ما قاله في بناء الأمم: إذ ربط نهضة الشعوب
          بالأخلاق قبل القوة، في إشارة إلى أن الحضارة تُبنى من الداخل لا
          من الخارج.
        </p>
      </section>

      <section id="muallim">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          قم للمعلم — أشهر بيت في تاريخ التربية العربية
        </h2>
        <p className="text-[var(--muted)] mb-5">
          قد لا يعرف كثيرون أن أحمد شوقي كتب هذا البيت، لكنهم جميعاً
          يحفظونه. أصبح مرجعاً ثقافياً في كل مدرسة عربية من المحيط إلى
          الخليج — يُكتب على الجدران ويُحفظ في الصفوف ويُلقى في مناسبات
          تكريم المعلمين:
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {MUALLIM_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            {MUALLIM_VERSE.meaning}
          </p>
        </div>
        <p>
          هذان البيتان من قصيدة أطول كتبها شوقي في «رسالة المعلم»، وهي من
          قصائده التربوية التي تُجسّد رؤيته للنهضة: الأمة لا تقوم إلا على
          تعليم حقيقي، والتعليم لا يقوم إلا على معلم مُكرَّم.
        </p>
        <p>
          «قم» فعل أمر بالقيام احتراماً — كما يقوم المرء لإمام أو أمير.
          شوقي يطلب من المجتمع هذا القيام لا في يوم خاص، بل في كل لقاء.
          والبيت الثاني يُعلّل: لأن المعلم يكاد يكون رسولاً — وهذا التعليل
          هو الذي جعل البيت خالداً.
        </p>
      </section>

      <section id="manfa">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          المنفى والعودة — شوقي بين إشبيلية والقاهرة
        </h2>
        <p>
          في عام 1915م، نفت السلطات البريطانية أحمد شوقي إلى إسبانيا لمعارضته
          الاحتلال وارتباطه بالخديوي عباس الثاني. أمضى أربع سنوات في إشبيلية —
          المدينة التي كانت يوماً قرطبة الإسلام — يراقب من بعيد مصر تحترق في
          الحرب وتئنّ تحت الاحتلال.
        </p>
        <p>
          المفارقة أن المنفى أعطاه بُعداً وجدانياً جديداً: في إشبيلية قرأ
          التاريخ الأندلسي ورثى ما ضاع من مجد المسلمين، وكتب عن إسبانيا
          بعيون عربية تعرف معنى الفقدان. حين عاد عام 1919م تلقّته مصر بترحاب
          الأمة لفيلسوفها العائد.
        </p>
        <p>
          بعد العودة بسنوات قليلة — وفي قمة مجده — رحل أحمد شوقي في
          الثالث عشر من أكتوبر 1932م، تاركاً ديواناً أُطلق عليه «الشوقيات»
          وأربع مسرحيات شعرية، ومكانةً لم يُنازعه فيها أحد: أمير الشعراء
          العرب في العصر الحديث.
        </p>
      </section>

      <section id="explore">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          استكشف عالم الشعر العربي
        </h2>
        <p className="text-[var(--muted)] mb-4">
          شوقي بوابة واسعة إلى الشعر العربي الحديث — وراءه كنوز لا تنتهي.
          استكشف المزيد من الشعراء والموضوعات على مسامرات شعرية.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <Link
            href="/explore/themes/hikma"
            className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
          >
            <p className="text-[var(--accent)] mb-1">شعر الحكمة</p>
            <p className="text-[var(--muted)] text-xs">أبيات الفلسفة والتأمل</p>
          </Link>
          <Link
            href="/explore/themes/wataniyyat"
            className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
          >
            <p className="text-[var(--accent)] mb-1">شعر الوطنيات</p>
            <p className="text-[var(--muted)] text-xs">أبيات حبّ الأوطان</p>
          </Link>
          <Link
            href="/memorize"
            className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
          >
            <p className="text-[var(--accent)] mb-1">احفظ الأبيات</p>
            <p className="text-[var(--muted)] text-xs">بتقنية التكرار المتباعد</p>
          </Link>
        </div>
        <p className="text-[var(--muted)] text-sm mb-2">
          مقالات ذات صلة:
        </p>
        <ul className="space-y-1 text-sm">
          <li>
            <Link
              href="/blog/posts/al-burda-al-shareefa"
              className="text-[var(--accent)] hover:underline"
            >
              البردة الشريفة — أشهر قصيدة مدح في تاريخ الإسلام
            </Link>
          </li>
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
              href="/blog/posts/shir-an-al-watan"
              className="text-[var(--accent)] hover:underline"
            >
              شعر عن الوطن — أجمل ما قيل في حبّ الأوطان
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
