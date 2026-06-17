import type {
  IntroductionGalleryItem,
  IntroductionStatItem,
} from "@/components/study-abroad/new-changes/countries/components/IntroductionSection";
import type { OverviewRow } from "@/components/study-abroad/new-changes/countries/components/OverviewSection";
import type { CostStudyTuitionTables } from "@/components/study-abroad/new-changes/countries/components/CostOfStudying";
import type {
  MastersApplicationProcess,
  MastersUniversitiesTable,
  MastersWhyCard,
} from "@/components/study-abroad/new-changes/countries/components/MastersForIndian";
import type {
  TopCourseCard,
  UniversityByCourseRow,
} from "@/components/study-abroad/new-changes/countries/components/TopCourses";
import type { JobsAfterMSProps } from "@/components/study-abroad/new-changes/countries/components/JobsAfterMS";
import type { StudentVisaProps } from "@/components/study-abroad/new-changes/countries/components/StudentVisa";
import type { MbaSectionProps } from "@/components/study-abroad/new-changes/countries/components/MbaSection";
import type { CostOfLivingProps } from "@/components/study-abroad/new-changes/countries/components/CostOfLiving";
import type { ExamEligibilityRequirementProps } from "@/components/study-abroad/new-changes/countries/components/Exam&EligibiltyRequirement";
import type { ScholarshipSectionProps } from "@/components/study-abroad/new-changes/countries/components/ScholarshipSection";
import type { WhyStudyCard } from "@/components/study-abroad/new-changes/countries/components/WhyStudy";
import type {
  CountryPageNavConfig,
  CountrySidebarLink,
  CountryStudyPageConfig,
  CountryTopTab,
} from "@/lib/study-abroad/countryPageTypes";
import { imageBaseUrl } from "@/utils/config";

export const UK_COUNTRY_SLUGS = ["uk", "united-kingdom"] as const;

export function isUKCountrySlug(slug: string | undefined): boolean {
  if (!slug) return false;
  return UK_COUNTRY_SLUGS.includes(slug.toLowerCase() as (typeof UK_COUNTRY_SLUGS)[number]);
}

export type UkTopTab = CountryTopTab;
export type UkSidebarLink = CountrySidebarLink;

export const UK_TOP_TABS: CountryTopTab[] = [
  { id: "overview", label: "Overview", sectionId: "uk-intro" },
  { id: "cost", label: "Cost of Studying in UK", sectionId: "uk-cost" },
  { id: "cost-living", label: "Cost of Living", sectionId: "uk-cost-living" },
  { id: "courses", label: "Top Courses in UK", sectionId: "uk-courses" },
  { id: "ms", label: "MS in UK", sectionId: "uk-ms" },
  { id: "visa", label: "UK Student Visa", sectionId: "uk-visa" },
  { id: "jobs", label: "Jobs After MS", sectionId: "uk-jobs" },
  { id: "mba", label: "MBA in UK", sectionId: "uk-mba" },
  { id: "scholarships", label: "Scholarships", sectionId: "uk-scholarships" },
  { id: "exams", label: "Exam & Eligibility", sectionId: "uk-exams" },
];

/** Sidebar order matches section order in MainTabPage. */
export const UK_SIDEBAR_LINKS: CountrySidebarLink[] = [
  { id: "intro", label: "Introduction", sectionId: "uk-intro", inIntroGroup: true },
  {
    id: "study-overview",
    label: "Study In The UK: Overview",
    sectionId: "uk-study-overview",
    inIntroGroup: true,
  },
  {
    id: "why-study",
    label: "Why Study In UK?",
    sectionId: "uk-why-study",
    inIntroGroup: true,
  },
  { id: "cost", label: "Cost of Studying in UK", sectionId: "uk-cost" },
  { id: "cost-living", label: "Cost of Living in UK", sectionId: "uk-cost-living" },
  { id: "courses", label: "Top Courses in UK", sectionId: "uk-courses" },
  { id: "ms", label: "MS in UK for Indian Students", sectionId: "uk-ms" },
  { id: "visa", label: "Student Visa for UK", sectionId: "uk-visa" },
  { id: "jobs", label: "Jobs After MS in UK", sectionId: "uk-jobs" },
  { id: "mba", label: "MBA in UK", sectionId: "uk-mba" },
  { id: "scholarships", label: "Scholarships to Study in UK", sectionId: "uk-scholarships" },
  { id: "exams", label: "Exam & Eligibility Requirements", sectionId: "uk-exams" },
  { id: "faq", label: "FAQs", sectionId: "uk-faq" },
];

export const UK_PAGE_NAV: CountryPageNavConfig = {
  topTabs: UK_TOP_TABS,
  sidebarLinks: UK_SIDEBAR_LINKS,
  sidebarCta: "Planning to Study in UK?",
  sidebarAriaLabel: "UK study guide navigation",
};

export const UK_OVERVIEW_SECTION_IDS = UK_SIDEBAR_LINKS.filter((l) => l.inIntroGroup).map(
  (l) => l.sectionId
);

export const UK_HERO = {
  badge: "GB",
  title: "Study in United Kingdom: Top Universities, Courses & Scholarships",
  subtitle: "A complete guide for Indian students planning to study in the UK in 2025–26",
  cta: "Ask Our Experts",
};

