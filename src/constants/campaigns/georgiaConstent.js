import { imageBaseUrl } from "@/utils/config";
// import georgia_hero_img from "@/assets/georgia/georgia_hero_img.png";

// -------------------- Hero Image --------------------


// -------------------- University Logos --------------------
const Geomedi_logo =  `${imageBaseUrl}mbbsCollege/georgia/campaign/universities/geomedi_logo.png`;
const DTMU_logo =  `${imageBaseUrl}mbbsCollege/georgia/campaign/universities/DTMU_logo.png`;
const UOG_logo =  `${imageBaseUrl}mbbsCollege/georgia/campaign/universities/UOG_logo.png`;
const ABMU_logo =  `${imageBaseUrl}mbbsCollege/georgia/campaign/universities/ABMU_logo.jpeg`;
const ISU_logo =  `${imageBaseUrl}mbbsCollege/georgia/campaign/universities/ISU_logo.jpg`;
const GNU_SEU_logo =  `${imageBaseUrl}mbbsCollege/georgia/campaign/universities/GNU_SEU_logo.jpg`;
const EWTU_logo =  `${imageBaseUrl}mbbsCollege/georgia/campaign/universities/EWTU_logo.jpg`;
const CIU_logo =  `${imageBaseUrl}mbbsCollege/georgia/campaign/universities/CIU_logo.jpg`;
const EEU_logo =  `${imageBaseUrl}mbbsCollege/georgia/campaign/universities/EEU_logo.png`;
const Alte_logo =  `${imageBaseUrl}mbbsCollege/georgia/campaign/universities/Alte_logo.jpg`;

// -------------------- University Images --------------------
const geomedi =  `${imageBaseUrl}mbbsCollege/georgia/campaign/universities/clg_images/geomedi.jpg`;
const dtmu =  `${imageBaseUrl}mbbsCollege/georgia/campaign/universities/clg_images/dtmu.jpg`;
const uog =  `${imageBaseUrl}mbbsCollege/georgia/campaign/universities/clg_images/uog.png`;
const abmu =  `${imageBaseUrl}mbbsCollege/georgia/campaign/universities/clg_images/abmu.jpeg`;
const isu =  `${imageBaseUrl}mbbsCollege/georgia/campaign/universities/clg_images/isu.jpg`;
const gnuseu =  `${imageBaseUrl}mbbsCollege/georgia/campaign/universities/clg_images/gnuseu.jpg`;
const ewtu =  `${imageBaseUrl}mbbsCollege/georgia/campaign/universities/clg_images/ewtu.webp`;
const ciu =  `${imageBaseUrl}mbbsCollege/georgia/campaign/universities/clg_images/ciu.jpg`;
const eeu =  `${imageBaseUrl}mbbsCollege/georgia/campaign/universities/clg_images/eeu.png`;
const alte =  `${imageBaseUrl}mbbsCollege/georgia/campaign/universities/clg_images/alte.webp`;

// ---------------- Hero (campaign landing) ----------------
export const GEORGIA_HERO = {
  tagline: "Your ambition. Our expertise. Confirmed admits.",
  title: "Study MBBS in Georgia with expert guidance",
  titleHighlight: "Georgia",
  description:
    <>Turn your dream of becoming a doctor into reality by studying <span className="text-[#5dd4d9]">MBBS in Georgia</span> with trusted support from Taksheela Institute of Education. Our certified study-abroad consultants provide personalised guidance to help you secure admission to reputed Georgian medical universities.</>,
  stats: [
    { value: <span className="text-[#5dd4d9]">10+ years</span>, label: "of counselling experience" },
    { value: <span className="text-[#5dd4d9]">Trusted</span>, label: "by 1M+ aspirants" },
    { value: <span className="text-[#5dd4d9]">Step-by-step</span>, label: "admission support" },
  ],
  ctaText: "BOOK YOUR FREE COUNSELLING",
};

