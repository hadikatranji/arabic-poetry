import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "ما هي المساجلة الشعرية؟",
  description:
    "تعرّف على المساجلة الشعرية، لعبة الشعر العربي التقليدية التي كان يتبارى فيها الشعراء في المجالس",
  openGraph: {
    title: "ما هي المساجلة الشعرية؟ | مسامرات شعرية",
    description: "تاريخ وقواعد المساجلة الشعرية — لعبة الأبيات التقليدية",
  },
};

export default function WhatIsMusajalahPost() {
  return (
    <main className="min-h-screen max-w-2xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <Link href="/blog" className="text-[var(--muted)] hover:text-[var(--fg)] text-sm">
          العودة للمدوّنة
        </Link>
        <ThemeToggle />
      </div>

      <article>
        <div className="text-xs text-[var(--muted)] mb-4">
          <time>2026-03-22</time> · 5 دقائق
        </div>

        <h1 className="text-3xl mb-6">ما هي المساجلة الشعرية؟</h1>

        <div className="mb-8">
          <ShareButtons
            url="https://shi3r.com/blog/posts/what-is-musajalah"
            title="ما هي المساجلة الشعرية؟ — مسامرات شعرية"
            text="تعرّف على المساجلة الشعرية، لعبة الشعر العربي التقليدية"
          />
        </div>

        <div className="prose-custom space-y-6 text-sm leading-relaxed">
          <p>
            المساجلة الشعرية هي واحدة من أقدم الألعاب الأدبية في الثقافة العربية.
            كان الشعراء يتبارون في المجالس حيث يقول أحدهم بيتاً من الشعر، ويجب على
            الآخر أن يردّ ببيتٍ يبدأ بالحرف الأخير من البيت السابق.
          </p>

          <h2 className="text-xl text-[var(--accent)] mt-8 mb-3">القواعد</h2>
          <p>
            قواعد المساجلة بسيطة وممتعة:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[var(--muted)]">
            <li>يقول اللاعب الأول بيتاً من الشعر العربي</li>
            <li>يأخذ الحرف الأخير من البيت</li>
            <li>يجب على اللاعب التالي أن يقول بيتاً يبدأ بهذا الحرف</li>
            <li>من يعجز عن الإتيان ببيتٍ يخسر الجولة</li>
            <li>تُعامل التاء المربوطة (ة) كهاء (ه)</li>
            <li>تُوحّد أشكال الألف (أ إ آ) إلى ألف واحدة (ا)</li>
          </ul>

          <h2 className="text-xl text-[var(--accent)] mt-8 mb-3">التاريخ</h2>
          <p>
            عُرفت المساجلة في المجالس الأدبية منذ العصر الجاهلي، وازدهرت في البلاط
            العباسي حيث كان الشعراء يتنافسون أمام الخلفاء. كانت مهارة الشاعر تُقاس
            بقدرته على الارتجال واستحضار الأبيات بسرعة.
          </p>

          <h2 className="text-xl text-[var(--accent)] mt-8 mb-3">المساجلة الرقمية</h2>
          <p>
            في مسامرات شعرية، أحيينا هذا التقليد العريق بشكلٍ رقمي. يمكنك الآن
            ممارسة المساجلة مع قاعدة بيانات تضمّ أكثر من 120 بيتاً من أشعار 20
            شاعراً عبر أربعة عصور أدبية.
          </p>

          <div className="mt-10 p-6 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center">
            <p className="text-[var(--accent)] mb-4">جرّب المساجلة الآن</p>
            <Link
              href="/musajalah"
              className="inline-block bg-[var(--fg)] text-[var(--bg)] px-6 py-2 rounded text-sm hover:opacity-80 transition-opacity"
            >
              ابدأ المساجلة
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