export const UK_INTRO_CONTENT = {
  heading: "Introduction to Studying in the UK",
  paragraphs: [
    "The United Kingdom is one of the most sought-after study destinations for Indian students worldwide. With a rich academic heritage, globally ranked universities, and a multicultural learning environment, the UK offers international students an unmatched combination of academic excellence and career opportunity.",
    "For Indian students specifically, the UK holds particular appeal — thanks to the historic ties between the two nations, a familiar academic structure, and the availability of 1-year master's programmes that are both time-efficient and internationally respected. The introduction of the Graduate Route visa in 2021 further strengthened the UK's position as a top choice, allowing international graduates to remain and work in the UK for up to 2 years after completing their degree.",
  ],
  highlightPhrases: ["1-year master's programmes", "Graduate Route visa"],
};

export const UK_INTRO_GALLERY: IntroductionGalleryItem[] = [
  {
    src: `${imageBaseUrl}CountryPlaces/uk/uk1.png`,
    label: "Oxford University",
    icon: "building",
  },
  {
    src: `${imageBaseUrl}CountryPlaces/uk/uk2.png`,
    label: "Campus Life",
    icon: "campus",
  },
  {
    src: `${imageBaseUrl}CountryPlaces/uk/uk3.png`,
    label: "International Community",
    icon: "community",
  },
];

export const UK_OVERVIEW = {
  title: "Study in the UK: Quick Overview",
  subtitle:
    "Here is a snapshot of what Indian students need to know before choosing the UK as their study destination:",
  rows: [
    { parameter: "Language of Instruction", details: "English" },
    {
      parameter: "Average Tuition (UG)",
      details: "£10,000 - £20,000 per year",
    },
    {
      parameter: "Average Tuition (PG / MS)",
      details: "£13,000 - £26,000 per year",
    },
    {
      parameter: "Average Cost of Living",
      details: "£900 - £1,400 per month",
    },
    {
      parameter: "English Requirement",
      details: "IELTS 6.0–7.0 / PTE / MOI",
    },
    {
      parameter: "Intakes",
      details: "September/October (main), January (limited)",
    },
    {
      parameter: "Visa Type",
      details: "UK Student Visa (formerly Tier 4)",
    },
    {
      parameter: "Types of Programmes",
      details: "Bachelor's, Master's, PhD, MBA",
    },
    {
      parameter: "Post-Study Work Visa",
      details: "Graduate Route — 2 years (3 for PhD)",
    },
    {
      parameter: "Top Student Cities",
      details:
        "London, Manchester, Edinburgh, Birmingham, Glasgow, Nottingham",
    },
    {
      parameter: "Source of Funding",
      details: "Scholarships, Part-time work, Bursaries, Awards",
    },
  ] satisfies OverviewRow[],
};

export const UK_INTRO_STATS: IntroductionStatItem[] = [
  { icon: "building", label: "UNIVERSITIES", value: "160+" },
  { icon: "globe", label: "WORLD-RANKED (QS TOP 100)", value: "17" },
  { icon: "graduation", label: "INDIAN STUDENTS (APPROX)", value: "1 Lakh+" },
  { icon: "calendar", label: "MSC DURATION", value: "1 Year" },
  { icon: "flight", label: "POST-STUDY WORK VISA", value: "2 Years" },
  { icon: "clipboard", label: "MAIN INTAKES", value: "Sep & Jan" },
];

export const UK_WHY_STUDY = {
  title: "Why Study in UK for Indian Students?",
  intro: [
    "The United Kingdom consistently ranks among the top three destinations for Indian students pursuing higher education abroad. From Russell Group universities to specialist colleges, the UK offers pathways that align with career goals across STEM, business, healthcare, and the creative industries.",
    "Shorter degree durations, strong graduate outcomes, and a large Indian student community make the UK especially practical for students who want a globally recognised qualification without spending extra years abroad.",
  ],
  cards: [
    {
      icon: "graduation",
      title: "World-Class Degrees",
      description:
        "UK qualifications are recognised by employers and universities worldwide, with many institutions ranked among the global top 100.",
      featured: true,
    },
    {
      icon: "bolt",
      title: "1-Year Master's",
      description:
        "Most taught master's programmes take just one year, reducing tuition and living costs compared with two-year degrees elsewhere.",
    },
    {
      icon: "flight",
      title: "Graduate Route Visa",
      description:
        "Eligible graduates can stay and work in the UK for up to 2 years (3 years for PhD holders) after completing their course.",
    },
    {
      icon: "globe",
      title: "Diverse & Multicultural",
      description:
        "Campuses welcome students from every continent, with societies, festivals, and support networks that help Indian students feel at home.",
    },
    {
      icon: "briefcase",
      title: "Industry Connections",
      description:
        "Universities partner with leading employers for placements, internships, and careers fairs — especially in finance, tech, and healthcare hubs.",
    },
    {
      icon: "science",
      title: "Research Excellence",
      description:
        "The UK invests heavily in R&D; students on research degrees benefit from cutting-edge labs and supervision from world-leading academics.",
    },
  ] satisfies WhyStudyCard[],
  keyFact: {
    badge: "GB",
    label: "Key Fact for Indian Students:",
    text: "Indian nationals form the second-largest international student group in the UK, with tens of thousands enrolling each year across undergraduate and postgraduate programmes.",
    highlightPhrases: ["second-largest international student group"],
  },
  cta: {
    heading: "Interested in Studying in the UK?",
    subtext:
      "Taksheela's counsellors help you shortlist universities, prepare applications, and navigate visas — at no cost to you.",
    buttonText: "Book Free Counselling →",
  },
};

