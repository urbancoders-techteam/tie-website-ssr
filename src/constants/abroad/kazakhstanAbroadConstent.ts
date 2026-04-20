/**
 * Kazakhstan MBBS abroad — single source of truth for `/mbbs/abroad/kazakhstan` UI copy and structured data.
 * Types mirror Georgia/Russia; shared imports from `russiaAbroadConstent`.
 */

import { imageBaseUrl } from "@/utils/config";
import type {
  AbroadCtaBannerContent,
  AbroadQuickFactItem,
  AbroadWhyChooseMbbsContent,
  AbroadWhyChooseMbbsItem,
  AbroadWhyChooseMbbsSectionContent,
  AbroadFearsContent,
  AbroadEligibilityContent,
  AbroadAdmissionProcessContent,
} from "./russiaAbroadConstent";

export type AbroadHeroHeadline = {
  line1: string;
  /** Shown in accent (italic gold) */
  line2Accent: string;
  line3: string;
};

export type AbroadHeroCta = {
  primaryText: string;
  secondaryText: string;
  secondaryHref: string;
};

export type AbroadHeroStatPair = {
  label: string;
  value: string;
};

/** Full hero payload — every visible string in the hero can be driven from here. */
export type AbroadHeroContent = {
  eyebrow: string;
  headline: AbroadHeroHeadline;
  /** Body paragraph under the headline */
  description: string;
  /** Optional explicit hero background image URL/path */
  backgroundImage?: string;
  /** Truncate description to this length (default 260) */
  descriptionMaxLength?: number;
  cta: AbroadHeroCta;
  /** Four cells in the bordered row (e.g. Total Fees, Duration, Medium, Intake) */
  quickStats: [
    AbroadHeroStatPair,
    AbroadHeroStatPair,
    AbroadHeroStatPair,
    AbroadHeroStatPair,
  ] | AbroadHeroStatPair[];
};

export const kazakhstanAbroadHeroContent: AbroadHeroContent = {
  eyebrow: "Admissions Open · 2026–27 Intake",
  backgroundImage: `${imageBaseUrl}mbbsCollege/kazakhstan/kzkstan_hero_img.png`,
  headline: {
    line1: "Study MBBS in",
    line2Accent: "Kazakhstan",
    line3: "— Where Affordability Meets World-Class Medical Training.",
  },
  description:
    "NMC and WHO-approved medical degree in English, from ₹3.5L per year. 9,000+ Indian students already enrolled. Zero capitation. Zero donation. End-to-end guidance from Taksheela.",
  descriptionMaxLength: 260,
  cta: {
    primaryText: "Book Free Counselling →",
    secondaryText: "View Universities",
    secondaryHref: "#top-universities",
  },
  quickStats: [
    { label: "Annual Fees From", value: "₹3.5L" },
    { label: "Total Duration", value: "6 Yrs" },
    { label: "Indian Students", value: "9K+" },
    { label: "NMC-Approved Unis", value: "10+" },
    { label: "Universities", value: "50+" },
  ],
};

// --- Overview section (OverviewAbroad) ---------------------------------------

export type AbroadOverviewOfficialData = {
  leadBold: string;
  /** Text before the bold segment. Placeholders: `{countryName}` */
  textBeforeBold: string;
  /** Bold segment (typically includes `{universityCount}+ recognised medical universities`). */
  textBold: string;
  /** Text after the bold segment. */
  textAfterBold: string;
};

export type AbroadOverviewMediaPlaceholder = {
  emoji: string;
  /** Main placeholder line, e.g. "[Russia Medical University Campus Image]" */
  title: string;
  subtitle: string;
};

export type AbroadOverviewRecognisedStrip = {
  label: string;
  body: string;
};

/** Full overview payload for the white "Overview" section. */
export type AbroadOverviewContent = {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  officialData: AbroadOverviewOfficialData;
  mediaPlaceholder: AbroadOverviewMediaPlaceholder;
  recognisedStrip: AbroadOverviewRecognisedStrip;
};

export const kazakhstanAbroadOverviewContent: AbroadOverviewContent = {
  eyebrow: "Overview",
  heading: "Why Kazakhstan is Rising as South Asia's Premier MBBS Destination",
  paragraphs: [
    "Kazakhstan — Central Asia's largest and most economically dynamic nation — has steadily cemented its position as one of the most dependable destinations for medical education among students from India, Nepal, and Bangladesh. Sitting at the geographical and cultural crossroads of Europe and Asia, Kazakhstan offers a unique combination: NMC-approved, WHO-listed medical degrees delivered in English, at annual fees as low as ₹3 lakhs, inside university campuses equipped with modern hospitals and simulation laboratories.",
    "According to the Ministry of Science and Higher Education of Kazakhstan (2024–25 data), over 35,000+ international students pursue medical programs in Kazakhstan annually, with Indian students constituting approximately 48% of this pool — translating to over 9,500+ Indian students enrolled across Kazakh medical universities in the current academic cycle. This figure has grown steadily even as other Central Asian destinations have fluctuated due to geopolitical and regulatory shifts.",
    "Kazakhstan's 10+ NMC-approved medical universities are governed by the Ministry of Healthcare and the Ministry of Education and Science of Kazakhstan. They follow a standardised 6-year (5+1) curriculum aligned with NMC's requirements under the Gazette of India, including English as the primary medium of instruction, mandatory clinical exposure from Year 3, and a compulsory 12-month internship. Degrees from these institutions are recognised by WHO, NMC (India), FAIMER, ECFMG, and UNESCO — giving graduates pathways to practice in India (after NExT), the UK (PLAB), the USA (USMLE), the Gulf, and beyond.",
  ],
  officialData: {
    leadBold:
      "Official Data (Kazakhstan MoH / higher education trends, 2024–25):",
    textBeforeBold: "{countryName} hosts ",
    textBold: "{universityCount}+ NMC-listed medical universities",
    textAfterBold:
      " on India’s current approved foreign list (verify the live PDF before admission). English-medium General Medicine tracks, clinical training from Year 3, and internship structure are aligned with what Indian regulators expect when you plan NExT.",
  },
  mediaPlaceholder: {
    emoji: "🏛️",
    title: "[Kazakhstan Medical University Campus Image]",
    subtitle: "Replace with actual asset",
  },
  recognisedStrip: {
    label: "Recognised by:",
    body: "WHO (WDOMS) · NMC India · WFME-aligned pathways where applicable · ECFMG / FAIMER (institution-dependent) · UNESCO sector engagement — enabling NExT (India), USMLE, PLAB, and Gulf licensing when individual requirements are met.",
  },
};

// --- Common fears (CommonFearsSection) ----------------------------------------

export const kazakhstanAbroadFearsContent: AbroadFearsContent = {
  section: {
    eyebrow: "Common Fears & Real Answers",
    titleLead: "What Students Worry About Before Choosing Kazakhstan",
    titleMiddle: " — ",
    titleAccent: "And How Taksheela Resolves It",
    titleTrail: "",
    subtitle:
      "Honest answers to the questions families ask first — validity, climate, language, NExT, trust, and loans.",
  },
  painTitle: "Pain Point",
  solutionTitle: "Taksheela's Solution",
  painPoints: [
    {
      icon: "😰",
      title: '"Will my Kazakh degree be valid in India?"',
      description:
        "Students spend 6 years and ₹35-50 lakhs abroad and fear returning to find their degree isn't accepted by NMC.",
    },
    {
      icon: "❄️",
      title: '"Kazakhstan winters are extreme. I can\'t handle that."',
      description:
        "Cities like Astana drop to -25°C in January. Students from tropical India, Nepal, and Bangladesh are understandably worried about health and acclimatisation.",
    },
    {
      icon: "🗣️",
      title: '"I\'ll face a language barrier with patients during rotations."',
      description:
        "Clinical rotations require communicating with Kazakh or Russian-speaking patients. Students worry about patient interaction in a foreign language.",
    },
    {
      icon: "📉",
      title: '"What\'s the NExT pass rate for Kazakhstan graduates?"',
      description:
        "Students are concerned about licensing exam outcomes after returning to India, especially with the newer NExT replacing FMGE.",
    },
    {
      icon: "🔍",
      title:
        '"How do I know my counsellor isn\'t just sending me to a commission-paying university?"',
      description:
        "Many agents recommend universities based on the highest commission they receive — not what's best for the student.",
    },
    {
      icon: "🏦",
      title: '"I need an education loan. Will banks give it for Kazakhstan?"',
      description:
        "Families are unsure whether nationalised banks will sanction loans for MBBS at a Kazakh university.",
    },
  ],
  solutions: [
    {
      icon: "✅",
      title: "Only Current NMC-Listed Universities",
      description:
        "We verify every university against the NMC's live approved list before shortlisting — and show you the official NMC document. No verbal assurances, only government-verified facts.",
    },
    {
      icon: "🧥",
      title: "Almaty Has Milder Winters + Pre-Departure Prep",
      description:
        "Almaty (most popular for students) has far milder winters than Astana (-5°C to -15°C vs -25°C). Taksheela's detailed winter checklist, packing guide, and city advice prepares students before departure. Most adapt within 3–4 weeks.",
    },
    {
      icon: "📚",
      title: "Russian/Kazakh Is Built Into the Curriculum from Year 1",
      description:
        "All NMC-compliant Kazakh universities include Russian and/or Kazakh language as a compulsory subject from Year 1. Basic conversational proficiency is achieved within 18–24 months — exactly as NMC requires for clinical readiness.",
    },
    {
      icon: "🎯",
      title: "University Selection Focused on NExT-Ready Training",
      description:
        "We shortlist universities based on curriculum quality, clinical training depth, and NExT/FMGE readiness. About 60% of Kazakh graduates have historically cleared licensing exams with structured preparation — Taksheela's NExT orientation begins from Year 1.",
    },
    {
      icon: "📊",
      title: "Written Reasoning. Zero Commission Bias.",
      description:
        "Taksheela shows you the reasoning behind every shortlist — NMC status, fee structure, hostel quality, clinical training, and NExT track record — in writing. Our recommendations are never driven by university commission.",
    },
    {
      icon: "💳",
      title: "SBI, Bank of Baroda, HDFC Credila — All Available",
      description:
        "Major nationalised banks and NBFCs readily finance NMC-approved MBBS in Kazakhstan. Taksheela prepares a complete lender-ready document file to accelerate your loan sanction.",
    },
  ],
};

// --- Eligibility (EligibilityCriteraAbroad) ----------------------------------------