// ---------------- Overview Content ----------------
export const GEORGIA_OVERVIEW_CONTENT = {
  first:
    <>Pursuing <span className="text-[#00999E] font-bold">MBBS in Georgia</span> has become an increasingly popular choice for Indian students who are looking for internationally recognised medical education and strong clinical training opportunities. With guidance from <span className="text-[#00999E] font-bold">Taksheela Institute of Education</span>, students can explore reputable Georgian medical universities that offer modern learning environments, experienced faculty, and globally recognised degrees at comparatively affordable tuition fees.</>,
  second:
    <>In recent years, Georgia has witnessed a significant increase in the number of Indian medical students. Reports from the <span className="text-[#00999E] font-bold">Ministry of External Affairs (India)</span> and the <span className="text-[#00999E] font-bold">National Statistics Office of Georgia</span> indicate that <span className="text-[#00999E] font-bold">more than 15,000 Indian students</span> are currently studying in Georgia, with the majority enrolled in medical programs.</>,
  third:
  <>The <span className="text-[#00999E] font-bold">MBBS program in Georgia (commonly awarded as an MD degree)</span> usually has a <span className="text-[#00999E] font-bold">duration of six years</span>, including academic study, clinical training, and hospital-based practical exposure. The average tuition fees for MBBS in Georgia are approximately <span className="text-[#00999E] font-bold">$5,000 per year</span>, making it a relatively cost-effective option for students seeking medical education abroad.</>,
  fourth:
  <>Medical education in Georgia is monitored by the <span className="text-[#00999E] font-bold">National Centre for Educational Quality Enhancement (NCEQE)</span>, and many universities are recognised by international bodies such as the <span className="text-[#00999E] font-bold">World Federation for Medical Education (WFME)</span>. With the expert support of <span className="text-[#00999E] font-bold">Taksheela Institute of Education</span> , Indian students can confidently navigate the admission process and begin their journey toward a global medical career.</>,
  fifth:"",
};

// ---------------- Testimonials ----------------
export const GEORGIA_TESTIMONIALS = [
  {
    name: "Student One",
    location: "Mumbai",
    quote:
      "I had an excellent experience in securing my admission to study MBBS in Georgia with Taksheela. From the very beginning, they were incredibly knowledgeable, patient, and supportive. They guided me to select the right university that matched my aspirations and budget.",
    university: "TBILISI STATE MEDICAL UNIVERSITY, GEORGIA",
  },
  {
    name: "Student Two",
    location: "Delhi",
    quote:
      "Taksheela was very helpful throughout the process. The visa process was smooth, with no extra documentation hassles. Everything was well-organized, making the journey stress-free. I am now pursuing my MBBS in Georgia with confidence.",
    university: "BATUMI SHOTA RUSTAVELI STATE UNIVERSITY, GEORGIA",
  },
  {
    name: "Student Three",
    location: "Bangalore",
    quote:
      "The communication between parents and the agency was very well maintained. The behaviour of the staff was also very polite. Starting from enrollment until we reached the college, they were very well taken care of. I hope they keep up the good work.",
    university: "DAVID TVILISI MEDICAL UNIVERSITY, GEORGIA",
  },
];

export const GEORGIA_WHAT_STUDENTS_SAY_INTRO = (
  <>
    Over the years, <span className="text-[#00999E] font-bold">Taksheela Institute of Education</span> has guided many Indian students in pursuing their <span className="text-[#00999E] font-bold">MBBS in Georgia</span> by providing reliable counselling, admission support, and personalised guidance throughout the process.
    {" "}
    Here are some experiences and success stories from students who chose Taksheela for expert advice, professional consultation, and end-to-end assistance while applying to reputed <span className="text-[#00999E] font-bold">medical universities in Georgia</span>.
  </>
);

// ---------------- Quick Facts ----------------
export const GEORGIA_QUICK_FACTS_INTRO = (
  <>
    Explore the essential details about studying <span className="text-[#5dd4d9] font-bold">MBBS in Georgia</span> for Indian students with the expert guidance of <span className="text-[#5dd4d9] font-bold">Taksheela Institute of Education</span>. Our advisors help you understand the admission process, eligibility, costs, and university options before you begin your medical journey abroad.
  </>
);