export const UK_COST_STUDY = {
  title: "Cost of Studying in UK for Indian Students",
  intro: [
    "Understanding the cost of studying in the UK is essential before making your decision. Tuition fees vary significantly depending on the type of institution, the city, and the programme level. Here is a comprehensive breakdown of what Indian students can expect to spend:",
  ],
  featuredImage: {
    src: `${imageBaseUrl}CountryPlaces/uk/uk4.png`,
    alt: "University campus in the UK",
    caption:
      "University campus in the UK — world-class facilities await international students",
  },
  tuitionTables: {
    byLevel: {
      title: "Tuition Fees at UK Universities",
      rows: [
        {
          level: "Undergraduate",
          programmeType: "BA / BSc / BEng (3-year)",
          avgAnnualTuition: "£10,000 - £20,000",
        },
        {
          level: "Postgraduate",
          programmeType: "MSc / MA / MEng (1-year)",
          avgAnnualTuition: "£13,000 - £26,000",
        },
        {
          level: "Postgraduate",
          programmeType: "MBA",
          avgAnnualTuition: "£25,000 - £60,000+",
        },
        {
          level: "PhD / Research",
          programmeType: "PhD (3–4 years)",
          avgAnnualTuition: "£15,000 - £25,000",
        },
      ],
    },
    topUniversities: {
      title: "Tuition Fees at Top UK Universities",
      rows: [
        {
          university: "University of Oxford",
          qsRank: 3,
          avgMscTuition: "£26,000 - £32,000",
        },
        {
          university: "University of Cambridge",
          qsRank: 5,
          avgMscTuition: "£28,000 - £35,000",
        },
        {
          university: "Imperial College London",
          qsRank: 6,
          avgMscTuition: "£30,000 - £38,000",
        },
        {
          university: "UCL",
          qsRank: 9,
          avgMscTuition: "£24,000 - £32,000",
        },
        {
          university: "University of Edinburgh",
          qsRank: 27,
          avgMscTuition: "£22,000 - £28,000",
        },
        {
          university: "University of Manchester",
          qsRank: 34,
          avgMscTuition: "£20,000 - £26,000",
        },
      ],
    },
    note: "Tuition fee figures above are indicative for international students. Actual fees may vary by specific programme, intake year, and university policy. Always check the official university website for the most current fee information.",
    oneTimeCosts: {
      title: "Additional One-Time Costs",
      rows: [
        {
          expense: "UK Student Visa Application",
          estimatedCost: "£363 (approx ₹38,000)",
        },
        {
          expense: "Immigration Health Surcharge (IHS)",
          estimatedCost: "£776 per year (course length)",
        },
        {
          expense: "Flight (India to UK, approx)",
          estimatedCost: "₹40,000 – ₹75,000 (one-way)",
        },
        {
          expense: "English Test (IELTS / PTE)",
          estimatedCost: "₹16,000 – ₹17,000",
        },
        {
          expense: "University Application Fees",
          estimatedCost: "£50 – £100 per application",
        },
        {
          expense: "Setup Costs (bedding, kitchen, SIM etc.)",
          estimatedCost: "£200 – £500",
        },
      ],
    },
    budgetCta: {
      heading: "Want a Personalised Cost Breakdown?",
      subtext:
        "Taksheela provides a detailed, transparent cost estimate specific to your chosen course, university and city — completely free.",
      buttonText: "Get Free Budget Plan",
    },
  } satisfies CostStudyTuitionTables,
};

export const UK_COST_OF_LIVING_SECTION = {
  title: "Cost of Living in UK for Indian Students",
  intro: [
    "Beyond tuition fees, your monthly living costs are a major part of your UK study budget. Expenses vary significantly between London and other UK cities — London is typically 30–50% more expensive for accommodation, transport, and day-to-day spending.",
    "Here is a realistic monthly breakdown to help Indian students plan their finances before applying.",
  ],
  featuredImage: {
    src: `${imageBaseUrl}CountryPlaces/uk/uk5.png`,
    alt: "Student accommodation and city life in the UK",
    caption: "Student accommodation and city life in the UK",
  },
  breakdown: {
    title: "Monthly Cost of Living Breakdown",
    rows: [
      {
        expense: "Student Accommodation (university)",
        london: "£900 – £1,400/month",
        outsideLondon: "£500 – £850/month",
      },
      {
        expense: "Student Accommodation (private)",
        london: "£1,000 – £1,800/month",
        outsideLondon: "£450 – £750/month",
      },
      {
        expense: "Food & Groceries",
        london: "£200 – £320/month",
        outsideLondon: "£150 – £260/month",
      },
      {
        expense: "Transport (monthly pass)",
        london: "£150 – £200/month",
        outsideLondon: "£50 – £100/month",
      },
      {
        expense: "Utilities (internet, gas, electricity)",
        london: "£80 – £120/month",
        outsideLondon: "£60 – £100/month",
      },
      {
        expense: "Mobile Phone Plan",
        london: "£10 – £30/month",
        outsideLondon: "£10 – £25/month",
      },
      {
        expense: "Entertainment & Socialising",
        london: "£100 – £200/month",
        outsideLondon: "£60 – £120/month",
      },
      {
        expense: "Total Monthly Estimate",
        london: "£1,440 – £2,270",
        outsideLondon: "£830 – £1,355",
        isTotal: true,
      },
    ],
  },
} satisfies Omit<CostOfLivingProps, "id" | "className">;

