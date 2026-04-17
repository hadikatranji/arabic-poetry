import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout from "@/components/BlogPost";
import { getPostBySlug } from "@/lib/blog-data";

const post = getPostBySlug("al-burdah-al-busiri")!;

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
    url: "https://shi3r.com",
  },
  inLanguage: "ar",
};

const TOC = [
  { id: "intro", title: "البوصيري والبردة" },
  { id: "story", title: "قصة نظم القصيدة" },
  { id: "opening", title: "الأبيات الافتتاحية" },
  { id: "nafs", title: "النفس كالطفل — الشهرة الكبرى" },
  { id: "madh", title: "في مدح النبي" },
  { id: "structure", title: "أبواب القصيدة العشرة" },
  { id: "legacy", title: "أثرها في الحضارة الإسلامية" },
  { id: "explore", title: "استكشف المزيد" },
];

export default function AlBurdahAlBusiriPost() {
  return (
    <BlogPostLayout post={post} tableOfContents={TOC}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section id="intro">
        <h2 className="text-xl text-[var(--accent)] mt-2 mb-3">
          البوصيري — شاعر النبي ﷺ
        </h2>
        <p>
          محمد بن سعيد البوصيري (1213–1294م / 610–696هـ) شاعرٌ مصري من أصول
          بربرية، وُلد في قرية أبو صير بمحافظة البحيرة. عاش في عصر المماليك
          واشتغل بالأدب والكتابة الديوانية، غير أنه خلَّد اسمه بعمل واحد يُعدّ
          من أشهر القصائد في تاريخ الأدب العربي الإسلامي على الإطلاق: قصيدة
          البردة.
        </p>
        <p>
          القصيدة المعروفة بـ«البردة الشريفة» أو «الكواكب الدرية في مدح خير
          البرية» هي قصيدة مديح نبوي من 160 بيتاً، نظمها البوصيري على بحر البسيط
          بقافية الميم. منذ نظمها قبل سبعة قرون ونصف، لم تتوقف عن الانتشار:
          تُحفظ وتُتلى وتُغنَّى من المغرب إلى إندونيسيا، وتُرجمت إلى عشرات
          اللغات، وشُرحت في مئات الكتب.
        </p>
      </section>

      <section id="story">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          قصة نظم البردة — الشلل والرؤية والشفاء
        </h2>
        <p>
          تروي المصادر أن البوصيري أُصيب بشلل نصفي، فأنهكه المرض وعجز عن
          الحركة. في هذا الضيق نظم قصيدته مدحاً للنبي ﷺ ووسيلةً وتوسلاً.
          فرأى في منامه رسول الله ﷺ يمسح بيده على موضع الشلل ويُلقي عليه بُردته
          — أي عباءته — فاستيقظ وقد عافاه الله.
        </p>
        <p>
          من هنا جاء اسم القصيدة: «البردة» نسبةً إلى العباءة النبوية في الرؤيا.
          وسواء قبلنا هذه الرواية حرفياً أو نظرنا إليها رمزياً، فإن ما لا شكَّ
          فيه هو الأثر العميق الذي خلَّفته هذه القصيدة في الوجدان الإسلامي —
          فهي لم تشفِ صاحبها فحسب، بل أشعلت أرواح الملايين عبر القرون.
        </p>
        <div className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md my-5">
          <p className="text-[var(--muted)] text-sm">
            <strong className="text-[var(--fg)]">سياق تاريخي: </strong>
            كُتبت البردة في القرن السابع الهجري (الثالث عشر الميلادي) في مصر
            المملوكية. كان هذا عصراً شهد الحملات الصليبية والغزو المغولي، وكانت
            قصائد المديح النبوي تمثّل للناس منبع أمل وتمسّك بالهوية الإسلامية.
          </p>
        </div>
      </section>

      <section id="opening">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          الأبيات الافتتاحية — النسيب والشوق
        </h2>
        <p className="text-[var(--muted)] mb-5">
          تبدأ القصيدة بالنسيب — وهو الغزل التمهيدي الذي يستهلّ به الشعراء
          قصائدهم — حيث يستحضر البوصيري ذكريات الديار والأحبة رمزاً للشوق إلى
          النبي ﷺ:
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {`أَمِنْ تَذَكُّرِ جِيرَانٍ بِذِي سَلَمِ
مَزَجْتَ دَمْعاً جَرَى مِن مُقلَةٍ بِدَمِ
أَمْ هَبَّتِ الرِّيحُ مِن تِلقَاءِ كَاظِمَةٍ
وَأَوْمَضَ البَرْقُ فِي الظَّلمَاءِ مِن إِضَمِ`}
          </p>
          <p className="text-[var(--muted)] text-xs mb-3 text-center">
            البوصيري، البردة — الأبيات 1–2
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            هل من تذكُّر جيران في وادي ذي سَلَم خلطتَ دمعاً يسيل بدمٍ؟ أم من
            هبوب الريح من ناحية كاظمة، ولمعان البرق في ظلمة الليل من جبل إضم؟
            — ذو سلَم وكاظمة وإضم مواضع في الحجاز تُذكِّر بأيام النبوة
            والصحابة. يبني البوصيري قصيدته على صورة العاشق المولَه الذي يبكي
            دماً من شدة الشوق.
          </p>
        </div>
        <p>
          هذا الاستهلال الغزلي ليس مجرد تقليد أدبي — إنه اختيار فني متعمَّد.
          البوصيري يحوِّل لغة الغزل إلى لغة الحب الإلهي والشوق النبوي: ذو سلَم
          وكاظمة وإضم ليست ديار عشيقة، بل أرض الوحي والنبوة. الشاعر يُقرئنا
          أن الحب الأعلى يُعبَّر عنه بأجمل ما في لغة القلب.
        </p>
      </section>

      <section id="nafs">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          «النَّفسُ كالطِّفلِ» — أشهر أبيات البردة
        </h2>
        <p className="text-[var(--muted)] mb-5">
          يأتي الباب الثاني من القصيدة في التحذير من هوى النفس، وفيه البيت
          الأشهر الذي حفظه الملايين ورُدِّد في مجالس التربية والتصوف قروناً:
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {`وَالنَّفسُ كَالطِّفلِ إِن تُهمِلهُ شَبَّ عَلَى
حُبِّ الرَّضَاعِ وَإِن تَفطِمهُ انفَطَمَ`}
          </p>
          <p className="text-[var(--muted)] text-xs mb-3 text-center">
            البوصيري، البردة — الباب الثاني
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            النفس كالطفل: إن أهملتَه كبُر متعلقاً بالرضاعة (الشهوات والملذات)
            ولم يُفطَم عنها، وإن فطمتَه عنها في وقتها توقَّف. الصورة بليغة في
            بساطتها: ترويض النفس يحتاج إلى جهد مبكر ومنتظم لا إهمال — تماماً
            كتربية الطفل. بيتٌ يلخِّص علم النفس التربوي بأسره في نصف سطر.
          </p>
        </div>
        <p>
          ما يجعل هذا البيت خالداً هو توازنه الشعري والفكري معاً: صورة الطفل
          وعملية الفطام ملموستان لكل إنسان، والانتقال من المحسوس إلى المجرد
          (الطفل = النفس، الرضاع = الشهوات) يحدث بلا جهد. البوصيري هنا ليس
          شاعراً فقط — بل معلمٌ وحكيم يُلبس الفكرة الصعبة ثوباً شعرياً جميلاً.
        </p>
      </section>

      <section id="madh">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          في مدح النبي — قلب القصيدة
        </h2>
        <p className="text-[var(--muted)] mb-5">
          الأبواب الثالث والرابع والخامس تمثّل القلب النابض للقصيدة: مدح النبي ﷺ
          ووصف مولده وشمائله. ومن أشهر ما جاء فيها:
        </p>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-5">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {`مُحَمَّدٌ سَيِّدُ الكَوْنَيْنِ وَالثَّقَلَيْنِ
وَالفَرِيقَيْنِ مِن عُرْبٍ وَمِن عَجَمِ`}
          </p>
          <p className="text-[var(--muted)] text-xs mb-3 text-center">
            البوصيري، البردة — الباب الثالث
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            محمد ﷺ سيد الدنيا والآخرة (الكونين)، وسيد الإنس والجن (الثقلين)،
            وسيد العرب والعجم على حدٍّ سواء. البيت يُقرر عالمية النبوة
            المحمدية وامتداد شرف النبي ﷺ عبر كل الأزمنة والأمكنة والشعوب.
          </p>
        </div>
        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md mb-6">
          <p className="verse-text text-xl text-center mb-4 whitespace-pre-line leading-loose">
            {`هُوَ الحَبِيبُ الَّذِي تُرجَى شَفَاعَتُهُ
لِكُلِّ هَوْلٍ مِنَ الأَهوَالِ مُقتَحَمِ`}
          </p>
          <p className="text-[var(--muted)] text-xs mb-3 text-center">
            البوصيري، البردة — الباب الثالث
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            <strong className="text-[var(--fg)]">المعنى: </strong>
            هو الحبيب الذي تُرجى شفاعته لكل هول عظيم يقتحمه الإنسان (يوم
            القيامة وما فيه من أهوال). يصوّر البوصيري النبيَّ ﷺ ملجأً ومشفِّعاً
            في أعظم الأوقات وأشدّها، وهو ما يجعل هذا البيت من أكثر أبيات التوسل
            ترديداً في العالم الإسلامي.
          </p>
        </div>
        <p>
          خصيصة المدح في البردة أنه لا يقتصر على إطراء المظهر أو الانتصارات —
          كما هو دأب كثير من قصائد المديح — بل يشمل الجوانب الكونية والروحية
          والأخلاقية. البوصيري يرسم صورة النبي ﷺ باعتباره مركز الوجود ومحور
          التاريخ، لا مجرد قائد أو ملك.
        </p>
      </section>

      <section id="structure">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          أبواب القصيدة العشرة
        </h2>
        <p className="text-[var(--muted)] mb-5">
          تتكوَّن البردة من 160 بيتاً موزَّعة على عشرة أبواب متكاملة تبني لوحة
          متكاملة:
        </p>
        <ol className="space-y-2 text-sm pr-5 list-decimal">
          {[
            { n: "١", title: "النسيب", desc: "الشوق والحنين رمزاً للحب النبوي" },
            { n: "٢", title: "التحذير من الهوى", desc: "تهذيب النفس والتحرر من الشهوات" },
            { n: "٣", title: "في مدح النبي ﷺ", desc: "إجمال فضائله ومكانته الكونية" },
            { n: "٤", title: "في مولده ﷺ", desc: "الآيات والإرهاصات التي رافقت ولادته" },
            { n: "٥", title: "في شمائله ﷺ", desc: "وصف خُلقه وخَلقه وأخلاقه الشريفة" },
            { n: "٦", title: "في القرآن الكريم", desc: "إعجاز القرآن ومكانته الخالدة" },
            { n: "٧", title: "في الإسراء والمعراج", desc: "رحلة النبي ﷺ ليلة المعراج" },
            { n: "٨", title: "في جهاده ﷺ", desc: "غزواته وبطولاته ونصر الله له" },
            { n: "٩", title: "في التوسل", desc: "توسّل الشاعر بالنبي ﷺ طلباً للشفاعة" },
            { n: "١٠", title: "المناجاة والختام", desc: "دعاء وخاتمة ورجاء المغفرة" },
          ].map((ch) => (
            <li
              key={ch.n}
              className="p-3 bg-[var(--surface)] border border-[var(--border)] rounded-md"
            >
              <span className="text-[var(--accent)] font-semibold">
                الباب {ch.n}: {ch.title}
              </span>
              <span className="text-[var(--muted)] mr-2">— {ch.desc}</span>
            </li>
          ))}
        </ol>
        <p className="mt-5">
          هذا البناء المتدرِّج — من الشوق الإنساني إلى المدح الكوني إلى التوسل
          الروحي — هو سرّ تأثير القصيدة: إنها تأخذ القارئ في رحلة من أعماقه
          إلى أعلى عليين.
        </p>
      </section>

      <section id="legacy">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          أثر البردة في الحضارة الإسلامية
        </h2>
        <p>
          ليس هناك في الأدب العربي — باستثناء القرآن الكريم والحديث النبوي —
          نصٌّ حظي بما حظيت به البردة من انتشار وتأثير:
        </p>
        <ul className="space-y-3 my-5 list-none">
          {[
            "كُتبت بخطوط كالغبار على الجدران والأواني وملابس السلاطين في مصر والمغرب والهند.",
            "شُرحت في أكثر من 90 شرحاً لعلماء من مختلف المذاهب والبلدان.",
            "تُرجمت إلى الفارسية والتركية والأردية والإنجليزية والفرنسية وعشرات اللغات.",
            "تُتلى في الاحتفالات الدينية والمجالس الصوفية من المغرب إلى إندونيسيا.",
            "صارت نموذجاً لمئات القصائد المحاكِية في المدح النبوي عبر القرون.",
          ].map((item, i) => (
            <li
              key={i}
              className="flex gap-3 items-start text-[var(--muted)] text-sm"
            >
              <span className="text-[var(--accent)] mt-0.5">◈</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          قوة البردة لا تأتي من طولها أو غرابتها — بل من صدقها. البوصيري نظمها
          في أشد لحظات ضعفه، مريضاً مشلولاً يبكي ويرجو. هذا الصدق الإنساني
          الكامل هو ما يجعلها تلمس القلوب بعد سبعة قرون كما لمستها أول مرة.
        </p>
        <div className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md my-5">
          <p className="verse-text text-lg text-center mb-2">
            «يَا رَبِّ بِالمُصطَفَى بَلِّغ مَقَاصِدَنَا / وَاغفِر لَنَا مَا مَضَى يَا وَاسِعَ الكَرَمِ»
          </p>
          <p className="text-[var(--muted)] text-xs text-center">
            البوصيري، البردة — من باب التوسل
          </p>
        </div>
      </section>

      <section id="explore">
        <h2 className="text-xl text-[var(--accent)] mt-8 mb-4">
          ابدأ رحلتك مع الشعر العربي الكلاسيكي
        </h2>
        <p className="text-[var(--muted)] mb-4">
          البردة بابٌ رائع للدخول إلى عالم الشعر العربي الكلاسيكي والتراث الأدبي
          الإسلامي. استكشف المزيد من الشعر الديني والفلسفي على مسامرات شعرية.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <Link
            href="/explore/themes/zuhd"
            className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
          >
            <p className="text-[var(--accent)] mb-1">شعر الزهد</p>
            <p className="text-[var(--muted)] text-xs">
              التقوى والتأمل في الشعر
            </p>
          </Link>
          <Link
            href="/explore/themes/hikma"
            className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
          >
            <p className="text-[var(--accent)] mb-1">شعر الحكمة</p>
            <p className="text-[var(--muted)] text-xs">
              أبيات الحكمة والموعظة
            </p>
          </Link>
          <Link
            href="/poets"
            className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center hover:border-[var(--accent)] transition-colors"
          >
            <p className="text-[var(--accent)] mb-1">الشعراء</p>
            <p className="text-[var(--muted)] text-xs">
              تصفّح كبار الشعراء العرب
            </p>
          </Link>
        </div>
        <p className="text-[var(--muted)] text-sm mb-2">
          مزيد من الشعر الكلاسيكي والديني:
        </p>
        <ul className="space-y-1 text-sm">
          <li>
            <Link
              href="/blog/posts/ashaar-al-imam-ali"
              className="text-[var(--accent)] hover:underline"
            >
              أشعار الإمام علي — الحكمة والبلاغة في كلماته الخالدة
            </Link>
          </li>
          <li>
            <Link
              href="/blog/posts/pre-islamic-poetry"
              className="text-[var(--accent)] hover:underline"
            >
              الشعر الجاهلي — عصر المعلقات والفروسية
            </Link>
          </li>
          <li>
            <Link
              href="/blog/posts/top-10-mutanabbi"
              className="text-[var(--accent)] hover:underline"
            >
              أجمل 10 أبيات للمتنبي — حكمة الشعر العربي
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
