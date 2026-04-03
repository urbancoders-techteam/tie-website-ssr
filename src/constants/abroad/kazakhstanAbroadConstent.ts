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

export const kazakhstanAbroadHeroContent: AbroadHeroContent = {
  eyebrow: "KZ MBBS in Kazakhstan 2026-27 - Admissions Open",
  headline: {
    line1: "Study MBBS in Kazakhstan",
    line2Accent: "English-Medium Medicine in",
    line3: "Central Asia — Eurasia’s Rising Hub.",
  },
  description:
    "Kazakhstan offers English-medium 5–6 year medical programmes, WHO/NMC-listed universities, and total costs often ₹18–35 lakhs all-in — competitive versus many Indian private colleges. Almaty and Nur-Sultan combine modern campuses, growing Indian student networks, and clinical training aligned with NExT and global licensing pathways.",
  descriptionMaxLength: 260,
  cta: {
    primaryText: "Book Free Counselling ->",
    secondaryText: "View Universities",
    secondaryHref: "#top-universities",
  },
  quickStats: [
    { label: "Total Fees", value: "₹18L+" },
    { label: "Duration", value: "5–6 Years" },
    { label: "Medium", value: "English" },
    { label: "Intake", value: "Sep / Feb" },
  ],
  spotlight: {
    value: "12,000+",
    caption: "Indian students in Kazakhstan (MEA trends / industry estimates)",
  },
  statGrid: [
    { value: "WHO · NMC", label: "Screened Universities" },
    { value: "₹2.25L+", label: "Annual Fees From" },
    { value: "5–6 Yr", label: "MD (MBBS equiv.)" },
    /** Last card value is replaced by `kazakhstanAbroadHeroFeaturedCount` when used from the page. */
    { value: "10", label: "Featured Universities" },
  ],
};

/** Merges live college count into the hero stat grid (Kazakhstan). */
export function kazakhstanAbroadHeroFeaturedCount(
  featuredCount: number,
  base: AbroadHeroContent = kazakhstanAbroadHeroContent
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

export const kazakhstanAbroadOverviewContent: AbroadOverviewContent = {
  eyebrow: "Overview",
  heading: "Why Kazakhstan is a Smart MBBS Choice for Indian & South Asian Students",
  paragraphs: [
    "Kazakhstan — Central Asia’s largest economy — offers affordable, English-medium medical degrees at institutions listed on WHO and aligned with India’s NMC screening requirements. Major cities such as Almaty and Nur-Sultan host modern campuses, structured clinical training, and active peer networks for Indian students.",
    "Growing numbers of Indian students choose Kazakhstan for transparent fee bands (often roughly ₹2.25–5.25 lakh/year tuition depending on university), direct flights via Gulf hubs, and a familiar academic pathway when paired with disciplined NExT preparation.",
    "Graduates who meet NMC rules can pursue NExT (India), while the degree also supports global licensing routes (USMLE, PLAB, Gulf) when individual requirements are met.",
  ],
  officialData: {
    leadBold: "Official Data (MEA trends, 2025):",
    textBeforeBold: "{countryName} has ",
    textBold: "{universityCount}+ recognised medical universities",
    textAfterBold:
      " on India’s NMC shortlist (verify current list before admission). Kazakhstan remains a practical, budget-friendly option for Indian families seeking English-medium MBBS abroad.",
  },
  mediaPlaceholder: {
    emoji: "🏛️",
    title: "[Kazakhstan Medical University Campus Image]",
    subtitle: "Replace with actual asset",
  },
  recognisedStrip: {
    label: "Recognised by:",
    body: "WHO (WDOMS) · NMC India · Ministry of Healthcare RK (Kazakhstan) · ECFMG/FAIMER eligible institutions where applicable — enabling FMGE/NExT (India), USMLE (USA), PLAB (UK) when individual requirements are met.",
  },
};

// --- Common fears (CommonFearsSection) ----------------------------------------

export const kazakhstanAbroadFearsContent: AbroadFearsContent = {
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
      title: "Is Kazakhstan safe for my daughter studying alone?",
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
      title: "Can I get an education loan for Kazakhstan?",
      description:
        "Families ask about loans, halal food options, winter clothing, and how quickly students settle in Almaty or Nur-Sultan.",
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
        "Kazakh universities typically require only a valid NEET qualifying score within 3 years. No All India Rank cutoff — only that you've qualified. We map you to the right university for your profile.",
    },
    {
      icon: "📊",
      title: "Transparent Shortlisting. Zero Commission Bias.",
      description:
        "Our shortlisting is driven by NMC compliance, fee transparency, hostel quality, and clinical exposure — never by commission. We show you our reasoning in writing.",
    },
    {
      icon: "🛡️",
      title: "Stable Country + Local Support Network",
      description:
        "Kazakhstan offers a stable environment for international students. Our partner coordinators help with airport pickup, hostel onboarding, and year-round student support in major cities.",
    },
    {
      icon: "🏪",
      title: "Indian Food & Mess in Major Cities",
      description:
        "Almaty and Nur-Sultan have Indian restaurants, groceries, and many hostels with Indian mess options. Halal food is widely available. Senior students guide newcomers from Day 1.",
    },
    {
      icon: "💳",
      title: "SBI, BoB, HDFC Credila, Avanse — All Available",
      description:
        "Major nationalised banks and NBFCs offer education loans for NMC-approved MBBS in Kazakhstan. Taksheela helps you build a lender-ready document file for faster sanction.",
    },
  ],
};

