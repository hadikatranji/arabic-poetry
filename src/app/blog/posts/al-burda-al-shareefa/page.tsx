import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout from "@/components/BlogPost";
import { getPostBySlug } from "@/lib/blog-data";

const post = getPostBySlug("al-burda-al-shareefa")!;

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
  { id: "intro", title: "ما هي البردة الشريفة؟" },
  { id: "story", title: "قصة البوصيري والشفاء" },
  { id: "structure", title: "أقسام القصيدة العشرة" },
  { id: "verses", title: "أشهر أبيات البردة" },
  { id: "spread", title: "البردة في العالم" },
  { id: "explore", title: "استكشف المزيد" },
];

const VERSE_MATLA = {
  verse:
    "أَمِن تَذَكُّرِ جِيرانٍ بِذِي سَلَمِ\nمَزَجتَ دَمعاً جَرى مِن مُقلةٍ بِدَمِ",
  label: "البيت الأول — المطلع",
  meaning:
    "يفتتح البوصيري قصيدته بسؤال عن سبب الدموع المختلطة بالدم: هل هو تذكّر الجيران في ذي سلم (مكان يرمز إلى الأحبة والوطن)؟ المطلع تقليدي في شكله — بكاء على الأطلال — لكنه يستعمله للانتقال إلى المدح النبوي. الدمع الممزوج بالدم صورة تُعبّر عن الشوق الذي يتجاوز حدّ الدمع.",
};

const VERSE_NAFS = {
  verse:
    "وَالنَّفسُ كَالطِّفلِ إِن تُهمِلهُ شَبَّ عَلى\nحُبِّ الرَّضاعِ وَإِن تَفطِمهُ يَنفَطِمِ",
  label: "البيت 12 — تهذيب النفس",
  meaning:
    "من أشهر أبيات البردة وأكثرها تداولاً في علم الأخلاق والتربية. البوصيري يشبّه النفس بطفل: إن تركتها على هواها تشبّثت بشهواتها كما يتشبّث الرضيع بالرضاعة، وإن جاهدتها وفطمتها انفطمت. حكمة تربوية عميقة في بيت واحد — يُستشهد به حتى اليوم في علم النفس والفقه معاً.",
};

const VERSE_SAYYID = {
  verse:
    "مُحَمَّدٌ سَيِّدُ الكَونَينِ وَالثَّقَلَينِ\nوَالفَريقَينِ مِن عُربٍ وَمِن عَجَمِ",
  label: "البيت 52 — مقام النبي ﷺ",
  meaning:
    "من أبيات المدح الكبرى في البردة. يُعلن البوصيري أن محمداً ﷺ هو سيّد الدنيا والآخرة (الكونين)، وسيّد الإنس والجن (الثقلين)، وسيّد العرب والعجم. البيت يُلخّص عقيدة المسلمين في مقام نبيّهم — من هنا تحوّل إلى من أكثر الأبيات حفظاً وتلاوةً في تاريخ الإسلام.",
};

const VERSE_HABIB = {
  verse:
    "هُوَ الحَبيبُ الَّذي تُرجى شَفاعَتُهُ\nلِكُلِّ هَولٍ مِنَ الأَهوالِ مُقتَحَمِ",
  label: "البيت 56 — الشفاعة",
  meaning:
    "بيت الشفاعة الكبرى. النبي ﷺ هو الحبيب الذي يُرجى أن يشفع في أهوال يوم القيامة — يوم تشيب فيه الرؤوس وتنكسر الأعناق. «مُقتحم» أي يَخترق الهول ويَشقّه شفاعةً ورحمةً. هذا البيت يُمثّل روح البردة كلها: التوسّل بالنبي ﷺ في لحظات اليأس.",
};

const VERSE_KHATIMA = {
  verse:
    "يا رَبِّ بِالمُصطَفى بَلِّغ مَقاصِدَنا\nوَاغفِر لَنا ما مَضى يا واسِعَ الكَرَمِ",
  label: "الخاتمة — الدعاء",
  meaning:
    "الدعاء الختامي للقصيدة. البوصيري يتوسّل بمقام النبي ﷺ أن يبلّغه الله مقاصده ويغفر له ذنوبه. «يا واسع الكرم» خاتمة رقيقة تُعيد اللحن إلى التضرّع والانكسار بعد كل ذلك المدح — الشاعر في النهاية يبقى عبداً مذنباً يطلب العفو.",
};

