import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "المدوّنة",
  description:
    "مقالات عن الشعر العربي، المساجلة الشعرية، وأعظم شعراء العرب — مدوّنة مسامرات شعرية",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