export const GEORGIA_QUICK_FACTS = [
  {
    icon: "FaUserGraduate",
    iconBg: "bg-[#bfdbfe]",
    iconColor: "text-[#1e40af]",
    title: "Students",
    desc: <>More than <span className="text-[#00999E] font-bold">13,000 Indian students</span> are currently pursuing medical education in Georgia, making it a growing destination for MBBS abroad.</>,
  },
  {
    icon: "FaClock",
    iconBg: "bg-[#bfdbfe]",
    iconColor: "text-[#1e40af]",
    title: "Course Duration",
    desc: <>The <span className="text-[#00999E] font-bold">MBBS (MD) program in Georgia generally takes 6 years</span>, which includes academic study along with clinical training.</>,
  },
  {
    icon: "FaCalendarAlt",
    iconBg: "bg-[#fed7aa]",
    iconColor: "text-[#c2410c]",
    title: "Admission Intakes",
    desc: <>Most universities offer their <span className="text-[#00999E] font-bold">main intake in October</span>, while some institutions may also provide a <span className="text-[#00999E] font-bold">secondary intake in March or May</span>.</>,
  },
  {
    icon: "FaClipboardCheck",
    iconBg: "bg-[#d1fae5]",
    iconColor: "text-[#047857]",
    title: "Eligibility",
    desc: <>Students must have <span className="text-[#00999E] font-bold">at least 50% marks in Physics, Chemistry, and Biology in 10+2</span>, be <span className="text-[#00999E] font-bold">17 years or older</span>, and qualify <span className="text-[#00999E] font-bold">NEET</span> as per current regulations.</>,
  },
  {
    icon: "FaBook",
    iconBg: "bg-[#e0e7ff]",
    iconColor: "text-[#3730a3]",
    title: "Medium of Instruction",
    desc: <>Medical programs in Georgia are commonly offered in <span className="text-[#00999E] font-bold">English</span>, while basic <span className="text-[#00999E] font-bold">Georgian language training</span> may be provided for clinical interactions.</>,
  },
  {
    icon: "FaRubleSign",
    iconBg: "bg-[#fce7f3]",
    iconColor: "text-[#9d174d]",
    title: "Tuition Fees",
    desc:<> The average tuition fees range between <span className="text-[#00999E] font-bold">₹3.5 lakh and ₹8 lakh per year</span>, depending on the university.</>,
  },
  {
    icon: "FaGlobe",
    iconBg: "bg-[#d1fae5]",
    iconColor: "text-[#047857]",
    title: "Cost of Living",
    desc: <>Students typically spend around <span className="text-[#00999E] font-bold">₹4–5 lakh per year</span> on living expenses, depending on the city and lifestyle choices.</>,
  },
  {
    icon: "FaUniversity",
    iconBg: "bg-[#fef3c7]",
    iconColor: "text-[#b45309]",
    title: "Accreditations",
    desc: <>Many Georgian medical universities are recognised by <span className="text-[#00999E] font-bold">WDOMS, NCEQE, WFME, WHO, and NMC</span>, ensuring international academic standards.</>,
  },
];

/** Quick Facts section config for campaign pages. Spread into <QuickFactsSection /> with redirectPath. */
export const GEORGIA_QUICK_FACTS_SECTION = {
  quickFacts: GEORGIA_QUICK_FACTS,
  countryName: "Georgia",
  introParagraph: GEORGIA_QUICK_FACTS_INTRO,
};

// ---------------- Why Choose Georgia ----------------
export const GEORGIA_WHY_CHOOSE_INTRO = (
  <>
    <span className="text-[#00999E] font-bold">Georgia</span> has emerged as a popular destination for Indian students looking to pursue MBBS abroad due to its affordable education, English-medium programs, and globally recognised universities. With guidance from <span className="text-[#00999E] font-bold">Taksheela Institute of Education</span>, students can explore leading Georgian medical universities that offer modern infrastructure, strong academic standards, and valuable clinical training opportunities. With the expert support of <span className="text-[#00999E] font-bold">Taksheela Institute of Education</span>, students receive personalised counselling, university selection assistance, and complete guidance throughout their MBBS journey in Georgia.
  </>
);