export default function AlBurdaAlShareefaPost() {
  return (
    <BlogPostLayout post={post} tableOfContents={TOC}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section id="intro">
        <h2 className="text-xl text-[var(--accent)] mt-2 mb-3">
          البردة الشريفة — قصيدة غيّرت تاريخ الأدب الإسلامي
        </h2>
        <p>
          «البردة الشريفة» أو «الكواكب الدرية في مدح خير البرية» — قصيدة واحدة
          غيّرت مسار المديح النبوي في الأدب العربي والإسلامي. كتبها الإمام
          محمد بن سعيد البوصيري (1213–1294م) في القرن الثالث عشر الميلادي،
          فأصبحت في أقل من قرن أكثر قصيدة عربية تُحفظ وتُتلى ومُشرحة في تاريخ
          الإسلام.
        </p>
        <p>
          مئة وستون بيتاً في عشرة أقسام، تبدأ بالغزل وتنتهي بالدعاء، وتتوسّطها
          أوصاف النبي ﷺ وسيرته ومعجزاته. عُلّقت في الكعبة المشرّفة، وتُرجمت إلى
          أكثر من ثلاثين لغة، وحُفظت في صدور الملايين من المغرب إلى إندونيسيا.
          هذا ليس مجرد شعر — هذه لغة تقوى.
        </p>
      </section>

      <section id="story">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          قصة البوصيري — الشلل والرؤيا والشفاء
        </h2>
        <p className="text-[var(--muted)] mb-5">
          محمد بن سعيد البوصيري (بوصير، مصر) كان شاعراً وصوفياً مصرياً عاش في
          القاهرة وعمل كاتباً. في أواخر حياته أصابه شلل نصفي أقعده وعجز معه عن
          الحركة. في تلك المحنة كتب قصيدته في مدح النبي ﷺ توسّلاً وشوقاً
          ورجاءً، لا شعراً للمدح والمكاسب.
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="text-[var(--fg)] leading-relaxed">
            يروي البوصيري أنه رأى النبي ﷺ في المنام يمسح على وجهه ويُلقي عليه
            بردته (عباءته). حين استيقظ، وجد نفسه قد شُفي من شلله كلياً.
            المقرّبون سمعوا القصة، طلبوا القصيدة، فانتشرت في الأزهر والمدارس
            والمساجد حتى بلغت كل أرجاء العالم الإسلامي.
          </p>
          <p className="text-[var(--muted)] text-sm mt-3">
            ومن هنا جاء اسمها — «البُردة»، نسبةً إلى البردة التي ألقاها النبي
            ﷺ على صاحبها في الرؤيا.
          </p>
        </div>
        <p>
          القصة لا يمكن التحقق منها تاريخياً، لكنها ليست أهم ما في البردة.
          الأهم هو أن شعراً كُتب في لحظة انكسار حقيقية — لا للمدح والجوائز —
          ظلّ يُتلى بعد ثمانية قرون. الصدق في النية يترك أثراً لا يُمحى.
        </p>
      </section>

      <section id="structure">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          أقسام البردة العشرة — بناء القصيدة
        </h2>
        <p className="mb-4">
          البردة ليست قصيدة تقليدية خطية — بل هيكل متكامل من عشرة أقسام، كل
          قسم موضوع مستقل ينتهي بعودة إلى روي القافية «الميم»:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {[
            { num: "١", title: "الغزل والشوق", desc: "البكاء على الأطلال وتذكّر الأحبة" },
            { num: "٢", title: "تحذير النفس", desc: "مجاهدة الهوى وأمراض الشهوات" },
            { num: "٣", title: "المدح النبوي", desc: "وصف النبي ﷺ خِلقةً وخُلقاً" },
            { num: "٤", title: "المولد الشريف", desc: "علامات ولادة النبي ﷺ ومعجزاتها" },
            { num: "٥", title: "المعجزات", desc: "آيات النبي ﷺ الكبرى" },
            { num: "٦", title: "القرآن الكريم", desc: "إعجاز القرآن ومقامه" },
            { num: "٧", title: "الإسراء والمعراج", desc: "رحلة النبي ﷺ إلى السموات" },
            { num: "٨", title: "الجهاد", desc: "غزوات النبي ﷺ ومواقفه الكبرى" },
            { num: "٩", title: "الاستشفاع", desc: "التوسّل بالنبي ﷺ يوم القيامة" },
            { num: "١٠", title: "المناجاة والدعاء", desc: "الختام بالتضرّع والمغفرة" },
          ].map((section) => (
            <div
              key={section.num}
              className="p-3 bg-[var(--surface)] border border-[var(--border)] rounded-md flex gap-3"
            >
              <span className="text-[var(--gold)] text-lg font-bold min-w-6">{section.num}</span>
              <div>
                <p className="text-[var(--fg)] text-sm font-medium">{section.title}</p>
                <p className="text-[var(--muted)] text-xs">{section.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p>
          كل هذا في بحر البسيط، بقافية موحّدة على حرف الميم — 160 بيتاً تجري
          بسلاسة موسيقية تجعل حفظها أيسر من كثير من القصائد. هذا ليس صدفة:
          البوصيري اختار البسيط والميم عن قصد، ليكون الحفظ عبادةً وليس عبئاً.
        </p>
      </section>

      <section id="verses">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          أشهر أبيات البردة — مع شرح المعاني
        </h2>

        {[VERSE_MATLA, VERSE_NAFS, VERSE_SAYYID, VERSE_HABIB, VERSE_KHATIMA].map(
          (v) => (
            <div key={v.label} className="mb-8">
              <p className="text-[var(--muted)] text-xs mb-3 text-right">{v.label}</p>
              <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-3">
                <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
                  {v.verse}
                </p>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  <strong className="text-[var(--fg)]">المعنى: </strong>
                  {v.meaning}
                </p>
              </div>
            </div>
          )
        )}
      </section>

      <section id="spread">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          البردة في العالم — من الأزهر إلى إندونيسيا
        </h2>
        <p className="mb-4">
          لا تُوجد قصيدة عربية انتشرت كانتشار البردة جغرافياً وزمنياً. في
          غضون قرن من كتابتها، كانت قد وصلت إلى المغرب والأندلس وبلاد فارس
          والهند. واليوم تُتلى في:
        </p>
        <ul className="space-y-2 mb-6 text-[var(--muted)]">
          <li className="flex gap-2">
            <span className="text-[var(--gold)]">◆</span>
            <span>
              <strong className="text-[var(--fg)]">المجالس الصوفية</strong> — في
              مصر والشام والمغرب، تُنشد البردة جماعياً في حلقات الذكر
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[var(--gold)]">◆</span>
            <span>
              <strong className="text-[var(--fg)]">المدارس الدينية</strong> — في
              إندونيسيا وماليزيا وغرب أفريقيا، حفظ البردة من متطلبات التخرج
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[var(--gold)]">◆</span>
            <span>
              <strong className="text-[var(--fg)]">المولد النبوي</strong> — في
              ليلة المولد في دول عديدة تُقرأ البردة كاملةً أو مختارات منها
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[var(--gold)]">◆</span>
            <span>
              <strong className="text-[var(--fg)]">الترجمات</strong> — تُرجمت
              إلى الفارسية والتركية والأوردية والسواحيلية والملايوية وأكثر من
              ثلاثين لغة أخرى
            </span>
          </li>
        </ul>
        <p>
          ما يُفسّر هذا الانتشار الاستثنائي: البردة لا تُخاطب العقل وحده بل
          تُخاطب القلب المنكسر. هي شعر المذنب الذي يحمل ذنوبه ويطلب الشفاعة —
          وهذا شعور لا يحدّه مكان ولا يقيّده زمان.
        </p>
        <p className="mt-4">
          كتب عليها الشرّاح مئات التفسيرات والحواشي، أشهرها شرح الإمام
          القسطلاني (ت. 1517م) الذي يعدّ مرجعاً أساسياً في فهم أبياتها
          الدقيقة. وقد نظم بعض الشعراء معارضات لها على نفس الوزن والقافية، في
          مقدمتها «بانت سعاد» لكعب بن زهير التي كتبها قبل البوصيري بستة قرون.
        </p>
      </section>

      <section id="explore">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          ابدأ رحلتك مع الشعر العربي
        </h2>
        <p className="text-[var(--muted)] mb-4">
          البردة بوابة واسعة نحو المديح النبوي والشعر الديني في التراث العربي.
          استكشف المزيد على مسامرات شعرية:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <Link
            href="/explore/themes/zuhd"
            className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
          >
            <p className="text-[var(--accent)] mb-1">شعر الزهد</p>
            <p className="text-[var(--muted)] text-xs">أبيات التقوى والتأمّل</p>
          </Link>
          <Link
            href="/poets"
            className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
          >
            <p className="text-[var(--accent)] mb-1">الشعراء</p>
            <p className="text-[var(--muted)] text-xs">تصفّح كبار الشعراء العرب</p>
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
          مزيد من الشعر الديني والروحاني:
        </p>
        <ul className="space-y-1 text-sm">
          <li>
            <Link
              href="/blog/posts/ashaar-al-imam-ali"
              className="text-[var(--accent)] hover:underline"
            >
              أشعار الإمام علي — الحكمة والبلاغة في كلماته الخالدة
            </Link>
          </li>
          <li>
            <Link
              href="/explore/themes/hikma"
              className="text-[var(--accent)] hover:underline"
            >
              شعر الحكمة — أعمق أبيات الفلاسفة والزهّاد
            </Link>
          </li>
          <li>
            <Link
              href="/blog/posts/pre-islamic-poetry"
              className="text-[var(--accent)] hover:underline"
            >
              الشعر الجاهلي — عصر المعلقات والفروسية
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
