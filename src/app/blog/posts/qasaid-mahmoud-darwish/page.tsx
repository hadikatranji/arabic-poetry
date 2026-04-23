import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout from "@/components/BlogPost";
import { getPostBySlug } from "@/lib/blog-data";

const post = getPostBySlug("qasaid-mahmoud-darwish")!;

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
  { id: "intro", title: "محمود درويش: شاعر القرن" },
  { id: "bitaqat-huwiya", title: "بطاقة هوية: سجّل أنا عربي" },
  { id: "ala-hazihi-al-ard", title: "على هذه الأرض: حب الحياة" },
  { id: "ila-ummi", title: "إلى أمي: خبز الأم وقهوة الأمل" },
  { id: "rita", title: "ريتا والبندقية: الحب في مواجهة السلاح" },
  { id: "explore", title: "استكشف المزيد" },
];

const BITAQAT_VERSE = {
  verse: "سجِّلْ!\nأنا عربيٌّ\nورقمُ بطاقتي خمسون ألف\nوأطفالي ثمانيةٌ\nوتاسعُهم سيأتي بعد صيفٍ\nفهلْ تغضب؟",
  poet: "محمود درويش — بطاقة هوية (1964)",
  meaning:
    "أشهر قصائد درويش وأوسعها انتشاراً. الراوي يخاطب ضابط الحدود أو المحتل مباشرةً، يؤكد هويته العربية بلغة مباشرة تشبه الإفادة الرسمية — لكنها في الحقيقة صرخة كبرياء وتحدٍّ. العدد الكبير للأبناء ليس مجرد إحصاء بل إعلان أن الشعب باقٍ ومتكاثر.",
};

const ALA_HAZIHI_VERSE = {
  verse:
    "على هذه الأرض ما يستحقّ الحياة:\nتردّدُ أبريل، ورائحةُ الخُبزِ في الفجر،\nوآراءُ امرأةٍ في الرجال،\nوكتاباتُ أسخيليوس،\nوأوّلُ الحبّ،\nوالعشبُ على حجرِ القبر.",
  poet: "محمود درويش — على هذه الأرض (1986)",
  meaning:
    "من أعمق قصائد درويش عن التعلّق بالحياة. يستعرض تفاصيل صغيرة تبدو عادية — رائحة الخبز، رأي امرأة، حديقة — ويجعلها ثمينة لأنها مهدَّدة بالفقدان. الأرض هنا ليست مجرد جغرافيا — بل كل ما يجعل الحياة تستحق العيش.",
};

const ILA_UMMI_VERSE = {
  verse:
    "أحنّ إلى خبز أمّي\nوقهوة أمّي\nولمسة أمّي\nوتكبر فيّ الطفولة\nيوماً على صدر يوم",
  poet: "محمود درويش — إلى أمي",
  meaning:
    "ربما أكثر قصائد درويش دفئاً وحميمية. في المنفى، يختصر الوطن كله في أمّه — خبزها وقهوتها ولمستها. الشاعر المنفيّ لا يحنّ إلى أرض مجردة بل إلى رائحة ودفء ووجه إنساني. الطفولة تكبر معه لأنه يحملها في داخله بعيداً عن مصدرها.",
};

const RITA_VERSE = {
  verse:
    "بينَ ريتا وعيونيَ بندقيّة\nوالذي يعرفُ ريتا ينحني\nويصلّي لإلهٍ\nفي العيونِ العسليّة",
  poet: "محمود درويش — ريتا والبندقية",
  meaning:
    "ريتا امرأة حقيقية أحبّها درويش في شبابه، وكانت يهودية. القصيدة استعارة مركّبة: بين الحب والسلاح يقف المحتل. البندقية تفصل بين قلبَين — المحبّ يعرف جمال ريتا لكن الجندي يحمل السلاح بينهما. جمع درويش الحب الشخصي بالتوتر السياسي في صورة واحدة.",
};

