import type { Metadata } from "next";
import { SAMPLE_POETS } from "@/lib/sample-poets";
import MemorizePoemClient from "./MemorizePoemClient";

export function generateStaticParams() {
  return SAMPLE_POETS.map((p) => ({
    poemId: encodeURIComponent(p.nameAr),
  }));
}

export function generateMetadata({
  params,
}: {
  params: { poemId: string };
}): Metadata {
  const poetName = decodeURIComponent(params.poemId);
  return {
    title: `حفظ أشعار ${poetName}`,
    description: `تمارين تفاعلية لحفظ أشعار ${poetName} — كشف تدريجي وإكمال البيت واختبار كامل`,
    openGraph: {
      title: `حفظ أشعار ${poetName} | مسامرات شعرية`,
      description: `احفظ أشعار ${poetName} مع تمارين تفاعلية`,
    },
  };
}

export default function MemorizePoemPage({
  params,
}: {
  params: { poemId: string };
}) {
  const poetName = decodeURIComponent(params.poemId);
  return <MemorizePoemClient poetName={poetName} />;
}