export const UK_TOP_COURSES = {
  title: "Best Courses to Study in UK for Indian Students",
  intro: [
    "The UK offers one of the widest ranges of academic programmes in the world — from one-year master's degrees to research-led PhDs. Indian students are drawn to UK universities for their global rankings, industry links, and the opportunity to graduate faster than in many other destinations.",
    "Whether you are targeting technology, business, healthcare, or creative fields, UK institutions offer pathways with strong employability outcomes and post-study work options through the Graduate Route visa.",
  ],
  featuredImage: {
    src: `${imageBaseUrl}CountryPlaces/uk/uk2.png`,
    alt: "Indian students in a collaborative session at a UK university",
    caption:
      "Indian students in a collaborative session at a UK university",
  },
  gridTitle: "Most Popular Courses for Indian Students in the UK",
  courses: [
    {
      icon: "dataScience",
      title: "Data Science & Analytics",
      description:
        "High demand across finance, tech, and consulting with strong graduate employability at Russell Group universities.",
    },
    {
      icon: "ai",
      title: "Artificial Intelligence & ML",
      description:
        "Cutting-edge AI labs and industry partnerships make the UK a leading choice for ML specialists.",
    },
    {
      icon: "mba",
      title: "MBA / Business Management",
      description:
        "One-year MBA options and global accreditation attract Indian professionals seeking leadership roles.",
    },
    {
      icon: "cs",
      title: "Computer Science & IT",
      description:
        "Software engineering, cybersecurity, and cloud computing programmes align with UK tech sector growth.",
    },
    {
      icon: "engineering",
      title: "Engineering",
      description:
        "Mechanical, civil, electrical, and aerospace engineering degrees benefit from strong industry placement links.",
    },
    {
      icon: "finance",
      title: "Finance & Accounting",
      description:
        "London and regional hubs offer pathways into banking, fintech, and professional accounting qualifications.",
    },
    {
      icon: "law",
      title: "Law (LLM)",
      description:
        "Common law tradition and internationally recognised LLM programmes appeal to Indian law graduates.",
    },
    {
      icon: "health",
      title: "Public Health & Healthcare",
      description:
        "Growing intake for public health, nursing, and allied health courses with NHS and global NGO links.",
    },
    {
      icon: "design",
      title: "Design & Architecture",
      description:
        "Creative industries in the UK support portfolios in architecture, UX, fashion, and interior design.",
    },
  ] satisfies TopCourseCard[],
  universitiesByCourse: {
    title: "Top UK Universities by Course",
    rows: [
      {
        course: "Data Science / AI",
        universities: "Imperial, UCL, Edinburgh, Warwick",
        approxFees: "£22,000 – £32,000",
      },
      {
        course: "MBA",
        universities: "LBS, Cambridge, Oxford, Warwick",
        approxFees: "£35,000 – £65,000+",
      },
      {
        course: "Computer Science",
        universities: "Imperial, UCL, Manchester, Bristol",
        approxFees: "£24,000 – £30,000",
      },
      {
        course: "Finance / Accounting",
        universities: "LSE, Imperial, Warwick, Manchester",
        approxFees: "£26,000 – £38,000",
      },
      {
        course: "Engineering",
        universities: "Imperial, Southampton, Sheffield, Bath",
        approxFees: "£20,000 – £30,000",
      },
      {
        course: "Law (LLM)",
        universities: "Oxford, Cambridge, LSE, KCL",
        approxFees: "£22,000 – £35,000",
      },
      {
        course: "Public Health",
        universities: "Imperial, LSHTM, Edinburgh, Manchester",
        approxFees: "£18,000 – £28,000",
      },
      {
        course: "Design / Architecture",
        universities: "RCA, UAL, Edinburgh, Bath",
        approxFees: "£18,000 – £28,000",
      },
    ] satisfies UniversityByCourseRow[],
  },
  proTip: {
    label: "Pro Tip from Taksheela:",
    text: "The best course for you is not just the most popular one — it's the one that aligns with your undergraduate degree, work experience (if any), and 5-year career vision. Our counsellors help you find that match before you apply anywhere.",
  },
};

