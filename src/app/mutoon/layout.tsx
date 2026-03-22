import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "المتون العلمية",
  description:
    "احفظ المتون العلمية: تحفة الأطفال، الجزرية، ألفية ابن مالك، لامية الأفعال، البردة — مع شرح كل بيت",
  openGraph: {
    title: "المتون العلمية | مسامرات شعرية",
    description: "تعلّم واحفظ المتون العلمية مع شرح وتسميع تفاعلي",
  },
};

export default function MutoonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
