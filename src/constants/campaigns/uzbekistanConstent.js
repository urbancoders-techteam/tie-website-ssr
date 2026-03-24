import { imageBaseUrl } from "@/utils/config";

// ---------------------- University Images ----------------------
const tma = `${imageBaseUrl}mbbsCollege/uzbekistan/campaign/university/tma.png`;
const ssmi = `${imageBaseUrl}mbbsCollege/uzbekistan/campaign/university/ssmi.webp`;
const asmi = `${imageBaseUrl}mbbsCollege/uzbekistan/campaign/university/asmi.png`;
const bsmi = `${imageBaseUrl}mbbsCollege/uzbekistan/campaign/university/bsmi.webp`;
const ksmi = `${imageBaseUrl}mbbsCollege/uzbekistan/campaign/university/ksmi.png`;
const fsumf = `${imageBaseUrl}mbbsCollege/uzbekistan/campaign/university/fsu.jpeg`;
const nsmi = `${imageBaseUrl}mbbsCollege/uzbekistan/campaign/university/nsmi.webp`;
const tsumf = `${imageBaseUrl}mbbsCollege/uzbekistan/campaign/university/tsmu.webp`;
const usumf = `${imageBaseUrl}mbbsCollege/uzbekistan/campaign/university/usu.webp`;
const tpmi = `${imageBaseUrl}mbbsCollege/uzbekistan/campaign/university/tpmi.webp`;


// ---------------- Hero (campaign landing) ----------------
export const UZBEKISTAN_HERO = {
  tagline: "Your ambition. Our expertise. Confirmed admits.",
  title: "MBBS in Uzbekistan",
  titleHighlight: "Uzbekistan",
  description:
    "Build your medical career with confidence by pursuing MBBS in Uzbekistan, supported by expert guidance from Taksheela Institute of Education (TIE). Experience a smooth and well-planned journey towards studying medicine abroad.",
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
    <>Uzbekistan has become a preferred destination for Indian students looking for affordable and English-medium MBBS programs abroad. The course is typically structured over 6 years, including academic learning and compulsory clinical training, ensuring a balanced approach to theory and practical exposure.</>,
  second:
    <>Medical universities in Uzbekistan operate under strict regulations set by national authorities such as the Ministry of Health and higher education bodies. This ensures a well-structured and globally aligned curriculum for international students.</>,
  third:
    <>Many universities are recognised by international organisations such as <span className="text-[#00999E] font-bold">WHO and FAIMER</span>, making graduates eligible to appear for licensing exams in India, subject to <span className="text-[#00999E] font-bold">NMC guidelines</span>. With support from <span className="text-[#00999E] font-bold">Taksheela Institute of Education</span>, students can select recognised universities that meet global standards.</>,
  fourth:
    <>The medium of instruction in most universities is English, making it easier for Indian students to follow the curriculum. However, students are also introduced to local languages like Uzbek or Russian to communicate effectively during clinical training.</>,
  fifth: "",
};

