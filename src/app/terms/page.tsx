import type { Metadata } from "next";
import Disclaimer from "@/components/Disclaimer";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";

export const metadata: Metadata = {
  title: "شروط الاستخدام",
  description:
    "شروط الاستخدام لموقع مسامرات شعرية — المحتوى للاستخدام الشخصي والتعليمي غير التجاري. Terms of use for shi3r.com — content for personal, educational, non-commercial use.",
  openGraph: {
    title: "شروط الاستخدام | مسامرات شعرية",
    description: "شروط الاستخدام لموقع مسامرات شعرية",
  },
};

export default function TermsPage() {
  return (
    <main
      dir="rtl"
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--fg)",
        padding: "2rem 1rem 4rem",
      }}
    >
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
        }}
      >
        {/* Nav */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
          <Link href="/" style={{ color: "var(--muted)", fontSize: "0.9rem", textDecoration: "none" }}>← العودة</Link>
          <ThemeToggle />
        </div>

        {/* Header */}
        <header style={{ marginBottom: "2.5rem", textAlign: "center" }}>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              color: "var(--gold)",
              marginBottom: "0.5rem",
            }}
          >
            شروط الاستخدام
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
            Terms of Use
          </p>
          <p style={{ color: "var(--muted)", fontSize: "0.8rem", marginTop: "0.5rem" }}>
            آخر تحديث: مارس ٢٠٢٦ — Last updated: March 2026
          </p>
        </header>

        {/* Arabic content */}
        <section
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "0.75rem",
            padding: "1.5rem 2rem",
            marginBottom: "1.5rem",
            lineHeight: "1.9",
          }}
        >
          <h2
            style={{
              fontSize: "1.2rem",
              fontWeight: "700",
              color: "var(--accent)",
              marginBottom: "1rem",
              borderBottom: "1px solid var(--border)",
              paddingBottom: "0.5rem",
            }}
          >
            بالعربية
          </h2>

          <h3 style={{ fontWeight: "700", marginBottom: "0.4rem", fontSize: "1rem" }}>
            ١. الاستخدام الشخصي والتعليمي
          </h3>
          <p style={{ color: "var(--muted)", marginBottom: "1rem", fontSize: "0.95rem" }}>
            يُتاح المحتوى الموجود على موقع «مسامرات شعرية» للاستخدام الشخصي والتعليمي غير
            التجاري فقط. لا يجوز إعادة نشر المحتوى أو استخدامه تجارياً دون إذن صريح.
          </p>

          <h3 style={{ fontWeight: "700", marginBottom: "0.4rem", fontSize: "1rem" }}>
            ٢. الشعر والإرث الأدبي
          </h3>
          <p style={{ color: "var(--muted)", marginBottom: "1rem", fontSize: "0.95rem" }}>
            الأشعار المعروضة هي من التراث الأدبي الكلاسيكي والحديث. يُرجى الإشارة إلى اسم
            الشاعر والمصدر عند الاقتباس أو المشاركة، إحياءً لذكرى أصحابها وصوناً للأمانة
            الأدبية.
          </p>

          <h3 style={{ fontWeight: "700", marginBottom: "0.4rem", fontSize: "1rem" }}>
            ٣. عدم ضمان الدقة
          </h3>
          <p style={{ color: "var(--muted)", marginBottom: "1rem", fontSize: "0.95rem" }}>
            يسعى الموقع إلى تقديم محتوى دقيق، غير أنه لا يضمن خلوّه من الأخطاء. المحتوى
            مقدَّم «كما هو» دون أي ضمان صريح أو ضمني. إن لاحظت خطأً، نرحب بتنبيهنا عبر
            البريد الإلكتروني.
          </p>

          <h3 style={{ fontWeight: "700", marginBottom: "0.4rem", fontSize: "1rem" }}>
            ٤. حق التحديث
          </h3>
          <p style={{ color: "var(--muted)", marginBottom: "1rem", fontSize: "0.95rem" }}>
            يحتفظ الموقع بالحق في تعديل المحتوى أو إضافته أو حذفه في أي وقت، بما في ذلك
            هذه الشروط ذاتها. يُنصح بمراجعة هذه الصفحة بصفة دورية.
          </p>

          <h3 style={{ fontWeight: "700", marginBottom: "0.4rem", fontSize: "1rem" }}>
            ٥. القانون المنظِّم
          </h3>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
            تخضع هذه الشروط للقوانين المعمول بها. استمرارك في استخدام الموقع يعني موافقتك
            على هذه الشروط.
          </p>
        </section>

        {/* English content */}
        <section
          dir="ltr"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "0.75rem",
            padding: "1.5rem 2rem",
            marginBottom: "1.5rem",
            lineHeight: "1.9",
            textAlign: "left",
          }}
        >
          <h2
            style={{
              fontSize: "1.2rem",
              fontWeight: "700",
              color: "var(--accent)",
              marginBottom: "1rem",
              borderBottom: "1px solid var(--border)",
              paddingBottom: "0.5rem",
            }}
          >
            In English
          </h2>

          <h3 style={{ fontWeight: "700", marginBottom: "0.4rem", fontSize: "1rem" }}>
            1. Personal and Educational Use
          </h3>
          <p style={{ color: "var(--muted)", marginBottom: "1rem", fontSize: "0.95rem" }}>
            Content on Musaramaat Shi3riyya (مسامرات شعرية) is made available for
            personal, educational, and non-commercial use only. Republishing or
            commercially exploiting the content without explicit permission is not allowed.
          </p>

          <h3 style={{ fontWeight: "700", marginBottom: "0.4rem", fontSize: "1rem" }}>
            2. Poetry and Literary Heritage
          </h3>
          <p style={{ color: "var(--muted)", marginBottom: "1rem", fontSize: "0.95rem" }}>
            The poetry displayed on this site is part of classical and modern Arabic
            literary heritage. When quoting or sharing poetry, please attribute the poet
            and source to honor the legacy of its creators and uphold literary integrity.
          </p>

          <h3 style={{ fontWeight: "700", marginBottom: "0.4rem", fontSize: "1rem" }}>
            3. No Warranty on Accuracy
          </h3>
          <p style={{ color: "var(--muted)", marginBottom: "1rem", fontSize: "0.95rem" }}>
            While we strive for accuracy, this site makes no representations or warranties
            of any kind regarding the completeness or accuracy of the content. Content is
            provided &quot;as is.&quot; If you spot an error, please let us know.
          </p>

          <h3 style={{ fontWeight: "700", marginBottom: "0.4rem", fontSize: "1rem" }}>
            4. Right to Update Content
          </h3>
          <p style={{ color: "var(--muted)", marginBottom: "1rem", fontSize: "0.95rem" }}>
            This site reserves the right to modify, add, or remove any content at any
            time, including these Terms of Use. We recommend reviewing this page
            periodically.
          </p>

          <h3 style={{ fontWeight: "700", marginBottom: "0.4rem", fontSize: "1rem" }}>
            5. Governing Law
          </h3>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
            These terms are governed by applicable law. Your continued use of this site
            constitutes your acceptance of these terms.
          </p>
        </section>

        <Disclaimer />
      </div>
    </main>
  );
}
