import { imageBaseUrl } from "@/utils/config";

// Reuse main Kazakhstan college imagery (same CDN paths as mbbs.js)
const kz1 = `${imageBaseUrl}mbbsCollege/kazakhstan/kz1.png`;
const kz2 = `${imageBaseUrl}mbbsCollege/kazakhstan/kz2.png`;
const kz3 = `${imageBaseUrl}mbbsCollege/kazakhstan/kz3.png`;
const kz4 = `${imageBaseUrl}mbbsCollege/kazakhstan/kz4.png`;
const kz5 = `${imageBaseUrl}mbbsCollege/kazakhstan/kz5.png`;
const kz6 = `${imageBaseUrl}mbbsCollege/kazakhstan/kz6.png`;
const kz7 = `${imageBaseUrl}mbbsCollege/kazakhstan/kz7.png`;
const kz8 = `${imageBaseUrl}mbbsCollege/kazakhstan/kz8.png`;
const kz9 = `${imageBaseUrl}mbbsCollege/kazakhstan/kz9.png`;
const kz10 = `${imageBaseUrl}mbbsCollege/kazakhstan/kz10.png`;

// Hero: use confirmed CDN asset; replace with mbbsCollege/kazakhstan/campaign/mbbs_kazakhstan.png when uploaded
// const kazakhstanHeroImg = `${imageBaseUrl}mbbsCollege/kazakhstan/kz6.png`;

export const KAZAKHSTAN_HERO_IMAGE_URL = `${imageBaseUrl}mbbsCollege/kazakhstan/campaign/mbbs_kazakhstan.png`;


// ---------------- Hero (campaign landing) ----------------
export const KAZAKHSTAN_HERO = {
  tagline: "Your ambition. Our expertise. Confirmed admits.",
  title: "Study MBBS in Kazakhstan with expert guidance",
  titleHighlight: "Kazakhstan",
  description:
    <>Build your medical career by pursuing <span className="text-[#5dd4d9]">MBBS in Kazakhstan</span> with expert guidance from <span className="text-[#5dd4d9]">Taksheela Institute of Education (TIE)</span>. Our experienced study-abroad consultants provide end-to-end support—from university selection to admission—helping you take confident steps toward your future in medicine.</>,
  stats: [
    { value: <span className="text-[#5dd4d9]">10+ years</span>, label: "of counselling experience" },
    { value: <span className="text-[#5dd4d9]">Trusted</span>, label: "by 1M+ aspirants" },
    { value: <span className="text-[#5dd4d9]">Step-by-step</span>, label: "admission support" },
  ],
  ctaText: "BOOK YOUR FREE COUNSELLING",
};

// ---------------- Overview Content ----------------
export const KAZAKHSTAN_OVERVIEW_CONTENT = {
  first:
    <>
      <span className="text-[#00999E] font-bold">MBBS in Kazakhstan</span> has emerged as a preferred option for Indian students seeking affordable and globally recognised medical education. With support from{" "}
      <span className="text-[#00999E] font-bold">Taksheela Institute of Education (TIE)</span>, students can explore well-established universities that offer quality academic training, practical exposure, and international recognition.
    </>,
  second:
    <>
      Kazakhstan hosts a growing number of Indian students each year, attracted by its <span className="text-[#00999E] font-bold">cost-effective education system</span>, <span className="text-[#00999E] font-bold">modern infrastructure</span>, and{" "}
      <span className="text-[#00999E] font-bold">globally accepted medical degrees</span>. Many universities follow structured programs aligned with <span className="text-[#00999E] font-bold">international standards</span>, helping students build strong clinical and theoretical foundations.
    </>,
  third:
    <>
      The <span className="text-[#00999E] font-bold">MBBS program in Kazakhstan</span> typically spans <span className="text-[#00999E] font-bold">5+1 years</span>, including academic learning and mandatory internship training. Medical universities are recognised by global bodies such as{" "}
      <span className="text-[#00999E] font-bold">WHO</span>, <span className="text-[#00999E] font-bold">NMC</span>, <span className="text-[#00999E] font-bold">WDOMS</span>, <span className="text-[#00999E] font-bold">FAIMER</span>, and <span className="text-[#00999E] font-bold">ECFMG</span>, ensuring wider career opportunities after graduation.
    </>,
  fourth: "",
  fifth: "",
};

