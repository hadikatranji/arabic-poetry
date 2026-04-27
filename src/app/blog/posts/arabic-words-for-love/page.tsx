import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout from "@/components/BlogPost";
import { getPostBySlug } from "@/lib/blog-data";

const post = getPostBySlug("arabic-words-for-love")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  openGraph: {
    title: `${post.title} | مسامرات شعرية`,
    description: post.description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.description,
  datePublished: post.date,
  author: { "@type": "Organization", name: "مسامرات شعرية" },
  publisher: { "@type": "Organization", name: "مسامرات شعرية", url: "https://www.shi3r.com" },
  inLanguage: "ar",
};

const TOC = [
  { id: "intro", title: "العربية ولغة الحب" },
  { id: "levels", title: "المراتب الاثنتا عشرة" },
  { id: "poetry", title: "الحب في الشعر" },
];

const LOVE_LEVELS = [
  {
    level: 1,
    word: "المَيْل",
    transliteration: "al-Mayl",
    meaning: "الانحياز الأول",
    desc: "أول بذرة الحب — حين يميل قلبك نحو شخص دون أن تعرف السبب. هو الجاذبية في أولى لحظاتها، قبل أن يكتسب الشعور اسماً.",
    verse: "مِلتُ إليكِ ميلَ الظمآنِ للماءِ\nقبل أن أعرف أنّك ستصيرين سمائي",
  },
  {
    level: 2,
    word: "الهَوَى",
    transliteration: "al-Hawa",
    meaning: "الهوى والرغبة",
    desc: "الهوى مشتق من 'هوى' أي سقط — كأن القلب يسقط نحو المحبوب. هو الرغبة والانجذاب حين يبدأ القلب بالانشغال. ومن هنا قيل إن الهوى إذا غلب العقل جاء البلاء.",
    verse: "أقول لقلبي يا قلبُ لا تتعلّقِ\nفيقول هَوَيتُ وليس لي في النهى يدُ",
  },
  {
    level: 3,
    word: "الصَّبْوَة",
    transliteration: "al-Sabwa",
    meaning: "الخفّة والصِّبا",
    desc: "حين يجعلك الحب تتصرف بخفة وعفوية، كأنك عدت طفلاً. الصبوة هي انشراح القلب ومرحه حين يرى المحبوب — قبل أن يثقل الهوى.",
    verse: "تصابيتُ والأيامُ تُبعدُ بيننا\nكأنّ الصِّبا عادَ وعادَت طرائقُه",
  },
  {
    level: 4,
    word: "الصَّبابَة",
    transliteration: "al-Sababa",
    meaning: "الشوق المحرق",
    desc: "الصبابة رقّة الشوق وحرارته. مشتقة من 'الصَّبّ' أي الصب والسيلان — كأن القلب يسيل شوقاً. هي درجة أعمق من الهوى، يشعر فيها العاشق بالحرقة الدائمة.",
    verse: "قضى اللهُ يا سعدى علَيَّ بحبّكم\nفما لي إلى صَبابةٍ عنكم يدُ",
  },
  {
    level: 5,
    word: "الشَّغَف",
    transliteration: "al-Shaghaf",
    meaning: "الحب يبلغ الشغاف",
    desc: "الشغاف هو غلاف القلب — فإذا بلغ الحب الشغافَ اخترق القلب تماماً. ومنه قوله تعالى على لسان زليخا: 'قد شغفها حُبّاً'. الشغف هو الحب الذي يسكن صميم القلب.",
    verse: "شَغَفْتِ فؤادي فلا تَبعُدي\nفإن بُعدكِ موتٌ وأنتِ الحياةُ",
  },
  {
    level: 6,
    word: "الوَجْد",
    transliteration: "al-Wajd",
    meaning: "الوجد والانفعال",
    desc: "الوجد هو الحالة الانفعالية الشديدة — الحزن الممزوج بالشوق الذي لا يُوصف. حين يملكك الشعور بالمحبوب حتى تبكي دون أن تعرف لماذا.",
    verse: "وجدتُ على فُقدانِهِ وجدَ والهٍ\nيَرى الأرضَ تدور والسماءَ تميدُ",
  },
  {
    level: 7,
    word: "الحُبّ",
    transliteration: "al-Hubb",
    meaning: "الحبّ الكامل",
    desc: "الحب هو المشاعر الكاملة الراسخة. يقول اللغويون إنه مشتق من 'الحَبَب' وهو ما يطفو على وجه الماء — كأن القلب فاض بالمحبوب حتى ظهر على السطح. هو الحب الواضح المعلن.",
    verse: "أُحبّكِ يا من لا أُسمّيكِ في الملأِ\nوأُسرُّ بذكرِ الاسمِ حين أكونُ وحدي",
  },
  {
    level: 8,
    word: "العِشْق",
    transliteration: "al-Ishq",
    meaning: "التعلّق والإدمان",
    desc: "العشق مشتق من 'العَشَقَة' — نبتة تلتفّ على الشجرة حتى تيبسها. وكذلك العاشق يلتفّ على قلبه هواه حتى يشغله عن كل شيء. هو الحب المزمن الذي صار طبيعة لا تُفارق.",
    verse: "عَشِقتُكِ حتى صِرتِ أنتِ وكائني\nوأصبحتُ لا أدري أأنا أم أنتِ أنا",
  },
  {
    level: 9,
    word: "الوَلَه",
    transliteration: "al-Walah",
    meaning: "الذهول والحيرة",
    desc: "الوله هو ذهاب العقل وانقطاع التركيز بسبب شدة الحب. الوالِه لا يستطيع أن يُفكّر في شيء آخر — يدخل غرفة وينسى لماذا دخل، يتحدث مع الناس وعقله عند المحبوب.",
    verse: "وَلِهَ القلبُ عن طريقِ صوابِه\nفهو في الناسِ حاضرٌ وغيابُه",
  },
  {
    level: 10,
    word: "الهُيام",
    transliteration: "al-Huyam",
    meaning: "الجنون والتيه",
    desc: "الهيام هو التيه في الصحراء — وكذلك العاشق يتيه في حبه لا يجد طريقاً. هو جنون الحب الذي جعل مجنون ليلى يتيه في الصحاري ويقول الشعر للرياح.",
    verse: "هِمتُ بليلى وهي ممّا أهيمُ به\nكالماءِ في الأرضِ لا مُستقرٌّ له",
  },
  {
    level: 11,
    word: "التَّتَيُّم",
    transliteration: "al-Tatayum",
    meaning: "العبودية للحب",
    desc: "التتيّم من 'التيم' أي العبد — وكأن العاشق صار عبداً لمحبوبه لا إرادة له. قُيودُه ليست من حديد بل من النظرة والابتسامة والذكرى.",
    verse: "تتيَّمَني حبُّكِ فصرتُ عبداً\nلنظرةٍ منكِ أو كلمةٍ أو نداءِ",
  },
  {
    level: 12,
    word: "التَّعبُّد",
    transliteration: "al-Ta'abbud",
    meaning: "العبادة والتقديس",
    desc: "أعلى مراتب الحب في اللغة العربية — حين يصبح المحبوب معبوداً في قلب العاشق. هو الحب الذي تجاوز كل حد، وفيه يرى العاشق في المحبوب كل الكمال وكل الجمال. وقد حذّر الحكماء من هذه المرتبة لأنها تُذيب الذات.",
    verse: "عبدتُكِ لا للجنّةِ أطلبُها\nولا للنارِ أهرُبُ من عذابها\nعبدتُكِ لأنّي حين أُبصرُكِ\nأنسى الوجودَ وأنسى ما سواها",
  },
];

