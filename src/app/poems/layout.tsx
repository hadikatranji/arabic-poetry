import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الأبيات الشعرية",
  description:
    "تصفّح وابحث في 120+ بيت من أجمل الشعر العربي — من المتنبي وعنترة وامرؤ القيس إلى نزار قباني ومحمود درويش",
};

export default function PoemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