// ---------------- Testimonials ----------------
export const UZBEKISTAN_TESTIMONIALS = [
  {
    name: "Piya Reddy",
    location: "Hyderabad",
    quote:
      "Partnering with Taksheela Institute of Education made my MBBS abroad journey simple and well-planned. From understanding the process to settling into Andijan State Medical Institute, every step felt guided and stress-free.",
    university: "Andijan State Medical Institute",
  },
  {
    name: "Riya Sharma",
    location: "Pune, Maharashtra",
    quote:
      "I was exploring different options for studying MBBS abroad when I came across Taksheela Institute of Education. From the very first interaction, their counselling team guided me with clarity and honesty, helping me understand my options beyond India. Today, as I begin my journey at Samarkand State Medical University, I feel confident about my decision. TIE supported me throughout-from counselling to application-making the entire process smooth and stress-free. I'm excited to move closer to my dream of becoming a doctor.",
    university: "Samarkand State Medical University",
  },
  {
    name: "Aarav Khan",
    location: "Delhi, India",
    quote:
      "Choosing Taksheela Institute of Education (TIE) for my MBBS abroad journey turned out to be one of the best decisions I've made. The team clearly explained every step-from eligibility to budgeting-which made the entire process much easier to understand. Studying at Bukhara State Medical University has been a rewarding experience so far. The learning environment is engaging, and I've been able to adjust to a completely new country and academic system with confidence. Thanks to the support from TIE, I feel more prepared and motivated than I initially expected.",
    university: "Bukhara State Medical University",
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
    Here&apos;s a quick snapshot for students planning to study MBBS in Uzbekistan with guidance from <span className="text-[#5dd4d9] font-bold">Taksheela Institute of Education</span>.
  </>
);

export const UZBEKISTAN_QUICK_FACTS = [
  {
    icon: "FaUserGraduate",
    iconBg: "bg-[#bfdbfe]",
    iconColor: "text-[#1e40af]",
    title: "Number of Indian Students",
    desc: "16,000+ (approx.)",
  },
  {
    icon: "FaClock",
    iconBg: "bg-[#bfdbfe]",
    iconColor: "text-[#1e40af]",
    title: "Course Duration",
    desc: "6 years (including internship)",
  },
  {
    icon: "FaCalendarAlt",
    iconBg: "bg-[#fed7aa]",
    iconColor: "text-[#c2410c]",
    title: "Intakes",
    desc: "September (primary) & February (secondary)",
  },
  {
    icon: "FaClipboardCheck",
    iconBg: "bg-[#d1fae5]",
    iconColor: "text-[#047857]",
    title: "Eligibility",
    desc: "Minimum 50% in PCB (40% for reserved categories), 17+ years",
  },
  {
    icon: "FaBook",
    iconBg: "bg-[#e0e7ff]",
    iconColor: "text-[#3730a3]",
    title: "Medium of Instruction",
    desc: "English (with local language exposure)",
  },
  {
    icon: "FaRubleSign",
    iconBg: "bg-[#fce7f3]",
    iconColor: "text-[#9d174d]",
    title: "Tuition Fees",
    desc: "₹2.7 – ₹4.5 Lakhs per year",
  },
  {
    icon: "FaGlobe",
    iconBg: "bg-[#d1fae5]",
    iconColor: "text-[#047857]",
    title: "Cost of Living",
    desc: "Budget-friendly, varies by city and lifestyle",
  },
  {
    icon: "FaUniversity",
    iconBg: "bg-[#fef3c7]",
    iconColor: "text-[#b45309]",
    title: "Accreditations",
    desc: "WHO, NMC, FAIMER, UNESCO, WDOMS",
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
    Uzbekistan is a preferred option for Indian students due to affordability, quality education, and globally aligned medical programs. With support from <span className="text-[#00999E] font-bold">Taksheela Institute of Education</span>, students can select the right university with confidence.
  </>
);

export const UZBEKISTAN_WHY_CHOOSE_CARDS = [
  {
    icon: "FaRubleSign",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "Global Recognition & Accreditation",
    desc: "Medical universities in Uzbekistan follow internationally accepted standards and are recognised by global medical bodies. This ensures that graduates can pursue further opportunities globally, including India, after qualifying required exams.",
  },
  {
    icon: "FaUniversity",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "Affordable Education & Living",
    desc: "Compared to private medical colleges in India, Uzbekistan offers cost-effective MBBS programs without compromising on education quality. With guidance from TIE, students can find the best universities within their budget.",
  },
  {
    icon: "FaClipboardCheck",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "English-Medium Programs",
    desc: "Most universities offer MBBS courses entirely in English, reducing language barriers for Indian students. Basic local language training is provided to help during clinical interactions.",
  },
  {
    icon: "FaHospital",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "Strong Clinical Exposure",
    desc: "Students gain hands-on experience through clinical training in affiliated hospitals. This helps in developing practical skills and real-world medical understanding.",
  },
  {
    icon: "FaHospital",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "Modern Infrastructure",
    desc: "Universities are equipped with advanced labs, simulation centres, and updated learning resources, ensuring students receive quality education aligned with global standards.",
  },
  {
    icon: "FaHospital",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "Safe & Student-Friendly Environment",
    desc: "Uzbekistan offers a comfortable and secure environment for international students. Cultural similarities, availability of Indian food, and supportive communities make it easier to adapt.",
  },
];

// ---------------- Eligibility Criteria ----------------
export const UZBEKISTAN_ELIGIBILITY_INTRO = (
  <>
    Students planning to pursue <span className="text-[#00999E] font-bold">MBBS in Uzbekistan</span> must meet the following requirements.
  </>
);

export const UZBEKISTAN_ELIGIBILITY_CRITERIA = [
  {
    title: "Academic Background",
    titleHighlight: true,
    desc: "Candidates must have completed 10+2 in the science stream with Physics, Chemistry, and Biology.",
  },
  {
    title: "Academic Qualification",
    titleHighlight: true,
    desc: "A minimum of 50% aggregate in PCB is required for general category students, while 40% is applicable for reserved categories.",
  },
  {
    title: "Age Requirement",
    titleHighlight: true,
    desc: "Applicants must be at least 17 years old by 31st December of the admission year.",
  },
  {
    title: "NEET Qualification",
    titleHighlight: true,
    desc: "Qualifying NEET is mandatory as per Indian regulations. Students must meet the minimum cutoff score of the respective year.",
  },
  {
    title: "Documentation",
    titleHighlight: true,
    desc: "Students must submit all required documents as per university guidelines. This includes translation and legalisation procedures. Taksheela Institute of Education (TIE) provides complete assistance in document preparation and verification to ensure a smooth admission process.",
  },
];

// ---------------- Admission Process Steps ----------------
export const UZBEKISTAN_ADMISSION_STEPS = [
  {
    stepLabel: "Step 1",
    title: "Personalised Counselling Session",
    desc: "Your journey begins with a one-on-one counselling session at Taksheela Institute of Education, where our experts understand your academic background, career goals, and preferred destination to guide you in the right direction.",
    icon: "FaUserFriends",
  },
  {
    stepLabel: "Step 2",
    title: "Profile Assessment & University Shortlisting",
    desc: "At TIE, your profile is carefully evaluated based on academics, NEET score, budget, and preferences. Based on this, we shortlist the most suitable NMC-recognised universities for you.",
    icon: "FaListAlt",
  },
  {
    stepLabel: "Step 3",
    title: "Application Submission",
    desc: "Our admissions team handles the complete application process on your behalf. From filling out forms to submitting documents (including translations), everything is managed seamlessly.",
    icon: "FaFileSignature",
  },
  {
    stepLabel: "Step 4",
    title: "Admission Letter Issuance",
    desc: "Once your application is reviewed and approved by the university, you will receive an official admission letter confirming your MBBS seat.",
    icon: "FaCheckCircle",
  },
  {
    stepLabel: "Step 5",
    title: "Fee Payment & Document Legalisation",
    desc: "After confirmation, the initial tuition fee is paid as per university guidelines. Simultaneously, Taksheela Institute of Education (TIE) assists in getting your documents properly apostilled through the Ministry of External Affairs (MEA), India.",
    icon: "FaPassport",
  },
  {
    stepLabel: "Step 6",
    title: "Visa Processing",
    desc: "Our dedicated visa team supports you throughout the visa process, including obtaining the invitation letter, completing visa formalities, and ensuring compliance with embassy requirements.",
    icon: "FaPassport",
  },
  {
    stepLabel: "Step 7",
    title: "Pre-Departure Assistance",
    desc: "Before departure, TIE provides complete support including travel arrangements, checklist guidance, and a detailed pre-departure briefing to prepare you for your journey.",
    icon: "FaPlaneDeparture",
  },
  {
    stepLabel: "Step 8",
    title: "Post-Arrival Support",
    desc: "After reaching Uzbekistan, our local support team ensures a smooth transition by assisting with airport pickup, accommodation, and settling into university life.",
    icon: "FaHandsHelping",
  },
];

// ---------------- Documents Required ----------------
export const UZBEKISTAN_DOCUMENTS_INTRO = (
  <>
    To ensure a smooth admission process, students must prepare and organise all necessary documents in advance. <span className="text-[#00999E] font-bold">Taksheela Institute of Education</span> guides students at every step to ensure proper documentation and verification.
    <br />
    <br />
    <span className="font-semibold text-gray-900">Essential documents include:</span>
    <br />
    <br />
    All documents must be submitted in the required format, translated (if needed), and properly attested as per university and government regulations. With the assistance of <span className="text-[#00999E] font-bold">TIE</span>, students can complete this process without confusion or delays.
  </>
);

export const UZBEKISTAN_DOCUMENTS_REQUIRED = [
  { title: "10th & 12th Mark Sheets", icon: "FaFileAlt" },
  { title: "NEET scorecard (valid as per current guidelines)", icon: "FaStethoscope" },
  { title: "Valid passport (minimum 6 months validity)", icon: "FaPassport" },
  { title: "Birth certificate", icon: "FaFileAlt" },
  { title: "Passport-size photographs (as per specifications)", icon: "FaCamera" },
  { title: "Medical test reports (including required health screenings)", icon: "FaFileAlt" },
  { title: "Medical fitness certificate", icon: "FaFileAlt" },
  { title: "University admission letter", icon: "FaFileAlt" },
  { title: "Official invitation letter", icon: "FaFileAlt" },
  { title: "First-year tuition fee payment receipt (if applicable)", icon: "FaFileAlt" },
];

// ---------------- Universities ----------------
export const UZBEKISTAN_UNIVERSITIES = [
  {
    id: "tma",
    name: "Tashkent Medical Academy (Termez Branch)",
    founded: "2005 (Branch) / 1919 (Main)",
    city: "Termez",
    fees: "$3,500 – $5,000",
    logoIndex: tma,
    imageKey: tma,
  },
  {
    id: "ssmi",
    name: "Samarkand State Medical Institute",
    founded: "1930",
    city: "Samarkand",
    fees: "$3,500 – $5,500",
    logoIndex: ssmi,
    imageKey: ssmi,
  },
  {
    id: "asmi",
    name: "Andijan State Medical Institute",
    founded: "1955",
    city: "Andijan",
    fees: "$3,000 – $4,500",
    logoIndex: asmi,
    imageKey: asmi,
  },
  {
    id: "bsmi",
    name: "Bukhara State Medical Institute",
    founded: "1990",
    city: "Bukhara",
    fees: "$3,500 – $5,000",
    logoIndex: bsmi,
    imageKey: bsmi,
  },
  {
    id: "ksmi",
    name: "Karakalpak State Medical Institute / Karakalpak State University (Medical Faculty)",
    founded: "~1976",
    city: "Nukus",
    fees: "$3,000 – $4,000",
    logoIndex: ksmi,
    imageKey: ksmi,
  },
  {
    id: "fsumf",
    name: "Fergana State University (Medical Faculty)",
    founded: "1930",
    city: "Fergana",
    fees: "$3,000 – $4,000",
    logoIndex: fsumf,
    imageKey: fsumf,
  },
  {
    id: "nsmi",
    name: "Namangan State Medical Institute",
    founded: "2019",
    city: "Namangan",
    fees: "$3,000 – $4,500",
    logoIndex: nsmi,
    imageKey: nsmi,
  },
  {
    id: "tsumf",
    name: "Tashkent State Medical University / Tashkent Medical Academy (Main Campus)",
    founded: "1919",
    city: "Tashkent",
    fees: "$4,000 – $6,000",
    logoIndex: tsumf,
    imageKey: tsumf,
  },
  {
    id: "usumf",
    name: "Urgench State University (Medical Faculty)",
    founded: "1992",
    city: "Urgench",
    fees: "$3,000 – $4,000",
    logoIndex: usumf,
    imageKey: usumf,
  },
  {
    id: "tpmi",
    name: "Tashkent Pediatric Medical Institute",
    founded: "1972",
    city: "Tashkent",
    fees: "$3,500 – $5,500",
    logoIndex: tpmi,
    imageKey: tpmi,
  },
];

// ---------------- FAQ ----------------
export const UZBEKISTAN_FAQ_ITEMS = [
  {
    question: "Is Indian food available in Uzbekistan?",
    answer:
      "Yes, Indian students will find familiar food options in Uzbekistan, especially in major cities like Tashkent. There are Indian restaurants, grocery stores, and campus food facilities catering to Indian tastes. With the guidance of Taksheela Institute of Education, students are also assisted in choosing universities where Indian food availability is convenient, making the transition smoother.",
    highlightTerms: ["Indian food", "Tashkent", "Taksheela Institute of Education"],
  },
  {
    question: "What is the duration of MBBS in Uzbekistan?",
    answer:
      "The MBBS program in Uzbekistan typically spans around 6 years. This includes approximately 5 years of academic learning combined with clinical exposure, followed by a mandatory 1-year internship at affiliated hospitals. At TIE (Taksheela Institute of Education), students receive complete clarity on course structure before enrollment.",
    highlightTerms: ["6 years", "1-year internship", "TIE"],
  },
  {
    question: "What is the age requirement for MBBS admission in Uzbekistan?",
    answer:
      "Students applying for MBBS in Uzbekistan must be at least 17 years old by the end of the admission year. While there is generally no strict upper age restriction, specific university policies may vary. Taksheela Institute of Education (TIE) ensures students meet all eligibility requirements before proceeding with applications.",
    highlightTerms: ["17 years old", "Taksheela Institute of Education (TIE)"],
  },
  {
    question: "What are the MBBS fees in Uzbekistan?",
    answer:
      "The cost of studying MBBS in Uzbekistan is considered budget-friendly for Indian students. On average, tuition fees range between USD 3,000 to USD 5,000 per year, depending on the university. Along with affordable living expenses, this makes Uzbekistan a cost-effective destination. Taksheela Institute of Education (TIE) helps students choose universities that offer the best value for their investment.",
    highlightTerms: ["USD 3,000 to USD 5,000 per year", "budget-friendly", "TIE"],
  },
  {
    question: "Is Uzbekistan safe for Indian students?",
    answer:
      "Yes, Uzbekistan is regarded as a safe and student-friendly country for Indian aspirants. The environment is secure, with well-managed campus facilities and accommodation options. Through TIE (Taksheela Institute of Education), students are guided towards universities and cities that ensure a comfortable and secure living experience.",
    highlightTerms: ["safe and student-friendly", "secure", "TIE"],
  },
  {
    question: "Is an MBBS degree from Uzbekistan valid in India?",
    answer:
      "Yes, many medical universities in Uzbekistan follow the guidelines set by the National Medical Commission (NMC). Degrees obtained from recognised institutions are valid in India, provided students qualify the required licensing exams such as FMGE/NExT. Taksheela Institute of Education ensures students are enrolled in approved universities to safeguard their future.",
    highlightTerms: ["National Medical Commission (NMC)", "FMGE/NExT", "approved universities"],
  },
  {
    question: "Is studying MBBS in Uzbekistan worth it?",
    answer:
      "Pursuing MBBS in Uzbekistan is a practical and rewarding option for Indian students. It offers quality education, global recognition, and modern clinical exposure at an affordable cost. With expert guidance from Taksheela Institute of Education (TIE), students can make informed decisions and build a strong medical career pathway.",
    highlightTerms: ["quality education", "global recognition", "TIE"],
  },
];
