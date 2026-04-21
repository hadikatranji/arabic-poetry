import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout from "@/components/BlogPost";
import { getPostBySlug } from "@/lib/blog-data";

const post = getPostBySlug("shir-al-ghurba")!;

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
  { id: "intro", title: "الغربة في الشعر العربي" },
  { id: "malik", title: "مالك بن الريب: الموت في المنفى" },
  { id: "shafii", title: "الشافعي: حكمة المسافر" },
  { id: "abufiras", title: "أبو فراس: وحدة الغريب" },
  { id: "shawqi", title: "أحمد شوقي: المنفى الأندلسي" },
  { id: "explore", title: "استكشف المزيد" },
];

const MALIK_VERSE = {
  verse: "أَلا لَيتَ شِعري هَل أَبيتَنَّ لَيلَةً\nبِجَنبِ الغَضا أَزجي القِلاصَ النَّواجِيا",
  poet: "مالك بن الريب",
  meaning:
    "مطلع قصيدته الخالدة التي نظمها وهو يحتضر في خراسان بعيداً عن وطنه في نجد. يقول: ليتني أعلم — هل أقضي ليلةً واحدةً بجانب شجر الغضا في بلدي؟ الغضا شجر نجدي عطري معروف، وذكره هنا يجعل الحنين حسّياً ملموساً لا مجرّد عاطفة مجردة. هذا البيت يُعدّ من أجمل مطالع قصائد الغربة في التراث العربي.",
};

const SHAFII_VERSE = {
  verse:
    "تَغَرَّبْ عَنِ الأَوطانِ في طَلَبِ العُلا\nوَسافِرْ فَفي الأَسفارِ خَمسُ فَوائِدِ\nتَفريجُ هَمٍّ وَاكتِسابُ مَعيشَةٍ\nوَعِلمٌ وَآدابٌ وَصُحبَةُ ماجِدِ",
  poet: "الإمام الشافعي",
  meaning:
    "الشافعي لا يبكي الغربة — بل يدعو إليها. يرى في السفر والتغرب عن الأوطان طريقاً للعلاء والرُّقي، ويعدّد فوائده الخمس: تفريج الهمّ، وكسب الرزق، وطلب العلم، واكتساب الآداب والأخلاق، ومصاحبة الكرام. هذه الأبيات علّمت أجيالاً من المسلمين النظر إلى الغربة لا كمأساة بل كفرصة ونعمة.",
};

const ABUFIRAS_VERSE = {
  verse: "أَجارَتَنا إِنَّا غَريبانِ هاهُنا\nوَكُلُّ غَريبٍ لِلغَريبِ نَسيبُ",
  poet: "أبو فراس الحمداني",
  meaning:
    "من قصائده الرومية التي نظمها في الأسر عند الروم. يخاطب حمامةً أو طيراً قريباً منه ويقول: كلانا غريب في هذا المكان — وكل غريب هو قريب لغريب آخر. البيت يلخّص تجربة الغربة بأكملها: الوحدة التي تجمع الغرباء، والشعور بأن القاسم المشترك الوحيد بين من ابتعدوا عن أوطانهم هو ابتعادهم ذاته.",
};

const SHAWQI_VERSE = {
  verse: "وَطَني لَو شُغِلتُ بِالخُلدِ عَنهُ\nنَازَعَتني إِلَيهِ في الخُلدِ نَفسي",
  poet: "أحمد شوقي",
  meaning:
    "من أشهر ما قاله شوقي في زمن نفيه إلى الأندلس (إسبانيا) إبان الحرب العالمية الأولى. يقول: حتى لو انشغلتُ بنعيم الجنة عن وطني، فستظل نفسي تشتاق إليه حتى في الجنة. الغربة عن مصر ألهبت في شوقي نيران الحنين وأنتجت من أجمل شعره الوطني.",
};

