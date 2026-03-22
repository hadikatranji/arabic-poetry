import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout from "@/components/BlogPost";
import { getPostBySlug } from "@/lib/blog-data";

const post = getPostBySlug("how-to-memorize-poetry")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  openGraph: {
    title: `${post.title} | مسامرات شعرية`,
    description: post.description,
  },
};

const TOC = [
  { id: "intro", title: "لماذا نحفظ الشعر؟" },
  { id: "method1", title: "١ — الفهم قبل الحفظ" },
  { id: "method2", title: "٢ — التقطيع الإيقاعي" },
  { id: "method3", title: "٣ — التكرار المتباعد" },
  { id: "method4", title: "٤ — الربط البصري" },
  { id: "method5", title: "٥ — الإنشاد بصوت عالٍ" },
  { id: "practice", title: "تدرّب الآن" },
];

const TIPS = [
  {
    id: "method1",
    num: "١",
    title: "الفهم قبل الحفظ",
    body: "أكثر أخطاء محفظي الشعر شيوعاً هو البدء بالحفظ قبل الفهم. حفظ ما لا تفهمه يشبه حفظ أرقام الهاتف — يزول بسرعة.",
    steps: [
      "اقرأ البيت بالكامل أولاً",
      "ابحث عن معنى كل كلمة لا تعرفها",
      "افهم الصورة الشعرية الكاملة",
      "اسأل: ماذا يريد الشاعر أن يقول بالضبط؟",
      "بعد ذلك فقط ابدأ الحفظ",
    ],
    example: "حين تحفظ 'على قدر أهل العزم تأتي العزائم' — افهم أن المتنبي يقول: همّتك هي سقفك. بعد هذا الفهم لن تنسى البيت أبداً.",
  },
  {
    id: "method2",
    num: "٢",
    title: "التقطيع الإيقاعي",
    body: "الشعر العربي الكلاسيكي مبنيّ على بحور موسيقية. هذا الإيقاع هو ذاكرة مخفية — إذا استخدمته يسهل الحفظ بشكل غير عادي.",
    steps: [
      "اضرب بيدك على المكتب مع كل مقطع",
      "اقرأ البيت ببطء مع الإيقاع أولاً",
      "ثم زد السرعة تدريجياً",
      "حتى يصبح الإيقاع تلقائياً",
    ],
    example: "بيت كـ'الخيل والليل والبيداء تعرفني' — اضرب مع كل وقفة: الخيلُ / والليـ / لُ والبيـ / داءُ تعرفني. هذا البحر سيحمل البيت في ذاكرتك.",
  },
  {
    id: "method3",
    num: "٣",
    title: "التكرار المتباعد (Spaced Repetition)",
    body: "الذاكرة البشرية تعمل بمنطق: ما تراجعه قبل النسيان مباشرة يُحفر عميقاً. هذا ما يُسمى علمياً التكرار المتباعد.",
    steps: [
      "احفظ البيت اليوم",
      "راجعه بعد ساعة",
      "راجعه مساءً",
      "راجعه غداً صباحاً",
      "راجعه بعد أسبوع",
      "راجعه بعد شهر",
    ],
    example: "بعد شهر من هذا النظام، سيكون البيت جزءاً دائماً من ذاكرتك مثل اسمك تماماً.",
  },
  {
    id: "method4",
    num: "٤",
    title: "الربط البصري",
    body: "الدماغ يحفظ الصور أسهل من الكلمات. قوّة الشعر أنه مليء بصور ملموسة — استخدمها لصالحك.",
    steps: [
      "حوّل البيت إلى صورة ذهنية حيّة",
      "اجعل الصورة مبالغاً فيها وملوّنة",
      "ضع نفسك داخل الصورة",
      "كلما كانت الصورة أغرب، كلما بقيت أطول",
    ],
    example: "لـ'الخيل والليل والبيداء تعرفني' — تخيّل نفسك واقفاً وسط صحراء ليلية سوداء، والخيول تحيط بك، وكأنها تنظر إليك وتعرفك بالاسم.",
  },
  {
    id: "method5",
    num: "٥",
    title: "الإنشاد بصوت عالٍ",
    body: "الحفظ الصامت أضعف أنواع الحفظ. حين تُنشد الشعر بصوت عالٍ تُشغّل ثلاثة مسارات في الدماغ: السمع والنطق والتسجيل الحركي.",
    steps: [
      "انشد البيت بصوت عالٍ كما لو تُلقي شعراً",
      "غيّر نبرتك مع معنى البيت",
      "سجّل نفسك واستمع للتسجيل",
      "انشده أمام شخص آخر — هذا يُثبّته بقوة",
    ],
    example: "العرب القدامى كانوا يحفظون آلاف الأبيات — لأنهم كانوا يُنشدونها في المجالس دائماً. الإنشاد هو سرّ ذاكرتهم.",
  },
];