export const kazakhstanAbroadEligibilityContent: AbroadEligibilityContent = {
  eyebrow: "Who Can Apply",
  titleLead: "Eligibility Criteria for MBBS in ",
  titleTrail: " 2026–27",
  subtitle:
    "Requirements for students from India, Nepal, and Bangladesh — based on NMC guidelines, Kazakhstan Ministry of Education standards, and individual university requirements.",
  tabIndian: "IN Indian Students",
  tabNpbd: "NP BD Nepal & Bangladesh",
  indian: [
    {
      label: "Academic Background",
      value:
        "Class 10+2 with Physics, Chemistry, Biology (PCB) as compulsory core subjects from any recognised board (CBSE / ICSE / State Board).",
    },
    {
      label: "Minimum Marks",
      value:
        "General category: minimum 50% aggregate in PCB. Reserved categories (SC / ST / OBC / PwD): minimum 40% aggregate in PCB.",
    },
    {
      label: "NEET Qualification",
      value:
        "Valid NEET-UG qualifying score mandatory (3-year validity from result date). No minimum percentile required by Kazakh universities — qualifying score is sufficient.",
    },
    {
      label: "Age Requirement",
      value:
        "Minimum 17 years of age by 31st December of the admission year. No upper age limit at most Kazakh medical universities.",
    },
    {
      label: "Language Tests",
      value:
        "No IELTS or TOEFL required. No separate entrance exam beyond NEET. Some universities conduct a basic English proficiency interview during the application process.",
    },
    {
      label: "Passport & Documents",
      value:
        "Valid Indian passport with minimum 18 months of remaining validity. MEA-apostilled academic certificates required for visa and university registration.",
    },
  ],
  nepali: [
    {
      label: "Academic Background",
      value:
        "Class 12 (NEB certificate or equivalent A-Level) with Physics, Chemistry, and Biology as core subjects.",
    },
    {
      label: "Minimum Marks",
      value:
        "Minimum 50% aggregate in PCB subjects. Individual university requirements may vary — confirm during shortlisting with Taksheela.",
    },
    {
      label: "Entrance Qualification",
      value:
        "Valid NEET score OR Nepali national medical entry test qualification accepted by most Kazakh universities. Taksheela confirms eligibility by university.",
    },
    {
      label: "Age & Passport",
      value:
        "Minimum 17 years. Valid Nepali passport with 18+ months validity. NEB certificate apostilled from relevant Nepali authority.",
    },
    {
      label: "Nepal Licensing Note",
      value:
        "Nepali graduates must clear the Nepal Medical Council (NMC-Nepal) licensing examination to practise medicine in Nepal. Taksheela advises on both the Indian NExT and Nepal NMC pathways based on your individual career plan.",
    },
  ],
  npbd: [
    {
      label: "Academic Background",
      value:
        "HSC (Higher Secondary Certificate) with Biology, Physics, and Chemistry from any recognised Bangladesh board.",
    },
    {
      label: "Minimum Marks",
      value:
        "Minimum GPA 3.5 in SSC and HSC combined, with Biology as a compulsory subject (individual university requirements may vary).",
    },
    {
      label: "Entrance Requirement",
      value:
        "National DGME-administered medical entry test qualification required. All Taksheela-recommended Kazakh universities satisfy DGME Bangladesh compliance requirements.",
    },
    {
      label: "Passport & Documents",
      value:
        "Valid Bangladeshi passport with 18+ months validity. HSC certificate with attestation from relevant Bangladeshi authority.",
    },
    {
      label: "Bangladesh Licensing Note",
      value:
        "BMDC (Bangladesh Medical and Dental Council) recognises degrees from WHO-listed, DGME-compliant universities. Graduates must clear the BMDC licensing exam to practise in Bangladesh. Taksheela advises on both BMDC and Indian NExT pathways.",
    },
  ],

  specialNotes: [
    {
      code: "NP",
      heading: "Special Note - Nepali Students",
      title: "Why Kazakhstan Works for Nepal Students",
      points: [
        "English-medium MD with affordable total cost — often roughly NPR 55–77 lakh depending on university and city.",
        "Kathmandu document attestation support and NPR forex planning.",
        "Growing Nepali peer network in Almaty and Nur-Sultan for shared housing and NExT prep.",
        "Counselling covers both Nepal Medical Council and Indian NExT routes after graduation.",
      ],
      footerTitle: "Nepal Licensing Note:",
      footerText:
        "Graduates must follow Nepal Medical Council licensing rules for practice in Nepal. Taksheela maps FMGE/NExT if you choose the India pathway instead.",
      accentClass: "border-[#00B94A] text-[#2C9B5D]",
      noteBgClass: "bg-[#F1FAF4] border-[#D6EEDF]",
    },
    {
      code: "BD",
      heading: "Special Note - Bangladeshi Students",
      title: "Why Kazakhstan Works for Bangladesh Students",
      points: [
        "DGME compliance documentation for return pathways — Taksheela verifies each intake.",
        "Total cost roughly BDT 45–64 lakh; halal food widely available in major Kazakh cities.",
        "Dhaka visa submission support and BDT forex planning.",
        "Bangladesh Medical and Dental Council rules apply for home-country practice.",
      ],
      footerTitle: "Bangladesh Licensing Note:",
      footerText:
        "Graduates must satisfy BMDC requirements for Bangladesh practice. Taksheela advises on BMDC exams versus FMGE/NExT for India.",
      accentClass: "border-[#0066FF] text-[#285F9A]",
      noteBgClass: "bg-[#F2F7FE] border-[#D6E3F5]",
    },
  ],
};

// --- Admission process (AdmissionProcessAbroad) ------------------------------------

export const kazakhstanAbroadAdmissionProcessContent: AbroadAdmissionProcessContent =
  {
    eyebrow: "Step by Step",
    titleLead: "MBBS in ",
    titleAccent: "— Admission Process",
    titleTrail: "",
    subtitle:
      "No donation, no separate entrance exam beyond NEET. Fully merit-based and completely guided by Taksheela from your first counselling session to your first week of classes in Kazakhstan.",
    steps: [
      {
        title: "Free Counselling & Profile Assessment",
        description:
          "1:1 session with a Taksheela Kazakhstan specialist — evaluates your NEET score, Class 12 PCB percentage, budget, preferred city (Almaty vs Astana), and career goals to map the right NMC-compliant Kazakh university.",
      },
      {
        title: "University Shortlisting",
        description:
          "2–3 NMC-approved, WHO-listed universities shortlisted with complete, transparent fee breakdowns, hostel availability, Indian community size, and clinical training quality compared side by side.",
      },
      {
        title: "Document Preparation & MEA Apostille",
        description:
          "Class 10/12 marksheets, NEET scorecard, passport, passport photos, and medical certificate — compiled, apostilled through the Ministry of External Affairs (India), and translated where required for Kazakh university submission.",
      },
      {
        title: "University Application Submission",
        description:
          "Taksheela submits your application directly to the chosen university, manages all follow-up communications, and confirms seat reservation — no missed deadlines, no paperwork gaps.",
      },
      {
        title: "Admission Letter & Seat Confirmation",
        description:
          "Upon successful application review, you receive the official Admission Letter from the university. Your MBBS seat in Kazakhstan is confirmed — no donation, no capitation, no management quota payment involved.",
      },
      {
        title: "Visa Invitation Letter & Fee Payment",
        description:
          "The university processes the official Visa Invitation Letter for the Kazakh Embassy. Simultaneously, our team handles the apostille of remaining documents and guided first-year fee remittance through authorised international transfer channels.",
      },
      {
        title: "Student Visa Application",
        description:
          "Using the Visa Invitation Letter, you apply for a Kazakh student visa at the Kazakhstan Embassy or Consulate in India (New Delhi for Indian students; similar process for Nepal/Bangladesh). Taksheela prepares the complete visa package including medical tests, health insurance, and SOP.",
      },
      {
        title: "Pre-Departure Briefing",
        description:
          "Comprehensive pre-departure orientation: what documents to carry, forex setup, Kazakhstan SIM cards, winter clothing guide, hostel essentials, food options, flight coordination, and emergency contact briefing.",
      },
      {
        title: "Airport Pickup & Post-Arrival Support",
        description:
          "Taksheela's local representatives in Almaty or Astana receive you from the airport, assist with hostel check-in, university registration, SIM card setup, cultural orientation, and local banking — so your first week in Kazakhstan is smooth and stress-free.",
      },
    ],
  };

// --- Consider before choosing (ConsiderBeforeAbroad) --------------------------------

export type AbroadConsiderBeforeContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  advantagesTitle: string;
  advantages: string[];
  challengesTitle: string;
  challenges: string[];
};

export const kazakhstanAbroadConsiderBeforeContent: AbroadConsiderBeforeContent =
  {
    eyebrow: "Honest Assessment",
    title: "Things to Consider Before Choosing Kazakhstan",
    subtitle:
      "Taksheela believes in full transparency. Here is an honest view of genuine advantages and real challenges — so your decision is fully informed, not just motivated by marketing.",
    advantagesTitle: "Strong Advantages",
    advantages: [
      "Annual fees as low as ₹3.5L — total 6-year investment ₹35-48  lakhs, with zero capitation or donation at any Kazakh medical university.",
      "100% English-medium instruction at all NMC-listed universities — no separate language exam (IELTS/TOEFL) required for admission.",
      "NMC and WHO recognition across 10+ universities — degrees qualify for NExT (India), PLAB (UK), USMLE (USA), and Gulf licensing exams.",
      "9,000+ Indian students enrolled — well-established South Asian communities in Almaty and Astana with Indian food, festivals, and peer support.",
      "Halal food widely available — Kazakhstan is a Muslim-majority country, making dietary adherence easy for students from diverse religious backgrounds.",
      "Merit-based admission — no donation, no management quota, no seat cap. Every eligible student has a fair shot.",
      "Strong career outcomes — approximately 60% of Kazakh graduates have historically passed FMGE/NExT with structured preparation.",
    ],
    challengesTitle: "Genuine Challenges",
    challenges: [
      "Winters in Astana can drop to -25°C — amongst the coldest capital cities on Earth. Almaty is milder but still cold by South Asian standards. Thermal wear and heating bills are real costs.",
      "Russian and/or Kazakh language required for clinical patient interaction from Year 3. Dedicated language classes start from Year 1, but require consistent effort.",
      "NExT / FMGE preparation requires disciplined self-study alongside coursework. Strong clinical training at Kazakh hospitals is an advantage, but proactive preparation is essential.",
      "Currency exchange risk — fees are often quoted in USD; families should plan for exchange rate movements across the 6-year duration.",
      "Cultural adjustment is greater than for Georgia or Russia — Kazakh customs and social norms differ more noticeably from South Asian contexts, requiring an open-minded attitude.",
      "Smaller cities (Kokshetau, Semey) have fewer Indian community resources — students prioritising Indian food availability should choose Almaty or Astana.",
    ],
  };

// --- Cost breakdown (CostBreakdownAbroad) ------------------------------------------

export type AbroadCostTuitionRow = {
  university: string;
  annualTuition: string;
  sixYearTotal: string;
};

export type AbroadCostLivingRow = {
  item: string;
  monthly: string;
  annual: string;
};

export type AbroadCostSummaryLine = {
  label: string;
  value: string;
};

export type AbroadCostBreakdownContent = {
  eyebrow: string;
  titlePrimary: string;
  titleAccent: string;
  subtitle: string;
  tuitionTableTitle: string;
  tuitionColAnnual: string;
  tuitionColSixYear: string;
  tuitionRows: AbroadCostTuitionRow[];
  livingTableTitle: string;
  livingColMonthly: string;
  livingColAnnual: string;
  livingRows: AbroadCostLivingRow[];
  summaryCardTitle: string;
  summaryLines: AbroadCostSummaryLine[];
  summaryTotalLabel: string;
  summaryTotalValue: string;
  summaryFootnote: string;
};

