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

export const GERMANY_COUNTRY_SLUGS = ["germany", "deutschland"] as const;

export function isGermanyCountrySlug(slug: string | undefined): boolean {
  if (!slug) return false;
  return GERMANY_COUNTRY_SLUGS.includes(
    slug.toLowerCase() as (typeof GERMANY_COUNTRY_SLUGS)[number]
  );
}

export const GERMANY_TOP_TABS: CountryTopTab[] = [
  { id: "overview", label: "Overview", sectionId: "germany-intro" },
  { id: "cost", label: "Cost of Studying in Germany", sectionId: "germany-cost" },
  { id: "cost-living", label: "Cost of Living", sectionId: "germany-cost-living" },
  { id: "courses", label: "Top Courses in Germany", sectionId: "germany-courses" },
  { id: "ms", label: "MS in Germany", sectionId: "germany-ms" },
  { id: "visa", label: "German Student Visa", sectionId: "germany-visa" },
  { id: "jobs", label: "Jobs After MS", sectionId: "germany-jobs" },
  { id: "mba", label: "MBA in Germany", sectionId: "germany-mba" },
  { id: "scholarships", label: "Scholarships", sectionId: "germany-scholarships" },
  { id: "exams", label: "Exam & Eligibility", sectionId: "germany-exams" },
];

export const GERMANY_SIDEBAR_LINKS: CountrySidebarLink[] = [
  { id: "intro", label: "Introduction", sectionId: "germany-intro", inIntroGroup: true },
  {
    id: "study-overview",
    label: "Study in Germany: Overview",
    sectionId: "germany-study-overview",
    inIntroGroup: true,
  },
  {
    id: "why-study",
    label: "Why Study in Germany?",
    sectionId: "germany-why-study",
    inIntroGroup: true,
  },
  { id: "cost", label: "Cost of Studying in Germany", sectionId: "germany-cost" },
  { id: "cost-living", label: "Cost of Living in Germany", sectionId: "germany-cost-living" },
  { id: "courses", label: "Top Courses in Germany", sectionId: "germany-courses" },
  { id: "ms", label: "MS in Germany for Indian Students", sectionId: "germany-ms" },
  { id: "visa", label: "German Student Visa", sectionId: "germany-visa" },
  { id: "jobs", label: "Jobs After MS in Germany", sectionId: "germany-jobs" },
  { id: "mba", label: "MBA in Germany", sectionId: "germany-mba" },
  { id: "scholarships", label: "Scholarships to Study in Germany", sectionId: "germany-scholarships" },
  { id: "exams", label: "Exam & Eligibility Requirements", sectionId: "germany-exams" },
  { id: "faq", label: "FAQs", sectionId: "germany-faq" },
];

export const GERMANY_PAGE_NAV: CountryPageNavConfig = {
  topTabs: GERMANY_TOP_TABS,
  sidebarLinks: GERMANY_SIDEBAR_LINKS,
  sidebarCta: "Planning to Study in Germany?",
  sidebarAriaLabel: "Germany study guide navigation",
};

export const GERMANY_HERO = {
  badge: "DE",
  title: "Study in Germany: Top Universities, Courses & Scholarships",
  subtitle: "A complete guide for Indian students planning to study in Germany",
  cta: "Ask Our Experts",
};

export const GERMANY_INTRO_CONTENT = {
  heading: "Introduction to Studying in Germany",
  paragraphs: [
    "Germany has emerged as one of the most attractive study destinations for international students, particularly for those seeking high-quality education at an affordable cost. Renowned for its strong academic system, research-driven universities, and industry-oriented approach, Germany offers students access to globally recognized qualifications and excellent career prospects.",
    "For Indian students, Germany is especially appealing due to its low or no tuition fees at many public universities, strong economy, and growing demand for skilled professionals across sectors such as Engineering, Technology, Business, Data Science, and Healthcare. The country's emphasis on innovation, practical learning, and close collaboration with industry provides students with valuable real-world experience alongside their studies. Additionally, international graduates can benefit from post-study work opportunities, allowing them to remain in Germany to seek employment and build their careers in one of Europe's strongest economies.",
  ],
  highlightPhrases: ["low or no tuition fees", "post-study work opportunities"],
};

export const GERMANY_INTRO_GALLERY: IntroductionGalleryItem[] = [
  {
    src: `${imageBaseUrl}CountryPlaces/germany/germany1.png`,
    label: "German Universities",
    icon: "building",
  },
  {
    src: `${imageBaseUrl}CountryPlaces/germany/germany2.png`,
    label: "Research & Innovation",
    icon: "campus",
  },
  {
    src: `${imageBaseUrl}CountryPlaces/germany/germany3.png`,
    label: "International Student Life",
    icon: "community",
  },
];

export const GERMANY_INTRO_STATS: IntroductionStatItem[] = [
  { icon: "building", label: "UNIVERSITIES", value: "400+" },
  { icon: "globe", label: "WORLD-RANKED (QS TOP 500)", value: "40+" },
  { icon: "graduation", label: "INDIAN STUDENTS (APPROX)", value: "50,000+" },
  { icon: "calendar", label: "MASTER'S DURATION", value: "1.5 - 2 Years" },
  { icon: "flight", label: "POST-STUDY WORK VISA", value: "Up to 18 Months" },
  { icon: "clipboard", label: "MAIN INTAKES", value: "Winter & Summer" },
];

