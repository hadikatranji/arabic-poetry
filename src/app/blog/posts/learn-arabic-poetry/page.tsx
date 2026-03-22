import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout from "@/components/BlogPost";
import { getPostBySlug } from "@/lib/blog-data";

const post = getPostBySlug("learn-arabic-poetry")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  openGraph: {
    title: `${post.title} | مسامرات شعرية`,
    description: post.description,
  },
};

const TOC = [
  { id: "start", title: "ابدأ بالأبيات المشهورة" },
  { id: "structure", title: "تعرّف على البنية" },
  { id: "eras", title: "اعرف العصور الأدبية" },
  { id: "memorize", title: "احفظ كل يوم بيتاً" },
  { id: "play", title: "العب المساجلة" },
];

export default function LearnArabicPoetryPost() {
  return (
    <BlogPostLayout post={post} tableOfContents={TOC}>
      <p>
        الشعر العربي من أعرق الفنون الأدبية في العالم، يمتدّ تاريخه لأكثر من
        1500 عام. إذا كنت تريد البدء في تعلّمه وتذوّقه، فهذا الدليل لك.
      </p>

      <section id="start">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-3">١. ابدأ بالأبيات المشهورة</h2>
        <p>
          لا تبدأ بقراءة دواوين كاملة. ابدأ بالأبيات الشهيرة التي يعرفها الناس —
          أبيات المتنبي والمعلقات وأشعار نزار قباني. هذه الأبيات مشهورة لأنها
          جميلة وعميقة وسهلة الفهم.
        </p>
        <div className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center my-4">
          <p className="verse-text text-base">
            قفا نبكِ من ذكرى حبيبٍ ومنزلِ
            <span className="hemistich-separator">✶</span>
            بسقط اللوى بين الدخول فحوملِ
          </p>
          <p className="text-xs text-[var(--muted)] mt-2">أشهر بيت في الشعر العربي — امرؤ القيس</p>
        </div>
      </section>

      <section id="structure">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-3">٢. تعرّف على البنية</h2>
        <p>
          البيت الشعري العربي ينقسم إلى شطرين: <strong>الصدر</strong> (الشطر الأول)
          و<strong>العجز</strong> (الشطر الثاني). القافية هي الحرف الأخير الذي تنتهي
          به أبيات القصيدة. والبحر هو الوزن الموسيقي الذي يسير عليه الشعر.
        </p>
        <p>
          في العربية 16 بحراً شعرياً وضعها الخليل بن أحمد الفراهيدي، أشهرها:
          الطويل، البسيط، الكامل، الوافر، والمتقارب.
        </p>
      </section>

      <section id="eras">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-3">٣. اعرف العصور الأدبية</h2>
        <ul className="space-y-3 text-[var(--muted)] my-4">
          <li><strong className="text-[var(--fg)]">الجاهلي:</strong> عصر المعلقات — شعر الفروسية والفخر والغزل (امرؤ القيس، عنترة، زهير)</li>
          <li><strong className="text-[var(--fg)]">الأموي:</strong> شعر الغزل العذري والنقائض (مجنون ليلى، جرير، الفرزدق)</li>
          <li><strong className="text-[var(--fg)]">العباسي:</strong> العصر الذهبي — الحكمة والفلسفة (المتنبي، أبو نواس، المعري، أبو فراس)</li>
          <li><strong className="text-[var(--fg)]">الحديث:</strong> التجديد والقضايا الوطنية (شوقي، حافظ، نزار، درويش)</li>
        </ul>
      </section>

      <section id="memorize">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-3">٤. احفظ كل يوم بيتاً</h2>
        <p>
          أفضل طريقة لتعلّم الشعر هي الحفظ. ابدأ ببيتٍ واحد كل يوم. اقرأه عدة
          مرات، افهم معناه، ثم حاول تسميعه من الذاكرة. بعد شهر ستكون قد حفظت 30
          بيتاً — وهذا يكفي للمنافسة في المساجلة.
        </p>
        <p>
          في مسامرات شعرية، لدينا وضع الحفظ بثلاث طرق: الكشف التدريجي،
          وإكمال العجز، والاختبار الكامل. جرّبها واختر ما يناسبك.
        </p>
      </section>

      <section id="play">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-3">٥. العب المساجلة</h2>
        <p>
          المساجلة الشعرية هي أفضل طريقة لتنشيط ذاكرتك الشعرية. كلما لعبت أكثر،
          كلما تذكرت أبياتاً أكثر واكتشفت قصائد جديدة. إنها تحوّل الحفظ من واجب
          إلى متعة.
        </p>
      </section>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
    </BlogPostLayout>
  );
}