export const kazakhstanAbroadCostBreakdownContent: AbroadCostBreakdownContent =
  {
    eyebrow: "Financial planning",
    titlePrimary: "MBBS in Kazakhstan",
    titleAccent: "— Complete Fee Structure & Cost of Living",
    subtitle:
      "Estimated totals for Nepal and Bangladesh are provided below. All figures are approximate for 2026–27.",
    tuitionTableTitle: "University tuition (indicative)",
    tuitionColAnnual: "Annual Tuition",
    tuitionColSixYear: "6-Year Total",
    tuitionRows: [
      {
        university: "Kazakh National Medical University (KNMU)",
        annualTuition: "~₹3.5–5L",
        sixYearTotal: "~₹22–32L",
      },
      {
        university: "Astana Medical University",
        annualTuition: "~₹3.5–5L",
        sixYearTotal: "~₹22–32L",
      },
      {
        university: "Karaganda State Medical University",
        annualTuition: "~₹2.5–4L",
        sixYearTotal: "~₹18–28L",
      },
      {
        university: "South Kazakhstan Medical Academy",
        annualTuition: "~₹2.5–4L",
        sixYearTotal: "~₹18–28L",
      },
      {
        university: "Kazakh-Russian Medical University",
        annualTuition: "~₹3.5–5L",
        sixYearTotal: "~₹22–32L",
      },
    ],
    livingTableTitle: "Annual expense breakdown (non-tuition)",
    livingColMonthly: "Monthly (est.)",
    livingColAnnual: "Annual",
    livingRows: [
      {
        item: "University hostel",
        monthly: "~₹8,000–18,000",
        annual: "₹1L–2.1L",
      },
      {
        item: "Food / mess",
        monthly: "~₹7,000–12,000",
        annual: "₹85K–1.45L",
      },
      {
        item: "Health insurance",
        monthly: "~₹600–1,000",
        annual: "₹7K–12K",
      },
      {
        item: "Visa / registration",
        monthly: "~₹500–1,200",
        annual: "₹6K–15K",
      },
      {
        item: "Personal expenses",
        monthly: "~₹5,000–9,000",
        annual: "₹60K–1.1L",
      },
    ],
    summaryCardTitle: "Total 6-year investment",
    summaryLines: [
      {
        label: "Typical annual all-in (tuition + living heads)",
        value: "~₹5L–8.85L (indicative)",
      },
      {
        label: "Nepal (NPR)",
        value: "~NPR 55L–77L total (indicative)",
      },
      {
        label: "Bangladesh (BDT)",
        value: "~BDT 45L–64L total (indicative)",
      },
      {
        label: "vs Indian private MBBS (incl. capitation & donation)",
        value: "₹80L – ₹1.2 Crore",
      },
      {
        label: "Kazakhstan advantage",
        value: "zero capitation · zero donation",
      },
    ],
    summaryTotalLabel: "TOTAL 6-YEAR INVESTMENT (EST.)",
    summaryTotalValue: "₹35-48 L",
    summaryFootnote:
      "Including all 6 years of tuition, hostel, food, insurance, visa, personal expenses, and one-time setup costs. Zero capitation. Zero donation. * One-time: flight ₹35–55K, visa processing, apostille, initial setup. Exchange rates are indicative for 2026–27.",
  };

// --- Intake periods (IntakePeriodAbroad) ------------------------------------------

export type AbroadIntakeTimelineRow = {
  label: string;
  value: string;
};

export type AbroadIntakeCardContent = {
  icon: string;
  title: string;
  rows: AbroadIntakeTimelineRow[];
  footerNote: string;
};

export type AbroadIntakePeriodContent = {
  eyebrow: string;
  titlePrimary: string;
  titleAccent: string;
  primaryCard: AbroadIntakeCardContent;
  secondaryCard: AbroadIntakeCardContent;
};

export const kazakhstanAbroadIntakePeriodContent: AbroadIntakePeriodContent = {
  eyebrow: "Application timeline",
  titlePrimary: "MBBS Intakes in Kazakhstan",
  titleAccent: "2026–27",
  primaryCard: {
    icon: "⭐",
    title: "Primary intake — recommended",
    rows: [
      { label: "Intake period", value: "September / October 2026" },
      { label: "Application opens", value: "March – April 2026" },
      { label: "Application deadline", value: "June – July 2026" },
      { label: "Admission letters issued", value: "July – August 2026" },
      { label: "Visa processing", value: "August 2026" },
      { label: "Classes begin", value: "September – October 2026" },
      { label: "Availability", value: "All universities" },
    ],
    footerNote:
      "Two annual admission windows — September is strongly preferred for wider university choice and maximum seat availability. Important for Indian students: NMC requires your NEET score to be within its 3-year validity window at the time of application. If your NEET score is from 2022 or earlier, verify your eligibility window before applying. Contact Taksheela for a free eligibility check.",
  },
  secondaryCard: {
    icon: "📅",
    title: "Secondary intake — limited",
    rows: [
      { label: "Intake period", value: "February / March 2026" },
      { label: "Application opens", value: "November – December 2026" },
      { label: "Application deadline", value: "December 2026" },
      { label: "Admission letters issued", value: "December – January" },
      { label: "Visa processing", value: "January 2026" },
      { label: "Classes begin", value: "February – March 2026" },
      { label: "Availability", value: "Select universities only" },
    ],
    footerNote:
      "For students who missed the autumn intake — fewer partner universities and limited seats. Confirm February / March 2026 availability with Taksheela before paying registration fees. Indian students should also verify NEET validity against NMC rules at application time.",
  },
};

// --- Teaching methodology (TeachingMethodologyAbroad) ------------------------------

export type AbroadTeachingMethodologyItem = {
  icon: string;
  title: string;
  description: string;
};

export type AbroadTeachingMethodologyContent = {
  eyebrow: string;
  titlePrimary: string;
  titleAccent: string;
  intro?: string;
  items: AbroadTeachingMethodologyItem[];
};

export const kazakhstanAbroadTeachingMethodologyContent: AbroadTeachingMethodologyContent =
  {
    eyebrow: "How You Learn",
    titlePrimary: "Teaching Methodology & Practical Training at",
    titleAccent: "Kazakh Universities",
    intro:
      "Kazakh medical universities follow a structured 6-year curriculum governed by the Kazakhstan Ministry of Healthcare and the Ministry of Education and Science, with all NMC-listed institutions aligned to Schedule 1 requirements of the NMC Gazette. Phases: Years 1–2 pre-clinical (foundation biomedical sciences); Years 3–4 para-clinical (disease mechanisms & pharmacology); Years 5–6 clinical (full hospital rotations including Surgery, Internal Medicine, OBG, Paediatrics, Psychiatry & more).",
    items: [
      {
        icon: "📖",
        title: "Lecture & Seminar-Based Instruction",
        description:
          "Core theoretical subjects taught in English by experienced faculty across structured semesters. Seminars encourage active participation and analytical thinking from Year 1.",
      },
      {
        icon: "🔬",
        title: "Laboratory & Practical Sessions",
        description:
          "Dissection labs, histology microscopes, biochemistry practicals, and microbiology lab work from Year 1. Simulation centres at major universities use virtual anatomy tools and procedural trainers.",
      },
      {
        icon: "🏥",
        title: "Hospital Clinical Rotations from Year 3",
        description:
          "Supervised rotations at university-affiliated multi-speciality hospitals. High patient volumes in Kazakh hospitals provide diverse disease exposure, building diagnostic confidence.",
      },
      {
        icon: "🗣️",
        title: "Russian / Kazakh Language from Year 1",
        description:
          "Language training is compulsory, progressive, and structured — designed to reach basic conversational clinical proficiency by Year 3, exactly as NMC's abroad-MBBS guidelines require.",
      },
      {
        icon: "💻",
        title: "Digital Learning & Simulation",
        description:
          "Leading Kazakh medical universities integrate digital libraries, online clinical case platforms, and simulation training to supplement in-person hospital exposure.",
      },
      {
        icon: "📝",
        title: "Examination Formats",
        description:
          "Written exams, oral vivas, OSCE-style clinical assessments, and practical competency evaluations — all conducted in English throughout the 6-year program.",
      },
    ],
  };

// --- MBBS syllabus (MbbsSylabusAbroad) ---------------------------------------------

export type AbroadMbbsSyllabusYearItem = {
  yearLabel: string;
  title: string;
  description: string;
  /** Optional subject chips (e.g. Georgia year-by-year syllabus infographic). */
  subjectTags?: string[];
  /** Years 1–5: red badge; final year: dark blue */
  badgeTone: "primary" | "internship";
};

export type AbroadMbbsSyllabusContent = {
  eyebrow: string;
  titlePrimary: string;
  titleAccent: string;
  subtitle: string;
  /** Optional closing line below the year accordions. */
  footerNote?: string;
  years: AbroadMbbsSyllabusYearItem[];
};

export const kazakhstanAbroadMbbsSyllabusContent: AbroadMbbsSyllabusContent = {
  eyebrow: "Curriculum",
  titlePrimary: "MBBS Syllabus in Kazakhstan",
  titleAccent: "— Year by Year",
  subtitle:
    "The 6-year General Medicine (MD) program meets NMC's minimum 54-month academic requirement + 12-month mandatory internship. Covers all 19+ compulsory subjects under NMC Schedule 1.",
  footerNote:
    "All Year 6 rotations are supervised by licensed clinicians at university-affiliated teaching hospitals in Kazakhstan. Completion of Year 6 qualifies graduates for NExT (India).",
  years: [
    {
      yearLabel: "Year 1",
      title: "Pre-Clinical Foundations I",
      description: "",
      subjectTags: [
        "Human Anatomy (Regional & Systemic)",
        "Medical Biochemistry",
        "Medical Biology & Genetics",
        "Medical Physics & Biophysics",
        "Medical Chemistry",
        "Russian / Kazakh Language I",
        "History of Kazakhstan",
        "Physical Education",
      ],
      badgeTone: "primary",
    },
    {
      yearLabel: "Year 2",
      title: "Pre-Clinical Foundations II",
      description: "",
      subjectTags: [
        "Histology & Embryology",
        "Normal Physiology",
        "Microbiology (Introduction)",
        "Medical Psychology",
        "Russian / Kazakh Language II",
        "Sociology & Medical Ethics",
        "Medical Informatics",
      ],
      badgeTone: "primary",
    },
    {
      yearLabel: "Year 3",
      title: "Para-Clinical Sciences",
      description: "",
      subjectTags: [
        "Pathological Anatomy",
        "Pathophysiology",
        "Pharmacology I",
        "Medical Microbiology (Full)",
        "Immunology",
        "Biostatistics & Public Health",
        "Introduction to Clinical Medicine",
        "First Aid & Emergency Medicine",
      ],
      badgeTone: "primary",
    },
    {
      yearLabel: "Year 4",
      title: "Advanced Para-Clinical Sciences",
      description: "",
      subjectTags: [
        "Systemic Pathology",
        "Advanced Pharmacology II",
        "Radiology & Medical Imaging",
        "Introduction to Surgery",
        "Introduction to Internal Medicine",
        "Clinical Diagnostic Skills",
        "Ophthalmology",
        "ENT (Ear, Nose, Throat)",
      ],
      badgeTone: "primary",
    },
    {
      yearLabel: "Year 5",
      title: "Clinical Core Sciences",
      description: "",
      subjectTags: [
        "Internal Medicine (Full)",
        "General Surgery",
        "Obstetrics & Gynaecology",
        "Paediatrics",
        "Infectious Disease",
        "Psychiatry",
        "Neurology",
        "Dermatology & Venereology",
        "Oncology (introductory)",
        "Forensic Medicine",
      ],
      badgeTone: "primary",
    },
    {
      yearLabel: "Year 6",
      title: "Mandatory Clinical Internship (12 Months)",
      description: "",
      subjectTags: [
        "Internal Medicine (Rotations)",
        "General Surgery (Rotations)",
        "Obstetrics & Gynaecology",
        "Paediatrics",
        "Emergency Medicine",
        "Family Medicine",
        "Community & Preventive Medicine",
        "Psychiatry",
      ],
      badgeTone: "internship",
    },
  ],
};

// --- Complete comparison (CompleteComparissionAbroad) ------------------------------

export type AbroadComparisonTableRow = {
  parameter: string;
  /** Primary destination on this page (Russia, Georgia, etc.) */
  featured: string;
  indiaGovt: string;
  indiaPrivate: string;
  bangladesh: string;
  philippines: string;
  /** Renders green ✕ / red ✓ icons for donation row */
  isDonationRow?: boolean;
  /** Bold row (e.g. summary / best-for takeaway) */
  isSummaryRow?: boolean;
};

export type AbroadCompleteComparisonContent = {
  eyebrow: string;
  titlePrimary: string;
  titleAccent: string;
  subtitle: string;
  blockHeading: string;
  colParameter: string;
  colFeatured: string;
  colIndiaGovt: string;
  colIndiaPrivate: string;
  colBangladesh: string;
  colPhilippines: string;
  rows: AbroadComparisonTableRow[];
};

