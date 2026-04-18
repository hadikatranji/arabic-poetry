import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout from "@/components/BlogPost";
import { getPostBySlug } from "@/lib/blog-data";

const post = getPostBySlug("shir-hazin")!;

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
  author: {
    "@type": "Organization",
    name: "مسامرات شعرية",
  },
  publisher: {
    "@type": "Organization",
    name: "مسامرات شعرية",
    url: "https://www.shi3r.com",
  },
  inLanguage: "ar",
};

const TOC = [
  { id: "intro", title: "الحزن في الشعر العربي" },
  { id: "khansa", title: "الخنساء: رثاء صخر" },
  { id: "maari", title: "أبو العلاء المعري: التشاؤم الفلسفي" },
  { id: "abufiras", title: "أبو فراس الحمداني: الأسر والوجد" },
  { id: "abumaadi", title: "إيليا أبو ماضي: حيرة الوجود" },
  { id: "sayyab", title: "بدر شاكر السياب: المطر والحزن" },
  { id: "explore", title: "استكشف المزيد" },
];

const KHANSA_VERSE = {
  verse: "يُذكِّرُني طُلوعُ الشَّمسِ صَخراً\nوأَذكُرُهُ لكُلِّ غُروبِ شَمسِ",
  poet: "الخنساء",
  meaning:
    "من أشهر أبيات الرثاء في تاريخ الشعر العربي. الخنساء ترى أخاها صخراً في كل شروق وغروب للشمس — لا لحظة تمرّ إلا وتستدعيه. الحزن هنا ليس لحظياً بل دائم، متجدّد مع كل يوم، لا يهدأ ولا يرحل.",
};

const MAARI_VERSE = {
  verse:
    "ضَحِكنا وكانَ الضَّحكُ مِنّا سَفاهةً\nوحَقَّ لسُكّانِ البَسيطةِ أن يَبكوا",
  poet: "أبو العلاء المعري",
  meaning:
    "من لزومياته الشهيرة. المعري يرى أن الإنسان الذي يضحك في هذه الدنيا الزائلة يتصرّف بسفه وطيش — والأجدر بسكّان هذه الأرض الفانية أن يبكوا لا أن يضحكوا. فلسفة حزن عميق تجعل المعري أكثر الشعراء تشاؤماً وصدقاً في وصف الوجود.",
};

const ABUFIRAS_VERSE = {
  verse:
    "أراكَ عَصِيَّ الدَّمعِ شيمَتُكَ الصَّبرُ\nأما للهَوى نَهيٌ عَليكَ ولا أَمرُ",
  poet: "أبو فراس الحمداني",
  meaning:
    "مطلع قصيدته الرومية الخالدة التي كتبها في الأسر عند الروم. يخاطب نفسه — أو ربما عينيه — متعجّباً: تصبر وتتماسك، لكن هل للشوق والهوى سلطة عليك؟ هذا التوتّر بين الصبر الظاهر والحزن الداخلي هو ما يجعل القصيدة تلمس القلب حتى اليوم.",
};

const ABUMAADI_VERSE = {
  verse:
    "جِئتُ لا أعلَمُ من أينَ ولكنّي أَتيتُ\nولقد أبصَرتُ قُدّامي طَريقاً فمَشَيتُ",
  poet: "إيليا أبو ماضي",
  meaning:
    "مطلع قصيدته الكبرى 'الطلاسم'. أبو ماضي يلخّص في بيتين وجود الإنسان كله: جاء دون أن يختار، وسار في طريق لم يرسمه. الحزن هنا وجودي وفلسفي لا عاطفي — حزن من لا يعرف أصله ولا يعلم مصيره، ومع ذلك يمشي.",
};

