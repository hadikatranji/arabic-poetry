import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "المساجلة الشعرية",
  description:
    "العب المساجلة الشعرية — قُل بيتاً وأكمل بالحرف الأخير. لعبة شعرية تفاعلية مع 120+ بيت من أشعار العرب",
  openGraph: {
    title: "المساجلة الشعرية | مسامرات شعرية",
    description: "تحدَّ نفسك في المساجلة الشعرية — لعبة الأبيات التقليدية",
  },
};

export default function MusajalahLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