// ---------------- Testimonials ----------------
export const KAZAKHSTAN_WHAT_STUDENTS_SAY_INTRO = (
  <>
    Over the years, <span className="text-[#00999E] font-bold">Taksheela Institute of Education</span> has supported many Indian students exploring{" "}
    <span className="text-[#00999E] font-bold">MBBS in Kazakhstan</span> with structured counselling and admission guidance. Here are experiences from students who worked with us for{" "}
    <span className="text-[#00999E] font-bold">medical universities in Kazakhstan</span>.
  </>
);

export const KAZAKHSTAN_TESTIMONIALS = [
  {
    name: "Aditya Malhotra",
    location: "Delhi",
    university: "ASTANA MEDICAL UNIVERSITY, KAZAKHSTAN",
    quote:
      "My journey with Taksheela Institute of Education (TIE) has been extremely well-managed and stress-free. From the very beginning, their team guided me step-by-step—right from selecting the right university to completing all the formalities. The entire process was smooth, transparent, and professionally handled. I always felt supported and informed at every stage. I would confidently recommend TIE to any student planning to pursue MBBS abroad.",
  },
    {
    name: "Rohan Mehta",
    location: "Mumbai",
    university: "Al Farabi Kazakh National University, Kazakhstan",
    quote:
      "I would like to sincerely thank Taksheela Institute of Education for their consistent support and expert guidance throughout my admission process. From shortlisting universities to visa processing, everything was handled in a clear and professional manner. Their structured approach and transparency helped me secure my MBBS admission at Al Farabi Kazakh National University without any confusion or delays. The entire experience with TIE has been very reassuring.",
  },
  {
    name: "Kritika Jain",
    location: "Delhi",
    university: "South Kazakh Medical Academy, Kazakhstan",
    quote:
      "My experience with Taksheela Institute of Education (TIE) has been truly positive and smooth. They supported me through every stage—from choosing the right country and university to completing my admission and travel arrangements. Whether it was visa assistance, accommodation guidance, or financial planning, everything was handled efficiently. The team was always approachable and supportive, making my MBBS abroad journey comfortable and hassle-free.",
  },
];

// ---------------- Quick Facts ----------------
export const KAZAKHSTAN_QUICK_FACTS_INTRO = (
  <>
    Get a quick overview of studying <span className="text-[#00999E] font-bold">MBBS in Kazakhstan</span> with guidance from <span className="text-[#00999E] font-bold">Taksheela Institute of Education (TIE)</span>.
  </>
);

export const KAZAKHSTAN_QUICK_FACTS = [
  {
    icon: "FaUserGraduate",
    iconBg: "bg-[#bfdbfe]",
    iconColor: "text-[#1e40af]",
    title: "Number of Indian Students",
    desc: (
      <>
        Kazakhstan hosts a growing community of <span className="text-[#00999E] font-bold">international medical students</span>, including many from India, in English-medium programs across major cities.
      </>
    ),
  },
  {
    icon: "FaClock",
    iconBg: "bg-[#bfdbfe]",
    iconColor: "text-[#1e40af]",
    title: "Course Duration",
    desc: (
      <>
        MBBS in Kazakhstan is commonly a <span className="text-[#00999E] font-bold">5–6 year</span> program, combining theory, labs, and clinical training as per the university curriculum.
      </>
    ),
  },
  {
    icon: "FaCalendarAlt",
    iconBg: "bg-[#fed7aa]",
    iconColor: "text-[#c2410c]",
    title: "Admission Intakes",
    desc: (
      <>
        Many universities offer a <span className="text-[#00999E] font-bold">September/October</span> intake; some may open <span className="text-[#00999E] font-bold">spring</span> seats—confirm with your shortlisted university.
      </>
    ),
  },
  {
    icon: "FaClipboardCheck",
    iconBg: "bg-[#d1fae5]",
    iconColor: "text-[#047857]",
    title: "Eligibility",
    desc: (
      <>
        Typically <span className="text-[#00999E] font-bold">50% in PCB</span> in 10+2 (40% for reserved categories where applicable), minimum age <span className="text-[#00999E] font-bold">17</span>, and{" "}
        <span className="text-[#00999E] font-bold">NEET</span> as required for Indian students planning to practise in India later.
      </>
    ),
  },
  {
    icon: "FaBook",
    iconBg: "bg-[#e0e7ff]",
    iconColor: "text-[#3730a3]",
    title: "Medium of Instruction",
    desc: (
      <>
        Several universities offer <span className="text-[#00999E] font-bold">English-medium</span> MBBS; local language support may be included for clinical interactions.
      </>
    ),
  },
  {
    icon: "FaRubleSign",
    iconBg: "bg-[#fce7f3]",
    iconColor: "text-[#9d174d]",
    title: "Tuition Fees",
    desc: (
      <>
        Annual tuition often falls roughly in the <span className="text-[#00999E] font-bold">₹2.25 lakh–₹5.25 lakh</span> range depending on the institution and program.
      </>
    ),
  },
  {
    icon: "FaGlobe",
    iconBg: "bg-[#d1fae5]",
    iconColor: "text-[#047857]",
    title: "Cost of Living",
    desc: (
      <>
        Living costs vary by city; students typically budget for <span className="text-[#00999E] font-bold">accommodation, food, travel, and insurance</span> in addition to tuition.
      </>
    ),
  },
  {
    icon: "FaUniversity",
    iconBg: "bg-[#fef3c7]",
    iconColor: "text-[#b45309]",
    title: "Recognition",
    desc: (
      <>
        Shortlist universities carefully for <span className="text-[#00999E] font-bold">WHO/WDOMS</span> listing and alignment with your <span className="text-[#00999E] font-bold">NMC</span> goals—Taksheela helps you compare options.
      </>
    ),
  },
];