export const kazakhstanAbroadCompleteComparisonContent: AbroadCompleteComparisonContent =
  {
    eyebrow: "Side by side",
    titlePrimary: "MBBS in Kazakhstan vs MBBS in India",
    titleAccent: "— 2026–27 Comparison",
    subtitle:
      "Data-structured comparison for students asking whether MBBS in Kazakhstan fits versus India — transparent, decision-friendly context; Bangladesh & Philippines columns for regional reference.",
    blockHeading:
      "Kazakhstan · India — key parameters · Bangladesh & Philippines (reference)",
    colParameter: "Parameter",
    colFeatured: "🇰🇿 MBBS in Kazakhstan",
    colIndiaGovt: "IN India (Govt. College)",
    colIndiaPrivate: "IN India (Private College)",
    colBangladesh: "🇧🇩 BD Bangladesh",
    colPhilippines: "🇵🇭 PH Philippines",
    rows: [
      {
        parameter: "Entrance Exam",
        featured:
          "NEET qualifying score only — accessible (no separate Kazakh entrance beyond university screening).",
        indiaGovt: "NEET-UG — very high AIR required for govt. seats",
        indiaPrivate: "NEET + large donation / management quota payment",
        bangladesh: "NEET qualifying score (NMC) + institutional screening",
        philippines:
          "NEET qualifying score + school-specific tests / interview",
      },
      {
        parameter: "Competition Level",
        featured: "Low — merit-based, no quota",
        indiaGovt: "Extreme — 23L+ aspirants for ~1.18L seats",
        indiaPrivate: "Moderate rank + high payment capacity",
        bangladesh: "Moderate — merit + NEET pathway for Indians",
        philippines: "Moderate — programme & city dependent",
      },
      {
        parameter: "Total 6-Year Cost",
        featured: "₹35-48 L (all-in, indicative)",
        indiaGovt: "₹5–15L (govt. subsidised)",
        indiaPrivate: "₹80L–₹1.2Cr (+ capitation)",
        bangladesh: "₹15–30 Lakhs (typical all-in)",
        philippines: "₹20–40 Lakhs (typical all-in)",
      },
      {
        parameter: "Capitation / Donation",
        featured: "Zero. Never.",
        indiaGovt: "None (govt. merit seat)",
        indiaPrivate: "₹20L–₹1Cr common",
        bangladesh: "None (typical NMC-listed route)",
        philippines: "None (typical pathway)",
        isDonationRow: true,
      },
      {
        parameter: "Course Duration",
        featured:
          "6 years (5 academic + 1 internship in Kazakhstan, per university structure)",
        indiaGovt: "5.5 years (4.5 + 1 CRRI in India)",
        indiaPrivate: "5.5 years",
        bangladesh: "5 years + 1-year internship (typical)",
        philippines: "4 yrs pre-med + 4 yrs MD + internship (typical)",
      },
      {
        parameter: "Medium of Instruction",
        featured:
          "English (full programme); Russian/Kazakh taught for clinical communication",
        indiaGovt: "English + regional languages",
        indiaPrivate: "English (majority of colleges)",
        bangladesh: "Bengali + English (programme-dependent)",
        philippines: "English (majority of programmes)",
      },
      {
        parameter: "Seat Availability",
        featured: "10+ universities, flexible intake",
        indiaGovt: "Severely limited govt. seats",
        indiaPrivate: "Limited + donation-dependent",
        bangladesh: "~8–10 NMC-listed institutions; widely available",
        philippines: "~8–10 recognised options; city-limited in places",
      },
      {
        parameter: "Reservation / Quota",
        featured: "None — merit only",
        indiaGovt: "All India + state / category quotas",
        indiaPrivate: "Management / NRI quota common",
        bangladesh: "Institution-specific intake bands",
        philippines: "Foreign-student quotas vary by school",
      },
      {
        parameter: "Global Recognition",
        featured: "WHO · NMC · FAIMER · ECFMG · UNESCO (pathway-dependent)",
        indiaGovt: "NMC India",
        indiaPrivate: "NMC India",
        bangladesh: "WHO, NMC, BMDC alignment for Indian students",
        philippines: "WHO, NMC; USMLE pathway widely advertised",
      },
      {
        parameter: "Post-Grad Licensing (India)",
        featured:
          "NExT (after Kazakhstan course + internship steps per NMC rules at your time of admission)",
        indiaGovt: "NExT",
        indiaPrivate: "NExT",
        bangladesh: "FMGE / NExT after BMDC registration pathway",
        philippines: "FMGE / NExT; strong USMLE prep at many schools",
      },
      {
        parameter: "International Career",
        featured: "PLAB (UK) · USMLE (USA) · Gulf · Germany",
        indiaGovt: "Primarily India",
        indiaPrivate: "Primarily India",
        bangladesh: "Gulf · UK PLAB (case-by-case) · home licensing",
        philippines: "USMLE culture strong · Gulf · UK routes",
      },
      {
        parameter: "Food & Cultural Fit",
        featured:
          "Halal food widely available; Indian food in Almaty/Astana; cultural gap requires adjustment",
        indiaGovt: "Home environment",
        indiaPrivate: "Home environment",
        bangladesh: "Cultural proximity; home licensing rules",
        philippines: "English-native campus culture",
        isSummaryRow: true,
      },
    ],
  };

// --- Our stories / testimonials (OurStoriesAbroad) ---------------------------------

export type AbroadStudentStoryItem = {
  quote: string;
  name: string;
  /** Year, university, home city — e.g. MBBS Year 2, KSMU Kazan | Jaipur, India */
  meta: string;
  /** Single letter avatar */
  initial: string;
  /** 1–5 */
  rating: number;
};

export type AbroadOurStoriesContent = {
  eyebrow: string;
  titlePrimary: string;
  titleAccent: string;
  stories: AbroadStudentStoryItem[];
};

export const kazakhstanAbroadOurStoriesContent: AbroadOurStoriesContent = {
  eyebrow: "Real experiences",
  titlePrimary: "Stories From Students Who Chose",
  titleAccent: "Kazakhstan",
  stories: [
    {
      rating: 5,
      quote:
        "I was looking at private colleges in India, but the donation demands were shocking — ₹70 lakhs was the lowest quote I got. Taksheela showed me KazNMU in Almaty and walked me through the NMC verification themselves. Two years in, and I'm genuinely happy I made this choice. Almaty is a beautiful, safe city.",
      name: "Rohan Verma",
      meta: "NEET 327 · Kazakh National Medical University · Delhi",
      initial: "R",
    },
    {
      rating: 5,
      quote:
        "I'm from Nepal and I wasn't sure whether Kazakhstan would work for my licensing pathway back home. The Taksheela counsellor explained the Nepal Medical Council exam route clearly and helped me pick KRMU. The Indian and Nepali student community in Almaty is large — I never feel far from home.",
      name: "Sita Shrestha",
      meta: "Kazakh Russian Medical University · Kathmandu, Nepal",
      initial: "S",
    },
    {
      rating: 5,
      quote:
        "I chose SKMA in Shymkent because Taksheela showed me the cost breakdown honestly — total 6-year investment under ₹22 lakhs. The clinical rotations started in Year 3 and the faculty is genuinely dedicated. NEET score was my main concern — 298 isn't high, but it was enough here.",
      name: "Nikhil Mishra",
      meta: "NEET 298 · South Kazakhstan Medical Academy · Mumbai",
      initial: "N",
    },
    {
      rating: 5,
      quote:
        "The winter in Astana was a real shock at first — I won't lie. But Taksheela's pre-departure checklist was incredibly detailed. I bought the right clothes, knew what to expect, and within 3 weeks I'd adapted. The university itself is modern and the English faculty is excellent.",
      name: "Tanvi Rawal",
      meta: "NEET 308 · Astana Medical University · Jaipur, Rajasthan",
      initial: "T",
    },
    {
      rating: 5,
      quote:
        "As a Bangladeshi student, getting proper DGME-compliant counselling was my biggest challenge. Taksheela had specific knowledge about BMDC requirements and helped me choose a university that satisfied all the compliance criteria. Halal food is everywhere in Kazakhstan — that was a great comfort from Day 1.",
      name: "Farhan Ahmed",
      meta: "Karaganda Medical University · Dhaka, Bangladesh",
      initial: "F",
    },
    {
      rating: 5,
      quote:
        "From the moment I reached Almaty to settling into hostel and starting classes, Taksheela's local team was there. I never had to figure anything out alone. The process was exactly as explained during counselling — transparent, step-by-step, no surprises. I'm in Year 4 now and preparing for NExT seriously.",
      name: "Mohd Zaid",
      meta: "NEET 354 · Kokshetau State University · Indore, MP",
      initial: "M",
    },
  ],
};

// --- Accommodation & climate (AccomodationAndClimateAbroad) ----------------------

export type AbroadAccommodationClimateHostelCard = {
  title: string;
  bullets: string[];
};

export type AbroadAccommodationClimateCityRow = {
  city: string;
  /** e.g. "Winter: -10 to -20°C | Summer: 20–25°C" */
  ranges: string;
};

export type AbroadAccommodationClimateClimateCard = {
  title: string;
  intro: string;
  rows: AbroadAccommodationClimateCityRow[];
  tipLabel: string;
  tipBody: string;
};

export type AbroadAccommodationClimateContent = {
  eyebrow: string;
  titlePrimary: string;
  titleAccent: string;
  hostel: AbroadAccommodationClimateHostelCard;
  climate: AbroadAccommodationClimateClimateCard;
};

export const kazakhstanAbroadAccommodationClimateContent: AbroadAccommodationClimateContent =
  {
    eyebrow: "Campus life",
    titlePrimary: "Hostel Accommodation & Climate",
    titleAccent: "in Kazakhstan",
    hostel: {
      title: "Hostel Accommodation",
      bullets: [
        "Most NMC-listed Kazakh universities provide on-campus or university-managed hostels for international students at annual costs of $500-1000 (₹46.6-93.2k).",
        "Rooms are typically double or triple occupancy with study desks, wardrobes, and shared washrooms. Central heating is standard and essential in winter.",
        "University mess facilities are available on campus. Almaty and Astana have multiple Indian restaurants and Indian grocery stores catering to the South Asian community.",
        "Kazakhstan is a Muslim-majority country — halal food is available everywhere, benefiting Muslim students from Bangladesh and other communities.",
        "From Year 3 onwards, many students move to private apartments. Shared apartments in Almaty cost approximately ₹18-33k per person.",
        "Taksheela coordinates verified hostel options and provides city-specific accommodation guidance before your departure.",
      ],
    },
    climate: {
      title: "Climate Across Key University Cities",
      intro:
        "Continental climate — Almaty offers milder winters than Astana; pack for real cold if you head north.",
      rows: [
        {
          city: "Almaty Spring (Apr–Jun)",
          ranges:
            "10–25°C — Pleasant, ideal for settling in. Admission season.",
        },
        {
          city: "Almaty Summer (Jul–Sep)",
          ranges: "25–35°C — Warm and sunny. Great for outdoor exploration.",
        },
        {
          city: "Almaty Winter (Dec–Feb)",
          ranges:
            "-5 to -15°C — Cold but manageable. Thermals + jacket essential.",
        },
        {
          city: "Astana Winter (Dec–Feb)",
          ranges:
            "-15 to -25°C — Very cold — one of the world's coldest capitals.",
        },
      ],
      tipLabel: "Taksheela City Tip",
      tipBody:
        "If extreme cold is a concern, choose Almaty over Astana — winters are significantly milder and the city is more cosmopolitan. Both have strong Indian communities. Our pre-departure checklist covers clothing, heating, and acclimatisation advice in detail.",
    },
  };

