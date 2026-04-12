import type { Metadata } from "next";
import Disclaimer from "@/components/Disclaimer";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
  description:
    "سياسة الخصوصية لموقع مسامرات شعرية — لا نجمع بيانات شخصية، ولا نستخدم ملفات تتبع. Privacy policy for shi3r.com — no personal data collected, no tracking.",
  openGraph: {
    title: "سياسة الخصوصية | مسامرات شعرية",
    description: "سياسة الخصوصية لموقع مسامرات شعرية",
  },
};

export default function PrivacyPage() {
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
            سياسة الخصوصية
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
            Privacy Policy
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
            ١. لا جمع للبيانات الشخصية
          </h3>
          <p style={{ color: "var(--muted)", marginBottom: "1rem", fontSize: "0.95rem" }}>
            لا يقوم موقع «مسامرات شعرية» بجمع أي بيانات شخصية تعريفية من زواره. لا نطلب
            الاسم ولا البريد الإلكتروني ولا رقم الهاتف ولا أي معلومة شخصية أخرى.
          </p>

          <h3 style={{ fontWeight: "700", marginBottom: "0.4rem", fontSize: "1rem" }}>
            ٢. ملفات الارتباط (الكوكيز)
          </h3>
          <p style={{ color: "var(--muted)", marginBottom: "1rem", fontSize: "0.95rem" }}>
            نستخدم فقط ملفات الارتباط الأساسية اللازمة لعمل الموقع (مثل حفظ تفضيل الوضع
            المظلم أو المضيء). لا نستخدم أي ملفات تتبع إعلانية أو تحليلية من جهات خارجية.
          </p>

          <h3 style={{ fontWeight: "700", marginBottom: "0.4rem", fontSize: "1rem" }}>
            ٣. لا تتبع من جهات خارجية
          </h3>
          <p style={{ color: "var(--muted)", marginBottom: "1rem", fontSize: "0.95rem" }}>
            لا يتضمن الموقع أي أدوات تتبع أو تحليل من جهات خارجية مثل Google Analytics أو
            أي شبكات إعلانية. بياناتك تبقى عندك.
          </p>

          <h3 style={{ fontWeight: "700", marginBottom: "0.4rem", fontSize: "1rem" }}>
            ٤. الغرض من المحتوى
          </h3>
          <p style={{ color: "var(--muted)", marginBottom: "1rem", fontSize: "0.95rem" }}>
            محتوى الموقع بالكامل لأغراض تعليمية وأدبية وثقافية. الأشعار المعروضة هي إرث
            إنساني مشترك، وتُقدَّم للاستمتاع بها والتعلم منها دون أي أغراض تجارية.
          </p>

          <h3 style={{ fontWeight: "700", marginBottom: "0.4rem", fontSize: "1rem" }}>
            ٥. التواصل معنا
          </h3>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
            لأي استفسار يتعلق بسياسة الخصوصية، يمكنك التواصل عبر:{" "}
            <a
              href="mailto:contact@shi3r.com"
              style={{ color: "var(--accent)", textDecoration: "underline" }}
            >
              contact@shi3r.com
            </a>
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
            1. No Personal Data Collected
          </h3>
          <p style={{ color: "var(--muted)", marginBottom: "1rem", fontSize: "0.95rem" }}>
            Musaramaat Shi3riyya (مسامرات شعرية) does not collect any personally
            identifiable information from its visitors. We do not ask for names, email
            addresses, phone numbers, or any other personal data.
          </p>

          <h3 style={{ fontWeight: "700", marginBottom: "0.4rem", fontSize: "1rem" }}>
            2. Cookies
          </h3>
          <p style={{ color: "var(--muted)", marginBottom: "1rem", fontSize: "0.95rem" }}>
            We use only essential cookies required for the site to function (such as
            storing your dark/light mode preference). No advertising or third-party
            analytical cookies are used.
          </p>

          <h3 style={{ fontWeight: "700", marginBottom: "0.4rem", fontSize: "1rem" }}>
            3. No Third-Party Tracking
          </h3>
          <p style={{ color: "var(--muted)", marginBottom: "1rem", fontSize: "0.95rem" }}>
            This site does not include any third-party tracking or analytics tools such as
            Google Analytics or advertising networks. Your data stays with you.
          </p>

          <h3 style={{ fontWeight: "700", marginBottom: "0.4rem", fontSize: "1rem" }}>
            4. Content Purpose
          </h3>
          <p style={{ color: "var(--muted)", marginBottom: "1rem", fontSize: "0.95rem" }}>
            All content on this site is provided for educational, literary, and cultural
            purposes. The poetry displayed is part of humanity&apos;s shared heritage and is
            presented for enjoyment and learning with no commercial intent.
          </p>

          <h3 style={{ fontWeight: "700", marginBottom: "0.4rem", fontSize: "1rem" }}>
            5. Contact
          </h3>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
            For any privacy-related inquiries, please contact us at:{" "}
            <a
              href="mailto:contact@shi3r.com"
              style={{ color: "var(--accent)", textDecoration: "underline" }}
            >
              contact@shi3r.com
            </a>
          </p>
        </section>

        <Disclaimer />
      </div>
    </main>
  );
}
