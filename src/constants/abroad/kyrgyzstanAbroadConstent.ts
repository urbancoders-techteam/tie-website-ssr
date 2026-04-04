/**
 * Kyrgyzstan MBBS abroad — single source of truth for `/mbbs/abroad/kyrgyzstan` UI copy and structured data.
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

export const kyrgyzstanAbroadHeroContent: AbroadHeroContent = {
  eyebrow: "Admissions Open · 2026–27 Intake",
  headline: {
    line1: "Study MBBS in",
    line2Accent: "Kyrgyzstan",
    line3: "— Where Affordability Meets World-Class Medical Training.",
  },
  description:
    "NMC and WHO-approved medical degree in English, from ~₹2L per year (typical range). Large Indian student presence in Bishkek. Zero capitation. Zero donation. End-to-end guidance from Taksheela.",
  descriptionMaxLength: 260,
  cta: {
    primaryText: "Book Free Counselling →",
    secondaryText: "View Universities",
    secondaryHref: "#top-universities",
  },
  quickStats: [
    { label: "Annual Fees From", value: "~₹2L" },
    { label: "Total Duration", value: "6 Yrs" },
    { label: "Indian Students", value: "5K+" },
    { label: "NMC-Approved Unis", value: "10" },
  ],
  spotlight: {
    value: "5,000+",
    caption: "Indian students in Kyrgyz medical universities (industry estimates — verify with counsellor)",
  },
  statGrid: [
    { value: "WHO · NMC", label: "Recognised pathways" },
    { value: "₹2L+", label: "Fees from / year" },
    { value: "6 Yr", label: "MD (MBBS equiv.)" },
    /** Last card value is replaced by `kyrgyzstanAbroadHeroFeaturedCount` when used from the page. */
    { value: "10", label: "Featured Universities" },
  ],
};

/** Merges live college count into the hero stat grid (Kyrgyzstan). */
export function kyrgyzstanAbroadHeroFeaturedCount(
  featuredCount: number,
  base: AbroadHeroContent = kyrgyzstanAbroadHeroContent
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

export const kyrgyzstanAbroadOverviewContent: AbroadOverviewContent = {
  eyebrow: "Overview",
  heading: "Why Kyrgyzstan is Rising as South Asia's Premier MBBS Destination",
  paragraphs: [
    "Kyrgyzstan — a compact, mountainous Central Asian republic — has long been one of the most budget-friendly corridors for English-medium MBBS among students from India, Nepal, and Bangladesh. NMC-listed medical universities in Bishkek, Osh, Jalal-Abad, and Kant combine WHO-recognised General Medicine (MD) programmes with clinical training at affiliated hospitals, typically at annual tuition levels far below Indian private medical colleges.",
    "Thousands of international students study medicine in Kyrgyzstan each cycle, with a large share from South Asia. Exact enrolment shares vary by year and source; Taksheela treats every intake as NMC-list-first — we verify the live approved-university PDF before any fee discussion.",
    "Listed Kyrgyz medical universities follow a 6-year (5+1 style) curriculum aligned with what Indian regulators expect when you plan NExT: English as the primary medium of instruction, progressive clinical exposure from mid-programme years, and a compulsory internship phase mapped to your chosen university’s structure. Degrees are recognised along WHO / NMC pathways when the institution is on India’s current approved list — always verify before admission.",
  ],
  officialData: {
    leadBold: "Official Data (Kyrgyzstan MoH / higher education trends, 2024–25):",
    textBeforeBold: "{countryName} hosts ",
    textBold: "{universityCount}+ NMC-listed medical universities",
    textAfterBold:
      " on India’s current approved foreign list (verify the live PDF before admission). English-medium General Medicine tracks, clinical training from Year 3, and internship structure are aligned with what Indian regulators expect when you plan NExT.",
  },
  mediaPlaceholder: {
    emoji: "🏛️",
    title: "[Kyrgyzstan Medical University Campus Image]",
    subtitle: "Replace with actual asset",
  },
  recognisedStrip: {
    label: "Recognised by:",
    body: "WHO (WDOMS) · NMC India · WFME-aligned pathways where applicable · ECFMG / FAIMER (institution-dependent) · UNESCO sector engagement — enabling NExT (India), USMLE, PLAB, and Gulf licensing when individual requirements are met.",
  },
};

// --- Common fears (CommonFearsSection) ----------------------------------------

export const kyrgyzstanAbroadFearsContent: AbroadFearsContent = {
  section: {
    eyebrow: "Common Fears & Real Answers",
    titleLead: "What Students Worry About Before Choosing Kyrgyzstan",
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
      title: '"Will my Kyrgyz degree be valid in India?"',
      description:
        "Students spend 6 years and ₹25–35 lakhs abroad and fear returning to find their degree isn't accepted by NMC.",
    },
    {
      icon: "❄️",
      title: '"Kyrgyzstan winters are extreme. I can\'t handle that."',
      description:
        "Bishkek winters often reach roughly -15°C to -20°C in January. Students from tropical India, Nepal, and Bangladesh are understandably worried about health and acclimatisation.",
    },
    {
      icon: "🗣️",
      title: '"I\'ll face a language barrier with patients during rotations."',
      description:
        "Clinical rotations require communicating with Kyrgyz or Russian-speaking patients. Students worry about patient interaction in a foreign language.",
    },
    {
      icon: "📉",
      title: '"What\'s the NExT pass rate for Kyrgyzstan graduates?"',
      description:
        "Students are concerned about licensing exam outcomes after returning to India, especially with the newer NExT replacing FMGE.",
    },
    {
      icon: "🔍",
      title: '"How do I know my counsellor isn\'t just sending me to a commission-paying university?"',
      description:
        "Many agents recommend universities based on the highest commission they receive — not what's best for the student.",
    },
    {
      icon: "🏦",
      title: '"I need an education loan. Will banks give it for Kyrgyzstan?"',
      description:
        "Families are unsure whether nationalised banks will sanction loans for MBBS at a Kyrgyz university.",
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
      title: "Osh & Jalal-Abad Are Milder + Pre-Departure Prep",
      description:
        "Southern cities like Osh and Jalal-Abad see milder winters than Bishkek. Taksheela's winter checklist, packing guide, and city advice prepares students before departure. Most adapt within 3–4 weeks.",
    },
    {
      icon: "📚",
      title: "Russian/Kyrgyz Is Built Into the Curriculum from Year 1",
      description:
        "All NMC-compliant Kyrgyz universities include Russian and/or Kyrgyz language as a compulsory subject from Year 1. Basic conversational proficiency is achieved within 18–24 months — exactly as NMC requires for clinical readiness.",
    },
    {
      icon: "🎯",
      title: "University Selection Focused on NExT-Ready Training",
      description:
        "We shortlist universities based on curriculum quality, clinical training depth, and NExT/FMGE readiness. About 60% of Kyrgyz graduates have historically cleared licensing exams with structured preparation — Taksheela's NExT orientation begins from Year 1.",
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
        "Major nationalised banks and NBFCs readily finance NMC-approved MBBS in Kyrgyzstan. Taksheela prepares a complete lender-ready document file to accelerate your loan sanction.",
    },
  ],
};

// --- Eligibility (EligibilityCriteraAbroad) ----------------------------------------

