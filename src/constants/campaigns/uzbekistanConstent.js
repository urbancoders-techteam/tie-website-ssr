import { imageBaseUrl } from "@/utils/config";

// -------------------- University images (aligned with mbbs country listing) --------------------
const uz1 = `${imageBaseUrl}mbbsCollege/uzbekistan/uz1.png`;
const uz2 = `${imageBaseUrl}mbbsCollege/uzbekistan/uz2.png`;
const uz3 = `${imageBaseUrl}mbbsCollege/uzbekistan/uz3.png`;
const uz4 = `${imageBaseUrl}mbbsCollege/uzbekistan/uz4.png`;
const uz5 = `${imageBaseUrl}mbbsCollege/uzbekistan/uz5.png`;
const uz6 = `${imageBaseUrl}mbbsCollege/uzbekistan/uz6.png`;
const uz7 = `${imageBaseUrl}mbbsCollege/uzbekistan/uz7.png`;
const uz8 = `${imageBaseUrl}mbbsCollege/uzbekistan/uz8.png`;
const uz9 = `${imageBaseUrl}mbbsCollege/uzbekistan/uz9.png`;
const uz10 = `${imageBaseUrl}mbbsCollege/uzbekistan/uz10.png`;

// ---------------- Hero (campaign landing) ----------------
export const UZBEKISTAN_HERO = {
  tagline: "Your ambition. Our expertise. Confirmed admits.",
  title: "Study MBBS in Uzbekistan with expert guidance",
  titleHighlight: "Uzbekistan",
  description:
    "Make your medical career aspirations a reality with MBBS in Uzbekistan, guided by the experts at Taksheela Institute of Education. With years of experience in international education counselling, our team helps you navigate the admission process and choose the right university for your future.",
  stats: [
    { value: <span className="text-[#5dd4d9]">10+ years</span>, label: "of counselling experience" },
    { value: <span className="text-[#5dd4d9]">Trusted</span>, label: "by 1M+ aspirants" },
    { value: <span className="text-[#5dd4d9]">Step-by-step</span>, label: "admission support" },
  ],
  ctaText: "BOOK YOUR FREE COUNSELLING",
};

// ---------------- Overview Content ----------------
export const UZBEKISTAN_OVERVIEW_CONTENT = {
  first:
    <> <span className="text-[#00999E] font-bold">MBBS (Bachelor of Medicine and Bachelor of Surgery)</span> is a globally recognised undergraduate medical degree that prepares students for careers in medicine and clinical practice. The program combines strong academic learning with hands-on <span className="text-[#00999E] font-bold">hands-on clinical training</span> to develop skilled and <span className="text-[#00999E] font-bold">ethical medical professionals</span>.</>,
  second:
    <> Uzbekistan has emerged as a preferred destination for Indian students pursuing MBBS abroad, offering <span className="text-[#00999E] font-bold">affordable tuition</span>, <span className="text-[#00999E] font-bold">English-medium programs</span> at many institutions, and a <span className="text-[#00999E] font-bold">student-friendly environment</span> in cities such as Tashkent and Samarkand.</>,
  third:
    <> Medical universities in Uzbekistan are increasingly recognised globally, with many listed in <span className="text-[#00999E] font-bold">WDOMS</span> and pathways toward eligibility for licensing exams when combined with <span className="text-[#00999E] font-bold">NMC</span> guidelines for Indian students. Degrees align with international standards alongside practical hospital training.</>,
  fourth:
    <> At <span className="text-[#00999E] font-bold">Taksheela Institute of Education</span>, we help students confidently pursue their <span className="text-[#00999E] font-bold">MBBS in Uzbekistan</span> by guiding them through university selection, <span className="text-[#00999E] font-bold">admission procedures</span>, <span className="text-[#00999E] font-bold">documentation</span>, and <span className="text-[#00999E] font-bold">visa support</span>—ensuring a smooth and <span className="text-[#00999E] font-bold">transparent journey</span> toward a <span className="text-[#00999E] font-bold">successful medical career</span>.</>,
  fifth:
    <> Students graduating from NMC-recognised universities abroad, including in Uzbekistan, are eligible to appear for licensing examinations in India such as <span className="text-[#00999E] font-bold">FMGE/NExT</span>, subject to the applicable <span className="text-[#00999E] font-bold">regulations</span>.</>,
};

