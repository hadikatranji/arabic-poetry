import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "أجمل 10 أبيات للمتنبي",
  description:
    "اكتشف أجمل وأشهر أبيات أبي الطيب المتنبي، أعظم شعراء العرب، مع شرح معاني كل بيت",
  openGraph: {
    title: "أجمل 10 أبيات للمتنبي | مسامرات شعرية",
    description: "حكمة المتنبي في أجمل 10 أبيات",
  },
};

const VERSES = [
  { h1: "على قدر أهل العزم تأتي العزائمُ", h2: "وتأتي على قدر الكرام المكارمُ", meaning: "العزيمة والهمّة تكون على قدر صاحبها — فمن كانت همّته عالية أتته المعالي." },
  { h1: "إذا غامرت في شرفٍ مرومٍ", h2: "فلا تقنع بما دون النجومِ", meaning: "إذا طلبت المجد فاطلب أعلاه ولا ترضَ بالقليل." },
  { h1: "الخيل والليل والبيداء تعرفني", h2: "والسيف والرمح والقرطاس والقلمُ", meaning: "الفخر بالشجاعة في الحرب والبراعة في الأدب معاً." },
  { h1: "ما كل ما يتمنى المرء يدركه", h2: "تجري الرياح بما لا تشتهي السفنُ", meaning: "ليس كل ما يتمناه الإنسان يحققه — فالأقدار لا تسير دائماً كما نريد." },
  { h1: "ذو العقل يشقى في النعيم بعقله", h2: "وأخو الجهالة في الشقاوة ينعمُ", meaning: "العاقل يتعذب بتفكيره حتى في الرخاء، بينما الجاهل سعيد في جهله." },
  { h1: "كفى بك داءً أن ترى الموت شافيا", h2: "وحسب المنايا أن يكنّ أمانيا", meaning: "حين يصبح الموت أمنية، فاعلم أن الداء بلغ أقصاه." },
  { h1: "إذا أنت أكرمت الكريم ملكته", h2: "وإن أنت أكرمت اللئيم تمرّدا", meaning: "الكريم يقدّر الإحسان فيكون لك، واللئيم يتكبّر إذا أحسنت إليه." },
  { h1: "ومن نكد الدنيا على الحرّ أن يرى", h2: "عدوّاً له ما من صداقته بدُّ", meaning: "من أصعب ما في الدنيا أن تضطر لمصادقة من تكره." },
  { h1: "أنا الذي نظر الأعمى إلى أدبي", h2: "وأسمعت كلماتي من به صممُ", meaning: "شعري بلغ من القوة أن الأعمى يراه والأصمّ يسمعه." },
  { h1: "واحرّ قلباه ممن قلبه شبمُ", h2: "ومن بجسمي وحالي عنده سقمُ", meaning: "يشكو حرارة قلبه تجاه من قلبه بارد لا يبالي بحاله." },
];

export default function Top10MutanabbiPost() {
  return (
    <main className="min-h-screen max-w-2xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <Link href="/blog" className="text-[var(--muted)] hover:text-[var(--fg)] text-sm">
          العودة للمدوّنة
        </Link>
        <ThemeToggle />
      </div>

      <article>
        <div className="text-xs text-[var(--muted)] mb-4">
          <time>2026-03-22</time> · 7 دقائق
        </div>

        <h1 className="text-3xl mb-6">أجمل 10 أبيات للمتنبي</h1>

        <div className="mb-8">
          <ShareButtons
            url="https://shi3r.com/blog/posts/top-10-mutanabbi"
            title="أجمل 10 أبيات للمتنبي — مسامرات شعرية"
            text="اكتشف أجمل أبيات المتنبي مع شرح المعاني"
          />
        </div>

        <p className="text-sm text-[var(--muted)] mb-8 leading-relaxed">
          أبو الطيب المتنبي (915-965م) — أعظم شعراء العرب وأكثرهم حكمةً.
          ملأ الدنيا وشغل الناس بأبيات لا تزال تُردَّد بعد أكثر من ألف عام.
          إليك أجمل 10 أبيات مع شرح معانيها.
        </p>

        <div className="space-y-8">
          {VERSES.map((verse, i) => (
            <div
              key={i}
              className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-md"
            >
              <div className="text-xs text-[var(--accent)] mb-3">
                {i + 1}.
              </div>
              <p className="verse-text text-lg text-center mb-4">
                {verse.h1}
                <span className="hemistich-separator">✶</span>
                {verse.h2}
              </p>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {verse.meaning}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center">
          <p className="text-[var(--accent)] mb-4">اقرأ المزيد من أشعار المتنبي</p>
          <Link
            href="/poets/10"
            className="inline-block bg-[var(--fg)] text-[var(--bg)] px-6 py-2 rounded text-sm hover:opacity-80 transition-opacity"
          >
            صفحة المتنبي
          </Link>
        </div>
      </article>
    </main>
  );
}
