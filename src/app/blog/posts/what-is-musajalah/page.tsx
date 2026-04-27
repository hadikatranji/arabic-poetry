import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout from "@/components/BlogPost";
import { getPostBySlug } from "@/lib/blog-data";

const post = getPostBySlug("what-is-musajalah")!;

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
  { id: "what", title: "ما هي المساجلة؟" },
  { id: "rules", title: "القواعد" },
  { id: "history", title: "التاريخ" },
  { id: "digital", title: "المساجلة الرقمية" },
];

export default function WhatIsMusajalahPost() {
  return (
    <BlogPostLayout post={post} tableOfContents={TOC}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section id="what">
        <h2 className="text-xl text-[var(--accent)] mt-2 mb-3">ما هي المساجلة؟</h2>
        <p>
          المساجلة الشعرية هي واحدة من أقدم الألعاب الأدبية في الثقافة العربية.
          كان الشعراء يتبارون في المجالس حيث يقول أحدهم بيتاً من الشعر، ويجب على
          الآخر أن يردّ ببيتٍ يبدأ بالحرف الأخير من البيت السابق.
        </p>
        <p>
          تُعدّ المساجلة اختباراً حقيقياً لسعة اطّلاع المتسابق وقدرته على
          استحضار الأبيات بسرعة. كلما حفظت أبياتاً أكثر، كنت أقوى في المساجلة.
        </p>
      </section>

      <section id="rules">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-3">القواعد</h2>
        <p>قواعد المساجلة بسيطة وممتعة:</p>
        <ul className="list-disc list-inside space-y-2 text-[var(--muted)] my-4">
          <li>يقول اللاعب الأول بيتاً من الشعر العربي</li>
          <li>يأخذ الحرف الأخير من البيت</li>
          <li>يجب على اللاعب التالي أن يقول بيتاً يبدأ بهذا الحرف</li>
          <li>من يعجز عن الإتيان ببيتٍ يخسر الجولة</li>
          <li>تُعامل التاء المربوطة (ة) كهاء (ه)</li>
          <li>تُوحّد أشكال الألف (أ إ آ) إلى ألف واحدة (ا)</li>
        </ul>
      </section>

      <section id="history">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-3">التاريخ</h2>
        <p>
          عُرفت المساجلة في المجالس الأدبية منذ العصر الجاهلي، وازدهرت في البلاط
          العباسي حيث كان الشعراء يتنافسون أمام الخلفاء. كانت مهارة الشاعر تُقاس
          بقدرته على الارتجال واستحضار الأبيات بسرعة.
        </p>
        <p>
          وفي العصر الحديث، أصبحت المساجلة تُمارس في الجلسات العائلية والمسابقات
          التلفزيونية، وهي تقليد حيّ لا يزال يجمع الناس حول جمال اللغة العربية.
        </p>
      </section>

      <section id="digital">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-3">المساجلة الرقمية</h2>
        <p>
          في مسامرات شعرية، أحيينا هذا التقليد العريق بشكلٍ رقمي. يمكنك الآن
          ممارسة المساجلة مع قاعدة بيانات تضمّ أكثر من 120 بيتاً من أشعار 20
          شاعراً عبر أربعة عصور أدبية.
        </p>
        <p>
          التطبيق يتعامل ذكياً مع خصوصيات الحروف العربية: يُوحّد أشكال الألف،
          ويعامل التاء المربوطة كهاء، ويتجاهل التشكيل — حتى تركّز على المتعة
          لا على التفاصيل التقنية.
        </p>
      </section>

      <div className="mt-8 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center">
        <p className="text-[var(--accent)] mb-3">جرّب المساجلة الآن</p>
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