// --- Key facts at a glance (KeyFactsAbroad) ---------------------------------------

export type AbroadKeyFactItem = {
  /** Emoji or short symbol shown above the value */
  icon: string;
  /** Main stat line (shown in red) */
  value: string;
  /** Uppercase descriptor under the value */
  label: string;
};

export type AbroadKeyFactsContent = {
  eyebrow: string;
  /** e.g. "Key Facts for" */
  titlePrimary: string;
  /** e.g. "Medical Students" — rendered in accent red + italic */
  titleAccent: string;
  items: AbroadKeyFactItem[];
};

export const kazakhstanAbroadKeyFactsContent: AbroadKeyFactsContent = {
  eyebrow: "At a Glance",
  titlePrimary: "MBBS in Kazakhstan — Quick Facts",
  titleAccent: "2026–27",
  items: [
    {
      icon: "🎓",
      value: "MD / General Medicine (= MBBS)",
      label: "DEGREE AWARDED",
    },
    {
      icon: "⏱️",
      value: "6 Years (5 academic + 1 internship)",
      label: "COURSE DURATION",
    },
    { icon: "💰", value: "₹3.5L – ₹5L / year", label: "ANNUAL TUITION" },
    { icon: "🏠", value: "₹1.2L – ₹2.5L / year", label: "ANNUAL LIVING COST" },
    {
      icon: "🗓️",
      value: "September (primary) · February (secondary)",
      label: "INTAKES",
    },
    {
      icon: "🧾",
      value: "50% PCB + NEET qualified, age 17+",
      label: "BASIC ELIGIBILITY",
    },
    {
      icon: "🌐",
      value: "English (primary); Russian/Kazakh taught",
      label: "MEDIUM OF INSTRUCTION",
    },
    {
      icon: "✅",
      value: "WHO · NMC · FAIMER · ECFMG · UNESCO",
      label: "RECOGNISED BY",
    },
    {
      icon: "👩‍🎓",
      value: "9,000+ enrolled",
      label: "INDIAN STUDENTS (2024–25)",
    },
    {
      icon: "🏛️",
      value: "10+ institutions",
      label: "NMC-APPROVED UNIVERSITIES",
    },
    {
      icon: "🚫",
      value: "Zero. Completely merit-based.",
      label: "DONATION / CAPITATION",
    },
    {
      icon: "📝",
      value: "Not required for admission",
      label: "IELTS / TOEFL REQUIRED",
    },
  ],
};

// --- Scholarships (ScholarshipsAbroad) --------------------------------------------

export type AbroadScholarshipIconKey =
  | "building"
  | "graduation"
  | "books"
  | "globe";

export type AbroadScholarshipCard = {
  iconKey: AbroadScholarshipIconKey;
  title: string;
  description: string;
  bullets: string[];
};

export type AbroadScholarshipsContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  cards: AbroadScholarshipCard[];
};

export const kazakhstanAbroadScholarshipsContent: AbroadScholarshipsContent = {
  eyebrow: "Financial Aid",
  title: "Scholarships for MBBS in Kazakhstan",
  subtitle:
    "Kazakhstan MBBS is already among the world's most budget-friendly medical degrees. These scholarship routes can reduce costs further for eligible students.",
  cards: [
    {
      iconKey: "building",
      title: "University Merit Scholarships",
      description:
        "Merit-based tuition relief at Taksheela-partnered Kazakh universities — processed through the admissions office after you qualify.",
      bullets: [
        "10–20% tuition fee reduction for students with 70%+ in Class 12 PCB or strong NEET scores.",
        "Renewable annually based on academic performance and GPA maintenance.",
        "Available at multiple Taksheela-partnered Kazakh universities — confirm during shortlisting.",
        "Processed after admission confirmation, not before.",
      ],
    },
    {
      iconKey: "graduation",
      title: "Kazakhstan Government Scholarship (Bolashak)",
      description:
        "The Bolashak Presidential Scholarship is Kazakhstan's flagship international education scheme — limited slots for medical tracks.",
      bullets: [
        "Bolashak is Kazakhstan's flagship international education programme.",
        "Limited medical program slots — primarily for Kazakh nationals, with some international tracks.",
        "Requires strong academic profile and early application well before the intake deadline.",
        "Taksheela advises on current eligibility and application documentation.",
      ],
    },
    {
      iconKey: "books",
      title: "Government of India Schemes",
      description:
        "Central and state programmes that can subsidise education loans or interest for eligible Indian students heading abroad for MBBS.",
      bullets: [
        "Central Sector Interest Subsidy (CSIS) — interest subsidy on education loans for EWS students (family income under ₹4.5L/year).",
        "Padho Pardesh Scheme — interest subsidy for minority community students studying abroad.",
        "State government merit scholarships (varies by state — check your state education department).",
        "Apply before departure; Taksheela assists with documentation preparation.",
      ],
    },
    {
      iconKey: "globe",
      title: "Taksheela Support Initiative",
      description:
        "Our internal support for meritorious students from low-income backgrounds — limited seats each cycle.",
      bullets: [
        "Partial counselling and documentation fee waivers for meritorious students from low-income backgrounds.",
        "Speak to a Taksheela counsellor to assess your eligibility.",
        "Limited availability per intake cycle — apply early.",
        "Focused on students with strong academics but genuine financial constraints.",
      ],
    },
  ],
};

// --- Education loans (EducationLoanAbroad) ----------------------------------------

export type AbroadEducationLoanPairCard = {
  title: string;
  description: string;
  bullets: string[];
};

export type AbroadEducationLoanSupportCard = {
  title: string;
  description: string;
};

export type AbroadEducationLoanContent = {
  eyebrow: string;
  title: string;
  /** Optional lead paragraph below the section title (e.g. Georgia infographic). */
  intro?: string;
  nationalised: AbroadEducationLoanPairCard;
  privateNbfc: AbroadEducationLoanPairCard;
  support: AbroadEducationLoanSupportCard;
};

export const kazakhstanAbroadEducationLoanContent: AbroadEducationLoanContent =
  {
    eyebrow: "Financing your MBBS",
    title: "Education Loans for MBBS in Kazakhstan",
    intro:
      "Financing a Kazakh MBBS is well-supported by Indian banks and NBFCs. Taksheela helps you build a lender-ready document file for faster loan processing.",
    nationalised: {
      title: "Nationalised Banks (India)",
      description:
        "Best for lower interest rates; collateral often required above ₹7.5L",
      bullets: [
        "SBI Global Ed-Vantage — up to ₹1.5 crore (eligibility-based)",
        "Bank of Baroda Baroda Scholar Scheme for study abroad",
        "Union Bank of India overseas education loan",
        "Punjab National Bank Saraswati scheme",
        "Interest: 9.5–11% p.a. (floating, bank-specific)",
        "Moratorium: course period + 6–12 months after completion",
      ],
    },
    privateNbfc: {
      title: "Private Banks & NBFCs",
      description:
        "Faster processing; flexible collateral structures available",
      bullets: [
        "HDFC Credila — specialist study abroad education loans",
        "Avanse Financial Services — MBBS abroad coverage",
        "Auxilo Finserve — flexible MBBS abroad loan products",
        "InCred Finance — flexible co-borrower structures",
        "Up to ₹40–60L possible without collateral (profile-based)",
        "Interest: 10.5–14% p.a. (NBFC rates vary)",
      ],
    },
    support: {
      title: "Taksheela Loan File Support",
      description:
        "We prepare your complete lender-ready document set — provisional admission letter, detailed fee schedule, course duration letter, university NMC verification, and co-borrower KYC proofs — so your loan application moves faster with fewer rejections and back-and-forth queries.",
    },
  };

// --- Career opportunities after MBBS (TeachingMethodologyAbroad — same content shape) ---

/** Same shape as `AbroadTeachingMethodologyContent` so one component can render both sections. */
export const kazakhstanAbroadCareerOpportunitiesContent: AbroadTeachingMethodologyContent =
  {
    eyebrow: "After graduation",
    titlePrimary: "Career Opportunities After MBBS in",
    titleAccent: "Kazakhstan",
    intro:
      "An NMC-compliant Kazakh MD degree, combined with NExT clearance, opens genuine career pathways in India and across the world.",
    items: [
      {
        icon: "🏥",
        title: "Practice in India",
        description:
          "Clear NExT, complete 12-month India internship, register with State Medical Council — and practice anywhere in India as a licensed physician.",
      },
      {
        icon: "🎓",
        title: "MD/MS Postgraduate",
        description:
          "Appear for NEET-PG (NExT Step 2) and pursue postgraduate specialisation in surgery, medicine, OBG, paediatrics, radiology, and more.",
      },
      {
        icon: "🇬🇧",
        title: "Practice in UK (PLAB)",
        description:
          "Clear PLAB 1 and PLAB 2 for GMC registration and employment in the NHS — one of the world's most sought-after medical career pathways.",
      },
      {
        icon: "🇺🇸",
        title: "Practice in USA (USMLE)",
        description:
          "Pass USMLE Steps 1 and 2CK for US residency applications through the ERAS/NRMP match system. ECFMG listing of Kazakh universities supports eligibility.",
      },
      {
        icon: "🌍",
        title: "Gulf Countries",
        description:
          "DHA (Dubai), HAAD (Abu Dhabi), and SCHS (Saudi Arabia) licensing exams open to WHO-recognised graduates when credential rules are met.",
      },
      {
        icon: "🇩🇪",
        title: "Germany & Europe",
        description:
          "German Approbation exam + B2/C1 German language proficiency opens medical registration in Germany and select EU countries.",
      },
      {
        icon: "🔬",
        title: "Medical Research",
        description:
          "Kazakh universities' UNESCO and FAIMER recognition opens doors to PhD programs and research fellowships in Europe, India, and internationally.",
      },
      {
        icon: "🏢",
        title: "Healthcare Administration",
        description:
          "Combine MBBS with an MBA/MHA for careers in hospital management, healthcare policy, pharmaceutical management, and health tech.",
      },
    ],
  };

// --- Why Choose Taksheela (WhyChooseTaksheelaAbroad) -------------------------------

export type AbroadWhyChooseTaksheelaItem = {
  icon: string;
  title: string;
  description: string;
};

export type AbroadWhyChooseTaksheelaContent = {
  eyebrow: string;
  titlePrimary: string;
  titleAccent: string;
  subtitle: string;
  items: AbroadWhyChooseTaksheelaItem[];
};

