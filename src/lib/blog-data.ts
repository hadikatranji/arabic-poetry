export interface BlogPost {
  slug: string;
  title: string;
  titleEn: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-is-musajalah",
    title: "ما هي المساجلة الشعرية؟ — تاريخها وقواعدها",
    titleEn: "What is Musajalah? History and Rules of Arabic Poetry Duels",
    description:
      "تعرّف على المساجلة الشعرية، لعبة الشعر العربي التقليدية التي كان يتبارى فيها الشعراء في المجالس. اكتشف قواعدها وكيف تلعبها.",
    date: "2026-03-22",
    readTime: "5 دقائق",
    tags: ["مساجلة", "تاريخ", "ثقافة"],
  },
  {
    slug: "top-10-mutanabbi",
    title: "أجمل 10 أبيات للمتنبي — حكمة الشعر العربي",
    titleEn: "Top 10 Al-Mutanabbi Verses — Wisdom of Arabic Poetry",
    description:
      "اكتشف أجمل وأشهر أبيات أبي الطيب المتنبي، أعظم شعراء العرب، مع شرح معاني كل بيت.",
    date: "2026-03-22",
    readTime: "7 دقائق",
    tags: ["المتنبي", "حكمة", "شعر"],
  },
  {
    slug: "learn-arabic-poetry",
    title: "كيف تبدأ بتعلّم الشعر العربي — دليل المبتدئين",
    titleEn: "How to Start Learning Arabic Poetry — A Beginner's Guide",
    description:
      "دليل شامل للمبتدئين في تعلّم الشعر العربي: من أين تبدأ، ما هي البحور الشعرية، وكيف تحفظ الأبيات.",
    date: "2026-03-22",
    readTime: "8 دقائق",
    tags: ["تعليم", "بحور", "حفظ"],
  },
  {
    slug: "nizar-qabbani-best-verses",
    title: "نزار قباني — أجمل أبياته في الحب والوطن",
    titleEn: "Nizar Qabbani — Best Verses on Love and Homeland",
    description:
      "رحلة في شعر نزار قباني: من غزله الثوري إلى قصائده السياسية. أجمل أبياته مع شرح معانيها وأثرها في الأدب العربي الحديث.",
    date: "2026-03-22",
    readTime: "8 دقائق",
    tags: ["نزار قباني", "غزل", "حديث"],
  },
  {
    slug: "pre-islamic-poetry",
    title: "الشعر الجاهلي — عصر المعلقات والفروسية",
    titleEn: "Pre-Islamic Arabic Poetry — The Age of the Muallaqat",
    description:
      "اكتشف الشعر الجاهلي: تاريخه وأهم شعرائه والمعلقات السبع. لماذا يظلّ هذا الشعر أساس اللغة العربية والثقافة الإسلامية؟",
    date: "2026-03-22",
    readTime: "9 دقائق",
    tags: ["جاهلي", "معلقات", "تاريخ"],
  },
  {
    slug: "arabic-love-poetry",
    title: "الغزل في الشعر العربي — من العذري إلى الحديث",
    titleEn: "Love Poetry in Arabic Literature — From Udhri to Modern",
    description:
      "جولة في الغزل العربي عبر العصور: الحب العذري العفيف، والغزل الصريح، وشعر المحدثين. أجمل أبيات الحب في تاريخ الأدب العربي.",
    date: "2026-03-22",
    readTime: "7 دقائق",
    tags: ["غزل", "حب", "شعر"],
  },
  {
    slug: "how-to-memorize-poetry",
    title: "كيف تحفظ الشعر بسرعة — 5 تقنيات علمية",
    titleEn: "How to Memorize Arabic Poetry Fast — 5 Proven Techniques",
    description:
      "خمس تقنيات علمية لحفظ الشعر العربي بسرعة وثبات: من الفهم إلى الإيقاع إلى التكرار المتباعد. دليل عملي للمبتدئين والمتقدمين.",
    date: "2026-03-22",
    readTime: "6 دقائق",
    tags: ["حفظ", "تعليم", "تقنيات"],
  },
  {
    slug: "arabic-words-for-love",
    title: "مراتب الحب في اللغة العربية — ١٢ درجة من الهوى إلى التعبّد",
    titleEn: "12 Arabic Words for Love — The Stages of Love in Arabic",
    description:
      "العربية لغة الحب بامتياز — فيها ١٢ مرتبة للحب من الميل البسيط إلى التعبّد الكامل. تعرّف على كل مرتبة مع الشواهد الشعرية.",
    date: "2026-03-22",
    readTime: "7 دقائق",
    tags: ["لغة", "حب", "ثقافة"],
  },
  {
    slug: "shir-an-al-watan",
    title: "شعر عن الوطن — أجمل ما قيل في حبّ الأوطان",
    titleEn: "Arabic Poetry About the Homeland — The Most Beautiful Patriotic Verses",
    description:
      "أجمل أبيات الشعر العربي عن الوطن عبر العصور: من إبراهيم طوقان وقصيدة 'موطني' إلى أحمد شوقي ومحمود درويش. كيف رسم الشعراء العرب حبّ الوطن في أعمق قصائدهم؟",
    date: "2026-04-11",
    readTime: "7 دقائق",
    tags: ["وطن", "وطنيات", "حديث", "شعر"],
  },
  {
    slug: "shir-an-al-omm",
    title: "شعر عن الأم — أجمل ما قيل في حقّ الأمهات",
    titleEn: "Arabic Poetry About Mothers — The Most Beautiful Verses",
    description:
      "أجمل أبيات الشعر العربي عن الأم عبر العصور: من حافظ إبراهيم إلى محمود درويش والخنساء. كيف رسم الشعراء العرب صورة الأم في أعمق قصائدهم؟",
    date: "2026-03-24",
    readTime: "6 دقائق",
    tags: ["أم", "رثاء", "حديث", "شعر"],
  },
  {
    slug: "ashaar-al-imam-ali",
    title: "أشعار الإمام علي — الحكمة والبلاغة في كلماته الخالدة",
    titleEn: "Imam Ali Poetry — Wisdom and Eloquence in His Timeless Words",
    description:
      "أجمل أشعار الإمام علي بن أبي طالب وحِكَمه الخالدة: من قصيدة 'دواؤك فيك' إلى حِكَم نهج البلاغة. تعرّف على الإمام علي شاعراً وفيلسوفاً وأميراً للبيان.",
    date: "2026-04-14",
    readTime: "7 دقائق",
    tags: ["الإمام علي", "حكمة", "نهج البلاغة", "شعر"],
  },
  {
    slug: "al-burda-al-shareefa",
    title: "البردة الشريفة — أشهر قصيدة مدح في تاريخ الإسلام",
    titleEn: "Al-Burda al-Shareefa — The Most Famous Poem of Praise in Islamic History",
    description:
      "البردة الشريفة للبوصيري: قصة الشاعر المشلول والرؤيا النبوية، وأشهر أبيات القصيدة التي حفظها الملايين من المغرب إلى إندونيسيا.",
    date: "2026-04-18",
    readTime: "8 دقائق",
    tags: ["البردة", "البوصيري", "مدح", "شعر ديني", "نبوي"],
  },
  {
    slug: "shir-hazin",
    title: "شعر حزين — أجمل أبيات الحزن والألم في الشعر العربي",
    titleEn:
      "Sad Arabic Poetry — The Most Beautiful Verses of Grief and Sorrow",
    description:
      "أجمل أبيات الشعر الحزين في تاريخ الأدب العربي: من الخنساء وأبي العلاء المعري إلى بدر شاكر السياب. كيف حوّل الشعراء العرب الحزن إلى فن خالد؟",
    date: "2026-04-12",
    readTime: "7 دقائق",
    tags: ["حزن", "رثاء", "فلسفة", "شعر"],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
