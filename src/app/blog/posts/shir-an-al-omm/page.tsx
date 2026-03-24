import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout from "@/components/BlogPost";
import { getPostBySlug } from "@/lib/blog-data";

const post = getPostBySlug("shir-an-al-omm")!;

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
  { id: "intro", title: "الأم في الشعر العربي" },
  { id: "hafez", title: "حافظ إبراهيم: الأم مدرسة" },
  { id: "darwish", title: "محمود درويش: الحنين إلى الأم" },
  { id: "khansa", title: "الخنساء: أمّ الرثاء العربي" },
  { id: "symbol", title: "الأم رمزاً للوطن" },
  { id: "explore", title: "استكشف المزيد" },
];

const HAFEZ_VERSE = {
  verse: "الأمُّ مدرسةٌ إذا أعددتَها\nأعددتَ شعباً طيّبَ الأعراق",
  poet: "حافظ إبراهيم",
  meaning:
    "أعظم بيت في الشعر العربي عن الأم وأكثرها انتشاراً — يُشبّه الأم بالمدرسة الكاملة، فإن رُبِّيَت وعُلِّمَت وأُعدَّت، أنتجت جيلاً كريم الأصول سليم الأخلاق.",
};

const DARWISH_VERSES = [
  {
    verse: "أحنُّ إلى خبز أمّي\nوقهوة أمّي\nولمسة أمّي",
    meaning:
      "مطلع قصيدته الخالدة 'أحنُّ إلى خبز أمّي' — ثلاثة أشياء بسيطة يختصر بها عالماً كاملاً من الدفء والانتماء. الخبز والقهوة واللمسة ليست أشياء مادية، بل هي صور الأمان والوطن والطفولة.",
  },
];

const KHANSA_VERSE = {
  verse: "وإنّ صخراً لتأتمّ الهداةُ به\nكأنّه علمٌ في رأسه نارُ",
  poet: "الخنساء",
  meaning:
    "ترثي أخاها صخراً بأبلغ صورة — يُشبّهه بالعلَم في رأسه نار: يُهتدى به في الظلام كما يُهتدى بالمنارة. قصائدها تجسّد قوة المرأة العربية في الحزن والكرامة.",
};