const POETRY_EXAMPLES = [
  {
    poet: "المتنبي",
    context: "الهوى والعشق",
    verse: "وما الهوى إلا صورةٌ في خيالنا\nيُطيلُ علينا نومَنا ثم يذهبُ",
    note: "المتنبي يتناول الهوى بعين الفيلسوف المتشكّك — الحب خيال يُطيل نومنا ثم يتركنا.",
  },
  {
    poet: "قيس بن الملوّح",
    context: "الوله والهيام",
    verse: "تعلّقتُ ليلى وهي ذاتُ ذؤابةٍ\nولم يَبدُ للأتراب من ثديها حَجمُ",
    note: "يصف بداية الوله في الطفولة — كأن الهيام بُرمِج في روحه قبل أن يعرف الحب.",
  },
  {
    poet: "ابن الفارض",
    context: "التعبّد",
    verse: "سقتني وما زلنا على سرّ واحدٍ\nوفي غيرِ كأسٍ لم يكن فيه مَن سكرا",
    note: "ابن الفارض يبلغ مرتبة التعبّد في شعره الصوفي — الحب عنده عبادة روحية.",
  },
];

export default function ArabicWordsForLovePost() {
  return (
    <BlogPostLayout post={post} tableOfContents={TOC}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section id="intro">
        <h2 className="text-xl text-[var(--accent)] mt-2 mb-3">العربية ولغة الحب</h2>
        <p>
          يُقال إن الإسكيمو لديهم خمسون كلمة للثلج — لأن الثلج مركزي في حياتهم.
          والعرب لديهم اثنتا عشرة مرتبة للحب — لأن الحب كان مركز الشعر والحياة والوجود.
        </p>
        <p>
          هذه المراتب ليست مجرد مترادفات. كل كلمة تصف مرحلة مختلفة من رحلة الحب،
          بدقة نفسية مذهلة تجعلها أقرب إلى علم النفس منها إلى الشعر. رتّبها علماء
          اللغة من أضعف درجات الميل إلى أعلى درجات التعبّد.
        </p>
        <p>
          اقرأها وتأمّل: أين أنت في هذه المراتب؟
        </p>
      </section>

      <section id="levels">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-6">المراتب الاثنتا عشرة</h2>
        <div className="space-y-6">
          {LOVE_LEVELS.map((item) => (
            <div
              key={item.level}
              className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-3xl font-light text-[var(--accent)] ml-3">
                    {item.word}
                  </span>
                  <span className="text-xs text-[var(--muted)] block mt-1">
                    {item.transliteration} — {item.meaning}
                  </span>
                </div>
                <span className="text-2xl text-[var(--border)] font-light">
                  {item.level}
                </span>
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                {item.desc}
              </p>
              <div className="border-t border-[var(--border)] pt-3">
                <p className="verse-text text-sm text-center text-[var(--fg)] whitespace-pre-line leading-loose opacity-80">
                  {item.verse}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="poetry">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">الحب في الشعر</h2>
        <p className="text-[var(--muted)] mb-5">
          جسّد الشعراء هذه المراتب في أبياتهم — إليك ثلاثة أمثلة من شعراء مختلفين
          يمثّلون مراتب مختلفة من الحب.
        </p>
        <div className="space-y-6">
          {POETRY_EXAMPLES.map((item, i) => (
            <div
              key={i}
              className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm text-[var(--fg)]">{item.poet}</span>
                <span className="text-xs text-[var(--accent)] border border-[var(--border)] px-2 py-0.5 rounded">
                  {item.context}
                </span>
              </div>
              <p className="verse-text text-base text-center mb-3 whitespace-pre-line leading-loose">
                {item.verse}
              </p>
              <p className="text-xs text-[var(--muted)] leading-relaxed">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md">
        <h3 className="text-[var(--accent)] mb-3 text-center">خلاصة المراتب</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {LOVE_LEVELS.map((item) => (
            <div key={item.level} className="flex items-center gap-2">
              <span className="text-[var(--accent)] text-xs w-4 text-center">{item.level}</span>
              <span className="text-[var(--fg)]">{item.word}</span>
              <span className="text-[var(--muted)] text-xs">— {item.meaning}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center">
        <p className="text-[var(--accent)] mb-3">اقرأ شعر الغزل العربي عبر العصور</p>
        <Link
          href="/blog/posts/arabic-love-poetry"
          className="inline-block bg-[var(--fg)] text-[var(--bg)] px-6 py-2 rounded text-sm hover:opacity-80 transition-opacity"
        >
          الغزل في الشعر العربي
        </Link>
      </div>
    </BlogPostLayout>
  );
}
