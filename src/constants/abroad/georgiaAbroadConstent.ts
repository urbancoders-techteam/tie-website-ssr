/**
 * Georgia MBBS abroad — single source of truth for `/mbbs/abroad/georgia` UI copy and structured data.
 * Types are shared with Russia from this module’s historical structure; extend exports below as needed.
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
  titleAccent: "— Complete Fee Structure & Cost of Living",
  subtitle:
    "For Nepal: multiply ₹ by ~1.6 for NPR. For Bangladesh: multiply ₹ by ~1.35 for BDT. All figures are approximate for 2025–26.",
  tuitionTableTitle: "University tuition (indicative)",
  tuitionColAnnual: "Annual Tuition",
  tuitionColSixYear: "6-Year Total",
  tuitionRows: [
    {
      university: "Geomedi Medical University",
      annualTuition: "~₹4.8L",
      sixYearTotal: "~₹28–33L",
    },
    {
      university: "David Tvildiani Medical University (DTMU)",
      annualTuition: "~₹5.3L",
      sixYearTotal: "~₹31–36L",
    },
    {
      university: "University of Georgia",
      annualTuition: "~₹5.3L",
      sixYearTotal: "~₹31–36L",
    },
    {
      university: "Georgian American University (GAU)",
      annualTuition: "~₹4.8L",
      sixYearTotal: "~₹28–33L",
    },
    {
      university: "Caucasus International University (CIU)",
      annualTuition: "~₹1.9L",
      sixYearTotal: "~₹11–13L",
    },
  ],
  livingTableTitle: "Annual expense breakdown (non-tuition)",
  livingColMonthly: "Monthly (est.)",
  livingColAnnual: "Annual",
  livingRows: [
    {
      item: "University hostel",
      monthly: "~₹10,800–14,600",
      annual: "₹1.3L–1.75L",
    },
    {
      item: "Food / mess",
      monthly: "~₹7,300–10,800",
      annual: "₹88K–1.3L",
    },
    {
      item: "Health insurance",
      monthly: "~₹750–1,100",
      annual: "₹9K–13K",
    },
    {
      item: "Visa / TRP extension",
      monthly: "~₹750–1,500",
      annual: "₹9K–17.5K",
    },
    {
      item: "Personal expenses",
      monthly: "~₹5,800–8,750",
      annual: "₹70K–1.05L",
    },
  ],
  summaryCardTitle: "Total 6-year investment",
  summaryLines: [
    {
      label: "Typical annual all-in (tuition + living heads)",
      value: "~₹6.5L–11.5L",
    },
    {
      label: "Nepal (NPR, using ₹ × ~1.6)",
      value: "~NPR 62L–112L total (indicative)",
    },
    {
      label: "Bangladesh (BDT, using ₹ × ~1.35)",
      value: "~BDT 53L–95L total (indicative)",
    },
    {
      label: "vs Indian private MBBS (incl. capitation & donation)",
      value: "often ₹80L–₹1.2 Cr",
    },
    {
      label: "Georgia advantage",
      value: "zero capitation · zero donation",
    },
  ],
  summaryTotalLabel: "TOTAL 6-YEAR INVESTMENT (EST.)",
  summaryTotalValue: "₹39–70L",
  summaryFootnote:
    "Includes six years of tuition, hostel, food, insurance, visa extensions, personal expenses, and one-time setup. A comparable NMC-recognised pathway is often roughly 2–3× more affordable than leading Indian private colleges at these ranges. * One-time: flight ₹40–60K, visa processing, apostille, initial setup ~₹50K. Exchange rates are indicative for 2025.",
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
  titlePrimary: "MBBS Intakes in Georgia",
  titleAccent: "2025–26",
  primaryCard: {
    icon: "⭐",
    title: "Primary intake — recommended",
    rows: [
      { label: "Intake period", value: "September / October 2025" },
      { label: "Application opens", value: "March – May 2025" },
      { label: "Application deadline", value: "June – July 2025" },
      { label: "Admission letters issued", value: "July – August 2025" },
      { label: "Visa processing", value: "August 2025" },
      { label: "Classes begin", value: "September – October 2025" },
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
      { label: "Application opens", value: "November – December 2025" },
      { label: "Application deadline", value: "December 2025" },
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

export const georgiaAbroadTeachingMethodologyContent: AbroadTeachingMethodologyContent = {
  eyebrow: "How you learn",
  titlePrimary: "Teaching Methodology &",
  titleAccent: "Practical Training",
  intro:
    "Georgian medical universities follow NCEQE-mandated academic standards aligned with the European Bologna Process. All Taksheela-recommended universities meet NMC’s curriculum requirements under Schedule 1.",
  items: [
    {
      icon: "🧬",
      title: "Years 1–2 — Pre-clinical",
      description:
        "Core biomedical sciences — Anatomy, Physiology, Biochemistry, Biology & Genetics.",
    },
    {
      icon: "🧪",
      title: "Years 3–4 — Para-clinical",
      description:
        "Bridge to clinical work — Pathology, Pharmacology, Microbiology, Immunology, Radiology.",
    },
    {
      icon: "🏥",
      title: "Years 5–6 — Clinical",
      description:
        "Full hospital rotations — Surgery, Internal Medicine, OBG, Paediatrics, Psychiatry & more.",
    },
    {
      icon: "📖",
      title: "Bologna ECTS credits",
      description:
        "360 ECTS credits aligned with European Higher Education Area standards. Credit transfers to European institutions for PG are supported.",
    },
    {
      icon: "🔬",
      title: "Problem-based learning (PBL)",
      description:
        "Real clinical case studies from Year 1 develop diagnostic reasoning, critical thinking, and evidence-based decision making.",
    },
    {
      icon: "🩺",
      title: "High-fidelity simulation labs",
      description:
        "Anatomical mannequins, patient simulators, laparoscopic trainers, and virtual anatomy tables for risk-free procedural practice.",
    },
    {
      icon: "⚕️",
      title: "Supervised clinical rotations",
      description:
        "From Year 3, rotations through departments including Surgery, Internal Medicine, OBG, Paediatrics, Emergency Medicine, and Neurology.",
    },
    {
      icon: "📝",
      title: "Assessment formats",
      description:
        "Written exams, oral viva sessions, OSCE formats, and practical competency evaluations — all conducted in English.",
    },
    {
      icon: "🌐",
      title: "Digital learning resources",
      description:
        "Leading universities offer digital libraries, virtual anatomy tables, and online patient simulation systems to supplement in-person instruction.",
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

export const georgiaAbroadMbbsSyllabusContent: AbroadMbbsSyllabusContent = {
  eyebrow: "Curriculum",
  titlePrimary: "MBBS Syllabus in Georgia",
  titleAccent: "— Year by Year",
  subtitle:
    "The 6-year MD Physician program meets NMC's minimum 54-month academic requirement plus 12-month mandatory internship. Covers all 19+ compulsory subjects under NMC Schedule 1.",
  footerNote:
    "All clinical rotations are supervised by licensed practitioners at university-affiliated multi-speciality teaching hospitals. Completion qualifies graduates for NExT (India).",
  years: [
    {
      yearLabel: "Year 1",
      title: "Pre-Clinical Sciences I",
      description: "",
      subjectTags: [
        "Human Anatomy",
        "Medical Biochemistry",
        "Medical Biology & Genetics",
        "Medical Physics",
        "Medical Chemistry",
        "Introduction to Medical Psychology",
        "Medical Latin",
        "Physical Education",
      ],
      badgeTone: "primary",
    },
    {
      yearLabel: "Year 2",
      title: "Pre-Clinical Sciences II",
      description: "",
      subjectTags: [
        "Histology & Embryology",
        "Normal Physiology",
        "Biophysics",
        "Microbiology (Introduction)",
        "Sociology & Medical Ethics",
        "Georgian Language (Basic)",
        "Medical Informatics",
      ],
      badgeTone: "primary",
    },
    {
      yearLabel: "Year 3",
      title: "Para-Clinical Sciences",
      description: "",
      subjectTags: [
        "General Pathology",
        "Pathophysiology",
        "Pharmacology I",
        "Medical Microbiology (Full)",
        "Immunology",
        "Biostatistics",
        "Introductory Clinical Medicine",
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
        "Clinical Diagnostics",
        "Ophthalmology",
        "ENT",
      ],
      badgeTone: "primary",
    },
    {
      yearLabel: "Year 5",
      title: "Clinical Core",
      description: "",
      subjectTags: [
        "Internal Medicine",
        "General Surgery",
        "Obstetrics & Gynaecology",
        "Paediatrics",
        "Infectious Disease",
        "Psychiatry & Medical Psychology",
        "Neurology",
        "Dermatology & Venereology",
        "Oncology",
      ],
      badgeTone: "primary",
    },
    {
      yearLabel: "Year 6",
      title: "Mandatory Clinical Internship (12 Months)",
      description: "",
      subjectTags: [
        "General Medicine (Rotations)",
        "General Surgery (Rotations)",
        "Obstetrics & Gynaecology",
        "Paediatrics",
        "Emergency Medicine",
        "Family Medicine",
        "Community Health",
        "Forensic Medicine",
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

export const georgiaAbroadCompleteComparisonContent: AbroadCompleteComparisonContent = {
  eyebrow: "Side by side",
  titlePrimary: "MBBS in Georgia vs MBBS in India",
  titleAccent: "— 2025–26 Comparison",
  subtitle:
    "Quick contrast on entrance, cost, instruction, and licensing — Georgia column reflects the 2025–26 programme snapshot; India & regional columns for wider context.",
  blockHeading: "Georgia · India — key parameters · Bangladesh & Philippines (reference)",
  colParameter: "Parameter",
  colFeatured: "🇬🇪 MBBS in Georgia",
  colIndiaGovt: "IN India (Govt. College)",
  colIndiaPrivate: "IN India (Private College)",
  colBangladesh: "🇧🇩 BD Bangladesh",
  colPhilippines: "🇵🇭 PH Philippines",
  rows: [
    {
      parameter: "Entrance Exam",
      featured: "NEET qualifying score only (no separate exam). Accessible.",
      indiaGovt: "NEET — extreme rank competition for limited seats",
      indiaPrivate: "NEET + heavy capitation / management quota route",
      bangladesh: "NEET qualifying score (NMC) + institutional screening",
      philippines: "NEET qualifying score + school-specific tests / interview",
    },
    {
      parameter: "Competition Level",
      featured: "Low — merit-based, no quota wars",
      indiaGovt: "Very high — lakhs of aspirants per seat",
      indiaPrivate: "High — seat often tied to fee / donation capacity",
      bangladesh: "Moderate — merit + NEET pathway for Indians",
      philippines: "Moderate — programme & city dependent",
    },
    {
      parameter: "Total 6-Year Cost",
      featured: "₹39–70L (all-in)",
      indiaGovt: "₹5–15 Lakhs",
      indiaPrivate: "₹50L – ₹1.5 Crore",
      bangladesh: "₹15–30 Lakhs (typical all-in)",
      philippines: "₹20–40 Lakhs (typical all-in)",
    },
    {
      parameter: "Capitation / Donation",
      featured: "Zero. None. Ever.",
      indiaGovt: "None (govt. merit seat)",
      indiaPrivate: "₹20–80L typically",
      bangladesh: "None (typical NMC-listed route)",
      philippines: "None (typical pathway)",
      isDonationRow: true,
    },
    {
      parameter: "Course Duration",
      featured: "6 years (5 academic + 1 internship in Georgia)",
      indiaGovt: "5.5 years (4.5 + 1 internship)",
      indiaPrivate: "5.5 years",
      bangladesh: "5 years + 1-year internship (typical)",
      philippines: "4 yrs pre-med + 4 yrs MD + internship (typical)",
    },
    {
      parameter: "Medium of Instruction",
      featured: "100% English",
      indiaGovt: "English + regional languages",
      indiaPrivate: "English (majority of colleges)",
      bangladesh: "Bengali + English (programme-dependent)",
      philippines: "English (majority of programmes)",
    },
    {
      parameter: "Seat Availability",
      featured: "Flexible — no national cap",
      indiaGovt: "Very limited — 1.18L seats for 23L+ aspirants",
      indiaPrivate: "Limited — fee-led intake",
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
      featured: "WHO · NMC · WFME · NCEQE",
      indiaGovt: "NMC — globally recognised",
      indiaPrivate: "NMC — varies by institution",
      bangladesh: "WHO, NMC, BMDC alignment for Indian students",
      philippines: "WHO, NMC; USMLE pathway widely advertised",
    },
    {
      parameter: "Licensing Exam (India)",
      featured: "NExT (after internship in Georgia + 12-month India internship)",
      indiaGovt: "NExT only",
      indiaPrivate: "NExT only",
      bangladesh: "FMGE / NExT after BMDC registration pathway",
      philippines: "FMGE / NExT; strong USMLE prep at many schools",
    },
    {
      parameter: "International Career",
      featured: "PLAB (UK) · USMLE (USA) · Gulf · Germany",
      indiaGovt: "NExT → UK / Gulf pathways; USMLE at select peers",
      indiaPrivate: "USMLE / Gulf common where college supports",
      bangladesh: "Gulf · UK PLAB (case-by-case) · home licensing",
      philippines: "USMLE culture strong · Gulf · UK routes",
    },
    {
      parameter: "Best For",
      featured: "Students wanting NEET-only entry, English MD, zero capitation, and EU-aligned recognition",
      indiaGovt: "Top-rank NEET students targeting subsidised India seat",
      indiaPrivate: "Students prioritising India campus + budget for capitation",
      bangladesh: "Proximity, cultural fit & moderate budget",
      philippines: "English-medium campus & US-style / USMLE tilt",
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
        "When private college quotes were ₹90 lakhs with donation, I was completely lost. Taksheela showed me Georgia — two years in, I can confidently say it was the right call. GAU has modern labs, full English classes, and senior students who genuinely help you settle in.",
      name: "Ravi Sharma",
      meta: "NEET 285 · Georgian American University | Patna, Bihar",
      initial: "R",
    },
    {
      rating: 5,
      quote:
        "As a Nepali student, I wasn't sure if Georgia was even an option. Taksheela clarified everything — visa, eligibility, which universities accept Nepali students. The clinical exposure in Year 1 surprised me — we started observing hospital cases much earlier than expected.",
      name: "Priya Gurung",
      meta: "Geomedi Medical University | Dharan, Nepal",
      initial: "P",
    },
    {
      rating: 5,
      quote:
        "EEU has been great. The faculty is excellent and there are hundreds of Bangladeshi students here already — settling in was easy. Taksheela did something different — they showed me the NMC approval list in writing. No vague promises, just facts.",
      name: "Mohammed Rafi",
      meta: "East European University | Dhaka, Bangladesh",
      initial: "M",
    },
    {
      rating: 5,
      quote:
        "Year 4 done. Looking back, Georgia was the right call. Yes, the winter was a shock — I bought my first proper winter jacket here. But the clinical rotations starting Year 3 gave me confidence I don't think I'd have gotten at a private college in India.",
      name: "Ananya Desai",
      meta: "NEET 312 · Georgian National University SEU | Surat, Gujarat",
      initial: "A",
    },
    {
      rating: 5,
      quote:
        "Taksheela did end-to-end for me — from apostille to airport pickup. The counsellor was honest about the challenges too, not just the good parts. That transparency made me trust the process. I'm in Geomedi now and very happy with the decision.",
      name: "Komal Bhati",
      meta: "NEET 235 · Geomedi Medical University | Greater Noida, India",
      initial: "K",
    },
    {
      rating: 5,
      quote:
        "My case had complications — loan issues and documentation errors. My Taksheela counsellor stayed with us until every single issue was resolved. Starting Semester 2 soon. I'm genuinely excited about my future here.",
      name: "Kavya Gaur",
      meta: "NEET 231 · Georgian American University | Delhi, India",
      initial: "Ka",
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
  titlePrimary: "Hostel Accommodation & Climate",
  titleAccent: "in Georgia",
  hostel: {
    title: "Hostel Accommodation",
    bullets: [
      "University hostels: Most NMC-listed universities offer on-campus or university-managed hostels for international students.",
      "Room features: Typically double or triple occupancy with study desks, wardrobes, and shared or attached bathrooms.",
      "Standard amenities: 24-hour security, Wi-Fi, laundry, and central heating are standard at university hostels.",
      "Annual fees: USD 1,500–2,000 (approximately ₹1.3L–₹1.75L per year).",
      "Food / mess: Many hostels have dedicated mess facilities with Indian dietary options — dal, roti, rice, sabzi, and vegetarian menus.",
      "Private housing: From Year 3, many students move to private apartments in Tbilisi; a shared 2-bedroom costs USD 400–700/month (approximately ₹35–61K/month).",
      "Taksheela coordinates verified hostel options before the student’s arrival date.",
    ],
  },
  climate: {
    title: "Climate in Tbilisi",
    intro:
      "Four distinct seasons — plan layers for cold winters, mild springs and autumns, and hot dry summers in the capital.",
    rows: [
      {
        city: "Summer (Jun–Aug)",
        ranges: "28–35°C — Hot, sunny, and dry. Very pleasant for outdoor exploration.",
      },
      {
        city: "Autumn (Sep–Nov)",
        ranges: "12–22°C — Ideal weather. Admission season. Excellent for settling in.",
      },
      {
        city: "Winter (Dec–Feb)",
        ranges: "-2 to 8°C — Cold, occasional snow in Jan. Heavy jackets and thermals essential.",
      },
      {
        city: "Spring (Mar–May)",
        ranges: "10–20°C — Beautiful season. Blooming city. Most students’ favourite time.",
      },
    ],
    tipLabel: "Taksheela Tip",
    tipBody:
      "Pack thermals, a quality winter jacket, and waterproof boots before departure. Most hostels have central heating, but the streets can be very cold from late October. Our pre-departure checklist covers everything.",
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
  titlePrimary: "Key Facts About Georgia for",
  titleAccent: "Medical Students",
  items: [
    { icon: "🌍", value: "Tbilisi", label: "CAPITAL CITY" },
    { icon: "👥", value: "3.7M", label: "POPULATION" },
    { icon: "💱", value: "GEL (₾)", label: "CURRENCY" },
    { icon: "🕐", value: "GMT +4", label: "TIME ZONE (IST - 1.5H)" },
    { icon: "✈️", value: "7-10h", label: "DELHI TO TBILISI (1 STOP)" },
    { icon: "🛡️", value: "Top 20", label: "GLOBALLY SAFE" },
    { icon: "🍽️", value: "Excellent", label: "INDIAN FOOD ACCESS" },
    { icon: "📡", value: "English", label: "MEDIUM AT ALL UNIVERSITIES" },
    { icon: "🏛️", value: "10+", label: "NMC-APPROVED UNIS" },
    { icon: "🎓", value: "13,000+", label: "INDIAN STUDENTS (2024-25)" },
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
    "Georgian MBBS is already among the world's most affordable medical degrees. These scholarship routes can reduce costs further. Taksheela helps identify and apply for eligible schemes.",
  cards: [
    {
      iconKey: "building",
      title: "University Merit Scholarships",
      description:
        "Merit-based tuition relief at Taksheela-partnered Georgian universities — typically processed through the admissions office after you qualify.",
      bullets: [
        "10–25% fee waiver for students with 75%+ in Class 12 PCB or strong NEET scores.",
        "Awarded in Year 1, renewable based on academic performance.",
        "Available at most Taksheela-partnered Georgian universities.",
        "Processed after admission — confirm availability during shortlisting.",
      ],
    },
    {
      iconKey: "books",
      title: "Government of India Schemes",
      description:
        "Central and state programmes that can subsidise education loans or interest for eligible Indian students heading abroad for MBBS.",
      bullets: [
        "Central Sector Interest Subsidy (CSIS) — interest subsidy on education loans for EWS students (family income < ₹4.5L).",
        "Padho Pardesh Scheme — interest subsidy for minority community students studying abroad.",
        "State government merit scholarships (varies by state — check your state education dept.).",
        "Apply before departure — Taksheela assists with documentation.",
      ],
    },
    {
      iconKey: "graduation",
      title: "Georgian Government Scholarship",
      description:
        "NCEQE administers limited scholarships for international students in select programmes — availability and rules can change each intake.",
      bullets: [
        "NCEQE administers limited scholarships for international students in select programs.",
        "Availability varies year to year — confirm current status with Taksheela before applying.",
        "Requires strong academic profile and early application.",
        "Taksheela advises on current eligibility and documentation.",
      ],
    },
    {
      iconKey: "globe",
      title: "Taksheela Merit Initiative",
      description:
        "Our internal scholarship-style support for meritorious students from economically weaker backgrounds — limited seats each cycle.",
      bullets: [
        "Internal scholarship initiative for meritorious students from economically weaker backgrounds.",
        "Speak to a Taksheela counsellor to check your eligibility.",
        "Covers partial counselling and documentation fees.",
        "Limited seats — apply early.",
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

export const georgiaAbroadEducationLoanContent: AbroadEducationLoanContent = {
  eyebrow: "Financing your MBBS",
  title: "Education Loans for MBBS in Georgia",
  intro:
    "Financing a Georgian MBBS is straightforward. Multiple nationalised banks, private lenders, and government schemes are available. Taksheela helps you build a lender-ready document file.",
  nationalised: {
    title: "Nationalised Banks (India)",
    description: "Best for lower interest rates; collateral often required above ₹7.5L",
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
    description: "Faster processing; flexible collateral structures available",
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
    title: "Taksheela Loan Documentation Support",
    description:
      "We help you organise a lender-ready file — provisional admission letter, fee structure and payment schedule, course duration letter, university verification contacts, KYC and co-borrower proofs — so your loan application moves faster with fewer rejections.",
  },
};

// --- Career opportunities after MBBS (TeachingMethodologyAbroad — same content shape) ---

/** Same shape as `AbroadTeachingMethodologyContent` so one component can render both sections. */
export const georgiaAbroadCareerOpportunitiesContent: AbroadTeachingMethodologyContent = {
  eyebrow: "After graduation",
  titlePrimary: "Career Opportunities After MBBS in",
  titleAccent: "Georgia",
  intro:
    "An NMC-compliant Georgian MD degree, combined with NExT clearance, opens genuine pathways in India and globally. Here is what your options look like.",
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
      icon: "GB",
      title: "Practice in UK (PLAB)",
      description:
        "Clear PLAB 1 and PLAB 2 for GMC registration and employment in the NHS — one of the world's most respected healthcare systems.",
    },
    {
      icon: "US",
      title: "Practice in USA (USMLE)",
      description:
        "Pass USMLE Steps 1 and 2 to enter residency programs in the USA via the ERAS/NRMP match. Requires strong preparation from Year 1.",
    },
    {
      icon: "🌍",
      title: "Gulf Countries",
      description:
        "DHA (Dubai), HAAD (Abu Dhabi), and SCHS (Saudi Arabia) licensing exams open to WHO-recognised Georgian MBBS graduates.",
    },
    {
      icon: "DE",
      title: "Germany & Europe",
      description:
        "German Approbation exam + B2/C1 German language proficiency opens German medical registration. Other EU pathways also available.",
    },
    {
      icon: "🔬",
      title: "Medical Research",
      description:
        "Georgia's European academic framework opens PhD programs and medical research fellowships in Europe, India, and internationally.",
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

export const georgiaAbroadWhyChooseTaksheelaContent: AbroadWhyChooseTaksheelaContent = {
  eyebrow: "Your Georgia MBBS partner",
  titlePrimary: "Why Choose Taksheela for",
  titleAccent: "MBBS in Georgia?",
  subtitle:
    "Not just a consultancy — your end-to-end medical career partner from NEET score to Georgian medical licence. Here is what makes Taksheela genuinely different.",
  items: [
    {
      icon: "🎯",
      title: "Georgia-Specialist Counsellors",
      description:
        "Advisors trained specifically on Georgian universities, NMC compliance, city-wise living costs, and realistic NExT preparation timelines — not generic abroad counselling.",
    },
    {
      icon: "🔍",
      title: "Real-Time NMC Verification",
      description:
        "We cross-check every university against the NMC's current approved list before shortlisting. We share the official NMC document with you — not our word, but the government's.",
    },
    {
      icon: "⚖️",
      title: "Zero Commission Bias",
      description:
        "Our shortlisting is driven by NMC compliance, fee transparency, hostel quality, and clinical exposure — never by university commission. Our recommendations are in writing.",
    },
    {
      icon: "📋",
      title: "End-to-End Documentation",
      description:
        "From apostille to Rector's Order to TRP application — structured checklists, zero missed steps, fewer rejections. We've done this for hundreds of students.",
    },
    {
      icon: "🛂",
      title: "Visa & Travel Hand-Holding",
      description:
        "Complete student visa package preparation — invitation letters, visa filing, medical tests, insurance, SOP — and travel coordination so your first landing in Tbilisi feels planned.",
    },
    {
      icon: "🤝",
      title: "Local Tbilisi Team — Year-Round",
      description:
        "Airport pickup, hostel onboarding, university registration, and TRP application — our Tbilisi-based team is available to students 365 days a year, not just at admission time.",
    },
    {
      icon: "🌏",
      title: "NPBD: Dedicated Nepal & Bangladesh Support",
      description:
        "Specialist counsellors who understand visa, documentation, and licensing requirements for Nepali and Bangladeshi students — not a one-size-fits-all India process.",
    },
    {
      icon: "💳",
      title: "Loan Documentation Assistance",
      description:
        "We help you build a lender-ready file for SBI, BoB, HDFC Credila, Avanse, and other banks — so your education loan application moves faster with fewer back-and-forth queries.",
    },
    {
      icon: "🧩",
      title: "NExT / Career Roadmap from Day 1",
      description:
        "Early orientation to NExT, study resources, and alumni touchpoints — so licensing and PG planning start well before Year 6, not after graduation.",
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
    "These are the rules that determine whether your Georgian MBBS degree allows you to practise medicine in India. All Taksheela-recommended universities comply with all 6 rules.",
  rules: [
    {
      icon: "🧮",
      title: "Rule 1 — Minimum 54 Months",
      description:
        "The programme must include at least 54 months of full-time medical education, excluding the 12-month internship. All Georgian private universities run a 5-academic-year + 1-internship programme.",
    },
    {
      icon: "🏥",
      title: "Rule 2 — 12-Month Internship",
      description:
        "A compulsory 12-month internship must be completed at the same institution or its affiliated teaching hospitals in Georgia before returning to India.",
    },
    {
      icon: "🌐",
      title: "Rule 3 — English Medium",
      description:
        "The entire MBBS course must be delivered in English for the full duration. Georgian private universities are among the few MBBS abroad destinations where this is comprehensively met.",
    },
    {
      icon: "🪪",
      title: "Rule 4 — Valid Degree for Local Practice",
      description:
        "Graduates must receive a degree that grants the right to practise medicine in Georgia. All NMC-listed Georgian universities satisfy this condition, making graduates eligible for NExT in India.",
    },
    {
      icon: "📋",
      title: "Rule 5 — NEET Mandatory",
      description:
        "All Indian students must have a valid NEET-UG qualifying score at the time of admission to a foreign medical college. Score validity: 3 years from result date.",
    },
    {
      icon: "✅",
      title: "Rule 6 — WHO / WDOMS Listing",
      description:
        "The university must be listed in the World Directory of Medical Schools (WDOMS). Taksheela shortlists only institutions confirmed in the WDOMS directory and current NMC approved list.",
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
    name: "Geomedi Medical University",
    abbreviation: "Geomedi",
    established: "1998",
    locationLine: "Tbilisi",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 30,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Simulation Labs", variant: "amber" },
    ],
    rankTag: "Established clinical school — Tbilisi",
    headerEmoji: "🏛️",
    imageSrc: geoImg("geomedi.jpg"),
    stats: [
      { label: "Annual fees", value: "~₹4.8L/yr" },
      { label: "6-year total", value: "~₹28–33L" },
      { label: "Duration", value: "6 Years" },
      { label: "Medium", value: "English" },
    ],
    fmge: {
      type: "text",
      text: "FMGE outcomes vary by cohort; strong Indian peer groups and coaching ecosystems in Tbilisi.",
    },
    description: [
      "One of Georgia's oldest dedicated medical universities. Known for advanced simulation labs, strong faculty, and hospital affiliations delivering robust clinical rotations.",
    ],
    featureTags: ["Tbilisi", "English Program", "Clinical Rotations", "Indian Community"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "dtmu",
    name: "David Tvildiani Medical University",
    abbreviation: "DTMU",
    established: "1992",
    locationLine: "Tbilisi",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 34,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Research-Aligned", variant: "amber" },
    ],
    rankTag: "Research-led private medical university",
    subtitle: "DTMU – Tbilisi, Georgia",
    headerEmoji: "🔬",
    imageSrc: geoImg("dtmu.jpg"),
    stats: [
      { label: "Annual fees", value: "~₹5.3L/yr" },
      { label: "6-year total", value: "~₹31–36L" },
      { label: "Duration", value: "6 Years" },
      { label: "Founded", value: "1992" },
    ],
    fmge: {
      type: "text",
      text: "Structured clinical exposure and a research-aligned MBBS curriculum under NCEQE standards — pair with disciplined FMGE prep.",
    },
    description: [
      "One of Georgia's most established dedicated medical universities. Well-regarded for structured clinical exposure and a research-aligned MBBS curriculum under NCEQE standards.",
    ],
    featureTags: ["English Medium", "Hospital Network", "Peer Support", "NMC Aligned"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "uog",
    name: "University of Georgia",
    abbreviation: "UG",
    established: "2004",
    locationLine: "Tbilisi",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 31,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Multidisciplinary", variant: "amber" },
    ],
    rankTag: "Large private university — multiple faculties",
    headerEmoji: "🎓",
    imageSrc: geoImg("uog.png"),
    stats: [
      { label: "Annual fees", value: "~₹5.3L/yr" },
      { label: "6-year total", value: "~₹31–36L" },
      { label: "Duration", value: "6 Years" },
      { label: "City", value: "Tbilisi" },
    ],
    fmge: {
      type: "text",
      text: "FMGE performance depends on self-discipline; verify latest NMC screening list before admission.",
    },
    description: [
      "One of Georgia's largest private universities with a multidisciplinary environment. Medical faculty equipped with advanced simulation facilities and strong teaching hospital network.",
    ],
    featureTags: ["International Mix", "English Track", "Tbilisi", "Hostel Options"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "gau",
    name: "Georgian American University",
    abbreviation: "GAU",
    established: "2001",
    locationLine: "Tbilisi",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 30,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "WFME", variant: "amber" },
    ],
    rankTag: "American-aligned curriculum — Tbilisi",
    headerEmoji: "🏛️",
    stats: [
      { label: "Annual fees", value: "~₹4.8L/yr" },
      { label: "6-year total", value: "~₹28–33L" },
      { label: "Duration", value: "6 Years" },
      { label: "Medium", value: "English" },
    ],
    fmge: {
      type: "text",
      text: "FMGE outcomes vary by cohort; strong Indian peer groups and coaching ecosystems in Tbilisi.",
    },
    description: [
      "American-aligned curriculum with strong clinical training infrastructure. One of the largest Indian student communities in Georgia. NMC, WHO, and WFME recognised.",
    ],
    featureTags: ["Tbilisi", "English Program", "Clinical Rotations", "Indian Community"],
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
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Research-Oriented", variant: "amber" },
    ],
    rankTag: "Public research university — medical faculty",
    headerEmoji: "📚",
    imageSrc: geoImg("isu.jpg"),
    stats: [
      { label: "Annual fees", value: "~₹5.4L/yr" },
      { label: "6-year total", value: "~₹32–36L" },
      { label: "Duration", value: "6 Years" },
      { label: "City", value: "Tbilisi" },
    ],
    fmge: {
      type: "text",
      text: "FMGE prep benefits from ISU’s academic support services and Tbilisi coaching networks.",
    },
    description: [
      "A research-oriented institution with strong academic reputation integrating Georgian and European academic frameworks with a disciplined clinical training approach.",
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
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "NCEQE", variant: "amber" },
    ],
    rankTag: "Private national university — central Tbilisi",
    headerEmoji: "🏫",
    imageSrc: geoImg("gnuseu.jpg"),
    stats: [
      { label: "Annual fees", value: "~₹4.8L/yr" },
      { label: "6-year total", value: "~₹28–33L" },
      { label: "Duration", value: "6 Years" },
      { label: "Medium", value: "English" },
    ],
    fmge: {
      type: "text",
      text: "Mid-tier FMGE signals; selection should pair with disciplined licensing preparation from Year 1.",
    },
    description: [
      "European curriculum framework with one of Georgia's largest Indian student populations. Early clinical exposure and strong academic delivery under Bologna standards.",
    ],
    featureTags: ["Central Tbilisi", "English MD", "Hostel", "Peer Network"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "kwiu",
    name: "Ken Walker International University",
    abbreviation: "KWIU",
    established: "2019",
    locationLine: "Tbilisi",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 28,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Modern Infra", variant: "amber" },
    ],
    rankTag: "Newer institution — hands-on clinical focus",
    headerEmoji: "⚖️",
    imageSrc: geoImg("ewtu.webp"),
    stats: [
      { label: "Annual fees", value: "~₹5.3L/yr" },
      { label: "6-year total", value: "~₹31–36L" },
      { label: "Duration", value: "6 Years" },
      { label: "Founded", value: "2019" },
    ],
    fmge: {
      type: "text",
      text: "Newer cohort — track NMC listing each intake and pair with structured FMGE mentoring from Year 1.",
    },
    description: [
      "A newer institution gaining rapid recognition for its modern teaching infrastructure and strong hands-on clinical training approach aligned with NCEQE standards.",
    ],
    featureTags: ["English", "Tbilisi", "Clinical Training", "NCEQE"],
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
    budgetFriendly: true,
    fmgePercent: 33,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Budget-Friendly", variant: "rose" },
    ],
    rankTag: "Affordable NMC-approved option — Tbilisi",
    subtitle: "CIU – Tbilisi, Georgia",
    headerEmoji: "🌍",
    imageSrc: geoImg("ciu.jpg"),
    stats: [
      { label: "Annual fees", value: "~₹1.9L/yr" },
      { label: "6-year total", value: "~₹11–13L" },
      { label: "Duration", value: "6 Years" },
      { label: "Students", value: "7,400+" },
    ],
    fmge: {
      type: "text",
      text: "Popular with Indian applicants — verify latest NMC listing and plan FMGE prep alongside clinical years.",
    },
    description: [
      "One of Georgia's most affordable NMC-approved options. CIU has enrolled 7,400+ students as of early 2025 and maintains full WHO listing and NCEQE accreditation.",
    ],
    featureTags: ["Tbilisi", "Affordable", "Indian Community", "NCEQE"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "eeu",
    name: "East European University",
    abbreviation: "EEU",
    established: "2012",
    locationLine: "Tbilisi",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 29,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Modern Campus", variant: "amber" },
    ],
    rankTag: "Modern campus — English medicine",
    headerEmoji: "🩺",
    imageSrc: geoImg("eeu.png"),
    stats: [
      { label: "Annual fees", value: "~₹4.8L/yr" },
      { label: "6-year total", value: "~₹28–33L" },
      { label: "Duration", value: "6 Years" },
      { label: "City", value: "Tbilisi" },
    ],
    fmge: {
      type: "text",
      text: "Outcomes linked to individual preparation — Taksheela maps coaching from semester one.",
    },
    description: [
      "Newer institution with a modern campus and strong focus on integrating European teaching methodologies with hands-on clinical training. Growing Indian student cohort.",
    ],
    featureTags: ["Modern Campus", "English", "Tbilisi", "Clinical Skills"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "ibsu",
    name: "International Black Sea University",
    abbreviation: "IBSU",
    established: "1995",
    locationLine: "Tbilisi",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 28,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "International Heritage", variant: "amber" },
    ],
    rankTag: "Private university — international academic heritage",
    headerEmoji: "✨",
    imageSrc: geoImg("alte.webp"),
    stats: [
      { label: "Annual fees", value: "~₹3.9L/yr" },
      { label: "6-year total", value: "~₹23–24L" },
      { label: "Duration", value: "6 Years" },
      { label: "Founded", value: "1995" },
    ],
    fmge: {
      type: "text",
      text: "FMGE data varies — combine university shortlist with structured licensing roadmap.",
    },
    description: [
      "A private university with strong international academic heritage offering a balanced academic and clinical program with a growing South Asian student community.",
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
  topFmgeFilterIds: ["dtmu", "isu"],
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
        annualFees: "~₹4.8L/yr",
        fmgeRate: "~30%",
        bestFor: "Simulation labs + clinical rotations",
      },
      {
        university: "DTMU",
        city: "Tbilisi",
        established: "1992",
        annualFees: "~₹5.3L/yr",
        fmgeRate: "Research-aligned",
        fmgeHighlight: true,
        bestFor: "Established medical faculty + NCEQE",
      },
      {
        university: "University of Georgia",
        city: "Tbilisi",
        established: "2004",
        annualFees: "~₹5.3L/yr",
        fmgeRate: "Moderate",
        bestFor: "Multidisciplinary + large campus",
      },
      {
        university: "GAU",
        city: "Tbilisi",
        established: "2001",
        annualFees: "~₹4.8L/yr",
        fmgeRate: "Moderate",
        bestFor: "American-aligned curriculum + WFME",
      },
      {
        university: "Ilia State Univ.",
        city: "Tbilisi",
        established: "2006",
        annualFees: "~₹5.4L/yr",
        fmgeRate: "Moderate",
        fmgeHighlight: true,
        bestFor: "Research-oriented public uni",
      },
      {
        university: "SEU",
        city: "Tbilisi",
        established: "2001",
        annualFees: "~₹4.8L/yr",
        fmgeRate: "Moderate",
        bestFor: "Bologna framework + Indian cohort",
      },
      {
        university: "KWIU",
        city: "Tbilisi",
        established: "2019",
        annualFees: "~₹5.3L/yr",
        fmgeRate: "New cohort",
        bestFor: "Modern infra + clinical training",
      },
      {
        university: "CIU",
        city: "Tbilisi",
        established: "1995",
        annualFees: "~₹1.9L/yr",
        fmgeRate: "Budget option",
        bestFor: "Lowest fees + 7,400+ students",
      },
      {
        university: "EEU",
        city: "Tbilisi",
        established: "2012",
        annualFees: "~₹4.8L/yr",
        fmgeRate: "Moderate",
        bestFor: "Modern campus + EU-style teaching",
      },
      {
        university: "IBSU",
        city: "Tbilisi",
        established: "1995",
        annualFees: "~₹3.9L/yr",
        fmgeRate: "Moderate",
        bestFor: "International heritage + South Asian cohort",
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
  eyebrow: "Frequently Asked questions",
  title: "Everything You Need to Know About MBBS in Georgia",
  subtitle:
    "Answers for Indian, Nepali, and Bangladeshi students — NMC compliance, NExT, costs in INR/NPR/BDT, universities, safety, and timelines.",
  items: [
    {
      question:
        "Is MBBS in Georgia valid in India? Can I practise medicine in India after graduating from Georgia?",
      answer:
        "Yes — provided you study at an NMC-approved Georgian university, complete the full 6-year program (including the mandatory 12-month clinical internship in Georgia), and subsequently clear India's NExT (National Exit Test). After NExT, you must complete a 12-month internship at an NMC-recognised hospital in India before obtaining State Medical Council registration. Taksheela only recommends NMC-approved institutions.",
    },
    {
      question: "Is NEET mandatory for MBBS in Georgia for Indian students?",
      answer:
        "Yes, for Indian students who intend to return and practise medicine in India. As per NMC regulations (effective 2019), a valid NEET-UG qualifying score (within its 3-year validity) is mandatory before admission to any foreign medical university. Georgian universities do not set a minimum NEET percentile or score — only that you have qualified. Nepali and Bangladeshi students should confirm equivalent requirements with Taksheela.",
    },
    {
      question:
        "What is the total cost of MBBS in Georgia in Indian Rupees, Nepali Rupees (NPR), and Bangladeshi Taka (BDT)?",
      answer:
        "Total 6-year all-inclusive cost: INR: ₹39–70 lakhs (tuition + hostel + food + insurance + visa + personal expenses). Nepal NPR: approximately NPR 62–112 lakh (₹ × ~1.6). Bangladesh BDT: approximately BDT 53–95 lakh (₹ × ~1.35). Budget university (like CIU at $2,200/year): total around ₹25–35L all-in. Premium institutions (around $6,000–6,200/year): total ₹50–70L all-in. No capitation. No donation. Zero hidden fees.",
    },
    {
      question: "Can students from Nepal and Bangladesh study MBBS in Georgia?",
      answer:
        "Absolutely. Georgian universities welcome students of all nationalities. Nepali students must show their NEB certificate or A-Level equivalent, and Bangladeshi students must show their HSC certificate with DGME compliance. Both nationalities require a Georgian student visa and must meet individual university eligibility criteria. Taksheela has dedicated counsellors for Nepal and Bangladesh who understand the specific visa, documentation, and licensing pathways for each country.",
    },
    {
      question: "Which are the best NMC-approved universities in Georgia for Indian students in 2025-26?",
      answer:
        "Top Taksheela-recommended NMC-compliant universities: (1) Georgian American University (GAU, est. 2001), (2) Georgian National University SEU (est. 2001), (3) Geomedi Medical University (est. 1998), (4) East European University (est. 2012), (5) University of Georgia (est. 2004), (6) Caucasus International University (est. 1995 — most affordable), (7) International Black Sea University (est. 1995), (8) David Tvildiani Medical University (est. 1992), (9) Ilia State University (est. 2006), (10) Ken Walker International University (est. 2019). All are WHO-listed, NMC-compliant, and NCEQE-accredited.",
    },
    {
      question: "Is MBBS in Georgia better than Russia, Kyrgyzstan, or Bangladesh for Indian students?",
      answer:
        "Georgia has three key advantages over most alternatives: (1) 100% English medium — unlike Russia or Kyrgyzstan where a second language is required for clinical years. (2) European Bologna Process alignment — making the degree more globally portable. (3) Warmer climate than Russia or Kyrgyzstan, with better cultural adjustment for South Asian students. Fees are slightly higher than Russia's budget options but comparable to mid-range Russian universities. Compared to Bangladesh, Georgia offers more English-medium university options and a larger Indian student community. The right choice depends on your budget, career goals, and personal preferences — Taksheela provides personalised advice based on your specific profile.",
    },
    {
      question: "What is the NExT exam and how does it affect Georgian MBBS graduates?",
      answer:
        "NExT (National Exit Test) has replaced the old FMGE for all Indian medical graduates returning from abroad (and for Indian graduates too). It is a two-part exam conducted by the NMC: NExT Step 1 (knowledge-based) and NExT Step 2 (clinical skills). Passing NExT is mandatory for Georgian MBBS graduates who want to practise medicine in India or pursue PG admissions. Unlike the old FMGE, NExT applies to all MBBS graduates — not just foreign graduates. Taksheela provides early NExT orientation to students from Year 1.",
    },
    {
      question: "Can I do my internship in India after MBBS in Georgia?",
      answer:
        "The mandatory 12-month clinical rotation (internship) must be completed in Georgia at the affiliated teaching hospital, as per NMC regulations. This is a non-negotiable requirement. After completing this and returning to India, graduates must complete a separate 12-month internship at an NMC-recognised hospital in India before obtaining permanent medical registration. This two-internship pathway is clearly stipulated in the NMC Gazette.",
    },
    {
      question: "Is Georgia safe for female students studying alone?",
      answer:
        "Yes. Georgia consistently ranks among the world's top 20 safest countries. Tbilisi has a strong police presence, very low violent crime rates, and an extremely welcoming culture towards international students. Most universities offer on-campus hostels with 24-hour security and CCTV coverage. Additionally, the large Indian student community (13,000+) means there are always senior students available to guide and support newcomers, including female students living independently for the first time. Taksheela's Tbilisi team provides year-round local support.",
    },
    {
      question: "When should I apply for MBBS in Georgia for the September 2025 intake?",
      answer:
        "For September 2025 intake: begin the counselling and university shortlisting process by March–April 2025. Applications should be submitted by June–July 2025. Admission letters are typically issued by July–August. Visa processing takes 4–6 weeks, so applications should be submitted by August at the latest. Taksheela strongly recommends starting by April to ensure MEA apostille (2–4 weeks), university application, and visa processing all align without deadline pressure. Contact Taksheela now to check seat availability.",
    },
    {
      question: "How do I verify if a Georgian university is NMC-approved?",
      answer:
        "Visit the official NMC website at nmc.org.in and check the published list of approved foreign medical universities. Also verify the university on the WHO's World Directory of Medical Schools at wdoms.org. Taksheela conducts this verification in real time before every shortlisting and shares the official NMC document with every student — so you never rely solely on our word. Never pay any fee to a university without independently verifying its NMC status first.",
    },
    {
      question: "Are there scholarships available for MBBS in Georgia?",
      answer:
        "Yes — several routes exist. University merit scholarships (10–25% fee waiver for strong academic profiles), the Government of India's Central Sector Interest Subsidy (CSIS) scheme for EWS students, the Padho Pardesh Scheme for minority community students, and limited Georgian government scholarships via NCEQE. Taksheela identifies which schemes you are eligible for and assists with application documentation. Scholarship availability and seat quotas change yearly — always verify deadlines with the issuing body.",
    },
  ],
};

export const georgiaAbroadCtaBannerContent: AbroadCtaBannerContent = {
  countryLabel: "Georgia",
  subtitle:
    "Book your free counselling session. Get a personalised university shortlist, fee breakdown, and eligibility confirmation in 24 hours.",
  primaryCtaLabel: "Book Free Counselling",
  phoneDisplay: "+91 9831241212",
  phoneTel: "+919831241212",
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

