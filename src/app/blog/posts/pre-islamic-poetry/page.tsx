import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout from "@/components/BlogPost";
import { getPostBySlug } from "@/lib/blog-data";

const post = getPostBySlug("pre-islamic-poetry")!;

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
  author: { "@type": "Organization", name: "مسامرات شعرية" },
  publisher: { "@type": "Organization", name: "مسامرات شعرية", url: "https://www.shi3r.com" },
  inLanguage: "ar",
};

const TOC = [
  { id: "intro", title: "ما هو الشعر الجاهلي؟" },
  { id: "muallaqat", title: "المعلقات السبع" },
  { id: "themes", title: "أبرز موضوعاته" },
  { id: "poets", title: "أعظم شعرائه" },
  { id: "legacy", title: "أثره على اللغة العربية" },
];

const MUALLAQAT = [
  { poet: "امرؤ القيس", verse: "قفا نبكِ من ذكرى حبيبٍ ومنزلِ\nبسِقطِ اللِّوى بين الدَّخول فحَوملِ", note: "مطلع معلقته الشهيرة — من أكثر الأبيات العربية شهرة على مرّ العصور." },
  { poet: "زهير بن أبي سلمى", verse: "سئمتُ تكاليفَ الحياةِ ومَن يعِش\nثمانين حولاً لا أبا لك يَسأمِ", note: "حكمة إنسانية عميقة تتجاوز زمنها — صوت رجل عاش وتعب ورأى." },
  { poet: "عنترة بن شداد", verse: "هل غادرَ الشعراءُ من مُتردَّمِ\nأم هل عرفتَ الدارَ بعد توهُّمِ", note: "يتساءل عنترة باستكبار: هل أبقى السابقون شيئاً لم أقله؟" },
  { poet: "طرفة بن العبد", verse: "لعمرُك ما الأيامُ إلا معارةٌ\nفما اسطعتَ من معروفها فتزوَّدِ", note: "فلسفة الحياة عند طرفة الذي مات شاباً: الأيام مستعارة فاستمتع بها." },
];

const THEMES = [
  { title: "الفخر والحماسة", desc: "كان الشاعر الجاهلي لسان قبيلته. يفخر بشجاعتها وكرمها ويهجو خصومها. الشعر كان سلاحاً اجتماعياً قبل أن يكون فناً." },
  { title: "الغزل والنسيب", desc: "استهلّ الشعراء قصائدهم بالبكاء على الأطلال وذكر المحبوبة — فكان النسيب مدخلاً عاطفياً قبل الدخول في الموضوع الرئيسي." },
  { title: "وصف الطبيعة", desc: "البادية والخيل والناقة والصحراء — صوّر الشاعر الجاهلي بيئته بدقة مذهلة جعلت شعره وثيقة حضارية لا مجرد فن." },
  { title: "الحكمة والفلسفة", desc: "رغم أنهم لم يعرفوا الفلسفة اليونانية، أنتج الشعراء الجاهليون حكماً إنسانية عميقة تُدرَّس حتى اليوم." },
];

const POETS = [
  { name: "امرؤ القيس", bio: "ملك ضلّ عرشه فصار شاعراً. يُلقّب بـ'أبو الشعراء' لريادته في الوصف والتشبيه. معلقته مطلع كل دراسة للأدب العربي.", id: 1 },
  { name: "عنترة بن شداد", bio: "المحارب الأسود الذي انتزع حريته بسيفه وشعره. قصته مع عبلة أشهر قصص الحب العربي. شعره يجمع القوة والعاطفة بشكل نادر.", id: 2 },
  { name: "زهير بن أبي سلمى", bio: "شاعر الحكمة والسلام. يُقال أنه كان يعمل على القصيدة سنة كاملة قبل نشرها — ولهذا صُفّيت حكمته.", id: 3 },
  { name: "طرفة بن العبد", bio: "الشاعر الشاب الذي عاش بسرعة ومات مبكراً. معلقته تفيض بفلسفة العيش في اللحظة من رجل يعلم أن عمره قصير.", id: 4 },
];