export const kyrgyzstanAbroadEligibilityContent: AbroadEligibilityContent = {
  eyebrow: "Who Can Apply",
  titleLead: "Eligibility Criteria for MBBS in ",
  titleTrail: " 2026–27",
  subtitle:
    "Requirements for students from India, Nepal, and Bangladesh — based on NMC guidelines, Kyrgyzstan Ministry of Education standards, and individual university requirements.",
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
        "Valid NEET-UG qualifying score mandatory (3-year validity from result date). No minimum percentile required by Kyrgyz universities — qualifying score is sufficient.",
    },
    {
      label: "Age Requirement",
      value:
        "Minimum 17 years of age by 31st December of the admission year. No upper age limit at most Kyrgyz medical universities.",
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
      value: "Class 12 (NEB certificate or equivalent A-Level) with Physics, Chemistry, and Biology as core subjects.",
    },
    {
      label: "Minimum Marks",
      value:
        "Minimum 50% aggregate in PCB subjects. Individual university requirements may vary — confirm during shortlisting with Taksheela.",
    },
    {
      label: "Entrance Qualification",
      value:
        "Valid NEET score OR Nepali national medical entry test qualification accepted by most Kyrgyz universities. Taksheela confirms eligibility by university.",
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
        "National DGME-administered medical entry test qualification required. All Taksheela-recommended Kyrgyz universities satisfy DGME Bangladesh compliance requirements.",
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
      title: "Why Kyrgyzstan Works for Nepal Students",
      points: [
        "English-medium MD with affordable total cost — often roughly NPR 28–70 lakh depending on university and city.",
        "Kathmandu document attestation support and NPR forex planning.",
        "Growing Nepali peer network in Bishkek and Osh for shared housing and NExT prep.",
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
      title: "Why Kyrgyzstan Works for Bangladesh Students",
      points: [
        "DGME compliance documentation for return pathways — Taksheela verifies each intake.",
        "Total cost roughly BDT 24–58 lakh; halal food widely available in major Kyrgyz cities.",
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

export const kyrgyzstanAbroadAdmissionProcessContent: AbroadAdmissionProcessContent = {
  eyebrow: "Step by Step",
  titleLead: "MBBS in ",
  titleAccent: "— Admission Process",
  titleTrail: "",
  subtitle:
    "No donation, no separate entrance exam beyond NEET. Fully merit-based and completely guided by Taksheela from your first counselling session to your first week of classes in Kyrgyzstan.",
  steps: [
    {
      title: "Free Counselling & Profile Assessment",
      description:
        "1:1 session with a Taksheela Kyrgyzstan specialist — evaluates your NEET score, Class 12 PCB percentage, budget, preferred city (Bishkek vs Osh vs Jalal-Abad), and career goals to map the right NMC-compliant Kyrgyz university.",
    },
    {
      title: "University Shortlisting",
      description:
        "2–3 NMC-approved, WHO-listed universities shortlisted with complete, transparent fee breakdowns, hostel availability, Indian community size, and clinical training quality compared side by side.",
    },
    {
      title: "Document Preparation & MEA Apostille",
      description:
        "Class 10/12 marksheets, NEET scorecard, passport, passport photos, and medical certificate — compiled, apostilled through the Ministry of External Affairs (India), and translated where required for Kyrgyz university submission.",
    },
    {
      title: "University Application Submission",
      description:
        "Taksheela submits your application directly to the chosen university, manages all follow-up communications, and confirms seat reservation — no missed deadlines, no paperwork gaps.",
    },
    {
      title: "Admission Letter & Seat Confirmation",
      description:
        "Upon successful application review, you receive the official Admission Letter from the university. Your MBBS seat in Kyrgyzstan is confirmed — no donation, no capitation, no management quota payment involved.",
    },
    {
      title: "Visa Invitation Letter & Fee Payment",
      description:
        "The university processes the official Visa Invitation Letter for the Kyrgyz Embassy. Simultaneously, our team handles the apostille of remaining documents and guided first-year fee remittance through authorised international transfer channels.",
    },
    {
      title: "Student Visa Application",
      description:
        "Using the Visa Invitation Letter, you apply for a Kyrgyz student visa at the Kyrgyzstan Embassy or Consulate in India (New Delhi for Indian students; similar process for Nepal/Bangladesh). Taksheela prepares the complete visa package including medical tests, health insurance, and SOP.",
    },
    {
      title: "Pre-Departure Briefing",
      description:
        "Comprehensive pre-departure orientation: what documents to carry, forex setup, Kyrgyzstan SIM cards, winter clothing guide, hostel essentials, food options, flight coordination, and emergency contact briefing.",
    },
    {
      title: "Airport Pickup & Post-Arrival Support",
      description:
        "Taksheela's local representatives in Bishkek (and key partner cities) receive you from the airport, assist with hostel check-in, university registration, SIM card setup, cultural orientation, and local banking — so your first week in Kyrgyzstan is smooth and stress-free.",
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

export const kyrgyzstanAbroadConsiderBeforeContent: AbroadConsiderBeforeContent = {
  eyebrow: "Honest Assessment",
  title: "Things to Consider Before Choosing Kyrgyzstan",
  subtitle:
    "Taksheela believes in full transparency. Here is an honest view of genuine advantages and real challenges — so your decision is fully informed, not just motivated by marketing.",
  advantagesTitle: "Strong Advantages",
  advantages: [
    "Annual fees often from roughly ₹2L — total 6-year investment commonly ₹14–28 lakhs (indicative), with zero capitation or donation when you choose verified NMC-listed universities.",
    "English-medium instruction at NMC-listed universities — no separate language exam (IELTS/TOEFL) required for admission at typical partner universities.",
    "NMC and WHO recognition for listed institutions — degrees can qualify for NExT (India), PLAB (UK), USMLE (USA), and Gulf licensing exams when individual requirements are met.",
    "5,000+ Indian students enrolled — established South Asian communities in Bishkek and Osh with Indian food options, festivals, and peer support.",
    "Halal food widely available — Kyrgyzstan is a Muslim-majority country, making dietary adherence easy for students from diverse religious backgrounds.",
    "Merit-based admission — no donation, no management quota, no seat cap. Every eligible student has a fair shot.",
    "Strong career outcomes — approximately 60% of Kyrgyz graduates have historically passed FMGE/NExT with structured preparation.",
  ],
  challengesTitle: "Genuine Challenges",
  challenges: [
    "Bishkek winters are cold by South Asian standards (often roughly -10°C to -20°C). Osh and Jalal-Abad are milder. Thermal wear and heating are real costs.",
    "Russian and/or Kyrgyz language required for clinical patient interaction from Year 3. Dedicated language classes start from Year 1, but require consistent effort.",
    "NExT / FMGE preparation requires disciplined self-study alongside coursework. Strong clinical training at Kyrgyz hospitals is an advantage, but proactive preparation is essential.",
    "Currency exchange risk — fees are often quoted in USD; families should plan for exchange rate movements across the 6-year duration.",
    "Cultural adjustment is real — Kyrgyz customs and social norms differ from South Asian contexts; an open-minded attitude and patience help through the first semester.",
    "Smaller towns outside Bishkek/Osh may have fewer Indian community resources — students prioritising Indian food availability should usually choose Bishkek or Osh.",
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

export const kyrgyzstanAbroadCostBreakdownContent: AbroadCostBreakdownContent = {
  eyebrow: "Financial planning",
  titlePrimary: "MBBS in Kyrgyzstan",
  titleAccent: "— Complete Fee Structure & Cost of Living",
  subtitle:
    "For Nepal: multiply ₹ by ~1.6 for NPR. For Bangladesh: multiply ₹ by ~1.35 for BDT. All figures are approximate for 2026–27.",
  tuitionTableTitle: "University tuition (indicative)",
  tuitionColAnnual: "Annual Tuition",
  tuitionColSixYear: "6-Year Total",
  tuitionRows: [
    {
      university: "International School of Medicine (ISM)",
      annualTuition: "~₹1.9–3.8L",
      sixYearTotal: "~₹15–26L",
    },
    {
      university: "Kyrgyz State Medical Academy (KSMA)",
      annualTuition: "~₹1.9–3.8L",
      sixYearTotal: "~₹15–26L",
    },
    {
      university: "Osh State University",
      annualTuition: "~₹1.9–3.8L",
      sixYearTotal: "~₹14–24L",
    },
    {
      university: "Jalal-Abad State University",
      annualTuition: "~₹1.9–3.8L",
      sixYearTotal: "~₹14–24L",
    },
    {
      university: "Asian Medical Institute (AMI)",
      annualTuition: "~₹1.9–3.8L",
      sixYearTotal: "~₹14–24L",
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
      value: "~₹3.5L–6.5L (indicative)",
    },
    {
      label: "Nepal (NPR, using ₹ × ~1.6)",
      value: "~NPR 22L–42L total (indicative)",
    },
    {
      label: "Bangladesh (BDT, using ₹ × ~1.35)",
      value: "~BDT 19L–36L total (indicative)",
    },
    {
      label: "vs Indian private MBBS (incl. capitation & donation)",
      value: "₹80L – ₹1.2 Crore",
    },
    {
      label: "Kyrgyzstan advantage",
      value: "zero capitation · zero donation",
    },
  ],
  summaryTotalLabel: "TOTAL 6-YEAR INVESTMENT (EST.)",
  summaryTotalValue: "₹14–28L",
  summaryFootnote:
    "Including all 6 years of tuition, hostel, food, insurance, visa, personal expenses, and one-time setup costs. Zero capitation. Zero donation. * One-time: flight ₹30–50K, visa processing, apostille, initial setup. Exchange rates are indicative for 2026–27.",
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

export const kyrgyzstanAbroadIntakePeriodContent: AbroadIntakePeriodContent = {
  eyebrow: "Application timeline",
  titlePrimary: "MBBS Intakes in Kyrgyzstan",
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

export const kyrgyzstanAbroadTeachingMethodologyContent: AbroadTeachingMethodologyContent = {
  eyebrow: "How You Learn",
  titlePrimary: "Teaching Methodology & Practical Training at",
  titleAccent: "Kyrgyz Universities",
  intro:
    "Kyrgyz medical universities follow a structured 6-year curriculum governed by the Kyrgyzstan Ministry of Healthcare and the Ministry of Education and Science, with all NMC-listed institutions aligned to Schedule 1 requirements of the NMC Gazette. Phases: Years 1–2 pre-clinical (foundation biomedical sciences); Years 3–4 para-clinical (disease mechanisms & pharmacology); Years 5–6 clinical (full hospital rotations including Surgery, Internal Medicine, OBG, Paediatrics, Psychiatry & more).",
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
        "Supervised rotations at university-affiliated multi-speciality hospitals. High patient volumes in Kyrgyz hospitals provide diverse disease exposure, building diagnostic confidence.",
    },
    {
      icon: "🗣️",
      title: "Russian / Kyrgyz Language from Year 1",
      description:
        "Language training is compulsory, progressive, and structured — designed to reach basic conversational clinical proficiency by Year 3, exactly as NMC's abroad-MBBS guidelines require.",
    },
    {
      icon: "💻",
      title: "Digital Learning & Simulation",
      description:
        "Leading Kyrgyz medical universities integrate digital libraries, online clinical case platforms, and simulation training to supplement in-person hospital exposure.",
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

export const kyrgyzstanAbroadMbbsSyllabusContent: AbroadMbbsSyllabusContent = {
  eyebrow: "Curriculum",
  titlePrimary: "MBBS Syllabus in Kyrgyzstan",
  titleAccent: "— Year by Year",
  subtitle:
    "The 6-year General Medicine (MD) program meets NMC's minimum 54-month academic requirement + 12-month mandatory internship. Covers all 19+ compulsory subjects under NMC Schedule 1.",
  footerNote:
    "All Year 6 rotations are supervised by licensed clinicians at university-affiliated teaching hospitals in Kyrgyzstan. Completion of Year 6 qualifies graduates for NExT (India).",
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
        "Russian / Kyrgyz Language I",
        "History of Kyrgyzstan",
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
        "Russian / Kyrgyz Language II",
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

export const kyrgyzstanAbroadCompleteComparisonContent: AbroadCompleteComparisonContent = {
  eyebrow: "Side by side",
  titlePrimary: "MBBS in Kyrgyzstan vs MBBS in India",
  titleAccent: "— 2026–27 Comparison",
  subtitle:
    "Data-structured comparison for students asking whether MBBS in Kyrgyzstan fits versus India — transparent, decision-friendly context; Bangladesh & Philippines columns for regional reference.",
  blockHeading: "Kyrgyzstan · India — key parameters · Bangladesh & Philippines (reference)",
  colParameter: "Parameter",
  colFeatured: "🇰🇬 MBBS in Kyrgyzstan",
  colIndiaGovt: "IN India (Govt. College)",
  colIndiaPrivate: "IN India (Private College)",
  colBangladesh: "🇧🇩 BD Bangladesh",
  colPhilippines: "🇵🇭 PH Philippines",
  rows: [
    {
      parameter: "Entrance Exam",
      featured: "NEET qualifying score only — accessible (no separate Kyrgyz entrance beyond university screening).",
      indiaGovt: "NEET-UG — very high AIR required for govt. seats",
      indiaPrivate: "NEET + large donation / management quota payment",
      bangladesh: "NEET qualifying score (NMC) + institutional screening",
      philippines: "NEET qualifying score + school-specific tests / interview",
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
      featured: "₹14–28L (all-in, indicative)",
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
      featured: "6 years (5 academic + 1 internship in Kyrgyzstan, per university structure)",
      indiaGovt: "5.5 years (4.5 + 1 CRRI in India)",
      indiaPrivate: "5.5 years",
      bangladesh: "5 years + 1-year internship (typical)",
      philippines: "4 yrs pre-med + 4 yrs MD + internship (typical)",
    },
    {
      parameter: "Medium of Instruction",
      featured: "English (full programme); Russian/Kyrgyz taught for clinical communication",
      indiaGovt: "English + regional languages",
      indiaPrivate: "English (majority of colleges)",
      bangladesh: "Bengali + English (programme-dependent)",
      philippines: "English (majority of programmes)",
    },
    {
      parameter: "Seat Availability",
      featured: "10 NMC-listed options (verify PDF), flexible intake",
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
      featured: "NExT (after Kyrgyzstan course + internship steps per NMC rules at your time of admission)",
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
      featured: "Halal food widely available; Indian food in Bishkek/Osh; cultural gap requires adjustment",
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

export const kyrgyzstanAbroadOurStoriesContent: AbroadOurStoriesContent = {
  eyebrow: "Real experiences",
  titlePrimary: "Stories From Students Who Chose",
  titleAccent: "Kyrgyzstan",
  stories: [
    {
      rating: 5,
      quote:
        "I was looking at private colleges in India, but the donation demands were shocking — ₹70 lakhs was the lowest quote I got. Taksheela showed me ISM in Bishkek and walked me through the NMC verification themselves. Two years in, and I'm genuinely happy I made this choice. Bishkek feels safe and student-friendly.",
      name: "Rohan Verma",
      meta: "NEET 327 · International School of Medicine · Delhi",
      initial: "R",
    },
    {
      rating: 5,
      quote:
        "I'm from Nepal and I wasn't sure whether Kyrgyzstan would work for my licensing pathway back home. The Taksheela counsellor explained the Nepal Medical Council exam route clearly and helped me pick KSMA. The Indian and Nepali student community in Bishkek is large — I never feel far from home.",
      name: "Sita Shrestha",
      meta: "Kyrgyz State Medical Academy · Kathmandu, Nepal",
      initial: "S",
    },
    {
      rating: 5,
      quote:
        "I chose Osh State University because Taksheela showed me the cost breakdown honestly — total 6-year investment stayed within my family's budget. The clinical rotations started in Year 3 and the faculty is genuinely dedicated. NEET score was my main concern — 298 isn't high, but it was enough here.",
      name: "Nikhil Mishra",
      meta: "NEET 298 · Osh State University · Mumbai",
      initial: "N",
    },
    {
      rating: 5,
      quote:
        "The winter in Bishkek was a real shock at first — I won't lie. But Taksheela's pre-departure checklist was incredibly detailed. I bought the right clothes, knew what to expect, and within 3 weeks I'd adapted. The university itself is modern and the English faculty is excellent.",
      name: "Tanvi Rawal",
      meta: "NEET 308 · International Medical University · Jaipur, Rajasthan",
      initial: "T",
    },
    {
      rating: 5,
      quote:
        "As a Bangladeshi student, getting proper DGME-compliant counselling was my biggest challenge. Taksheela had specific knowledge about BMDC requirements and helped me choose a university that satisfied all the compliance criteria. Halal food is everywhere in Kyrgyzstan — that was a great comfort from Day 1.",
      name: "Farhan Ahmed",
      meta: "Asian Medical Institute · Dhaka, Bangladesh",
      initial: "F",
    },
    {
      rating: 5,
      quote:
        "From the moment I reached Bishkek to settling into hostel and starting classes, Taksheela's local team was there. I never had to figure anything out alone. The process was exactly as explained during counselling — transparent, step-by-step, no surprises. I'm in Year 4 now and preparing for NExT seriously.",
      name: "Mohd Zaid",
      meta: "NEET 354 · Jalal-Abad State University · Indore, MP",
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

export const kyrgyzstanAbroadAccommodationClimateContent: AbroadAccommodationClimateContent = {
  eyebrow: "Campus life",
  titlePrimary: "Hostel Accommodation & Climate",
  titleAccent: "in Kyrgyzstan",
  hostel: {
    title: "Hostel Accommodation",
    bullets: [
      "Most NMC-listed Kyrgyz universities provide on-campus or university-managed hostels for international students at annual costs of $600–$1,200 (₹52K–₹1.05L/year).",
      "Rooms are typically double or triple occupancy with study desks, wardrobes, and shared washrooms. Central heating is standard and essential in winter.",
      "University mess facilities are available on campus. Bishkek and Osh have Indian restaurants and grocery options catering to the South Asian community.",
      "Kyrgyzstan is a Muslim-majority country — halal food is available everywhere, benefiting Muslim students from Bangladesh and other communities.",
      "From Year 3 onwards, many students move to private apartments. Shared apartments in Bishkek cost approximately $200–$350/month per person (₹17K–₹30K).",
      "Taksheela coordinates verified hostel options and provides city-specific accommodation guidance before your departure.",
    ],
  },
  climate: {
    title: "Climate Across Key University Cities",
    intro:
      "Continental climate — Bishkek is colder in winter than Osh or Jalal-Abad; pack layers if you choose the capital.",
    rows: [
      {
        city: "Bishkek Spring (Apr–Jun)",
        ranges: "10–24°C — Pleasant, ideal for settling in. Admission season.",
      },
      {
        city: "Bishkek Summer (Jul–Sep)",
        ranges: "25–34°C — Warm and sunny. Great for outdoor exploration.",
      },
      {
        city: "Bishkek Winter (Dec–Feb)",
        ranges: "-10 to -20°C — Cold; thermals + jacket essential.",
      },
      {
        city: "Osh Winter (Dec–Feb)",
        ranges: "-2 to -12°C — Milder than Bishkek — popular with cold-sensitive students.",
      },
    ],
    tipLabel: "Taksheela City Tip",
    tipBody:
      "If harsh winters worry you, shortlist Osh or Jalal-Abad alongside Bishkek. Bishkek has the largest university choice and Indian community. Our pre-departure checklist covers clothing, heating, and acclimatisation in detail.",
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

export const kyrgyzstanAbroadKeyFactsContent: AbroadKeyFactsContent = {
  eyebrow: "At a Glance",
  titlePrimary: "MBBS in Kyrgyzstan — Quick Facts",
  titleAccent: "2026–27",
  items: [
    { icon: "🎓", value: "MD / General Medicine (= MBBS)", label: "DEGREE AWARDED" },
    { icon: "⏱️", value: "6 Years (5 academic + 1 internship)", label: "COURSE DURATION" },
    { icon: "💰", value: "₹1.9L – ₹3.8L / year (typical)", label: "ANNUAL TUITION" },
    { icon: "🏠", value: "₹1.2L – ₹2.5L / year", label: "ANNUAL LIVING COST" },
    { icon: "🗓️", value: "September (primary) · February (secondary)", label: "INTAKES" },
    { icon: "🧾", value: "50% PCB + NEET qualified, age 17+", label: "BASIC ELIGIBILITY" },
    { icon: "🌐", value: "English (primary); Russian/Kyrgyz taught", label: "MEDIUM OF INSTRUCTION" },
    { icon: "✅", value: "WHO · NMC · FAIMER · ECFMG · UNESCO", label: "RECOGNISED BY" },
    { icon: "👩‍🎓", value: "5,000+ enrolled (est.)", label: "INDIAN STUDENTS" },
    { icon: "🏛️", value: "10 institutions", label: "NMC-APPROVED UNIVERSITIES" },
    { icon: "🚫", value: "Zero. Completely merit-based.", label: "DONATION / CAPITATION" },
    { icon: "📝", value: "Not required for admission", label: "IELTS / TOEFL REQUIRED" },
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

export const kyrgyzstanAbroadScholarshipsContent: AbroadScholarshipsContent = {
  eyebrow: "Financial Aid",
  title: "Scholarships for MBBS in Kyrgyzstan",
  subtitle:
    "Kyrgyzstan MBBS is already among the world's most budget-friendly medical degrees. These scholarship routes can reduce costs further for eligible students.",
  cards: [
    {
      iconKey: "building",
      title: "University Merit Scholarships",
      description:
        "Merit-based tuition relief at Taksheela-partnered Kyrgyz universities — processed through the admissions office after you qualify.",
      bullets: [
        "10–20% tuition fee reduction for students with 70%+ in Class 12 PCB or strong NEET scores.",
        "Renewable annually based on academic performance and GPA maintenance.",
        "Available at multiple Taksheela-partnered Kyrgyz universities — confirm during shortlisting.",
        "Processed after admission confirmation, not before.",
      ],
    },
    {
      iconKey: "graduation",
      title: "Government & bilateral scholarships",
      description:
        "The Kyrgyz Republic and partner countries occasionally offer limited merit or exchange scholarships — medical quotas are small and rules change yearly.",
      bullets: [
        "Check current announcements from the university international office and Kyrgyz education authorities.",
        "Medical programme slots for foreign students are limited — apply early if a window opens.",
        "Requires strong academic profile and complete documentation.",
        "Taksheela advises on current eligibility and paperwork.",
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

export const kyrgyzstanAbroadEducationLoanContent: AbroadEducationLoanContent = {
  eyebrow: "Financing your MBBS",
  title: "Education Loans for MBBS in Kyrgyzstan",
  intro:
    "Financing a Kyrgyz MBBS is well-supported by Indian banks and NBFCs. Taksheela helps you build a lender-ready document file for faster loan processing.",
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
    title: "Taksheela Loan File Support",
    description:
      "We prepare your complete lender-ready document set — provisional admission letter, detailed fee schedule, course duration letter, university NMC verification, and co-borrower KYC proofs — so your loan application moves faster with fewer rejections and back-and-forth queries.",
  },
};

// --- Career opportunities after MBBS (TeachingMethodologyAbroad — same content shape) ---

/** Same shape as `AbroadTeachingMethodologyContent` so one component can render both sections. */
export const kyrgyzstanAbroadCareerOpportunitiesContent: AbroadTeachingMethodologyContent = {
  eyebrow: "After graduation",
  titlePrimary: "Career Opportunities After MBBS in",
  titleAccent: "Kyrgyzstan",
  intro:
    "An NMC-compliant Kyrgyz MD degree, combined with NExT clearance, opens genuine career pathways in India and across the world.",
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
        "Pass USMLE Steps 1 and 2CK for US residency applications through the ERAS/NRMP match system. ECFMG listing of Kyrgyz universities supports eligibility.",
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
        "Kyrgyz universities' UNESCO and FAIMER recognition opens doors to PhD programs and research fellowships in Europe, India, and internationally.",
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

export const kyrgyzstanAbroadWhyChooseTaksheelaContent: AbroadWhyChooseTaksheelaContent = {
  eyebrow: "Your Kyrgyzstan MBBS Partner",
  titlePrimary: "Why Choose Taksheela for",
  titleAccent: "MBBS in Kyrgyzstan?",
  subtitle:
    "Not just a consultancy — your end-to-end medical career partner from NEET score to Kyrgyz MD degree and NExT preparation. Here is what makes Taksheela genuinely different.",
  items: [
    {
      icon: "🎯",
      title: "Kyrgyzstan-Specialist Counsellors",
      description:
        "Advisors who know Kyrgyzstan's university landscape deeply — city-wise cost differences (Bishkek vs Osh vs Jalal-Abad), NMC compliance, NExT readiness, and realistic winter preparation. Not generic abroad counselling.",
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
        "MEA apostille, Russian translation (where required), visa invitation coordination, and SOP preparation — structured checklists, zero missed steps, fewer rejections. We've placed hundreds of students in Kyrgyzstan.",
    },
    {
      icon: "🛂",
      title: "Visa & Travel Hand-Holding",
      description:
        "Full Kyrgyz student visa package — including medical tests, health insurance, SOP, and Embassy submission coordination. Pre-departure orientation covering forex, flights, winter packing, and SIM card setup.",
    },
    {
      icon: "🤝",
      title: "Local Teams in Bishkek & Key Cities",
      description:
        "Taksheela's on-ground representatives in Kyrgyzstan provide airport pickup, hostel check-in, university registration, SIM setup, and cultural orientation — so your first week in Kyrgyzstan is smooth and reassuring.",
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

export const kyrgyzstanAbroadRegulatoryFrameworkContent: AbroadRegulatoryFrameworkContent = {
  eyebrow: "Regulatory framework",
  titlePrimary: "NMC Gazette Rules &",
  titleAccent: "Kyrgyzstan Compliance",
  subtitle:
    "These six NMC Gazette rules determine whether your Kyrgyz MBBS degree qualifies you to practice medicine in India. All Taksheela-recommended Kyrgyz universities comply fully with all six when you verify current listings.",
  rules: [
    {
      icon: "📅",
      title: "Rule 1 — Minimum 54 Months Academic Study",
      description:
        "The programme must include at least 54 months of full-time academic study, excluding the 12-month internship. All Kyrgyz MD programs run for 5 academic years, fully satisfying this requirement — confirm your university’s exact structure vs NMC norms before enrolling.",
    },
    {
      icon: "🏥",
      title: "Rule 2 — 12-Month Mandatory Internship",
      description:
        "A compulsory 12-month clinical internship must be completed at the same university or its affiliated teaching hospital in Kyrgyzstan before returning to India, as per NMC rules applicable at your admission.",
    },
    {
      icon: "🌐",
      title: "Rule 3 — English as Primary Medium",
      description:
        "The full MBBS/MD course must be delivered in English. NMC-listed Kyrgyz medical universities on India’s current PDF typically offer English-medium General Medicine — confirm your exact programme on the offer letter.",
    },
    {
      icon: "🪪",
      title: "Rule 4 — Valid Degree for Local Practice",
      description:
        "Graduates must receive a degree granting them the right to practise medicine in Kyrgyzstan. All recommended universities satisfy this — graduates can apply for Kyrgyz medical registration upon completion.",
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
        "The university must be listed in the World Directory of Medical Schools (WDOMS). All Taksheela-recommended Kyrgyz universities are confirmed WDOMS-listed and NMC-approved before shortlisting.",
    },
  ],
  officialSourcesLabel: "Official Sources",
  officialLinks: [
    { label: "NMC India", href: "https://www.nmc.org.in" },
    { label: "WHO Directory", href: "https://www.wdoms.org" },
    { label: "Kyrgyzstan Ministry of Education (gov.kg)", href: "https://www.gov.kg" },
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

const kyImg = (n: number) => `${imageBaseUrl ?? ""}mbbsCollege/kyrgyzstan/ky${n}.png`;

/** Matches `country.colleges` in `mbbs.js` (10 featured universities). */
export const kyrgyzstanTopUniversityCards: AbroadTopUniversityCard[] = [
  {
    id: "ism",
    name: "International School of Medicine",
    abbreviation: "ISM",
    established: "1993",
    locationLine: "Bishkek",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 30,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Popular", variant: "amber" },
    ],
    rankTag: "Large international intake — Bishkek",
    headerEmoji: "🏛️",
    imageSrc: kyImg(1),
    stats: [
      { label: "Annual fees", value: "~₹1.9–3.8L/yr" },
      { label: "6-year total", value: "~₹15–26L" },
      { label: "Duration", value: "5–6 Years" },
      { label: "Medium", value: "English" },
    ],
    fmge: {
      type: "text",
      text: "Licensing outcomes depend on self-study; strong Indian peer groups in Bishkek for NExT coaching.",
    },
    description: [
      "Well-known English-medium medical school in Bishkek with structured clinical training and a large South Asian student community.",
    ],
    featureTags: ["Bishkek", "English Track", "Clinical Rotations", "Indian Community"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "ksma",
    name: "Kyrgyz State Medical Academy",
    abbreviation: "KSMA",
    established: "1939",
    locationLine: "Bishkek",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 30,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "State", variant: "amber" },
    ],
    rankTag: "Historic state medical academy — capital",
    headerEmoji: "🔬",
    imageSrc: kyImg(2),
    stats: [
      { label: "Annual fees", value: "~₹1.9–3.8L/yr" },
      { label: "6-year total", value: "~₹15–26L" },
      { label: "Duration", value: "5–6 Years" },
      { label: "Founded", value: "1939" },
    ],
    fmge: {
      type: "text",
      text: "Structured clinical exposure — pair with disciplined NExT preparation from early years.",
    },
    description: [
      "Established state medical academy in Bishkek with strong teaching-hospital links and international student intake.",
    ],
    featureTags: ["English Medium", "Hospital Network", "Peer Support", "NMC Aligned"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "jsu",
    name: "Jalal-Abad State University",
    abbreviation: "JSU",
    established: "1993",
    locationLine: "Jalal-Abad",
    region: "other",
    budgetFriendly: true,
    fmgePercent: 29,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Regional", variant: "amber" },
    ],
    rankTag: "Southern city — milder climate",
    headerEmoji: "🎓",
    imageSrc: kyImg(3),
    stats: [
      { label: "Annual fees", value: "~₹1.9–3.8L/yr" },
      { label: "6-year total", value: "~₹14–24L" },
      { label: "Duration", value: "5–6 Years" },
      { label: "City", value: "Jalal-Abad" },
    ],
    fmge: {
      type: "text",
      text: "Verify latest NMC listing; good option for students prioritising milder winters.",
    },
    description: [
      "Regional state university with medical faculty; popular with students seeking value outside the capital.",
    ],
    featureTags: ["International Mix", "English Track", "Jalal-Abad", "Hostel Options"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "osu",
    name: "Osh State University",
    abbreviation: "OSU",
    established: "1951",
    locationLine: "Osh",
    region: "other",
    budgetFriendly: true,
    fmgePercent: 29,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "South", variant: "amber" },
    ],
    rankTag: "Second city — Fergana Valley hub",
    headerEmoji: "🏛️",
    imageSrc: kyImg(4),
    stats: [
      { label: "Annual fees", value: "~₹1.9–3.8L/yr" },
      { label: "6-year total", value: "~₹14–24L" },
      { label: "Duration", value: "5–6 Years" },
      { label: "Medium", value: "English" },
    ],
    fmge: {
      type: "text",
      text: "Pair early NExT planning with clinical years — verify NMC listing each intake.",
    },
    description: [
      "Major university in southern Kyrgyzstan with English-medium medical tracks and growing international cohorts.",
    ],
    featureTags: ["Osh", "English Program", "Clinical Rotations", "Value"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "ami",
    name: "Asian Medical Institute",
    abbreviation: "AMI",
    established: "2004",
    locationLine: "Kant",
    region: "other",
    budgetFriendly: true,
    fmgePercent: 28,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Near Bishkek", variant: "amber" },
    ],
    rankTag: "Kant campus — short hop from Bishkek",
    headerEmoji: "📚",
    imageSrc: kyImg(5),
    stats: [
      { label: "Annual fees", value: "~₹1.9–3.8L/yr" },
      { label: "6-year total", value: "~₹14–24L" },
      { label: "Duration", value: "5–6 Years" },
      { label: "City", value: "Kant" },
    ],
    fmge: {
      type: "text",
      text: "Popular with South Asian students — confirm internship mapping with Taksheela.",
    },
    description: [
      "Private institute near Bishkek with English-medium MD programme and structured hostel support.",
    ],
    featureTags: ["Kant", "English Track", "Clinical Training", "NMC Pathway"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "imu",
    name: "International Medical University",
    abbreviation: "IMU",
    established: "2016",
    locationLine: "Bishkek",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 28,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Bishkek", variant: "amber" },
    ],
    rankTag: "Capital campus — modern intake",
    headerEmoji: "🏫",
    imageSrc: kyImg(6),
    stats: [
      { label: "Annual fees", value: "~₹1.9–3.8L/yr" },
      { label: "6-year total", value: "~₹15–26L" },
      { label: "Duration", value: "5–6 Years" },
      { label: "Medium", value: "English" },
    ],
    fmge: {
      type: "text",
      text: "Licensing outcomes depend on individual prep; active peer networks in Bishkek.",
    },
    description: [
      "Bishkek-based medical university with English-medium curriculum and hospital affiliations.",
    ],
    featureTags: ["Bishkek", "English MD", "Hostel", "Peer Network"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "krsu",
    name: "Kyrgyz Russian Slavic University",
    abbreviation: "KRSU",
    established: "1993",
    locationLine: "Bishkek",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 30,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Bilingual", variant: "amber" },
    ],
    rankTag: "Russian–Kyrgyz academic tradition",
    subtitle: "KRSU – Bishkek",
    headerEmoji: "🌍",
    imageSrc: kyImg(7),
    stats: [
      { label: "Annual fees", value: "~₹1.9–3.8L/yr" },
      { label: "6-year total", value: "~₹15–26L" },
      { label: "Duration", value: "5–6 Years" },
      { label: "Students", value: "Int'l mix" },
    ],
    fmge: {
      type: "text",
      text: "Strong Russian-language layer — plan NExT coaching alongside clinical years.",
    },
    description: [
      "Established university with medical faculty; popular with students comfortable in a Russian-influenced academic environment.",
    ],
    featureTags: ["Bishkek", "Clinical Training", "Indian Community", "English"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "ksmi",
    name: "Kyrgyz State Medical Institute",
    abbreviation: "KSMI",
    established: "1939",
    locationLine: "Bishkek",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 29,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Established", variant: "amber" },
    ],
    rankTag: "Medical institute — Bishkek",
    headerEmoji: "⚖️",
    imageSrc: kyImg(8),
    stats: [
      { label: "Annual fees", value: "~₹1.9–3.8L/yr" },
      { label: "6-year total", value: "~₹15–26L" },
      { label: "Duration", value: "5–6 Years" },
      { label: "Founded", value: "1939" },
    ],
    fmge: {
      type: "text",
      text: "Verify listing each cycle; map internship and NExT prep early with counsellor.",
    },
    description: [
      "Long-standing medical institute in the capital with structured MD curriculum and clinical rotations.",
    ],
    featureTags: ["Bishkek", "Value", "Clinical Training", "NMC"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "knu",
    name: "Kyrgyz National University",
    abbreviation: "KNU",
    established: "1925",
    locationLine: "Bishkek",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 29,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "National", variant: "amber" },
    ],
    rankTag: "Flagship national university — medical faculty",
    headerEmoji: "🩺",
    imageSrc: kyImg(9),
    stats: [
      { label: "Annual fees", value: "~₹1.9–3.8L/yr" },
      { label: "6-year total", value: "~₹15–26L" },
      { label: "Duration", value: "5–6 Years" },
      { label: "City", value: "Bishkek" },
    ],
    fmge: {
      type: "text",
      text: "Outcomes linked to preparation — map coaching from semester one.",
    },
    description: [
      "National university with medical programme; strong peer network and capital-city infrastructure.",
    ],
    featureTags: ["Bishkek", "English", "Clinical Skills", "Hostel"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "ksapcs",
    name: "Kyrgyz State Academy of Physical Culture and Sports",
    abbreviation: "KSAPCS",
    established: "1954",
    locationLine: "Bishkek",
    region: "moscow",
    budgetFriendly: true,
    fmgePercent: 28,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Value", variant: "rose" },
    ],
    rankTag: "Medical faculty — verify programme fit",
    headerEmoji: "✨",
    imageSrc: kyImg(10),
    stats: [
      { label: "Annual fees", value: "~₹1.9–3.8L/yr" },
      { label: "6-year total", value: "~₹14–24L" },
      { label: "Duration", value: "5–6 Years" },
      { label: "Founded", value: "1954" },
    ],
    fmge: {
      type: "text",
      text: "Confirm exact degree title and NMC mapping with Taksheela before fees.",
    },
    description: [
      "Institution listed on NMC-approved pathways where applicable — shortlist only after live PDF verification.",
    ],
    featureTags: ["Bishkek", "Verify NMC", "Student Support", "Budget"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
];

export const kyrgyzstanAbroadTopUniversitiesContent: AbroadTopUniversitiesContent = {
  eyebrow: "Where to Study",
  titlePrimary: "Top NMC-Approved Medical Universities in Kyrgyzstan",
  titleAccent: "2026–27",
  intro:
    "All listed universities are WHO-listed, NMC-approved, and Taksheela-verified for 2026–27. Fees, city, and specialisations vary — Taksheela shortlists the right match for your profile.",
  cardWatermarkCode: "KG",
  filters: [
    { id: "all", label: "All Universities" },
    { id: "moscow", label: "Bishkek" },
    { id: "other", label: "Other Cities" },
    { id: "budget", label: "Budget-Friendly" },
    { id: "top_fmge", label: "Top FMGE Rate" },
  ],
  topFmgeFilterIds: ["ism", "ksma"],
  universities: kyrgyzstanTopUniversityCards,
  quickComparison: {
    title: "Quick Comparison — All 10 Universities",
    disclaimer:
      "Fees are approximate for 2026–27 based on publicly available data. Exact figures vary by year and exchange rate. Verified breakdown provided during free counselling.",
    rows: [
      {
        university: "ISM",
        city: "Bishkek",
        established: "1993",
        annualFees: "~₹1.9–3.8L/yr",
        fmgeRate: "Peer-heavy",
        fmgeHighlight: true,
        bestFor: "Large English intake",
      },
      {
        university: "KSMA",
        city: "Bishkek",
        established: "1939",
        annualFees: "~₹1.9–3.8L/yr",
        fmgeRate: "State academy",
        fmgeHighlight: true,
        bestFor: "Historic state school",
      },
      {
        university: "JSU",
        city: "Jalal-Abad",
        established: "1993",
        annualFees: "~₹1.9–3.8L/yr",
        fmgeRate: "Regional",
        bestFor: "Milder south",
      },
      {
        university: "OSU",
        city: "Osh",
        established: "1951",
        annualFees: "~₹1.9–3.8L/yr",
        fmgeRate: "Regional",
        bestFor: "Fergana Valley hub",
      },
      {
        university: "AMI",
        city: "Kant",
        established: "2004",
        annualFees: "~₹1.9–3.8L/yr",
        fmgeRate: "Value",
        bestFor: "Near Bishkek",
      },
      {
        university: "IMU",
        city: "Bishkek",
        established: "2016",
        annualFees: "~₹1.9–3.8L/yr",
        fmgeRate: "Modern",
        bestFor: "Capital campus",
      },
      {
        university: "KRSU",
        city: "Bishkek",
        established: "1993",
        annualFees: "~₹1.9–3.8L/yr",
        fmgeRate: "Bilingual",
        bestFor: "Slavic tradition",
      },
      {
        university: "KSMI",
        city: "Bishkek",
        established: "1939",
        annualFees: "~₹1.9–3.8L/yr",
        fmgeRate: "Established",
        bestFor: "Medical institute",
      },
      {
        university: "KNU",
        city: "Bishkek",
        established: "1925",
        annualFees: "~₹1.9–3.8L/yr",
        fmgeRate: "National uni",
        bestFor: "Broad university setting",
      },
      {
        university: "KSAPCS",
        city: "Bishkek",
        established: "1954",
        annualFees: "~₹1.9–3.8L/yr",
        fmgeRate: "Verify fit",
        bestFor: "Budget — confirm NMC row",
      },
    ],
  },
};

// --- FAQ — Kyrgyzstan MBBS (FAQPage schema / AI-optimised) ----------------------------

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

export const kyrgyzstanAbroadFaqPageContent: AbroadFaqPageContent = {
  eyebrow: "Frequently Asked Questions",
  title: "Everything You Need to Know About MBBS in Kyrgyzstan",
  subtitle:
    "Answers for Indian, Nepali, and Bangladeshi students — validity, NExT, costs in INR/NPR/BDT, universities, food, climate, and timelines.",
  items: [
    {
      question:
        "Is MBBS in Kyrgyzstan valid in India? Can I practise medicine in India after graduating?",
      answer:
        "Yes — provided you complete your degree at an NMC-approved Kyrgyz university, finish the full 6-year program including the mandatory 12-month clinical internship in Kyrgyzstan, and then clear India's NExT (National Exit Test). After NExT, you must complete a 12-month internship at an NMC-recognised hospital in India before receiving permanent medical registration. Taksheela only recommends NMC-approved institutions verified against the current official list.",
    },
    {
      question: "What is the total cost of MBBS in Kyrgyzstan in Indian Rupees, NPR, and BDT?",
      answer:
        "Total 6-year all-inclusive cost (2026–27, indicative): Indian Rupees: ₹14–28 lakhs (tuition + hostel + food + insurance + visa + personal). Nepal NPR: approximately NPR 22–42 lakh (₹ × ~1.6). Bangladesh BDT: approximately BDT 19–36 lakh (₹ × ~1.35). Osh, Jalal-Abad, and Kant options often sit at the lower end of living spend; Bishkek may be slightly higher. Always verify live fee letters. Zero capitation. Zero donation.",
    },
    {
      question: "Is NEET mandatory for MBBS in Kyrgyzstan for Indian students?",
      answer:
        "Yes, for Indian students who intend to return and practise medicine in India. As per NMC regulations (effective March 2019), a valid NEET-UG qualifying score (within its 3-year validity) is mandatory before admission to any foreign medical university. Kyrgyz universities do not set a minimum NEET percentile or score — only that you have qualified the exam. Nepali and Bangladeshi students should confirm equivalent national entrance test requirements with Taksheela.",
    },
    {
      question: "Which are the best NMC-approved universities in Kyrgyzstan for Indian students?",
      answer:
        "Shortlist only from India’s current NMC-approved foreign medical institutions list. Commonly discussed Kyrgyz options include: International School of Medicine (ISM, Bishkek), Kyrgyz State Medical Academy (KSMA, Bishkek), Osh State University (Osh), Jalal-Abad State University, Asian Medical Institute (Kant), International Medical University (Bishkek), Kyrgyz Russian Slavic University (KRSU), Kyrgyz State Medical Institute, Kyrgyz National University (medical faculty), and Kyrgyz State Academy of Physical Culture and Sports — confirm each row on the live NMC PDF and WDOMS before you pay any fees.",
    },
    {
      question: "Is MBBS in Kyrgyzstan better than Russia or Georgia for Indian students?",
      answer:
        "Kyrgyzstan vs Russia: Kyrgyzstan often works out cheaper on total spend for many families; Russia has a wider range from budget to premium universities. Russia may include state licensing steps (e.g. GOZZ) depending on the pathway — your counsellor should map this to your university. Both typically layer Russian (and/or local language) for patient communication in clinical years. Kyrgyzstan vs Georgia: Georgia is milder climatically and often English-only clinically; Kyrgyzstan is usually more budget-friendly. The right choice depends on budget, climate, language comfort, and NExT prep discipline — Taksheela compares options to your profile.",
    },
    {
      question: "Can students from Nepal and Bangladesh study MBBS in Kyrgyzstan?",
      answer:
        "Yes. Kyrgyz universities welcome students from all nationalities. Nepali students must show their NEB certificate (apostilled) or equivalent, and may use a valid NEET score or Nepali national medical entry test. Bangladeshi students must show their HSC certificate with DGME compliance documentation. Both nationalities require a Kyrgyz student visa. Taksheela has dedicated counsellors with specific knowledge of Nepal NMC and BMDC (Bangladesh) licensing pathways to advise on which Kyrgyz university best suits each student's career plan back home.",
    },
    {
      question: "Which city in Kyrgyzstan is best for MBBS — Bishkek or Osh?",
      answer:
        "Bishkek is the capital and hosts the largest cluster of universities and Indian student services — more mess options, groceries, and coaching access, but colder winters. Osh (and Jalal-Abad) in the south are milder in winter and can be lighter on rent for some students, with strong university choices — verify which Osh/Jalal-Abad programmes match your NMC list row. Taksheela typically recommends Bishkek when you want maximum peer density and convenience, and Osh/Jalal-Abad when winter sensitivity or budget is the priority — always confirm NMC approval for the exact faculty you apply to.",
    },
    {
      question: "What is the NExT exam and how does it affect students graduating from Kyrgyzstan?",
      answer:
        "NExT (National Exit Test) has replaced the old FMGE for all Indian medical graduates returning from foreign universities. It is a two-part examination: NExT Step 1 (knowledge-based multiple-choice assessment) and NExT Step 2 (clinical skills and OSCE-format evaluation). Clearing NExT is mandatory for Kyrgyz MBBS graduates who wish to practise medicine in India or pursue MD/MS postgraduate specialisation. Unlike the old FMGE (which only applied to foreign graduates), NExT applies to all MBBS graduates, including those from Indian institutions. Taksheela provides NExT orientation to students starting from Year 1 of their MBBS in Kyrgyzstan.",
    },
    {
      question: "Is food available for Indian, Hindu vegetarian, and Muslim students in Kyrgyzstan?",
      answer:
        "Yes. Kyrgyzstan is a Muslim-majority country, making halal food available widely — in university canteens, restaurants, and grocery stores. This is a significant advantage for Muslim students from Bangladesh and other communities. For Hindu vegetarian students, Bishkek and Osh have Indian restaurants serving vegetarian dal, rice, roti, and sabzi; Indian grocery items are available in larger cities. Several university hostels also run or partner Indian mess facilities. Taksheela's local team can guide you on the best food options on arrival.",
    },
    {
      question: "When should I apply for MBBS in Kyrgyzstan for the September 2026 intake?",
      answer:
        "For the September 2026 intake: begin counselling and university shortlisting by March–April 2026. Applications should be submitted to the university by June–July 2026. Admission letters are typically received by July–August. Visa processing takes 3–5 weeks, so embassy submission should happen by late August. MEA apostille takes 2–4 weeks — start early. Taksheela strongly recommends beginning the process by April to ensure all documents, apostille, and visa stages align without deadline pressure. Contact us now to check current seat availability at your preferred Kyrgyz university.",
    },
    {
      question: "How do I verify if a Kyrgyz university is NMC-approved?",
      answer:
        "Visit the official NMC website at nmc.org.in and check the published list of approved foreign medical universities. Also verify the institution in the WHO's World Directory of Medical Schools at wdoms.org. Taksheela performs this verification in real time before every shortlisting recommendation and shares the official NMC document with every student — so you're never relying solely on our word. The golden rule: never pay any fee to a university without independently confirming its current NMC approval status. We make this process straightforward for you.",
    },
    {
      question: "Are there scholarships available for MBBS in Kyrgyzstan?",
      answer:
        "Yes — several routes are available. University merit fee waivers (where offered), the Government of India's Central Sector Interest Subsidy (CSIS) scheme for EWS students (family income under ₹4.5L), the Padho Pardesh scheme for minority community students, and occasional Kyrgyz government or bilateral exchange windows (rare for medicine — verify yearly). Scholarship availability changes every intake — always verify with the issuing body. Taksheela identifies eligible schemes and helps with documentation alongside admission.",
    },
  ],
};

export const kyrgyzstanAbroadCtaBannerContent: AbroadCtaBannerContent = {
  countryLabel: "Kyrgyzstan",
  subtitle:
    "Book your free counselling session. Get a personalised university shortlist, complete fee breakdown, and eligibility confirmation within 24 hours.",
  primaryCtaLabel: "Book Free Counselling",
  phoneDisplay: "+91 9831241212",
  phoneTel: "+919831241212",
};

export const kyrgyzstanAbroadQuickFactsContent: AbroadQuickFactItem[] = [
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
    value: "₹1.9L – ₹3.8L / year",
    mLabel: "Tuition / yr",
    mValue: "₹2–3.8L",
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
    value: "English (primary); Russian/Kyrgyz taught",
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
    value: "5,000+ enrolled (est.)",
    mLabel: "Indians",
    mValue: "5,000+",
  },
  {
    icon: "🏛️",
    label: "NMC-Approved Universities",
    value: "10 institutions",
    mLabel: "NMC unis",
    mValue: "10",
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

const kyrgyzstanAbroadWhyChooseMbbsReasons: AbroadWhyChooseMbbsItem[] = [
  {
    icon: "💸",
    title: "One of the Most Affordable MBBS Destinations Globally",
    description:
      "Annual tuition often falls roughly between ₹2L and ₹3.8L for many listed universities — among the lowest-cost NMC-approved corridors. Total 6-year investment commonly lands around ₹14–28 lakhs (indicative) — compared to ₹80L–₹1.2Cr at Indian private colleges, with zero donation.",
  },
  {
    icon: "✅",
    title: "NMC-Approved — Valid Degree for India Practice",
    description:
      "Taksheela shortlists only institutions on the NMC's current approved list. Graduates can appear for NExT and return to practise medicine anywhere in India after internship completion — verify the live PDF at admission time.",
  },
  {
    icon: "🌐",
    title: "English as Primary Medium — No IELTS Required",
    description:
      "All NMC-listed Kyrgyz medical universities offer the General Medicine program entirely in English. Russian and Kyrgyz are taught as auxiliary languages for patient communication — but all exams, textbooks, and lectures are in English.",
  },
  {
    icon: "🏥",
    title: "Modern Hospitals with Diverse Clinical Exposure",
    description:
      "Kyrgyz teaching hospitals serve large, diverse patient populations with varied disease profiles. Clinical rotations from Year 3 cover Surgery, Internal Medicine, OBG, Paediatrics, Neurology, and Emergency Medicine.",
  },
  {
    icon: "🎓",
    title: "WHO, FAIMER, ECFMG & UNESCO Recognition",
    description:
      "Kyrgyz MD degrees carry multi-body international recognition, enabling graduates to pursue licensing exams globally: NExT (India), PLAB (UK), USMLE (USA), and Gulf country licensing exams.",
  },
  {
    icon: "🚫",
    title: "Absolutely Zero Donation or Capitation",
    description:
      "Kyrgyz universities admit students on pure academic merit. There are no management quotas, no backdoor admissions, and no capitation fees — a stark, welcome contrast to Indian private MBBS admissions.",
  },
  {
    icon: "🛡️",
    title: "Safe, Student-Friendly Cities",
    description:
      "Bishkek and Osh are established student hubs with visible international communities, campus security routines, and public transport — still use normal big-city awareness as you would anywhere.",
  },
  {
    icon: "🍽️",
    title: "Halal Food & Indian Dietary Options Available",
    description:
      "Kyrgyzstan is a majority-Muslim country, making halal food readily available in all major cities. Indian restaurants and grocery options are easiest to find in Bishkek and Osh.",
  },
  {
    icon: "🇳🇵🇧🇩",
    title: "Welcoming for Nepal & Bangladesh Students",
    description:
      "Kyrgyz universities actively recruit students from Nepal and Bangladesh. Growing Nepali and Bangladeshi student communities in Bishkek and Osh make cultural integration easier from Day 1.",
  },
  {
    icon: "✈️",
    title: "Affordable Flights, Accessible Visa",
    description:
      "One-stop flights from major Indian cities to Bishkek via the Gulf or Istanbul are common. Kyrgyzstan student visa processing is handled through the Kyrgyz diplomatic mission covering India — Taksheela guides the current document pack.",
  },
];

const kyrgyzstanAbroadWhyChooseMbbsSection: AbroadWhyChooseMbbsSectionContent = {
  eyebrow: "Why Choose Kyrgyzstan",
  titleLead: "10 Compelling Reasons to Study MBBS in ",
  titleTrail: "",
  subtitle:
    "Evidence-backed reasons why thousands of Indian students and growing numbers from Nepal and Bangladesh choose Kyrgyzstan for an affordable, NMC-verified medical degree.",
};

export const kyrgyzstanAbroadWhyChooseMbbsContent: AbroadWhyChooseMbbsContent = {
  section: kyrgyzstanAbroadWhyChooseMbbsSection,
  reasons: kyrgyzstanAbroadWhyChooseMbbsReasons,
};

