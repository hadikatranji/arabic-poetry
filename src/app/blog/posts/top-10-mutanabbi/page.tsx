import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout from "@/components/BlogPost";
import { getPostBySlug } from "@/lib/blog-data";

const post = getPostBySlug("top-10-mutanabbi")!;

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
  { id: "intro", title: "من هو المتنبي؟" },
  { id: "verses", title: "أجمل 10 أبيات" },
  { id: "legacy", title: "لماذا يبقى المتنبي؟" },
];

const VERSES = [
  { h1: "على قدر أهل العزم تأتي العزائمُ", h2: "وتأتي على قدر الكرام المكارمُ", meaning: "العزيمة والهمّة تكون على قدر صاحبها — فمن كانت همّته عالية أتته المعالي." },
  { h1: "إذا غامرت في شرفٍ مرومٍ", h2: "فلا تقنع بما دون النجومِ", meaning: "إذا طلبت المجد فاطلب أعلاه ولا ترضَ بالقليل." },
  { h1: "الخيل والليل والبيداء تعرفني", h2: "والسيف والرمح والقرطاس والقلمُ", meaning: "الفخر بالشجاعة في الحرب والبراعة في الأدب معاً." },
  { h1: "ما كل ما يتمنى المرء يدركه", h2: "تجري الرياح بما لا تشتهي السفنُ", meaning: "ليس كل ما يتمناه الإنسان يحققه — فالأقدار لا تسير دائماً كما نريد." },
  { h1: "ذو العقل يشقى في النعيم بعقله", h2: "وأخو الجهالة في الشقاوة ينعمُ", meaning: "العاقل يتعذب بتفكيره حتى في الرخاء، بينما الجاهل سعيد في جهله." },
  { h1: "كفى بك داءً أن ترى الموت شافيا", h2: "وحسب المنايا أن يكنّ أمانيا", meaning: "حين يصبح الموت أمنية، فاعلم أن الداء بلغ أقصاه." },
  { h1: "إذا أنت أكرمت الكريم ملكته", h2: "وإن أنت أكرمت اللئيم تمرّدا", meaning: "الكريم يقدّر الإحسان فيكون لك، واللئيم يتكبّر إذا أحسنت إليه." },
  { h1: "ومن نكد الدنيا على الحرّ أن يرى", h2: "عدوّاً له ما من صداقته بدُّ", meaning: "من أصعب ما في الدنيا أن تضطر لمصادقة من تكره." },
  { h1: "أنا الذي نظر الأعمى إلى أدبي", h2: "وأسمعت كلماتي من به صممُ", meaning: "شعري بلغ من القوة أن الأعمى يراه والأصمّ يسمعه." },
  { h1: "واحرّ قلباه ممن قلبه شبمُ", h2: "ومن بجسمي وحالي عنده سقمُ", meaning: "يشكو حرارة قلبه تجاه من قلبه بارد لا يبالي بحاله." },
];

export default function Top10MutanabbiPost() {
  return (
    <BlogPostLayout post={post} tableOfContents={TOC}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Intro */}
      <section id="intro">
        <h2 className="text-xl text-[var(--accent)] mt-2 mb-3">من هو المتنبي؟</h2>
        <p>
          أبو الطيب أحمد بن الحسين الجعفي الكندي (915-965م)، المعروف بالمتنبي،
          هو أعظم شعراء العربية على الإطلاق. وُلد في الكوفة وعاش في بلاط سيف
          الدولة الحمداني في حلب. ملأ الدنيا وشغل الناس بشعره الذي لا يزال
          يُردَّد بعد أكثر من ألف عام.
        </p>
        <p>
          تميّز شعره بالحكمة العميقة والفخر والمدح، واستخدم لغةً قوية وصوراً
          شعرية لم يسبقه إليها أحد. في هذا المقال نستعرض أجمل عشرة أبيات له
          مع شرح معانيها.
        </p>
      </section>

      {/* Verses */}
      <section id="verses">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">أجمل 10 أبيات</h2>
        <div className="space-y-8">
          {VERSES.map((verse, i) => (
            <div
              key={i}
              className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md"
            >
              <div className="text-xs text-[var(--accent)] mb-3">{i + 1}.</div>
              <p className="verse-text text-lg text-center mb-4">
                {verse.h1}
                <span className="hemistich-separator">✶</span>
                {verse.h2}
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                <strong className="text-[var(--fg)]">المعنى:</strong> {verse.meaning}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Legacy */}
      <section id="legacy">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-3">لماذا يبقى المتنبي؟</h2>
        <p>
          يبقى المتنبي حياً في وجدان العرب لأن أبياته ليست مجرد شعر — بل هي
          حكمة عملية تصلح لكل زمان. حين تواجه تحدياً تتذكر &ldquo;على قدر أهل العزم&rdquo;،
          وحين تُحبط تتذكر &ldquo;تجري الرياح بما لا تشتهي السفن&rdquo;.
        </p>
        <p>
          هذا هو سرّ خلود الشعر العربي: أنه لا يتحدث عن زمنه فقط، بل عن
          الإنسان في كل زمن.
        </p>
      </section>

      {/* CTA to poet page */}
      <div className="mt-8 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center">
        <p className="text-[var(--accent)] mb-3">اقرأ المزيد من أشعار المتنبي</p>
        <Link
          href="/poets/10"
          className="inline-block bg-[var(--fg)] text-[var(--bg)] px-6 py-2 rounded text-sm hover:opacity-80 transition-opacity"
        >
          صفحة المتنبي
        </Link>
      </div>
    </BlogPostLayout>
  );
}
