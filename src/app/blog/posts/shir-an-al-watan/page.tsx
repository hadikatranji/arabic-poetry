import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout from "@/components/BlogPost";
import { getPostBySlug } from "@/lib/blog-data";

const post = getPostBySlug("shir-an-al-watan")!;

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
  { id: "intro", title: "الوطن في الشعر العربي" },
  { id: "touqan", title: "إبراهيم طوقان: موطني" },
  { id: "shawqi", title: "أحمد شوقي: وطني في الخُلد" },
  { id: "darwish", title: "محمود درويش: على هذه الأرض" },
  { id: "types", title: "أنواع شعر الوطن" },
  { id: "explore", title: "استكشف المزيد" },
];

const TOUQAN_VERSE = {
  verse:
    "موطني موطني\nالجلالُ والجمالُ والسناءُ والبهاءُ\nفي رُباك\nوالحياةُ والنجاةُ والهناءُ والرجاءُ\nفي هواك",
  poet: "إبراهيم طوقان",
  meaning:
    "مطلع قصيدة 'موطني' (1934) التي غدت نشيداً وطنياً لفلسطين والعراق. يُعدِّد طوقان مقوّمات الوطن في لغة موسيقية راقصة: الجلال والجمال والسناء والبهاء — أربع كلمات تختصر كل ما يعنيه الانتماء.",
};

const SHAWQI_VERSE = {
  verse:
    "وطني لو شُغلتُ بالخلدِ عنهُ\nنازعَتْني إليهِ في الخُلدِ نفسي",
  poet: "أحمد شوقي",
  meaning:
    "أشهر أبيات شوقي في الوطنية — يقول: حتى لو كنت في الجنة، ستشتاق روحي إلى وطني. الوطن في هذا البيت يتجاوز الجغرافيا إلى شيء متجذّر في الروح لا يمحوه شيء.",
};

const DARWISH_VERSE = {
  verse:
    "على هذه الأرضِ ما يستحقُّ الحياةَ:\nتردُّدُ أبريلَ، رائحةُ الخُبزِ في الفجرِ،\nآراءُ امرأةٍ في الرجالِ، كتاباتُ أسخيلوس،\nأوَّلُ الحبِّ، العُشبُ على حجرٍ،\nأُمَّهاتٌ تقفنَ على خيطٍ من الغناءِ",
  poet: "محمود درويش",
  meaning:
    "من قصيدته الخالدة 'على هذه الأرض' (1986). درويش لا يصف الوطن بالأرض والحجر، بل بالأشياء الحية: رائحة الخبز، صوت الأم، أول الحب. الوطن عنده لحظات لا خرائط.",
};

