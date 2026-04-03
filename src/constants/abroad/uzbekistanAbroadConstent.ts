/**
 * Uzbekistan MBBS abroad — single source of truth for `/mbbs/abroad/uzbekistan` UI copy and structured data.
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

export const uzbekistanAbroadHeroContent: AbroadHeroContent = {
  eyebrow: "Admissions Open · 2026–27 Batch",
  headline: {
    line1: "Study MBBS in",
    line2Accent: "Uzbekistan",
    line3: "— Where Ancient Scholarship Meets Modern Medicine",
  },
  description:
    "Uzbekistan is Central Asia's fastest-rising destination for international medical education. NMC-approved, English-medium, zero donation — with fees starting at ₹2 lakhs per year and a globally recognised degree at the end of it. A proven pathway for students from India, Nepal, and Bangladesh who refuse to compromise on quality or affordability.",
  descriptionMaxLength: 320,
  cta: {
    primaryText: "Book Free Counselling →",
    secondaryText: "View Universities",
    secondaryHref: "#top-universities",
  },
  quickStats: [
    { label: "Annual Fees From", value: "₹2L" },
    { label: "Program Duration", value: "6 Yrs" },
    { label: "NMC-Approved Unis", value: "5+" },
    { label: "Medium of Study", value: "English" },
  ],
  spotlight: {
    value: "₹19–45L",
    caption: "Total 6-year program cost (indicative) · zero donation",
  },
  statGrid: [
    { value: "5+", label: "NMC-approved universities" },
    { value: "$100–120", label: "Monthly living (est.)" },
    { value: "6 Yr", label: "MD Physician (= MBBS)" },
    /** Last card value is replaced by `uzbekistanAbroadHeroFeaturedCount` when used from the page. */
    { value: "10", label: "Featured Universities" },
  ],
};