export default function PreIslamicPoetryPost() {
  return (
    <BlogPostLayout post={post} tableOfContents={TOC}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section id="intro">
        <h2 className="text-xl text-[var(--accent)] mt-2 mb-3">ما هو الشعر الجاهلي؟</h2>
        <p>
          الشعر الجاهلي هو الشعر العربي المنتَج قبل ظهور الإسلام في القرن السابع
          الميلادي. وكلمة &ldquo;جاهلي&rdquo; لا تعني الجهل بالمعنى الحديث، بل تشير إلى حالة
          ما قبل الوحي الإسلامي. وقد أنتج هذا العصر أرقى ما وصل إليه الشعر العربي
          من حيث اللغة والصورة والإيقاع.
        </p>
        <p>
          كان الشاعر في المجتمع الجاهلي يحتل مكانة الصحفي والمؤرخ والزعيم في آنٍ
          واحد. قصيدته وثيقة قبلية ورسالة سياسية وعمل فني في الوقت ذاته.
        </p>
      </section>

      <section id="muallaqat">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">المعلقات السبع</h2>
        <p className="text-[var(--muted)] mb-5">
          المعلقات هي أشهر قصائد الشعر الجاهلي. يُقال إنها عُلّقت على الكعبة المشرفة
          تكريماً لها — ومن هنا جاء اسمها. وهي سبع قصائد لسبعة شعراء، كل منها
          مرجع في فنّه.
        </p>
        <div className="space-y-6">
          {MUALLAQAT.map((item, i) => (
            <div
              key={i}
              className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md"
            >
              <div className="text-xs text-[var(--accent)] mb-3 font-medium">{item.poet}</div>
              <p className="verse-text text-lg text-center mb-4 whitespace-pre-line leading-loose">
                {item.verse}
              </p>
              <p className="text-[var(--muted)] text-sm leading-relaxed">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="themes">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">أبرز موضوعاته</h2>
        <div className="space-y-4">
          {THEMES.map((theme, i) => (
            <div
              key={i}
              className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md"
            >
              <h3 className="text-[var(--accent)] mb-2">{theme.title}</h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed">{theme.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="poets">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">أعظم شعرائه</h2>
        <div className="space-y-4">
          {POETS.map((poet) => (
            <div
              key={poet.id}
              className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[var(--fg)]">{poet.name}</h3>
                <Link
                  href={`/poets/${poet.id}`}
                  className="text-xs text-[var(--accent)] hover:underline"
                >
                  صفحة الشاعر ←
                </Link>
              </div>
              <p className="text-[var(--muted)] text-sm leading-relaxed">{poet.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="legacy">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-3">أثره على اللغة العربية</h2>
        <p>
          حين جاء الإسلام وأُنزل القرآن الكريم باللغة العربية، كانت هذه اللغة قد
          بلغت ذروة تطورها في الشعر الجاهلي. ولهذا أصبح الشعر الجاهلي مرجعاً لغوياً
          لا غنى عنه في تفسير القرآن الكريم وفهم أساليبه.
        </p>
        <p>
          يقول اللغويون العرب: &ldquo;من أراد أن يفهم القرآن فليفهم الشعر الجاهلي أولاً&rdquo;.
          وهذا ما جعل دراسة هذا الشعر فريضة في كل مدرسة عربية حتى اليوم.
        </p>
      </section>

      <div className="mt-8 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center">
        <p className="text-[var(--accent)] mb-3">اقرأ أشعار الشعراء الجاهليين</p>
        <Link
          href="/poets"
          className="inline-block bg-[var(--fg)] text-[var(--bg)] px-6 py-2 rounded text-sm hover:opacity-80 transition-opacity"
        >
          تصفّح الشعراء
        </Link>
      </div>
    </BlogPostLayout>
  );
}
