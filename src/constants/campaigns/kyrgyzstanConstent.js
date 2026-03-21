import { imageBaseUrl } from "@/utils/config";

const ky1 = `${imageBaseUrl}mbbsCollege/kyrgyzstan/ky1.png`;
const ky2 = `${imageBaseUrl}mbbsCollege/kyrgyzstan/ky2.png`;
const ky3 = `${imageBaseUrl}mbbsCollege/kyrgyzstan/ky3.png`;
const ky4 = `${imageBaseUrl}mbbsCollege/kyrgyzstan/ky4.png`;
const ky5 = `${imageBaseUrl}mbbsCollege/kyrgyzstan/ky5.png`;
const ky6 = `${imageBaseUrl}mbbsCollege/kyrgyzstan/ky6.png`;
const ky7 = `${imageBaseUrl}mbbsCollege/kyrgyzstan/ky7.png`;
const ky8 = `${imageBaseUrl}mbbsCollege/kyrgyzstan/ky8.png`;
const ky9 = `${imageBaseUrl}mbbsCollege/kyrgyzstan/ky9.png`;
const ky10 = `${imageBaseUrl}mbbsCollege/kyrgyzstan/ky10.png`;

export const KYRGYZSTAN_HERO = {
  tagline: "Your ambition. Our expertise. Confirmed admits.",
  title: "Study MBBS in Kyrgyzstan with expert guidance",
  titleHighlight: "Kyrgyzstan",
  description:
    "Build your medical career with MBBS in Kyrgyzstan under the guidance of Taksheela Institute of Education. From university shortlisting to admission support, our team helps you make informed decisions at every step.",
  stats: [
    { value: <span className="text-[#5dd4d9]">10+ years</span>, label: "of counselling experience" },
    { value: <span className="text-[#5dd4d9]">Trusted</span>, label: "by 1M+ aspirants" },
    { value: <span className="text-[#5dd4d9]">Step-by-step</span>, label: "admission support" },
  ],
  ctaText: "BOOK YOUR FREE COUNSELLING",
};

export const KYRGYZSTAN_OVERVIEW_CONTENT = {
  first:
    <>
      <span className="text-[#00999E] font-bold">MBBS in Kyrgyzstan</span> is a practical option for Indian students looking for affordable medical education and globally recognised degrees.
    </>,
  second:
    <>
      Many universities in Kyrgyzstan offer <span className="text-[#00999E] font-bold">English-medium medical programs</span> with clinical exposure and student support facilities.
    </>,
  third:
    <>
      The program is generally <span className="text-[#00999E] font-bold">5 to 6 years</span>, including academic learning and internship-based clinical training.
    </>,
  fourth:
    <>
      With guidance from <span className="text-[#00999E] font-bold">Taksheela Institute of Education</span>, students get support for university selection, documentation, visa, and pre-departure preparation.
    </>,
  fifth: "",
};

export const KYRGYZSTAN_TESTIMONIALS = [
  {
    name: "Rohit Sharma",
    location: "Kolkata",
    quote:
      "Taksheela made my MBBS admission process in Kyrgyzstan very smooth. They explained fee structure, university options, and helped with all documents on time.",
    university: "KYRGYZ STATE MEDICAL ACADEMY, KYRGYZSTAN",
  },
  {
    name: "Ananya Singh",
    location: "Lucknow",
    quote:
      "From counselling to visa support, the team guided me throughout. I am now studying in Bishkek and the process was much easier because of their support.",
    university: "INTERNATIONAL SCHOOL OF MEDICINE, KYRGYZSTAN",
  },
  {
    name: "Sahil Khan",
    location: "Pune",
    quote:
      "Their communication with my parents and me was excellent. They helped us choose a university based on my budget and career goals.",
    university: "OSH STATE UNIVERSITY, KYRGYZSTAN",
  },
];

export const KYRGYZSTAN_WHAT_STUDENTS_SAY_INTRO = (
  <>
    <span className="text-[#00999E] font-bold">Taksheela Institute of Education</span> has helped students pursue{" "}
    <span className="text-[#00999E] font-bold">MBBS in Kyrgyzstan</span> through guided counselling and complete admission support.
  </>
);

export const KYRGYZSTAN_QUICK_FACTS_INTRO = (
  <>
    Explore key details about <span className="text-[#5dd4d9] font-bold">MBBS in Kyrgyzstan</span> for Indian students with guidance from{" "}
    <span className="text-[#5dd4d9] font-bold">Taksheela Institute of Education</span>.
  </>
);

