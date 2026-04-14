import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout from "@/components/BlogPost";
import { getPostBySlug } from "@/lib/blog-data";

const post = getPostBySlug("ashaar-al-imam-ali")!;

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
    url: "https://shi3r.com",
  },
  inLanguage: "ar",
};

const TOC = [
  { id: "intro", title: "الإمام علي شاعراً" },
  { id: "dawa", title: "دواؤك فيك — المعرفة الذاتية" },
  { id: "hikma", title: "أبيات في الحكمة والعقل" },
  { id: "saber", title: "أبيات في الصبر والإرادة" },
  { id: "nahj", title: "نهج البلاغة — الشعر في النثر" },
  { id: "explore", title: "استكشف المزيد" },
];

const DAWA_POEM = {
  verses: `دواؤكَ فيكَ وما تشعُرُ
وداؤكَ منكَ وما تُبصِرُ
وتحسَبُ أنَّكَ جِرمٌ صغيرٌ
وفيكَ انطوى العالَمُ الأكبرُ`,
  attribution: "يُنسب إلى الإمام علي بن أبي طالب كرّم الله وجهه",
  meaning:
    "أربعة أبيات تلخّص فلسفة المعرفة الذاتية: الشفاء كامنٌ فيك ولا تدري، والمرض نابعٌ منك ولا ترى. تظنّ أنك جسدٌ صغير وحسب، لكنَّ العالَم الأكبر كله مطوِيٌّ داخلك — فالإنسان الذي يعرف نفسه يعرف كون بأسره.",
};

const HIKMA_VERSE = {
  verse: `لا تَقُل قد ذهبَ أهلُ الفضلِ
إنَّ في الناسِ أولي النُّهى والعَقلِ`,
  attribution: "من المنسوب إليه",
  meaning:
    "نهيٌ عن اليأس من أهل الفضل في أي زمان: لا تقل إن الناس خلَوا من ذوي العقل والحكمة، فهم موجودون في كل عصر لمن يبحث عنهم. الإمام علي لم يكن يأساً من الإنسانية رغم ما رأى من خيانات — وهذا ما يميّز فلسفته.",
};

const SABER_VERSE = {
  verse: `تَعَلَّمِ الصَّمتَ إن لم تُحسِنِ الكلامَ
كما تعلَّمتَ نُطقاً كلَّ ذي إِفهامِ`,
  attribution: "من المنسوب إليه",
  meaning:
    "الصمت فضيلةٌ تُتعلَّم لا ضعفاً يُفرَض. من لا يُتقن فنَّ الكلام عليه أن يُتقن فنَّ الصمت — وكلاهما مكتسَب. هذه الرؤية تجعل الصمت فعلاً إيجابياً واعياً لا مجرّد غياب الكلام.",
};