export const GERMANY_OVERVIEW = {
  title: "Study in Germany: Quick Overview",
  subtitle:
    "Here is a quick overview of the key facts Indian students should know before choosing Germany for higher education:",
  rows: [
    { parameter: "Language of Instruction", details: "English (many Master's programmes) / German" },
    { parameter: "Average Tuition (UG)", details: "€0 - €1,500 per year (Public Universities)" },
    {
      parameter: "Average Tuition (PG / MS)",
      details: "€0 - €3,000 per year (Public Universities); higher at private universities",
    },
    { parameter: "Average Cost of Living", details: "€900 - €1,300 per month" },
    {
      parameter: "English Requirement",
      details: "IELTS 6.0-6.5 / TOEFL / PTE / MOI (varies by university)",
    },
    { parameter: "Intakes", details: "October (Winter - main), April (Summer)" },
    { parameter: "Visa Type", details: "German National Student Visa (D Visa)" },
    { parameter: "Types of Programmes", details: "Bachelor's, Master's, PhD, MBA, Research Programmes" },
    { parameter: "Post-Study Work Visa", details: "Up to 18 months to seek employment" },
    {
      parameter: "Top Student Cities",
      details: "Munich, Berlin, Hamburg, Frankfurt, Stuttgart, Cologne, Aachen",
    },
    {
      parameter: "Source of Funding",
      details: "Scholarships, Part-time Work, DAAD Funding, Research Grants, University Aid",
    },
  ] satisfies OverviewRow[],
};

export const GERMANY_WHY_STUDY = {
  title: "Why Study in Germany for Indian Students?",
  intro: [
    "Germany consistently attracts a growing number of Indian students each year, thanks to its high-quality education, affordable tuition fees, and strong career opportunities. Here are the key factors that make Germany a compelling choice:",
  ],
  cards: [
    {
      icon: "graduation",
      title: "World-Class Education",
      description:
        "Germany is home to globally respected universities known for academic excellence, innovation, and industry-focused learning.",
      featured: true,
    },
    {
      icon: "bolt",
      title: "Low or No Tuition Fees",
      description:
        "Many public universities charge little to no tuition fees, making Germany one of the most affordable study destinations in Europe.",
    },
    {
      icon: "briefcase",
      title: "Strong Career Opportunities",
      description:
        "As Europe's largest economy, Germany offers excellent opportunities in Engineering, Technology, Business, Manufacturing, Healthcare, and Research.",
    },
    {
      icon: "flight",
      title: "18-Month Post-Study Work Visa",
      description:
        "International graduates can stay in Germany for up to 18 months after graduation to seek employment related to their field.",
    },
    {
      icon: "globe",
      title: "International & Diverse Environment",
      description:
        "Germany welcomes students from around the world and offers a growing number of English-taught programmes, particularly at the Master's level.",
    },
    {
      icon: "science",
      title: "Research & Innovation Hub",
      description:
        "Germany is a global leader in research, innovation, and technological advancement, with strong links between universities and industry.",
    },
  ] satisfies WhyStudyCard[],
  keyFact: {
    badge: "DE",
    label: "Key Fact for Indian Students:",
    text: "Germany has become one of the fastest-growing study destinations for Indian students. More than 49,000 Indian students are currently enrolled at German universities, making Indians the largest international student group in Germany.",
    highlightPhrases: ["More than 49,000 Indian students", "largest international student group"],
  },
  cta: {
    heading: "Interested in Studying in Germany?",
    subtext:
      "Taksheela's Germany counsellors will assess your profile, shortlist the right universities, and guide you through every step of your German university application journey.",
    buttonText: "Book Free Counselling →",
  },
};