export default function ShirAnAlWatanPost() {
  return (
    <BlogPostLayout post={post} tableOfContents={TOC}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section id="intro">
        <h2 className="text-xl text-[var(--accent)] mt-2 mb-3">
          الوطن في الشعر العربي — حبٌّ لا يُختزَل
        </h2>
        <p>
          منذ أقدم عصور الشعر العربي، كان الشاعر مرتبطاً بأرضه ارتباطاً وجودياً.
          في الشعر الجاهلي، كان الوطن هو الحيّ والقبيلة والبادية — رمز الهوية والانتماء.
          وفي الشعر الحديث، تحوّل الوطن إلى قضية وجرح وحلم يُناضَل من أجله.
        </p>
        <p>
          ما يجمع كل هذه العصور هو أن الشاعر حين يكتب عن وطنه، يكتب بحرارة لا تُجارى.
          الوطن ليس موضوعاً شعرياً كالغزل أو الرثاء — بل هو الشاعر نفسه، مُصبَّاً في كلمات.
          في هذا المقال نستعرض أجمل ما قيل في حبّ الأوطان، من إبراهيم طوقان إلى
          أحمد شوقي إلى محمود درويش.
        </p>
      </section>

      <section id="touqan">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          إبراهيم طوقان — «موطني»: النشيد الذي صار أمةً
        </h2>
        <p className="text-[var(--muted)] mb-5">
          إبراهيم طوقان (1905–1941)، شاعر فلسطيني ولد في نابلس وتوفّي في ريعان شبابه.
          في عام 1934، كتب قصيدته «موطني» التي لحّنها محمد فليفل، فغدت نشيداً وطنياً
          لفلسطين ثم للعراق — ولا تزال تُغنَّى حتى اليوم:
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {TOUQAN_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            {TOUQAN_VERSE.meaning}
          </p>
        </div>
        <p>
          ما يميّز «موطني» أنها لم تكتفِ بالمدح، بل بنت صورة شاملة للوطن في أبعاده
          المختلفة: الجمال الطبيعي، والأمل في الحرية، والدعوة إلى التحرر من الاستعمار.
          كُتبت في أوج الانتداب البريطاني على فلسطين، فكانت صوتاً شعرياً يحمل ما
          يعجز عنه الخطاب السياسي.
        </p>
        <p>
          رغم وفاته في السادسة والثلاثين، ترك طوقان إرثاً شعرياً لا يُنسى — وأخته
          فدوى طوقان ستواصل مسيرته لتصبح هي الأخرى صوتاً كبيراً في الشعر الفلسطيني.
        </p>
      </section>

      <section id="shawqi">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          أحمد شوقي — الوطن في الخُلد
        </h2>
        <p className="text-[var(--muted)] mb-5">
          أحمد شوقي (1868–1932)، «أمير الشعراء»، لم يكتب عن الوطن بالكلمات الكبيرة فحسب،
          بل ببيت واحد يلخّص كل شيء — بيتٌ يُضرب به المثل في قِصَر العبارة وعظمة المعنى:
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {SHAWQI_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            {SHAWQI_VERSE.meaning}
          </p>
        </div>
        <p>
          شوقي عاش في المنفى بعد أن نفاه الإنجليز إلى الأندلس (إسبانيا) سنة 1915،
          فعاش سنوات بعيداً عن مصر. هذا المنفى حوّل عاطفة الوطنية عنده من فكرة أدبية
          إلى ألم شخصي حيّ. حين عاد عام 1920، صارت قصائده الوطنية أكثر عمقاً ودفئاً.
        </p>
        <p>
          في مناخه الشعري الكلاسيكي، وظّف شوقي الصور القرآنية والتراثية — فالخُلد هو الجنة
          في الموروث الديني — ليقول: لا مكان أعلى من الجنة، ومع ذلك الوطن يشدّ الروح إليه
          حتى من هناك. قوة المفارقة هي التي تجعل هذا البيت لا يُنسى.
        </p>
      </section>

      <section id="darwish">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          محمود درويش — الوطن في التفاصيل الصغيرة
        </h2>
        <p className="text-[var(--muted)] mb-5">
          محمود درويش (1941–2008) كتب أجمل شعر الوطن في القرن العشرين. لكن ما يُميّزه
          عن أسلافه أنه لا يصف الوطن بالتجريد — الحرية، المجد، التضحية — بل يصفه
          بالتفاصيل الحميمة التي تُحسّها قبل أن تفكّر فيها:
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-lg text-center mb-4 whitespace-pre-line leading-loose">
            {DARWISH_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            {DARWISH_VERSE.meaning}
          </p>
        </div>
        <p>
          درويش عاش المنفى على مدى عقود — ولد في البروة (فلسطين)، ونشأ في حيفا، ثم
          تنقّل بين موسكو وبيروت وباريس وعمّان وأخيراً رام الله. هذا التشرّد هو الذي
          جعل قصيدته عن الوطن مختلفة: لا يمدح بلداً موجوداً، بل يستحضر وطناً مفقوداً
          بكل ما يملكه من كلمات.
        </p>
        <p>
          في «على هذه الأرض»، يبني درويش لائحة أشياء تستحقّ الحياة — وكلّها مرتبطة
          بالأرض والانتماء. الأرض ليست ملكيةً بل علاقة، ليست مساحةً بل ذاكرة.
        </p>
      </section>

      <section id="types">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          أنواع شعر الوطن في الأدب العربي
        </h2>
        <p className="mb-4">
          شعر الوطن ليس صنفاً واحداً — بل تيّارات متعددة اختلفت باختلاف العصور والظروف:
        </p>
        <ul className="space-y-4 text-[var(--muted)] text-sm">
          <li>
            <strong className="text-[var(--fg)] block mb-1">شعر الحنين (النسيب المكاني)</strong>
            أقدم أشكال الوطنية — الشاعر الجاهلي يبدأ قصيدته بالوقوف على الأطلال،
            يبكي الديار التي فارقها. الوطن هنا مكان مادّي: الخيمة، البئر، الرمل، الوادي.
          </li>
          <li>
            <strong className="text-[var(--fg)] block mb-1">شعر المنفى والغربة</strong>
            ازدهر مع شعراء المهجر في القرن العشرين كجبران خليل جبران وإيليا أبو ماضي.
            الوطن يصبح حنيناً مؤلماً حين يُفصَل الشاعر عنه بالمسافة أو المنع.
          </li>
          <li>
            <strong className="text-[var(--fg)] block mb-1">شعر المقاومة</strong>
            تجلّى عند درويش وسميح القاسم ومحمود درويش — الوطن هنا قضية يُناضَل من أجلها.
            الشعر لا يصف الوطن بل يُطالب به ويدافع عنه.
          </li>
          <li>
            <strong className="text-[var(--fg)] block mb-1">الوطنية الكلاسيكية</strong>
            عند شوقي وحافظ إبراهيم — تمجيد البلد وتاريخه وحضارته، وأحياناً توجيه النقد
            الوطني من موقع المحبّ لا الخصم.
          </li>
        </ul>
        <p className="mt-5">
          ما يجمع هذه التيّارات كلّها: الوطن في الشعر العربي ليس مفهوماً سياسياً جافّاً،
          بل هو المكان الأول الذي علّم الشاعر أن يُحسّ — وكلّ شعره بعد ذلك هو
          محاولة للعودة إلى تلك اللحظة الأولى.
        </p>
      </section>

      <section id="explore">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          ابدأ رحلتك مع الشعر العربي
        </h2>
        <p className="text-[var(--muted)] mb-6">
          استكشف أبيات الشعراء المذكورين في هذا المقال على موقع مسامرات شعرية،
          أو خُض تجربة المساجلة واختبر حفظك للشعر العربي.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/poets"
            className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
          >
            <p className="text-[var(--accent)] mb-1">الشعراء</p>
            <p className="text-[var(--muted)] text-xs">تصفّح كبار الشعراء العرب</p>
          </Link>
          <Link
            href="/explore/themes/ghazal"
            className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
          >
            <p className="text-[var(--accent)] mb-1">شعر الغزل</p>
            <p className="text-[var(--muted)] text-xs">أبيات الحب والوجدان</p>
          </Link>
          <Link
            href="/memorize"
            className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
          >
            <p className="text-[var(--accent)] mb-1">احفظ الأبيات</p>
            <p className="text-[var(--muted)] text-xs">بتقنية التكرار المتباعد</p>
          </Link>
        </div>
      </section>

      <div className="mt-10 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center">
        <p className="text-[var(--accent)] mb-1 text-lg">لا يكتمل الشعر إلا بالمساجلة</p>
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