export default function ShirAlGhurbaPost() {
  return (
    <BlogPostLayout post={post} tableOfContents={TOC}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section id="intro">
        <h2 className="text-xl text-[var(--accent)] mt-2 mb-3">
          الغربة في الشعر العربي — حنينٌ أقدم من الكتابة
        </h2>
        <p>
          الغربة في اللغة العربية ليست مجرد بُعد جسديّ — بل هي حالة روحية
          معقّدة تجمع الحنين والخوف والوحدة والاشتياق معاً. الغريب في التراث
          العربي لم يكن فقط من ابتعد عن وطنه، بل كل من يشعر بالانقطاع عمّا
          يُحبّ: عن أهله، عن شبابه، عن معنى يفتقده.
        </p>
        <p>
          لهذا كان شعر الغربة والحنين من أعمق أصناف الشعر العربي وأوسعها انتشاراً.
          من مالك بن الريب الذي رثى نفسه وهو يموت في خراسان بعيداً عن نجد، إلى
          أحمد شوقي المنفيّ في الأندلس يتذكر مصر — أنتج الشعراء العرب في هذا
          الباب ما لا يُحصى من الأبيات التي تلمس القلب لأنها صادرة عن ألم حقيقيّ.
        </p>
        <p>
          في هذا المقال نستعرض أجمل أبيات شعر الغربة والاشتياق، من العصر الأموي
          إلى الحديث.
        </p>
      </section>

      <section id="malik">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          مالك بن الريب — حين يصبح الموت في الغربة شعراً
        </h2>
        <p className="text-[var(--muted)] mb-5">
          مالك بن الريب المازني شاعر أموي من نجد، كان في شبابه لصّاً ثم تاب
          وانضمّ إلى جيش سعيد بن عثمان المتجه إلى خراسان (عام 56هـ). أُصيب
          بمرض قاتل في خراسان بعيداً عن وطنه، فنظم وهو يحتضر قصيدةً طويلةً
          رثى فيها نفسه وودّع أهله وبلده — وهي من أجمل ما قيل في الغربة
          والموت في تاريخ الأدب العربي:
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {MALIK_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            {MALIK_VERSE.meaning}
          </p>
        </div>
        <p>
          ما يجعل قصيدة مالك استثنائيةً أنها كُتبت في لحظة الحقيقة المطلقة —
          لحظة الموت. حين يعلم الإنسان أنه لن يعود، يصبح الحنين أشدّ وطأةً
          وأصدق تعبيراً. هو لا يطلب الحياة — فقط ليلةً واحدةً بجانب أشجار وطنه.
          هذا التواضع في الأمنية هو ما يهدّ القلب.
        </p>
        <p>
          والقصيدة كاملها تسير في هذا المنحى: يطلب مالك من رفاقه أن يدفنوه على
          مشارف الطريق العائد إلى نجد، ويودّع أخاه وزوجته وناقته التي رافقته
          الأسفار. الموت في الغربة عند مالك ليس مأساةً صامتة — بل خطابٌ طويل
          موجَّه لكل من يُحبّ.
        </p>
      </section>

      <section id="shafii">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          الإمام الشافعي — حكمة من يعرف الغربة ولا يخشاها
        </h2>
        <p className="text-[var(--muted)] mb-5">
          الإمام محمد بن إدريس الشافعي (150–204هـ) عرف الترحال منذ صغره — من
          مكة إلى المدينة إلى بغداد إلى اليمن إلى مصر حيث توفي. لم يكن غريباً
          كارهاً للسفر، بل رجلاً رأى في الانتقال والتغرّب سبيلاً للنموّ لا
          للضياع. أبياته الشهيرة في الحثّ على السفر تُقرأ اليوم في كل مكان:
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {SHAFII_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            {SHAFII_VERSE.meaning}
          </p>
        </div>
        <p>
          الشافعي لا يُنكر ألم الغربة — لكنه يُقدّم إطاراً مختلفاً لها. الغربة
          عنده ليست نفياً بل اختياراً، وليست خسارة بل استثماراً. هذه الفلسفة
          الإيجابية في النظر إلى السفر والابتعاد عن الوطن أثّرت تأثيراً عميقاً
          في الثقافة الإسلامية التي ترى في طلب العلم واجباً ولو اقتضى الرحيل إلى
          أبعد الآفاق.
        </p>
        <p>
          الفائدة الخامسة التي ذكرها — «صحبة ماجد» — لعلها الأهم. الغريب يلتقي
          في سفره بمن لن يلتقيهم لو بقي في وطنه. الغربة تفتح بوابات العالم.
        </p>
      </section>

      <section id="abufiras">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          أبو فراس الحمداني — الغريبان يتعارفان
        </h2>
        <p className="text-[var(--muted)] mb-5">
          أبو فراس الحمداني (932–968م) الأمير الشاعر من بني حمدان، أسرته الروم
          وقضى سنواتٍ في الأسر بالقسطنطينية بعيداً عن وطنه الشام وأهله وابن
          عمه سيف الدولة. في تلك الوحدة القاتلة نظم قصائده الرومية — من أعمق
          ما كُتب في الغربة والأسر في تاريخ الأدب العربي:
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {ABUFIRAS_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            {ABUFIRAS_VERSE.meaning}
          </p>
        </div>
        <p>
          هذا البيت يحمل رؤيةً إنسانيةً عميقة: الغربة تُسوّي بين الناس. الأمير
          المأسور والطير الوحيد كلاهما غريبان — وبينهما نسب أقوى من نسب الدم.
          هذه الفكرة أن الغربة تصنع أخوّةً خاصة بين الغرباء تتكرر في الأدب
          العالمي، لكن صياغة أبي فراس لها في بيتين تبقى من أصفى ما قيل.
        </p>
        <p>
          في الأسر أيضاً كتب أبو فراس رسائل شعرية إلى أمه وإلى سيف الدولة
          يستعجل الفداء ويصف وجعه. هذه الصراحة العاطفية نادرة في الشعر الكلاسيكي
          الذي يُهيمن عليه الفخر والمدح — وهي ما يجعل أبا فراس من أكثر
          الشعراء العرب قُرباً من القارئ المعاصر.
        </p>
      </section>

      <section id="shawqi">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          أحمد شوقي — المنفى الأندلسي وجمر الحنين
        </h2>
        <p className="text-[var(--muted)] mb-5">
          أحمد شوقي (1868–1932م)، «أمير الشعراء»، كان مقرّباً من الخديوي عباس
          الثاني في مصر. حين اندلعت الحرب العالمية الأولى ونُفي الخديوي، أمر
          الإنجليز بنفي شوقي أيضاً فغادر مصر إلى الأندلس (إسبانيا) عام 1915م.
          عاش في برشلونة ومدريد سنواتٍ طويلةً تلمح أشعاره منها إلى حنينه
          المحترق:
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
          في الأندلس وجد شوقي نفسه في قلب حضارة عربية إسلامية غابرة — فالأندلس
          ذاتها صارت رمزاً للضياع والحنين في الوجدان العربي. هذا التقاطع بين
          غربتين — غربته عن مصر وغربة الأندلس عن أصلها العربي — أضاف لشعره
          طبقةً مضاعفة من العمق والحزن.
        </p>
        <p>
          حين عاد شوقي إلى مصر عام 1920م بعد خمس سنوات، استقبله المصريون
          استقبالاً حافلاً وأعلن مجمع اللغة والأدب تتويجه «أميراً للشعراء» — لقبٌ
          ظل معه حتى مماته ولا يزال يُذكر بعد مئة عام.
        </p>
      </section>

      <section id="explore">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          ابدأ رحلتك مع الشعر العربي
        </h2>
        <p className="text-[var(--muted)] mb-4">
          شعر الغربة والحنين بحر واسع — هذه الأبيات مجرد بوابة. استكشف المزيد
          من قصائد الرثاء والوجدان على مسامرات شعرية، أو جرّب لعبة المساجلة
          واختبر حفظك للأبيات.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <Link
            href="/explore/themes/ritha"
            className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
          >
            <p className="text-[var(--accent)] mb-1">شعر الرثاء</p>
            <p className="text-[var(--muted)] text-xs">أبيات الحداد والفقد</p>
          </Link>
          <Link
            href="/explore/themes/wataniyyat"
            className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
          >
            <p className="text-[var(--accent)] mb-1">شعر الوطنيات</p>
            <p className="text-[var(--muted)] text-xs">قصائد حب الوطن</p>
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
          مزيد من الشعر العاطفي والإنساني:
        </p>
        <ul className="space-y-1 text-sm">
          <li>
            <Link
              href="/blog/posts/shir-hazin"
              className="text-[var(--accent)] hover:underline"
            >
              شعر حزين — أجمل أبيات الحزن والألم في الشعر العربي
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
              href="/blog/posts/nizar-qabbani-best-verses"
              className="text-[var(--accent)] hover:underline"
            >
              نزار قباني — أجمل أبياته في الحب والوطن
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
