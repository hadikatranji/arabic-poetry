import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout from "@/components/BlogPost";
import { getPostBySlug } from "@/lib/blog-data";

const post = getPostBySlug("nizar-qabbani-best-verses")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  openGraph: {
    title: `${post.title} | مسامرات شعرية`,
    description: post.description,
  },
};

const TOC = [
  { id: "intro", title: "من هو نزار قباني؟" },
  { id: "love", title: "أجمل أبيات الغزل" },
  { id: "homeland", title: "الوطن والقضية" },
  { id: "women", title: "المرأة في شعره" },
  { id: "legacy", title: "إرثه الشعري" },
];

const LOVE_VERSES = [
  {
    verse: "أنثاكِ في شِعري وأنتِ لا تعرفين\nأنّكِ في كلّ حروفي تسكنين",
    meaning: "يُخلّد المرأة في شعره دون أن تدرك هي أنها صارت جزءاً من كل كلمة كتبها.",
  },
  {
    verse: "قضيتُ عمري أكتب الحبَّ\nولم أجد مَن يقرأ ما كتبتُ كما تقرئين",
    meaning: "مدح لمن فهمت روحه وشعره فهماً حقيقياً، وهو أعلى ما يطلبه الشاعر.",
  },
  {
    verse: "أحبّكِ جداً وحين أقول جداً\nأعني أنّ الكلامَ وقفَ عاجزاً",
    meaning: "الحب الحقيقي يُسكت اللغة — وهو تناقض جميل من أديب يعيش بالكلمات.",
  },
  {
    verse: "لا أحبّكِ قليلاً ولا كثيراً\nأحبّكِ بكلّ ما يملكه العاشقون",
    meaning: "الحب عنده مطلق لا يُقاس بمقاييس الكثير والقليل.",
  },
];

const HOMELAND_VERSES = [
  {
    verse: "متى يُعلنون وفاة العرب؟\nمتى يُعلنون انتهاء العرب؟",
    meaning: "صرخة سياسية حادة يتساءل فيها عن مصير الأمة العربية بعد هزائمها المتتالية.",
  },
  {
    verse: "كتبتُ بالدم على جدران خيبتنا\nهزمتنا يا وطن هزيمةً نكراء",
    meaning: "رثاء الأمة بعد هزيمة 1967، من أقوى ما كتبه في الشعر السياسي.",
  },
];

const WOMEN_VERSES = [
  {
    verse: "المرأة التي أحبّها ليست امرأة\nهي قارة من الدفء والبرودة",
    meaning: "يرفع المرأة إلى مرتبة العالَم لا الشخص — وهذه فلسفته في تقديسها.",
  },
  {
    verse: "إنّكِ حين تبتسمين\nتُغيّرين جغرافيا الوجه وتاريخ الليل",
    meaning: "صورة شعرية فريدة تصف أثر الابتسامة بلغة جغرافية وتاريخية.",
  },
];

export default function NizarQabbaniPost() {
  return (
    <BlogPostLayout post={post} tableOfContents={TOC}>
      <section id="intro">
        <h2 className="text-xl text-[var(--accent)] mt-2 mb-3">من هو نزار قباني؟</h2>
        <p>
          نزار توفيق قباني (1923–1998)، دبلوماسي سوري وشاعر عربي بامتياز. وُلد في دمشق
          لعائلة عريقة، ودرس الحقوق ثم عمل سفيراً في عدة عواصم عالمية. لكنّه اختار
          الشعر طريقاً وهوية، وصار الصوت الأكثر تأثيراً في الشعر العربي الحديث.
        </p>
        <p>
          كتب نزار عن المرأة بلغة ثورية لم يجرؤ عليها شاعر قبله، وكتب عن الوطن
          بجرأة السياسي وحزن العاشق. ديوانه الأول &ldquo;قالت لي السمراء&rdquo; أثار
          جدلاً كبيراً حين نشره عام 1944. أما قصيدته &ldquo;هوامش على دفتر النكسة&rdquo; بعد
          حرب 1967، فكانت زلزالاً ثقافياً وسياسياً.
        </p>
      </section>

      <section id="love">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">أجمل أبيات الغزل</h2>
        <p className="text-[var(--muted)] mb-5">
          الغزل عند نزار ليس مجرد وصف — بل هو رحلة داخل الروح والأنوثة والمعنى.
        </p>
        <div className="space-y-6">
          {LOVE_VERSES.map((item, i) => (
            <div
              key={i}
              className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md"
            >
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

      <section id="homeland">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">الوطن والقضية</h2>
        <p className="text-[var(--muted)] mb-5">
          حين تحوّل نزار من شاعر الغزل إلى شاعر السياسة، كتب بنفس حدّة العاشق
          المجروح — لكنّ الجرح هذه المرة كان وطناً بأكمله.
        </p>
        <div className="space-y-6">
          {HOMELAND_VERSES.map((item, i) => (
            <div
              key={i}
              className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md"
            >
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

      <section id="women">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">المرأة في شعره</h2>
        <p className="text-[var(--muted)] mb-5">
          أعاد نزار اختراع صورة المرأة في الشعر العربي. لم يكتب عنها من الأعلى
          كما كان الشعر الكلاسيكي يفعل، بل كتب معها ومن روحها.
        </p>
        <div className="space-y-6">
          {WOMEN_VERSES.map((item, i) => (
            <div
              key={i}
              className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md"
            >
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

      <section id="legacy">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-3">إرثه الشعري</h2>
        <p>
          رحل نزار قباني في لندن عام 1998، لكنّ شعره لا يزال يُقرأ في كل بيت عربي.
          كتب أكثر من خمسين ديواناً، وتُغنّى قصائده على ألسنة كبار المطربين العرب
          من فيروز إلى كاظم الساهر.
        </p>
        <p>
          سرّ نزار أنه كتب بالعربية الفصحى بروح العامية — فصارت قصائده تُفهم
          وتُحسّ دون حاجة إلى معجم. ولهذا بقي وسيبقى.
        </p>
      </section>

      <div className="mt-8 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center">
        <p className="text-[var(--accent)] mb-3">استكشف المزيد من الشعراء العرب</p>
        <Link
          href="/poets"
          className="inline-block bg-[var(--fg)] text-[var(--bg)] px-6 py-2 rounded text-sm hover:opacity-80 transition-opacity"
        >
          معرض الشعراء
        </Link>
      </div>
    </BlogPostLayout>
  );
}