export const GEORGIA_WHY_CHOOSE_CARDS = [
  {
    icon: "FaRubleSign",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "Affordable Tuition Fees & Living Costs",
    desc: "Compared to private medical colleges in India, where the overall cost can reach ₹80 lakh or more, studying MBBS in Georgia is considerably more affordable. The total program cost typically ranges between ₹21 lakh and ₹48 lakh for the full 6-year course, while the average monthly living expenses are around ₹36,000, depending on lifestyle and city.",
  },
  {
    icon: "FaUniversity",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "Globally Recognised Medical Universities",
    desc: "Many Georgian medical universities are recognised by major international and national medical bodies such as the World Health Organization (WHO), National Medical Commission (NMC) of India, and the World Federation for Medical Education (WFME). With support from Taksheela, students can choose accredited institutions that meet international standards.",
  },
  {
    icon: "FaClipboardCheck",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "Structured and Regulated Medical Curriculum",
    desc: "Medical education in Georgia is supervised by the National Centre for Educational Quality Enhancement (NCEQE), which ensures that universities maintain high academic standards. Many institutions also align with NMC guidelines, making them a suitable option for Indian students planning their medical careers.",
  },
  {
    icon: "FaHospital",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "Advanced Clinical Training and Infrastructure",
    desc: "Georgian universities provide early clinical exposure and hands-on training through affiliated hospitals equipped with modern medical technology. This practical learning environment helps students develop the skills and confidence required for a successful medical career.",
  },
  {
    icon: "FaUniversity",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "English-Medium Medical Programs",
    desc: "Most universities offer MBBS programs fully taught in English, making it easier for international students to adapt academically. Students may also learn basic Georgian language skills to communicate effectively with patients during clinical rotations.",
  },
  {
    icon: "FaHospital",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "Safe and Supportive Environment",
    desc: "Georgia is considered a safe and welcoming destination for international students. With a friendly culture, modern infrastructure, and supportive campus environments, Indian students can focus on their medical studies while experiencing a comfortable lifestyle abroad.",
  },
];

// ---------------- Eligibility Criteria ----------------
export const GEORGIA_ELIGIBILITY_INTRO = (
  <>
    Students planning to pursue <span className="text-[#00999E] font-bold">MBBS in Georgia</span> must meet certain academic and regulatory requirements. With guidance from <span className="text-[#00999E] font-bold">Taksheela Institute of Education</span>, Indian students can clearly understand these eligibility conditions and prepare their applications accordingly. These requirements are based on the admission standards of Georgian medical universities as well as the guidelines set by India&apos;s <span className="text-[#00999E] font-bold">National Medical Commission (NMC)</span>.
  </>
);

export const GEORGIA_ELIGIBILITY_CRITERIA = [
  {
    title: "Academic Background",
    titleHighlight: true,
    desc: "Students must have a scientific senior secondary education (10+2) with physics, chemistry, and biology (PCB) as the core subjects.",
  },
  {
    title: "Academic Qualifications",
    desc: "Students from the general category must have scored at least 50% in PCB, and the reserved categories (SC/ST/OBC) are eligible for admission at 40% aggregate.",
  },
  {
    title: "Age Limit",
    titleHighlight: true,
    desc: "There is no upper age limit for pursuing MBBS in Georgia, but the minimum age is 17 years old (as of 31st December of the admission year).",
  },
  {
    title: "NEET Qualifications",
    desc: "Qualification of the NEET-UG (3-year validity) is mandatory for all Indian medical students who wish to practise their profession in India after graduation.",
  },
];

