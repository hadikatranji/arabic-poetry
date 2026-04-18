import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { poemId: string };
}): Promise<Metadata> {
  const poetName = decodeURIComponent(params.poemId);
  return {
    title: `حفظ أشعار ${poetName}`,
    description: `تمارين تفاعلية لحفظ أبيات ${poetName} — كشف تدريجي وإكمال البيت واختبار كامل`,
    openGraph: {
      title: `حفظ أشعار ${poetName} | مسامرات شعرية`,
      description: `احفظ أبيات ${poetName} مع تمارين تفاعلية`,
    },
  };
}

export default function MemorizePoemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