export const KAZAKHSTAN_QUICK_FACTS_SECTION = {
  quickFacts: KAZAKHSTAN_QUICK_FACTS,
  countryName: "Kazakhstan",
  introParagraph: KAZAKHSTAN_QUICK_FACTS_INTRO,
};

// ---------------- Why Choose Kazakhstan ----------------
export const KAZAKHSTAN_WHY_CHOOSE_INTRO = (
  <>
    Choosing <span className="text-[#00999E] font-bold">MBBS in Kazakhstan</span> offers several advantages for Indian students. With the support of{" "}
    <span className="text-[#00999E] font-bold">Taksheela Institute of Education (TIE)</span>, students can access the right universities and build a strong foundation for their medical careers.
  </>
);

export const KAZAKHSTAN_WHY_CHOOSE_CARDS = [
  {
    icon: "FaRubleSign",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "Affordable Medical Education",
    desc: "Compared to private medical colleges in India, where costs can exceed ₹80 lakh, MBBS in Kazakhstan can be completed within approximately ₹20–₹35 lakh, making it a budget-friendly option.",
  },
  {
    icon: "FaHospital",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "Safe & Student-Friendly Environment",
    desc: "Kazakhstan offers a secure and welcoming environment for international students, with well-equipped hostels, Indian food options, and student support services.",
  },
  {
    icon: "FaUniversity",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "No Language Barrier",
    desc: "Most universities offer English-medium MBBS programs, ensuring smooth academic learning. Students are also introduced to basic local languages for clinical communication.",
  },
  {
    icon: "FaClipboardCheck",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "Simple Admission Process",
    desc: "Admissions are transparent and merit-based, with no capitation fees. TIE ensures a smooth, step-by-step admission journey for all students.",
  },
  {
    icon: "FaUniversity",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "Globally Recognised Degrees",
    desc: "Medical universities in Kazakhstan are recognised by WHO, NMC, WDOMS, FAIMER, and ECFMG, allowing graduates to pursue careers globally.",
  },
  {
    icon: "FaHospital",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "Strong Career Opportunities",
    desc: "Graduates can appear for FMGE/NExT and explore opportunities in India or abroad, depending on licensing requirements.",
  },
];

// ---------------- Eligibility Criteria ----------------
export const KAZAKHSTAN_ELIGIBILITY_INTRO = (
  <>
    To pursue <span className="text-[#00999E] font-bold">MBBS in Kazakhstan</span>, students must meet the following requirements.{" "}
    <span className="text-[#00999E] font-bold">Taksheela Institute of Education (TIE)</span> assists students in verifying eligibility and preparing applications.
  </>
);

export const KAZAKHSTAN_ELIGIBILITY_CRITERIA = [
  {
    title: "Academic Background",
    titleHighlight: true,
    desc: "Students must complete 10+2 with Physics, Chemistry, and Biology (PCB).",
  },
  {
    title: "Minimum Marks",
    titleHighlight: true,
    desc: "General Category: Minimum 50% in PCB. Reserved Category: Minimum 40% in PCB.",
  },
  {
    title: "Age Requirement",
    titleHighlight: true,
    desc: "Students must be at least 17 years old by 31st December of the admission year.",
  },
  {
    title: "NEET Qualification",
    titleHighlight: true,
    desc: "Qualifying NEET-UG is required for Indian students planning to practise in India.",
  },
  {
    title: "Documentation",
    titleHighlight: true,
    desc: "Students must prepare essential documents such as academic certificates, passport, NEET scorecard, medical reports, and admission-related paperwork.",
  },
];