export default function HowToMemorizePoetryPost() {
  return (
    <BlogPostLayout post={post} tableOfContents={TOC}>
      <section id="intro">
        <h2 className="text-xl text-[var(--accent)] mt-2 mb-3">لماذا نحفظ الشعر؟</h2>
        <p>
          في زمن جوجل وويكيبيديا، يسأل كثيرون: لماذا نحفظ الشعر؟ أليس بالإمكان
          البحث عنه في أي وقت؟
        </p>
        <p>
          الجواب أن الشعر المحفوظ يختلف عن الشعر المبحوث عنه اختلافاً جوهرياً.
          البيت الذي تحفظه يصبح جزءاً من تفكيرك — يأتيك في اللحظة المناسبة،
          في المحادثة، في لحظة الحزن أو الفرح، دون أن تبحث عنه. هذا هو الفرق
          بين امتلاك المعرفة وبين الوصول إليها.
        </p>
        <p>
          وعلمياً، حفظ الشعر يُقوّي الذاكرة العاملة، ويُطوّر الحس اللغوي،
          ويُنمّي القدرة على التعبير. وهو ما عرفه العرب القدامى وبنوا عليه
          حضارتهم الأدبية.
        </p>
      </section>

      {TIPS.map((tip) => (
        <section key={tip.id} id={tip.id}>
          <h2 className="text-xl text-[var(--accent)] mt-8 mb-3">
            {tip.num} — {tip.title}
          </h2>
          <p className="text-[var(--muted)] mb-4 leading-relaxed">{tip.body}</p>
          <div className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-4">
            <ul className="space-y-2">
              {tip.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-[var(--accent)] mt-0.5 shrink-0">←</span>
                  <span className="text-[var(--muted)]">{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-3 border-r-2 border-[var(--accent)] pr-4">
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              <strong className="text-[var(--fg)]">مثال: </strong>
              {tip.example}
            </p>
          </div>
        </section>
      ))}

      <section id="practice">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-3">تدرّب الآن</h2>
        <p>
          الطريقة الأفضل لتطبيق هذه التقنيات هي البدء فوراً. اختر بيتاً واحداً
          اليوم — بيتاً يعجبك ويُحرّك فيك شيئاً — وطبّق الخطوات الخمس.
        </p>
        <p>
          في موقع مسامرات شعرية، يمكنك التدرب على الحفظ بطريقة تفاعلية مع
          نظام اختبار يُحاكي أسلوب الكشف التدريجي والملء.
        </p>
      </section>

      <div className="mt-8 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center">
        <p className="text-[var(--accent)] mb-3">جرّب أداة الحفظ التفاعلية</p>
        <Link
          href="/memorize"
          className="inline-block bg-[var(--fg)] text-[var(--bg)] px-6 py-2 rounded text-sm hover:opacity-80 transition-opacity"
        >
          ابدأ الحفظ
        </Link>
      </div>
    </BlogPostLayout>
  );
}
