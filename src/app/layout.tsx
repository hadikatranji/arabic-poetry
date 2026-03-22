import type { Metadata } from "next";
import { Amiri, Aref_Ruqaa } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://shi3r.com"),
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
  ],
  authors: [{ name: "Hadi Katranji" }],
  creator: "Hadi Katranji",
  openGraph: {
    type: "website",
    locale: "ar_AR",
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
  category: "education",
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
