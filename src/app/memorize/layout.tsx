import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "حفظ الشعر",
  description:
    "احفظ أجمل الأبيات الشعرية مع تمارين تفاعلية — كشف تدريجي وإكمال البيت واختبار كامل",
};

export default function MemorizeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
