import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout from "@/components/BlogPost";
import { getPostBySlug } from "@/lib/blog-data";

const post = getPostBySlug("shir-al-firaq")!;

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
  { id: "intro", title: "الفراق في الشعر العربي" },
  { id: "mutanabbi", title: "المتنبي: عزّ الفراق" },
  { id: "abufiras", title: "أبو فراس الحمداني: الروميات" },
  { id: "ibnzaydoun", title: "ابن زيدون: رسالة الفراق" },
  { id: "mahmoud", title: "محمود درويش: الفراق الأبدي" },
  { id: "nizar", title: "نزار قباني: لعبة الوداع" },
  { id: "explore", title: "استكشف المزيد" },
];

const MUTANABBI_VERSE = {
  verse:
    "أُريدُ مِنَ الزَّمانِ ما لا يَجودُ بهِ\nوهَل تُجودُ يَدٌ بِالوَقتِ وَالأَمَدِ",
  poet: "المتنبي",
  meaning:
    "المتنبي يُعبّر عن ألم الزمن حين يأخذ من الإنسان ما يعزّ عليه — الفراق هنا ليس فراق شخص بل فراق اللحظات والأيام ذاتها. الزمان لا يُعيد ما أخذ، واليد تجود بالمال لا بالوقت.",
};

const ABUFIRAS_VERSE = {
  verse:
    "أَراكَ عَصِيَّ الدَّمعِ شِيمَتُكَ الصَّبرُ\nأَما لِلهَوى نَهيٌ عَلَيكَ وَلا أَمرُ",
  poet: "أبو فراس الحمداني — أراك عصي الدمع",
  meaning:
    "مطلع أشهر روميّات أبو فراس، كتبها في أسره. يخاطب قلبه مستنكراً صبره — كيف تصبر وأنت أسير بعيد عن وطنك وأمّك؟ الصبر هنا ليس فضيلة بل قسوة. القصيدة كلها حوار بين العقل الصابر والقلب الحزين.",
};

const IBN_ZAYDOUN_VERSE = {
  verse:
    "أَضحى التَنائي بَديلاً مِن تَدانينا\nوَنابَ عَن طيبِ لُقيانا تَجافينا",
  poet: "ابن زيدون — النونية",
  meaning:
    "مطلع نونيّة ابن زيدون الشهيرة إلى ولادة بنت المستكفي، وهي من أبلغ ما قيل في فراق الحبيب. البُعد حلّ مكان القرب، والجفاء نابَ عن حلاوة اللقاء — يُلخّص في بيت واحد مأساة عاشقَين فرّق بينهما الزمن والسياسة.",
};

const MAHMOUD_VERSE = {
  verse:
    "عَلى هذِهِ الأرضِ ما يَستحِقُّ الحياةَ:\nتَرَدُّدُ أبريلَ، ورائِحَةُ الخُبزِ في الفَجرِ",
  poet: "محمود درويش",
  meaning:
    "من قصيدة 'على هذه الأرض' لمحمود درويش. الفراق عنده فراق الأرض والوطن والمنفى — لكنه في الوقت ذاته إعلان تمسّك بالحياة رغم كل شيء. درويش جعل من الفراق والمنفى مادة شعر خالد.",
};

const NIZAR_VERSE = {
  verse:
    "ومَتى سَأَتعلَّمُ يا قُدسُ\nأنَّ الوَداعَ هُوَ البدايةُ",
  poet: "نزار قباني",
  meaning:
    "نزار قباني في قصائده السياسية والعاطفية معاً يُحوّل الوداع إلى فلسفة: كل نهاية هي بداية جديدة. الفراق عنده ليس موتاً — بل دوراناً. كتبها وهو يُخاطب القدس كما يُخاطب حبيبة.",
};