export default function QasaidMahmoudDarwishPost() {
  return (
    <BlogPostLayout post={post} tableOfContents={TOC}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section id="intro">
        <h2 className="text-xl text-[var(--accent)] mt-2 mb-3">
          محمود درويش — شاعر القرن العشرين العربي
        </h2>
        <p>
          وُلد محمود درويش عام 1941 في قرية البروة الجليلية، وغادرها طفلاً
          حين هُدمت عام 1948. من تلك اللحظة، بات المنفى عنوانه، والحنين مادته،
          والأرض قضيته. لكنّه لم يكن مجرد شاعر مقاومة — بل فيلسوف وجود وعاشق
          حياة وصانع جمال. عاش بين بيروت وباريس وتونس ورام الله، وكتب في كل
          مكان عن المكان الواحد الذي لم يعُد إليه.
        </p>
        <p>
          أصدر أكثر من ثلاثين ديواناً، وتُرجمت قصائده إلى خمس وعشرين لغة.
          حين توفي عام 2008 في هيوستن إثر عملية قلب، نعاه ملايين العرب كما
          ينعون ذويهم. قصائده ليست نصوصاً أدبية فحسب — بل جزء من اللغة اليومية
          التي يتحدث بها الناس عن الحب والفقدان والأمل.
        </p>
        <p>
          في هذا المقال نتوقف عند أربع قصائد تمثّل أوجه درويش المختلفة: درويش
          المناضل، ودرويش العاشق للحياة، ودرويش الابن الحنون، ودرويش المحبّ
          الذي وقف بين الحب والسلاح.
        </p>
      </section>

      <section id="bitaqat-huwiya">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          بطاقة هوية — «سجّل: أنا عربيٌّ»
        </h2>
        <p className="text-[var(--muted)] mb-5">
          كتبها درويش عام 1964 وهو في الثالثة والعشرين، ونشرها في جريدة
          الاتحاد الحيفاوية. انتشرت بسرعة مذهلة، لُحِّنت وغُنِّيت وصارت نشيداً
          لكل عربي يحتجّ بهويته. أُلقيت في التجمعات والمظاهرات، وحُفظت في
          المدارس، وطافت العالم قبل أن تطوف أي قصيدة عربية أخرى.
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {BITAQAT_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            {BITAQAT_VERSE.meaning}
          </p>
        </div>
        <p>
          ما يجعل «بطاقة هوية» خالدة أنها جمعت بين الخطاب السياسي والبنية
          الشعرية المحكمة. درويش لم يصرخ ولم يتوسّل — بل أجاب. الإجابة كانت
          مقيّدة بالبيانات الجافة: اسم، رقم، عدد أطفال. لكن هذا الجفاف نفسه هو
          ما جعل القصيدة تصل كلمحة برق.
        </p>
        <p>
          القصيدة طويلة ومتعددة الأبيات، تصف الراوي وأرضه وزيتونه وعناده. تنتهي
          بتحذير صريح: الجذور عميقة والإنسان باقٍ. بطاقة الهوية الرسمية قد
          تُسحب — لكن الهوية الحقيقية لا تُختزل في ورقة.
        </p>
      </section>

      <section id="ala-hazihi-al-ard">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          على هذه الأرض — حبٌّ بحجم العالم
        </h2>
        <p className="text-[var(--muted)] mb-5">
          من ديوان «هي أغنية» (1986)، وهي من أكثر قصائد درويش اقتباساً في
          العالم العربي. القصيدة تسرد تفاصيل صغيرة وعادية — لكنها تحوّلها إلى
          دليل على أن الحياة تستحق العيش رغم كل شيء. كُتبت في مرحلة نضج شعري
          بعيدة عن التصريح السياسي المباشر، نحو شعر أكثر تأملاً وكونية.
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {ALA_HAZIHI_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            {ALA_HAZIHI_VERSE.meaning}
          </p>
        </div>
        <p>
          يضع درويش الحب والجمال والفن في مرتبة متساوية: رائحة الخبز لا تقل
          شأناً عن كتابات أسخيليوس. هذا التساوي بين الصغير والكبير، بين اليومي
          والخالد، هو لب شعره الناضج. أن تقدر على شمّ الخبز كافٍ سبباً للحياة.
        </p>
        <p>
          القصيدة كاملة تختتم بمقطع عن سيدة الأرض — الأم أو فلسطين أو المرأة
          التي تجمع كل ما يستحق البقاء. اللافت أن درويش لا يذكر الوطن باسمه بل
          يصفه بما يحويه: فالأرض هي ما عليها، لا حدودها.
        </p>
      </section>

      <section id="ila-ummi">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          إلى أمي — الوطن في حضن
        </h2>
        <p className="text-[var(--muted)] mb-5">
          قصيدة «إلى أمي» من أكثر قصائد درويش عاطفيةً ومن أقربها إلى القلب.
          كتبها في المنفى، ووجّهها إلى أمه التي بقيت في الأرض المحتلة. الأم
          هنا ليست شخصاً فقط — بل ترميز للأرض والجذر والبداية. ولهذا تعالت
          القصيدة فوق بيوغرافيا صاحبها وأصبحت ملكاً لكل منفيٍّ بعيد عن أمّه.
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {ILA_UMMI_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            {ILA_UMMI_VERSE.meaning}
          </p>
        </div>
        <p>
          القصيدة تنتهي بأبيات من أكثر ما كتبه درويش عمقاً وإيلاماً:
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center leading-loose">
            وأعشقُ عمري لأنّي<br />
            إذا متُّ<br />
            أخجلُ من دموعِ أمّي
          </p>
        </div>
        <p>
          هنا يبلغ الشعر حدّاً لا يستطيع الكلام أن يصفه: الخجل من الموت لأنه
          سيجعل الأم تبكي. الحياة واجب نحو الأم قبل أن تكون رغبة ذاتية. هذه
          الجملة وحدها كافية لتخليد درويش شاعراً.
        </p>
      </section>

      <section id="rita">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          ريتا والبندقية — حين يقف السلاح بين قلبَين
        </h2>
        <p className="text-[var(--muted)] mb-5">
          ريتا اسم حقيقي — امرأة يهودية أحبّها درويش في شبابه داخل الأرض
          المحتلة. القصيدة ليست وثيقة شخصية بل استعارة كبرى: الحب يوجد لكن
          السلاح يفصل. الحبيبة موجودة لكن نظام الفصل والاحتلال يقف بينهما
          بندقيةً وحاجزاً وعالماً من التناقض.
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {RITA_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            {RITA_VERSE.meaning}
          </p>
        </div>
        <p>
          لحّن مارسيل خليفة هذه القصيدة فأضاف إليها بُعداً موسيقياً جعلها
          تصل إلى آذان لم تقرأ الشعر قط. صوت خليفة يحمل الكلمات بشكل جعلها
          ترحّال بين الثقافات. ولهذا تعرّف كثيرون على درويش الموسيقي قبل درويش
          الشاعر.
        </p>
        <p>
          درويش لم ينكر ريتا الحقيقية ولم يؤكدها — ترك للقارئ حرية قراءة
          القصيدة كقصيدة حب، أو كنقد سياسي، أو كليهما معاً. هذا التعدد في
          المعنى هو ما يجعل قصائده تُقرأ في كل جيل وكأنها كُتبت له.
        </p>
      </section>

      <section id="explore">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          ابدأ رحلتك مع الشعر العربي
        </h2>
        <p className="text-[var(--muted)] mb-4">
          درويش باب إلى شعر فلسطيني أوسع — ومن يقرأه يجد نفسه يبحث عن سميح
          القاسم وتوفيق زياد وفدوى طوقان. استكشف المزيد على مسامرات شعرية.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <Link
            href="/explore/themes/wataniyyat"
            className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
          >
            <p className="text-[var(--accent)] mb-1">شعر الوطنيات</p>
            <p className="text-[var(--muted)] text-xs">أبيات الانتماء والأرض</p>
          </Link>
          <Link
            href="/explore/themes/ghazal"
            className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
          >
            <p className="text-[var(--accent)] mb-1">شعر الغزل</p>
            <p className="text-[var(--muted)] text-xs">أبيات الحب والعشق</p>
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
          مزيد من الشعر المعاصر والحديث:
        </p>
        <ul className="space-y-1 text-sm">
          <li>
            <Link
              href="/blog/posts/nizar-qabbani-best-verses"
              className="text-[var(--accent)] hover:underline"
            >
              نزار قباني — أجمل أبياته في الحب والوطن
            </Link>
          </li>
          <li>
            <Link
              href="/blog/posts/shir-al-firaq"
              className="text-[var(--accent)] hover:underline"
            >
              شعر الفراق — أجمل ما قيل في الوداع والشوق
            </Link>
          </li>
          <li>
            <Link
              href="/blog/posts/shir-an-al-watan"
              className="text-[var(--accent)] hover:underline"
            >
              شعر الوطن — أجمل أبيات الانتماء في الشعر العربي
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