// --- Eligibility (EligibilityCriteraAbroad) ----------------------------------------

export const kazakhstanAbroadEligibilityContent: AbroadEligibilityContent = {
  eyebrow: "Who Can Apply",
  titleLead: "Eligibility Criteria for MBBS in ",
  titleTrail: "",
  subtitle:
    "Requirements for students from India, Nepal, and Bangladesh — based on NMC (India) guidelines, Kazakhstan Ministry of Healthcare norms, and individual university policies.",
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
        "Valid NEET-UG qualifying score mandatory (3-year validity from result date). Any qualifying score accepted — no minimum percentile set by most Kazakh universities for Indian students.",
    },
    {
      label: "Age Requirement",
      value:
        "Minimum 17 years by December 31st of the admission year. No upper age limit at most partner universities.",
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
      value: "Valid NEET score OR Nepali national medical entry test qualification accepted by many Kazakh universities. Taksheela confirms eligibility by university.",
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
      value: "Valid NEET score OR Nepali national medical entry test qualification accepted by many Kazakh universities. Taksheela confirms eligibility by university.",
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
      title: "Why Kazakhstan Works for Nepal Students",
      points: [
        "English-medium MD with affordable total cost — often roughly NPR 28–70 lakh depending on university and city.",
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
        "Total cost roughly BDT 24–58 lakh; halal food widely available in major Kazakh cities.",
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

export const kazakhstanAbroadAdmissionProcessContent: AbroadAdmissionProcessContent = {
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
        "1:1 session with a Taksheela Kazakhstan specialist — reviews NEET eligibility, budget, Almaty vs regional city preference, and NMC screening readiness.",
    },
    {
      title: "University Shortlist",
      description:
        "2–3 WHO-listed, NMC-aligned universities with fee transparency, hostel options, and licensing-prep notes for each campus.",
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
        "Some Kazakh universities require a brief online English screening. Taksheela prepares you in advance. Upon success, you receive the official Admission Letter.",
    },
    {
      title: "First-Year Fee Payment & Enrollment Confirmation",
      description:
        "First-year tuition is paid to lock your seat. The university issues enrollment confirmation and the documents needed for your student visa application.",
    },
    {
      title: "Student Visa Application",
      description:
        "Indian students typically apply for a Kazakhstan student visa (category) at the Embassy of Kazakhstan in New Delhi with invitation/supporting documents. Taksheela prepares the complete visa package.",
    },
    {
      title: "Pre-Departure Briefing",
      description:
        "Comprehensive orientation: what to carry, forex setup, local SIM, winter clothing checklist, hostel essentials, flight coordination (often via Dubai/Istanbul), and emergency contacts.",
    },
    {
      title: "Airport Pickup & Post-Arrival Support",
      description:
        "Local coordinators receive you from the airport where arranged, assist with university registration, fee confirmation, and temporary registration as required.",
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

export const kazakhstanAbroadConsiderBeforeContent: AbroadConsiderBeforeContent = {
  eyebrow: "Honest assessment",
  title: "Things to Consider Before Choosing Kazakhstan",
  subtitle:
    "Genuine advantages and real challenges — so you make a fully informed decision. Taksheela believes honesty builds better outcomes than sales pitches.",
  advantagesTitle: "Strong Advantages",
  advantages: [
    "Fees often 3–5× lower than Indian private medical colleges, with zero capitation at NMC-listed Kazakh universities we shortlist.",
    "Merit-based admission — no donation route; NEET qualifying score is the primary Indian-student gate for India return pathway.",
    "English-medium tracks at many universities — no IELTS/TOEFL at several institutions; basic local language may be taught for clinical communication.",
    "WHO-listed institutions and NMC alignment when you pick the right university — critical for NExT and registration in India.",
    "Growing Indian student communities in Almaty and Nur-Sultan — seniors, mess options, and coaching networks.",
    "Direct flight connectivity via Gulf hubs — easier travel than many distant destinations.",
    "Stable, resource-rich country investing in higher-education infrastructure.",
  ],
  challengesTitle: "Genuine Challenges",
  challenges: [
    "Continental climate — winters can be very cold (especially northern cities). Budget for heavy winter gear and heating-aware housing.",
    "Russian or Kazakh language helps for everyday life and some clinical interactions; academic lectures may still be English depending on university.",
    "NExT requires disciplined self-study; start licensing planning from Year 1 — do not wait until final year.",
    "Currency in KZT / USD fee quotes — plan for forex movement across 5–6 years.",
    "Verify NMC list every intake; university status can change — Taksheela re-checks before you pay fees.",
    "Some programmes are 5+1 or 6 years depending on university — confirm internship structure vs NMC rules with your counsellor.",
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

export const kazakhstanAbroadCostBreakdownContent: AbroadCostBreakdownContent = {
  eyebrow: "Financial planning",
  titlePrimary: "MBBS in Kazakhstan",
  titleAccent: "— Complete Fee Structure & Cost of Living",
  subtitle:
    "For Nepal: multiply ₹ by ~1.6 for NPR. For Bangladesh: multiply ₹ by ~1.35 for BDT. All figures are approximate for 2025–26.",
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
      value: "~₹5.5L–9.5L",
    },
    {
      label: "Nepal (NPR, using ₹ × ~1.6)",
      value: "~NPR 45L–95L total (indicative)",
    },
    {
      label: "Bangladesh (BDT, using ₹ × ~1.35)",
      value: "~BDT 38L–80L total (indicative)",
    },
    {
      label: "vs Indian private MBBS (incl. capitation & donation)",
      value: "often ₹80L–₹1.2 Cr",
    },
    {
      label: "Kazakhstan advantage",
      value: "zero capitation · zero donation",
    },
  ],
  summaryTotalLabel: "TOTAL 6-YEAR INVESTMENT (EST.)",
  summaryTotalValue: "₹18–35L",
  summaryFootnote:
    "Includes six years of tuition, hostel, food, insurance, visa/registration, personal expenses, and one-time setup. Ranges vary by city (Almaty vs regional) and exchange rate. * One-time: flight ₹35–55K, visa, apostille, initial setup ~₹45K. Exchange rates are indicative for 2025–26.",
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

export const kazakhstanAbroadTeachingMethodologyContent: AbroadTeachingMethodologyContent = {
  eyebrow: "How you learn",
  titlePrimary: "Teaching Methodology &",
  titleAccent: "Practical Training",
  intro:
    "Kazakhstan’s medical universities follow national standards set by the Ministry of Healthcare and offer structured pre-clinical, para-clinical, and clinical phases. Taksheela-recommended universities are vetted for NMC alignment and English-medium delivery where applicable.",
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
      title: "Modular credit system",
      description:
        "Structured credits across basic medical, clinical, and internship phases — aligned with licensing expectations for Indian graduates under current NMC norms.",
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

export const kazakhstanAbroadMbbsSyllabusContent: AbroadMbbsSyllabusContent = {
  eyebrow: "Curriculum",
  titlePrimary: "MBBS Syllabus in Kazakhstan",
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
        "Kazakh / Russian (intro)",
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

export const kazakhstanAbroadCompleteComparisonContent: AbroadCompleteComparisonContent = {
  eyebrow: "Side by side",
  titlePrimary: "MBBS in Kazakhstan vs MBBS in India",
  titleAccent: "— 2025–26 Comparison",
  subtitle:
    "Quick contrast on entrance, cost, instruction, and licensing — Kazakhstan column reflects a typical 2025–26 English-medium pathway; India & regional columns for wider context.",
  blockHeading: "Kazakhstan · India — key parameters · Bangladesh & Philippines (reference)",
  colParameter: "Parameter",
  colFeatured: "🇰🇿 MBBS in Kazakhstan",
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
      featured: "₹18–35L (all-in, indicative)",
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
      featured: "5–6 years (varies by university; includes internship per NMC rules)",
      indiaGovt: "5.5 years (4.5 + 1 internship)",
      indiaPrivate: "5.5 years",
      bangladesh: "5 years + 1-year internship (typical)",
      philippines: "4 yrs pre-med + 4 yrs MD + internship (typical)",
    },
    {
      parameter: "Medium of Instruction",
      featured: "English at shortlisted universities + local language support",
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
      featured: "WHO · NMC (verify list) · Ministry of Healthcare RK",
      indiaGovt: "NMC — globally recognised",
      indiaPrivate: "NMC — varies by institution",
      bangladesh: "WHO, NMC, BMDC alignment for Indian students",
      philippines: "WHO, NMC; USMLE pathway widely advertised",
    },
    {
      parameter: "Licensing Exam (India)",
      featured: "NExT (after completing NMC-compliant course + India internship rules)",
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
      featured: "Budget-focused students wanting English-medium MBBS, NEET pathway, and Central Asian exposure",
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

export const kazakhstanAbroadOurStoriesContent: AbroadOurStoriesContent = {
  eyebrow: "Real experiences",
  titlePrimary: "Stories from Our Students",
  titleAccent: "in Kazakhstan",
  stories: [
    {
      rating: 5,
      quote:
        "Private college fees in India were unrealistic for our family. Taksheela walked us through KNMU in Almaty — English classes, clear fee structure, and seniors who helped me find a good hostel. Two years in, it still feels like the right decision.",
      name: "Ravi Sharma",
      meta: "NEET 278 · Kazakh National Medical University | Patna, Bihar",
      initial: "R",
    },
    {
      rating: 5,
      quote:
        "I was nervous about visa paperwork. The team broke every step into a checklist — apostille, invitation, embassy appointment. I’m at Astana Medical University now and settling in faster than I expected.",
      name: "Priya Gurung",
      meta: "Astana Medical University | Dharan, Nepal",
      initial: "P",
    },
    {
      rating: 5,
      quote:
        "What I appreciated most was the NMC list verification in writing before we paid any fee. South Kazakhstan Medical Academy has a strong South Asian cohort — mess options and seniors made Year 1 easier.",
      name: "Mohammed Rafi",
      meta: "South Kazakhstan Medical Academy | Dhaka, Bangladesh",
      initial: "M",
    },
    {
      rating: 5,
      quote:
        "Winters are no joke — I had to invest in proper gear. But the clinical exposure from Year 3 and the structured timetable keep me focused. Taksheela warned me honestly about language practice for clinics — that helped.",
      name: "Ananya Desai",
      meta: "NEET 305 · Karaganda State Medical University | Surat, Gujarat",
      initial: "A",
    },
    {
      rating: 5,
      quote:
        "From shortlisting to airport pickup coordination, the process felt organised. I’m at Kazakh-Russian Medical University and the campus support for international students is better than I feared.",
      name: "Komal Bhati",
      meta: "NEET 242 · Kazakh-Russian Medical University | Greater Noida, India",
      initial: "K",
    },
    {
      rating: 5,
      quote:
        "We hit a snag with bank paperwork for the loan. My counsellor stayed on calls with us until the sanction letter came through. That persistence mattered — I’m in Semester 2 at Semey State Medical University.",
      name: "Kavya Gaur",
      meta: "NEET 218 · Semey State Medical University | Delhi, India",
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

export const kazakhstanAbroadAccommodationClimateContent: AbroadAccommodationClimateContent = {
  eyebrow: "Campus life",
  titlePrimary: "Hostel Accommodation & Climate",
  titleAccent: "in Kazakhstan",
  hostel: {
    title: "Hostel Accommodation",
    bullets: [
      "University hostels: Most NMC-listed universities offer on-campus or university-managed hostels for international students.",
      "Room features: Typically double or triple occupancy with study desks, wardrobes, and shared or attached bathrooms.",
      "Standard amenities: 24-hour security, Wi-Fi, laundry, and central heating are standard in northern cities.",
      "Annual fees: often roughly ₹1L–2L+ depending on city and room type (verify with university each intake).",
      "Food / mess: Many hostels have mess facilities; Indian vegetarian options are easier to find in Almaty and Nur-Sultan.",
      "Private housing: Shared apartments in Almaty/Nur-Sultan commonly range roughly ₹25–55K/month depending on area (indicative).",
      "Taksheela coordinates verified hostel options before the student’s arrival date.",
    ],
  },
  climate: {
    title: "Climate in Almaty (reference)",
    intro:
      "Continental climate — hot summers, cold winters; northern cities (e.g. Petropavl) see harsher winters than southern Shymkent.",
    rows: [
      {
        city: "Summer (Jun–Aug)",
        ranges: "25–35°C (Almaty) — Warm, dry spells; carry light layers.",
      },
      {
        city: "Autumn (Sep–Nov)",
        ranges: "5–20°C — Crisp air; main intake season for many students.",
      },
      {
        city: "Winter (Dec–Feb)",
        ranges: "-15 to 5°C (city-dependent) — Snow and ice; insulated boots and thermals mandatory.",
      },
      {
        city: "Spring (Mar–May)",
        ranges: "5–18°C — Snowmelt; still carry a warm jacket early season.",
      },
    ],
    tipLabel: "Taksheela Tip",
    tipBody:
      "Pack thermals, a heavy winter jacket, gloves, and waterproof boots. Heating indoors is strong, but outdoor wind chill is real. We share a city-specific packing list after your university is confirmed.",
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
  eyebrow: "Kazakhstan at a glance",
  titlePrimary: "Key Facts About Kazakhstan for",
  titleAccent: "Medical Students",
  items: [
    { icon: "🌍", value: "Astana", label: "CAPITAL CITY" },
    { icon: "👥", value: "~20M", label: "POPULATION" },
    { icon: "💱", value: "KZT (₸)", label: "CURRENCY" },
    { icon: "🕐", value: "GMT+5 / +6", label: "TIME ZONE (IST −0.5 to −1H)" },
    { icon: "✈️", value: "7–12h", label: "DELHI TO ALMATY (1 STOP)" },
    { icon: "🛡️", value: "Stable", label: "STUDENT-FRIENDLY CITIES" },
    { icon: "🍽️", value: "Good", label: "INDIAN FOOD (BIG CITIES)" },
    { icon: "📡", value: "English", label: "MEDIUM (SHORTLISTED UNIS)" },
    { icon: "🏛️", value: "10+", label: "NMC-APPROVED UNIS" },
    { icon: "🎓", value: "12,000+", label: "INDIAN STUDENTS (TREND)" },
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

export const kazakhstanAbroadScholarshipsContent: AbroadScholarshipsContent = {
  eyebrow: "Financial aid",
  title: "Scholarships for MBBS in Kazakhstan",
  subtitle:
    "Kazakhstan MBBS is already among the more affordable abroad options. These routes can reduce costs further. Taksheela helps identify and apply for eligible schemes.",
  cards: [
    {
      iconKey: "building",
      title: "University Merit Scholarships",
      description:
        "Merit-based tuition relief at Taksheela-partnered Kazakh universities — typically processed through the admissions office after you qualify.",
      bullets: [
        "10–25% fee waiver for students with 75%+ in Class 12 PCB or strong NEET scores.",
        "Awarded in Year 1, renewable based on academic performance.",
        "Available at select Taksheela-partnered universities — confirm each intake.",
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
      title: "Kazakhstan / University Bilateral Schemes",
      description:
        "Limited university or government-linked schemes may appear for international students — availability and rules change each intake.",
      bullets: [
        "Some universities publish fee discounts for early applicants — verify on the offer letter.",
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

export const kazakhstanAbroadEducationLoanContent: AbroadEducationLoanContent = {
  eyebrow: "Financing your MBBS",
  title: "Education Loans for MBBS in Kazakhstan",
  intro:
    "Financing MBBS in Kazakhstan is straightforward for many families. Multiple nationalised banks, private lenders, and government schemes are available. Taksheela helps you build a lender-ready document file.",
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
export const kazakhstanAbroadCareerOpportunitiesContent: AbroadTeachingMethodologyContent = {
  eyebrow: "After graduation",
  titlePrimary: "Career Opportunities After MBBS in",
  titleAccent: "Kazakhstan",
  intro:
    "An NMC-compliant degree from a listed Kazakh university, combined with NExT clearance, opens genuine pathways in India and globally. Here is what your options look like.",
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
        "DHA (Dubai), HAAD (Abu Dhabi), and SCHS (Saudi Arabia) licensing exams open to WHO-recognised graduates when credential rules are met.",
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
        "A strong academic transcript and research exposure can open PhD programs and fellowships in India and internationally — plan early with your mentor.",
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

export const kazakhstanAbroadWhyChooseTaksheelaContent: AbroadWhyChooseTaksheelaContent = {
  eyebrow: "Your Kazakhstan MBBS partner",
  titlePrimary: "Why Choose Taksheela for",
  titleAccent: "MBBS in Kazakhstan?",
  subtitle:
    "Not just a consultancy — your end-to-end medical career partner from NEET score to graduation. Here is what makes Taksheela genuinely different.",
  items: [
    {
      icon: "🎯",
      title: "Kazakhstan-Focused Counsellors",
      description:
        "Advisors trained on Kazakh universities, NMC compliance, city-wise living costs (Almaty vs regional), and realistic NExT preparation timelines — not generic abroad counselling.",
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
        "From apostille to admission letter to visa file — structured checklists, zero missed steps, fewer rejections. We've done this for hundreds of students.",
    },
    {
      icon: "🛂",
      title: "Visa & Travel Hand-Holding",
      description:
        "Complete student visa package preparation — invitation letters, embassy filing, medical tests, insurance — and travel coordination so your first landing in Almaty or Nur-Sultan feels planned.",
    },
    {
      icon: "🤝",
      title: "Local Coordinators — Year-Round",
      description:
        "Airport pickup, hostel onboarding, and university registration support where partners — our coordinators help students through key milestones, not just at admission time.",
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

export const kazakhstanAbroadRegulatoryFrameworkContent: AbroadRegulatoryFrameworkContent = {
  eyebrow: "Regulatory framework",
  titlePrimary: "NMC Gazette Rules &",
  titleAccent: "Kazakhstan Compliance",
  subtitle:
    "These are the rules that determine whether your foreign MBBS degree allows you to practise medicine in India. All Taksheela-recommended universities are vetted against current NMC requirements.",
  rules: [
    {
      icon: "🧮",
      title: "Rule 1 — Minimum 54 Months",
      description:
        "The programme must include at least 54 months of full-time medical education, excluding the 12-month internship. Verify your university’s exact structure vs NMC norms before enrolling.",
    },
    {
      icon: "🏥",
      title: "Rule 2 — 12-Month Internship",
      description:
        "A compulsory 12-month internship must be completed as per NMC rules — typically abroad at the institution or affiliated hospitals, as stipulated in the Gazette at your time of admission.",
    },
    {
      icon: "🌐",
      title: "Rule 3 — English Medium",
      description:
        "The entire MBBS course must be delivered in English for the full duration. Taksheela shortlists universities where English-medium delivery is consistent with NMC expectations.",
    },
    {
      icon: "🪪",
      title: "Rule 4 — Valid Degree for Local Practice",
      description:
        "Graduates must receive a degree that grants the right to practise medicine in the country of study. NMC-listed Kazakh universities we recommend are checked against this.",
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

const kzUni = (file: string) => `${imageBaseUrl ?? ""}mbbsCollege/kazakhstan/university/${file}`;

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
    featureTags: ["Almaty", "English Track", "Clinical Rotations", "Indian Community"],
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
    featureTags: ["English Medium", "Hospital Network", "Peer Support", "NMC Aligned"],
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
    featureTags: ["International Mix", "English Track", "Karaganda", "Hostel Options"],
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
    featureTags: ["Almaty", "English Program", "Clinical Rotations", "Indian Community"],
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
    id: "kmu",
    name: "Karaganda Medical University",
    abbreviation: "KMU",
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
    rankTag: "Medical faculty — Karaganda",
    headerEmoji: "🩺",
    imageSrc: kzUni("kmu.webp"),
    stats: [
      { label: "Annual fees", value: "~₹2.5–4L/yr" },
      { label: "6-year total", value: "~₹18–28L" },
      { label: "Duration", value: "5–6 Years" },
      { label: "City", value: "Karaganda" },
    ],
    fmge: {
      type: "text",
      text: "Outcomes linked to preparation — map coaching from semester one.",
    },
    description: [
      "Distinct medical-focused institution in Karaganda with strong clinical exposure and international student support.",
    ],
    featureTags: ["Karaganda", "English", "Clinical Skills", "Hostel"],
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
    featureTags: ["Petropavl", "English MD", "Student Support", "NMC Screening"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
];

export const kazakhstanAbroadTopUniversitiesContent: AbroadTopUniversitiesContent = {
  eyebrow: "WHERE TO STUDY",
  titlePrimary: "Top 10 Medical Universities in Kazakhstan",
  titleAccent: "for Indian Students 2026-27",
  intro:
    "NMC-aligned, WHO-listed Kazakh institutions with transparent fee bands and city fit — filter by Almaty, other cities, budget, or licensing focus to shortlist faster.",
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
    title: "Quick Comparison — All 10 Universities",
    disclaimer:
      "Fees are approximate for 2025–26 based on publicly available data. Exact figures vary by year and exchange rate. Verified breakdown provided during free counselling.",
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
        university: "KMU",
        city: "Karaganda",
        established: "1950",
        annualFees: "~₹2.5–4L/yr",
        fmgeRate: "Moderate",
        bestFor: "Medical-focused Karaganda option",
      },
      {
        university: "NKSU",
        city: "Petropavl",
        established: "1937",
        annualFees: "~₹2.5–4L/yr",
        fmgeRate: "Moderate",
        bestFor: "Oldest uni — coldest winters",
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
  eyebrow: "Frequently Asked questions",
  title: "Everything You Need to Know About MBBS in Kazakhstan",
  subtitle:
    "Answers for Indian, Nepali, and Bangladeshi students — NMC compliance, NExT, costs in INR/NPR/BDT, universities, safety, and timelines.",
  items: [
    {
      question:
        "Is MBBS in Kazakhstan valid in India? Can I practise medicine in India after graduating?",
      answer:
        "Yes — if you graduate from an NMC-approved Kazakh university, complete the course duration and internship as per NMC rules applicable at your time of admission, and clear India’s NExT. You then complete the internship and registration steps required by the NMC and state medical councils. Taksheela only shortlists NMC-listed institutions; always re-verify the live list before paying fees.",
    },
    {
      question: "Is NEET mandatory for MBBS in Kazakhstan for Indian students?",
      answer:
        "Yes, for Indian students who plan to practise in India. A valid NEET-UG qualifying score within its 3-year validity is required at admission. Individual Kazakh universities may not set a high percentile, but NEET qualification is the NMC gate for India.",
    },
    {
      question:
        "What is the total cost of MBBS in Kazakhstan in INR, NPR, and BDT?",
      answer:
        "Indicative total 5–6 year all-in: INR ₹18–35 lakhs (tuition + living + insurance + visa + personal). NPR: roughly NPR 45–95 lakh (₹ × ~1.6). BDT: roughly BDT 38–80 lakh (₹ × ~1.35). Exact totals depend on city (Almaty vs regional), hostel choice, and exchange rate.",
    },
    {
      question: "Can students from Nepal and Bangladesh study MBBS in Kazakhstan?",
      answer:
        "Yes. Nepali students typically present NEB (or equivalent) and Bangladeshi students HSC with DGME rules where applicable. Visa and documentation differ by nationality — Taksheela maps embassy steps for each country.",
    },
    {
      question: "Which are the best NMC-approved universities in Kazakhstan for Indian students?",
      answer:
        "Shortlists change with the NMC list — examples include Kazakh National Medical University (Almaty), Astana Medical University, Karaganda State Medical University, South Kazakhstan Medical Academy, Semey State Medical University, and others on the current NMC list. Taksheela verifies each name against the official PDF before you pay.",
    },
    {
      question: "Is MBBS in Kazakhstan better than Georgia or Russia for Indian students?",
      answer:
        "It depends on budget, climate preference, and English-medium fit. Kazakhstan often offers lower total cost than many Georgia options and avoids Russian-language clinical years in many Russian programmes — but winters can be cold and local language support matters for clinics. Taksheela compares your profile on a call.",
    },
    {
      question: "What is NExT and how does it affect Kazakhstan MBBS graduates?",
      answer:
        "NExT is India’s licensing exam pathway for graduates who want to practise in India. You must pass NExT and fulfil internship rules as per NMC notifications. Taksheela orients students from Year 1 on study habits and resources — not a substitute for your own preparation.",
    },
    {
      question: "Can I do my internship only in India after MBBS in Kazakhstan?",
      answer:
        "You must follow the NMC Gazette rules in force at your admission: typically a mandatory internship abroad component is required, then a separate India internship after NExT as per NMC. Your counsellor will map the exact sequence for your university.",
    },
    {
      question: "Is Kazakhstan safe for international students?",
      answer:
        "Kazakhstan hosts large international cohorts; major student cities have hostels, campus security, and Indian food options. As with any country, use common sense, stay in verified housing, and keep emergency contacts — Taksheela shares city-specific pre-departure guidance.",
    },
    {
      question: "When should I apply for the autumn intake?",
      answer:
        "Start counselling 4–6 months before classes: shortlist by April–May, apply by June–July for September intake, leave 4–8 weeks for visa processing. NEET validity and apostille timelines must fit — start early.",
    },
    {
      question: "How do I verify if a Kazakh university is NMC-approved?",
      answer:
        "Download the latest NMC list from nmc.org.in and match the university name exactly. Cross-check WDOMS. Taksheela shares screenshots/PDF of the official list with your offer stage — never rely on verbal promises alone.",
    },
    {
      question: "Are there scholarships for MBBS in Kazakhstan?",
      answer:
        "Yes — possible university merit fee relief, Indian government loan interest subsidies (CSIS, Padho Pardesh, etc.) for eligible students, and occasional university promotions. Availability changes yearly; Taksheela helps document eligibility.",
    },
  ],
};

export const kazakhstanAbroadCtaBannerContent: AbroadCtaBannerContent = {
  countryLabel: "Kazakhstan",
  subtitle:
    "Book your free counselling session. Get a personalised university shortlist, fee breakdown, and eligibility confirmation in 24 hours.",
  primaryCtaLabel: "Book Free Counselling",
  phoneDisplay: "+91 9831241212",
  phoneTel: "+919831241212",
};

export const kazakhstanAbroadQuickFactsContent: AbroadQuickFactItem[] = [
  {
    icon: "🎓",
    label: "Degree Awarded",
    value: "MD / MBBS-equivalent (India pathway)",
    mLabel: "Degree",
    mValue: "MD = MBBS India",
  },
  {
    icon: "⏱️",
    label: "Course Duration",
    value: "5–6 Years (incl. internship per rules)",
    mLabel: "Duration",
    mValue: "5–6 yrs",
  },
  {
    icon: "💰",
    label: "Annual Tuition",
    value: "₹2.25L – ₹5.25L / year (indicative)",
    mLabel: "Tuition / yr",
    mValue: "₹2.25L+",
  },
  {
    icon: "🏠",
    label: "Cost of Living",
    value: "~₹25,000–45,000 / month",
    mLabel: "Living / mo",
    mValue: "₹25–45K/mo",
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
    value: "English (shortlisted universities)",
    mLabel: "Medium",
    mValue: "English",
  },
  {
    icon: "✅",
    label: "Recognised By",
    value: "WHO · NMC (listed) · MoH Kazakhstan",
    mLabel: "Recognised",
    mValue: "WHO · NMC…",
  },
  {
    icon: "👩‍🎓",
    label: "Indian Students",
    value: "12,000+ trend (industry est.)",
    mLabel: "Indians",
    mValue: "12,000+",
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
    value: "Ministry of Healthcare, Kazakhstan",
    mLabel: "Governing body",
    mValue: "MoH RK",
  },
  {
    icon: "📝",
    label: "IELTS / TOEFL",
    value: "Not required at most partner universities",
    mLabel: "IELTS/TOEFL",
    mValue: "Not required",
  },
];

const kazakhstanAbroadWhyChooseMbbsReasons: AbroadWhyChooseMbbsItem[] = [
  {
    icon: "💸",
    title: "Often 3–5× Cheaper Than Indian Private MBBS",
    description:
      "Total investment for many Kazakh English-medium courses stays in the ₹18–35L all-in range (indicative) — far below capitation-heavy Indian private colleges when you shortlist wisely.",
  },
  {
    icon: "💰",
    title: "NMC-Listed Universities — NExT Pathway",
    description:
      "Taksheela recommends only universities on India’s current NMC-approved foreign list. Graduates pursue NExT and registration like other foreign MBBS holders.",
  },
  {
    icon: "🌐",
    title: "English-Medium Tracks",
    description:
      "Many partner universities teach in English for international students, with introductory Kazakh/Russian for daily and clinical communication — no IELTS at several institutions.",
  },
  {
    icon: "🎓",
    title: "Modern Infrastructure & Clinical Rotations",
    description:
      "Larger cities offer updated labs and teaching hospitals; clinical exposure timing varies by university — we explain this before you choose.",
  },
  {
    icon: "🚫",
    title: "No Capitation Route",
    description:
      "Admissions are merit and documentation-led — not donation-driven like many Indian private quotas.",
  },
  {
    icon: "🏥",
    title: "Hospital Training",
    description:
      "Affiliated hospitals support supervised rotations in major specialties as per your university’s curriculum.",
  },
  {
    icon: "🌍",
    title: "Global Pathways After Licensing",
    description:
      "After NExT (India), graduates can explore PG in India or prepare for international licensing exams where eligible.",
  },
  {
    icon: "🛡️",
    title: "Stable Study Destination",
    description:
      "Kazakhstan invests in higher education; Almaty and Nur-Sultan offer cosmopolitan student life with growing Indian communities.",
  },
  {
    icon: "🇳🇵🇧🇩",
    title: "Nepal & Bangladesh Friendly",
    description:
      "Document and visa pathways differ — Taksheela runs separate checklists for NEB and Bangladesh HSC/DGME compliance.",
  },
  {
    icon: "✈️",
    title: "Reachable From India",
    description:
      "One-stop flights via Dubai, Doha, or Istanbul to Almaty/Nur-Sultan — manageable travel for students and parents.",
  },
];

const kazakhstanAbroadWhyChooseMbbsSection: AbroadWhyChooseMbbsSectionContent = {
  eyebrow: "Why English MD in {country}?",
  titleLead: "10 Evidence-Backed Reasons to Study MBBS in ",
  titleTrail: "?",
  subtitle:
    "Practical reasons thousands of Indian students choose Kazakhstan — transparent fees, English tracks, and a clear NExT focus when you prepare from Day 1.",
};

export const kazakhstanAbroadWhyChooseMbbsContent: AbroadWhyChooseMbbsContent = {
  section: kazakhstanAbroadWhyChooseMbbsSection,
  reasons: kazakhstanAbroadWhyChooseMbbsReasons,
};