export const UK_MASTERS_FOR_INDIAN = {
  title: "Masters (MS) in UK for Indian Students",
  intro: [
    "A one-year taught master's in the UK is one of the most popular pathways for Indian graduates who want an internationally recognised qualification without spending two years abroad. Programmes are intensive, career-focused, and widely accepted by employers in India and overseas.",
    "Indian students typically apply with a relevant bachelor's degree, English proficiency test scores, and supporting documents such as an SOP and references. Many universities also consider professional experience for MBA and specialist master's courses.",
  ],
  featuredImage: {
    src: `${imageBaseUrl}CountryPlaces/uk/uk5.png`,
    alt: "Indian student pursuing a master's degree in the UK",
    caption: "Indian students pursuing their master's degree in the UK",
  },
  whyChoose: {
    title: "Why Choose a 1-Year Masters in the UK?",
    cards: [
      {
        icon: "time",
        title: "Time-Efficient",
        description:
          "Complete your master's in just one year compared with two-year programmes in many other countries — enter the workforce sooner.",
      },
      {
        icon: "cost",
        title: "Cost-Effective",
        description:
          "One year of tuition and living costs can mean lower total spend than a two-year degree elsewhere, with strong ROI for many fields.",
      },
      {
        icon: "global",
        title: "Global Recognition",
        description:
          "UK degrees are valued by multinational employers and support further study or skilled migration pathways worldwide.",
      },
      {
        icon: "work",
        title: "Post-Study Work Options",
        description:
          "The Graduate Route allows eligible students to stay and work in the UK for up to 2 years after completing their degree (3 years for PhD).",
      },
    ] satisfies MastersWhyCard[],
  },
  eligibility: {
    title: "Eligibility for MS in UK",
    items: [
      "Bachelor's degree (3 or 4 years) in a related field from a recognised university",
      "Minimum academic score — typically 55–60% or equivalent (varies by university)",
      "IELTS 6.0–7.0 overall (or PTE / TOEFL equivalents)",
      "Statement of Purpose (SOP) and 2 Letters of Recommendation",
      "Updated CV; GRE / GMAT only if required by the programme",
      "Valid passport and proof of funds for tuition and living costs",
      "CAS letter from the university before applying for the student visa",
    ],
  },
  universitiesTable: {
    title: "Top UK Universities for MS Programmes",
    rows: [
      {
        university: "University of Edinburgh",
        popularProgrammes: "Data Science, AI, Finance, Business Analytics",
        minCgpa: "60–65%",
        fees: "£22,000–£28,000",
      },
      {
        university: "University of Warwick",
        popularProgrammes: "Business, Finance, Data Analytics, Engineering",
        minCgpa: "60–65%",
        fees: "£20,000–£27,000",
      },
      {
        university: "University of Manchester",
        popularProgrammes: "Computer Science, Data Science, Finance, Engineering",
        minCgpa: "55–65%",
        fees: "£20,000–£28,000",
      },
      {
        university: "University of Birmingham",
        popularProgrammes: "Data Science, Engineering, Business, Healthcare",
        minCgpa: "55–60%",
        fees: "£18,000–£24,000",
      },
      {
        university: "University of Sheffield",
        popularProgrammes: "Engineering, CS, Business, Data Science",
        minCgpa: "55–60%",
        fees: "£17,000–£22,000",
      },
      {
        university: "King's College London",
        popularProgrammes: "Nursing, Law, Healthcare, International Relations",
        minCgpa: "60–65%",
        fees: "£20,000–£30,000",
      },
      {
        university: "University of Glasgow",
        popularProgrammes: "Computing Science, Engineering, Finance",
        minCgpa: "55–65%",
        fees: "£18,000–£24,000",
      },
      {
        university: "Loughborough University",
        popularProgrammes: "Engineering, Sports Science, Business, Design",
        minCgpa: "55–60%",
        fees: "£16,000–£22,000",
      },
    ],
  } satisfies MastersUniversitiesTable,
  applicationProcess: {
    title: "Taksheela's MS Application Process",
    steps: [
      "Profile assessment — matching your academic background to suitable universities",
      "University shortlisting based on your target programme, budget, and profile strength",
      "SOP crafting and LOR guidance",
      "Application submission and tracking with all universities",
      "Offer letter receipt, scholarship identification, and CAS letter guidance",
      "UK Student Visa documentation and application support",
    ],
  } satisfies MastersApplicationProcess,
};

export const UK_STUDENT_VISA = {
  title: "UK Student Visa for Indian Students",
  intro: [
    "The UK Student Visa (previously known as the Tier 4 Student Visa) is the primary visa required for Indian students planning to study at a UK university. Here is everything you need to know about the UK study visa requirements, process, and timelines.",
  ],
  steps: [
    {
      number: 1,
      title: "Get University Offer",
      description:
        "Receive a conditional or unconditional offer from a UK/I recognised university.",
    },
    {
      number: 2,
      title: "Receive CAS Number",
      description:
        "Your university issues a Confirmation of Acceptance for Studies (CAS) reference number.",
    },
    {
      number: 3,
      title: "Apply Online",
      description:
        "Submit your UK Student Visa application via the UKVI online portal with all documents.",
    },
    {
      number: 4,
      title: "Biometric Appointment",
      description:
        "Visit a VFS appointment centre in India for biometrics and document submission.",
    },
  ],
  featuredImage: {
    src: `${imageBaseUrl}CountryPlaces/uk/uk6.png`,
    alt: "UK visa guidance for Indian students",
    caption:
      "Preparing your UK student visa application with expert guidance from Taksheela",
  },
  requirements: {
    title: "UK Student Visa Requirements for Indian Students",
    items: [
      {
        label: "Confirmation of Acceptance for Studies (CAS)",
        description:
          "issued by your UK university after accepting an offer",
      },
      {
        label: "Valid Passport",
        description: "must be valid for the entire duration of your course",
      },
      {
        label: "Financial Proof",
        description:
          "bank statements showing sufficient funds (tuition fees + £1,334/month for London or £1,023 for elsewhere for up to 9 months)",
      },
      {
        label: "English Proficiency",
        description:
          "IELTS Academic (typically 6.0+ overall), PTE, or MOI certificate (subject to university acceptance)",
      },
      {
        label: "ATAS Certificate",
        description:
          "required if studying certain sensitive subjects (check UKVI guidance)",
      },
      {
        label: "Tuberculosis (TB) Test",
        description:
          "required for Indian applicants (test from an approved clinic in India)",
      },
      {
        label: "Immigration Health Surcharge (IHS)",
        description:
          "paid online as part of the visa application (£776/year)",
      },
      {
        label: "Parental/guardian consent letter",
        description: "required if under 18 years",
      },
    ],
  },
  keyDetails: {
    title: "UK Student Visa Fees & Key Details",
    rows: [
      {
        detail: "Visa Application Fee",
        information: "£363 (approx ₹38,000)",
      },
      {
        detail: "IHS (Health Surcharge)",
        information: "£776 per year of study",
      },
      {
        detail: "Processing Time",
        information: "3–8 weeks (apply at least 3 months before course start)",
      },
      {
        detail: "Visa Validity",
        information: "Duration of course + 4 months",
      },
      {
        detail: "Work Allowance During Study",
        information: "20 hrs/week during term; full-time during vacations",
      },
      {
        detail: "Post-Study (Graduate Route)",
        information: "2 years for UG/PG; 3 years for PhD",
      },
      {
        detail: "Dependent Visa",
        information: "Postgraduate students may bring dependants",
      },
    ],
  },
  note: {
    label: "Apply Early",
    text: "UK Student Visa applications should be submitted at least 3 months before your course starts. Visa Application Centres in India (Delhi, Mumbai, Chennai, Kolkata, Hyderabad, Chandigarh, Ahmedabad) have varying appointment availability. Taksheela guides you through every step of the visa process.",
  },
} satisfies Omit<StudentVisaProps, "id" | "className">;

