import type { Metadata } from "next";
import { getMatnBySlug, MUTOON } from "@/lib/mutoon-data";
import MatnPageClient from "./MatnPageClient";

export function generateStaticParams() {
  return MUTOON.map((matn) => ({ slug: matn.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const matn = getMatnBySlug(params.slug);
  if (!matn) {
    return { title: "متن غير موجود" };
  }
  return {
    title: matn.title,
    description: `${matn.description} — ${matn.verseCount} بيت مع الشرح`,
    openGraph: {
      title: `${matn.title} | مسامرات شعرية`,
      description: `تعلّم واحفظ ${matn.title} لـ${matn.authorFull} — ${matn.verseCount} بيت مع الشرح`,
    },
  };
}

export default function MatnPage({ params }: { params: { slug: string } }) {
  const matn = getMatnBySlug(params.slug);

  if (!matn) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-[var(--muted)]">لم يتم العثور على هذا المتن</p>
      </main>
    );
  }

  return <MatnPageClient matn={matn} />;
}