export default function AshaarAlImamAliPost() {
  return (
    <BlogPostLayout post={post} tableOfContents={TOC}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section id="intro">
        <h2 className="text-xl text-[var(--accent)] mt-2 mb-3">
          الإمام علي — أمير البيان وشاعر الحكمة
        </h2>
        <p>
          الإمام علي بن أبي طالب (ع) (599–661م) هو ابن عم النبي محمد ﷺ
          وزوج ابنته فاطمة الزهراء، وأحد أبرز شخصيات الإسلام في الفقه والقضاء
          والفلسفة. لكنَّ ما يجهله كثيرون هو أنه كان بليغاً فذاً من أفصح من
          تكلَّم العربية — إذ تُنسَب إليه مئات الأبيات الشعرية والحِكَم
          المنثورة التي خلَّدها ديوانه وكتاب نهج البلاغة.
        </p>
        <p>
          تراثه الشعري منسوجٌ من الفلسفة والتصوف والحكمة العملية في آنٍ معاً.
          شعره لا يُطرِب فقط — بل يُفكِّر معك، يسألك، يهزّ قناعاتك. وفيما يلي
          أجمل ما وصل إلينا من شعره وما نُسب إليه، مع شرح مقتضَب لكل بيت.
        </p>
        <p className="text-[var(--muted)] text-sm border-r-2 border-[var(--border)] pr-3 mt-4">
          تنبيه: يُفرِّق العلماء بين ما وردَ بسند موثوق وما نُسب إليه لاحقاً.
          كثيرٌ من الأبيات المتداولة باسمه يصعب التحقق منها بشكل قاطع، وسنشير
          إلى ذلك في كل موضع.
        </p>
      </section>

      <section id="dawa">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          دواؤك فيك — المعرفة الذاتية كطريق للشفاء
        </h2>
        <p className="text-[var(--muted)] mb-5">
          هذه القصيدة الرباعية من أكثر ما يُنسب إلى الإمام علي تداولاً وتأثيراً.
          بعض الباحثين ينسبها إلى الإمام الشافعي، وبعضهم يرجّح نسبتها للإمام علي
          — والأهم في كلتا الحالتين هو عمق معناها الفلسفي الذي يتجاوز الزمان
          والنسَب:
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {DAWA_POEM.verses}
          </p>
          <p className="text-[var(--muted)] text-xs mb-3 text-center">
            {DAWA_POEM.attribution}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            {DAWA_POEM.meaning}
          </p>
        </div>
        <p>
          هذه الأبيات الأربعة تحتاج ساعات من التأمل لا دقائق من القراءة. الفكرة
          المركزية فيها — أن الإنسان عالَمٌ مُكثَّف بأسره — تسبق بقرون كثيراً من
          مفاهيم علم النفس الحديث عن الوعي الذاتي والشفاء من الداخل.
        </p>
        <p>
          ما يجعل هذه القصيدة خالدة أنها تتحدى القارئ: أنت تعتقد أنك تعرف نفسك،
          لكنك لا تعرف. وتعتقد أن مشكلتك خارجك، لكنها فيك. هذا الاعتراف — رغم
          صعوبته — هو أول خطوة نحو التغيير.
        </p>
      </section>

      <section id="hikma">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          أبيات في الحكمة والعقل
        </h2>
        <p className="text-[var(--muted)] mb-5">
          الإمام علي كان يرى العقل أساس كل فضيلة، ويُقدِّم العلم والمعرفة على
          كل ما سواهما. وصايا منسوبة إليه كـ«قيمة كل امرئ ما يُحسنه» من أشهر
          الحِكَم في التراث العربي. ومن أبياته في العقل والمعرفة:
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {HIKMA_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-xs mb-3 text-center">
            {HIKMA_VERSE.attribution}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            {HIKMA_VERSE.meaning}
          </p>
        </div>
        <p>
          هذا الموقف من الزمان والناس يعكس رؤية تفاؤلية عميقة: الفضل ليس محبوساً
          في عصر دون آخر. الإمام علي — رغم ما عاشه من حروب وفتن وخيانات — ظلَّ
          مؤمناً بأن الخير حاضر في البشر لمن يُحسن البحث عنه. هذه الرؤية هي التي
          تجعله نموذجاً للقيادة الأخلاقية لا القيادة بالسلطة والقوة فقط.
        </p>
      </section>

      <section id="saber">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          أبيات في الصبر والإرادة
        </h2>
        <p className="text-[var(--muted)] mb-5">
          عاش الإمام علي حياةً حافلة بالمحن: فقَد رسول الله ﷺ وهو في ريعان شبابه،
          وتأخَّر وصوله إلى الخلافة عقوداً، وفقدَ زوجته فاطمة بعد وفاة أبيها بأشهر،
          ثم اغتيل في محراب الصلاة. ومع ذلك كانت كلماته دائماً في الصبر والإرادة:
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {SABER_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-xs mb-3 text-center">
            {SABER_VERSE.attribution}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            {SABER_VERSE.meaning}
          </p>
        </div>
        <p>
          ثمة فرق بين السكوت قهراً وبين الصمت اختياراً — والإمام علي يتحدث عن
          النوع الثاني: أن تختار الصمت معرفةً وحكمةً. سيرته تُجسِّد ذلك: آثر
          الصمت السياسي سنوات طويلة حفاظاً على وحدة المسلمين، رغم قناعته بأحقيته.
          هذا النوع من الصبر — الصبر الاستراتيجي الواعي — هو الأعسر والأعمق.
        </p>
      </section>

      <section id="nahj">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          نهج البلاغة — حين يصير النثر شعراً
        </h2>
        <p>
          كتاب نهج البلاغة الذي جمعه الشريف الرضي (ت. 406هـ) يضمّ خطب الإمام
          علي ورسائله وحِكَمه القصيرة. رغم أن الكتاب نثرٌ في معظمه، إلا أن
          نثره ينهض إلى مستوى الشعر في كثير من المواضع — بإيقاعه وصوره البيانية
          وكثافته الدلالية.
        </p>
        <p>
          من أشهر حِكَمه القصيرة التي تحتوي على إيقاع شعري:
        </p>
        <ul className="space-y-3 my-5 list-none">
          <li className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md">
            <p className="verse-text text-lg text-center mb-2">
              «قيمةُ كلِّ امرئٍ ما يُحسِنُه»
            </p>
            <p className="text-[var(--muted)] text-xs text-center">
              نهج البلاغة، الحكمة 81
            </p>
          </li>
          <li className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md">
            <p className="verse-text text-lg text-center mb-2">
              «الناسُ أعداءُ ما جَهِلوا»
            </p>
            <p className="text-[var(--muted)] text-xs text-center">
              نهج البلاغة، الحكمة 172
            </p>
          </li>
          <li className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md">
            <p className="verse-text text-lg text-center mb-2">
              «كن في الفتنةِ كابنِ اللَّبونِ — لا ظَهرٌ فيُركَب ولا ضَرعٌ فيُحلَب»
            </p>
            <p className="text-[var(--muted)] text-xs text-center">
              نهج البلاغة، الحكمة 1
            </p>
          </li>
        </ul>
        <p>
          هذه الحِكَم مثبَّتة في نهج البلاغة بأسانيد قوية، وهي أوثق ما وصل
          إلينا من كلامه المباشر. كثافتها ودقتها جعلتها تتداول بين الناس آلاف
          السنين دون أن تفقد بريقها — وهذا هو أقوى دليل على عبقرية صاحبها.
        </p>
      </section>

      <section id="explore">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          ابدأ رحلتك مع الشعر العربي
        </h2>
        <p className="text-[var(--muted)] mb-4">
          شعر الحكمة العربي بحرٌ عميق — من الإمام علي إلى المتنبي إلى الشافعي.
          استكشف مزيداً من أبيات الحكمة على مسامرات شعرية، أو جرّب المساجلة
          واختبر حفظك.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <Link
            href="/explore/themes/hikma"
            className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
          >
            <p className="text-[var(--accent)] mb-1">شعر الحكمة</p>
            <p className="text-[var(--muted)] text-xs">
              أبيات الحكمة والموعظة
            </p>
          </Link>
          <Link
            href="/poets"
            className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
          >
            <p className="text-[var(--accent)] mb-1">الشعراء</p>
            <p className="text-[var(--muted)] text-xs">
              تصفّح كبار الشعراء العرب
            </p>
          </Link>
          <Link
            href="/memorize"
            className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
          >
            <p className="text-[var(--accent)] mb-1">احفظ الأبيات</p>
            <p className="text-[var(--muted)] text-xs">
              بتقنية التكرار المتباعد
            </p>
          </Link>
        </div>
        <p className="text-[var(--muted)] text-sm mb-2">
          مزيد من شعر الحكمة والفلسفة:
        </p>
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
              href="/blog/posts/arabic-words-for-love"
              className="text-[var(--accent)] hover:underline"
            >
              مراتب الحب في اللغة العربية — ١٢ درجة من الهوى إلى التعبّد
            </Link>
          </li>
          <li>
            <Link
              href="/blog/posts/shir-hazin"
              className="text-[var(--accent)] hover:underline"
            >
              شعر حزين — أجمل أبيات الحزن والألم في الشعر العربي
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