// ---------------- Testimonials ----------------
export const UZBEKISTAN_TESTIMONIALS = [
  {
    name: "Aarav Mehta",
    location: "Indore",
    quote:
      "Taksheela helped me shortlist the right Uzbekistan university for my budget and NEET profile. The team was clear about documents and timelines, and I always knew what to do next.",
    university: "TASHKENT MEDICAL ACADEMY, UZBEKISTAN",
  },
  {
    name: "Priya Nair",
    location: "Kochi",
    quote:
      "From counselling to visa guidance, the process was organised. I appreciated the regular follow-ups and honest advice about living costs and course structure in Uzbekistan.",
    university: "SAMARKAND STATE MEDICAL INSTITUTE, UZBEKISTAN",
  },
  {
    name: "Karan Singh",
    location: "Chandigarh",
    quote:
      "The admission support was smooth and transparent. TIE answered my parents' questions patiently and helped us prepare everything without last-minute stress.",
    university: "ANDIJAN STATE MEDICAL INSTITUTE, UZBEKISTAN",
  },
];

export const UZBEKISTAN_WHAT_STUDENTS_SAY_INTRO = (
  <>
    <span className="text-[#00999E] font-bold">Taksheela Institute of Education</span> has helped Indian
    students to pursue their MBBS in Uzbekistan. Take a look at some of the
    success stories of students who sought our expert guidance,
    professional consultation and assistance services to apply to
    <span className="text-[#00999E] font-bold"> Uzbekistan MBBS universities</span>.
  </>
);

// ---------------- Quick Facts ----------------
export const UZBEKISTAN_QUICK_FACTS_INTRO = (
  <>
    Explore the essential details about studying <span className="text-[#5dd4d9] font-bold">MBBS in Uzbekistan</span> for Indian students with the expert guidance of <span className="text-[#5dd4d9] font-bold">Taksheela Institute of Education</span>. Our advisors help you understand the admission process, eligibility, costs, and university options before you begin your medical journey abroad.
  </>
);

export const UZBEKISTAN_QUICK_FACTS = [
  {
    icon: "FaUserGraduate",
    iconBg: "bg-[#bfdbfe]",
    iconColor: "text-[#1e40af]",
    title: "Students",
    desc: "A growing number of Indian students choose Uzbekistan for affordable, English-friendly medical programs and a welcoming study environment.",
  },
  {
    icon: "FaClock",
    iconBg: "bg-[#bfdbfe]",
    iconColor: "text-[#1e40af]",
    title: "Course Duration",
    desc: "The MBBS program in Uzbekistan typically spans 5–6 years, including academic study and clinical training as per university curriculum.",
  },
  {
    icon: "FaCalendarAlt",
    iconBg: "bg-[#fed7aa]",
    iconColor: "text-[#c2410c]",
    title: "Admission Intakes",
    desc: "Most universities offer a primary intake in September; some may offer an additional spring intake depending on the institution.",
  },
  {
    icon: "FaClipboardCheck",
    iconBg: "bg-[#d1fae5]",
    iconColor: "text-[#047857]",
    title: "Eligibility",
    desc: "Students must have at least 50% in Physics, Chemistry, and Biology in 10+2, be 17 years or older, and qualify NEET as per current regulations.",
  },
  {
    icon: "FaBook",
    iconBg: "bg-[#e0e7ff]",
    iconColor: "text-[#3730a3]",
    title: "Medium of Instruction",
    desc: "Many universities offer English-medium MBBS; local language exposure may be included for clinical interactions.",
  },
  {
    icon: "FaRubleSign",
    iconBg: "bg-[#fce7f3]",
    iconColor: "text-[#9d174d]",
    title: "Tuition Range",
    desc: "Annual tuition often falls in an affordable range compared to Indian private colleges, typically roughly ₹1.5 lakh–₹4 lakh depending on the university.",
  },
  {
    icon: "FaGlobe",
    iconBg: "bg-[#d1fae5]",
    iconColor: "text-[#047857]",
    title: "Cost of Living",
    desc: "Living costs in Uzbekistan are generally moderate, with expenses varying by city and lifestyle.",
  },
  {
    icon: "FaUniversity",
    iconBg: "bg-[#fef3c7]",
    iconColor: "text-[#b45309]",
    title: "Recognition",
    desc: "Choose universities aligned with NMC guidelines and global listings (e.g. WDOMS) with TIE's counselling support.",
  },
];

