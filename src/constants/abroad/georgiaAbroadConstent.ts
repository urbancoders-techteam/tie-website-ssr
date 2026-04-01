/**
 * Georgia MBBS abroad — single source of truth for `/mbbs/abroad/georgia` UI copy and structured data.
 * Types are shared with Russia from this module’s historical structure; extend exports below as needed.
 */

import { imageBaseUrl } from "@/utils/config";
import type {
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

export type AbroadHeroSpotlight = {
  value: string;
  caption: string;
};

export type AbroadHeroGridCard = {
  value: string;
  label: string;
};

/** Full hero payload — every visible string in the hero can be driven from here. */
export type AbroadHeroContent = {
  eyebrow: string;
  headline: AbroadHeroHeadline;
  /** Body paragraph under the headline */
  description: string;
  /** Truncate description to this length (default 260) */
  descriptionMaxLength?: number;
  cta: AbroadHeroCta;
  /** Four cells in the bordered row (e.g. Total Fees, Duration, Medium, Intake) */
  quickStats: [AbroadHeroStatPair, AbroadHeroStatPair, AbroadHeroStatPair, AbroadHeroStatPair];
  /** Large highlighted stat on the right */
  spotlight: AbroadHeroSpotlight;
  /** Four smaller cards under the spotlight */
  statGrid: [AbroadHeroGridCard, AbroadHeroGridCard, AbroadHeroGridCard, AbroadHeroGridCard];
};

export const georgiaAbroadHeroContent: AbroadHeroContent = {
  eyebrow: "GE MBBS in Georgia 2026-27 - Admissions Open",
  headline: {
    line1: "Study MBBS in Georgia",
    line2Accent: "English MD Pathway in",
    line3: "the Caucasus — Europe’s Doorstep.",
  },
  description:
    "Georgia offers English-medium 6-year MD programmes, NMC-screened universities, and total costs typically ₹21–48 lakhs — far below most Indian private medical colleges. Tbilisi and Batumi combine European lifestyle, growing Indian student communities, and clinical training aligned with global licensing pathways including FMGE/NExT.",
  descriptionMaxLength: 260,
  cta: {
    primaryText: "Book Free Counselling ->",
    secondaryText: "View Universities",
    secondaryHref: "#top-universities",
  },
  quickStats: [
    { label: "Total Fees", value: "₹21L+" },
    { label: "Duration", value: "6 Years" },
    { label: "Medium", value: "English" },
    { label: "Intake", value: "Sep / Feb" },
  ],
  spotlight: {
    value: "15,000+",
    caption: "Indian students in Georgia (MEA / open-source estimates)",
  },
  statGrid: [
    { value: "WHO · NMC", label: "Screened Universities" },
    { value: "₹4L+", label: "Annual Fees From" },
    { value: "6 Yr", label: "MD (MBBS equiv.)" },
    /** Last card value is replaced by `georgiaAbroadHeroFeaturedCount` when used from the page. */
    { value: "10", label: "Featured Universities" },
  ],
};

/** Merges live college count into the hero stat grid (Georgia). */
export function georgiaAbroadHeroFeaturedCount(
  featuredCount: number,
  base: AbroadHeroContent = georgiaAbroadHeroContent
): AbroadHeroContent {
  const count = String(featuredCount);
  const next = [...base.statGrid] as AbroadHeroContent["statGrid"];
  next[3] = { ...next[3], value: count };
  return { ...base, statGrid: next };
}

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

export const georgiaAbroadOverviewContent: AbroadOverviewContent = {
  eyebrow: "Overview",
  heading: "Why Georgia is South Asia's Fastest-Growing MBBS Destination",
  paragraphs: [
    "Georgia — a progressive nation bridging Eastern Europe and Western Asia — has become the top-growth MBBS destination for Indian, Nepali, and Bangladeshi students. The country offers a WHO and NMC-approved medical degree, delivered entirely in English, under the European Bologna education framework.",
    "According to data from India's Ministry of External Affairs and the National Statistics Office of Georgia (2024–25), over 15,000 Indian students are enrolled in Georgian universities, with 85–90% in the MD (MBBS-equivalent) program.",
    "That's a 400%+ growth since 2019. The degree qualifies graduates for NExT (India), PLAB (UK), USMLE (USA), and Gulf licensing exams.",
  ],
  officialData: {
    leadBold: "Official Data (MEA, Dec 2025):",
    textBeforeBold: "{countryName} has ",
    textBold: "{universityCount}+ recognised medical universities",
    textAfterBold:
      " and remains one of the fastest-growing MBBS destinations for South Asian students pursuing globally accepted medical degrees.",
  },
  mediaPlaceholder: {
    emoji: "🏛️",
    title: "[Georgia Medical University Campus Image]",
    subtitle: "Replace with actual asset",
  },
  recognisedStrip: {
    label: "Recognised by:",
    body: "WHO (WDOMS) · NMC India · NCEQE (Georgia) · WFME-aligned pathways — enabling FMGE/NExT (India), USMLE (USA), PLAB (UK), AMC (Australia) when individual requirements are met.",
  },
};

// --- Common fears (CommonFearsSection) ----------------------------------------

export const georgiaAbroadFearsContent: AbroadFearsContent = {
  section: {
    eyebrow: "Challenges & Solutions",
    titleLead: "What Students Worry About",
    titleMiddle: " — ",
    titleAccent: "And Exactly How Taksheela Solves It",
    titleTrail: "",
    subtitle:
      "Every real concern, addressed honestly. No sugar-coating.",
  },
  painTitle: "Common Pain Points",
  solutionTitle: "Taksheela's Solutions",
  painPoints: [
    {
      icon: "📋",
      title: "Will my degree be valid in India?",
      description:
        "Students fear spending 6 years and ₹40L+ only to find their degree isn't accepted by NMC.",
    },
    {
      icon: "📉",
      title: "My NEET score is low — will I still get in?",
      description:
        "Students with scores under 350 assume MBBS abroad is out of reach.",
    },
    {
      icon: "🔍",
      title: "How do I know the agent isn't misleading me?",
      description:
        "Fraud agents recommend non-NMC universities and collect commissions from universities regardless of student outcomes.",
    },
    {
      icon: "👩",
      title: "Is Georgia safe for my daughter studying alone?",
      description:
        "Parents are concerned about safety, cultural adjustment, and lack of support systems for female students.",
    },
    {
      icon: "🍽️",
      title: "Will I get Indian food? Can I follow my diet?",
      description:
        "Students and families worry about dietary adjustments, especially vegetarians and those with religious dietary needs.",
    },
    {
      icon: "🏦",
      title: "Can I get an education loan for Georgia?",
      description:
        "Students ask about vegetarian/halal food, safety in Tbilisi, and how quickly they will feel at home away from India.",
    },
  ],
  solutions: [
    {
      icon: "✅",
      title: "Only NMC-Verified Universities, Always",
      description:
        "We cross-check every university against the NMC's current approved list in real time and share the official document with you before you pay a single rupee.",
    },
    {
      icon: "🎯",
      title: "No AIR Required. Qualification is Enough.",
      description:
        "Georgian universities require only a valid NEET qualifying score within 3 years. No All India Rank cutoff — only that you've qualified. We map you to the right university for your profile.",
    },
    {
      icon: "📊",
      title: "Transparent Shortlisting. Zero Commission Bias.",
      description:
        "Our shortlisting is driven by NMC compliance, fee transparency, hostel quality, and clinical exposure — never by commission. We show you our reasoning in writing.",
    },
    {
      icon: "🛡️",
      title: "Top 20 Globally Safe + Local Support Team",
      description:
        "Georgia ranks among the world's top 20 safest countries. Our Tbilisi-based team provides airport pickup, hostel onboarding, and year-round student support.",
    },
    {
      icon: "🏪",
      title: "Tbilisi Has a Thriving Indian Food Scene",
      description:
        "Multiple Indian restaurants, Indian grocery stores, and many university hostels with Indian mess options. Halal food is available across Tbilisi. Senior students guide newcomers from Day 1.",
    },
    {
      icon: "💳",
      title: "SBI, BoB, HDFC Credila, Avanse — All Available",
      description:
        "Major nationalised banks and NBFCs offer education loans for NMC-approved MBBS in Georgia. Taksheela helps you build a lender-ready document file for faster sanction.",
    },
  ],
};

// --- Eligibility (EligibilityCriteraAbroad) ----------------------------------------

export const georgiaAbroadEligibilityContent: AbroadEligibilityContent = {
  eyebrow: "Who Can Apply",
  titleLead: "Eligibility Criteria for MBBS in ",
  titleTrail: "",
  subtitle:
    "Requirements for students from India, Nepal, and Bangladesh — based on NMC (India) guidelines, NCEQE (Georgia) standards, and individual university policies.",
  tabIndian: "IN Indian Students",
  tabNpbd: "NP BD Nepal & Bangladesh",
  indian: [
    {
      label: "Academic Qualification",
      value:
        "Class 10+2 with Physics, Chemistry, Biology (PCB) as core subjects from any recognised board (CBSE / ICSE / State Board).",
    },
    {
      label: "Minimum Marks in PCB",
      value:
        "General category: minimum 50% aggregate in PCB. SC / ST / OBC reserved category: minimum 40% aggregate in PCB.",
    },
    {
      label: "NEET Qualification",
      value:
        "Valid NEET-UG qualifying score mandatory (3-year validity from result date). Any qualifying score accepted — no minimum percentile set by Georgian universities.",
    },
    {
      label: "Age Requirement",
      value:
        "Minimum 17 years by December 31st of the admission year. No upper age limit at most Georgian private universities.",
    },
    {
      label: "Language Tests",
      value:
        "No IELTS or TOEFL required. Some universities conduct a basic English proficiency interview (online) as part of admission screening.",
    },
    {
      label: "Documents",
      value: "Valid passport (6+ months validity), MEA-apostilled academic certificates, NEET scorecard, passport photographs, medical fitness certificate.",
    },
  ],
  nepali: [
    {
      label: "Academic Qualification",
      value: "Class 12 (NEB certificate or A-Level equivalent) with Physics, Chemistry, Biology as core subjects.",
    },
    {
      label: "Minimum Marks in PCB",
      value: "Recommended 50%+ aggregate in PCB for stronger admissions and scholarship options.",
    },
    {
      label: "Entrance Exam",
      value: "Valid NEET score OR Nepali national medical entry test qualification accepted by most Georgian universities. Taksheela confirms eligibility by university.",
    },
    {
      label: "Age Requirement",
      value: "Minimum 17 years at time of admission. No upper age limit at most institutions.",
    },
    {
      label: "Nepal Licensing Note",
      value: "After graduation, Nepali students must clear the Nepal Medical Council (NMC-Nepal) licensing examination to practise in Nepal. Taksheela advises on both the Indian NExT and Nepal NMC licensing pathways based on your career plan.",
    },

  ],
  npbd: [
    {
      label: "Academic Qualification",
      value: "Class 12 (NEB certificate or A-Level equivalent) with Physics, Chemistry, Biology as core subjects.",
    },
    {
      label: "Minimum Marks in PCB",
      value: "Recommended 50%+ aggregate in PCB for stronger admissions and scholarship options.",
    },
    {
      label: "Entrance Exam",
      value: "Valid NEET score OR Nepali national medical entry test qualification accepted by most Georgian universities. Taksheela confirms eligibility by university.",
    },
    {
      label: "Age Requirement",
      value: "Minimum 17 years at time of admission. No upper age limit at most institutions.",
    },
    {
      label: "Nepal Licensing Note",
      value: "After graduation, Nepali students must clear the Nepal Medical Council (NMC-Nepal) licensing examination to practise in Nepal. Taksheela advises on both the Indian NExT and Nepal NMC licensing pathways based on your career plan.",
    },
  ],
 
  specialNotes: [
    {
      code: "NP",
      heading: "Special Note - Nepali Students",
      title: "Why Georgia Works for Nepal Students",
      points: [
        "English-medium MD with European exposure — total 6-year spend roughly NPR 34–77 lakh depending on university.",
        "Kathmandu document attestation support and NPR forex planning.",
        "Growing Nepali peer network in Tbilisi for shared housing and FMGE prep.",
        "Counselling covers both Nepal Medical Council and Indian FMGE routes after graduation.",
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
      title: "Why Georgia Works for Bangladesh Students",
      points: [
        "DGME compliance documentation for return pathways — Taksheela verifies each intake.",
        "Total cost roughly BDT 28–65 lakh; halal kitchens available in Tbilisi and Batumi.",
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

export const georgiaAbroadAdmissionProcessContent: AbroadAdmissionProcessContent = {
  eyebrow: "Step by Step",
  titleLead: "MBBS in ",
  titleAccent: "— Admission Process",
  titleTrail: "",
  subtitle:
    "No donation, no separate entrance exam beyond NEET. Fully merit-based, fully guided by Taksheela from first consultation to first day of class..",
  steps: [
    {
      title: "Free Counselling Session",
      description:
        "1:1 session with a Taksheela Georgia specialist — reviews NEET eligibility, budget, Tbilisi vs Batumi preference, and NMC screening readiness.",
    },
    {
      title: "University Shortlist",
      description:
        "2–3 WHO-listed, NMC-aligned universities with fee transparency, hostel options, and FMGE trend notes for each campus.",
    },
    {
      title: "Document Preparation & Apostille",
      description:
        "10th/12th marksheets, NEET scorecard, passport, photos, medical certificate — compiled and apostilled for Indian students; Nepal/BD students receive equivalent guidance.",
    },
    {
      title: "University Application Submission",
      description:
        "We submit your application directly to the chosen university, handle all follow-ups, and confirm receipt. No paperwork slip-ups, no missed deadlines.",
    },
    {
      title: "English Interview (if required) & Admission Letter",
      description:
        "Some Georgian universities require a brief online English proficiency interview. Taksheela prepares you in advance. Upon success, you receive the official Admission Letter.",
    },
    {
      title: "First-Year Fee Payment & Rector's Order",
      description:
        "First-year tuition is paid to lock your seat. The university submits your file to Georgia's Ministry of Education. The Rector's Order — critical for your visa — is then issued.",
    },
    {
      title: "Student Visa Application",
      description:
        "Using the Rector's Order, you apply for a Georgian student visa at the Georgian Embassy in New Delhi (or regional centres for Nepal/Bangladesh). Taksheela prepares the complete visa package.",
    },
    {
      title: "Pre-Departure Briefing",
      description:
        "Comprehensive orientation: what to carry, forex setup, Georgia SIM cards, winter clothing checklist, hostel essentials, flight coordination, and emergency contacts.",
    },
    {
      title: "Airport Pickup & Post-Arrival Support",
      description:
        "Our Tbilisi-based representative receives you from the airport, assists with university registration, tuition payment confirmation, and Temporary Residence Permit (TRP) application.",
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

export const georgiaAbroadConsiderBeforeContent: AbroadConsiderBeforeContent = {
  eyebrow: "Honest assessment",
  title: "Things to Consider Before Choosing Georgia",
  subtitle:
    "Genuine advantages and real challenges — so you make a fully informed decision. Taksheela believes honesty builds better outcomes than sales pitches.",
  advantagesTitle: "Strong Advantages",
  advantages: [
    "Fees 3–5× lower than Indian private medical colleges, with zero capitation or donation requirements at any private Georgian university.",
    "No donation, no management quota — merit-based admission at all NMC-approved private Georgian universities.",
    "100% English medium. No separate language exam. No IELTS or TOEFL. Just your NEET qualifying score.",
    "European Bologna Process compliance — 360 ECTS credits, globally portable degree.",
    "13,000+ Indian students already enrolled — established peer communities, senior mentors, and Indian food in Tbilisi.",
    "Safety — Georgia ranks top 20 globally in safety indices. Tbilisi is student-friendly and well-policed.",
    "Public universities no longer accept international MBBS students — all seats at regulated private universities, reducing fraud risk.",
  ],
  challengesTitle: "Genuine Challenges",
  challenges: [
    "Georgian winters (December–February) in Tbilisi can dip to -2°C. Students from tropical climates need significant clothing investment and an adjustment period of 2–4 weeks.",
    "Basic Georgian language is strongly advisable for patient communication during clinical rotations — though all academic instruction is in English.",
    "No cadaver dissection at some universities — simulation-based anatomy training replaces this, but students should confirm the lab setup before enrolling.",
    "NExT preparation requires disciplined self-study alongside coursework. Georgia's clinical exposure is good, but NExT coaching must be pursued proactively.",
    "No Indian Embassy directly in Georgia (the Embassy of India in Tbilisi now operates directly — verify current status before departure).",
    "Currency exchange risk — fees are in USD; families should plan for exchange rate fluctuations across the 6-year program.",
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

export const georgiaAbroadCostBreakdownContent: AbroadCostBreakdownContent = {
  eyebrow: "Financial planning",
  titlePrimary: "MBBS in Georgia",
  titleAccent: "— Complete Cost Breakdown",
  subtitle:
    "For Nepal: multiply ₹ by ~1.6 for NPR. For Bangladesh: multiply ₹ by ~1.35 for BDT. All figures are approximate for 2025–26.",
  tuitionTableTitle: "University Tuition",
  tuitionColAnnual: "Annual Tuition",
  tuitionColSixYear: "6-Year Total",
  tuitionRows: [
    {
      university: "David Tvildiani Medical University (DTMU)",
      annualTuition: "~₹5–6L",
      sixYearTotal: "~₹30–38L",
    },
    {
      university: "Caucasus International University (CIU)",
      annualTuition: "~₹5–5.5L",
      sixYearTotal: "~₹32–36L",
    },
    {
      university: "University of Georgia",
      annualTuition: "~₹5–6L",
      sixYearTotal: "~₹30–38L",
    },
    {
      university: "East-West Teaching University",
      annualTuition: "~₹4–4.5L",
      sixYearTotal: "~₹25–30L",
    },
    {
      university: "Avicenna Batumi Medical University",
      annualTuition: "~₹3.5–4.5L",
      sixYearTotal: "~₹22–30L",
    },
  ],
  livingTableTitle: "Living Expense",
  livingColMonthly: "Monthly",
  livingColAnnual: "Annual",
  livingRows: [
    {
      item: "University Hostel / shared flat",
      monthly: "₹25,000–45,000",
      annual: "₹3–5.4L",
    },
    {
      item: "Food (Indian mess + groceries)",
      monthly: "₹8,000–12,000",
      annual: "₹96,000–1.44L",
    },
    {
      item: "Local transport & mobile",
      monthly: "₹2,000–4,000",
      annual: "₹24,000–48,000",
    },
    {
      item: "Insurance & misc.",
      monthly: "₹2,000–4,000 (avg.)",
      annual: "₹24,000–48,000",
    },
  ],
  summaryCardTitle: "Total 6-Year Cost (Mid-Tier University)",
  summaryLines: [
    { label: "Tuition (6 years)", value: "₹25–38L" },
    { label: "Hostel (6 years)", value: "₹18–32L" },
    { label: "Food & living", value: "₹6–9L" },
    { label: "Insurance & misc.", value: "₹1–2L" },
    { label: "One-time visa & travel", value: "₹80K–1.5L" },
  ],
  summaryTotalLabel: "TOTAL (Typical Georgia MBBS)",
  summaryTotalValue: "₹21–48 Lakhs",
  summaryFootnote:
    "Indian private medical college MBBS costs ₹50L – ₹1.5Cr — Georgia remains 2–4× more affordable for many families.",
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

export const georgiaAbroadIntakePeriodContent: AbroadIntakePeriodContent = {
  eyebrow: "Application timeline",
  titlePrimary: "MBBS in Georgia —",
  titleAccent: "Intake Periods",
  primaryCard: {
    icon: "🎯",
    title: "September Intake (Primary)",
    rows: [
      { label: "Application Opens", value: "April – June 2026" },
      { label: "Application Deadline", value: "July – August 2026" },
      { label: "Offer Letter", value: "July – August 2026" },
      { label: "Visa Application", value: "August – September 2026" },
      { label: "Classes Begin", value: "September / October 2026" },
      { label: "Availability", value: "All 10 Featured Universities" },
    ],
    footerNote:
      "Recommended for most fresh 12th pass students. Apply early for CIU, DTMU, and University of Georgia — seats fill fast.",
  },
  secondaryCard: {
    icon: "📅",
    title: "February / March Intake (Secondary)",
    rows: [
      { label: "Application Opens", value: "September – November" },
      { label: "Application Deadline", value: "December – January" },
      { label: "Offer Letter", value: "January" },
      { label: "Visa Application", value: "January – February" },
      { label: "Classes Begin", value: "February – March" },
      { label: "Availability", value: "Select Universities Only" },
    ],
    footerNote:
      "For students who missed autumn intake. Fewer partner universities. Confirm February availability with Taksheela before paying registration fees.",
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

export const georgiaAbroadTeachingMethodologyContent: AbroadTeachingMethodologyContent = {
  eyebrow: "How you learn",
  titlePrimary: "Teaching Methodology at",
  titleAccent: "Georgian Medical Universities",
  items: [
    {
      icon: "📖",
      title: "Lecture-Based Instruction",
      description:
        "Pre-clinical subjects — anatomy, biochemistry, physiology — delivered in English with small-group seminars and continuous assessment.",
    },
    {
      icon: "🔬",
      title: "Laboratory & Skills Labs",
      description:
        "Simulation manikins, microbiology labs, and procedural skills rooms from Year 1. Universities in Tbilisi invest heavily in modern equipment.",
    },
    {
      icon: "🏥",
      title: "Hospital Clinical Rotations",
      description:
        "From Year 3, rotations through affiliated public and private hospitals. Exposure to internal medicine, surgery, paediatrics, OBG, and emergency care.",
    },
    {
      icon: "🗣️",
      title: "Georgian Language Training",
      description:
        "Georgian is taught alongside English so students can take histories and consent patients during clinical years — essential for local licensing exams too.",
    },
    {
      icon: "💻",
      title: "Digital & E-Learning",
      description:
        "Learning management systems, recorded lectures, and question banks help students revise for Georgian state exams and FMGE parallel prep.",
    },
    {
      icon: "📝",
      title: "Assessment Formats",
      description:
        "Written exams, OSCE-style practicals, and oral vivas each semester. English remains the primary exam language for international cohorts.",
    },
  ],
};

// --- MBBS syllabus (MbbsSylabusAbroad) ---------------------------------------------

export type AbroadMbbsSyllabusYearItem = {
  yearLabel: string;
  title: string;
  description: string;
  /** Years 1–5: red badge; final year: dark blue */
  badgeTone: "primary" | "internship";
};

export type AbroadMbbsSyllabusContent = {
  eyebrow: string;
  titlePrimary: string;
  titleAccent: string;
  subtitle: string;
  years: AbroadMbbsSyllabusYearItem[];
};

export const georgiaAbroadMbbsSyllabusContent: AbroadMbbsSyllabusContent = {
  eyebrow: "Curriculum",
  titlePrimary: "MBBS Syllabus in Georgia",
  titleAccent: "— Year by Year",
  subtitle:
    "The 6-year MD Physician program — meeting NMC's minimum 54-month academic requirement plus 12-month internship.",
  years: [
    {
      yearLabel: "Year 1",
      title: "Pre-Clinical Sciences I",
      description:
        "Anatomy, Medical Biology, Chemistry, Physics, Introduction to Clinical Skills, Georgian Language I. Builds foundational medical science in English.",
      badgeTone: "primary",
    },
    {
      yearLabel: "Year 2",
      title: "Pre-Clinical Sciences II",
      description:
        "Histology, Biochemistry, Physiology, Microbiology basics, Research methods, Georgian Language II.",
      badgeTone: "primary",
    },
    {
      yearLabel: "Year 3",
      title: "Para-Clinical + Clinical Start",
      description:
        "Pathology, Pharmacology, Community Medicine intro, early bedside training. Clinical rotations begin with supervised patient contact.",
      badgeTone: "primary",
    },
    {
      yearLabel: "Year 4",
      title: "Clinical Sciences I",
      description:
        "Internal Medicine, General Surgery, OBG intro, Paediatrics intro, Neurology, Primary care blocks in affiliated hospitals.",
      badgeTone: "primary",
    },
    {
      yearLabel: "Year 5",
      title: "Clinical Sciences II + State Exam Prep",
      description:
        "Advanced surgery, emergency medicine, infectious diseases, psychiatry, national licensing coursework, Georgian medical jurisprudence.",
      badgeTone: "primary",
    },
    {
      yearLabel: "Year 6",
      title: "Mandatory Internship (12 Months)",
      description:
        "Full-time internship across medicine, surgery, OBG, paediatrics, and allied departments. Completion unlocks Georgian registration and FMGE/NExT eligibility steps for India.",
      badgeTone: "internship",
    },
  ],
};

// --- Complete comparison (CompleteComparissionAbroad) ------------------------------

export type AbroadComparisonTableRow = {
  parameter: string;
  russia: string;
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
  colRussia: string;
  colIndiaGovt: string;
  colIndiaPrivate: string;
  colBangladesh: string;
  colPhilippines: string;
  rows: AbroadComparisonTableRow[];
};

export const georgiaAbroadCompleteComparisonContent: AbroadCompleteComparisonContent = {
  eyebrow: "Side by side",
  titlePrimary: "MBBS in Georgia vs Other Countries",
  titleAccent: "— 2025–26 Complete Comparison",
  subtitle:
    "Data-driven comparisons for students asking 'Is Georgia better than India, Bangladesh, or Philippines for MBBS?' — structured for AI-assisted decision-making.",
  blockHeading: "Georgia · India · Bangladesh · Philippines — MBBS snapshot",
  colParameter: "Parameter",
  colRussia: "GE MBBS in Georgia",
  colIndiaGovt: "IN India (Govt. College)",
  colIndiaPrivate: "IN India (Private College)",
  colBangladesh: "🇧🇩 BD Bangladesh",
  colPhilippines: "🇵🇭 PH Philippines",
  rows: [
    {
      parameter: "Total 6-Year Cost",
      russia: "₹21–48 Lakhs (typical all-in)",
      indiaGovt: "₹5–15 Lakhs",
      indiaPrivate: "₹50L – ₹1.5 Crore",
      bangladesh: "₹15–30 Lakhs (typical all-in)",
      philippines: "₹20–40 Lakhs (typical all-in)",
    },
    {
      parameter: "For Nepal (NPR equiv.)",
      russia: "NPR 34–77 Lakh",
      indiaGovt: "NPR 8–24 Lakh",
      indiaPrivate: "NPR 80L – 2.4 Crore",
      bangladesh: "NPR 24–48 Lakh (approx.)",
      philippines: "NPR 32–64 Lakh (approx.)",
    },
    {
      parameter: "For Bangladesh (BDT equiv.)",
      russia: "BDT 28–65 Lakh",
      indiaGovt: "BDT 7–20 Lakh",
      indiaPrivate: "BDT 67L – 2 Crore",
      bangladesh: "Domestic fee bands; BDT 15–35 L common range",
      philippines: "PHP-based fees — BDT 20–45 L (equiv. estimate)",
    },
    {
      parameter: "Seat Availability",
      russia: "Moderate — 15+ active NMC-listed Georgian options",
      indiaGovt: "Very limited — 1.18L seats for 23L+ aspirants",
      indiaPrivate: "Limited, donation-dependent",
      bangladesh: "~8–10 NMC-listed institutions; widely available",
      philippines: "~8–10 recognised options; limited in some cities",
    },
    {
      parameter: "Admission Process",
      russia: "Merit-based, no donation, no capitation",
      indiaGovt: "Pure NEET merit, very competitive",
      indiaPrivate: "Opaque, capitation ₹20–80L common",
      bangladesh: "NEET + merit; transparent vs many private India routes",
      philippines: "NEET + academic screening; no donation route typical",
    },
    {
      parameter: "NEET Requirement",
      russia: "Qualifying score (any percentile)",
      indiaGovt: "Very high rank essential",
      indiaPrivate: "Moderate rank + large payment",
      bangladesh: "Qualifying score mandatory (NMC)",
      philippines: "Qualifying score mandatory (NMC)",
    },
    {
      parameter: "Program Duration",
      russia: "6 years (5 academic + 1 internship)",
      indiaGovt: "5.5 years (4.5 + 1 internship)",
      indiaPrivate: "5.5 years",
      bangladesh: "5 years + 1-year internship (typical pathway)",
      philippines: "4 yrs pre-med + 4 yrs MD + 1-yr internship (typical)",
    },
    {
      parameter: "Medium of Instruction",
      russia: "English (theory) + Georgian (clinical communication)",
      indiaGovt: "English + regional languages",
      indiaPrivate: "English",
      bangladesh: "Bengali + English (programme-dependent)",
      philippines: "English only (majority of programmes)",
    },
    {
      parameter: "Licensing Exam (India)",
      russia: "Georgian state exam → registration → FMGE/NExT (India)",
      indiaGovt: "NExT only",
      indiaPrivate: "NExT only",
      bangladesh: "FMGE / NExT after BMDC registration pathway",
      philippines: "FMGE / NExT; strong USMLE prep culture at many schools",
    },
    {
      parameter: "Global Recognition",
      russia: "WHO, NMC, NCEQE, WFME-aligned pathways",
      indiaGovt: "NMC — globally recognised",
      indiaPrivate: "NMC — varies by institution",
      bangladesh: "WHO, NMC, BMDC alignment for Indian students",
      philippines: "WHO, NMC; USMLE pathway widely advertised",
    },
    {
      parameter: "Clinical Exposure",
      russia: "Strong in Tbilisi teaching hospitals, Year 3+",
      indiaGovt: "Very High",
      indiaPrivate: "Moderate — varies by college",
      bangladesh: "Strong at approved teaching hospitals",
      philippines: "Varies — strong at established universities",
    },
    {
      parameter: "Donation / Capitation",
      russia: "None",
      indiaGovt: "None",
      indiaPrivate: "₹20–80L typically",
      bangladesh: "None",
      philippines: "None",
      isDonationRow: true,
    },
    {
      parameter: "Best For",
      russia: "Students wanting English MD + European lifestyle at mid-range cost",
      indiaGovt: "Top-rank NEET students with score for govt. seat",
      indiaPrivate: "Students willing to pay premium for India-based degree",
      bangladesh: "Students prioritising proximity, cultural fit & moderate budget",
      philippines: "Students wanting English-only campus & US-style / USMLE tilt",
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

export const georgiaAbroadOurStoriesContent: AbroadOurStoriesContent = {
  eyebrow: "Real experiences",
  titlePrimary: "Stories from Our Students",
  titleAccent: "in Georgia",
  stories: [
    {
      rating: 5,
      quote:
        "Tbilisi felt like a European city with affordable costs. My university’s English faculty cleared basics fast, and Taksheela helped me line up hostel and forex before departure.",
      name: "Ananya Krishnan",
      meta: "MBBS Year 2, CIU Tbilisi | Chennai, India",
      initial: "A",
    },
    {
      rating: 5,
      quote:
        "I picked DTMU for its hospital tie-ups. Clinical rotations are busy — you learn to communicate with patients in Georgian, but seniors share phrase cards and coaching notes for FMGE.",
      name: "Rahul Verma",
      meta: "MBBS Year 4, DTMU Tbilisi | Lucknow, India",
      initial: "R",
    },
    {
      rating: 5,
      quote:
        "No donation pressure — fees went straight to the university account. Indian mess near my hostel makes food easy. I’d still tell everyone to double-check NMC screening every intake.",
      name: "Priya Shah",
      meta: "MBBS Year 3, University of Georgia | Surat, India",
      initial: "P",
    },
    {
      rating: 5,
      quote:
        "Batumi’s weather suits me better than North India winters. Smaller batch, more attention in labs — and weekend trips to the mountains keep stress low.",
      name: "Imran Khan",
      meta: "MBBS Year 1, ABMU Batumi | Hyderabad, India",
      initial: "I",
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

export const georgiaAbroadAccommodationClimateContent: AbroadAccommodationClimateContent = {
  eyebrow: "Campus life",
  titlePrimary: "Accommodation &",
  titleAccent: "Climate",
  hostel: {
    title: "Hostel Accommodation",
    bullets: [
      "Georgian universities typically offer dormitories or verified private apartments within 20–30 minutes of campuses.",
      "Twin and triple rooms are common; utilities may be bundled or metered separately — read contracts carefully.",
      "Indian mess operators serve vegetarian and non-vegetarian thalis in Tbilisi; Batumi has coastal cuisine plus North Indian outlets.",
      "Wi‑Fi, security desks, and laundry are standard in most international student hostels.",
      "Summers are mild; winters are cold but not Russian-scale — still pack insulated jackets for January.",
      "Taksheela shares vetted landlords, roommate matching, and police-registration checklists after arrival.",
    ],
  },
  climate: {
    title: "Climate Conditions in University Cities",
    intro:
      "Georgia mixes subtropical Black Sea weather with continental mountain air — Tbilisi sees four distinct seasons, while Batumi stays humid and mild.",
    rows: [
      { city: "Tbilisi (most universities)", ranges: "Winter: 0 to -5°C | Summer: 24–32°C" },
      { city: "Batumi (ABMU)", ranges: "Winter: 5–10°C | Summer: 25–30°C (humid)" },
      { city: "Kutaisi", ranges: "Winter: 2–7°C | Summer: 22–30°C" },
      { city: "Rustavi", ranges: "Winter: -2 to 3°C | Summer: 25–33°C" },
    ],
    tipLabel: "Taksheela Tip",
    tipBody:
      "Carry light thermals for winter and breathable cotton for humid Batumi summers. Umbrellas help in spring — Tbilisi’s old town is hilly, so comfortable shoes matter more than heavy snow boots.",
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

export const georgiaAbroadKeyFactsContent: AbroadKeyFactsContent = {
  eyebrow: "Georgia at a glance",
  titlePrimary: "Key Facts for",
  titleAccent: "Medical Students",
  items: [
    { icon: "🌍", value: "69.7k km²", label: "COUNTRY SIZE" },
    { icon: "👥", value: "3.7M", label: "POPULATION" },
    { icon: "🏙️", value: "Tbilisi", label: "CAPITAL CITY" },
    { icon: "💱", value: "Lari (₾)", label: "CURRENCY" },
    { icon: "🏛️", value: "15+", label: "MEDICAL UNIS (SHORTLIST)" },
    { icon: "✈️", value: "~5–7 hrs", label: "DELHI TO TBILISI" },
    { icon: "🍽️", value: "Available", label: "INDIAN FOOD ACCESS" },
    { icon: "🤝", value: "Growing", label: "INDIA-GEORGIA TIES" },
    { icon: "🛡️", value: "Safe", label: "STUDENT CITIES" },
    { icon: "📡", value: "English", label: "MEDIUM AT FEATURED UNIS" },
  ],
};

// --- Scholarships (ScholarshipsAbroad) --------------------------------------------

export type AbroadScholarshipIconKey = "building" | "graduation" | "books" | "globe";

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

export const georgiaAbroadScholarshipsContent: AbroadScholarshipsContent = {
  eyebrow: "Financial aid",
  title: "Scholarships for MBBS in Georgia",
  subtitle:
    "Explore university merit awards, Georgian government programmes, and India-based funding — quotas change yearly; verify deadlines with each issuing body.",
  cards: [
    {
      iconKey: "building",
      title: "Georgian State & Institutional Grants",
      description:
        "Some universities advertise merit seats or early-bird tuition discounts for international MD students. Awards are usually processed through the admissions office.",
      bullets: [
        "Often linked to NEET score bands or Class 12 PCB percentage.",
        "May require maintaining a minimum GPA each semester.",
        "Rarely cover full six years — plan for partial self-funding.",
        "Confirm the offer letter states the discount in USD/EUR for visa filings.",
      ],
    },
    {
      iconKey: "graduation",
      title: "University Merit Scholarships",
      description:
        "Private universities such as CIU, DTMU, or University of Georgia occasionally run promotional waivers for high NEET performers.",
      bullets: [
        "Typically ₹50,000–₹1,50,000 off Year 1 tuition when eligible.",
        "May need timely acceptance fee payment to lock the waiver.",
        "Renewable waivers depend on academic performance — read the fine print.",
        "Taksheela tracks partner universities with live schemes each intake.",
      ],
    },
    {
      iconKey: "books",
      title: "Indian Government Scholarships",
      description:
        "Central / state schemes for overseas study may apply (category, domicile, income). Each programme has separate forms and timelines.",
      bullets: [
        "Keep NEET scorecard, admission letter, and fee schedule attested.",
        "Disbursement may trail Georgia’s fee deadlines — maintain forex buffer.",
        "TIE assists with documentation; final approval rests with the granting authority.",
      ],
    },
    {
      iconKey: "globe",
      title: "EU Mobility & Electives",
      description:
        "Georgia’s EU association agenda opens elective rotations or research collaborations in Europe — usually limited seats.",
      bullets: [
        "Typically for high-performing students after Year 3.",
        "Requires English proficiency and faculty recommendations.",
        "Useful for CV building, not a substitute for tuition funding.",
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
  nationalised: AbroadEducationLoanPairCard;
  privateNbfc: AbroadEducationLoanPairCard;
  support: AbroadEducationLoanSupportCard;
};

export const georgiaAbroadEducationLoanContent: AbroadEducationLoanContent = {
  eyebrow: "Financing your MBBS",
  title: "Education Loans for MBBS in Georgia",
  nationalised: {
    title: "Nationalised Banks (India)",
    description:
      "Major Indian public-sector banks offer IBA-aligned overseas education loan products for MBBS abroad, including Georgia, subject to eligibility, margin money, and collateral as per policy.",
    bullets: [
      "SBI Global Ed-Vantage — up to ₹1.5 crore (eligibility-based)",
      "Bank of Baroda Baroda Scholar scheme for study abroad",
      "Punjab National Bank Saraswati scheme for higher education overseas",
      "Interest: typically 8.5–11% p.a. (floating; bank-specific)",
      "Moratorium: study period plus commonly 6–12 months after course",
      "Collateral often required above ~₹7.5L — confirm slab with the branch",
    ],
  },
  privateNbfc: {
    title: "Private Banks & NBFCs",
    description:
      "Private lenders and NBFCs may offer quicker decisions and tailored products for overseas MBBS, including partial non-collateral limits for strong co-borrowers.",
    bullets: [
      "HDFC Credila — study-abroad education loans",
      "Avanse Financial Services — education loans for global programmes",
      "Auxilo Finserve — specialist options for MBBS abroad",
      "InCred Finance — flexible collateral and co-borrower structures",
      "Up to ₹40–60L without collateral possible (income & profile-based)",
      "Taksheela connects students with partner lenders where applicable — sanction subject to lender policy",
    ],
  },
  support: {
    title: "Taksheela Loan Documentation Support",
    description:
      "Our team helps you organise a lender-ready file: provisional admission / offer letter, fee structure and payment schedule, course duration letter, KYC and co-borrower proofs, and university contact for verification — so you can approach banks or NBFCs with fewer back-and-forth queries.",
  },
};

// --- Career opportunities after MBBS (TeachingMethodologyAbroad — same content shape) ---

/** Same shape as `AbroadTeachingMethodologyContent` so one component can render both sections. */
export const georgiaAbroadCareerOpportunitiesContent: AbroadTeachingMethodologyContent = {
  eyebrow: "After graduation",
  titlePrimary: "Career Opportunities After MBBS in",
  titleAccent: "Georgia",
  intro:
    "An NMC-compliant Georgian MD degree, combined with FMGE/NExT clearance, opens genuine pathways in India and globally.",
  items: [
    {
      icon: "🏥",
      title: "Practice in India",
      description:
        "Clear FMGE/NExT, register with State Medical Council, practice as a licensed physician anywhere in India.",
    },
    {
      icon: "🎓",
      title: "MD/MS Postgraduate",
      description:
        "Pursue MD/MS specialisation through NEET-PG (NExT Step 2) in India or residency abroad.",
    },
    {
      icon: "🌍",
      title: "Practice in UK (PLAB)",
      description:
        "Clear PLAB 1 and PLAB 2 for GMC registration and NHS employment in the United Kingdom.",
    },
    {
      icon: "US",
      title: "Practice in USA (USMLE)",
      description:
        "Pass USMLE Steps 1, 2CK, 2CS for US residency through ERAS/NRMP match system.",
    },
    {
      icon: "🦘",
      title: "Practice in Australia (AMC)",
      description:
        "Clear AMC CAT MCQ and clinical exam for Medical Board of Australia registration.",
    },
    {
      icon: "🔬",
      title: "Medical Research",
      description:
        "Georgia’s EU-oriented curriculum helps graduates pursue research fellowships in Europe or the Gulf.",
    },
    {
      icon: "🏢",
      title: "Healthcare Administration",
      description:
        "MBA/MHA alongside MBBS for hospital management, healthcare policy, and pharmaceutical management.",
    },
    {
      icon: "GE",
      title: "Practice in Georgia / EU",
      description:
        "Clear Georgian licensing exams and language requirements to work in local hospitals or apply for Blue Card pathways inside the EU.",
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

export const georgiaAbroadWhyChooseTaksheelaContent: AbroadWhyChooseTaksheelaContent = {
  eyebrow: "Your Georgia MBBS partner",
  titlePrimary: "Why Choose Taksheela for",
  titleAccent: "MBBS in Georgia?",
  subtitle:
    "Not just a consultancy — your end-to-end medical career partner from NEET score to Georgian registration and FMGE readiness.",
  items: [
    {
      icon: "🎯",
      title: "Georgia-Specialist Counsellors",
      description:
        "Advisors trained on Georgian medical universities, NMC screening updates, Tbilisi vs Batumi living costs, and realistic FMGE timelines — not generic abroad talk.",
    },
    {
      icon: "📊",
      title: "Data-Backed Shortlisting",
      description:
        "Fee bands, intake windows, hostel options, and FMGE-relevant signals compared transparently so you pick universities that fit your budget and goals.",
    },
    {
      icon: "📋",
      title: "Documentation & Compliance",
      description:
        "Structured checklists for admission letters, MEA apostille, translations, and embassy paperwork — fewer rejections and last-minute panic.",
    },
    {
      icon: "🛂",
      title: "Visa & Travel Hand-Holding",
      description:
        "Invitation letters, visa filing guidance, pre-departure briefings, and travel coordination so your first landing in Tbilisi feels planned, not chaotic.",
    },
    {
      icon: "🤝",
      title: "Post-Arrival Student Care",
      description:
        "Hostel coordination, local orientation, and peer connects — support that continues after fee payment, through clinical years and licensing prep.",
    },
    {
      icon: "🧩",
      title: "FMGE & Career Roadmap",
      description:
        "Early orientation to FMGE/NExT, study resources, and alumni touchpoints — so licensing and PG planning start before internship ends.",
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

export const georgiaAbroadRegulatoryFrameworkContent: AbroadRegulatoryFrameworkContent = {
  eyebrow: "Regulatory framework",
  titlePrimary: "NMC Gazette Rules &",
  titleAccent: "Georgia Compliance",
  subtitle:
    "These 6 NMC rules determine whether your Georgian MD degree can be used to practice medicine in India. Taksheela shortlists universities structured to satisfy all 6 when rules are met in letter and spirit.",
  rules: [
    {
      icon: "📅",
      title: "Rule 1 — Minimum 54 Months",
      description:
        "The programme must include at least 54 months (4.5 years) of full-time medical education, excluding the one-year internship. Georgia’s standard 6-year MD track meets this when delivered as five academic years plus internship.",
    },
    {
      icon: "🏥",
      title: "Rule 2 — 12-Month Internship",
      description:
        "A compulsory 12-month internship is required, completed at the same institution or its affiliated teaching hospitals. Verified Georgian programmes integrate internship blocks aligned with NMC expectations.",
    },
    {
      icon: "🌐",
      title: "Rule 3 — English Medium",
      description:
        "The entire course, including theory and clinical training, must be delivered in English for the full duration. Recommended universities offer English-medium instruction aligned with NMC’s abroad-MBBS guidelines.",
    },
    {
      icon: "🪪",
      title: "Rule 4 — Georgian Medical Licence",
      description:
        "Graduates must be eligible to obtain registration / licensing to practise in Georgia (state exams + language requirements). This local licence is part of proving a complete, recognised medical qualification before FMGE/NExT in India.",
    },
    {
      icon: "📋",
      title: "Rule 5 — NEET Mandatory",
      description:
        "A valid NEET-UG score is mandatory for Indian students seeking admission to foreign medical colleges, as per NMC norms. Admission and documentation must reflect NEET eligibility for the relevant academic year.",
    },
    {
      icon: "✅",
      title: "Rule 6 — WHO Listing",
      description:
        "The university must be listed in the World Directory of Medical Schools (WDOMS). Taksheela shortlists institutions that appear on WHO’s directory and satisfy NMC’s screening / FMGE pathway requirements.",
    },
  ],
  officialSourcesLabel: "Official Sources",
  officialLinks: [
    { label: "NMC India", href: "https://www.nmc.org.in" },
    { label: "WHO Directory", href: "https://www.wdoms.org" },
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

export type TopUniStatsRow = [TopUniStatCell, TopUniStatCell, TopUniStatCell, TopUniStatCell];

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

export type AbroadTopUniversitiesFilterId = "all" | "moscow" | "other" | "budget" | "top_fmge";

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

const geoImg = (file: string) => `${imageBaseUrl ?? ""}mbbsCollege/georgia/campaign/universities/clg_images/${file}`;

export const georgiaTopUniversityCards: AbroadTopUniversityCard[] = [
  {
    id: "geomedi",
    name: "Teaching University Geomedi",
    abbreviation: "Geomedi",
    established: "1998",
    locationLine: "Tbilisi",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 30,
    headerTags: [
      { label: "NMC Compliant", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "English MD", variant: "amber" },
    ],
    rankTag: "Established clinical school — Tbilisi",
    headerEmoji: "🏛️",
    imageSrc: geoImg("geomedi.jpg"),
    stats: [
      { label: "Annual fees", value: "~₹4.5–5L/yr" },
      { label: "6-year total", value: "~₹27–32L" },
      { label: "Duration", value: "6 Years" },
      { label: "Medium", value: "English" },
    ],
    fmge: {
      type: "text",
      text: "FMGE outcomes vary by cohort; strong Indian peer groups and coaching ecosystems in Tbilisi.",
    },
    description: [
      "Geomedi offers a structured English-medium MD pathway with modern simulation labs and growing Indian student representation.",
      "Tbilisi campus life is compact and walkable — easy for first-time international students to settle.",
    ],
    featureTags: ["Tbilisi", "English Program", "Clinical Rotations", "Indian Community"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "dtmu",
    name: "David Tvildiani Medical University",
    abbreviation: "DTMU",
    established: "1989",
    locationLine: "Tbilisi",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 34,
    headerTags: [
      { label: "NMC Compliant", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Strong FMGE", variant: "amber" },
    ],
    rankTag: "Research-led private medical university",
    subtitle: "DTMU – Tbilisi, Georgia",
    headerEmoji: "🔬",
    imageSrc: geoImg("dtmu.jpg"),
    stats: [
      { label: "Annual fees", value: "~₹5–6L/yr" },
      { label: "6-year total", value: "~₹30–38L" },
      { label: "Duration", value: "6 Years" },
      { label: "Location", value: "Tbilisi (Central)" },
    ],
    fmge: {
      type: "bar",
      barLabel: "~32–36% — Strong cohort signals (selected years)",
      barPercent: 72,
    },
    description: [
      "DTMU is widely marketed to Indian students for transparent admissions and English-medium delivery.",
      "Clinical exposure through affiliated hospitals in Tbilisi; seniors often organise FMGE study groups.",
    ],
    featureTags: ["English Medium", "Hospital Network", "Peer Support", "NMC Aligned"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "uog",
    name: "University of Georgia",
    abbreviation: "UoG",
    established: "2004",
    locationLine: "Tbilisi",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 31,
    headerTags: [
      { label: "NMC Compliant", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
    ],
    rankTag: "Large private university — multiple faculties",
    headerEmoji: "🎓",
    imageSrc: geoImg("uog.png"),
    stats: [
      { label: "Annual fees", value: "~₹5–6L/yr" },
      { label: "6-year total", value: "~₹30–38L" },
      { label: "Duration", value: "6 Years" },
      { label: "Campus", value: "Tbilisi" },
    ],
    fmge: {
      type: "text",
      text: "FMGE performance depends on self-discipline; verify latest NMC screening list before admission.",
    },
    description: [
      "University of Georgia runs an English-taught medical track with diverse international students.",
      "Good fit for students who want a private-university environment with modern amenities.",
    ],
    featureTags: ["International Mix", "English Track", "Tbilisi", "Hostel Options"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "abmu",
    name: "Avicenna Batumi Medical University",
    abbreviation: "ABMU",
    established: "2022",
    locationLine: "Batumi, Adjara",
    region: "other",
    budgetFriendly: true,
    fmgePercent: 28,
    headerTags: [
      { label: "NMC Compliant", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Budget + Sea City", variant: "rose" },
    ],
    rankTag: "Black Sea coast — milder climate",
    headerEmoji: "🌊",
    imageSrc: geoImg("abmu.jpeg"),
    stats: [
      { label: "Annual fees", value: "~₹3.5–4.5L/yr" },
      { label: "6-year total", value: "~₹22–30L" },
      { label: "Duration", value: "6 Years" },
      { label: "City", value: "Batumi" },
    ],
    fmge: {
      type: "text",
      text: "Newer institution — confirm internship mapping and NMC compliance with Taksheela before enrolling.",
    },
    description: [
      "Batumi offers a resort-city lifestyle with lower living costs than many EU capitals.",
      "Best for students prioritising climate and cost while meeting NMC programme structure.",
    ],
    featureTags: ["Batumi", "Affordable Living", "English Program", "Tourism Hub"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "isu",
    name: "Ilia State University",
    abbreviation: "ISU",
    established: "2006",
    locationLine: "Tbilisi",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 29,
    headerTags: [
      { label: "NMC Compliant", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
    ],
    rankTag: "Public research university — medical faculty",
    headerEmoji: "📚",
    imageSrc: geoImg("isu.jpg"),
    stats: [
      { label: "Annual fees", value: "~₹5–5.5L/yr" },
      { label: "6-year total", value: "~₹32–36L" },
      { label: "Duration", value: "6 Years" },
      { label: "Medium", value: "English" },
    ],
    fmge: {
      type: "text",
      text: "FMGE prep benefits from ISU’s academic support services and Tbilisi coaching networks.",
    },
    description: [
      "ISU combines broader university resources with a dedicated health sciences pathway.",
      "Strong student services and city connectivity make Tbilisi a practical base for six years.",
    ],
    featureTags: ["Research Culture", "Student Services", "Tbilisi", "NMC Pathway"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "gnu_seu",
    name: "Georgian National University SEU",
    abbreviation: "SEU",
    established: "2001",
    locationLine: "Tbilisi",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 30,
    headerTags: [
      { label: "NMC Compliant", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
    ],
    rankTag: "Private national university — central Tbilisi",
    headerEmoji: "🏫",
    imageSrc: geoImg("gnuseu.jpg"),
    stats: [
      { label: "Annual fees", value: "~₹4.5–5L/yr" },
      { label: "6-year total", value: "~₹28–33L" },
      { label: "Duration", value: "6 Years" },
      { label: "Medium", value: "English" },
    ],
    fmge: {
      type: "text",
      text: "Mid-tier FMGE signals; selection should pair with disciplined licensing preparation from Year 1.",
    },
    description: [
      "SEU offers English-medium medicine with a focus on employability skills and clinical blocks.",
      "Popular with South Asian students for hostel support and city-centre access.",
    ],
    featureTags: ["Central Tbilisi", "English MD", "Hostel", "Peer Network"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "ewtu",
    name: "East-West Teaching University",
    abbreviation: "EWTU",
    established: "1992",
    locationLine: "Tbilisi",
    region: "moscow",
    budgetFriendly: true,
    fmgePercent: 28,
    headerTags: [
      { label: "NMC Compliant", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Value Fees", variant: "rose" },
    ],
    rankTag: "Affordable English track",
    headerEmoji: "⚖️",
    imageSrc: geoImg("ewtu.webp"),
    stats: [
      { label: "Annual fees", value: "~₹4–4.5L/yr" },
      { label: "6-year total", value: "~₹25–30L" },
      { label: "Duration", value: "6 Years" },
      { label: "Medium", value: "English" },
    ],
    fmge: {
      type: "text",
      text: "Budget-friendly option — pair early FMGE mentoring with consistent academics.",
    },
    description: [
      "EWTU balances cost and English delivery for international MBBS aspirants.",
      "Smaller cohorts can mean more personalised attention in pre-clinical years.",
    ],
    featureTags: ["Value", "English", "Tbilisi", "International"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "ciu",
    name: "Caucasus International University",
    abbreviation: "CIU",
    established: "1995",
    locationLine: "Tbilisi",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 33,
    headerTags: [
      { label: "NMC Compliant", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "FMGE Focus", variant: "amber" },
    ],
    rankTag: "Large Indian cohort — Tbilisi",
    subtitle: "CIU – Tbilisi, Georgia",
    headerEmoji: "🌍",
    imageSrc: geoImg("ciu.jpg"),
    stats: [
      { label: "Annual fees", value: "~₹5–5.5L/yr" },
      { label: "6-year total", value: "~₹32–36L" },
      { label: "Duration", value: "6 Years" },
      { label: "Medium", value: "English" },
    ],
    fmge: {
      type: "bar",
      barLabel: "~30–34% — Popular with Indian applicants",
      barPercent: 68,
    },
    description: [
      "CIU is among the most discussed Georgian universities in the Indian market — verify latest NMC listing each intake.",
      "Strong mess and peer ecosystem; clinical years require Georgian language basics for patient communication.",
    ],
    featureTags: ["High Demand", "Indian Mess", "Clinical Hospitals", "FMGE Prep"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "eeu",
    name: "East European University",
    abbreviation: "EEU",
    established: "1980",
    locationLine: "Tbilisi",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 29,
    headerTags: [
      { label: "NMC Compliant", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
    ],
    rankTag: "Modern campus — English medicine",
    headerEmoji: "🩺",
    imageSrc: geoImg("eeu.png"),
    stats: [
      { label: "Annual fees", value: "~₹4.5–5L/yr" },
      { label: "6-year total", value: "~₹28–33L" },
      { label: "Duration", value: "6 Years" },
      { label: "Recognition", value: "NMC · WHO" },
    ],
    fmge: {
      type: "text",
      text: "Outcomes linked to individual preparation — Taksheela maps coaching from semester one.",
    },
    description: [
      "EEU emphasises digital learning tools alongside bedside teaching in Tbilisi hospitals.",
      "Suitable for students seeking a contemporary campus experience in Georgia’s capital.",
    ],
    featureTags: ["Modern Campus", "English", "Tbilisi", "Clinical Skills"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "alte",
    name: "Alte University",
    abbreviation: "Alte",
    established: "2002",
    locationLine: "Tbilisi",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 28,
    headerTags: [
      { label: "NMC Compliant", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
    ],
    rankTag: "Private university — skills-focused medicine",
    headerEmoji: "✨",
    imageSrc: geoImg("alte.webp"),
    stats: [
      { label: "Annual fees", value: "~₹4.5–5L/yr" },
      { label: "6-year total", value: "~₹28–33L" },
      { label: "Duration", value: "6 Years" },
      { label: "City", value: "Tbilisi" },
    ],
    fmge: {
      type: "text",
      text: "FMGE data varies — combine university shortlist with structured licensing roadmap.",
    },
    description: [
      "Alte promotes small-group learning and early patient-contact exposure in line with Georgian accreditation norms.",
      "Good option when matched to budget and career goals after documentary verification.",
    ],
    featureTags: ["Tbilisi", "English MD", "Student Support", "NMC Screening"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
];

export const georgiaAbroadTopUniversitiesContent: AbroadTopUniversitiesContent = {
  eyebrow: "WHERE TO STUDY",
  titlePrimary: "Top 10 Medical Universities in Georgia",
  titleAccent: "for Indian Students 2026-27",
  intro:
    "NMC-aligned, WHO-listed Georgian institutions with transparent fee bands and city fit — filter by Tbilisi, Batumi, budget, or FMGE focus to shortlist faster.",
  cardWatermarkCode: "GE",
  filters: [
    { id: "all", label: "All Universities" },
    { id: "moscow", label: "Tbilisi" },
    { id: "other", label: "Other Cities" },
    { id: "budget", label: "Budget-Friendly" },
    { id: "top_fmge", label: "Top FMGE Rate" },
  ],
  topFmgeFilterIds: ["dtmu", "ciu"],
  universities: georgiaTopUniversityCards,
  quickComparison: {
    title: "Quick Comparison — All 10 Universities",
    disclaimer:
      "Fees are approximate for 2025–26 based on publicly available data. Exact figures vary by year and exchange rate. Verified breakdown provided during free counselling.",
    rows: [
      {
        university: "Geomedi",
        city: "Tbilisi",
        established: "1998",
        annualFees: "~₹4.7L/yr",
        fmgeRate: "~30%",
        bestFor: "Clinical foundation + city life",
      },
      {
        university: "DTMU",
        city: "Tbilisi",
        established: "1989",
        annualFees: "~₹5.5L/yr",
        fmgeRate: "~32–36%",
        fmgeHighlight: true,
        bestFor: "FMGE signals + research",
      },
      {
        university: "University of Georgia",
        city: "Tbilisi",
        established: "2004",
        annualFees: "~₹5.5L/yr",
        fmgeRate: "Moderate",
        bestFor: "Private campus + diversity",
      },
      {
        university: "ABMU",
        city: "Batumi",
        established: "2022",
        annualFees: "~₹4.0L/yr",
        fmgeRate: "New cohort",
        bestFor: "Sea city + budget",
      },
      {
        university: "Ilia State Univ.",
        city: "Tbilisi",
        established: "2006",
        annualFees: "~₹5.2L/yr",
        fmgeRate: "Moderate",
        bestFor: "Public uni ecosystem",
      },
      {
        university: "SEU",
        city: "Tbilisi",
        established: "2001",
        annualFees: "~₹4.8L/yr",
        fmgeRate: "Moderate",
        bestFor: "Central Tbilisi",
      },
      {
        university: "EWTU",
        city: "Tbilisi",
        established: "1992",
        annualFees: "~₹4.2L/yr",
        fmgeRate: "Good value",
        bestFor: "Affordable fees",
      },
      {
        university: "CIU",
        city: "Tbilisi",
        established: "1995",
        annualFees: "~₹5.3L/yr",
        fmgeRate: "~30–34%",
        fmgeHighlight: true,
        bestFor: "Indian peer network",
      },
      {
        university: "EEU",
        city: "Tbilisi",
        established: "1980",
        annualFees: "~₹4.8L/yr",
        fmgeRate: "Moderate",
        bestFor: "Modern campus",
      },
      {
        university: "Alte",
        city: "Tbilisi",
        established: "2002",
        annualFees: "~₹4.8L/yr",
        fmgeRate: "Moderate",
        bestFor: "Skills-focused delivery",
      },
    ],
  },
};

// --- FAQ — Georgia MBBS (FAQPage schema / AI-optimised) ----------------------------

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

export const georgiaAbroadFaqPageContent: AbroadFaqPageContent = {
  eyebrow: "Frequently asked questions",
  title: "MBBS in Georgia 2026-27 — FAQs for India, Nepal and Bangladesh Students",
  subtitle:
    "Structured for FAQPage rich results and natural-language queries — including INR, NPR, and BDT-specific cost questions.",
  items: [
    {
      question: "Which are the best NMC-listed universities in Georgia for Indian students in 2026?",
      answer:
        "Taksheela’s featured 10 include: (1) Teaching University Geomedi, (2) David Tvildiani Medical University (DTMU), (3) University of Georgia, (4) Avicenna Batumi Medical University, (5) Ilia State University, (6) Georgian National University SEU, (7) East-West Teaching University, (8) Caucasus International University (CIU), (9) East European University, (10) Alte University. Always verify the latest NMC screening list before fee payment.",
    },
    {
      question: "Is MBBS in Georgia better than Bangladesh for Indian students?",
      answer:
        "Georgia offers English-medium MD in a European setting with total costs often ₹21–48 lakhs; Bangladesh offers proximity and cultural familiarity with strong FMGE outcomes at select colleges. The right choice depends on NEET score, budget, climate preference, and FMGE preparation plan — Taksheela compares both destinations side-by-side.",
    },
    {
      question:
        "What is the total cost of MBBS in Georgia in Indian Rupees, Nepali Rupees (NPR), and Bangladeshi Taka (BDT)?",
      answer:
        "Total 6-year all-inclusive cost: Indian Rupees: approximately ₹21–48 lakhs. Nepal NPR: roughly NPR 34–77 lakh (₹ × ~1.6). Bangladesh BDT: roughly BDT 28–65 lakh (₹ × ~1.35). Batumi and budget-friendly universities sit at the lower end; premium Tbilisi campuses at the higher end.",
    },
    {
      question: "What FMGE pass rate can I expect after MBBS in Georgia?",
      answer:
        "FMGE outcomes vary by university and cohort — not as high as top Bangladesh colleges for every student. Success depends on disciplined preparation, coaching, and clinical exposure. Taksheela shares historical trend data during counselling and never promises guaranteed pass rates.",
    },
    {
      question: "Is MBBS in Georgia valid in India? What are the requirements to practice in India?",
      answer:
        "Yes, when the university meets NMC rules: (1) Valid NEET-UG qualifying score before admission; (2) 54 months academic training + 12-month internship; (3) English-medium delivery; (4) Registration/licence in Georgia; (5) WHO-listed institution; (6) Clear FMGE/NExT in India. Taksheela verifies each criterion before you pay tuition.",
    },
    {
      question: "Is NEET mandatory for MBBS in Georgia?",
      answer:
        "For Indian students who intend to practise in India, NEET-UG qualification is mandatory (NMC regulations). Georgian universities may admit students without NEET for academic study, but you cannot register in India without a valid NEET score issued in the relevant admission window.",
    },
    {
      question: "Do I need to learn Georgian language?",
      answer:
        "The MD programme is taught in English, but Georgian is introduced for patient communication and for national licensing exams. Expect conversational Georgian by clinical years — universities include language classes in the curriculum.",
    },
    {
      question: "Can students from Nepal and Bangladesh study MBBS in Georgia through Taksheela?",
      answer:
        "Yes. Nepal: NEET or national eligibility pathway; NPR budgeting; Kathmandu documentation support. Bangladesh: DGME rules apply for return pathways; BDT budgeting; Dhaka visa support. Halal food is available in Tbilisi and Batumi through certified kitchens.",
    },
    {
      question: "What is the Georgian medical licensing exam and why does it matter?",
      answer:
        "Georgian medical graduates must clear national licensing requirements (including language skills) to obtain a local medical licence. That licence is part of proving your primary qualification before you sit for FMGE/NExT in India.",
    },
    {
      question: "What is the total MBBS fee in Georgia in Nepali Rupees (NPR) for 2026-27?",
      answer:
        "Expect roughly NPR 34–77 lakh for the full programme depending on university and lifestyle. Taksheela provides a personalised NPR worksheet during counselling.",
    },
    {
      question: "What is the total MBBS fee in Georgia in Bangladeshi Taka (BDT) for 2026-27?",
      answer:
        "Expect roughly BDT 28–65 lakh all-in for six years, depending on university tier and city. Taksheela assists Bangladeshi families with DGME documentation and forex planning.",
    },
    {
      question: "When should I apply for MBBS in Georgia for September 2026 intake?",
      answer:
        "Start applications by April–June 2026 for September intake. You need time for offer letters, MEA apostille on academic documents, student visa, and housing. Taksheela recommends starting at least 12 weeks before classes begin.",
    },
  ],
};

export const georgiaAbroadQuickFactsContent: AbroadQuickFactItem[] = [
  {
    icon: "🎓",
    label: "Degree Awarded",
    value: "MD Physician (= MBBS India)",
    mLabel: "Degree",
    mValue: "MD = MBBS India",
  },
  {
    icon: "⏱️",
    label: "Course Duration",
    value: "6 Years (5 academic + 1 internship)",
    mLabel: "Duration",
    mValue: "6 yrs (5+1 intern)",
  },
  {
    icon: "💰",
    label: "Annual Tuition",
    value: "₹3.5L – ₹7L / year",
    mLabel: "Tuition / yr",
    mValue: "₹3.5L–₹7L",
  },
  {
    icon: "🏠",
    label: "Cost of Living",
    value: "~₹30,000–40,000 / month",
    mLabel: "Living / mo",
    mValue: "₹30–40K/mo",
  },
  {
    icon: "🗓️",
    label: "Intakes",
    value: "Sep–Oct (primary) · Feb–Mar (limited)",
    mLabel: "Intakes",
    mValue: "Sep–Oct · Feb–Mar",
  },
  {
    icon: "🧾",
    label: "Basic Eligibility",
    value: "50% PCB + NEET qualified",
    mLabel: "Eligibility",
    mValue: "50% PCB + NEET",
  },
  {
    icon: "🌐",
    label: "Medium of Instruction",
    value: "100% English",
    mLabel: "Medium",
    mValue: "100% English",
  },
  {
    icon: "✅",
    label: "Recognised By",
    value: "WHO · NMC · WFME · NCEQE",
    mLabel: "Recognised",
    mValue: "WHO · NMC · WFME…",
  },
  {
    icon: "👩‍🎓",
    label: "Indian Students (2024-25)",
    value: "13,000+ enrolled",
    mLabel: "Indians 24–25",
    mValue: "13,000+",
  },
  {
    icon: "🚫",
    label: "Donation / Capitation",
    value: "Zero. None. Ever.",
    mLabel: "Donation",
    mValue: "Zero",
  },
  {
    icon: "🏛️",
    label: "Governing Body",
    value: "NCEQE, Ministry of Education, Georgia",
    mLabel: "Governing body",
    mValue: "NCEQE · MoE",
  },
  {
    icon: "📝",
    label: "IELTS / TOEFL",
    value: "Not required for admission",
    mLabel: "IELTS/TOEFL",
    mValue: "Not required",
  },
];

const georgiaAbroadWhyChooseMbbsReasons: AbroadWhyChooseMbbsItem[] = [
  {
    icon: "💸",
    title: "3–5× Cheaper Than Indian Private MBBS",
    description:
      "Total 6-year investment in Georgia: NPR 34–77 lakh. Private MBBS in India: NPR 80L–1.2Cr (plus capitation). Same NMC-recognised degree. Zero donation demanded in Georgia.",
  },
  {
    icon: "💰",
    title: "NMC-Approved — Practice in India After NExT",
    description:
      "All Taksheela-recommended Georgian universities are on the NMC's current approved list. Graduates can appear for NExT and return to practise in India.",
  },
  {
    icon: "🌐",
    title: "100% English — No Language Exam Required",
    description:
      "Unlike Russia, China, or Kyrgyzstan, Georgian universities teach the entire MD program in English. No IELTS, no TOEFL — just your NEET score and Class 12 marks",
  },
  {
    icon: "🎓",
    title: "European Bologna Framework",
    description:
      "Georgia follows the Bologna Process (360 ECTS credits), making Georgian MD degrees recognised in Europe. Clinical training integrates PBL, CBL, and simulation from Year 1.",
  },
  {
    icon: "🚫",
    title: "No Capitation, No Seat Cap",
    description:
      "Private Georgian universities admit students on merit, with no donation demands and no artificial seat caps — unlike the highly competitive, quota-driven Indian system.",
  },
  {
    icon: "🏥",
    title: "Early Hospital Exposure from Year 3",
    description:
      "University-affiliated multi-speciality hospitals provide supervised rotations from Year 3 across Surgery, Internal Medicine, OBG, Paediatrics, and Emergency Medicine.",
  },
  {
    icon: "🌍",
    title: "Global Mobility",
    description:
      "WHO + WFME recognition opens paths to NExT (India), PLAB (UK), USMLE (USA), DHA/HAAD (Gulf), and German Approbation — from a single Georgian degree.",
  },
  {
    icon: "🛡️",
    title: "Safe, Welcoming Country",
    description:
      "Tbilisi blends European architecture with warm hospitality; Batumi offers sea-breeze climate. Both cities rank high on student safety indices.",
  },
  {
    icon: "🇳🇵🇧🇩",
    title: "Ideal for Nepal & Bangladesh Students Too",
    description:
      "Georgian universities welcome students from Nepal (NEB certificate) and Bangladesh (HSC certificate). Growing Nepali and Bangladeshi communities in Tbilisi make adjustment easy.",
  },
  {
    icon: "✈️",
    title: "Easy Visa, Direct Flights",
    description:
      "Streamlined student visa process via the Georgian Embassy in New Delhi. Direct flights available from Delhi/Mumbai via Istanbul, Dubai, and Doha (7–10 hours with 1 stop).",
  },
];

const georgiaAbroadWhyChooseMbbsSection: AbroadWhyChooseMbbsSectionContent = {
  eyebrow: "Why English MD in {country}?",
  titleLead: "10 Evidence-Backed Reasons to Study MBBS in ",
  titleTrail: "?",
  subtitle:
    "Not marketing. Data-backed reasons why 13,000+ Indian students have already made this choice — and why students from Nepal and Bangladesh are following fast.",
};

export const georgiaAbroadWhyChooseMbbsContent: AbroadWhyChooseMbbsContent = {
  section: georgiaAbroadWhyChooseMbbsSection,
  reasons: georgiaAbroadWhyChooseMbbsReasons,
};

