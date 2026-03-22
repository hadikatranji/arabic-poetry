import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "كيف تبدأ بتعلّم الشعر العربي",
  description:
    "دليل شامل للمبتدئين في تعلّم الشعر العربي: من أين تبدأ، ما هي البحور الشعرية، وكيف تحفظ الأبيات",
  openGraph: {
    title: "كيف تبدأ بتعلّم الشعر العربي | مسامرات شعرية",
    description: "دليل المبتدئين لتعلّم الشعر العربي",
  },
};

export default function LearnArabicPoetryPost() {
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
          <time>2026-03-22</time> · 8 دقائق
        </div>

        <h1 className="text-3xl mb-6">كيف تبدأ بتعلّم الشعر العربي</h1>

        <div className="mb-8">
          <ShareButtons
            url="https://shi3r.com/blog/posts/learn-arabic-poetry"
            title="كيف تبدأ بتعلّم الشعر العربي — مسامرات شعرية"
            text="دليل المبتدئين لتعلّم الشعر العربي"
          />
        </div>

        <div className="space-y-6 text-sm leading-relaxed">
          <p>
            الشعر العربي من أعرق الفنون الأدبية في العالم، يمتدّ تاريخه لأكثر من
            1500 عام. إذا كنت تريد البدء في تعلّمه وتذوّقه، فهذا الدليل لك.
          </p>

          <h2 className="text-xl text-[var(--accent)] mt-8 mb-3">١. ابدأ بالأبيات المشهورة</h2>
          <p>
            لا تبدأ بقراءة دواوين كاملة. ابدأ بالأبيات الشهيرة التي يعرفها الناس —
            أبيات المتنبي والمعلقات وأشعار نزار قباني. هذه الأبيات مشهورة لأنها
            جميلة وعميقة وسهلة الفهم.
          </p>

          <div className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center">
            <p className="verse-text text-base">
              قفا نبكِ من ذكرى حبيبٍ ومنزلِ
              <span className="hemistich-separator">✶</span>
              بسقط اللوى بين الدخول فحوملِ
            </p>
            <p className="text-xs text-[var(--muted)] mt-2">أشهر بيت في الشعر العربي — امرؤ القيس</p>
          </div>

          <h2 className="text-xl text-[var(--accent)] mt-8 mb-3">٢. تعرّف على البنية</h2>
          <p>
            البيت الشعري العربي ينقسم إلى شطرين: الصدر (الشطر الأول) والعجز (الشطر
            الثاني). القافية هي الحرف الأخير الذي تنتهي به أبيات القصيدة.
          </p>

          <h2 className="text-xl text-[var(--accent)] mt-8 mb-3">٣. اعرف العصور الأدبية</h2>
          <ul className="space-y-3 text-[var(--muted)]">
            <li><strong className="text-[var(--fg)]">الجاهلي:</strong> عصر المعلقات — شعر الفروسية والفخر والغزل (امرؤ القيس، عنترة)</li>
            <li><strong className="text-[var(--fg)]">الأموي:</strong> شعر الغزل العذري والنقائض (مجنون ليلى، جرير، الفرزدق)</li>
            <li><strong className="text-[var(--fg)]">العباسي:</strong> العصر الذهبي — الحكمة والفلسفة (المتنبي، أبو نواس، المعري)</li>
            <li><strong className="text-[var(--fg)]">الحديث:</strong> التجديد والقضايا الوطنية (شوقي، نزار، درويش)</li>
          </ul>

          <h2 className="text-xl text-[var(--accent)] mt-8 mb-3">٤. احفظ كل يوم بيتاً</h2>
          <p>
            أفضل طريقة لتعلّم الشعر هي الحفظ. ابدأ ببيتٍ واحد كل يوم. اقرأه عدة
            مرات، افهم معناه، ثم حاول تسميعه من الذاكرة. بعد شهر ستكون قد حفظت 30
            بيتاً.
          </p>

          <h2 className="text-xl text-[var(--accent)] mt-8 mb-3">٥. العب المساجلة</h2>
          <p>
            المساجلة الشعرية هي أفضل طريقة لتنشيط ذاكرتك الشعرية. كلما لعبت أكثر،
            كلما تذكرت أبياتاً أكثر واكتشفت قصائد جديدة.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/memorize"
              className="block p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
            >
              <p className="text-[var(--accent)] text-sm">ابدأ الحفظ</p>
            </Link>
            <Link
              href="/poets"
              className="block p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
            >
              <p className="text-[var(--accent)] text-sm">تصفّح الشعراء</p>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