export const UZBEKISTAN_QUICK_FACTS_SECTION = {
  quickFacts: UZBEKISTAN_QUICK_FACTS,
  countryName: "Uzbekistan",
  introParagraph: UZBEKISTAN_QUICK_FACTS_INTRO,
};

// ---------------- Why Choose Uzbekistan ----------------
export const UZBEKISTAN_WHY_CHOOSE_INTRO = (
  <>
    Pursuing <span className="text-[#00999E] font-bold">MBBS in Uzbekistan</span> is an attractive option for Indian students seeking quality medical education at a reasonable cost. With guidance from <span className="text-[#00999E] font-bold">Taksheela Institute of Education</span>, students can explore reputed Uzbek medical universities that offer strong <span className="text-[#00999E] font-bold">academic training</span>, <span className="text-[#00999E] font-bold">modern facilities</span>, and <span className="text-[#00999E] font-bold">global recognition pathways</span>. Here are some key reasons why Uzbekistan is gaining popularity among aspiring doctors.
  </>
);

export const UZBEKISTAN_WHY_CHOOSE_CARDS = [
  {
    icon: "FaRubleSign",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "Affordable Tuition Fees",
    desc: "Compared to private medical colleges in India, many Uzbekistan universities offer competitive annual fees, making the total cost of the program more accessible for middle-income families.",
  },
  {
    icon: "FaUniversity",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "NMC-Aware Counselling",
    desc: "Taksheela helps you evaluate universities with an eye on India's National Medical Commission (NMC) norms so you can plan eligibility for licensing exams after graduation.",
  },
  {
    icon: "FaClipboardCheck",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "Simple and Transparent Admission Process",
    desc: "With structured guidance, the admission process is straightforward—focused on academic eligibility and complete documentation rather than capitation fees.",
  },
  {
    icon: "FaHospital",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "Clinical Training",
    desc: "Programs combine theoretical learning with hospital exposure so students build practical skills alongside classroom teaching.",
  },
  {
    icon: "FaHospital",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "English-Medium Options",
    desc: "Several institutions offer English-taught MBBS tracks, helping Indian students adapt academically while building local language familiarity over time.",
  },
  {
    icon: "FaHospital",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "Supportive Student Journey",
    desc: "Taksheela Institute of Education provides counselling, shortlisting, and admission assistance so you can start your MBBS journey in Uzbekistan with clarity.",
  },
];

// ---------------- Eligibility Criteria ----------------
export const UZBEKISTAN_ELIGIBILITY_INTRO = (
  <>
    Students planning to pursue <span className="text-[#00999E] font-bold">MBBS in Uzbekistan</span> must meet certain academic and regulatory requirements. With guidance from <span className="text-[#00999E] font-bold">Taksheela Institute of Education</span>, Indian students can clearly understand these eligibility conditions and prepare their applications accordingly. These requirements reflect common admission standards of Uzbek medical universities as well as India&apos;s <span className="text-[#00999E] font-bold">National Medical Commission (NMC)</span> norms for studying abroad.
  </>
);