export const UK_JOBS_AFTER_MS = {
  title: "Jobs After MS in UK for Indian Students",
  intro: [
    "One of the strongest motivations for Indian students choosing the UK for their master's degree is the clear post-study career pathway. The UK's Graduate Route visa has made it significantly easier for international graduates to find employment and build careers in the country.",
  ],
  featuredImage: {
    src: `${imageBaseUrl}CountryPlaces/uk/uk7.png`,
    alt: "UK graduates exploring career opportunities after MS",
    caption: "UK graduates in global professional environments",
  },
  employers: {
    title: "Top UK Employers Hiring International Graduates",
    chips: [
      { label: "Deloitte" },
      { label: "PwC" },
      { label: "KPMG" },
      { label: "Goldman Sachs" },
      { label: "HSBC" },
      { label: "Barclays" },
      { label: "Amazon UK" },
      { label: "Google DeepMind" },
      { label: "Microsoft UK" },
      { label: "NHS" },
      { label: "Rolls-Royce" },
      { label: "Accenture" },
      { label: "Unilever" },
      { label: "Shell" },
      { label: "Tata Consultancy Services" },
      { label: "Infosys UK" },
      { label: "Wipro UK" },
    ],
  },
  careerTip: {
    label: "GB",
    title: "Career Tip",
    text: "Indian students with a UK master's degree who return to India typically see a 40–80% salary premium compared to peers with only domestic postgraduate degrees, especially in fields like finance, technology, data science, and consulting.",
  },
  graduateRoute: {
    title: "Graduate Route Visa — Work After MS in UK",
    description:
      "The Graduate Route visa allows you to stay in the UK and work (or look for work) for 2 years after graduation (3 years for PhD graduates). During this period, you can:",
    bullets: [
      { text: "Work in any role, at any skill level — no employer sponsorship required" },
      { text: "Transition to a Skilled Worker Visa if you find a qualifying job" },
      { text: "Build UK work experience, which strengthens future visa applications" },
      { text: "Work for multiple employers or freelance" },
    ],
  },
  salaries: {
    title: "Average Salaries for MS Graduates in UK",
    rows: [
      {
        role: "Data Scientist / ML Engineer",
        salary: "£40,000 – £60,000",
        cities: "London, Manchester, Edinburgh",
      },
      {
        role: "Software Developer / Engineer",
        salary: "£35,000 – £55,000",
        cities: "London, Bristol, Leeds",
      },
      {
        role: "Financial Analyst / Investment Banking",
        salary: "£42,000 – £65,000",
        cities: "London (City & Canary Wharf)",
      },
      {
        role: "Civil / Structural Engineer",
        salary: "£30,000 – £45,000",
        cities: "London, Manchester, Birmingham",
      },
      {
        role: "Healthcare / NHS (Nursing)",
        salary: "£28,000 – £36,000",
        cities: "Nationwide",
      },
      {
        role: "Business Analyst / Consultant",
        salary: "£35,000 – £52,000",
        cities: "London, Edinburgh",
      },
      {
        role: "AI / Cybersecurity Analyst",
        salary: "£38,000 – £58,000",
        cities: "London, Glasgow, Bristol",
      },
    ],
  },
} satisfies Omit<JobsAfterMSProps, "id" | "className">;