// ---------------- Admission Process Steps ----------------
/** Intro paragraph for Admission Process section (replaces default copy when passed to AdmissionProcessSection). */
export const KAZAKHSTAN_ADMISSION_PROCESS_INTRO = (
  <>
    The admission process for <span className="text-[#5dd4d9] font-bold">MBBS in Kazakhstan</span> is simple and streamlined with{" "}
    <span className="text-[#5dd4d9] font-bold">Taksheela Institute of Education (TIE)</span>:
  </>
);

export const KAZAKHSTAN_ADMISSION_STEPS = [
  {
    stepLabel: "Step 1",
    title: "Expert Counselling",
    desc: "TIE conducts a personalised session to understand your academic background, goals, and preferences.",
    icon: "FaUserFriends",
  },
  {
    stepLabel: "Step 2",
    title: "Profile Evaluation & Shortlisting",
    desc: "Our experts evaluate your profile and shortlist suitable universities based on eligibility and budget.",
    icon: "FaListAlt",
  },
  {
    stepLabel: "Step 3",
    title: "Application Submission",
    desc: "TIE handles documentation, verification, and submission of your application to the chosen university.",
    icon: "FaFileSignature",
  },
  {
    stepLabel: "Step 4",
    title: "Admission Confirmation",
    desc: "Receive and accept your official admission letter to secure your seat.",
    icon: "FaCheckCircle",
  },
  {
    stepLabel: "Step 5",
    title: "Document Legalisation",
    desc: "We assist with apostille and document verification as per official requirements.",
    icon: "FaStamp",
  },
  {
    stepLabel: "Step 6",
    title: "Visa Application",
    desc: "TIE provides complete support for visa processing, including documentation and compliance.",
    icon: "FaPassport",
  },
  {
    stepLabel: "Step 7",
    title: "Pre-Departure Support",
    desc: "Get guidance on travel, forex, accommodation, and checklist before departure.",
    icon: "FaPlaneDeparture",
  },
  {
    stepLabel: "Step 8",
    title: "Post-Arrival Assistance",
    desc: "Our local support team assists with airport pickup, hostel setup, SIM card, and university registration.",
    icon: "FaHandsHelping",
  },
];



// ---------------- Documents Required ----------------
export const KAZAKHSTAN_DOCUMENTS_INTRO = (
  <>
    During the admission process, students are required to submit a set of essential documents for verification and processing. These documents are necessary to ensure smooth admission, visa approval, and university enrolment. With the guidance of{" "}
    <span className="text-[#00999E] font-bold">Taksheela Institute of Education (TIE)</span>, students receive complete assistance in preparing and organising all required paperwork.
    <br />
    <br />
    <span className="font-semibold text-gray-900">Key documents include:</span>
  </>
);

export const KAZAKHSTAN_DOCUMENTS_REQUIRED = [
  { title: "Valid Passport (with a minimum validity of 18 months)", icon: "FaPassport" },
  { title: "Class 10th and 12th Mark Sheets", icon: "FaFileAlt" },
  { title: "NEET Scorecard", icon: "FaStethoscope" },
  { title: "Passport-size Photographs (as per university specifications)", icon: "FaCamera" },
];