export const UZBEKISTAN_ELIGIBILITY_CRITERIA = [
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
    desc: "The minimum age is typically 17 years (as of 31st December of the admission year); specific universities may publish additional rules.",
  },
  {
    title: "NEET Qualifications",
    desc: "Qualification of the NEET-UG (per validity rules) is mandatory for Indian medical students who wish to practise their profession in India after graduation.",
  },
];

// ---------------- Admission Process Steps ----------------
export const UZBEKISTAN_ADMISSION_STEPS = [
  {
    stepLabel: "Step 1",
    title: "Personalised Counselling",
    desc: "Our experienced advisors at Taksheela begin with a counselling session to understand your academic background, career goals, and preferences. Based on this discussion, we guide you on the most suitable pathway for pursuing MBBS in Uzbekistan.",
    icon: "FaUserFriends",
  },
  {
    stepLabel: "Step 2",
    title: "Profile Assessment and University Selection",
    desc: "Our team carefully reviews your academic profile, eligibility, and budget to help you shortlist universities that match your goals and compliance expectations.",
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
export const UZBEKISTAN_DOCUMENTS_INTRO = (
  <>
    To apply for <span className="text-[#00999E] font-bold">MBBS in Uzbekistan</span>, students must submit a set of academic,
    identification, and visa-related documents that comply with the
    requirements of the university and relevant authorities,
    including India&apos;s <span className="text-[#00999E] font-bold">National Medical Commission (NMC)</span> norms for overseas medical education. Here is the list of required documents.
  </>
);

export const UZBEKISTAN_DOCUMENTS_REQUIRED = [
  { title: "10th & 12th Mark Sheets", icon: "FaFileAlt" },
  { title: "NEET Score Card (per validity rules)", icon: "FaStethoscope" },
  { title: "Valid Passport (adequate validity for visa)", icon: "FaPassport" },
  { title: "5-10 Passport-sized Photographs (35mm x 45mm)", icon: "FaCamera" },
];

// ---------------- Universities ----------------
export const UZBEKISTAN_UNIVERSITIES = [
  {
    id: "tma",
    name: "Tashkent Medical Academy",
    founded: "1935",
    city: "Tashkent",
    fees: "₹1,50,000 – ₹3,75,000/year (approx.)",
    logoIndex: uz1,
    imageKey: uz1,
  },
  {
    id: "ssmi",
    name: "Samarkand State Medical Institute",
    founded: "1930",
    city: "Samarkand",
    fees: "₹1,50,000 – ₹3,75,000/year (approx.)",
    logoIndex: uz2,
    imageKey: uz2,
  },
  {
    id: "asmi",
    name: "Andijan State Medical Institute",
    founded: "1955",
    city: "Andijan",
    fees: "₹1,50,000 – ₹3,75,000/year (approx.)",
    logoIndex: uz3,
    imageKey: uz3,
  },
  {
    id: "bsmi",
    name: "Bukhara State Medical Institute",
    founded: "1995",
    city: "Bukhara",
    fees: "₹1,50,000 – ₹3,75,000/year (approx.)",
    logoIndex: uz4,
    imageKey: uz4,
  },
  {
    id: "ksmi",
    name: "Karakalpak State Medical Institute",
    founded: "1972",
    city: "Nukus",
    fees: "₹1,50,000 – ₹3,75,000/year (approx.)",
    logoIndex: uz5,
    imageKey: uz5,
  },
  {
    id: "fsumf",
    name: "Fergana State University Medical Faculty",
    founded: "1930",
    city: "Fergana",
    fees: "₹1,50,000 – ₹3,75,000/year (approx.)",
    logoIndex: uz6,
    imageKey: uz6,
  },
  {
    id: "nsmi",
    name: "Namangan State Medical Institute",
    founded: "1993",
    city: "Namangan",
    fees: "₹1,50,000 – ₹3,75,000/year (approx.)",
    logoIndex: uz7,
    imageKey: uz7,
  },
  {
    id: "tsumf",
    name: "Termez State University Medical Faculty",
    founded: "1992",
    city: "Termez",
    fees: "₹1,50,000 – ₹3,75,000/year (approx.)",
    logoIndex: uz8,
    imageKey: uz8,
  },
  {
    id: "usumf",
    name: "Urgench State University Medical Faculty",
    founded: "1992",
    city: "Urgench",
    fees: "₹1,50,000 – ₹3,75,000/year (approx.)",
    logoIndex: uz9,
    imageKey: uz9,
  },
  {
    id: "tpmi",
    name: "Tashkent Pediatric Medical Institute",
    founded: "1972",
    city: "Tashkent",
    fees: "₹1,50,000 – ₹3,75,000/year (approx.)",
    logoIndex: uz10,
    imageKey: uz10,
  },
];

// ---------------- FAQ ----------------
export const UZBEKISTAN_FAQ_ITEMS = [
  {
    question: "What hostel and food facilities are available for Indian students in Uzbekistan?",
    answer:
      "Many universities offer hostel accommodation for international students with basic amenities. Indian food may be available in larger cities or through private mess options. Taksheela Institute of Education helps you evaluate housing and dining choices during university selection.",
    highlightTerms: ["hostel accommodation", "Indian food", "Taksheela Institute of Education"],
  },
  {
    question: "What is the approximate cost of studying MBBS in Uzbekistan?",
    answer:
      "Tuition and living costs are generally affordable compared to Indian private medical colleges. Exact fees vary by university and city; Taksheela helps you compare options that fit your budget.",
    highlightTerms: ["affordable", "tuition", "Taksheela"],
  },
  {
    question: "Is Uzbekistan safe for Indian students pursuing MBBS?",
    answer:
      "Uzbekistan welcomes international students, and universities often provide campus support services. Taksheela also shares pre-departure guidance so students and parents know what to expect.",
    highlightTerms: ["international students", "campus support", "Taksheela"],
  },
  {
    question: "Is MBBS in Uzbekistan taught in English?",
    answer:
      "Many programs offer English-medium instruction for international students. Some clinical rotations may introduce local language basics for patient communication.",
    highlightTerms: ["English-medium", "international students"],
  },
  {
    question: "What is the duration of MBBS in Uzbekistan?",
    answer:
      "The program typically lasts about 5–6 years depending on the university curriculum, including academic study and clinical training.",
    highlightTerms: ["5–6 years", "clinical training"],
  },
  {
    question: "How many Indian students study MBBS in Uzbekistan?",
    answer:
      "The Indian student community in Uzbekistan has been growing as more students discover affordable, quality medical education in the region.",
    highlightTerms: ["Indian student community", "affordable"],
  },
  {
    question: "Is an MBBS degree from Uzbekistan valid in India?",
    answer:
      "Graduates may pursue licensing in India if their university meets NMC criteria applicable at the time of admission and graduation. After the course, graduates must clear the required exam such as FMGE or NExT per current regulations.",
    highlightTerms: ["NMC criteria", "FMGE or NExT", "current regulations"],
  },
  {
    question: "What NEET score is required to study MBBS in Uzbekistan?",
    answer:
      "Indian students should qualify NEET-UG as required for overseas medical education and future practice in India. Cutoffs vary by year; we help you interpret eligibility in context.",
    highlightTerms: ["NEET-UG", "overseas medical education"],
  },
  {
    question: "Are hostels separate for male and female students?",
    answer:
      "Most universities provide separate hostel blocks or floors for male and female students with security arrangements. Availability may vary by campus.",
    highlightTerms: ["separate hostel", "security"],
  },
  {
    question: "Can I practise in India after completing MBBS in Uzbekistan?",
    answer:
      "Yes, subject to NMC rules and clearing the prescribed licensing examination (e.g. FMGE/NExT) as per regulations in force when you apply.",
    highlightTerms: ["NMC rules", "FMGE/NExT"],
  },
];