export const KYRGYZSTAN_QUICK_FACTS = [
  {
    icon: "FaUserGraduate",
    iconBg: "bg-[#bfdbfe]",
    iconColor: "text-[#1e40af]",
    title: "Students",
    desc: "Kyrgyzstan hosts a growing number of Indian medical students every year.",
  },
  {
    icon: "FaClock",
    iconBg: "bg-[#bfdbfe]",
    iconColor: "text-[#1e40af]",
    title: "Course Duration",
    desc: "MBBS in Kyrgyzstan usually spans 5-6 years including clinical training.",
  },
  {
    icon: "FaCalendarAlt",
    iconBg: "bg-[#fed7aa]",
    iconColor: "text-[#c2410c]",
    title: "Admission Intakes",
    desc: "Most universities open admissions in September/October sessions.",
  },
  {
    icon: "FaClipboardCheck",
    iconBg: "bg-[#d1fae5]",
    iconColor: "text-[#047857]",
    title: "Eligibility",
    desc: "Students generally need 50% in PCB, age 17+, and NEET qualification as per regulations.",
  },
  {
    icon: "FaBook",
    iconBg: "bg-[#e0e7ff]",
    iconColor: "text-[#3730a3]",
    title: "Medium of Instruction",
    desc: "Many universities provide English-medium MBBS programs for international students.",
  },
  {
    icon: "FaRubleSign",
    iconBg: "bg-[#fce7f3]",
    iconColor: "text-[#9d174d]",
    title: "Tuition Fees",
    desc: "Typical tuition ranges from around ₹1.9 lakh to ₹3.8 lakh per year depending on university.",
  },
  {
    icon: "FaGlobe",
    iconBg: "bg-[#d1fae5]",
    iconColor: "text-[#047857]",
    title: "Cost of Living",
    desc: "Living expenses are comparatively affordable and vary by city and lifestyle.",
  },
  {
    icon: "FaUniversity",
    iconBg: "bg-[#fef3c7]",
    iconColor: "text-[#b45309]",
    title: "Recognition",
    desc: "Many universities are listed in global directories; verify NMC alignment before admission.",
  },
];

export const KYRGYZSTAN_QUICK_FACTS_SECTION = {
  quickFacts: KYRGYZSTAN_QUICK_FACTS,
  countryName: "Kyrgyzstan",
  introParagraph: KYRGYZSTAN_QUICK_FACTS_INTRO,
};

export const KYRGYZSTAN_WHY_CHOOSE_INTRO = (
  <>
    Pursuing <span className="text-[#00999E] font-bold">MBBS in Kyrgyzstan</span> is popular among Indian students due to affordable fees, English-medium programs, and accessible admission processes.
  </>
);

export const KYRGYZSTAN_WHY_CHOOSE_CARDS = [
  {
    icon: "FaRubleSign",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "Affordable Education",
    desc: "Compared with many private options in India, Kyrgyzstan offers lower overall MBBS costs.",
  },
  {
    icon: "FaUniversity",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "Recognised Universities",
    desc: "Several universities in Kyrgyzstan are recognised by global medical directories and bodies.",
  },
  {
    icon: "FaClipboardCheck",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "Simple Admission Process",
    desc: "Admission is usually straightforward with transparent eligibility and documentation steps.",
  },
  {
    icon: "FaHospital",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "Clinical Exposure",
    desc: "Students receive practical hospital exposure as part of their curriculum.",
  },
  {
    icon: "FaHospital",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "English-Medium Study",
    desc: "Many institutions offer English-medium teaching with local language support where needed.",
  },
  {
    icon: "FaHospital",
    iconBg: "bg-[#e0f7f8]",
    iconColor: "text-[#00999E]",
    title: "Student Support",
    desc: "Taksheela provides guidance from application to arrival for a smoother transition abroad.",
  },
];

export const KYRGYZSTAN_ELIGIBILITY_INTRO = (
  <>
    Students applying for <span className="text-[#00999E] font-bold">MBBS in Kyrgyzstan</span> should meet academic and age requirements as per university and regulatory guidelines.
  </>
);

export const KYRGYZSTAN_ELIGIBILITY_CRITERIA = [
  { title: "Academic Background", titleHighlight: true, desc: "10+2 with Physics, Chemistry, and Biology (PCB)." },
  { title: "Minimum Marks", titleHighlight: true, desc: "Generally 50% in PCB for general category; relaxations may apply for reserved categories." },
  { title: "Age Requirement", titleHighlight: true, desc: "Minimum 17 years by 31st December of the admission year." },
  { title: "NEET Qualification", titleHighlight: true, desc: "NEET qualification is required for Indian students planning to practise in India." },
];

export const KYRGYZSTAN_ADMISSION_STEPS = [
  {
    stepLabel: "Step 1",
    title: "Counselling & Profile Evaluation",
    desc: "Discuss your academic profile and shortlist universities based on budget and preference.",
    icon: "FaUserFriends",
  },
  {
    stepLabel: "Step 2",
    title: "University Selection",
    desc: "Choose suitable universities in Kyrgyzstan with document and fee clarity.",
    icon: "FaListAlt",
  },
  {
    stepLabel: "Step 3",
    title: "Application Submission",
    desc: "Prepare and submit complete documents with admission support.",
    icon: "FaFileSignature",
  },
  {
    stepLabel: "Step 4",
    title: "Admission Letter",
    desc: "Receive and confirm your seat after offer issuance.",
    icon: "FaCheckCircle",
  },
  {
    stepLabel: "Step 5",
    title: "Visa Assistance",
    desc: "Complete visa process with document guidance and compliance support.",
    icon: "FaPassport",
  },
];