export const UK_MBA_SECTION = {
  title: "MBA in UK for Indian Students",
  intro: [
    "The UK is a top choice for Indian professionals looking to accelerate their careers with a globally recognised MBA. Most UK MBAs are intensive one-year programmes, helping you graduate faster and return to the job market sooner.",
    "With strong industry connections, diverse cohorts, and world-renowned business schools, a UK MBA can be a powerful route into consulting, finance, product, and leadership roles across the UK and Europe.",
  ],
  featuredImage: {
    src: `${imageBaseUrl}CountryPlaces/uk/uk7.png`,
    alt: "MBA students networking at a UK business school",
    caption: "MBA students networking at a UK business school",
  },
  programmes: {
    title: "Top MBA Programmes in UK",
    rows: [
      {
        businessSchool: "London Business School (LBS)",
        duration: "15–21 months",
        fees: "£109,700+",
        ftRank: "Top 10",
      },
      {
        businessSchool: "University of Cambridge (Judge)",
        duration: "12 months",
        fees: "£70,000+",
        ftRank: "Top 30",
      },
      {
        businessSchool: "University of Oxford (Saïd)",
        duration: "12 months",
        fees: "£80,000+",
        ftRank: "Top 25",
      },
      {
        businessSchool: "Warwick Business School",
        duration: "12 months",
        fees: "£49,000+",
        ftRank: "Top 50",
      },
      {
        businessSchool: "Alliance Manchester Business School",
        duration: "15–18 months",
        fees: "£47,000+",
        ftRank: "Top 60",
      },
    ],
  },
  eligibility: {
    title: "MBA Eligibility (Indian Students)",
    items: [
      "Bachelor’s degree from a recognised university (most schools prefer 3+ years of study)",
      "2–5 years of full-time work experience (varies by business school)",
      "GMAT/GRE (some universities offer waivers based on profile strength)",
      "English proficiency: IELTS/PTE/TOEFL as per university requirements",
      "Strong SOP, CV, and 2 professional LORs",
    ],
  },
  whyBanner: {
    title: "Why a UK MBA is a Smart Choice",
    bullets: [
      { text: "Most MBAs are 12 months — faster ROI compared to 2-year programmes" },
      { text: "Global brand value of UK business schools" },
      { text: "Strong access to UK/Europe recruitment pipelines" },
      { text: "Diverse international cohort and leadership-focused learning" },
    ],
  },
} satisfies Omit<MbaSectionProps, "id" | "className">;

export const UK_SCHOLARSHIPS_SECTION = {
  title: "Scholarships to Study in UK for Indian Students",
  intro: [
    "Scholarships can significantly reduce the overall cost of studying in the UK. There are numerous government, university-funded, and private scholarships available specifically for Indian students. Below is a comprehensive guide to the most valuable and accessible options.",
  ],
  cards: [
    {
      icon: "award",
      title: "Chevening Scholarship",
      badge: "Fully Funded",
      description:
        "The UK Government’s flagship international scholarship programme. Covers full tuition, living allowance, travel costs, and other expenses. Open to high-achieving Indian professionals with leadership potential. Highly competitive — requires 2+ years of work experience.",
    },
    {
      icon: "commonwealth",
      title: "Commonwealth Scholarship",
      badge: "Fully Funded",
      description:
        "Available for master’s and doctoral study at UK universities. Targeted at students from Commonwealth nations including India. Covers tuition, airfare, living stipend, and thesis costs. Administered by the Commonwealth Scholarship Commission.",
    },
    {
      icon: "university",
      title: "University of Edinburgh Global Scholarship",
      badge: "£5,000 – £10,000",
      description:
        "Merit-based international scholarships for outstanding students enrolling in postgraduate programmes. Awarded automatically to eligible applicants — no separate application needed. Competitive but accessible.",
    },
    {
      icon: "merit",
      title: "Warwick Merit Scholarships",
      badge: "£3,000 – £10,000",
      description:
        "University of Warwick offers automatic merit scholarships to high-performing international applicants based on academic excellence. Indian students with 70%+ grades frequently receive these awards.",
    },
    {
      icon: "future",
      title: "Manchester Global Futures Scholarship",
      badge: "£3,000 – £6,000",
      description:
        "University of Manchester offers scholarships specifically for students from India and other partner countries. Available for select postgraduate programmes including STEM and business disciplines.",
    },
    {
      icon: "great",
      title: "GREAT Scholarships (India)",
      badge: "£10,000 per year",
      description:
        "A collaboration between the British Council and UK universities, specifically for Indian students. A one-year award for master’s programmes at participating UK universities. Highly targeted for Indian applicants.",
    },
    {
      icon: "trust",
      title: "Charles Wallace India Trust",
      badge: "Partial Funding",
      description:
        "Provides grants and fellowships specifically for Indian postgraduate students and researchers in arts, humanities, and social sciences. Especially useful for arts and cultural heritage students.",
    },
    {
      icon: "earlyBird",
      title: "University Early-Bird Awards",
      badge: "£2,000 – £8,000",
      description:
        "Many UK universities offer automatic tuition fee reductions for international students who apply and accept their offer early (before specific deadlines). These are first-come, first-served and often limited.",
    },
  ],
  tip: {
    label: "Scholarship Tip",
    text: "Scholarship applications at most UK universities open alongside admissions — typically between October and February for September intake. Taksheela identifies all scholarship opportunities applicable to your profile and helps you submit the strongest possible application.",
    highlightPhrases: ["October and February", "Taksheela"],
  },
} satisfies Omit<ScholarshipSectionProps, "id" | "className">;