export const kazakhstanAbroadWhyChooseTaksheelaContent: AbroadWhyChooseTaksheelaContent =
  {
    eyebrow: "Your Kazakhstan MBBS Partner",
    titlePrimary: "Why Choose Taksheela for",
    titleAccent: "MBBS in Kazakhstan?",
    subtitle:
      "Not just a consultancy — your end-to-end medical career partner from NEET score to Kazakh MD degree and NExT preparation. Here is what makes Taksheela genuinely different.",
    items: [
      {
        icon: "🎯",
        title: "Kazakhstan-Specialist Counsellors",
        description:
          "Advisors who know Kazakhstan's university landscape deeply — city-wise cost differences (Almaty vs Astana vs Shymkent), NMC compliance, NExT readiness, and realistic winter preparation. Not generic abroad counselling.",
      },
      {
        icon: "📊",
        title: "Real-Time NMC Verification",
        description:
          "We cross-check every university against the NMC's current approved list before shortlisting — and share the official NMC document with you. You make decisions based on verified government data, not our word.",
      },
      {
        icon: "🔍",
        title: "Zero Commission Bias",
        description:
          "Our shortlisting is driven by NMC compliance, city suitability, fee transparency, hostel quality, and clinical training strength. Never by university commission. We show you the reasoning in writing.",
      },
      {
        icon: "📋",
        title: "Complete Document Management",
        description:
          "MEA apostille, Russian translation (where required), visa invitation coordination, and SOP preparation — structured checklists, zero missed steps, fewer rejections. We've placed hundreds of students in Kazakhstan.",
      },
      {
        icon: "🛂",
        title: "Visa & Travel Hand-Holding",
        description:
          "Full Kazakh student visa package — including medical tests, health insurance, SOP, and Embassy submission coordination. Pre-departure orientation covering forex, flights, winter packing, and SIM card setup.",
      },
      {
        icon: "🤝",
        title: "Local Teams in Almaty & Astana",
        description:
          "Taksheela's on-ground representatives in Kazakhstan provide airport pickup, hostel check-in, university registration, SIM setup, and cultural orientation — so your first week in Kazakhstan is smooth and reassuring.",
      },
      {
        icon: "🇳🇵🇧🇩",
        title: "Dedicated Nepal & Bangladesh Support",
        description:
          "Specialist counsellors who understand the unique visa, DGME/NMC-Nepal compliance, and licensing pathway requirements for Nepali and Bangladeshi students — not a copy-paste India process.",
      },
      {
        icon: "💳",
        title: "Education Loan File Preparation",
        description:
          "Complete lender-ready document file for SBI, Bank of Baroda, HDFC Credila, Avanse, and Auxilo — so your loan application moves faster and with fewer rejections.",
      },
      {
        icon: "🧩",
        title: "NExT Roadmap from Year 1",
        description:
          "Early orientation to NExT structure, study resources, and alumni connects — so your licensing preparation starts from Year 1, not in a panic during Year 5 or 6.",
      },
    ],
  };

// --- Regulatory framework (RulesAndComplainsAbroad) -------------------------------

export type AbroadRegulatoryRuleItem = {
  icon: string;
  title: string;
  description: string;
};

export type AbroadRegulatoryOfficialLink = {
  /** e.g. "NMC India" */
  label: string;
  /** Full URL including https:// */
  href: string;
};

export type AbroadRegulatoryFrameworkContent = {
  eyebrow: string;
  titlePrimary: string;
  titleAccent: string;
  subtitle: string;
  rules: AbroadRegulatoryRuleItem[];
  officialSourcesLabel: string;
  officialLinks: AbroadRegulatoryOfficialLink[];
};

export const kazakhstanAbroadRegulatoryFrameworkContent: AbroadRegulatoryFrameworkContent =
  {
    eyebrow: "Regulatory framework",
    titlePrimary: "NMC Gazette Rules &",
    titleAccent: "Kazakhstan Compliance",
    subtitle:
      "These six NMC Gazette rules determine whether your Kazakh MBBS degree qualifies you to practice medicine in India. All Taksheela-recommended Kazakh universities comply fully with all six when you verify current listings.",
    rules: [
      {
        icon: "📅",
        title: "Rule 1 — Minimum 54 Months Academic Study",
        description:
          "The programme must include at least 54 months of full-time academic study, excluding the 12-month internship. All Kazakh MD programs run for 5 academic years, fully satisfying this requirement — confirm your university’s exact structure vs NMC norms before enrolling.",
      },
      {
        icon: "🏥",
        title: "Rule 2 — 12-Month Mandatory Internship",
        description:
          "A compulsory 12-month clinical internship must be completed at the same university or its affiliated teaching hospital in Kazakhstan before returning to India, as per NMC rules applicable at your admission.",
      },
      {
        icon: "🌐",
        title: "Rule 3 — English as Primary Medium",
        description:
          "The full MBBS/MD course must be delivered in English. All 10+ NMC-listed Kazakh medical universities offer complete English-medium General Medicine programs at Taksheela-shortlisted options.",
      },
      {
        icon: "🪪",
        title: "Rule 4 — Valid Degree for Local Practice",
        description:
          "Graduates must receive a degree granting them the right to practise medicine in Kazakhstan. All recommended universities satisfy this — graduates can apply for Kazakh medical registration upon completion.",
      },
      {
        icon: "📋",
        title: "Rule 5 — NEET Qualification Mandatory",
        description:
          "All Indian students must have a valid NEET-UG qualifying score at the time of admission to any foreign medical university, as per NMC norms. NEET validity: 3 years from result date.",
      },
      {
        icon: "✅",
        title: "Rule 6 — WHO / WDOMS Listing",
        description:
          "The university must be listed in the World Directory of Medical Schools (WDOMS). All Taksheela-recommended Kazakh universities are confirmed WDOMS-listed and NMC-approved before shortlisting.",
      },
    ],
    officialSourcesLabel: "Official Sources",
    officialLinks: [
      { label: "NMC India", href: "https://www.nmc.org.in" },
      { label: "WHO Directory", href: "https://www.wdoms.org" },
      {
        label: "Kazakhstan Ministry of Education (gov.kz)",
        href: "https://www.gov.kz",
      },
      { label: "MEA India (Apostille)", href: "https://www.mea.gov.in" },
    ],
  };

// --- Top 10 universities (TopTenUniversityAbroad) --------------------------------

export type TopUniHeaderTagVariant = "emerald" | "sky" | "amber" | "rose";

export type TopUniHeaderTag = {
  label: string;
  variant: TopUniHeaderTagVariant;
};

export type TopUniFmgeBlock =
  | {
      type: "text";
      text: string;
    }
  | {
      type: "bar";
      barLabel: string;
      /** 0–100 width for the red progress bar */
      barPercent: number;
    };

/** One row in the 2×2 stats grid — labels match the reference (Annual fees, Medium, Departments, etc.). */
export type TopUniStatCell = {
  label: string;
  value: string;
};

export type TopUniStatsRow = [
  TopUniStatCell,
  TopUniStatCell,
  TopUniStatCell,
  TopUniStatCell,
];

export type AbroadTopUniversityCard = {
  id: string;
  name: string;
  abbreviation: string;
  established: string;
  locationLine: string;
  region: "moscow" | "other";
  budgetFriendly: boolean;
  fmgePercent: number;
  headerTags: TopUniHeaderTag[];
  /** Short badge line above the title (e.g. “Moscow University”, “Oldest in Russia 1758”) */
  rankTag: string;
  /** Optional: overrides default “Abbrev • Est. … • …” under the title */
  subtitle?: string;
  /** Decorative icon in the header (e.g. 🏥) — reference design */
  headerEmoji?: string;
  imageSrc?: string;
  stats: TopUniStatsRow;
  fmge: TopUniFmgeBlock;
  description: string[];
  featureTags: string[];
  applyHref: string;
  availabilityText: string;
};

export type AbroadTopUniversitiesFilterId =
  | "all"
  | "moscow"
  | "other"
  | "budget"
  | "top_fmge";

export type QuickComparisonRow = {
  /** Short label in the first column (e.g. “Kazan KSMU”) */
  university: string;
  city: string;
  established: string;
  annualFees: string;
  fmgeRate: string;
  /** Red text + star in the FMGE column */
  fmgeHighlight?: boolean;
  bestFor: string;
};

export type QuickComparisonBlock = {
  title: string;
  disclaimer: string;
  rows: QuickComparisonRow[];
};

export type AbroadTopUniversitiesContent = {
  eyebrow: string;
  titlePrimary: string;
  titleAccent: string;
  intro: string;
  /** Large decorative letters on each card header (e.g. RU, GE). */
  cardWatermarkCode: string;
  filters: { id: AbroadTopUniversitiesFilterId; label: string }[];
  universities: AbroadTopUniversityCard[];
  /**
   * University `id`s shown when the "Top FMGE Rate" tab is active.
   * If omitted, the UI falls back to numeric FMGE cutoff.
   */
  topFmgeFilterIds?: readonly string[];
  /** Optional “Quick Comparison” table below the cards */
  quickComparison?: QuickComparisonBlock;
};

const kzUni = (file: string) =>
  `${imageBaseUrl ?? ""}mbbsCollege/kazakhstan/university/${file}`;