export default function ShirAnAlOmmPost() {
  return (
    <BlogPostLayout post={post} tableOfContents={TOC}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section id="intro">
        <h2 className="text-xl text-[var(--accent)] mt-2 mb-3">
          الأم في الشعر العربي — مقام لا يُضاهى
        </h2>
        <p>
          في كل عصر من عصور الشعر العربي، كانت الأم حاضرة — أحياناً صريحة باسمها،
          وأحياناً مختبئة في رمز الوطن أو التراب أو الخبز أو الماء. كتب الشعراء
          عن الحرب والمجد والغزل، لكنّهم حين يكتبون عن الأم، يكتبون بالدموع لا بالحبر.
        </p>
        <p>
          يستعرض هذا المقال أجمل ما قيل في الأم من الشعر العربي، عبر ثلاثة أصوات
          كبرى: حافظ إبراهيم الذي رفع الأم إلى مرتبة الأمة، ومحمود درويش الذي
          ربط الحنين إليها بالحنين إلى الوطن، والخنساء التي جسّدت الحزن والصمود في آنٍ معاً.
        </p>
      </section>

      <section id="hafez">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          حافظ إبراهيم — الأم مدرسة
        </h2>
        <p className="text-[var(--muted)] mb-5">
          محمد حافظ إبراهيم (1872–1932)، الملقّب بـ&ldquo;شاعر النيل&rdquo;، قال أشهر بيت
          في الشعر العربي الحديث عن الأمهات:
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {HAFEZ_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            {HAFEZ_VERSE.meaning}
          </p>
        </div>
        <p>
          البيت لا يمدح الأم الفردية فقط، بل يُعلن فلسفة تربوية كاملة: مصدر قوة
          الأمم هو الأمهات. لو أحسنّا تربية المرأة وتعليمها، أنتجنا أجيالاً كريمة
          الطباع نظيفة الأعراق. وهذا البيت اليوم مدوّن على جدران المدارس والمستشفيات
          وفي أذهان الملايين في العالم العربي.
        </p>
        <p>
          جاء هذا البيت من قصيدة &ldquo;في النيل&rdquo; التي كتبها حافظ احتفاءً بنهضة مصر
          في مطلع القرن العشرين — وقد وضع الأم في قلب هذه النهضة.
        </p>
      </section>

      <section id="darwish">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          محمود درويش — الحنين إلى الأم والوطن
        </h2>
        <p className="text-[var(--muted)] mb-5">
          الشاعر الفلسطيني محمود درويش (1941–2008) كتب عن أمّه بطريقة مغايرة تماماً:
          لم يمدحها بالبطولة، بل بالبساطة. في قصيدته الشهيرة &ldquo;أحنُّ إلى خبز أمّي&rdquo;،
          ينتصر للأشياء الصغيرة على حساب التاريخ:
        </p>
        <div className="space-y-6">
          {DARWISH_VERSES.map((item, i) => (
            <div
              key={i}
              className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md"
            >
              <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
                {item.verse}
              </p>
              <p className="text-[var(--muted)] text-sm leading-relaxed">
                <strong className="text-[var(--fg)]">المعنى: </strong>
                {item.meaning}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-5">
          في هذه القصيدة، الأم هي الوطن — وفقدانها هو الغربة. درويش لا يصف
          جيشاً ولا خريطة، بل يصف رائحة الخبز ودفء الكفّ. وفي هذه البساطة
          يكمن عظمة الشعر.
        </p>
        <p>
          كُتبت القصيدة في سياق المنفى — وهي تُذكّرنا بأن أعمق ما يفقده الإنسان
          حين يُهجَر ليس الأرض، بل لمسة من يحبّه.
        </p>
      </section>

      <section id="khansa">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          الخنساء — أمّ الرثاء العربي
        </h2>
        <p className="text-[var(--muted)] mb-5">
          تُمَاضر بنت عمرو الحارث، المعروفة بـ&ldquo;الخنساء&rdquo; (575–645م)، ليست شاعرة
          عن الأمهات فحسب — بل هي نموذج للأم الصابرة في أصعب اللحظات.
          رثت أخاها صخراً في أجمل قصائد الرثاء العربي:
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {KHANSA_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            {KHANSA_VERSE.meaning}
          </p>
        </div>
        <p>
          الخنساء شهدت مقتل أخويها في الجاهلية، ثم فقدت أبناءها الأربعة في
          معركة القادسية — وحين بلغها الخبر، قيل إنها قالت: &ldquo;الحمد لله الذي
          شرّفني بشهادتهم.&rdquo; قصائدها تجمع بين الحزن الإنساني العميق والكرامة
          التي لا تنكسر.
        </p>
        <p>
          كان النبي محمد ﷺ يُعجب بشعرها ويطلب منها الإنشاد في المجالس —
          وهذا أعلى تكريم أُسبغ على شاعرة في تاريخ العرب.
        </p>
      </section>

      <section id="symbol">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          الأم رمزاً للوطن في الشعر العربي
        </h2>
        <p>
          ظاهرة لافتة في الشعر العربي الحديث: كثير من الشعراء يُساوون بين الأم
          والوطن. فالأم هي الأصل والجذر، والوطن هو الأرض التي احتضنتهم.
          هذا التماهي ليس مجازياً فحسب — بل هو تعبير نفسي عميق عن الانتماء.
        </p>
        <ul className="list-disc list-inside text-[var(--muted)] space-y-2 my-4 text-sm">
          <li>
            <strong className="text-[var(--fg)]">بدر شاكر السياب</strong> يُشبّه مسقط رأسه&nbsp;
            &ldquo;جيكور&rdquo; بالأم، ويكتب &ldquo;جيكور أمّي&rdquo; بوصفها الرحم الأول.
          </li>
          <li>
            <strong className="text-[var(--fg)]">محمود درويش</strong> يتحوّل بين الأم والأرض
            الفلسطينية في صور متشابكة لا تنفصل.
          </li>
          <li>
            <strong className="text-[var(--fg)]">نزار قباني</strong> كتب عن دمشق بلغة المحبّ
            المشتاق إلى الأم، فالمدينة عنده &ldquo;تربّت في أحضانها&rdquo;.
          </li>
        </ul>
        <p>
          هذا التقليد يكشف أن الشاعر العربي يرى في الأم ليس مجرد إنسانة، بل
          مبدأ الوجود — فالأم هي أول شيء يعرفه الإنسان، وآخر ما يتذكره حين يغيب.
        </p>
      </section>

      <section id="explore">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          ابدأ رحلتك مع الشعر العربي
        </h2>
        <p className="text-[var(--muted)] mb-6">
          موقع مسامرات شعرية يضمّ مئات الأبيات من كبار الشعراء المذكورين في هذا المقال.
          يمكنك استكشافها حسب الشاعر أو الموضوع أو حفظها بتقنية التكرار المتباعد.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/poets/19"
            className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
          >
            <p className="text-[var(--accent)] mb-1">محمود درويش</p>
            <p className="text-[var(--muted)] text-xs">أبيات مختارة</p>
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
