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
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
