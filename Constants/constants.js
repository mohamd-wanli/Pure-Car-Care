const navLinks = [
  {
    id: "menu",
    title: "Menu",
    titleAr: "القائمة",
  },
  {
    id: "about",
    title: "About Us",
    titleAr: "من نحن",
  },
  {
    id: "work",
    title: "Our Work",
    titleAr: "أعمالنا",
  },
  {
    id: "contact",
    title: "Contact",
    titleAr: "تواصل معنا",
  },
];

const featureLists = [
  "Perfectly balanced finishes",
  "Buffed to perfection",
  "Streak-free every time",
  "Expertly polished & protected",
];
const featureListsAr = [
  "لمسات نهائية متوازنة بدقة",
  "تلميع بمستوى الاحتراف",
  "نتيجة نظيفة بدون خطوط في كل مرة",
  "تلميع وحماية بخبرة عالية",
];
const goodLists = [
  "Premium grade formulas",
  "Signature detailing techniques",
  "Craftsmanship in action",
  "Deeply restored surfaces",
];

const goodListsAr = [
  "تركيبات ذات جودة فاخرة",
  "تقنيات تنظيف مميزة",
  "حرفية في كل التفاصيل",
  "أسطح مُستعادة بعمق",
];

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "https://www.instagram.com/purecarcare.ae?igsh=eWptMzl5Z2NseTFi&utm_source=qr",
  },
  {
    name: "SnapChat",
    icon: "/images/Snapchat.png",
    url: "https://snapchat.com/t/HaD93hfX",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "https://www.facebook.com/profile.php?id=61576219362318&mibextid=wwXIfr&rdid=Ki4szVxJYqFvYj8A&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FjaJyxKxR%2F%3Fmibextid%3DwwXIfr#",
  },
  {
    name: "TikTok",
    icon: "/images/tic.png",
    url: "https://www.tiktok.com/@purecarcare.ae?_t=ZS-90UUIBq0d4U&_r=1",
  },
];

const sliderLists = [
  {
    id: 1,
    name: "Ceramic Coating",
    nameAr: "طلاء السيراميك",
    image: "/images/ciramic.jpeg",
    title: "Mirror-like gloss and protection",
    titleAr: "لمعان يشبه المرآة وحماية فائقة",
    description:
      "Best in class Ceramic Coating with mirror-like finish providing ultimate shine & protection with 10H Technology.",
    descriptionAr:
      "أفضل طلاء سيراميك في فئته يمنح لمعانًا يشبه المرآة وحماية قصوى بتقنية 10H.",
  },
  {
    id: 2,
    name: "Paint-Protection Film",
    nameAr: "فيلم حماية الطلاء",
    image: "/images/ppf.jpeg",
    title: "Invisible armor for your car",
    titleAr: "درع غير مرئي لسيارتك",
    description:
      "Ultimate paint protection with transparent film shielding car paint from UV light, road debris & sand with life-time warranty.",
    descriptionAr:
      "حماية فائقة للطلاء بفيلم شفاف يحمي طلاء سيارتك من أشعة الشمس والحصى والرمال، مع ضمان مدى الحياة.",
  },
  {
    id: 3,
    name: "Car Polish",
    nameAr: "تلميع السيارة",
    image: "/images/polish.jpeg",
    title: "Restore Deep Gloss & Remove Imperfections",
    titleAr: "استعادة اللمعان العميق وإزالة العيوب",
    description:
      "Advanced compounding and polishing formula designed to eliminate swirl marks, light scratches, and oxidation, restoring a mirror-like depth to your paintwork.",
    descriptionAr:
      "تركيبة تلميع متقدمة مصممة للقضاء على آثار الدوامات والخدوش الخفيفة والأكسدة، لتعيد لطلاء سيارتك عمقه اللامع.",
  },
  {
    id: 4,
    name: "thermal insulation for glass facades",
    nameAr: "عازل حراري للواجهات الزجاجية",
    image: "/images/window tinting shops.jpeg",
    title: "thermal insulation for villas and commercial shops",
    titleAr: "عازل حراري للفلل والمحلات التجارية",
    description:
      "enjoy cooler spaces with our best window tints for villas & shops, preventing 99% of the harmful UV light and providing our best heat rejection technologies.",
    descriptionAr:
      "استمتع بأجواء أكثر برودة مع أفضل تظليل نوافذ للفلل والمحلات، يمنع 99٪ من الأشعة فوق البنفسجية الضارة ويوفر أفضل تقنيات عزل الحرارة.",
  },
  {
    id: 5,
    name: "Headlight Restoration",
    nameAr: "ترميم المصابيح الأمامية",
    image: "/images/headlight.jpeg",
    title: "Restore Crystal Clear Clarity",
    titleAr: "استعادة الوضوح الكريستالي",
    description:
      "Crystal clear headlights restoration to its original showroom spark.",
    descriptionAr:
      "ترميم المصابيح الأمامية لتعود بوضوح كريستالي كما في المعرض.",
  },
  {
    id: 6,
    name: "Interior Detailing",
    nameAr: "تنظيف المقصورة الداخلية",
    image: "/images/detail.jpeg",
    title: "Deep Cabin Cleaning",
    titleAr: "تنظيف عميق للمقصورة",
    description:
      "Deep interior rejuvenation targeting every crack and crevice, removing deep-set dirt, stains, and odors to restore a brand-new cabin feel.",
    descriptionAr:
      "تجديد داخلي عميق يستهدف كل زاوية وشق، لإزالة الأوساخ والبقع والروائح المتراكمة واستعادة إحساس المقصورة الجديدة.",
  },
  {
    id: 7,
    name: "Window Tinting",
    nameAr: "تظليل الزجاج",
    image: "/images/tint.jpg",
    title: "Pure-Ceramic Window Tinting",
    titleAr: "تظليل زجاج بيور سيراميك",
    description:
      "pure-Ceramic Tint, crystal clear from inside & dark from outside. Stay cool & safe with 99% IR & UV heat rejection designed specifically for UAE climate.",
    descriptionAr:
      "تظليل بيور الواضح من الداخل ومعتم من الخارج. يحافظ على البرودة مع رفض الحرارة بنسبة 99٪ لأشعة الشمس تحت الحمراء والحماية القصوى من الأشعة فوق البنفسجية المصمم خصيصًا لمناخ الإمارات العربية المتحدة",
  },
];

export {
  navLinks,
  featureLists,
  goodLists,
  featureListsAr,
  goodListsAr,
  socials,
  sliderLists,
};