// ---------------- Universities (logos use same CDN asset as hero card image where no separate logo) ----------------
export const KAZAKHSTAN_UNIVERSITIES = [
  {
    id: "ksmu",
    name: "Karaganda State Medical University",
    founded: "1950",
    city: "Karaganda",
    fees: "₹2,25,000 - ₹5,25,000 / year (approx.)",
    logoIndex: kz1,
    imageKey: kz1,
  },
  {
    id: "amu",
    name: "Astana Medical University",
    founded: "1997",
    city: "Nur-Sultan",
    fees: "₹2,25,000 - ₹5,25,000 / year (approx.)",
    logoIndex: kz2,
    imageKey: kz2,
  },
  {
    id: "ssmu",
    name: "Semey State Medical University",
    founded: "1953",
    city: "Semey",
    fees: "₹2,25,000 - ₹5,25,000 / year (approx.)",
    logoIndex: kz3,
    imageKey: kz3,
  },
  {
    id: "wkmu",
    name: "West Kazakhstan Marat Ospanov State Medical University",
    founded: "1988",
    city: "Aktobe",
    fees: "₹2,25,000 - ₹5,25,000 / year (approx.)",
    logoIndex: kz4,
    imageKey: kz4,
  },
  {
    id: "skma",
    name: "South Kazakhstan Medical Academy",
    founded: "1979",
    city: "Shymkent",
    fees: "₹2,25,000 - ₹5,25,000 / year (approx.)",
    logoIndex: kz5,
    imageKey: kz5,
  },
  {
    id: "knmu",
    name: "Kazakh National Medical University",
    founded: "1931",
    city: "Almaty",
    fees: "₹2,25,000 - ₹5,25,000 / year (approx.)",
    logoIndex: kz6,
    imageKey: kz6,
  },
  {
    id: "koksu",
    name: "Kokshetau State University named after Shokan Ualikhanov",
    founded: "1962",
    city: "Kokshetau",
    fees: "₹2,25,000 - ₹5,25,000 / year (approx.)",
    logoIndex: kz7,
    imageKey: kz7,
  },
  {
    id: "kmu",
    name: "Karaganda Medical University",
    founded: "1950",
    city: "Karaganda",
    fees: "₹2,25,000 - ₹5,25,000 / year (approx.)",
    logoIndex: kz8,
    imageKey: kz8,
  },
  {
    id: "krmu",
    name: "Kazakh-Russian Medical University",
    founded: "1992",
    city: "Almaty",
    fees: "₹2,25,000 - ₹5,25,000 / year (approx.)",
    logoIndex: kz9,
    imageKey: kz9,
  },
  {
    id: "nksu",
    name: "North Kazakhstan State University named after M. Kozybayev",
    founded: "1937",
    city: "Petropavl",
    fees: "₹2,25,000 - ₹5,25,000 / year (approx.)",
    logoIndex: kz10,
    imageKey: kz10,
  },
];

//---------------- FAQ Section ----------------
export const KAZAKHSTAN_FAQ_ITEMS = [
  {
    question: "Is Kazakhstan safe for international students?",
    answer:
      "Yes, Kazakhstan is considered a safe destination for Indian students. The country maintains a stable environment with relatively low crime rates. Universities also provide secure campus facilities, hostels, and student support services. With Taksheela Institute of Education (TIE), students are guided toward safe and student-friendly university options.",
    highlightTerms: ["safe destination for Indian students", "Taksheela Institute of Education (TIE)", "student support services"],
  },
  {
    question: "Is there a language barrier while studying MBBS in Kazakhstan?",
    answer:
      "No, most medical universities in Kazakhstan offer English-medium programs, making it convenient for Indian students. Additionally, students are introduced to basic local languages for clinical practice. TIE ensures you choose universities where communication is not a barrier.",
    highlightTerms: ["English-medium programs", "clinical practice", "TIE"],
  },
  {
    question: "Is MBBS in Kazakhstan valid in India?",
    answer:
      "Yes, an MBBS degree from Kazakhstan is valid in India, provided students meet the guidelines set by the National Medical Commission (NMC). Graduates are required to clear the FMGE/NExT exam to practise in India. Taksheela Institute of Education (TIE) helps students select NMC-compliant universities.",
    highlightTerms: ["National Medical Commission (NMC)", "FMGE/NExT exam", "Taksheela Institute of Education (TIE)"],
  },
  {
    question: "Which is the top medical university in Kazakhstan?",
    answer:
      "Kazakhstan has several reputed medical universities known for quality education and infrastructure. Among them, leading institutions in cities like Almaty are highly preferred by Indian students due to their global recognition, experienced faculty, and clinical exposure. TIE helps shortlist the best-fit universities based on your profile.",
    highlightTerms: ["Almaty", "global recognition", "clinical exposure"],
  },
  {
    question: "How is the climate in Kazakhstan?",
    answer:
      "Kazakhstan has a continental climate with cold winters and warm summers. Winter temperatures can drop significantly, especially in northern regions, while summers are generally pleasant to warm. Students are guided by TIE on how to prepare for seasonal conditions before departure.",
    highlightTerms: ["continental climate", "northern regions", "TIE"],
  },
  {
    question: "What are the advantages of studying MBBS in Kazakhstan?",
    answerIntro: "Pursuing MBBS in Kazakhstan offers multiple benefits such as:",
    answerBullets: [
      "Affordable tuition fees",
      "Internationally recognised degrees",
      "Modern infrastructure and practical training",
      "English-medium education",
      "Exposure to diverse cultures",
      "Global career opportunities",
    ],
    answerClosing:
      "With Taksheela Institute of Education (TIE), students can maximise these advantages through expert guidance and support.",
    highlightTerms: [ "MBBS in Kazakhstan", "Taksheela Institute of Education (TIE)", "expert guidance and support"],
  },
];