/** Merges live college count into the hero stat grid (Uzbekistan). */
export function uzbekistanAbroadHeroFeaturedCount(
  featuredCount: number,
  base: AbroadHeroContent = uzbekistanAbroadHeroContent
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

export const uzbekistanAbroadOverviewContent: AbroadOverviewContent = {
  eyebrow: "Overview",
  heading: "MBBS in Uzbekistan — A Complete Picture for 2026–27",
  paragraphs: [
    "Uzbekistan, the doubly landlocked Central Asian republic home to the ancient Silk Road cities of Samarkand, Bukhara, and Tashkent, has quietly become one of the most reliable MBBS abroad destinations for South Asian students. With seven medical institutes operating under the Ministry of Health — five of which are recognised by India's National Medical Commission (NMC) — the country combines genuine academic credibility with a cost structure that is genuinely accessible.",
    "Unlike private colleges in India, admission is merit-based and entirely transparent. There is no donation, no capitation fee, and no management quota. Students who meet the eligibility criteria — 50% PCB in Class 12 and a valid NEET qualifying score — can apply directly, receive an admission letter within 48 hours in many cases, and depart after visa processing.",
    "The 6-year programme (5 academic years + 1 mandatory internship) is taught in English at all NMC-approved universities. Uzbek language is introduced from Year 1 as a compulsory subject, enabling students to communicate meaningfully with local patients during clinical rotations from Year 3 onwards — meeting the NMC's language requirement without any special preparation.",
    "For Indian students who missed a government seat, Nepali students seeking globally recognised credentials, and Bangladeshi students exploring affordable MBBS abroad options, Uzbekistan in 2026 offers the clearest value proposition in Central Asia: real education, real hospitals, global recognition, and a total cost that fits within a practical budget.",
  ],
  officialData: {
    leadBold: "Official snapshot (Uzbekistan MoH / NMC list, 2026–27):",
    textBeforeBold: "{countryName} lists ",
    textBold: "{universityCount}+ medical universities on our featured page",
    textAfterBold:
      " — verify the live NMC PDF before admission. Five core NMC-recognised institutes anchor most Indian intakes; English-medium General Medicine, clinical training from Year 3, and internship structure align with FMGL / NExT planning.",
  },
  mediaPlaceholder: {
    emoji: "🏛️",
    title: "[Uzbekistan Medical University Campus Image]",
    subtitle: "Replace with actual asset",
  },
  recognisedStrip: {
    label: "Recognised by:",
    body: "WHO (WDOMS) · NMC India · FAIMER · ECFMG · Uzbek Ministry of Health — enabling FMGE/NExT (India), USMLE (USA), PLAB (UK), and AMC (Australia) when individual requirements are met.",
  },
};

// --- Common fears (CommonFearsSection) ----------------------------------------

export const uzbekistanAbroadFearsContent: AbroadFearsContent = {
  section: {
    eyebrow: "Challenges & Solutions",
    titleLead: "",
    titleMiddle: " — ",
    titleAccent: "Real Fears & Honest Answers",
    titleTrail: "",
    subtitle:
      "Every student carries doubts before taking the leap. Here is a no-filter breakdown of the most common pain points — and exactly how Taksheela resolves them.",
  },
  painTitle: "Common Pain Points",
  solutionTitle: "Taksheela's Solutions",
  painPoints: [
    {
      icon: "📉",
      title: "FMGE / NExT preparation anxiety",
      description:
        "Students worry whether an Uzbek MBBS degree will prepare them adequately for India's licensing exams after graduation.",
    },
    {
      icon: "🗣️",
      title: "Language barrier in clinical years",
      description:
        "Hospital rotations involve Uzbek-speaking patients. Students from India and Bangladesh fear communication difficulties from Year 3 onwards.",
    },
    {
      icon: "🏫",
      title: "Choosing the wrong university",
      description:
        "With 7+ medical institutes in Uzbekistan, students fear selecting a poorly performing institution with weak FMGE outcomes.",
    },
    {
      icon: "🍲",
      title: "Food & cultural adjustment",
      description:
        "Students from India, Nepal, and Bangladesh worry about familiar food, cultural compatibility, and daily comfort abroad.",
    },
    {
      icon: "💳",
      title: "Fee payment in foreign currency",
      description:
        "Paying fees in USD and managing international remittances confuses many families, especially first-generation study abroad students.",
    },
  ],
  solutions: [
    {
      icon: "🎯",
      title: "FMGE-first university shortlisting",
      description:
        "We guide students exclusively to NMC-compliant institutions with strong clinical training and provide FMGE/NExT coaching resources from Year 1 of the programme.",
    },
    {
      icon: "📚",
      title: "Uzbek language is taught from Year 1",
      description:
        "All NMC-compliant Uzbek universities include Uzbek language as a compulsory subject. Students achieve clinical-level proficiency by Year 3 — exactly as required.",
    },
    {
      icon: "🔍",
      title: "Data-driven university matching",
      description:
        "We evaluate each university on NMC compliance, clinical exposure, infrastructure, Indian student community size, city safety, and fee structure — never on commission.",
    },
    {
      icon: "🏪",
      title: "Indian mess at major universities",
      description:
        "Indian mess facilities are available at Tashkent, Samarkand, Bukhara, and Andijan universities. Halal food is widely available across Uzbekistan. Indian grocery items are easily sourced.",
    },
    {
      icon: "🏦",
      title: "RBI-compliant remittance channels",
      description:
        "Taksheela partners with authorised international payment channels. Semester-wise payment plans are available at select universities, reducing the upfront financial burden.",
    },
  ],
};

// --- Eligibility (EligibilityCriteraAbroad) ----------------------------------------

export const uzbekistanAbroadEligibilityContent: AbroadEligibilityContent = {
  eyebrow: "Eligibility Criteria",
  titleLead: "Who Can Apply — Requirements for MBBS in ",
  titleTrail: " 2026–27",
  subtitle:
    "Eligibility based on current NMC guidelines (2025) and Uzbekistan university requirements for the 2026–27 admissions cycle.",
  tabIndian: "🇮🇳 Indian Students",
  tabNpbd: "🇳🇵 Nepal & 🇧🇩 Bangladesh",
  indian: [
    {
      label: "10+2 with PCB",
      value:
        "Passed Class 12 with Physics, Chemistry, Biology, and English from any recognised board (CBSE, ICSE, State Board).",
    },
    {
      label: "Minimum 50% in PCB (General)",
      value:
        "50% aggregate in Physics, Chemistry, and Biology. SC/ST/OBC category students require 40% aggregate.",
    },
    {
      label: "Valid NEET-UG qualifying score",
      value:
        "A NEET-UG qualifying score from 2024, 2025, or 2026 is mandatory as per NMC's Foreign Medical Graduate Licentiate (FMGL) regulations. No minimum score set by Uzbek universities — NMC qualifying percentile applies.",
    },
    {
      label: "Age: minimum 17 years",
      value:
        "Must be at least 17 years old on or before 31st December of the admission year. No maximum age restriction at most universities.",
    },
    {
      label: "Valid Indian passport",
      value:
        "A valid Indian passport is required at the time of application and must remain valid throughout the stay in Uzbekistan.",
    },
    {
      label: "MEA apostille (pre-departure)",
      value:
        "Academic documents must be apostilled by the Ministry of External Affairs (MEA), India, before applying for the student visa.",
    },
  ],
  nepali: [
    {
      label: "Academic Background",
      value:
        "Completion of +2 Science or equivalent (NEB/HSEB) with Physics, Chemistry, and Biology as core subjects.",
    },
    {
      label: "Minimum Marks",
      value: "50% aggregate in the science subjects for general applicants.",
    },
    {
      label: "Entrance Qualification",
      value:
        "A valid NEET score or the Nepali equivalent national medical entrance test is accepted for admission.",
    },
    {
      label: "Age & Passport",
      value:
        "Minimum 17 years at the time of admission. Valid Nepali passport with sufficient validity to cover the duration of the programme.",
    },
    {
      label: "Language Tests",
      value:
        "None of the NMC-approved Uzbek universities require English language test scores for Nepali applicants.",
    },
  ],
  npbd: [
    {
      label: "Nepal — academic",
      value:
        "+2 Science with PCB (NEB/HSEB or equivalent) with Physics, Chemistry, and Biology as core subjects.",
    },
    {
      label: "Nepal — marks & entrance",
      value:
        "Minimum 50% aggregate in PCB. A valid NEET score or Nepal's national medical entrance test is accepted.",
    },
    {
      label: "Nepal — age, passport & language",
      value:
        "Minimum 17 years. Valid Nepali passport. No IELTS/TOEFL required at NMC-approved Uzbek universities for Nepali applicants.",
    },
    {
      label: "Bangladesh — academic",
      value:
        "Higher Secondary Certificate with Physics, Chemistry, Biology, and English from a recognised Bangladeshi board.",
    },
    {
      label: "Bangladesh — marks & entrance",
      value:
        "Minimum 50% aggregate across PCB in HSC. Review BMDC guidelines for studying abroad; NEET is recommended and admission proceeds on merit.",
    },
    {
      label: "Bangladesh — age, passport & language",
      value:
        "Minimum 17 years. Valid Bangladeshi passport. English proficiency tests not required for English-medium MBBS programmes.",
    },
  ],
 
  specialNotes: [
    {
      code: "NP",
      heading: "Special Note - Nepali Students",
      title: "Why Uzbekistan Works for Nepal Students",
      points: [
        "English-medium MD with affordable total cost — often roughly NPR 28–70 lakh depending on university and city.",
        "Kathmandu document attestation support and NPR forex planning.",
        "Growing Nepali peer network in Tashkent and Samarkand for shared housing and NExT prep.",
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
      title: "Why Uzbekistan Works for Bangladesh Students",
      points: [
        "DGME compliance documentation for return pathways — Taksheela verifies each intake.",
        "Total cost roughly BDT 24–58 lakh; halal food widely available in major Uzbek cities.",
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

export const uzbekistanAbroadAdmissionProcessContent: AbroadAdmissionProcessContent = {
  eyebrow: "Admission Process",
  titleLead: "Step-by-Step Admission for MBBS in ",
  titleAccent: " — 2026–27",
  titleTrail: "",
  subtitle:
    "A transparent, donation-free process from application to arrival in Uzbekistan — typically completed in 4 to 6 weeks.",
  steps: [
    {
      title: "Eligibility check & university selection",
      description:
        "Consult with a Taksheela counsellor to verify NEET score, Class 12 marks, and passport status. Receive a personalised shortlist of NMC-approved Uzbek universities matched to your profile and budget.",
    },
    {
      title: "Submit application to university",
      description:
        "Apply on the chosen university's official portal. Scanned Class 12 marksheet, NEET scorecard, and passport are submitted. Most universities issue an admission letter within 24–48 hours.",
    },
    {
      title: "Admission letter & registration fees",
      description:
        "Accept the offer by paying the registration fee. The university then issues an official Invitation Letter required for the student visa application.",
    },
    {
      title: "MEA apostille your documents",
      description:
        "Get all academic documents apostilled by the Ministry of External Affairs (MEA), India. Mandatory before the visa appointment.",
    },
    {
      title: "Apply for Uzbekistan student visa",
      description:
        "Submit at the Uzbekistan Embassy or Consulate: Invitation Letter, apostilled certificates, passport, photographs, medical certificate, and proof of fee payment. Visa is typically issued within 10–15 working days.",
    },
    {
      title: "Pre-departure briefing with Taksheela",
      description:
        "Packing checklist, arrival protocol, university representative contact, and first-week registration guidance.",
    },
    {
      title: "Arrival & university registration",
      description:
        "Airport pickup (through the university where arranged), hostel check-in, mandatory medical check-up on arrival, visa extension, and academic registration.",
    },
    {
      title: "Classes begin",
      description:
        "Year 1 covers foundational sciences and Uzbek language. Clinical rotations begin from Year 3 in affiliated government hospitals.",
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

export const uzbekistanAbroadConsiderBeforeContent: AbroadConsiderBeforeContent = {
  eyebrow: "Honest Assessment",
  title: "Things to Consider Before Choosing Uzbekistan",
  subtitle:
    "Taksheela believes in full transparency. Here is an honest view of genuine advantages and real challenges — so your decision is fully informed, not just motivated by marketing.",
  advantagesTitle: "Strong Advantages",
  advantages: [
    "Genuinely affordable fees — annual tuition from roughly USD 2,300 (approx. ₹1.9L) with total 6-year investment often ₹19–45 lakhs, far below private MBBS in India. Government-funded universities keep costs structurally low.",
    "NMC, WHO & FAIMER alignment — five core Uzbek medical institutes on India's approved list; degrees recognised by ECFMG and FAIMER for global licensing pathways.",
    "English-medium teaching — no IELTS or TOEFL required. The entire MBBS curriculum is delivered in English at NMC-approved universities.",
    "Zero donation, zero capitation — merit-based admission only. You pay the officially published university fee directly to the institution.",
    "Strong clinical training from Year 3 — large government teaching hospitals with high patient volumes and diverse case exposure.",
    "Globally recognised degree — FMGE/NExT (India), USMLE (USA), PLAB (UK), and AMC (Australia) when individual requirements are met.",
    "Safe, student-friendly country — low crime, respectful culture, and established Indian, Nepali, and Bangladeshi communities in major university cities.",
    "Milder climate than Russia or Kyrgyzstan — continental climate with hot dry summers and mild winters (often 0°C to -5°C at the coldest), easier for South Asian students to adapt.",
  ],
  challengesTitle: "Genuine Challenges",
  challenges: [
    "Continental winters — still require thermals and heating vs tropical home climates.",
    "Uzbek language for clinical communication from Year 3 — compulsory language classes from Year 1 require consistent effort.",
    "USD-quoted fees — plan for currency movement and use RBI-compliant remittance channels.",
    "Cultural adjustment — Uzbek customs differ from South Asia; openness and patience help.",
    "Regional cities may have fewer Indian mess options than Tashkent or Samarkand — confirm food and hostel plans with Taksheela.",
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

export const uzbekistanAbroadCostBreakdownContent: AbroadCostBreakdownContent = {
  eyebrow: "Cost & Fees",
  titlePrimary: "MBBS Uzbekistan Fees",
  titleAccent: "2026–27 — Complete Breakdown in Rupees",
  subtitle:
    "Total cost includes tuition, hostel, food, and living — university-wise comparison for Indian students. For Nepal: multiply ₹ by ~1.6 for NPR. For Bangladesh: multiply ₹ by ~1.35 for BDT.",
  tuitionTableTitle: "University tuition (indicative, USD → ₹ approx.)",
  tuitionColAnnual: "Annual tuition (USD)",
  tuitionColSixYear: "6-year total (₹ approx.)",
  tuitionRows: [
    {
      university: "Fergana Medical Institute of Public Health",
      annualTuition: "~USD 2,300–2,800",
      sixYearTotal: "~₹19–23L",
    },
    {
      university: "Samarkand State Medical University",
      annualTuition: "~USD 3,000–3,400",
      sixYearTotal: "~₹25–28L",
    },
    {
      university: "Tashkent Medical Academy",
      annualTuition: "~USD 3,100–3,500",
      sixYearTotal: "~₹26–29L",
    },
    {
      university: "Bukhara State Medical Institute",
      annualTuition: "~USD 2,700–3,100",
      sixYearTotal: "~₹22–26L",
    },
    {
      university: "Andijan State Medical Institute",
      annualTuition: "~USD 2,500–3,000",
      sixYearTotal: "~₹21–25L",
    },
  ],
  livingTableTitle: "Living & other costs (reference)",
  livingColMonthly: "Monthly (est.)",
  livingColAnnual: "Annual",
  livingRows: [
    {
      item: "University hostel",
      monthly: "~USD 50–67 (~₹4.2K–5.6K)",
      annual: "~USD 600–800",
    },
    {
      item: "Food / living (excl. Indian mess)",
      monthly: "~USD 100–120",
      annual: "~USD 1,200–1,440",
    },
    {
      item: "Indian mess (optional)",
      monthly: "~USD 100",
      annual: "~USD 1,200",
    },
    {
      item: "Health insurance & visa",
      monthly: "varies",
      annual: "budget separately",
    },
    {
      item: "Fee payment note",
      monthly: "—",
      annual:
        "Many families use RBI-authorised remittance; some carry USD for on-arrival university payment — Taksheela guides the compliant route.",
    },
  ],
  summaryCardTitle: "Total 6-year investment",
  summaryLines: [
    {
      label: "Typical all-in range (tuition + hostel + living)",
      value: "₹19L – ₹45L (indicative)",
    },
    {
      label: "Nepal (NPR, ₹ × ~1.6)",
      value: "~NPR 30L–72L total (indicative)",
    },
    {
      label: "Bangladesh (BDT, ₹ × ~1.35)",
      value: "~BDT 26L–61L total (indicative)",
    },
    {
      label: "vs Indian private MBBS (incl. capitation)",
      value: "₹50L – ₹1.5 Crore",
    },
    {
      label: "Uzbekistan advantage",
      value: "zero capitation · zero donation",
    },
  ],
  summaryTotalLabel: "TOTAL 6-YEAR INVESTMENT (EST.)",
  summaryTotalValue: "₹19–45L",
  summaryFootnote:
    "Fees are approximate and subject to annual revision and USD/INR movement. Indian mess ~USD 1,200/year optional at major universities. Semester-wise plans available at select universities. Verify live fee letters before payment.",
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

export const uzbekistanAbroadIntakePeriodContent: AbroadIntakePeriodContent = {
  eyebrow: "MBBS Intake",
  titlePrimary: "MBBS Intake Calendar — Uzbekistan",
  titleAccent: "2026–27",
  primaryCard: {
    icon: "🍂",
    title: "September intake (primary)",
    rows: [
      { label: "Overview", value: "Main annual intake — all five NMC-approved universities admit international students" },
      { label: "Application window", value: "April – August" },
      { label: "Invitation letter", value: "June – August" },
      { label: "Visa processing", value: "2–4 weeks after invitation letter" },
      { label: "Classes begin", value: "September / October" },
      { label: "Recommended departure", value: "September" },
      { label: "Tip", value: "Seats fill by August — apply early" },
    ],
    footerNote:
      "Early application is strongly advised. Indian students: keep NEET within NMC's validity window at application time.",
  },
  secondaryCard: {
    icon: "❄️",
    title: "February intake (winter)",
    rows: [
      { label: "Overview", value: "Secondary intake at select universities (e.g. Navoi, Termez branch, TMA Urgench branch, Bukhara)" },
      { label: "Application window", value: "October – January" },
      { label: "Invitation letter", value: "November – January" },
      { label: "Visa processing", value: "2–4 weeks after letter" },
      { label: "Classes begin", value: "February" },
      { label: "Recommended departure", value: "Late January / February" },
      { label: "Availability", value: "Limited seats — confirm with Taksheela" },
    ],
    footerNote:
      "Good option if you missed September. Verify NEET validity and university availability before paying registration fees.",
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

export const uzbekistanAbroadTeachingMethodologyContent: AbroadTeachingMethodologyContent = {
  eyebrow: "Teaching Methodology",
  titlePrimary: "How MBBS Is Taught in",
  titleAccent: "Uzbekistan",
  intro:
    "NMC-approved universities follow a structured curriculum combining classical theory-heavy foundations with progressive clinical exposure — designed to prepare students for global licensing exams. Medium of instruction is English; Uzbek language classes run concurrently from Year 1.",
  items: [
    {
      icon: "📖",
      title: "Lecture-based foundation (Years 1–2)",
      description:
        "Primarily lecture and laboratory-based. Students build theoretical foundations in Anatomy, Physiology, Biochemistry, and Histology. Uzbek language classes run alongside.",
    },
    {
      icon: "🔬",
      title: "Laboratory & practical training",
      description:
        "Modern laboratories with cadavers, microscopes, models, and simulation equipment. Pre-clinical practical sessions from Year 1 connect theory to application early.",
    },
    {
      icon: "🏥",
      title: "Hospital-based clinical rotations (Year 3+)",
      description:
        "Rotations through Internal Medicine, Surgery, Paediatrics, Gynaecology, Psychiatry, and Community Health in large affiliated government hospitals — high patient volume for real-world skills.",
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

export const uzbekistanAbroadMbbsSyllabusContent: AbroadMbbsSyllabusContent = {
  eyebrow: "Syllabus",
  titlePrimary: "MBBS Uzbekistan Syllabus",
  titleAccent: "— Year-by-Year Breakdown",
  subtitle:
    "The curriculum follows international standards aligned with WHO and NMC guidelines. All subjects are examined in English.",
  footerNote:
    "Year 6 includes supervised internship, state examinations where applicable, and FMGE/NExT-oriented preparation. Confirm your university's exact module names with admissions.",
  years: [
    {
      yearLabel: "Year 1",
      title: "Pre-Clinical — Foundation Sciences",
      description: "",
      subjectTags: [
        "Human Anatomy",
        "Human Physiology",
        "Biochemistry",
        "Histology & Embryology",
        "Uzbek Language",
        "Medical Biology",
      ],
      badgeTone: "primary",
    },
    {
      yearLabel: "Year 2",
      title: "Pre-Clinical — Bridging Sciences",
      description: "",
      subjectTags: [
        "Pathological Anatomy",
        "Pathophysiology",
        "Microbiology & Virology",
        "Pharmacology",
        "Propaedeutics of Internal Diseases",
        "Uzbek Language (advanced)",
      ],
      badgeTone: "primary",
    },
    {
      yearLabel: "Year 3",
      title: "Clinical Begin — Hospital Rotations Start",
      description: "",
      subjectTags: [
        "Internal Medicine I",
        "General Surgery",
        "Neurology",
        "Traumatology & Orthopaedics",
        "Radiology & Imaging",
        "Clinical Pharmacology",
      ],
      badgeTone: "primary",
    },
    {
      yearLabel: "Year 4",
      title: "Clinical — Specialised Departments",
      description: "",
      subjectTags: [
        "Internal Medicine II",
        "Obstetrics & Gynaecology",
        "Paediatrics I",
        "Otorhinolaryngology (ENT)",
        "Ophthalmology",
        "Dermatology & Venereology",
      ],
      badgeTone: "primary",
    },
    {
      yearLabel: "Year 5",
      title: "Advanced Clinical — Complex Systems",
      description: "",
      subjectTags: [
        "Internal Medicine III (Cardiology, Pulmonology)",
        "Paediatrics II (Neonatology)",
        "Psychiatry & Medical Psychology",
        "Oncology",
        "Infectious Diseases",
        "Community & Preventive Medicine",
      ],
      badgeTone: "primary",
    },
    {
      yearLabel: "Year 6",
      title: "Internship — Compulsory Rotatory",
      description: "",
      subjectTags: [
        "Supervised Clinical Internship",
        "Rotations across all major departments",
        "Emergency Medicine",
        "Final State Examinations (where applicable)",
        "Research Thesis / Dissertation",
        "FMGE / NExT Preparation",
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

export const uzbekistanAbroadCompleteComparisonContent: AbroadCompleteComparisonContent = {
  eyebrow: "MBBS India vs Uzbekistan",
  titlePrimary: "Studying MBBS in India vs Uzbekistan",
  titleAccent: "— 2026 Comparison",
  subtitle:
    "A factual comparison for Indian students and families — Uzbekistan column vs India; reference columns for regional context.",
  blockHeading: "India (private) · Uzbekistan · Govt India & regional reference",
  colParameter: "Parameter",
  colFeatured: "🇺🇿 MBBS in Uzbekistan",
  colIndiaGovt: "IN India (Govt. College)",
  colIndiaPrivate: "IN India (Private College)",
  colBangladesh: "🇧🇩 BD Bangladesh",
  colPhilippines: "🇵🇭 PH Philippines",
  rows: [
    {
      parameter: "Total 6-year fee",
      featured: "₹19L – ₹45L (typical all-in, indicative)",
      indiaGovt: "₹5–15L (subsidised)",
      indiaPrivate: "₹50L – ₹1.5 Crore",
      bangladesh: "₹15–30L (typical NMC route)",
      philippines: "₹20–40L (typical)",
    },
    {
      parameter: "Donation / capitation",
      featured: "Zero — strictly prohibited",
      indiaGovt: "None (merit seat)",
      indiaPrivate: "₹20L–₹1Cr+ (common)",
      bangladesh: "None (typical pathway)",
      philippines: "None (typical pathway)",
      isDonationRow: true,
    },
    {
      parameter: "NEET requirement",
      featured: "Qualifying score sufficient (per NMC FMGL)",
      indiaGovt: "Very high rank for govt. seats",
      indiaPrivate: "High score often needed (95th+ percentile for top colleges)",
      bangladesh: "NEET for India-return pathway where applicable",
      philippines: "NEET + school screening",
    },
    {
      parameter: "Seat availability",
      featured: "Wider availability for international students",
      indiaGovt: "~1.18L total seats — extremely competitive",
      indiaPrivate: "Limited + donation-driven",
      bangladesh: "NMC-listed options; merit-based",
      philippines: "City- and school-limited",
    },
    {
      parameter: "Medium of instruction",
      featured: "English (+ Uzbek for clinical communication)",
      indiaGovt: "English + regional languages",
      indiaPrivate: "English (most colleges)",
      bangladesh: "Bengali + English",
      philippines: "English",
    },
    {
      parameter: "International recognition",
      featured: "WHO, NMC, FAIMER, ECFMG (pathway-dependent)",
      indiaGovt: "NMC India",
      indiaPrivate: "NMC India",
      bangladesh: "WHO / BMDC alignment",
      philippines: "WHO / NMC; USMLE culture",
    },
    {
      parameter: "Annual living cost",
      featured: "~₹1.0L – ₹1.5L / year (excl. Indian mess)",
      indiaGovt: "Varies by city",
      indiaPrivate: "₹2.4L – ₹4.8L / year (major cities)",
      bangladesh: "Lower vs major Indian metros (varies)",
      philippines: "Mid-range vs India metros",
    },
    {
      parameter: "Admission transparency",
      featured: "Merit-based, direct application",
      indiaGovt: "Transparent merit",
      indiaPrivate: "Management quota & agents common",
      bangladesh: "Merit + documentation",
      philippines: "School-specific",
    },
    {
      parameter: "Climate",
      featured: "Continental — warm summers, mild winters",
      indiaGovt: "Familiar / tropical",
      indiaPrivate: "Familiar / tropical",
      bangladesh: "Tropical",
      philippines: "Tropical",
    },
    {
      parameter: "Licensing after graduation (India)",
      featured: "FMGE / NExT (same pathway as other foreign MBBS)",
      indiaGovt: "NEET-PG / NExT",
      indiaPrivate: "NEET-PG / NExT",
      bangladesh: "Home licensing + FMGE/NExT if practising in India",
      philippines: "FMGE / NExT for India practice",
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

export const uzbekistanAbroadOurStoriesContent: AbroadOurStoriesContent = {
  eyebrow: "Student Testimonials",
  titlePrimary: "What Our Students Say About MBBS in",
  titleAccent: "Uzbekistan",
  stories: [
    {
      rating: 5,
      quote:
        "I scored 420 in NEET and had zero chance of a government seat. After consulting Taksheela, I joined Samarkand State Medical University. Two years in — the clinical training quality genuinely surprised me. My family is proud and I am on track for FMGE preparation from Year 1.",
      name: "Rohan Mehta",
      meta: "Year 2 · Samarkand State Medical University · Gujarat",
      initial: "R",
    },
    {
      rating: 5,
      quote:
        "As a Nepali student, I was worried about cultural adjustment and food. Tashkent surprised me — there is a large Nepali student group at TMA and Indian food is easily available near campus. The pre-departure briefing from Taksheela made the transition seamless.",
      name: "Sita Karki",
      meta: "Year 3 · Tashkent Medical Academy · Nepal",
      initial: "S",
    },
    {
      rating: 5,
      quote:
        "My parents were nervous about sending me abroad for MBBS. Taksheela explained the NMC rules clearly, helped with visa, arranged airport pickup, and kept checking in during my first semester. The total cost is less than what private colleges in Bangladesh charge as donation alone.",
      name: "Arman Hossain",
      meta: "Year 1 · Bukhara State Medical Institute · Bangladesh",
      initial: "A",
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

export const uzbekistanAbroadAccommodationClimateContent: AbroadAccommodationClimateContent = {
  eyebrow: "Hostel & Climate",
  titlePrimary: "Accommodation & Climate Conditions",
  titleAccent: "in Uzbekistan",
  hostel: {
    title: "Hostel Accommodation",
    bullets: [
      "All NMC-approved Uzbek universities provide on-campus or university-affiliated hostels for international students — typically USD 600–800/year.",
      "Furnished rooms (2–4 students per room) with study tables, cupboards, and beds; RO water and attached bathrooms at most institutions.",
      "Wi-Fi across hostel buildings; 24-hour security and warden supervision.",
      "Indian mess facility available at major university hostels (additional ~USD 1,200/year).",
      "Laundry and common recreation rooms; winter heating systems — essential for cold months.",
      "Private apartments from Year 2 onwards are possible but often cost more — Taksheela recommends Year 1 in hostel for orientation and peer support.",
    ],
  },
  climate: {
    title: "Climate in Uzbekistan",
    intro:
      "Semi-arid continental climate — notably milder than Russia, Kazakhstan, or Kyrgyzstan. Summers are dry and hot (familiar to North India and Bangladesh); winters are cold but not extreme vs Siberia.",
    rows: [
      {
        city: "Winter",
        ranges: "0°C to -5°C — light jacket + thermals sufficient",
      },
      {
        city: "Spring",
        ranges: "15°C to 22°C — pleasant outdoor weather",
      },
      {
        city: "Summer",
        ranges: "30°C to 40°C — hot and dry; stay hydrated",
      },
      {
        city: "Autumn",
        ranges: "12°C to 22°C — ideal for exploring Samarkand & Bukhara",
      },
    ],
    tipLabel: "Taksheela tip",
    tipBody:
      "Central heating is standard in university buildings. Winters are nowhere near -20°C to -30°C as in Russia — most South Asian students adapt within weeks with the right packing list.",
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

export const uzbekistanAbroadKeyFactsContent: AbroadKeyFactsContent = {
  eyebrow: "Uzbekistan at a Glance",
  titlePrimary: "Know Your Destination",
  titleAccent: "— Quick Snapshot",
  items: [
    { icon: "🌍", value: "Central Asia", label: "GEOGRAPHICAL REGION" },
    { icon: "🏙️", value: "Tashkent", label: "CAPITAL CITY" },
    { icon: "👥", value: "36M+", label: "POPULATION (APPROX.)" },
    { icon: "💱", value: "UZS Som", label: "NATIONAL CURRENCY" },
    { icon: "🕌", value: "Muslim majority", label: "HALAL FOOD WIDELY AVAILABLE" },
    { icon: "✈️", value: "5–6 hrs", label: "FLIGHT FROM INDIA (TYPICAL)" },
    { icon: "📚", value: "Very high", label: "LITERACY & EDUCATION CULTURE" },
    { icon: "🛡️", value: "Very safe", label: "LOW CRIME · STUDENT-FRIENDLY CITIES" },
    { icon: "🎓", value: "MD Physician (= MBBS)", label: "DEGREE AWARDED" },
    { icon: "🏛️", value: "5+ NMC-listed core institutes", label: "INDIA RECOGNITION (VERIFY PDF)" },
    { icon: "🚫", value: "Zero donation", label: "ADMISSION MODEL" },
    { icon: "📝", value: "Not required", label: "IELTS / TOEFL" },
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

export const uzbekistanAbroadScholarshipsContent: AbroadScholarshipsContent = {
  eyebrow: "Scholarships",
  title: "Scholarship & Fee Concession Opportunities",
  subtitle:
    "While MBBS in Uzbekistan is already highly affordable, there are additional financial support avenues available to deserving students.",
  cards: [
    {
      iconKey: "graduation",
      title: "Uzbekistan government scholarships",
      description:
        "The Government of Uzbekistan offers a limited number of merit-based scholarships to international students through bilateral academic exchange programmes. Availability and eligibility vary annually — contact Taksheela for current status.",
      bullets: [
        "Merit-based; quota is small — apply early if announced.",
        "Documentation differs from Indian schemes — we map timelines per intake.",
        "Always verify with the university or embassy circular.",
      ],
    },
    {
      iconKey: "building",
      title: "University-specific fee waivers",
      description:
        "Select universities offer partial tuition waivers or first-year fee discounts to high-achieving applicants with strong Class 12 scores and NEET performance.",
      bullets: [
        "Applied alongside the main admission file — not before offer.",
        "Renewable sometimes on GPA — confirm in the offer letter.",
        "Taksheela shortlists universities where waivers are realistic for your profile.",
      ],
    },
    {
      iconKey: "books",
      title: "Indian government / state scholarships",
      description:
        "Students from SC/ST/OBC categories may be eligible for state government post-matric scholarships that can be used toward MBBS abroad fees. Check your state's scholarship portal.",
      bullets: [
        "CSIS / Padho Pardesh-style interest subsidies may apply to education loans for eligible Indian families.",
        "Taksheela assists with documentation where schemes allow MBBS abroad.",
        "State portals change yearly — confirm eligibility before budgeting.",
      ],
    },
    {
      iconKey: "globe",
      title: "Academic performance incentives",
      description:
        "Some Uzbek medical universities reduce tuition for students who maintain high GPA through their programme — rewarding continued excellence.",
      bullets: [
        "Ask admissions if GPA-linked reductions exist for your intake.",
        "Keeps total degree cost lower over six years when applicable.",
        "Combine with disciplined NExT prep for long-term savings on repeat exams.",
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

export const uzbekistanAbroadEducationLoanContent: AbroadEducationLoanContent = {
  eyebrow: "Education Loans",
  title: "Financing Your MBBS in Uzbekistan",
  intro:
    "MBBS in Uzbekistan qualifies for education loans from major Indian banks. The total cost of ₹19–45 lakhs makes repayment manageable on a doctor's salary when planned early.",
  nationalised: {
    title: "Nationalised bank loans",
    description: "SBI, Bank of Baroda, and other nationalised banks offer MBBS abroad loans at roughly 8–11% p.a. (floating).",
    bullets: [
      "Loans up to ₹20 lakhs may not require collateral — above that, property/LIC often required.",
      "Moratorium typically covers study duration + 6–12 months after completion.",
      "Taksheela helps compile a lender-ready file: admission letter, fee schedule, course duration, NMC proof.",
    ],
  },
  privateNbfc: {
    title: "Private banks, NBFCs & study-loan platforms",
    description: "HDFC, Axis, ICICI, Avanse, HDFC Credila, Propelld — faster processing with flexible collateral.",
    bullets: [
      "Interest often 10–14% p.a. — profile-dependent.",
      "Some products offer up to ₹40 lakhs for overseas medical education.",
      "NBFCs may process faster than public-sector banks for urgent cases.",
    ],
  },
  support: {
    title: "Documents typically required",
    description:
      "University admission letter, fee structure, Class 10 and 12 certificates, NEET scorecard, passport, income proof of parent/guardian, bank statements (6 months), collateral documents if applicable. Taksheela's loan advisors help compile and review before submission.",
  },
};

// --- Career opportunities after MBBS (TeachingMethodologyAbroad — same content shape) ---

/** Same shape as `AbroadTeachingMethodologyContent` so one component can render both sections. */
export const uzbekistanAbroadCareerOpportunitiesContent: AbroadTeachingMethodologyContent = {
  eyebrow: "Career Opportunities",
  titlePrimary: "Your Career After MBBS in",
  titleAccent: "Uzbekistan",
  intro:
    "A degree from an NMC-approved Uzbek medical university opens multiple career pathways globally — from practising in India to postgraduate training in the USA, UK, and beyond.",
  items: [
    {
      icon: "🇮🇳",
      title: "Practice medicine in India",
      description:
        "Pass FMGE or NExT to obtain NMC registration. Work as a registered medical practitioner in India's public and private healthcare sector.",
    },
    {
      icon: "🎓",
      title: "PG / MD in India",
      description:
        "Appear for NEET-PG / INI-CET after registration to pursue MD/MS/DNB specialisation across disciplines.",
    },
    {
      icon: "🇺🇸",
      title: "USMLE — USA",
      description:
        "FAIMER-listed Uzbek universities can support USMLE Steps 1, 2 & 3 eligibility — the pathway to US residency when individual requirements are met.",
    },
    {
      icon: "🇬🇧",
      title: "PLAB — UK",
      description:
        "WHO-listed degree qualifies for PLAB — the standard entry route for international medical graduates to the NHS.",
    },
    {
      icon: "🇦🇺",
      title: "AMC — Australia",
      description:
        "ECFMG-recognised degrees may be eligible for Australian Medical Council exams — pathway to Australia and New Zealand when requirements are met.",
    },
    {
      icon: "🌏",
      title: "Uzbekistan & Central Asia",
      description:
        "Graduates may also pursue Uzbek state licensing and postgraduate training or clinical roles within Uzbekistan and the broader Central Asian region.",
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

export const uzbekistanAbroadWhyChooseTaksheelaContent: AbroadWhyChooseTaksheelaContent = {
  eyebrow: "Why Choose Taksheela",
  titlePrimary: "Why Students from India, Nepal & Bangladesh Trust",
  titleAccent: "Taksheela",
  subtitle:
    "Taksheela Institute of Education is a Kolkata-headquartered study abroad consultancy with offices across major Indian cities, specialising in MBBS abroad placements.",
  items: [
    {
      icon: "🔍",
      title: "100% transparent shortlisting",
      description:
        "We never recommend universities on commission. Every shortlist is based on NMC compliance, FMGE/NExT readiness, clinical infrastructure, and your specific profile.",
    },
    {
      icon: "📋",
      title: "End-to-end admission support",
      description:
        "From eligibility check to application, MEA apostille, visa filing, pre-departure briefing, and arrival support — we handle every step.",
    },
    {
      icon: "🌐",
      title: "On-ground representatives",
      description:
        "Our representatives in Uzbekistan assist with airport pickup coordination, hostel check-in, medical check-up, visa extension, and first-semester orientation.",
    },
    {
      icon: "📚",
      title: "FMGE / NExT preparation guidance",
      description:
        "We guide students on FMGE/NExT preparation strategy from Year 1, including recommended resources, test schedules, and coaching programmes.",
    },
    {
      icon: "💳",
      title: "Fee remittance assistance",
      description:
        "We connect families with RBI-authorised international remittance partners and education loan advisors — making the financial process clear and stress-free.",
    },
    {
      icon: "🤝",
      title: "Post-admission support",
      description:
        "Our relationship does not end at admission. We assist with annual visa renewals, fee payment reminders, and licensing milestones throughout the programme.",
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

export const uzbekistanAbroadRegulatoryFrameworkContent: AbroadRegulatoryFrameworkContent = {
  eyebrow: "NMC Gazette & Compliance",
  titlePrimary: "NMC Foreign Medical Graduate Licentiate (FMGL)",
  titleAccent: "— What Indian Students Must Know",
  subtitle:
    "The National Medical Commission (NMC) of India sets binding requirements for students studying MBBS abroad. Non-compliance disqualifies graduates from practising medicine in India. Taksheela advisors stay updated with NMC circulars.",
  rules: [
    {
      icon: "📋",
      title: "NEET-UG qualifying score",
      description:
        "Mandatory before starting MBBS abroad for Indian students (FMGL Regulations). Admissions in 2026 require a valid NEET from the allowed windows — verify current NMC validity rules.",
    },
    {
      icon: "🌐",
      title: "WDOMS / FAIMER listing",
      description:
        "The foreign university must appear in the World Directory of Medical Schools (FAIMER). Cross-check every intake before paying fees.",
    },
    {
      icon: "📅",
      title: "54 months + 12-month internship",
      description:
        "Minimum 54 months of academic study plus 12 months compulsory clinical internship — six years total in line with NMC expectations for foreign MBBS.",
    },
    {
      icon: "📝",
      title: "NExT (National Exit Test)",
      description:
        "Students must pass India's licensing examination (NExT replaces FMGE over time per NMC roadmap) to obtain registration to practise in India after graduation.",
    },
    {
      icon: "🏥",
      title: "India internship (where applicable)",
      description:
        "A compulsory one-year internship in India after graduation may be required for certain batches under updated NMC directives — monitor official notifications.",
    },
    {
      icon: "🎓",
      title: "Recognised Uzbek degree",
      description:
        "The degree must be equivalent to Indian MBBS and awarded by a university recognised under Uzbek law. Shortlist only NMC-listed institutions on the live PDF.",
    },
  ],
  officialSourcesLabel: "Official Sources",
  officialLinks: [
    { label: "NMC India", href: "https://www.nmc.org.in" },
    { label: "WHO Directory", href: "https://www.wdoms.org" },
    { label: "Uzbekistan (gov.uz)", href: "https://gov.uz/en" },
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

/** CDN assets — aligned with `mbbs.js` Uzbekistan college images (`uz1.png` … `uz10.png`). */
const uzImg = (n: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10) =>
  `${imageBaseUrl ?? ""}mbbsCollege/uzbekistan/uz${n}.png`;

export const uzbekistanTopUniversityCards: AbroadTopUniversityCard[] = [
  {
    id: "tma",
    name: "Tashkent Medical Academy",
    abbreviation: "TMA",
    established: "1919",
    locationLine: "Tashkent",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 30,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Flagship", variant: "amber" },
    ],
    rankTag: "Historic national medical academy — Tashkent",
    headerEmoji: "🏛️",
    imageSrc: uzImg(1),
    stats: [
      { label: "Annual tuition (USD)", value: "$3,100–3,500" },
      { label: "6-year total (₹)", value: "~₹26–29L" },
      { label: "Duration", value: "6 Years" },
      { label: "Medium", value: "English" },
    ],
    fmge: {
      type: "text",
      text: "Flagship capital campus — verify NMC listing each intake; strong Indian peer network for FMGE/NExT prep.",
    },
    description: [
      "Tashkent Medical Academy — historic national medical academy; English track with strong teaching hospitals (aligns with Tashkent State Medical University ecosystem).",
    ],
    featureTags: ["Tashkent", "English Track", "Clinical Rotations", "Indian Community"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "ssmi",
    name: "Samarkand State Medical University",
    abbreviation: "SSMU",
    established: "1930",
    locationLine: "Samarkand",
    region: "other",
    budgetFriendly: false,
    fmgePercent: 30,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Silk Road", variant: "amber" },
    ],
    rankTag: "UNESCO city — established institute",
    headerEmoji: "🕌",
    imageSrc: uzImg(2),
    stats: [
      { label: "Annual tuition (USD)", value: "$3,000–3,400" },
      { label: "6-year total (₹)", value: "~₹25–28L" },
      { label: "Duration", value: "6 Years" },
      { label: "City", value: "Samarkand" },
    ],
    fmge: {
      type: "text",
      text: "Oldest and most prestigious Uzbek medical institution — pair disciplined NExT prep with clinical years.",
    },
    description: [
      "UNESCO heritage city; oldest and most prestigious medical university — popular with South Asian students.",
    ],
    featureTags: ["Samarkand", "English Medium", "Peer Support", "NMC Aligned"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "asmi",
    name: "Andijan State Medical Institute",
    abbreviation: "ASMI",
    established: "1955",
    locationLine: "Andijan",
    region: "other",
    budgetFriendly: true,
    fmgePercent: 29,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Fergana Valley", variant: "amber" },
    ],
    rankTag: "Fergana Valley — value intake",
    headerEmoji: "🎓",
    imageSrc: uzImg(3),
    stats: [
      { label: "Annual tuition (USD)", value: "$2,500–3,000" },
      { label: "6-year total (₹)", value: "~₹21–25L" },
      { label: "Duration", value: "6 Years" },
      { label: "City", value: "Andijan" },
    ],
    fmge: {
      type: "text",
      text: "Pioneer Fergana Valley college — verify NMC PDF before fees.",
    },
    description: [
      "Pioneer medical college of the Fergana Valley — affordable English-medium intake.",
    ],
    featureTags: ["Andijan", "English Track", "Budget", "Hostel Options"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "bsmi",
    name: "Bukhara State Medical Institute",
    abbreviation: "BSMI",
    established: "1990",
    locationLine: "Bukhara",
    region: "other",
    budgetFriendly: false,
    fmgePercent: 29,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Heritage City", variant: "amber" },
    ],
    rankTag: "Historic Bukhara — cultural hub",
    headerEmoji: "🏛️",
    imageSrc: uzImg(4),
    stats: [
      { label: "Annual tuition (USD)", value: "$2,700–3,100" },
      { label: "6-year total (₹)", value: "~₹22–26L" },
      { label: "Duration", value: "6 Years" },
      { label: "Medium", value: "English" },
    ],
    fmge: {
      type: "text",
      text: "Well-established with strong clinical affiliations — map NExT prep from Year 1.",
    },
    description: [
      "Well-established institute with strong clinical affiliations and growing international cohort.",
    ],
    featureTags: ["Bukhara", "English Program", "Clinical Training", "NMC"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "ksmi",
    name: "Karakalpak State Medical Institute",
    abbreviation: "KSMI",
    established: "1979",
    locationLine: "Nukus",
    region: "other",
    budgetFriendly: true,
    fmgePercent: 28,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Northwest", variant: "amber" },
    ],
    rankTag: "Aral region — verify climate fit",
    headerEmoji: "📚",
    imageSrc: uzImg(5),
    stats: [
      { label: "Annual fees", value: "~₹2–3.5L/yr" },
      { label: "6-year total", value: "~₹16–24L" },
      { label: "Duration", value: "5–6 Years" },
      { label: "City", value: "Nukus" },
    ],
    fmge: {
      type: "text",
      text: "Pair early NExT planning with clinical years — confirm listing before fees.",
    },
    description: [
      "Budget-friendly option in northwest Uzbekistan; smaller city with lower living costs vs Tashkent.",
    ],
    featureTags: ["Nukus", "Value", "English Track", "NMC Pathway"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "fsumf",
    name: "Fergana Medical Institute of Public Health",
    abbreviation: "FMIPH",
    established: "1920",
    locationLine: "Fergana",
    region: "other",
    budgetFriendly: true,
    fmgePercent: 28,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Regional Hub", variant: "amber" },
    ],
    rankTag: "Fergana — practical clinical focus",
    headerEmoji: "🏫",
    imageSrc: uzImg(6),
    stats: [
      { label: "Annual tuition (USD)", value: "$2,300–2,800" },
      { label: "6-year total (₹)", value: "~₹19–23L" },
      { label: "Duration", value: "6 Years" },
      { label: "Medium", value: "English" },
    ],
    fmge: {
      type: "text",
      text: "Government Ministry of Health UZ — lowest fee band on many shortlists; confirm internship mapping.",
    },
    description: [
      "Government university, Ministry of Health — popular value intake in Fergana.",
    ],
    featureTags: ["Fergana", "English MD", "Hostel", "Peer Network"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "nsmi",
    name: "Namangan State Medical Institute",
    abbreviation: "NSMI",
    established: "1993",
    locationLine: "Namangan",
    region: "other",
    budgetFriendly: true,
    fmgePercent: 29,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Budget-Friendly", variant: "rose" },
    ],
    rankTag: "Fergana region — affordable",
    headerEmoji: "🌍",
    imageSrc: uzImg(7),
    stats: [
      { label: "Annual fees", value: "~₹2–3.5L/yr" },
      { label: "6-year total", value: "~₹16–26L" },
      { label: "Duration", value: "5–6 Years" },
      { label: "Students", value: "Int'l mix" },
    ],
    fmge: {
      type: "text",
      text: "Popular with South Asian students — verify latest NMC listing before fees.",
    },
    description: [
      "Growing Indian and Bangladeshi cohorts; milder winters than northern steppe cities.",
    ],
    featureTags: ["Namangan", "Affordable", "Indian Community", "English"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "tsumf",
    name: "Termez Branch — Tashkent State Medical University",
    abbreviation: "TSMU-T",
    established: "1992",
    locationLine: "Termez",
    region: "other",
    budgetFriendly: true,
    fmgePercent: 28,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "South", variant: "amber" },
    ],
    rankTag: "Southern border city — warm climate",
    headerEmoji: "⚖️",
    imageSrc: uzImg(8),
    stats: [
      { label: "Annual tuition (USD)", value: "$2,500–3,000" },
      { label: "6-year total (₹)", value: "~₹21–25L" },
      { label: "Duration", value: "6 Years" },
      { label: "Intake", value: "Feb option" },
    ],
    fmge: {
      type: "text",
      text: "Winter intake available — warm southern climate; confirm NMC listing.",
    },
    description: [
      "Termez branch of Tashkent State Medical University — winter intake option; lower living costs.",
    ],
    featureTags: ["Termez", "Value", "Clinical Training", "NMC"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "usumf",
    name: "Urgench State University — Medical Faculty",
    abbreviation: "USUMF",
    established: "1991",
    locationLine: "Urgench",
    region: "other",
    budgetFriendly: true,
    fmgePercent: 28,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Khorezm", variant: "amber" },
    ],
    rankTag: "Khorezm region — value option",
    headerEmoji: "🩺",
    imageSrc: uzImg(9),
    stats: [
      { label: "Annual fees", value: "~₹2–3.5L/yr" },
      { label: "6-year total", value: "~₹16–26L" },
      { label: "Duration", value: "5–6 Years" },
      { label: "City", value: "Urgench" },
    ],
    fmge: {
      type: "text",
      text: "Outcomes linked to preparation — map coaching from semester one.",
    },
    description: [
      "Medical faculty attracting international students seeking affordable total cost near Khiva.",
    ],
    featureTags: ["Urgench", "English", "Clinical Skills", "Hostel"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "tpmi",
    name: "Tashkent Pediatric Medical Institute",
    abbreviation: "TPMI",
    established: "1972",
    locationLine: "Tashkent",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 30,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Paediatrics Focus", variant: "amber" },
    ],
    rankTag: "Capital — paediatrics strength",
    headerEmoji: "✨",
    imageSrc: uzImg(10),
    stats: [
      { label: "Annual fees", value: "~₹2.5–4L/yr" },
      { label: "6-year total", value: "~₹18–28L" },
      { label: "Duration", value: "5–6 Years" },
      { label: "Founded", value: "1972" },
    ],
    fmge: {
      type: "text",
      text: "Strong paediatrics exposure — same NExT pathway as other Uzbek MD degrees.",
    },
    description: [
      "Specialised institute in Tashkent with English track and growing Indian student community.",
    ],
    featureTags: ["Tashkent", "English MD", "Student Support", "NMC Screening"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
];

export const uzbekistanAbroadTopUniversitiesContent: AbroadTopUniversitiesContent = {
  eyebrow: "Top Universities",
  titlePrimary: "NMC-Approved Medical Universities in Uzbekistan",
  titleAccent: "2026–27",
  intro:
    "Government-run, NMC-recognised English-medium MBBS with clinical training in affiliated teaching hospitals. Fees below are indicative in USD — verify the live fee letter before payment.",
  cardWatermarkCode: "UZ",
  filters: [
    { id: "all", label: "All Universities" },
    { id: "moscow", label: "Tashkent" },
    { id: "other", label: "Other Cities" },
    { id: "budget", label: "Budget-Friendly" },
    { id: "top_fmge", label: "Top FMGE Rate" },
  ],
  topFmgeFilterIds: ["tma", "ssmi"],
  universities: uzbekistanTopUniversityCards,
  quickComparison: {
    title: "Quick Comparison — Fees (USD, indicative)",
    disclaimer:
      "Fees are approximate for 2026–27; USD/INR varies. Exact figures and NMC status must be verified before payment. Free counselling includes a line-by-line fee sheet.",
    rows: [
      {
        university: "TMA",
        city: "Tashkent",
        established: "1919",
        annualFees: "$3,100–3,500",
        fmgeRate: "~₹26–29L",
        fmgeHighlight: true,
        bestFor: "Capital flagship",
      },
      {
        university: "SSMU",
        city: "Samarkand",
        established: "1930",
        annualFees: "$3,000–3,400",
        fmgeRate: "~₹25–28L",
        fmgeHighlight: true,
        bestFor: "Oldest medical university",
      },
      {
        university: "BSMI",
        city: "Bukhara",
        established: "1990",
        annualFees: "$2,700–3,100",
        fmgeRate: "~₹22–26L",
        bestFor: "Heritage city · clinical ties",
      },
      {
        university: "ASMI",
        city: "Andijan",
        established: "1955",
        annualFees: "$2,500–3,000",
        fmgeRate: "~₹21–25L",
        bestFor: "Fergana Valley value",
      },
      {
        university: "FMIPH",
        city: "Fergana",
        established: "1991",
        annualFees: "$2,300–2,800",
        fmgeRate: "~₹19–23L",
        bestFor: "Lowest fee band",
      },
      {
        university: "TSMU-T",
        city: "Termez",
        established: "—",
        annualFees: "$2,500–3,000",
        fmgeRate: "~₹21–25L",
        bestFor: "Winter intake · warm south",
      },
      {
        university: "KSMI",
        city: "Nukus",
        established: "1979",
        annualFees: "~USD 2–3.5K",
        fmgeRate: "Value NW",
        bestFor: "Northwest budget",
      },
      {
        university: "NSMI",
        city: "Namangan",
        established: "1993",
        annualFees: "~USD 2–3.5K",
        fmgeRate: "Fergana",
        bestFor: "Affordable option",
      },
      {
        university: "USUMF",
        city: "Urgench",
        established: "1991",
        annualFees: "~USD 2–3.5K",
        fmgeRate: "Khorezm",
        bestFor: "Regional value",
      },
      {
        university: "TPMI",
        city: "Tashkent",
        established: "1972",
        annualFees: "~USD 2.5–4K",
        fmgeRate: "Paediatrics",
        bestFor: "Capital · child health focus",
      },
    ],
  },
};

// --- FAQ — Uzbekistan MBBS (FAQPage schema / AI-optimised) ----------------------------

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

export const uzbekistanAbroadFaqPageContent: AbroadFaqPageContent = {
  eyebrow: "FAQs",
  title: "Frequently Asked Questions — MBBS in Uzbekistan 2026",
  subtitle:
    "Answers to the most common questions from students in India, Nepal, and Bangladesh considering MBBS in Uzbekistan.",
  items: [
    {
      question: "Is MBBS from Uzbekistan valid in India?",
      answer:
        "Yes. Degrees from NMC-listed Uzbek medical universities are recognised in India. After graduation, students must pass the FMGE or NExT licensing examination to obtain NMC registration and practise medicine in India. All five universities highlighted on our counselling shortlists are verified against the current NMC PDF — always re-check before paying fees.",
    },
    {
      question: "Is NEET compulsory for MBBS in Uzbekistan?",
      answer:
        "Yes, for Indian students. As per NMC's Foreign Medical Graduate Licentiate (FMGL) Regulations 2021, all Indian students pursuing MBBS abroad must hold a valid NEET-UG qualifying score at the time of admission. The score must be from 2024, 2025, or 2026 per typical validity windows — confirm against the latest NMC notice. Uzbek universities usually do not set a minimum NEET score beyond NMC's qualifying percentile.",
    },
    {
      question: "What is the total cost of MBBS in Uzbekistan?",
      answer:
        "The total cost of a 6-year MBBS in Uzbekistan ranges from approximately ₹19 lakhs to ₹45 lakhs depending on the university. This includes tuition (USD 2,300–3,500/yr), hostel (USD 600–800/yr), and estimated living expenses (USD 100–120/month). Indian mess is available at approximately USD 1,200/year at major campuses. No donation or capitation applies.",
    },
    {
      question: "Is Uzbekistan safe for Indian students?",
      answer:
        "Yes. Uzbekistan consistently ranks among the safer MBBS abroad destinations — low crime, CCTV coverage in major cities, and a government that welcomes international students. Tashkent, Samarkand, Bukhara, Andijan, and Fergana have established Indian student communities that support newcomers.",
    },
    {
      question: "Is food a problem for Indian students in Uzbekistan?",
      answer:
        "No. Indian mess facilities are available at all major NMC-approved Uzbek universities. As a Muslim-majority country, halal food is widely available. Indian grocery items are available in major cities. Most students adapt comfortably within the first few weeks.",
    },
    {
      question: "How many intakes are there for MBBS in Uzbekistan per year?",
      answer:
        "Two intakes: September (primary — all NMC-approved universities) and February (winter — select universities such as Navoi State University, Bukhara, TMA Urgench branch, Termez branch). September is recommended for most students.",
    },
    {
      question: "What is the FMGE pass rate for Uzbekistan graduates?",
      answer:
        "NMC does not publish a single country-level FMGE pass rate for Uzbekistan alone. Outcomes depend on university quality and preparation from Year 1 — which is why Taksheela's FMGE-first shortlisting and coaching orientation matter.",
    },
    {
      question: "Can Nepali and Bangladeshi students also study MBBS in Uzbekistan?",
      answer:
        "Yes. Nepali students can use a valid NEET score or Nepal's national medical entry test. Bangladeshi students should confirm BMDC guidelines for studying abroad before applying. No IELTS or TOEFL is required at NMC-approved Uzbek universities for these nationalities in most cases.",
    },
  ],
};

export const uzbekistanAbroadCtaBannerContent: AbroadCtaBannerContent = {
  countryLabel: "Uzbekistan",
  subtitle:
    "Speak with a Taksheela counsellor today — free of charge, no pressure, just honest guidance. Seats for the September 2026 intake are filling fast.",
  primaryCtaLabel: "Book Free Counselling",
  phoneDisplay: "+91 9831241212",
  phoneTel: "+919831241212",
};

export const uzbekistanAbroadQuickFactsContent: AbroadQuickFactItem[] = [
  {
    icon: "🎓",
    label: "Degree Awarded",
    value: "MD Physician (MBBS equivalent)",
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
    icon: "📅",
    label: "Intakes",
    value: "September (primary) · February (winter)",
    mLabel: "Intakes",
    mValue: "Sep · Feb",
  },
  {
    icon: "🧾",
    label: "Eligibility",
    value: "50% PCB in 10+2 + NEET qualified",
    mLabel: "Eligibility",
    mValue: "50% PCB + NEET",
  },
  {
    icon: "🌐",
    label: "Medium",
    value: "English + Uzbek (from Year 1)",
    mLabel: "Medium",
    mValue: "English",
  },
  {
    icon: "💰",
    label: "Annual Tuition",
    value: "USD 2,300 – 3,500 per year",
    mLabel: "Tuition / yr",
    mValue: "USD 2.3–3.5K",
  },
  {
    icon: "🏠",
    label: "Hostel (annual)",
    value: "USD 600 – 800 per year",
    mLabel: "Hostel",
    mValue: "USD 600–800",
  },
  {
    icon: "✅",
    label: "Recognised By",
    value: "WHO · NMC · ECFMG · FAIMER",
    mLabel: "Recognised",
    mValue: "Multi-body",
  },
  {
    icon: "🏛️",
    label: "NMC-Compliant Universities",
    value: "5 government medical institutes (core list)",
    mLabel: "NMC unis",
    mValue: "5+",
  },
  {
    icon: "📝",
    label: "IELTS / TOEFL",
    value: "Not required",
    mLabel: "IELTS/TOEFL",
    mValue: "Not required",
  },
  {
    icon: "🌡️",
    label: "Climate",
    value: "Continental — hot summers, mild winters",
    mLabel: "Climate",
    mValue: "Continental",
  },
  {
    icon: "🍛",
    label: "Indian Food",
    value: "Available — Indian mess at major unis",
    mLabel: "Food",
    mValue: "Indian mess",
  },
];

const uzbekistanAbroadWhyChooseMbbsReasons: AbroadWhyChooseMbbsItem[] = [
  {
    icon: "💸",
    title: "Genuinely affordable fees — no hidden costs",
    description:
      "Annual tuition starts at USD 2,300 (approx. ₹1.9 lakhs), making the 6-year total ₹19–45 lakhs — far below private MBBS in India. Government-funded universities keep costs structurally low year after year.",
  },
  {
    icon: "✅",
    title: "NMC, WHO & FAIMER approved",
    description:
      "Five Uzbek medical institutes are on India's NMC-approved list; degrees are also recognised by ECFMG and FAIMER for global medical licensing pathways when requirements are met.",
  },
  {
    icon: "🌐",
    title: "English-medium teaching — no IELTS required",
    description:
      "The entire MBBS curriculum is delivered in English at NMC-approved universities. No IELTS or TOEFL score is required for admission.",
  },
  {
    icon: "🚫",
    title: "Zero donation, zero capitation",
    description:
      "Admission is purely merit-based. No management quota, no under-the-table payment — you pay only the officially published university fee directly to the institution.",
  },
  {
    icon: "🏥",
    title: "Strong clinical training from Year 3",
    description:
      "Students rotate through large government teaching hospitals affiliated with their universities, gaining exposure to diverse patients and high case volumes — critical for licensing exams.",
  },
  {
    icon: "🌍",
    title: "Globally recognised degree",
    description:
      "Graduates from NMC-listed Uzbek universities can pursue FMGE/NExT (India), USMLE (USA), PLAB (UK), and AMC (Australia) — building a global career from one qualification.",
  },
  {
    icon: "🛡️",
    title: "Safe, student-friendly country",
    description:
      "Low crime rate, respectful culture, and government infrastructure supportive of international students. Indian, Nepali, and Bangladeshi communities are well established in major university cities.",
  },
  {
    icon: "☀️",
    title: "Milder climate than Russia or Kyrgyzstan",
    description:
      "Continental climate — hot dry summers and mild winters (often 0°C to -5°C at the coldest) — significantly easier to adapt to for students from South Asia.",
  },
];

const uzbekistanAbroadWhyChooseMbbsSection: AbroadWhyChooseMbbsSectionContent = {
  eyebrow: "Why Uzbekistan",
  titleLead: "8 Compelling Reasons to Study MBBS in ",
  titleTrail: "",
  subtitle:
    "Evidence-backed reasons why Uzbekistan is the right MBBS abroad choice for students from India, Nepal and Bangladesh in 2026.",
};

export const uzbekistanAbroadWhyChooseMbbsContent: AbroadWhyChooseMbbsContent = {
  section: uzbekistanAbroadWhyChooseMbbsSection,
  reasons: uzbekistanAbroadWhyChooseMbbsReasons,
};