// ---------------- Admission Process Steps ----------------
export const GEORGIA_ADMISSION_STEPS = [
  {
    stepLabel: "Step 1",
    title: "Personalised Counselling",
    desc: "Our experienced advisors at Taksheela begin with a counselling session to understand your academic background, career goals, and preferences. Based on this discussion, we guide you on the most suitable pathway for pursuing MBBS in Georgia.",
    icon: "FaUserFriends",
  },
  {
    stepLabel: "Step 2",
    title: "Profile Assessment and University Selection",
    desc: "Our team carefully reviews your academic profile, eligibility, and budget to help you shortlist NMC-compliant Georgian medical universities that match your goals.",
    icon: "FaListAlt",
  },
  {
    stepLabel: "Step 3",
    title: "Application and Documentation",
    desc: "Once the university is selected, Taksheela assists you with the complete application process. We help organise, verify, and prepare the required documents before submitting the application to the chosen university.",
    icon: "FaFileSignature",
  },
];

// ---------------- Documents Required ----------------
export const GEORGIA_DOCUMENTS_INTRO = (
  <>
    Students planning to pursue <span className="text-[#00999E] font-bold">MBBS in Georgia</span> must submit a set of essential academic and identification documents during the admission and visa process. With guidance from <span className="text-[#00999E] font-bold">Taksheela Institute of Education</span>, Indian students receive complete support in preparing and verifying all required documents according to the guidelines of the <span className="text-[#00999E] font-bold">National Medical Commission (NMC)</span>, Georgian authorities, and the relevant embassy requirements. With the assistance of <span className="text-[#00999E] font-bold">Taksheela Institute of Education</span>, students are guided through the complete documentation process to ensure a smooth application and visa procedure for studying <span className="text-[#00999E] font-bold">MBBS in Georgia</span>.
  </>
);

export const GEORGIA_DOCUMENTS_REQUIRED = [
  { title: "10th and 12th mark sheets from a recognised board", icon: "FaFileAlt" },
  { title: "NEET scorecard (valid as per current regulations)", icon: "FaStethoscope" },
  { title: "Valid passport with at least six months of validity", icon: "FaPassport" },
  { title: "5–10 recent passport-sized photographs (35mm × 45mm)", icon: "FaCamera" },
  { title: "Birth certificate (required in some cases, especially for minor applicants)", icon: "FaFileAlt" },
  { title: "Police clearance certificate (required for certain visa processes)", icon: "FaFileAlt" },
  { title: "Official admission letter issued by the selected university", icon: "FaFileAlt" },
  { title: "Visa invitation letter from the university or relevant authorities", icon: "FaFileAlt" },
];

// ---------------- Universities ----------------
// logoIndex: 1–3 for geo logos; imageKey: resolved via imageMap passed from page
export const GEORGIA_UNIVERSITIES = [
  {
    id: "geomedi",
    name: "University Geomedi (Teaching University Geomedi)",
    founded: "1998",
    city: "Tbilisi",
    fees: "₹4,50,000 - ₹5,00,000",
    logoIndex: Geomedi_logo,
    imageKey: geomedi,
  },
  {
    id: "dtmu",
    name: "David Tvildiani Medical University",
    founded: "1989",
    city: "Tbilisi",
    fees: "₹5,00,000 - ₹6,00,000",
    logoIndex: DTMU_logo,
    imageKey: dtmu,
  },
  {
    id: "uog",
    name: "University of Georgia",
    founded: "2004",
    city: "Tbilisi",
    fees: "₹5,00,000 - ₹6,00,000",
    logoIndex: UOG_logo,
    imageKey: uog,
  },
  {
    id: "abmu",
    name: "Avicenna Batumi Medical University",
    founded: "~2022",
    city: "Batumi",
    fees: "₹3,50,000 - ₹4,50,000",
    logoIndex: ABMU_logo,
    imageKey: abmu,
  },
  {
    id: "isu",
    name: "Ilia State University",
    founded: "2006",
    city: "Tbilisi",
    fees: "₹5,00,000 - ₹5,50,000",
    logoIndex: ISU_logo,
    imageKey: isu,
  },
  {
    id: "gnu_seu",
    name: "Georgian National University SEU",
    founded: "2001",
    city: "Tbilisi",
    fees: "₹4,50,000 - ₹5,00,000",
    logoIndex: GNU_SEU_logo,
    imageKey: gnuseu,
  },
  {
    id: "ewtu",
    name: "East-West Teaching University",
    founded: "1992",
    city: "Tbilisi",
    fees: "₹4,00,000 - ₹4,50,000",
    logoIndex: EWTU_logo,
    imageKey: ewtu,
  },
  {
    id: "ciu",
    name: "Caucasus International University",
    founded: "1995",
    city: "Tbilisi",
    fees: "₹5,00,000 - ₹5,50,000",
    logoIndex: CIU_logo,
    imageKey: ciu,
  },
  {
    id: "eeu",
    name: "East European University (EEU)",
    founded: "1980",
    city: "Tbilisi",
    fees: "₹4,50,000 - ₹5,00,000",
    logoIndex: EEU_logo,
    imageKey: eeu,
  },
  {
    id: "alte",
    name: "Alte University",
    founded: "2002",
    city: "Tbilisi",
    fees: "₹4,50,000 - ₹5,00,000",
    logoIndex: Alte_logo,
    imageKey: alte,
  },
];