export default function ShirAlFiraqPost() {
  return (
    <BlogPostLayout post={post} tableOfContents={TOC}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section id="intro">
        <h2 className="text-xl text-[var(--accent)] mt-2 mb-3">
          الفراق في الشعر العربي — جرحٌ يُلهم
        </h2>
        <p>
          لا موضوع في الشعر العربي أكثر حضوراً وأعمق أثراً من الفراق. منذ أن
          خرج امرؤ القيس على أطلال محبوبته يبكي ويستبكي، والشاعر العربي يجعل
          من لحظة الوداع مادةً لأجمل ما يكتب. الفراق ليس مجرد غياب شخص —
          بل هو اختبار الإنسان لحدود الحب والصبر والأمل.
        </p>
        <p>
          وللفراق في الشعر العربي أوجه متعددة: فراق الحبيب، وفراق الوطن
          والمنفى، وفراق الصبا والشباب، وفراق الأحبّة في الموت. كل شاعر عالج
          هذا الألم بأسلوبه الخاص، فنتج عن ذلك إرث شعري لا ينضب. في هذا
          المقال نستعرض أجمل ما قيل في الفراق عبر العصور — من المتنبي إلى
          محمود درويش.
        </p>
      </section>

      <section id="mutanabbi">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          المتنبي — حين يُفارق الشاعر سيف الدولة
        </h2>
        <p className="text-[var(--muted)] mb-5">
          أبو الطيب المتنبي (915–965م) عاش في بلاط سيف الدولة الحمداني سنوات
          ذهبية ثم فارقه في مشادة شهيرة. رحيله عن حلب كان جرحاً حقيقياً —
          فقد سيف الدولة كان أكثر من مُمدوح، كان صديقاً وشريكاً في المجد.
          مديح المتنبي تحوّل بعد الرحيل إلى شعر فراق ذي مرارة خاصة:
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {MUTANABBI_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            {MUTANABBI_VERSE.meaning}
          </p>
        </div>
        <p>
          ما يميّز المتنبي في شعر الفراق أنه لم يبكِ ويتوسّل — بل جعل من
          الرحيل إعلاناً. فراقه يحمل الكبرياء نفسها التي حملها كل حياته.
          قصيدته الشهيرة «سيف الدولة يعلم أنني أعلم» رسمت بدقة جراح الخيانة
          المُتخيَّلة والمرارة المكنونة.
        </p>
        <p>
          لكن فراق المتنبي الأعمق كان فراقاً وجودياً: الشاعر الذي يرى نفسه
          أعلى مما يحيط به، يجد في كل مكان وكل زمان ضيقاً يريد الرحيل عنه.
        </p>
      </section>

      <section id="abufiras">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          أبو فراس الحمداني — فراق المُقيَّد
        </h2>
        <p className="text-[var(--muted)] mb-5">
          أبو فراس الحمداني (932–968م) كتب روميّاته وهو أسير عند الروم، بعيداً
          عن أمّه وعن وطنه الشام وعن مجده الأميري. فراقه لم يكن اختياراً —
          بل فُرض عليه بالقيد، فجاء شعره أشدّ وجعاً وأعمق صدقاً:
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
          الروميات مجموعة قصائد كتبها في السجن، تضمّ بعضاً من أجمل ما قيل في
          الشوق والانتظار والفراق. أبو فراس لا يُبالغ ولا يتصنّع — يكتب ببساطة
          الشخص الذي يعيش ما يقوله. ولهذا ظلّت قصيدته «أراك عصيّ الدمع» تُتلى
          في المجالس حتى اليوم.
        </p>
        <p>
          أُطلق سراحه أخيراً، لكن الحياة لم تمهله — مات في معركة بعد سنوات
          قليلة، تاركاً شعراً يحمل دفء الجسد الحيّ الذي عانى.
        </p>
      </section>

      <section id="ibnzaydoun">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          ابن زيدون — فراق ولادة وقرطبة
        </h2>
        <p className="text-[var(--muted)] mb-5">
          ابن زيدون (1003–1071م)، شاعر قرطبة الكبير، عاش قصة حب شهيرة مع
          ولادة بنت المستكفي — الشاعرة الأميرة التي كانت تأذن لنفسها بما لم
          تأذن به نساء زمانها. حين تقطّعت بينهما الأسباب بعد منافس آخر، كتب
          ابن زيدون نونيّته الشهيرة من أجمل ما قيل في الفراق والشوق:
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {IBN_ZAYDOUN_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            {IBN_ZAYDOUN_VERSE.meaning}
          </p>
        </div>
        <p>
          النونيّة المشهورة «أضحى التنائي بديلاً من تدانينا» تُعدّ من أبرز
          قصائد الغزل والفراق في الأندلس. ابن زيدون يصف فيها شمس إشبيلية
          والزهور والنهر — كل جمال الطبيعة الأندلسية يزيد الألم ألماً لأن
          صاحبه غائب.
        </p>
        <p>
          الفراق عند ابن زيدون فراق متشعّب: فراق الحبيبة، وفراق الوطن حين
          نُفي من قرطبة، وفراق حضارة كانت تحتضر ببطء. ولذا تحمل قصائده ثقلاً
          يتجاوز الوجد الشخصي.
        </p>
      </section>

      <section id="mahmoud">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          محمود درويش — الفراق وطناً
        </h2>
        <p className="text-[var(--muted)] mb-5">
          محمود درويش (1941–2008م)، أعظم شعراء الفراق في القرن العشرين العربي،
          لم يُعرف بشعر الفراق العاطفي بل بفراق أعمق: فراق الأرض والهوية
          والذاكرة. وُلد في قرية البروة التي هُدمت، فعاش حياته كلها بين المنفى
          والحنين — وجعل من ذلك شعراً كونياً:
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {MAHMOUD_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            {MAHMOUD_VERSE.meaning}
          </p>
        </div>
        <p>
          درويش في فراقه لا يستسلم — يُعلن تمسّكه بأبسط ما في الحياة: رائحة
          الخبز، ضوء أبريل، وجه أمّ. الفراق عنده يجعل التفاصيل الصغيرة مقدّسة
          لأن المُهدَّد بالضياع يُصبح ثميناً.
        </p>
        <p>
          لم يعُد درويش إلى قريته قبل وفاته، لكن قصائده جعلت من الغياب
          حضوراً. ومن أشهر جُمله: «أنا لا أبكي لأنني أفتقدك — أنا أبكي لأنني
          لن أتذكر كيف أبكيك.»
        </p>
      </section>

      <section id="nizar">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          نزار قباني — الوداع ديناً
        </h2>
        <p className="text-[var(--muted)] mb-5">
          نزار قباني (1923–1998م) كتب عن الفراق بوجهين: الفراق العاطفي بين
          الرجل والمرأة، والفراق الجماعي عن القدس والكرامة العربية. في كلا
          الحالين، فراقه لا يصير سلبياً — بل يتحوّل إلى غضب وشعر وثورة:
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {NIZAR_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            {NIZAR_VERSE.meaning}
          </p>
        </div>
        <p>
          نزار وصف الوداع في ديوانه «قصائد» كفعل يحمل بذرة اللقاء القادم — الفراق
          ليس نهاية بل اختباراً. هذه الفلسفة جعلت شعره مواسياً رغم ألمه، يُقرأ
          في لحظات الفراق الشخصية والجماعية على حدٍّ سواء.
        </p>
        <p>
          فارق نزار زوجته بلقيس الرواد حين اغتالتها قنبلة بيروت عام 1982،
          فكتب رثاءه المؤلم «بلقيس» — من أصدق ما كُتب عن الفراق في الموت.
          الشعر كان طريقته الوحيدة لمقاومة الغياب.
        </p>
      </section>

      <section id="explore">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          ابدأ رحلتك مع الشعر العربي
        </h2>
        <p className="text-[var(--muted)] mb-4">
          شعر الفراق العربي أوسع من أن يُختصر في مقال — هذه الأبيات مجرد
          بوابة. استكشف المزيد على مسامرات شعرية، أو خُض تجربة المساجلة
          واختبر حفظك للأبيات.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <Link
            href="/explore/themes/ghazal"
            className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
          >
            <p className="text-[var(--accent)] mb-1">شعر الغزل</p>
            <p className="text-[var(--muted)] text-xs">أبيات الحب والعشق</p>
          </Link>
          <Link
            href="/explore/themes/ritha"
            className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
          >
            <p className="text-[var(--accent)] mb-1">شعر الرثاء</p>
            <p className="text-[var(--muted)] text-xs">أبيات الحداد والفقد</p>
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
          مزيد من الشعر العاطفي والفلسفي:
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
              href="/blog/posts/arabic-love-poetry"
              className="text-[var(--accent)] hover:underline"
            >
              الغزل في الشعر العربي — من العذري إلى الحديث
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