export const kazakhstanTopUniversityCards: AbroadTopUniversityCard[] = [
  {
    id: "knmu",
    name: "Kazakh National Medical University",
    abbreviation: "KNMU",
    established: "1931",
    locationLine: "Almaty",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 30,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Flagship", variant: "amber" },
    ],
    rankTag: "Historic national medical university — Almaty",
    headerEmoji: "🏛️",
    imageSrc: kzUni("knmu.jpg"),
    stats: [
      { label: "Annual fees", value: "~₹3.5–5L/yr" },
      { label: "6-year total", value: "~₹22–32L" },
      { label: "Duration", value: "5–6 Years" },
      { label: "Medium", value: "English" },
    ],
    fmge: {
      type: "text",
      text: "Licensing outcomes depend on self-study; strong Indian peer groups in Almaty for NExT coaching.",
    },
    description: [
      "Kazakhstan’s flagship medical university with deep clinical training traditions and strong hospital affiliations in Almaty.",
    ],
    featureTags: [
      "Almaty",
      "English Track",
      "Clinical Rotations",
      "Indian Community",
    ],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "amu",
    name: "Astana Medical University",
    abbreviation: "AMU",
    established: "1997",
    locationLine: "Nur-Sultan",
    region: "other",
    budgetFriendly: false,
    fmgePercent: 30,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Capital City", variant: "amber" },
    ],
    rankTag: "Leading medical university — capital",
    subtitle: "AMU – Nur-Sultan, Kazakhstan",
    headerEmoji: "🔬",
    imageSrc: kzUni("amu.webp"),
    stats: [
      { label: "Annual fees", value: "~₹3.5–5L/yr" },
      { label: "6-year total", value: "~₹22–32L" },
      { label: "Duration", value: "5–6 Years" },
      { label: "Founded", value: "1997" },
    ],
    fmge: {
      type: "text",
      text: "Structured clinical exposure — pair with disciplined NExT preparation from early years.",
    },
    description: [
      "Well-known English-medium intake at Kazakhstan’s capital; modern infrastructure and growing international student cohort.",
    ],
    featureTags: [
      "English Medium",
      "Hospital Network",
      "Peer Support",
      "NMC Aligned",
    ],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "ksmu",
    name: "Karaganda State Medical University",
    abbreviation: "KSMU",
    established: "1950",
    locationLine: "Karaganda",
    region: "other",
    budgetFriendly: false,
    fmgePercent: 29,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Established", variant: "amber" },
    ],
    rankTag: "Established clinical school — Karaganda",
    headerEmoji: "🎓",
    imageSrc: kzUni("ksmu.jpg"),
    stats: [
      { label: "Annual fees", value: "~₹2.5–4L/yr" },
      { label: "6-year total", value: "~₹18–28L" },
      { label: "Duration", value: "5–6 Years" },
      { label: "City", value: "Karaganda" },
    ],
    fmge: {
      type: "text",
      text: "Verify latest NMC listing; strong regional hub for clinical training.",
    },
    description: [
      "One of Central Asia’s oldest medical universities — strong teaching hospital network and structured MBBS curriculum.",
    ],
    featureTags: [
      "International Mix",
      "English Track",
      "Karaganda",
      "Hostel Options",
    ],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "krmu",
    name: "Kazakh-Russian Medical University",
    abbreviation: "KRMU",
    established: "1992",
    locationLine: "Almaty",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 30,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Almaty", variant: "amber" },
    ],
    rankTag: "Private medical university — Almaty",
    headerEmoji: "🏛️",
    imageSrc: kzUni("krmu.webp"),
    stats: [
      { label: "Annual fees", value: "~₹3.5–5L/yr" },
      { label: "6-year total", value: "~₹22–32L" },
      { label: "Duration", value: "5–6 Years" },
      { label: "Medium", value: "English" },
    ],
    fmge: {
      type: "text",
      text: "Licensing outcomes depend on cohort discipline; active Indian student community in Almaty.",
    },
    description: [
      "Popular private medical university in Almaty with English-medium programmes and strong clinical exposure.",
    ],
    featureTags: [
      "Almaty",
      "English Program",
      "Clinical Rotations",
      "Indian Community",
    ],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "ssmu",
    name: "Semey State Medical University",
    abbreviation: "SSMU",
    established: "1953",
    locationLine: "Semey",
    region: "other",
    budgetFriendly: false,
    fmgePercent: 29,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "East Kazakhstan", variant: "amber" },
    ],
    rankTag: "Established medical university — Semey",
    headerEmoji: "📚",
    imageSrc: kzUni("smu.jpg"),
    stats: [
      { label: "Annual fees", value: "~₹2.5–4L/yr" },
      { label: "6-year total", value: "~₹18–28L" },
      { label: "Duration", value: "5–6 Years" },
      { label: "City", value: "Semey" },
    ],
    fmge: {
      type: "text",
      text: "Pair early NExT planning with clinical years — verify NMC listing each intake.",
    },
    description: [
      "Historic medical school in eastern Kazakhstan with strong teaching hospital links and international student intake.",
    ],
    featureTags: ["Semey", "English Track", "Clinical Training", "NMC Pathway"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "wkmu",
    name: "West Kazakhstan Marat Ospanov State Medical University",
    abbreviation: "WKMU",
    established: "1988",
    locationLine: "Aktobe",
    region: "other",
    budgetFriendly: false,
    fmgePercent: 28,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Regional Hub", variant: "amber" },
    ],
    rankTag: "Western Kazakhstan clinical hub",
    headerEmoji: "🏫",
    imageSrc: kzUni("wkmu.jpg"),
    stats: [
      { label: "Annual fees", value: "~₹2.5–4L/yr" },
      { label: "6-year total", value: "~₹18–28L" },
      { label: "Duration", value: "5–6 Years" },
      { label: "Medium", value: "English" },
    ],
    fmge: {
      type: "text",
      text: "Licensing outcomes depend on individual prep; confirm internship mapping with counsellor.",
    },
    description: [
      "Serves western Kazakhstan with structured MBBS training and hospital rotations — popular with international applicants seeking value.",
    ],
    featureTags: ["Aktobe", "English MD", "Hostel", "Peer Network"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "skma",
    name: "South Kazakhstan Medical Academy",
    abbreviation: "SKMA",
    established: "1979",
    locationLine: "Shymkent",
    region: "other",
    budgetFriendly: true,
    fmgePercent: 30,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Budget-Friendly", variant: "rose" },
    ],
    rankTag: "Southern hub — milder winters",
    subtitle: "SKMA – Shymkent, Kazakhstan",
    headerEmoji: "🌍",
    imageSrc: kzUni("skma.webp"),
    stats: [
      { label: "Annual fees", value: "~₹2.5–4L/yr" },
      { label: "6-year total", value: "~₹18–26L" },
      { label: "Duration", value: "5–6 Years" },
      { label: "Students", value: "Int'l mix" },
    ],
    fmge: {
      type: "text",
      text: "Popular with South Asian students — verify latest NMC listing before fees.",
    },
    description: [
      "Major southern intake with relatively milder climate vs northern cities; growing Indian and Bangladeshi cohorts.",
    ],
    featureTags: ["Shymkent", "Affordable", "Indian Community", "English"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "koksu",
    name: "Kokshetau University (named after Shokan Ualikhanov)",
    abbreviation: "Koksu",
    established: "1962",
    locationLine: "Kokshetau",
    region: "other",
    budgetFriendly: true,
    fmgePercent: 28,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "North Region", variant: "amber" },
    ],
    rankTag: "Northern Kazakhstan — value option",
    headerEmoji: "⚖️",
    imageSrc: kzUni("koksu.webp"),
    stats: [
      { label: "Annual fees", value: "~₹2.5–4L/yr" },
      { label: "6-year total", value: "~₹18–26L" },
      { label: "Duration", value: "5–6 Years" },
      { label: "Founded", value: "1962" },
    ],
    fmge: {
      type: "text",
      text: "Colder climate — plan winter gear; pair with structured NExT mentoring.",
    },
    description: [
      "Regional university with medical faculty attracting international students seeking lower total cost of study.",
    ],
    featureTags: ["Kokshetau", "Value", "Clinical Training", "NMC"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "nksu",
    name: "North Kazakhstan State University (M. Kozybayev)",
    abbreviation: "NKSU",
    established: "1937",
    locationLine: "Petropavl",
    region: "other",
    budgetFriendly: false,
    fmgePercent: 30,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "North Belt", variant: "amber" },
    ],
    rankTag: "Northern city — verify climate fit",
    headerEmoji: "✨",
    imageSrc: kzUni("nksu.png"),
    stats: [
      { label: "Annual fees", value: "~₹2.5–4L/yr" },
      { label: "6-year total", value: "~₹18–28L" },
      { label: "Duration", value: "5–6 Years" },
      { label: "Founded", value: "1937" },
    ],
    fmge: {
      type: "text",
      text: "Harsh winters — prepare mentally and physically; licensing follows same NExT pathway as other Kazakh degrees.",
    },
    description: [
      "One of Kazakhstan’s oldest universities with medical programmes; smaller city, lower living costs vs Almaty.",
    ],
    featureTags: [
      "Petropavl",
      "English MD",
      "Student Support",
      "NMC Screening",
    ],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
];

export const kazakhstanAbroadTopUniversitiesContent: AbroadTopUniversitiesContent =
  {
    eyebrow: "Where to Study",
    titlePrimary: "Top NMC-Approved Medical Universities in Kazakhstan",
    titleAccent: "2026–27",
    intro:
      "All listed universities are WHO-listed, NMC-approved, and Taksheela-verified for 2026–27. Fees, city, and specialisations vary — Taksheela shortlists the right match for your profile.",
    cardWatermarkCode: "KZ",
    filters: [
      { id: "all", label: "All Universities" },
      { id: "moscow", label: "Almaty" },
      { id: "other", label: "Other Cities" },
      { id: "budget", label: "Budget-Friendly" },
      { id: "top_fmge", label: "Top FMGE Rate" },
    ],
    topFmgeFilterIds: ["knmu", "amu"],
    universities: kazakhstanTopUniversityCards,
    quickComparison: {
      title: "Quick Comparison — All 9 Universities",
      disclaimer:
        "Fees are approximate for 2026–27 based on publicly available data. Exact figures vary by year and exchange rate. Verified breakdown provided during free counselling.",
      rows: [
        {
          university: "KNMU",
          city: "Almaty",
          established: "1931",
          annualFees: "~₹3.5–5L/yr",
          fmgeRate: "~30%",
          fmgeHighlight: true,
          bestFor: "Flagship national medical university",
        },
        {
          university: "AMU",
          city: "Nur-Sultan",
          established: "1997",
          annualFees: "~₹3.5–5L/yr",
          fmgeRate: "Capital intake",
          fmgeHighlight: true,
          bestFor: "Modern capital campus",
        },
        {
          university: "KSMU",
          city: "Karaganda",
          established: "1950",
          annualFees: "~₹2.5–4L/yr",
          fmgeRate: "Moderate",
          bestFor: "Established + value",
        },
        {
          university: "KRMU",
          city: "Almaty",
          established: "1992",
          annualFees: "~₹3.5–5L/yr",
          fmgeRate: "Moderate",
          bestFor: "Private English track — Almaty",
        },
        {
          university: "SSMU",
          city: "Semey",
          established: "1953",
          annualFees: "~₹2.5–4L/yr",
          fmgeRate: "Moderate",
          bestFor: "East Kazakhstan hub",
        },
        {
          university: "WKMU",
          city: "Aktobe",
          established: "1988",
          annualFees: "~₹2.5–4L/yr",
          fmgeRate: "Moderate",
          bestFor: "Western region clinical focus",
        },
        {
          university: "SKMA",
          city: "Shymkent",
          established: "1979",
          annualFees: "~₹2.5–4L/yr",
          fmgeRate: "Budget-friendly",
          bestFor: "Milder climate + value",
        },
        {
          university: "Koksu",
          city: "Kokshetau",
          established: "1962",
          annualFees: "~₹2.5–4L/yr",
          fmgeRate: "Value",
          bestFor: "Northern belt — lower cost",
        },
        {
          university: "NKSU",
          city: "Petropavl",
          established: "1937",
          annualFees: "~₹2.5–4L/yr",
          fmgeRate: "Moderate",
          bestFor: "Oldest uni — coldest winters and hottest summers",
        },
      ],
    },
  };

// --- FAQ — Kazakhstan MBBS (FAQPage schema / AI-optimised) ----------------------------

export type AbroadFaqItem = {
  question: string;
  answer: string;
};

export type AbroadFaqPageContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: AbroadFaqItem[];
};

