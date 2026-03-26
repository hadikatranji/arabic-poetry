/**
 * Poet data for the poetry app.
 */

export interface Poet {
  id: number;
  nameAr: string;
  nameEn: string;
  era: string;
  birthYear: number | null;
  deathYear: number | null;
  dateSystem: string;
  biographyAr: string;
  styleNotes: string;
}

export const SAMPLE_POETS: Poet[] = [
  // === العصر الجاهلي ===
  {
    id: 1,
    nameAr: "امرؤ القيس",
    nameEn: "Imru' al-Qais",
    era: "جاهلي",
    birthYear: 501,
    deathYear: 544,
    dateSystem: "gregorian",
    biographyAr: "امرؤ القيس بن حجر الكندي، الملك الضليل. أشهر شعراء العرب وصاحب أول معلقة. أمير شاعر طُرد من ملكه فسار يطلب ثأر أبيه.",
    styleNotes: "الغزل والوصف والفخر، صاحب أشهر معلقة",
  },
  {
    id: 2,
    nameAr: "عنترة بن شداد",
    nameEn: "Antara ibn Shaddad",
    era: "جاهلي",
    birthYear: 525,
    deathYear: 608,
    dateSystem: "gregorian",
    biographyAr: "عنترة بن شداد العبسي، فارس وشاعر من أصحاب المعلقات. اشتهر بشجاعته وحبه لابنة عمه عبلة. كان عبداً أسود فأعتقه أبوه لشجاعته.",
    styleNotes: "الفخر والحماسة والغزل العفيف",
  },
  {
    id: 3,
    nameAr: "زهير بن أبي سلمى",
    nameEn: "Zuhayr ibn Abi Sulma",
    era: "جاهلي",
    birthYear: 520,
    deathYear: 609,
    dateSystem: "gregorian",
    biographyAr: "زهير بن أبي سلمى المزني، أحد أصحاب المعلقات وحكيم شعراء الجاهلية. كان يُنقّح شعره ولا ينشره إلا بعد حولٍ كامل.",
    styleNotes: "الحكمة والمدح والوصف، شعر منقّح ومحكم",
  },
  {
    id: 4,
    nameAr: "طرفة بن العبد",
    nameEn: "Tarafa ibn al-Abd",
    era: "جاهلي",
    birthYear: 543,
    deathYear: 569,
    dateSystem: "gregorian",
    biographyAr: "طرفة بن العبد البكري، شاعر جاهلي من أصحاب المعلقات. أصغر شعراء المعلقات سناً، قُتل شاباً بأمر عمرو بن هند.",
    styleNotes: "وصف الناقة والحياة، صاحب معلقة",
  },
  {
    id: 5,
    nameAr: "لبيد بن ربيعة",
    nameEn: "Labid ibn Rabi'a",
    era: "جاهلي",
    birthYear: 560,
    deathYear: 661,
    dateSystem: "gregorian",
    biographyAr: "لبيد بن ربيعة العامري، شاعر جاهلي مخضرم من أصحاب المعلقات. أسلم وترك الشعر بعد الإسلام.",
    styleNotes: "الرثاء والحكمة والوصف",
  },
  {
    id: 6,
    nameAr: "النابغة الذبياني",
    nameEn: "Al-Nabigha al-Dhubyani",
    era: "جاهلي",
    birthYear: 535,
    deathYear: 604,
    dateSystem: "gregorian",
    biographyAr: "زياد بن معاوية الذبياني، شاعر جاهلي كبير. كان حكم الشعراء في سوق عكاظ. اشتهر بمدح النعمان بن المنذر.",
    styleNotes: "المدح والاعتذار، لغة رصينة",
  },

  // === العصر الأموي ===
  {
    id: 7,
    nameAr: "مجنون ليلى",
    nameEn: "Qays ibn al-Mulawwah",
    era: "أموي",
    birthYear: 645,
    deathYear: 688,
    dateSystem: "gregorian",
    biographyAr: "قيس بن الملوّح العامري. شاعر غزل عذري هام بحب ليلى العامرية حتى جُنّ، فلُقّب بمجنون ليلى.",
    styleNotes: "الغزل العذري والحب العفيف",
  },
  {
    id: 8,
    nameAr: "جرير",
    nameEn: "Jarir",
    era: "أموي",
    birthYear: 653,
    deathYear: 733,
    dateSystem: "gregorian",
    biographyAr: "جرير بن عطية الخطفي التميمي. من أشهر شعراء العصر الأموي. اشتهر بالهجاء والمدح والنقائض مع الفرزدق.",
    styleNotes: "الهجاء والمدح والغزل والنقائض",
  },
  {
    id: 9,
    nameAr: "الفرزدق",
    nameEn: "Al-Farazdaq",
    era: "أموي",
    birthYear: 641,
    deathYear: 732,
    dateSystem: "gregorian",
    biographyAr: "همّام بن غالب التميمي. من فحول شعراء العرب في العصر الأموي. اشتهر بالنقائض مع جرير والفخر بقومه.",
    styleNotes: "الفخر والهجاء والنقائض",
  },

  // === العصر العباسي ===
  {
    id: 10,
    nameAr: "المتنبي",
    nameEn: "Al-Mutanabbi",
    era: "عباسي",
    birthYear: 915,
    deathYear: 965,
    dateSystem: "gregorian",
    biographyAr: "أبو الطيب أحمد بن الحسين الجعفي الكندي. أعظم شعراء العرب وأكثرهم تمكناً من اللغة. ملأ الدنيا وشغل الناس.",
    styleNotes: "الحكمة والفخر والمدح",
  },
  {
    id: 11,
    nameAr: "أبو نواس",
    nameEn: "Abu Nuwas",
    era: "عباسي",
    birthYear: 756,
    deathYear: 814,
    dateSystem: "gregorian",
    biographyAr: "الحسن بن هانئ الحكمي. شاعر عباسي رائد الخمريات في الشعر العربي. جدّد في الشعر وثار على التقاليد.",
    styleNotes: "الخمريات والغزل والهجاء",
  },
  {
    id: 12,
    nameAr: "أبو العلاء المعري",
    nameEn: "Al-Ma'arri",
    era: "عباسي",
    birthYear: 973,
    deathYear: 1057,
    dateSystem: "gregorian",
    biographyAr: "أحمد بن عبد الله التنوخي. شاعر وفيلسوف ضرير. صاحب لزوم ما لا يلزم وسقط الزند ورسالة الغفران.",
    styleNotes: "الحكمة والفلسفة والتأمل",
  },
  {
    id: 13,
    nameAr: "أبو فراس الحمداني",
    nameEn: "Abu Firas al-Hamdani",
    era: "عباسي",
    birthYear: 932,
    deathYear: 968,
    dateSystem: "gregorian",
    biographyAr: "الحارث بن سعيد الحمداني. أمير وشاعر وفارس. ابن عم سيف الدولة. أسره الروم فكتب الروميات في الأسر.",
    styleNotes: "الحماسة والشوق والروميات",
  },
  {
    id: 14,
    nameAr: "أبو تمام",
    nameEn: "Abu Tammam",
    era: "عباسي",
    birthYear: 796,
    deathYear: 845,
    dateSystem: "gregorian",
    biographyAr: "حبيب بن أوس الطائي. شاعر عباسي كبير وجامع ديوان الحماسة. أستاذ البحتري.",
    styleNotes: "المدح والحماسة والبديع",
  },
  {
    id: 15,
    nameAr: "البحتري",
    nameEn: "Al-Buhturi",
    era: "عباسي",
    birthYear: 821,
    deathYear: 897,
    dateSystem: "gregorian",
    biographyAr: "الوليد بن عبيد الطائي. شاعر عباسي كبير تلميذ أبي تمام. لُقّب بشاعر الطبيعة لجمال وصفه.",
    styleNotes: "الوصف والمدح وعمود الشعر",
  },

  // === العصر الحديث ===
  {
    id: 16,
    nameAr: "أحمد شوقي",
    nameEn: "Ahmad Shawqi",
    era: "حديث",
    birthYear: 1868,
    deathYear: 1932,
    dateSystem: "gregorian",
    biographyAr: "أحمد شوقي بك. أمير الشعراء. أعظم شعراء العربية في العصر الحديث. رائد المسرح الشعري العربي.",
    styleNotes: "الوطنيات والمدح والمسرح الشعري",
  },
  {
    id: 17,
    nameAr: "حافظ إبراهيم",
    nameEn: "Hafiz Ibrahim",
    era: "حديث",
    birthYear: 1872,
    deathYear: 1932,
    dateSystem: "gregorian",
    biographyAr: "محمد حافظ إبراهيم. شاعر النيل. عُرف بشعره الاجتماعي والوطني. صديق أحمد شوقي ومنافسه.",
    styleNotes: "الشعر الاجتماعي والوطني",
  },
  {
    id: 18,
    nameAr: "نزار قباني",
    nameEn: "Nizar Qabbani",
    era: "حديث",
    birthYear: 1923,
    deathYear: 1998,
    dateSystem: "gregorian",
    biographyAr: "شاعر سوري ودبلوماسي. شاعر المرأة والحب. أصدر أكثر من 35 ديواناً. جدّد في الشعر العربي الحديث.",
    styleNotes: "الغزل الحديث والقضايا الاجتماعية",
  },
  {
    id: 19,
    nameAr: "محمود درويش",
    nameEn: "Mahmoud Darwish",
    era: "حديث",
    birthYear: 1941,
    deathYear: 2008,
    dateSystem: "gregorian",
    biographyAr: "شاعر فلسطيني. من أبرز أصوات الشعر العربي المعاصر. عُرف بتأملاته في الهوية والانتماء والوطن.",
    styleNotes: "الهوية والحنين والتأمل الإنساني",
  },
  {
    id: 20,
    nameAr: "إيليا أبو ماضي",
    nameEn: "Elia Abu Madi",
    era: "حديث",
    birthYear: 1889,
    deathYear: 1957,
    dateSystem: "gregorian",
    biographyAr: "شاعر لبناني مهجري. من أبرز شعراء المهجر. اشتهر بالتفاؤل والتأمل الفلسفي.",
    styleNotes: "التفاؤل والفلسفة والطبيعة",
  },

  // === عصر صدر الإسلام ===
  {
    id: 21,
    nameAr: "الإمام علي بن أبي طالب",
    nameEn: "Imam Ali ibn Abi Talib",
    era: "إسلامي",
    birthYear: 600,
    deathYear: 661,
    dateSystem: "gregorian",
    biographyAr: "أمير المؤمنين علي بن أبي طالب، ابن عم النبي محمد وزوج السيدة فاطمة الزهراء. رابع الخلفاء الراشدين وأحد أبرز فصحاء العرب. جمع علومه في نهج البلاغة، وله ديوان شعر حافل بالحكمة والزهد والفلسفة.",
    styleNotes: "الحكمة والزهد والموعظة والفلسفة الوجودية",
  },

  // === العصر العباسي (إضافات) ===
  {
    id: 22,
    nameAr: "الإمام الشافعي",
    nameEn: "Imam Al-Shafi'i",
    era: "عباسي",
    birthYear: 767,
    deathYear: 820,
    dateSystem: "gregorian",
    biographyAr: "محمد بن إدريس الشافعي، إمام فقيه وشاعر حكيم. مؤسس المذهب الشافعي في الفقه الإسلامي. وُلد في غزة ونشأ في مكة، ورحل في طلب العلم. له ديوان شعر عميق في الحكمة والزهد وآداب السلوك.",
    styleNotes: "الحكمة والزهد وآداب السلوك والموعظة",
  },
  {
    id: 23,
    nameAr: "البوصيري",
    nameEn: "Al-Busiri",
    era: "عباسي",
    birthYear: 1213,
    deathYear: 1294,
    dateSystem: "gregorian",
    biographyAr: "شرف الدين محمد بن سعيد البوصيري، شاعر مصري من العصر المملوكي. اشتهر بقصيدته البردة الشريفة في مدح النبي محمد ﷺ، وهي من أشهر قصائد العربية على مرّ العصور. قيل إنه رأى النبي في المنام وهو يلقي عليه بردته.",
    styleNotes: "المدح النبوي والتوسل والغزل الروحاني",
  },

  // === العصر الحديث (إضافات) ===
  {
    id: 24,
    nameAr: "أبو القاسم الشابي",
    nameEn: "Abu Al-Qasim Al-Shabbi",
    era: "حديث",
    birthYear: 1909,
    deathYear: 1934,
    dateSystem: "gregorian",
    biographyAr: "أبو القاسم الشابي، شاعر تونسي عظيم وُلد في توزر. لقّبه الشعراء بشاعر الخضراء. توفي شاباً في الخامسة والعشرين، تاركاً إرثاً شعرياً خالداً. قصيدته 'إرادة الحياة' من أشهر القصائد العربية، واستُلهمت منها نشيد تونس الوطني.",
    styleNotes: "الإرادة والحرية والثورة وحب الحياة",
  },
  {
    id: 25,
    nameAr: "الخنساء",
    nameEn: "Al-Khansa'",
    era: "إسلامي",
    birthYear: 575,
    deathYear: 645,
    dateSystem: "gregorian",
    biographyAr: "تُماضر بنت عمرو السُّلمية، شاعرة عربية من العصر الجاهلي أسلمت وصحابية كرام. أعظم شاعرة رثاء في تاريخ العرب. رثت أخويها صخراً ومعاوية بأعمق ما قيل في الرثاء. قال لها النبي ﷺ يوم حفر الخندق: 'شعرك أحسن الشعر'.",
    styleNotes: "الرثاء والحزن والإخاء والوفاء",
  },
  {
    id: 26,
    nameAr: "جبران خليل جبران",
    nameEn: "Kahlil Gibran",
    era: "حديث",
    birthYear: 1883,
    deathYear: 1931,
    dateSystem: "gregorian",
    biographyAr: "جبران خليل جبران، شاعر وفيلسوف وفنان لبناني مهجري. وُلد في بشرّي وهاجر إلى أمريكا. أحد أعظم الأدباء العرب في العصر الحديث. عُرف بكتاب 'النبي' و'الأجنحة المتكسّرة' و'المواكب'. مزج بين الشعر والفلسفة والروحانية.",
    styleNotes: "الفلسفة والروحانية وحب الطبيعة والحرية",
  },

  // === العصر العباسي الأندلسي ===
  {
    id: 27,
    nameAr: "بدر شاكر السياب",
    nameEn: "Badr Shakir al-Sayyab",
    era: "حديث",
    birthYear: 1926,
    deathYear: 1964,
    dateSystem: "gregorian",
    biographyAr: "بدر شاكر السياب، شاعر عراقي رائد الشعر الحر في الأدب العربي. وُلد في جيكور قرب البصرة. أحدثت قصيدته 'أنشودة المطر' ثورة في الشعر العربي الحديث. عانى مرضاً شديداً في آخر حياته وتوفي شاباً في الكويت.",
    styleNotes: "الشعر الحر، الرمزية، الوطن والغربة والطبيعة",
  },
  {
    id: 28,
    nameAr: "ابن زيدون",
    nameEn: "Ibn Zaydun",
    era: "أندلسي",
    birthYear: 1003,
    deathYear: 1071,
    dateSystem: "gregorian",
    biographyAr: "أحمد بن عبد الله بن زيدون المخزومي القرطبي. أعظم شعراء الأندلس وشاعر الغزل الأندلسي بامتياز. عُرف بحبه لولادة بنت المستكفي. نونيّته في وصف حديقة الزهراء من روائع الشعر العربي.",
    styleNotes: "الغزل الأندلسي والشوق والحنين والرقة العاطفية",
  },
  {
    id: 29,
    nameAr: "أبو العتاهية",
    nameEn: "Abu al-Atahiya",
    era: "عباسي",
    birthYear: 748,
    deathYear: 828,
    dateSystem: "gregorian",
    biographyAr: "إسماعيل بن القاسم بن سويد العيني. شاعر عباسي كبير لُقِّب بأبي العتاهية. بدأ شاعر غزل ثم تحوّل إلى شعر الزهد والحكمة. قال الجاحظ: 'ما رأيت أحداً أعلم بالشعر منه'.",
    styleNotes: "الزهد والحكمة والموعظة والتأمل في الفناء",
  },

  // === العصر العباسي — ابن الرومي والشريف الرضي ===
  {
    id: 32,
    nameAr: "ابن الرومي",
    nameEn: "Ibn al-Rumi",
    era: "عباسي",
    birthYear: 836,
    deathYear: 896,
    dateSystem: "gregorian",
    biographyAr: "علي بن العباس بن جريج الرومي، شاعر عباسي كبير من بغداد. أحد فحول الشعر العربي وأكثرهم إنتاجاً؛ يُقدَّر شعره بأكثر من اثني عشر ألف بيت. اشتهر بالهجاء اللاذع ووصف المآكل والطبيعة، ورثاء ولده المتوفى من أعمق ما قيل في المراثي.",
    styleNotes: "الهجاء والوصف الدقيق والمراثي، ثروة لغوية هائلة",
  },
  {
    id: 33,
    nameAr: "الشريف الرضي",
    nameEn: "Al-Sharif al-Radi",
    era: "عباسي",
    birthYear: 970,
    deathYear: 1016,
    dateSystem: "gregorian",
    biographyAr: "محمد بن الحسين الموسوي، الشريف الرضي. شاعر وعالم عباسي من نسل الإمام علي. من أرفع أصوات الشعر العربي في القرن الرابع الهجري. جمع نهج البلاغة لأمير المؤمنين الإمام علي. ديوانه ذخيرة في الحكمة والغزل والرثاء.",
    styleNotes: "الحكمة والرثاء والغزل الرفيع، لغة عالية المستوى",
  },

  // === العصر الحديث — فاروق جويدة ===
  {
    id: 34,
    nameAr: "فاروق جويدة",
    nameEn: "Farouk Jwaideh",
    era: "حديث",
    birthYear: 1946,
    deathYear: null,
    dateSystem: "gregorian",
    biographyAr: "فاروق جويدة، شاعر مصري كبير وُلد في المنصورة. من أبرز أصوات الشعر العربي المعاصر. يجمع بين العمود الكلاسيكي وروح العصر. عُرف بشعره الوطني والغزلي العميق، وكتاباته في الهموم العربية. عمل بالصحافة الأدبية لعقود.",
    styleNotes: "الغزل الوطني والحزن الجميل والعمود الكلاسيكي المعاصر",
  },

  // === العصر الأندلسي (إضافات) ===
  {
    id: 30,
    nameAr: "ابن حزم الأندلسي",
    nameEn: "Ibn Hazm al-Andalusi",
    era: "أندلسي",
    birthYear: 994,
    deathYear: 1064,
    dateSystem: "gregorian",
    biographyAr: "علي بن أحمد بن سعيد بن حزم الأندلسي القرطبي. فيلسوف وفقيه وشاعر أندلسي كبير من قرطبة. صاحب كتاب 'طوق الحمامة' في الحب والمحبين، وهو من أجمل ما كُتب في الأدب العربي. جمع بين الفقه والفلسفة والأدب في منهج فريد.",
    styleNotes: "الغزل العذري والحكمة الفلسفية والتأمل في الحب والفراق",
  },
  {
    id: 31,
    nameAr: "ابن خفاجة",
    nameEn: "Ibn Khafajah",
    era: "أندلسي",
    birthYear: 1058,
    deathYear: 1139,
    dateSystem: "gregorian",
    biographyAr: "إبراهيم بن أبي الفتح بن عبد الله بن خفاجة الأندلسي. شاعر أندلسي من الجزيرة الخضراء (بالنسي). لُقِّب بـ'شاعر الطبيعة الأندلسية' لبراعته في وصف الطبيعة من أنهار وجبال ورياض. شعره مرآة للجمال الطبيعي للأندلس.",
    styleNotes: "وصف الطبيعة الأندلسية — الأنهار والجبال والرياض والربيع",
  },
];

export function getPoetById(id: number): Poet | undefined {
  return SAMPLE_POETS.find((p) => p.id === id);
}

const ERA_ORDER: Record<string, number> = {
  "جاهلي": 1,
  "إسلامي": 2,
  "أموي": 3,
  "عباسي": 4,
  "أندلسي": 5,
  "حديث": 6,
};

export function getPoetsByEra(): Record<string, Poet[]> {
  const grouped: Record<string, Poet[]> = {};
  for (const poet of SAMPLE_POETS) {
    if (!grouped[poet.era]) grouped[poet.era] = [];
    grouped[poet.era].push(poet);
  }
  const sorted: Record<string, Poet[]> = {};
  const sortedKeys = Object.keys(grouped).sort(
    (a, b) => (ERA_ORDER[a] ?? 99) - (ERA_ORDER[b] ?? 99)
  );
  for (const key of sortedKeys) {
    sorted[key] = grouped[key];
  }
  return sorted;
}