export const UK_SCHOLARSHIPS_BULLETS = [
  "Chevening Scholarships for outstanding international students",
  "Commonwealth Scholarships for eligible Commonwealth country nationals",
  "University-specific merit and need-based awards for Indian applicants",
  "Great Scholarships campaign for selected Indian students",
];

export const UK_EXAMS_ELIGIBILITY_SECTION = {
  title: "Exam & Eligibility Requirements for UK Universities",
  intro: [
    "Each UK university and programme has its own entry requirements, but here is a comprehensive guide to the standard academic and English language requirements for Indian students applying to undergraduate and postgraduate programmes in the UK.",
  ],
  academicEligibility: {
    title: "Academic Eligibility",
    columns: [
      { key: "programmeLevel", label: "Programme Level" },
      { key: "indianEquivalent", label: "Indian Equivalent" },
      { key: "typicalRequirement", label: "Typical Requirement" },
    ],
    rows: [
      {
        programmeLevel: "Bachelor's (UG)",
        indianEquivalent: "Class 12 / HSC (10+2)",
        typicalRequirement:
          "70–85% aggregate (varies by university and subject)",
      },
      {
        programmeLevel: "Master's (PG)",
        indianEquivalent: "Bachelor's Degree",
        typicalRequirement:
          "55–65% CGPA or equivalent (2:1 or 2:2 UK grade equivalent)",
      },
      {
        programmeLevel: "MBA",
        indianEquivalent: "Bachelor's + Work Experience",
        typicalRequirement:
          "50%+ + 2–5 years professional experience + GMAT (varies)",
      },
      {
        programmeLevel: "PhD",
        indianEquivalent: "Master's Degree",
        typicalRequirement:
          "First-class or Merit Master's; research proposal required",
      },
    ],
    emphasizeFirstColumn: true,
  },
  englishRequirements: {
    title: "English Language Requirements",
    columns: [
      { key: "test", label: "Test" },
      { key: "pgMinimum", label: "Typical Minimum (PG)" },
      { key: "ugMinimum", label: "Typical Minimum (UG)" },
      { key: "acceptedBy", label: "Accepted By" },
    ],
    rows: [
      {
        test: "IELTS Academic",
        pgMinimum: "6.5 overall (no band below 6.0)",
        ugMinimum: "6.0 overall",
        acceptedBy: "All UK universities",
      },
      {
        test: "PTE Academic",
        pgMinimum: "58–65 overall",
        ugMinimum: "54–58 overall",
        acceptedBy: "Most UK universities",
      },
      {
        test: "TOEFL iBT",
        pgMinimum: "90–100 overall",
        ugMinimum: "80–90 overall",
        acceptedBy: "Most UK universities",
      },
      {
        test: "Duolingo English Test",
        pgMinimum: "110–120",
        ugMinimum: "105–115",
        acceptedBy: "Select universities",
      },
      {
        test: "MOI Certificate",
        pgMinimum: "From English-medium school/college",
        ugMinimum: "Same",
        acceptedBy: "Select universities — verify with institution",
      },
    ],
    emphasizeFirstColumn: true,
  },
} satisfies Omit<ExamEligibilityRequirementProps, "id" | "className">;

export const UK_EXAMS_BULLETS = [
  "IELTS / PTE / TOEFL for English language proficiency",
  "GRE / GMAT for select postgraduate programmes (university-specific)",
  "Academic transcripts and degree certificates",
  "Statement of Purpose (SOP) and Letters of Recommendation (LOR)",
  "Valid passport and financial documentation",
];

export const UK_ADMISSION_BULLETS = [
  "Completed application form via university portal or UCAS (for UG)",
  "Academic transcripts and English proficiency test scores",
  "Statement of Purpose and Letters of Recommendation",
  "Updated CV for postgraduate applications",
  "Proof of funds and CAS letter for visa stage",
];

export const UK_COUNTRY_PAGE = {
  hero: UK_HERO,
  nav: UK_PAGE_NAV,
  sectionIds: {
    intro: "uk-intro",
    overview: "uk-study-overview",
    whyStudy: "uk-why-study",
    costStudy: "uk-cost",
    costOfLiving: "uk-cost-living",
    topCourses: "uk-courses",
    mastersForIndian: "uk-ms",
    studentVisa: "uk-visa",
    jobsAfterMs: "uk-jobs",
    mba: "uk-mba",
    scholarships: "uk-scholarships",
    examsEligibility: "uk-exams",
    faq: "uk-faq",
  },
  sections: {
    intro: {
      ...UK_INTRO_CONTENT,
      gallery: UK_INTRO_GALLERY,
      stats: UK_INTRO_STATS,
    },
    overview: {
      title: UK_OVERVIEW.title,
      subtitle: UK_OVERVIEW.subtitle,
      overviewData: UK_OVERVIEW.rows,
    },
    whyStudy: UK_WHY_STUDY,
    costStudy: UK_COST_STUDY,
    costOfLiving: UK_COST_OF_LIVING_SECTION,
    topCourses: UK_TOP_COURSES,
    mastersForIndian: UK_MASTERS_FOR_INDIAN,
    studentVisa: UK_STUDENT_VISA,
    jobsAfterMs: UK_JOBS_AFTER_MS,
    mba: UK_MBA_SECTION,
    scholarships: UK_SCHOLARSHIPS_SECTION,
    examsEligibility: UK_EXAMS_ELIGIBILITY_SECTION,
  },
} satisfies CountryStudyPageConfig;