const SAYYAB_VERSE = {
  verse:
    "عيناكِ غابَتا نَخيلٍ ساعةَ السَّحَرْ\nأو شُرفَتانِ راحَ يَنأى عنهُما القَمَرْ",
  poet: "بدر شاكر السياب",
  meaning:
    "مطلع 'أنشودة المطر'، أشهر قصائد القرن العشرين العربي. السياب يصف عيني حبيبته بغابة نخيل عند الفجر — فيها السحر والبُعد والحنين معاً. القصيدة كتبها وهو يموت ببطء من مرض عضال، فالمطر فيها ليس ماءً بل دموع ودم وحياة تتآكل.",
};

export default function ShirHazinPost() {
  return (
    <BlogPostLayout post={post} tableOfContents={TOC}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section id="intro">
        <h2 className="text-xl text-[var(--accent)] mt-2 mb-3">
          الحزن في الشعر العربي — لغةٌ أعمق من الدموع
        </h2>
        <p>
          قيل قديماً إن أصدق الشعر أكذبه — لكن في شعر الحزن العربي، الصدق هو
          الأصل. منذ الخنساء التي بكت أخاها حتى آخر عمرها، إلى بدر شاكر
          السياب الذي كتب عن الموت وهو يحتضر، كان الحزن محرّكاً للأجمل مما
          أُبدع في اللغة العربية.
        </p>
        <p>
          الشعر الحزين ليس مجرد تعبير عن مشاعر سلبية — بل هو مواجهة الإنسان
          لحقيقته الأعمق: الفُقدان، الوحدة، الغربة، الفناء. والشاعر العربي
          حين يحزن، يحزن بكل اللغة — يُعبّر عمّا لا تستطيع الكلمات العادية
          حمله. في هذا المقال نستعرض أجمل أبيات الشعر الحزين عبر العصور، من
          الخنساء في الجاهلية إلى السياب في القرن العشرين.
        </p>
      </section>

      <section id="khansa">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          الخنساء — حين يصير الحزن ديناً
        </h2>
        <p className="text-[var(--muted)] mb-5">
          الخنساء (تُماضر بنت عمرو، ت. نحو 24هـ) شاعرة جاهلية من بني سليم،
          فقدت أخاها صخر بن عمرو في معركة فرثاه حتى أثنى عليها النبي ﷺ
          بقوله: «ما رأيت رواءً أحسن من الخنساء». بكت صخراً حتى أضرّت ببصرها،
          وقيل إنها لم تتوقف عن رثائه حياتها كلها:
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {KHANSA_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            {KHANSA_VERSE.meaning}
          </p>
        </div>
        <p>
          ما يجعل هذا البيت خالداً هو بساطته المُذهلة — لا صور بلاغية معقدة،
          لا زخارف لفظية. مجرد حقيقة: الشمس تشرق فيتذكر، وتغرب فيتذكر. كل يوم
          جرح مفتوح. هذا الحزن الصادق هو ما رفع الخنساء إلى مقام يضاهي فيه
          كبار شعراء الجاهلية.
        </p>
        <p>
          أما في معركة القادسية (636م) ضد الفرس، فقد خرجت بأبنائها الأربعة
          وحرّضتهم على الشهادة. حين استُشهدوا جميعاً، قالت: «الحمد لله الذي
          شرّفني بقتلهم» — إيمان يُحيّر العقل ويُشعل الإعجاب.
        </p>
      </section>

      <section id="maari">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          أبو العلاء المعري — الحزن الفلسفي
        </h2>
        <p className="text-[var(--muted)] mb-5">
          أبو العلاء المعري (973–1057م)، فيلسوف المعرّة وشاعرها، فقد بصره في
          الرابعة من عمره إثر الجدري. عاش في عزلة اختيارية، رفض أكل اللحم،
          وأوصى أن يُكتب على قبره: «هذا ما جناه أبي عليّ وما جنيتُ على أحد».
          شعره محكومٌ بنظرة تشاؤمية عميقة نادرة في تاريخ الأدب العربي:
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {MAARI_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            {MAARI_VERSE.meaning}
          </p>
        </div>
        <p>
          المعري لم يكن حزيناً بالمعنى العاطفي — لم يبكِ حبيبة ولم يرثِ صديقاً.
          حزنه كان فكرياً وكونياً: رؤية الحياة على حقيقتها كتجربة موقّتة مليئة
          بالأوجاع. ديوانه «لزوم ما لا يلزم» (اللزوميات) ملأى بهذه الرؤية القاتمة
          التي تجعله أقرب إلى شوبنهاور منه إلى غيره من الشعراء العرب.
        </p>
        <p>
          ومع ذلك، في هذه القتامة شيء من الراحة الغريبة: حين تعترف بأن الحياة
          مؤلمة وأن البكاء أصدق من الضحك، تجد نوعاً من الصدق يُريح أكثر مما يُحزن.
        </p>
      </section>

      <section id="abufiras">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          أبو فراس الحمداني — حزن الأسير
        </h2>
        <p className="text-[var(--muted)] mb-5">
          أبو فراس الحمداني (932–968م)، أمير شاعر من بني حمدان، وابن عم سيف
          الدولة. أسرته الروم في إحدى المعارك سنة 348هـ وأمضى سنوات في القسطنطينية
          بعيداً عن وطنه وأهله. في الأسر كتب قصائده الرومية — من أعمق ما أنتجه
          شعر الحزن في التراث العربي:
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {ABUFIRAS_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            {ABUFIRAS_VERSE.meaning}
          </p>
        </div>
        <p>
          القصيدة الرومية كاملة واحدة من أجمل ما قيل في الحنين والأسر والشوق.
          أبو فراس لا يستجدي العطف — بل يُعلن مأساته بفخر واضح. هو أسير لكنه
          شاعر، وقصيدته التي تجاوز بها القضبان أشد حضوراً من أي حرية جسدية.
        </p>
        <p>
          أطلق سراحه سيف الدولة بعد فدية، لكنه لم يُكمل حياته طويلاً — قُتل في
          معركة بين أبناء عمومته وعمره ست وثلاثون سنة، تاركاً إرثاً شعرياً لم
          ينضج كله.
        </p>
      </section>

      <section id="abumaadi">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          إيليا أبو ماضي — حيرة الوجود
        </h2>
        <p className="text-[var(--muted)] mb-5">
          إيليا أبو ماضي (1889–1957م)، شاعر مهجري لبناني هاجر إلى مصر ثم إلى
          أمريكا. في ديوانه «الجداول» و«الخمائل» صاغ شعراً وجودياً عميقاً يتساءل
          عن معنى الإنسان ومصيره. قصيدته «الطلاسم» — التي يكررها كثيراً
          «جئتُ لا أعلم» — من أكثر القصائد العربية تداولاً وتأثيراً حتى اليوم:
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {ABUMAADI_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            {ABUMAADI_VERSE.meaning}
          </p>
        </div>
        <p>
          حزن أبو ماضي مختلف عن حزن الخنساء أو المعري — ليس حزن الفُقدان ولا حزن
          الأسر، بل حزن الإنسان أمام أسئلة لا إجابة لها: من أنا؟ من أين؟ إلى أين؟
          هذا النوع من الحزن الفلسفي هو الأقرب إلى الإنسان المعاصر الذي يجد نفسه
          وحيداً في كون لا يقدّم له شرحاً.
        </p>
        <p>
          ما يميّز أبو ماضي أنه لم ينتهِ بيأس — «الطلاسم» رغم تساؤلاتها تدعو في
          النهاية إلى العيش والتفاؤل. الحزن عنده بوّابة نحو القبول لا نحو الاستسلام.
        </p>
      </section>

      <section id="sayyab">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          بدر شاكر السياب — المطر دم والدموع مطر
        </h2>
        <p className="text-[var(--muted)] mb-5">
          بدر شاكر السياب (1926–1964م)، مؤسّس الشعر الحر في العربية إلى جانب نازك
          الملائكة. عاش حياة قصيرة موجعة في العراق — فقر وسجن ومنفى ومرض عضال
          أنهكه. «أنشودة المطر» (1954) كتبها في لندن وهو يحمل هموم وطنه ومرضه
          وغربته معاً، فجاءت من أعظم قصائد القرن العشرين العربي:
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {SAYYAB_VERSE.verse}
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            {SAYYAB_VERSE.meaning}
          </p>
        </div>
        <p>
          في «أنشودة المطر»، المطر ليس مجرد طقس — بل هو رمز مركّب: الخصب
          والموت، الحياة والدم، الأمل والحزن. السياب يمزج فيها اليأس الشخصي
          بالأمل السياسي بالمأساة الكونية — قصيدة يصعب فصل طبقاتها بعضها عن بعض.
        </p>
        <p>
          مات السياب في الكويت عام 1964 عن ثمانية وثلاثين عاماً، محاطاً بالمرض
          والوحدة. لكن «أنشودة المطر» خرجت من ذلك الألم لتصير بذاتها عالماً —
          يعود إليها القراء كلما احتاجوا شعراً يُعبّر عمّا لا تستطيع الكلمات
          العادية حمله.
        </p>
      </section>

      <section id="explore">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          ابدأ رحلتك مع الشعر العربي
        </h2>
        <p className="text-[var(--muted)] mb-4">
          شعر الحزن العربي بحر لا قرار له — هذه الأبيات مجرد بوابة. استكشف
          شعراء الرثاء والحنين على مسامرات شعرية، أو خُض تجربة المساجلة
          واختبر حفظك للأبيات.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <Link
            href="/explore/themes/ritha"
            className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
          >
            <p className="text-[var(--accent)] mb-1">شعر الرثاء</p>
            <p className="text-[var(--muted)] text-xs">أبيات الحداد والفقد</p>
          </Link>
          <Link
            href="/poets"
            className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
          >
            <p className="text-[var(--accent)] mb-1">الشعراء</p>
            <p className="text-[var(--muted)] text-xs">تصفّح كبار الشعراء العرب</p>
          </Link>
          <Link
            href="/memorize"
            className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
          >
            <p className="text-[var(--accent)] mb-1">احفظ الأبيات</p>
            <p className="text-[var(--muted)] text-xs">بتقنية التكرار المتباعد</p>
          </Link>
        </div>
        <p className="text-[var(--muted)] text-sm mb-2">
          مزيد من الشعر الحزين والعاطفي:
        </p>
        <ul className="space-y-1 text-sm">
          <li>
            <Link
              href="/blog/posts/arabic-love-poetry"
              className="text-[var(--accent)] hover:underline"
            >
              الغزل في الشعر العربي — من العذري إلى الحديث
            </Link>
          </li>
          <li>
            <Link
              href="/blog/posts/nizar-qabbani-best-verses"
              className="text-[var(--accent)] hover:underline"
            >
              نزار قباني — أجمل أبياته في الحب والوطن
            </Link>
          </li>
          <li>
            <Link
              href="/blog/posts/shir-an-al-omm"
              className="text-[var(--accent)] hover:underline"
            >
              شعر عن الأم — أجمل ما قيل في حقّ الأمهات
            </Link>
          </li>
        </ul>
      </section>

      <div className="mt-10 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center">
        <p className="text-[var(--accent)] mb-1 text-lg">
          لا يكتمل الشعر إلا بالمساجلة
        </p>
        <p className="text-[var(--muted)] text-sm mb-4">
          جرّب لعبة المساجلة الشعرية: أكمل البيت بحرفه الأخير
        </p>
        <Link
          href="/musajalah"
          className="inline-block bg-[var(--fg)] text-[var(--bg)] px-6 py-2 rounded text-sm hover:opacity-80 transition-opacity"
        >
          ابدأ المساجلة
        </Link>
      </div>
    </BlogPostLayout>
  );
}