export const KYRGYZSTAN_DOCUMENTS_INTRO = (
  <>
    For admission to <span className="text-[#00999E] font-bold">MBBS in Kyrgyzstan</span>, students should prepare academic, identity, and medical documents in advance.
  </>
);

export const KYRGYZSTAN_DOCUMENTS_REQUIRED = [
  { title: "10th and 12th Mark Sheets", icon: "FaFileAlt" },
  { title: "NEET Scorecard", icon: "FaStethoscope" },
  { title: "Valid Passport", icon: "FaPassport" },
  { title: "Passport-size Photographs", icon: "FaCamera" },
];

export const KYRGYZSTAN_UNIVERSITIES = [
  { id: "ism", name: "International School of Medicine", founded: "2003", city: "Bishkek", fees: "₹1,87,500 - ₹3,75,000 / year (approx.)", logoIndex: ky1, imageKey: ky1 },
  { id: "ksma", name: "Kyrgyz State Medical Academy", founded: "1939", city: "Bishkek", fees: "₹1,87,500 - ₹3,75,000 / year (approx.)", logoIndex: ky2, imageKey: ky2 },
  { id: "jsu", name: "Jalal-Abad State University", founded: "1993", city: "Jalal-Abad", fees: "₹1,87,500 - ₹3,75,000 / year (approx.)", logoIndex: ky3, imageKey: ky3 },
  { id: "osu", name: "Osh State University", founded: "1951", city: "Osh", fees: "₹1,87,500 - ₹3,75,000 / year (approx.)", logoIndex: ky4, imageKey: ky4 },
  { id: "ami", name: "Asian Medical Institute", founded: "2004", city: "Kant", fees: "₹1,87,500 - ₹3,75,000 / year (approx.)", logoIndex: ky5, imageKey: ky5 },
  { id: "imu", name: "International Medical University", founded: "2003", city: "Bishkek", fees: "₹1,87,500 - ₹3,75,000 / year (approx.)", logoIndex: ky6, imageKey: ky6 },
  { id: "krsu", name: "Kyrgyz Russian Slavic University", founded: "1993", city: "Bishkek", fees: "₹1,87,500 - ₹3,75,000 / year (approx.)", logoIndex: ky7, imageKey: ky7 },
  { id: "ksmi", name: "Kyrgyz State Medical Institute", founded: "2000", city: "Bishkek", fees: "₹1,87,500 - ₹3,75,000 / year (approx.)", logoIndex: ky8, imageKey: ky8 },
  { id: "knu", name: "Kyrgyz National University", founded: "1925", city: "Bishkek", fees: "₹1,87,500 - ₹3,75,000 / year (approx.)", logoIndex: ky9, imageKey: ky9 },
  { id: "ksapcs", name: "Kyrgyz State Academy of Physical Culture and Sports", founded: "1955", city: "Bishkek", fees: "₹1,87,500 - ₹3,75,000 / year (approx.)", logoIndex: ky10, imageKey: ky10 },
];

export const KYRGYZSTAN_FAQ_ITEMS = [
  {
    question: "Is MBBS in Kyrgyzstan valid for Indian students?",
    answer:
      "It can be valid if students choose recognised universities and meet current Indian licensing requirements after graduation.",
    highlightTerms: ["recognised universities", "Indian licensing requirements"],
  },
  {
    question: "Is NEET compulsory for MBBS in Kyrgyzstan?",
    answer:
      "Yes, NEET qualification is generally required for Indian students who want to pursue MBBS abroad and later practise in India.",
    highlightTerms: ["NEET qualification", "practise in India"],
  },
  {
    question: "What is the duration of MBBS in Kyrgyzstan?",
    answer:
      "Most MBBS programs in Kyrgyzstan are 5-6 years, including academics and practical clinical components.",
    highlightTerms: ["5-6 years", "practical clinical components"],
  },
  {
    question: "Is Kyrgyzstan affordable for Indian students?",
    answer:
      "Yes, Kyrgyzstan is considered budget-friendly for both tuition and living expenses compared to many other destinations.",
    highlightTerms: ["budget-friendly", "tuition and living expenses"],
  },
  {
    question: "Are classes available in English?",
    answer:
      "Many universities offer English-medium MBBS programs, especially for international students.",
    highlightTerms: ["English-medium MBBS programs", "international students"],
  },
  {
    question: "How can Taksheela help in admission?",
    answer:
      "Taksheela supports students with counselling, university shortlisting, documentation, application, visa, and pre-departure guidance.",
    highlightTerms: ["counselling", "documentation", "visa", "pre-departure guidance"],
  },
];