export const kazakhstanAbroadFaqPageContent: AbroadFaqPageContent = {
  eyebrow: "Frequently Asked Questions",
  title: "Everything You Need to Know About MBBS in Kazakhstan",
  subtitle:
    "Answers for Indian, Nepali, and Bangladeshi students — validity, NExT, costs in INR/NPR/BDT, universities, food, climate, and timelines.",
  items: [
    {
      question:
        "Is MBBS in Kazakhstan valid in India? Can I practise medicine in India after graduating?",
      answer:
        "Yes — provided you complete your degree at an NMC-approved Kazakh university, finish the full 6-year program including the mandatory 12-month clinical internship in Kazakhstan, and then clear India's NExT (National Exit Test). After NExT, you must complete a 12-month internship at an NMC-recognised hospital in India before receiving permanent medical registration. Taksheela only recommends NMC-approved institutions verified against the current official list.",
    },
    {
      question:
        "What is the total cost of MBBS in Kazakhstan in Indian Rupees, NPR, and BDT?",
      answer:
        "Total 6-year all-inclusive cost (2026–27): Indian Rupees: ₹35-48  lakhs (tuition + hostel + food + insurance + visa + personal). This is among the lowest total costs for any NMC-approved MBBS destination globally. Nepal NPR: approximately NPR 55–77 lakh. Bangladesh BDT: approximately BDT 45–64 lakh. Budget universities like SKMA and Kokshetau State University fall at the lower end. Premium options like KazNMU or Al-Farabi are at the higher end but still far cheaper than Indian private MBBS. Zero capitation. Zero donation.",
    },
    {
      question: "Is NEET mandatory for MBBS in Kazakhstan for Indian students?",
      answer:
        "Yes, for Indian students who intend to return and practise medicine in India. As per NMC regulations (effective March 2019), a valid NEET-UG qualifying score (within its 3-year validity) is mandatory before admission to any foreign medical university. Kazakh universities do not set a minimum NEET percentile or score — only that you have qualified the exam. Nepali and Bangladeshi students should confirm equivalent national entrance test requirements with Taksheela.",
    },
    {
      question:
        "Which are the best NMC-approved universities in Kazakhstan for Indian students?",
      answer:
        "Top Taksheela-recommended NMC-compliant universities: (1) Kazakh National Medical University (KazNMU, est. 1930, Almaty — flagship institution), (2) Al-Farabi Kazakh National University (KazNU, est. 1934, Almaty), (3) Astana Medical University (AMU, est. 2009, Astana), (4) Kazakh Russian Medical University (KRMU, est. 2003, Almaty), (5) South Kazakhstan Medical Academy (SKMA, est. 1979, Shymkent — most affordable), (6) Karaganda Medical University (KarMU, est. 1950), (7) Kokshetau State University (KSU), (8) Semey Medical University (est. 1952), (9) West Kazakhstan Marat Ospanov Medical University (WKMU, Aktobe). All WHO-listed, NMC-approved — verify current list before fees.",
    },
    {
      question:
        "Is MBBS in Kazakhstan better than Russia or Georgia for Indian students?",
      answer:
        "Kazakhstan vs Russia: Kazakhstan fees are comparable to Russia's budget options (₹3–5L/year vs ₹2.7–8L/year in Russia). Kazakhstan has no GOZZ state exam requirement, unlike Russia. Both require a second language for clinical years. Kazakhstan has a Muslim-majority culture with halal food readily available — an advantage for many South Asian students. Kazakhstan vs Georgia: Georgia offers 100% English medium with no second language for clinical years and milder winters. Kazakhstan is cheaper overall. The right choice depends on budget, climate preference, career goals, and cultural fit — Taksheela provides personalised comparisons based on your specific profile.",
    },
    {
      question:
        "Can students from Nepal and Bangladesh study MBBS in Kazakhstan?",
      answer:
        "Yes. Kazakh universities welcome students from all nationalities. Nepali students must show their NEB certificate (apostilled) or equivalent, and may use a valid NEET score or Nepali national medical entry test. Bangladeshi students must show their HSC certificate with DGME compliance documentation. Both nationalities require a Kazakh student visa. Taksheela has dedicated counsellors with specific knowledge of Nepal NMC and BMDC (Bangladesh) licensing pathways to advise on which Kazakh university best suits each student's career plan back home.",
    },
    {
      question: "Which city in Kazakhstan is best for MBBS — Almaty or Astana?",
      answer:
        "Both have strong NMC-approved universities. Almaty (south Kazakhstan): milder winters (-5°C to -15°C), more cosmopolitan, larger Indian student community, more Indian restaurants, more university options (KazNMU, KazNU, KRMU). Widely preferred by Indian students. Astana (capital, north Kazakhstan): colder winters (-15°C to -25°C), more modern architecture, Astana Medical University with excellent facilities, slightly lower living costs. Best for students who prioritise capital city infrastructure and can manage severe winters. Taksheela recommends Almaty for most students from India, Nepal, and Bangladesh — especially those with concerns about climate adjustment.",
    },
    {
      question:
        "What is the NExT exam and how does it affect students graduating from Kazakhstan?",
      answer:
        "NExT (National Exit Test) has replaced the old FMGE for all Indian medical graduates returning from foreign universities. It is a two-part examination: NExT Step 1 (knowledge-based multiple-choice assessment) and NExT Step 2 (clinical skills and OSCE-format evaluation). Clearing NExT is mandatory for Kazakh MBBS graduates who wish to practise medicine in India or pursue MD/MS postgraduate specialisation. Unlike the old FMGE (which only applied to foreign graduates), NExT applies to all MBBS graduates, including those from Indian institutions. Taksheela provides NExT orientation to students starting from Year 1 of their MBBS in Kazakhstan.",
    },
    {
      question:
        "Is food available for Indian, Hindu vegetarian, and Muslim students in Kazakhstan?",
      answer:
        "Yes. Kazakhstan is a Muslim-majority country, making halal food available everywhere — in university canteens, restaurants, and grocery stores. This is a significant advantage for Muslim students from Bangladesh and other communities. For Hindu vegetarian students, Almaty and Astana have multiple Indian restaurants serving vegetarian dal, rice, roti, and sabzi. Indian grocery stores in Almaty stock Indian brands including lentils, spices, pickles, and rice. University hostels at several institutions also have dedicated Indian mess facilities. Taksheela's local team in Almaty can guide students on the best Indian food resources on arrival.",
    },
    {
      question:
        "When should I apply for MBBS in Kazakhstan for the September 2026 intake?",
      answer:
        "For the September 2026 intake: begin counselling and university shortlisting by March–April 2026. Applications should be submitted to the university by June–July 2026. Admission letters are typically received by July–August. Visa processing takes 3–5 weeks, so embassy submission should happen by late August. MEA apostille takes 2–4 weeks — start early. Taksheela strongly recommends beginning the process by April to ensure all documents, apostille, and visa stages align without deadline pressure. Contact us now to check current seat availability at your preferred Kazakh university.",
    },
    {
      question: "How do I verify if a Kazakh university is NMC-approved?",
      answer:
        "Visit the official NMC website at nmc.org.in and check the published list of approved foreign medical universities. Also verify the institution in the WHO's World Directory of Medical Schools at wdoms.org. Taksheela performs this verification in real time before every shortlisting recommendation and shares the official NMC document with every student — so you're never relying solely on our word. The golden rule: never pay any fee to a university without independently confirming its current NMC approval status. We make this process straightforward for you.",
    },
    {
      question: "Are there scholarships available for MBBS in Kazakhstan?",
      answer:
        "Yes — several routes are available. University merit scholarships (10–20% fee waiver for strong PCB or NEET scores), the Government of India's Central Sector Interest Subsidy (CSIS) scheme for EWS students (family income under ₹4.5L), the Padho Pardesh scheme for minority community students, and limited slots through the Bolashak Presidential Scholarship program. Scholarship availability and seat quotas change every year — always verify with the issuing body. Taksheela identifies eligible schemes and helps with documentation for your scholarship application alongside the admission process.",
    },
  ],
};

export const kazakhstanAbroadCtaBannerContent: AbroadCtaBannerContent = {
  countryLabel: "Kazakhstan",
  subtitle:
    "Book your free counselling session. Get a personalised university shortlist, complete fee breakdown, and eligibility confirmation within 24 hours.",
  primaryCtaLabel: "Book Free Counselling",
  phoneDisplay: "+91 9831241212",
  phoneTel: "+919831241212",
};

export const kazakhstanAbroadQuickFactsContent: AbroadQuickFactItem[] = [
  {
    icon: "🎓",
    label: "Degree Awarded",
    value: "MD / General Medicine (= MBBS)",
    mLabel: "Degree",
    mValue: "MD = MBBS",
  },
  {
    icon: "⏱️",
    label: "Course Duration",
    value: "6 Years (5 academic + 1 internship)",
    mLabel: "Duration",
    mValue: "6 yrs",
  },
  {
    icon: "💰",
    label: "Annual Tuition",
    value: "₹3.5L – ₹5L / year",
    mLabel: "Tuition / yr",
    mValue: "₹3.5–5L",
  },
  {
    icon: "🏠",
    label: "Annual Living Cost",
    value: "₹1.2L – ₹2.5L / year",
    mLabel: "Living / yr",
    mValue: "₹1.2–2.5L",
  },
  {
    icon: "🗓️",
    label: "Intakes",
    value: "September (primary) · February (secondary)",
    mLabel: "Intakes",
    mValue: "Sep · Feb",
  },
  {
    icon: "🧾",
    label: "Basic Eligibility",
    value: "50% PCB + NEET qualified, age 17+",
    mLabel: "Eligibility",
    mValue: "50% PCB + NEET",
  },
  {
    icon: "🌐",
    label: "Medium of Instruction",
    value: "English (primary); Russian/Kazakh taught",
    mLabel: "Medium",
    mValue: "English",
  },
  {
    icon: "✅",
    label: "Recognised By",
    value: "WHO · NMC · FAIMER · ECFMG · UNESCO",
    mLabel: "Recognised",
    mValue: "Multi-body",
  },
  {
    icon: "👩‍🎓",
    label: "Indian Students",
    value: "9,000+ enrolled (2024–25)",
    mLabel: "Indians",
    mValue: "9,000+",
  },
  {
    icon: "🏛️",
    label: "NMC-Approved Universities",
    value: "10+ institutions",
    mLabel: "NMC unis",
    mValue: "10+",
  },
  {
    icon: "🚫",
    label: "Donation / Capitation",
    value: "Zero. Completely merit-based.",
    mLabel: "Donation",
    mValue: "Zero",
  },
  {
    icon: "📝",
    label: "IELTS / TOEFL Required",
    value: "Not required for admission",
    mLabel: "IELTS/TOEFL",
    mValue: "Not required",
  },
];

const kazakhstanAbroadWhyChooseMbbsReasons: AbroadWhyChooseMbbsItem[] = [
  {
    icon: "💸",
    title: "One of the Most Affordable MBBS Destinations Globally",
    description:
      "Annual tuition ranges from ₹3.5L to ₹5L, making Kazakhstan among the lowest-cost NMC-approved medical education destinations. Total 6-year investment: ₹35-48  lakhs — compared to ₹80L–₹1.2Cr at Indian private colleges, with zero donation.",
  },
  {
    icon: "✅",
    title: "NMC-Approved — Valid Degree for India Practice",
    description:
      "All 10+ Taksheela-recommended Kazakh universities are on the NMC's current approved list. Graduates can appear for NExT and return to practise medicine anywhere in India after internship completion.",
  },
  {
    icon: "🌐",
    title: "English as Primary Medium — No IELTS Required",
    description:
      "All NMC-listed Kazakh medical universities offer the General Medicine program entirely in English. Russian and Kazakh are taught as auxiliary languages for patient communication — but all exams, textbooks, and lectures are in English.",
  },
  {
    icon: "🏥",
    title: "Modern Hospitals with Diverse Clinical Exposure",
    description:
      "Kazakh teaching hospitals serve large, diverse patient populations with varied disease profiles. Clinical rotations from Year 3 cover Surgery, Internal Medicine, OBG, Paediatrics, Neurology, and Emergency Medicine.",
  },
  {
    icon: "🎓",
    title: "WHO, FAIMER, ECFMG & UNESCO Recognition",
    description:
      "Kazakh MD degrees carry multi-body international recognition, enabling graduates to pursue licensing exams globally: NExT (India), PLAB (UK), USMLE (USA), and Gulf country licensing exams.",
  },
  {
    icon: "🚫",
    title: "Absolutely Zero Donation or Capitation",
    description:
      "Kazakh universities admit students on pure academic merit. There are no management quotas, no backdoor admissions, and no capitation fees — a stark, welcome contrast to Indian private MBBS admissions.",
  },
  {
    icon: "🛡️",
    title: "Safe, Student-Friendly Cities",
    description:
      "Almaty and Astana (Nur-Sultan) consistently rank as safe, cosmopolitan Central Asian cities with strong law enforcement, established Indian student communities, and good public infrastructure.",
  },
  {
    icon: "🍽️",
    title: "Halal Food & Indian Dietary Options Available",
    description:
      "Kazakhstan is a majority-Muslim country, making halal food readily available in all major cities. Multiple Indian restaurants and Indian grocery stores serve the South Asian student community in Almaty and Astana.",
  },
  {
    icon: "🇳🇵🇧🇩",
    title: "Welcoming for Nepal & Bangladesh Students",
    description:
      "Kazakh universities actively recruit students from Nepal and Bangladesh. Growing Nepali and Bangladeshi student communities in Almaty and Astana make cultural integration seamless from Day 1.",
  },
  {
    icon: "✈️",
    title: "Affordable Flights, Accessible Visa",
    description:
      "Direct and one-stop flights from Delhi and Mumbai to Almaty (via Dubai, Istanbul, or direct). Kazakhstan student visa processing is streamlined through the Kazakh Embassy in New Delhi.",
  },
];

const kazakhstanAbroadWhyChooseMbbsSection: AbroadWhyChooseMbbsSectionContent =
  {
    eyebrow: "Why Choose Kazakhstan",
    titleLead: "10 Compelling Reasons to Study MBBS in ",
    titleTrail: "",
    subtitle:
      "Evidence-backed reasons why 9,000+ Indian students and growing numbers from Nepal and Bangladesh have chosen Kazakhstan for their medical degree.",
  };

export const kazakhstanAbroadWhyChooseMbbsContent: AbroadWhyChooseMbbsContent =
  {
    section: kazakhstanAbroadWhyChooseMbbsSection,
    reasons: kazakhstanAbroadWhyChooseMbbsReasons,
  };
