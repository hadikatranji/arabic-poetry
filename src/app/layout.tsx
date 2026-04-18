import type { Metadata, Viewport } from "next";
import { Amiri, Aref_Ruqaa } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

const arefRuqaa = Aref_Ruqaa({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-aref",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f3ec" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1410" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shi3r.com"),
  title: {
    default: "مسامرات شعرية — Poetry Nights",
    template: "%s | مسامرات شعرية",
  },
  description:
    "تعلّم الشعر العربي، تصفّح دواوين أعظم الشعراء، احفظ الأبيات، وتحدَّ نفسك في المساجلة الشعرية. Learn Arabic poetry through interactive games, memorization, and exploration of classical and modern poets.",
  keywords: [
    "شعر عربي",
    "مساجلة شعرية",
    "الشعر العربي",
    "المتنبي",
    "عنترة بن شداد",
    "امرؤ القيس",
    "نزار قباني",
    "محمود درويش",
    "أحمد شوقي",
    "حفظ الشعر",
    "أبيات شعرية",
    "Arabic poetry",
    "poetry game",
    "learn Arabic poetry",
    "classical Arabic",
    "musajalah",
    "poetry duel",
    "shi3r",
  ],
  authors: [{ name: "Hadi Katranji" }],
  creator: "Hadi Katranji",
  alternates: {
    canonical: "https://www.shi3r.com",
    languages: {
      "ar": "https://www.shi3r.com",
      "en": "https://www.shi3r.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_AR",
    url: "https://www.shi3r.com",
    title: "مسامرات شعرية — Poetry Nights",
    description:
      "تعلّم الشعر العربي وتحدَّ نفسك في المساجلة الشعرية — تصفّح دواوين 20 شاعراً من الجاهلية إلى العصر الحديث",
    siteName: "مسامرات شعرية",
  },
  twitter: {
    card: "summary_large_image",
    title: "مسامرات شعرية — Poetry Nights",
    description:
      "تعلّم الشعر العربي وتحدَّ نفسك في المساجلة الشعرية",
    creator: "@hadikatranji",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  category: "education",
  other: {
    "google-site-verification": "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${amiri.variable} ${arefRuqaa.variable} font-aref antialiased`}
      >
        <ThemeProvider>
          <Analytics />
          {children}
          <footer
            dir="rtl"
            style={{
              padding: "0.5rem 1rem",
              textAlign: "center",
              fontSize: "0.65rem",
              color: "var(--muted)",
              opacity: 0.45,
            }}
          >
            <span>المحتوى لأغراض أدبية وتعليمية فقط</span>
            <span style={{ margin: "0 0.5rem" }}>·</span>
            <a href="/privacy" style={{ color: "inherit", textDecoration: "none" }}>سياسة الخصوصية</a>
            <span style={{ margin: "0 0.5rem" }}>·</span>
            <a href="/terms" style={{ color: "inherit", textDecoration: "none" }}>شروط الاستخدام</a>
            <span style={{ margin: "0 0.5rem" }}>·</span>
            <span>© {new Date().getFullYear()} shi3r.com</span>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
