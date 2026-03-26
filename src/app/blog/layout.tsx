import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "المدوّنة",
  description:
    "مقالات عن الشعر العربي، المساجلة الشعرية، وأعظم شعراء العرب — مدوّنة مسامرات شعرية",
  openGraph: {
    title: "المدوّنة | مسامرات شعرية",
    description: "مقالات عن الشعر العربي وأعظم شعراء العرب",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