export const GERMANY_COST_STUDY = {
  title: "Cost of Studying in Germany for Indian Students",
  intro: [
    "Understanding the cost of studying in Germany is crucial before planning your education journey. Germany is widely known for its affordable, high-quality education, particularly at public universities where tuition fees are minimal or even waived in many cases. However, students should also consider living expenses, health insurance, and other essential costs.",
  ],
  featuredImage: {
    src: `${imageBaseUrl}CountryPlaces/germany/germany4.png`,
    alt: "University campus in Germany",
    caption: "German universities combine affordable education with strong research and industry exposure",
  },
  tuitionTables: {
    byLevel: {
      title: "Tuition Fees at German Universities",
      rows: [
        { level: "Undergraduate", programmeType: "Bachelor's (BSc / BA / BEng)", avgAnnualTuition: "€0 - €3,000*" },
        { level: "Postgraduate", programmeType: "MSc / MA / MEng", avgAnnualTuition: "€0 - €5,000*" },
        { level: "Postgraduate", programmeType: "MBA", avgAnnualTuition: "€10,000 - €40,000+" },
        { level: "Doctoral", programmeType: "PhD (3-5 years)", avgAnnualTuition: "€0 - €3,000*" },
        {
          level: "Preparatory",
          programmeType: "Foundation / Studienkolleg / Language Courses",
          avgAnnualTuition: "€2,000 - €10,000",
        },
      ],
    },
    topUniversities: {
      title: "Tuition Fees at Top German Universities",
      rows: [
        { university: "Technical University of Munich (TUM)", qsRank: 28, avgMscTuition: "€4,000 - €12,000*" },
        { university: "LMU Munich", qsRank: 59, avgMscTuition: "€0 - €3,000" },
        { university: "Heidelberg University", qsRank: 84, avgMscTuition: "€0 - €3,000" },
        { university: "Freie Universität Berlin", qsRank: 97, avgMscTuition: "€0 - €3,000" },
        { university: "RWTH Aachen University", qsRank: 99, avgMscTuition: "€0 - €3,000" },
        { university: "Karlsruhe Institute of Technology (KIT)", qsRank: 102, avgMscTuition: "€0 - €3,000" },
        { university: "Humboldt University of Berlin", qsRank: 126, avgMscTuition: "€0 - €3,000" },
        { university: "Technical University of Berlin", qsRank: 147, avgMscTuition: "€0 - €3,000" },
        { university: "University of Freiburg", qsRank: 212, avgMscTuition: "€3,000 - €6,000**" },
        { university: "University of Hamburg", qsRank: 191, avgMscTuition: "€0 - €3,000" },
      ],
    },
    note: "Tuition fee figures above are indicative for international students. Actual fees may vary by specific programme, intake year, and university policy. Always check the official university website for the most current fee information.",
    oneTimeCosts: {
      title: "Additional One-Time Costs",
      rows: [
        { expense: "German Student Visa Application Fee", estimatedCost: "€75 (approx ₹7,000-₹8,000)" },
        { expense: "Blocked Account Requirement", estimatedCost: "€11,904 for 1 year (2025-26 requirement; approx €992/month)" },
        { expense: "IELTS / TOEFL Test Fee", estimatedCost: "₹15,000 - ₹18,000 (if required by university)" },
        { expense: "Flight (India to Germany, approx.)", estimatedCost: "₹35,000 - ₹80,000 (one-way)" },
        { expense: "Semester Contribution Fee", estimatedCost: "€100 - €400 per semester (varies by university)" },
        {
          expense: "Initial Setup Costs (Accommodation Deposit, Insurance, SIM, Bedding, etc.)",
          estimatedCost: "€500 - €1,500",
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

export const GERMANY_COST_OF_LIVING_SECTION = {
  title: "Cost of Living in Germany for Indian Students",
  intro: [
    "Understanding the monthly cost of living in Germany is essential for effective financial planning. Costs vary depending on the city, with Munich, Frankfurt, and Hamburg generally being more expensive than cities such as Leipzig, Dresden, or Magdeburg.",
    "Here is a comprehensive monthly breakdown to help Indian students plan their finances before applying.",
  ],
  featuredImage: {
    src: `${imageBaseUrl}CountryPlaces/germany/germany5.png`,
    alt: "Student accommodation and city life in Germany",
    caption: "Student accommodation and city life in Germany",
  },
  breakdown: {
    title: "Monthly Cost of Living Breakdown",
    primaryColumnLabel: "Major Cities (approx)",
    secondaryColumnLabel: "Other Cities (approx)",
    rows: [
      { expense: "Student Accommodation (University Residence)", london: "€300 - €600/month", outsideLondon: "€250 - €450/month" },
      { expense: "Student Accommodation (Private Rental)", london: "€600 - €1,200/month", outsideLondon: "€350 - €700/month" },
      { expense: "Food & Groceries", london: "€200 - €350/month", outsideLondon: "€180 - €300/month" },
      { expense: "Public Transport", london: "€0 - €60/month*", outsideLondon: "€0 - €60/month*" },
      { expense: "Health Insurance", london: "€140 - €150/month", outsideLondon: "€140 - €150/month" },
      { expense: "Utilities & Internet", london: "€80 - €150/month", outsideLondon: "€70 - €120/month" },
      { expense: "Mobile Phone Plan", london: "€10 - €30/month", outsideLondon: "€10 - €25/month" },
      { expense: "Entertainment & Socialising", london: "€100 - €250/month", outsideLondon: "€80 - €180/month" },
      { expense: "Total Monthly Estimate", london: "€1,430 - €2,790", outsideLondon: "€1,110 - €1,985", isTotal: true },
    ],
  },
} satisfies Omit<CostOfLivingProps, "id" | "className">;

export const GERMANY_TOP_COURSES = {
  title: "Best Courses to Study in Germany for Indian Students",
  intro: [
    "Germany is known for its world-class education, strong industry connections, and excellent career opportunities. With affordable tuition fees and a wide range of industry-focused programmes, it remains one of the most popular study destinations for Indian students.",
  ],
  featuredImage: {
    src: `${imageBaseUrl}CountryPlaces/germany/germany2.png`,
    alt: "Students in a collaborative session at a German university",
    caption: "Industry-focused programmes make Germany a strong destination for Indian students",
  },
  gridTitle: "Most Popular Courses for Indian Students in Germany",
  courses: [
    {
      icon: "dataScience",
      title: "Data Science & Analytics",
      description:
        "Germany's digital transformation has created strong demand for data professionals across technology, automotive, finance, and manufacturing sectors.",
    },
    {
      icon: "ai",
      title: "Artificial Intelligence & Machine Learning",
      description:
        "Germany is investing heavily in AI research and innovation, with excellent opportunities in automation, robotics, and intelligent systems.",
    },
    {
      icon: "cs",
      title: "Computer Science & Information Technology",
      description:
        "One of the most sought-after fields, offering strong career prospects in software development, cybersecurity, cloud computing, and IT consulting.",
    },
    {
      icon: "engineering",
      title: "Engineering",
      description:
        "Germany is globally renowned for Mechanical, Automotive, Electrical, Civil, and Industrial Engineering, supported by strong industry partnerships.",
    },
    {
      icon: "engineering",
      title: "Automotive Engineering",
      description:
        "Home to BMW, Mercedes-Benz, Volkswagen, Porsche, and Audi, Germany is a top destination for automotive studies.",
    },
    {
      icon: "mba",
      title: "Business Management & International Business",
      description:
        "Industry-oriented programmes prepare students for careers in multinational companies, consulting firms, and global enterprises.",
    },
    {
      icon: "finance",
      title: "Finance, Economics & Accounting",
      description:
        "Germany's position as Europe's largest economy creates strong opportunities in banking, finance, economics, and corporate management.",
    },
    {
      icon: "engineering",
      title: "Renewable Energy & Sustainability",
      description:
        "A global leader in green technology and sustainable development, Germany offers cutting-edge programmes in renewable energy and environmental management.",
    },
    {
      icon: "health",
      title: "Biotechnology & Life Sciences",
      description:
        "Strong research infrastructure and innovation-driven industries make Germany an attractive destination for biotechnology and healthcare-related studies.",
    },
    {
      icon: "mba",
      title: "Supply Chain & Logistics Management",
      description:
        "Germany's central location in Europe and strong manufacturing sector create excellent opportunities in logistics, operations, and supply chain management.",
    },
  ] satisfies TopCourseCard[],
  universitiesByCourse: {
    title: "Top German Universities by Course",
    rows: [
      { course: "Data Science / AI", universities: "TUM, LMU Munich, RWTH Aachen, TU Berlin", approxFees: "€0 - €6,000" },
      { course: "Business Management", universities: "Mannheim, WHU, ESMT Berlin, Frankfurt School", approxFees: "€0 - €25,000" },
      { course: "Computer Science", universities: "TUM, RWTH Aachen, KIT, Saarland University", approxFees: "€0 - €4,000" },
      { course: "Finance / Economics", universities: "Mannheim, Frankfurt School, Goethe University Frankfurt, LMU Munich", approxFees: "€0 - €25,000" },
      { course: "Engineering", universities: "TUM, RWTH Aachen, KIT, TU Dresden", approxFees: "€0 - €4,000" },
      { course: "Biotechnology / Life Sciences", universities: "Heidelberg, LMU Munich, University of Freiburg, TUM", approxFees: "€0 - €4,000" },
      { course: "Automotive Engineering", universities: "RWTH Aachen, TUM, TU Munich, FH Aachen", approxFees: "€0 - €5,000" },
      { course: "MBA", universities: "Mannheim Business School, ESMT Berlin, WHU, Frankfurt School", approxFees: "€15,000 - €45,000" },
      { course: "Renewable Energy / Sustainability", universities: "University of Freiburg, TU Berlin, University of Oldenburg, RWTH Aachen", approxFees: "€0 - €4,000" },
      { course: "Supply Chain & Logistics", universities: "Kühne Logistics University, RWTH Aachen, TU Dortmund, Frankfurt UAS", approxFees: "€0 - €18,000" },
    ] satisfies UniversityByCourseRow[],
  },
  proTip: {
    label: "Pro Tip from Taksheela",
    text: "The best course for you is not just the most popular one — it's the one that aligns with your undergraduate degree, work experience (if any), and 5-year career vision. Our counsellors help you find that match before you apply anywhere.",
  },
};

export const GERMANY_MASTERS_FOR_INDIAN = {
  title: "Masters (MS) in Germany for Indian Students",
  intro: [
    "Germany is a leading destination for Indian students pursuing a 2-year Master's degree (MS/MSc), offering world-class education, affordable tuition fees, and excellent career prospects. With many public universities charging low or no tuition fees, strong industry connections, and access to Europe's largest economy, Germany provides an ideal environment for both academic excellence and long-term professional growth.",
  ],
  featuredImage: {
    src: `${imageBaseUrl}CountryPlaces/germany/germany3.png`,
    alt: "Masters students at a German university",
    caption: "German Master's programmes combine academic depth, research exposure, and industry links",
  },
  whyChoose: {
    title: "Why Choose a 2-Year Master's in Germany?",
    cards: [
      {
        icon: "time",
        title: "Industry-Focused Learning",
        description:
          "Most Master's programmes in Germany are completed in 2 years, allowing students to gain deeper subject knowledge, practical exposure, internships, and research experience.",
      },
      {
        icon: "cost",
        title: "Highly Affordable Education",
        description:
          "Many public universities charge low or no tuition fees, making Germany one of the most cost-effective study destinations in the world.",
      },
      {
        icon: "global",
        title: "Globally Respected Degrees",
        description:
          "German qualifications are recognised and valued by employers across Europe, India, North America, the Middle East, and beyond.",
      },
      {
        icon: "work",
        title: "18-Month Post-Study Work Opportunity",
        description:
          "After graduation, international students can stay in Germany for up to 18 months to search for a job.",
      },
    ] satisfies MastersWhyCard[],
  },
  eligibility: {
    title: "Eligibility for MS in Germany",
    items: [
      "A recognised Bachelor's degree in a relevant field, typically with 60-70%+ aggregate.",
      "IELTS 6.0-6.5+ overall, TOEFL equivalent, or MOI accepted by some universities.",
      "A well-written Statement of Purpose or Letter of Motivation.",
      "Usually 1-2 academic or professional Letters of Recommendation.",
      "Updated CV or resume highlighting academic achievements, internships, work experience, research projects, and technical skills.",
      "Complete academic records, degree certificates, and programme-specific supporting documents.",
      "GRE / GMAT may be required or preferred for selected competitive programmes.",
      "German language proficiency such as TestDaF, DSH, or Goethe Certificate may be required for German-taught programmes.",
    ],
  },
  universitiesTable: {
    title: "Top German Universities for MS Programmes",
    rows: [
      { university: "Technical University of Munich (TUM)", popularProgrammes: "Data Science, AI, Robotics, Engineering, Management", minCgpa: "70-75%+", fees: "€0 - €12,000*" },
      { university: "RWTH Aachen University", popularProgrammes: "Mechanical Engineering, Automotive, Data Science, Computer Science", minCgpa: "65-75%+", fees: "€300-€700/semester" },
      { university: "LMU Munich", popularProgrammes: "Data Science, Economics, Management, Life Sciences", minCgpa: "65-75%+", fees: "€0 - €700/year" },
      { university: "Karlsruhe Institute of Technology (KIT)", popularProgrammes: "Computer Science, AI, Electrical Engineering, Energy Systems", minCgpa: "65-75%+", fees: "€3,000-€6,000**" },
      { university: "Heidelberg University", popularProgrammes: "Biotechnology, Data Science, Life Sciences, Economics", minCgpa: "60-70%+", fees: "€0 - €3,000**" },
      { university: "TU Berlin", popularProgrammes: "Computer Science, Engineering, Urban Management, Energy Engineering", minCgpa: "60-70%+", fees: "€300-€700/semester" },
      { university: "University of Freiburg", popularProgrammes: "Renewable Energy, Computer Science, Environmental Sciences", minCgpa: "60-70%+", fees: "€3,000-€6,000**" },
      { university: "University of Mannheim", popularProgrammes: "Business Analytics, Management, Economics, Finance", minCgpa: "65-75%+", fees: "€3,000-€6,000**" },
    ],
  } satisfies MastersUniversitiesTable,
  applicationProcess: {
    title: "Taksheela's MS Application Process",
    steps: [
      "Profile assessment — matching your academic background to suitable universities",
      "University shortlisting based on your target programme, budget, and profile strength",
      "SOP crafting and LOR guidance",
      "Application submission and tracking with all universities",
      "Offer letter receipt and scholarship identification",
      "German Student Visa documentation and application support",
    ],
  } satisfies MastersApplicationProcess,
};

export const GERMANY_STUDENT_VISA = {
  title: "German Student Visa for Indian Students",
  intro: [
    "The German Student Visa (National Visa - Type D) is required for Indian students planning to pursue higher education in Germany. Here is a simplified overview of the German student visa process:",
  ],
  steps: [
    { number: 1, title: "Get University Admission", description: "Receive an admission letter (Zulassungsbescheid) from a recognised German university." },
    { number: 2, title: "Open a Blocked Account", description: "Open a German blocked account and deposit the required funds to demonstrate financial capability for living expenses." },
    { number: 3, title: "Prepare Visa Documents", description: "Gather required documents including admission letter, passport, APS certificate, blocked account confirmation, health insurance, academics, and language proofs." },
    { number: 4, title: "Book Visa Appointment", description: "Schedule and attend your student visa appointment at the German Embassy/Consulate or VFS Visa Application Centre in India." },
    { number: 5, title: "Attend Visa Interview", description: "Submit your documents, provide biometrics, and attend the visa interview if applicable." },
    { number: 6, title: "Receive Visa Decision", description: "Upon approval, receive your National Student Visa and prepare for your journey to Germany." },
    { number: 7, title: "Register in Germany", description: "After arrival, complete city registration (Anmeldung) and apply for your residence permit at the local Foreigners' Office." },
  ],
  featuredImage: {
    src: `${imageBaseUrl}CountryPlaces/germany/germany6.png`,
    alt: "German student visa process",
    caption: "Start the German student visa process early for smoother intake planning",
  },
  requirements: {
    title: "German Student Visa Requirements for Indian Students",
    items: [
      { label: "University Admission Letter", description: "Admission/Offer Letter (Zulassungsbescheid) issued by a recognised German university." },
      { label: "Valid Passport", description: "Must be valid for the entire duration of your intended stay in Germany." },
      { label: "Blocked Account Proof", description: "Proof of sufficient financial resources, typically through a German blocked account containing the required annual amount." },
      { label: "APS Certificate", description: "Mandatory for Indian applicants before applying for a German student visa." },
      { label: "English or German Language Proficiency", description: "IELTS, TOEFL, PTE, MOI, or German language certificates for German-taught programmes." },
      { label: "Health Insurance Proof", description: "Valid health insurance coverage is required in Germany before visa approval and university enrolment." },
      { label: "Academic Documents", description: "Academic transcripts, degree certificates, mark sheets, and other supporting educational documents." },
      { label: "Visa Application Form & Declaration", description: "Completed National Visa application form along with required declarations and passport-sized photographs." },
      { label: "Proof of Accommodation", description: "University housing confirmation, rental agreement, or temporary accommodation details if available." },
      { label: "Parental Consent Letter", description: "Required if the applicant is under 18 years of age." },
    ],
  },
  keyDetails: {
    title: "German Student Visa Fees & Key Details",
    rows: [
      { detail: "Visa Application Fee", information: "€75 (approx. ₹7,000-₹8,000)" },
      { detail: "Blocked Account Requirement", information: "€11,904 for 1 year (subject to revision by German authorities)" },
      { detail: "Processing Time", information: "4-12 weeks (varies by Embassy/Consulate and application volume)" },
      { detail: "Visa Validity", information: "Usually issued for entry into Germany; converted to a Residence Permit after arrival" },
      { detail: "Work Allowance During Study", information: "140 full days or 280 half days per year (equivalent to approx. 20 hrs/week)" },
      { detail: "Post-Study Work Opportunity", information: "18 months to search for employment after graduation" },
      { detail: "Dependent Visa", information: "Generally available for spouses and children under specific conditions" },
    ],
  },
  note: {
    label: "Apply Early",
    text: "German student visa applications should ideally be submitted 3-6 months before your course starts. Ensure that your APS Certificate, Blocked Account, and Health Insurance are arranged well in advance.",
  },
} satisfies Omit<StudentVisaProps, "id" | "className">;

export const GERMANY_JOBS_AFTER_MS = {
  title: "Jobs After MS in Germany for Indian Students",
  intro: [
    "Germany offers excellent career prospects for MS graduates, driven by its strong economy, industry-focused education, and high demand for skilled professionals. With an 18-month post-study work opportunity and thriving sectors such as Engineering, IT, AI, Automotive, Finance, Renewable Energy, and Manufacturing, graduates can access rewarding careers with global companies.",
  ],
  featuredImage: {
    src: `${imageBaseUrl}CountryPlaces/germany/germany7.png`,
    alt: "Career opportunities after MS in Germany",
    caption: "Germany offers strong graduate outcomes across engineering, technology, finance, and manufacturing",
  },
  employers: {
    title: "Top German Employers Hiring International Graduates",
    chips: [
      "BMW",
      "Mercedes-Benz",
      "Volkswagen",
      "Audi",
      "Porsche",
      "Siemens",
      "Bosch",
      "SAP",
      "Deutsche Bank",
      "Allianz",
      "Infineon Technologies",
      "BASF",
      "DHL Group",
      "Airbus",
      "Amazon Germany",
      "Google Germany",
      "Accenture Germany",
    ].map((label) => ({ label })),
  },
  careerTip: {
    label: "Career Tip",
    title: "International exposure matters",
    text: "Indian students with a German Master's degree often enjoy strong career outcomes both in Germany and upon returning to India, especially in Engineering, IT, Data Science, AI, Automotive, Finance, and Renewable Energy.",
  },
  graduateRoute: {
    title: "Post-Study Work Opportunity in Germany",
    description:
      "Germany allows international graduates to stay in the country for up to 18 months after completing their degree to search for employment related to their qualifications.",
    bullets: [
      { text: "Work in any role while searching for a graduate-level position" },
      { text: "Apply for jobs across Germany without requiring employer sponsorship" },
      { text: "Transition to an EU Blue Card or German Work Residence Permit upon securing a qualifying job" },
      { text: "Gain valuable international work experience in Europe's largest economy" },
      { text: "Explore opportunities with global companies in Engineering, IT, Automotive, Finance, Manufacturing, and more" },
    ],
  },
  salaries: {
    title: "Average Salaries for MS Graduates in Germany",
    rows: [
      { role: "Data Scientist / AI Engineer", salary: "€50,000 - €70,000", cities: "Berlin, Munich, Hamburg" },
      { role: "Software Developer / IT Engineer", salary: "€48,000 - €68,000", cities: "Berlin, Munich, Frankfurt" },
      { role: "Financial Analyst / Banking Professional", salary: "€50,000 - €75,000", cities: "Frankfurt, Munich, Hamburg" },
      { role: "Mechanical / Automotive Engineer", salary: "€50,000 - €70,000", cities: "Munich, Stuttgart, Wolfsburg" },
      { role: "Electrical / Electronics Engineer", salary: "€48,000 - €68,000", cities: "Munich, Berlin, Dresden" },
      { role: "Business Analyst / Consultant", salary: "€50,000 - €75,000", cities: "Frankfurt, Munich, Berlin" },
      { role: "Cybersecurity / Cloud Engineer", salary: "€55,000 - €80,000", cities: "Berlin, Munich, Hamburg" },
      { role: "Renewable Energy Engineer", salary: "€45,000 - €65,000", cities: "Hamburg, Freiburg, Berlin" },
      { role: "Supply Chain & Logistics Professional", salary: "€45,000 - €65,000", cities: "Hamburg, Frankfurt, Cologne" },
      { role: "Biotechnology / Life Sciences Professional", salary: "€45,000 - €65,000", cities: "Heidelberg, Munich, Berlin" },
    ],
  },
} satisfies Omit<JobsAfterMSProps, "id" | "className">;

export const GERMANY_MBA_SECTION = {
  title: "MBA in Germany for Indian Students",
  intro: [
    "Germany is an attractive destination for Indian professionals pursuing an MBA, offering globally recognised business education, strong industry connections, and access to Europe's largest economy. With MBA programmes typically lasting 1-2 years, affordable tuition options, and excellent post-study career opportunities, Germany delivers strong value and long-term career growth.",
  ],
  featuredImage: {
    src: `${imageBaseUrl}CountryPlaces/germany/germany8.png`,
    alt: "MBA classroom in Germany",
    caption: "German MBA programmes offer strong ROI, industry exposure, and European career access",
  },
  programmes: {
    title: "Top MBA Programmes in Germany",
    rows: [
      { businessSchool: "Mannheim Business School", duration: "12 Months", fees: "€45,000 - €50,000", ftRank: "Germany's Leading MBA" },
      { businessSchool: "ESMT Berlin", duration: "15 Months", fees: "€50,000+", ftRank: "Among Europe's Top MBAs" },
      { businessSchool: "WHU - Otto Beisheim School of Management", duration: "12 Months", fees: "€40,000 - €50,000", ftRank: "Top-Ranked German Business School" },
      { businessSchool: "Frankfurt School of Finance & Management", duration: "12 Months", fees: "€39,000 - €45,000", ftRank: "Finance & Banking Reputation" },
      { businessSchool: "HHL Leipzig Graduate School of Management", duration: "15-21 Months", fees: "€35,000 - €40,000", ftRank: "Entrepreneurship Focus" },
      { businessSchool: "EU Business School Munich", duration: "12 Months", fees: "€25,000 - €30,000", ftRank: "International Business Focus" },
      { businessSchool: "Munich Business School", duration: "18 Months", fees: "€30,000 - €35,000", ftRank: "Industry & Global Exposure" },
      { businessSchool: "GISMA Business School", duration: "12-24 Months", fees: "€15,000 - €25,000", ftRank: "Career-Oriented Programmes" },
    ],
  },
  eligibility: {
    title: "MBA Eligibility in Germany for Indian Students",
    items: [
      "A recognised Bachelor's degree in any discipline from an accredited university.",
      "Most German MBA programmes require 2-5 years of full-time work experience; top business schools often prefer 3-7+ years.",
      "Many leading German business schools recommend or require a GMAT score of 550-700+.",
      "IELTS 6.5-7.0 overall, TOEFL equivalent, or other accepted English language qualifications.",
      "A strong Statement of Purpose or Motivation Letter.",
      "Typically 1-2 professional recommendation letters from employers, managers, or supervisors.",
    ],
  },
  whyBanner: {
    title: "Why a German MBA for Indian Professionals?",
    bullets: [
      { text: "High ROI & Affordable Education" },
      { text: "Access to Europe's Largest Economy" },
      { text: "Strong International Career Prospects" },
      { text: "18-Month Post-Study Work Opportunity" },
      { text: "Competitive Post-MBA Salaries" },
    ],
  },
} satisfies Omit<MbaSectionProps, "id" | "className">;

export const GERMANY_SCHOLARSHIPS_SECTION = {
  title: "Scholarships to Study in Germany for Indian Students",
  intro: [
    "Scholarships can significantly reduce the cost of studying in Germany. While many public universities already offer low or no tuition fees, several government-funded, foundation-based, and university-specific scholarships are available for Indian students pursuing bachelor's, master's, and doctoral programmes.",
  ],
  cards: [
    {
      icon: "award",
      title: "DAAD Scholarship",
      badge: "Fully Funded / €934-€1,500+ per month",
      description:
        "Germany's most prestigious scholarship programme for international students. Covers living expenses, health insurance, travel allowance, and selected research or study-related costs.",
    },
    {
      icon: "merit",
      title: "Deutschlandstipendium",
      badge: "€300 per month",
      description:
        "A merit-based scholarship jointly funded by the German government and private sponsors for outstanding students across participating German universities.",
    },
    {
      icon: "trust",
      title: "Konrad-Adenauer-Stiftung Scholarship",
      badge: "€934-€1,400 per month",
      description:
        "Supports academically excellent international students with demonstrated leadership qualities and social commitment.",
    },
    {
      icon: "future",
      title: "Heinrich Böll Foundation Scholarship",
      badge: "€934-€1,400 per month",
      description:
        "Awarded to high-achieving students who demonstrate academic excellence and a commitment to sustainability, democracy, and social responsibility.",
    },
    {
      icon: "commonwealth",
      title: "Friedrich Ebert Foundation Scholarship",
      badge: "€934-€1,400 per month",
      description:
        "Designed for talented international students with strong academic records and active involvement in social or community initiatives.",
    },
    {
      icon: "university",
      title: "Erasmus+ Scholarship",
      badge: "€300-€850 per month",
      description:
        "Available for eligible students enrolled in Erasmus Mundus and participating European programmes, covering living and mobility-related costs.",
    },
    {
      icon: "great",
      title: "KAAD Scholarship",
      badge: "Fully Funded / Partial Funding",
      description:
        "Supports talented students from developing countries pursuing postgraduate education in Germany, with financial assistance and mentoring.",
    },
    {
      icon: "university",
      title: "University Merit Scholarships",
      badge: "€1,000-€12,000+ per year",
      description:
        "Many German universities offer scholarships and grants based on academic performance, research potential, and extracurricular achievements.",
    },
    {
      icon: "earlyBird",
      title: "Baden-Württemberg Scholarship",
      badge: "€600-€1,400 per month",
      description:
        "Available at selected universities in Baden-Württemberg for outstanding international students participating in exchange or degree programmes.",
    },
  ],
  tip: {
    label: "Scholarship Tip",
    text: "Most scholarship applications open alongside university admissions, typically between October and March for the following academic year. Applying early, maintaining a strong academic profile, and submitting a compelling motivation letter can significantly improve your chances of securing funding.",
    highlightPhrases: ["October and March", "Applying early"],
  },
} satisfies Omit<ScholarshipSectionProps, "id" | "className">;

export const GERMANY_EXAMS_ELIGIBILITY_SECTION = {
  title: "Exam & Eligibility Requirements for German Universities",
  intro: [
    "Each German university and programme has its own admission criteria, but here is a comprehensive guide to the standard academic and language requirements for Indian students applying to undergraduate and postgraduate programmes in Germany.",
  ],
  academicEligibility: {
    title: "Academic Eligibility",
    columns: [
      { key: "programmeLevel", label: "Programme Level" },
      { key: "indianEquivalent", label: "Indian Equivalent" },
      { key: "typicalRequirement", label: "Typical Requirement" },
    ],
    rows: [
      { programmeLevel: "Bachelor's (UG)", indianEquivalent: "Class 12 / HSC (10+2)", typicalRequirement: "70-90% aggregate; some students may require a Studienkolleg/Foundation Year" },
      { programmeLevel: "Master's (PG)", indianEquivalent: "Bachelor's Degree", typicalRequirement: "60-75% aggregate or equivalent CGPA; relevant academic background required" },
      { programmeLevel: "MBA", indianEquivalent: "Bachelor's + Work Experience", typicalRequirement: "50-60%+ + 2-5 years professional experience; GMAT/GRE may be required" },
      { programmeLevel: "PhD", indianEquivalent: "Master's Degree", typicalRequirement: "Strong Master's degree, research proposal, and faculty supervisor approval often required" },
    ],
    emphasizeFirstColumn: true,
  },
  englishRequirements: {
    title: "Language Requirements",
    columns: [
      { key: "test", label: "Test" },
      { key: "typicalMinimum", label: "Typical Minimum / Requirement" },
      { key: "acceptedBy", label: "Accepted By" },
    ],
    rows: [
      { test: "IELTS Academic", typicalMinimum: "6.0-6.5 overall (PG); 6.0 overall (UG)", acceptedBy: "Most German universities" },
      { test: "TOEFL iBT", typicalMinimum: "80-100 overall (PG); 80-90 overall (UG)", acceptedBy: "Most German universities" },
      { test: "PTE Academic", typicalMinimum: "58-65 overall (PG); 54-58 overall (UG)", acceptedBy: "Select universities" },
      { test: "Duolingo English Test", typicalMinimum: "105-120 (PG); 100-115 (UG)", acceptedBy: "Select universities" },
      { test: "MOI Certificate", typicalMinimum: "Accepted by some universities", acceptedBy: "Subject to university approval" },
      { test: "TestDaF", typicalMinimum: "TDN 4 in all sections", acceptedBy: "German-taught programmes" },
      { test: "DSH", typicalMinimum: "DSH-2 or above", acceptedBy: "German-taught programmes" },
      { test: "Goethe Certificate", typicalMinimum: "B2-C1 Level", acceptedBy: "German-taught programmes" },
      { test: "Telc Deutsch", typicalMinimum: "C1 Hochschule", acceptedBy: "German-taught programmes" },
      { test: "APS Certificate", typicalMinimum: "Mandatory for Indian students", acceptedBy: "Visa and many university processes" },
    ],
    emphasizeFirstColumn: true,
  },
} satisfies Omit<ExamEligibilityRequirementProps, "id" | "className">;

export const GERMANY_FAQS = [
  {
    question: "What is the minimum percentage required to study in Germany?",
    answer:
      "Most German universities require 60-70%+ in a relevant bachelor's degree for master's programmes. Top-ranked universities and competitive courses may expect 70-75%+ or equivalent CGPA.",
  },
  {
    question: "Can I study in Germany without IELTS?",
    answer:
      "Yes. Many German universities accept a Medium of Instruction (MOI) certificate instead of IELTS. However, IELTS 6.0-6.5+ can strengthen your application and increase university options.",
  },
  {
    question: "What is the cost of studying in Germany for Indian students?",
    answer:
      "Many public universities charge low or no tuition fees, with students mainly paying a semester contribution. Living expenses typically range from €900-€1,500 per month, depending on the city.",
  },
  {
    question: "What scholarships are available for Indian students to study in Germany?",
    answer:
      "Indian students can apply for prestigious scholarships such as DAAD, Deutschlandstipendium, Erasmus+, and university-specific awards, which can cover living costs, tuition support, or both.",
  },
  {
    question: "How long does the German student visa process take for Indian students?",
    answer:
      "German student visa processing usually takes 4-12 weeks, depending on the embassy and application volume. Students are advised to begin the process 3-6 months before intake.",
  },
  {
    question: "Can I work while studying in Germany?",
    answer:
      "Yes. International students can work up to 140 full days or 280 half days per year, helping them gain valuable experience and support their living expenses while studying.",
  },
  {
    question: "How can Taksheela help me apply to German universities?",
    answer:
      "Taksheela provides end-to-end guidance, including university shortlisting, application assistance, SOP review, APS support, scholarship guidance, visa documentation, and pre-departure preparation.",
  },
];

export const GERMANY_COUNTRY_PAGE = {
  hero: GERMANY_HERO,
  nav: GERMANY_PAGE_NAV,
  sectionIds: {
    intro: "germany-intro",
    overview: "germany-study-overview",
    whyStudy: "germany-why-study",
    costStudy: "germany-cost",
    costOfLiving: "germany-cost-living",
    topCourses: "germany-courses",
    mastersForIndian: "germany-ms",
    studentVisa: "germany-visa",
    jobsAfterMs: "germany-jobs",
    mba: "germany-mba",
    scholarships: "germany-scholarships",
    examsEligibility: "germany-exams",
    faq: "germany-faq",
  },
  sections: {
    intro: {
      ...GERMANY_INTRO_CONTENT,
      gallery: GERMANY_INTRO_GALLERY,
      stats: GERMANY_INTRO_STATS,
    },
    overview: {
      title: GERMANY_OVERVIEW.title,
      subtitle: GERMANY_OVERVIEW.subtitle,
      overviewData: GERMANY_OVERVIEW.rows,
    },
    whyStudy: GERMANY_WHY_STUDY,
    costStudy: GERMANY_COST_STUDY,
    costOfLiving: GERMANY_COST_OF_LIVING_SECTION,
    topCourses: GERMANY_TOP_COURSES,
    mastersForIndian: GERMANY_MASTERS_FOR_INDIAN,
    studentVisa: GERMANY_STUDENT_VISA,
    jobsAfterMs: GERMANY_JOBS_AFTER_MS,
    mba: GERMANY_MBA_SECTION,
    scholarships: GERMANY_SCHOLARSHIPS_SECTION,
    examsEligibility: GERMANY_EXAMS_ELIGIBILITY_SECTION,
  },
  faqs: GERMANY_FAQS,
} satisfies CountryStudyPageConfig;
