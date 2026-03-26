import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "حفظ الشعر",
  description:
    "احفظ أجمل الأبيات الشعرية مع تمارين تفاعلية — كشف تدريجي وإكمال البيت واختبار كامل",
  openGraph: {
    title: "حفظ الشعر | مسامرات شعرية",
    description: "احفظ الأبيات الشعرية مع تمارين تفاعلية وكشف تدريجي",
  },
};

export default function MemorizeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