// ---------------- FAQ ----------------
export const GEORGIA_FAQ_ITEMS = [
  {
    question: "Is MBBS in Georgia approved for Indian students?",
    answer:
      "Many medical universities in Georgia are recognised by the appropriate international bodies and may align with NMC regulations, depending on the institution and current guidelines. Taksheela Institute of Education helps students shortlist universities that meet the required standards for Indian students.",
    highlightTerms: ["Taksheela Institute of Education"],
  },
  {
    question: "Is studying MBBS in Georgia a good option?",
    answer:
      "Yes, MBBS in Georgia is considered a popular option for students looking for quality medical education, English-medium instruction, and affordable tuition fees. With support from Taksheela, students can choose universities that match their academic goals and budget.",
  },
  {
    question: "How much does MBBS in Georgia cost?",
    answer:
      "The cost of studying MBBS in Georgia usually varies by university. In general, tuition fees can range from approximately ₹6 lakh to ₹12.5 lakh per year, with additional expenses for accommodation, food, insurance, and personal living costs.",
  },
  {
    question: "Is NEET compulsory for MBBS in Georgia?",
    answer:
      "For Indian students, qualifying NEET is important if they plan to pursue medical education abroad and later practise in India, as per current NMC requirements. Taksheela guides students on the latest eligibility criteria before they apply.",
  },
  {
    question: "Is an MBBS degree from Georgia recognised in India?",
    answer:
      "An MBBS/MD degree from Georgia may be accepted in India if the university meets the required recognition norms and the student fulfils the necessary licensing requirements applicable at that time. Taksheela Institute of Education helps students identify universities that are better aligned with these requirements.",
  },
  {
    question: "What is the FMGE passing outlook for students graduating from Georgia?",
    answer:
      "FMGE performance can differ from one university to another and also depends on the student's preparation, academic foundation, and individual effort. Rather than relying only on broad percentages, Taksheela advises students to evaluate the university's academic quality, clinical exposure, and support systems before making a decision.",
  },
  {
    question: "What is the duration of MBBS in Georgia?",
    answer:
      "The medical program in Georgia generally has a duration of 6 years, which includes academic learning and practical clinical exposure as part of the course structure.",
  },
  {
    question: "Is Georgia a safe country for Indian students?",
    answer:
      "Georgia is often regarded as a student-friendly destination with a welcoming environment for international students. With the right university selection and guidance from Taksheela, students can prepare better for a safe and comfortable study experience abroad.",
  },
  {
    question: "How do I choose the right university for MBBS in Georgia?",
    answer:
      "The best university depends on factors such as recognition, tuition fees, medium of instruction, clinical exposure, location, and overall student support. Taksheela Institute of Education helps students compare suitable options and choose a university that fits their academic plans and budget.",
  },
];


