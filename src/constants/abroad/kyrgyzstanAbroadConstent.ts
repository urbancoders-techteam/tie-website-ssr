/**
 * Kyrgyzstan MBBS abroad — single source of truth for `/mbbs/abroad/kyrgyzstan` UI copy and structured data.
 * Types mirror Georgia/Russia; shared imports from `russiaAbroadConstent`.
 */

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
  quickStats: [
    AbroadHeroStatPair,
    AbroadHeroStatPair,
    AbroadHeroStatPair,
    AbroadHeroStatPair,
  ];
  /** Large highlighted stat on the right */
  spotlight: AbroadHeroSpotlight;
  /** Four smaller cards under the spotlight */
  statGrid: [
    AbroadHeroGridCard,
    AbroadHeroGridCard,
    AbroadHeroGridCard,
    AbroadHeroGridCard,
  ];
};

export const kyrgyzstanAbroadHeroContent: AbroadHeroContent = {
  eyebrow: "Admissions Open · September & February 2026 Intake",
  headline: {
    line1: "Study MBBS in",
    line2Accent: "Kyrgyzstan",
    line3: "Central Asia's Most Affordable Path to a Global Medical Degree",
  },
  description:
    "Kyrgyzstan is one of the world's most budget-friendly MBBS abroad destinations — offering NMC-approved, English-medium programmes at government universities where total six-year costs start below ₹15 lakhs. Over 16,000 Indian students are currently enrolled. Zero donation, zero capitation, and a globally recognised degree that qualifies graduates for FMGE, NExT, USMLE, and PLAB. For students from India, Nepal, and Bangladesh who deserve quality medicine without financial strain, Kyrgyzstan makes the dream genuinely reachable.",
  descriptionMaxLength: 260,
  cta: {
    primaryText: "Book Free Counselling →",
    secondaryText: "View Universities",
    secondaryHref: "#universities",
  },
  quickStats: [
    { label: "Total Cost From", value: "₹15L" },
    { label: "Indian Students Enrolled", value: "16,000+" },
    { label: "NMC-Approved Unis", value: "10+" },
    { label: "Medium of Instruction", value: "English" },
  ],
  spotlight: {
    value: "16,000+",
    caption: "Indian students currently enrolled",
  },
  statGrid: [
    { value: "₹15–30L", label: "Total 6-year programme cost" },
    { value: "$120–150", label: "Monthly living cost" },
    { value: "Zero", label: "Donation / capitation" },
    /** Last card value is replaced by `kyrgyzstanAbroadHeroFeaturedCount` when used from the page. */
    { value: "10+", label: "NMC-Approved Universities" },
  ],
};

/** Merges live college count into the hero stat grid (Kyrgyzstan). */
export function kyrgyzstanAbroadHeroFeaturedCount(
  featuredCount: number,
  base: AbroadHeroContent = kyrgyzstanAbroadHeroContent,
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
  heading: "MBBS in Kyrgyzstan — A Complete Picture for 2026–27",
  paragraphs: [
    "Kyrgyzstan — a landlocked Central Asian republic nestled in the Tian Shan mountain range — has steadily grown into one of the most preferred MBBS abroad destinations for South Asian students. With over 10 medical universities operating under the Kyrgyz Ministries of Health and Education, and more than 16,000 Indian students currently enrolled across these institutions, the country has built a mature, well-supported ecosystem for international medical education.",
    "What makes Kyrgyzstan stand out is a combination that is genuinely rare at the global level: NMC compliance, English-medium instruction, zero donation fees, and a total six-year programme cost that in many cases falls below ₹20 lakhs. For families in India, Nepal, and Bangladesh where aspiring doctors cannot access government seats or afford ₹80 lakh–₹1.5 crore private college donations, Kyrgyzstan transforms an otherwise closed door into a fully open, legitimate pathway.",
    "The academic calendar runs on the European semester model. Clinical training begins from Year 3 at affiliated government hospitals, providing meaningful patient exposure in real hospital environments. Kyrgyz language and Russian are introduced from Year 1 as compulsory subjects, equipping students to communicate with local patients during rotations — meeting NMC's language requirement naturally through the curriculum design.",
    "All NMC-approved Kyrgyz universities are listed on the World Directory of Medical Schools (WDOMS) maintained by FAIMER. Degrees are recognised by WHO, ECFMG, and WFME — enabling graduates to pursue FMGE/NExT in India, USMLE in the USA, and PLAB in the UK. For students from Nepal and Bangladesh, the programme represents one of the most cost-effective and globally portable medical degrees available anywhere in the world.",
  ],
  officialData: {
    leadBold: "At a Glance · 2026–27:",
    textBeforeBold: "{countryName} hosts ",
    textBold: "{universityCount}+ medical universities under the Ministries of Health and Education",
    textAfterBold:
      " with 16,000+ Indian students currently enrolled across institutions.",
  },
  mediaPlaceholder: {
    emoji: "🏛️",
    title: "[Kyrgyzstan Medical University Campus Image]",
    subtitle: "Replace with actual asset",
  },
  recognisedStrip: {
    label: "Recognised by:",
    body: "WHO (WDOMS) · NMC India · FAIMER · ECFMG · WFME",
  },
};

// --- Common fears (CommonFearsSection) ----------------------------------------

export const kyrgyzstanAbroadFearsContent: AbroadFearsContent = {
  section: {
    eyebrow: "Challenges & Solutions",
    titleLead: "Real Fears. Straight Answers.",
    titleMiddle: " — ",
    titleAccent: "",
    titleTrail: "",
    subtitle:
      "Honest breakdown of the concerns every student carries — and exactly how Taksheela resolves each one.",
  },
  painTitle: "⚠️ Common Pain Points",
  solutionTitle: "✅ Taksheela's Solutions",
  painPoints: [
    {
      icon: "❄️",
      title: "Harsh Winter Climate",
      description:
        "Bishkek and Osh can drop to -10°C to -20°C in winter. Students from tropical South Asia worry about health, warmth, and acclimatisation.",
    },
    {
      icon: "📉",
      title: "FMGE Preparation Anxiety",
      description:
        "Students fear that Kyrgyz MBBS may not prepare them adequately for India's licensing exams, citing overall FMGE pass rate concerns.",
    },
    {
      icon: "🗣️",
      title: "Language Barrier",
      description:
        "Clinical rotations involve Kyrgyz and Russian-speaking patients. Students from India and Bangladesh fear communication breakdowns from Year 3 onwards.",
    },
    {
      icon: "🏫",
      title: "Overcrowded Universities",
      description:
        "Kyrgyzstan's low fees attract large international student numbers. Some students worry about classroom overcrowding and diluted clinical exposure.",
    },
    {
      icon: "💳",
      title: "Fee Payment Abroad",
      description:
        "Paying annual fees in USD and managing cross-border remittances is a genuine logistical challenge for many Indian and Bangladeshi families.",
    },
  ],
  solutions: [
    {
      icon: "🏠",
      title: "Pre-Departure Winter Readiness Kit",
      description:
        "Taksheela provides a detailed packing checklist with winter essentials. All university hostels have central heating. Students adapt within 2–3 weeks, supported by established Indian communities.",
    },
    {
      icon: "🎯",
      title: "FMGE-First University Selection",
      description:
        "We shortlist only universities where NMC compliance, hospital quality, and student-teacher ratios support strong exam preparation. FMGE coaching resources are integrated from Year 1.",
    },
    {
      icon: "📚",
      title: "Language Training Is Part of the Curriculum",
      description:
        "Kyrgyz and Russian language classes are compulsory from Year 1 at all NMC-approved universities. Clinical-level proficiency is naturally built into the programme before hospital rotations begin.",
    },
    {
      icon: "🔍",
      title: "Batch-Size-Aware University Matching",
      description:
        "Taksheela evaluates each university's international student intake, student-teacher ratio, and hospital affiliation before recommending it. We never recommend solely on the basis of low fees.",
    },
    {
      icon: "🏦",
      title: "RBI-Compliant Fee Transfer Support",
      description:
        "We guide families through authorised USD remittance channels. Semester-wise fee payment is available at several universities, reducing the upfront burden significantly.",
    },
  ],
};

// --- Eligibility (EligibilityCriteraAbroad) ----------------------------------------

export const kyrgyzstanAbroadEligibilityContent: AbroadEligibilityContent = {
  eyebrow: "Who Can Apply",
  titleLead: "Who Can Apply — Requirements by Country",
  titleTrail: " 2026–27",
  subtitle:
    "Eligibility based on NMC's 2025 FMGL guidelines and Kyrgyz university requirements for 2026–27 admissions.",
  tabIndian: "🇮🇳 Indian Students",
  tabNpbd: "🇳🇵 🇧🇩 Nepal & Bangladesh",
  indian: [
    {
      label: "10+2 with PCB",
      value:
        "Passed Class 12 with Physics, Chemistry, Biology, and English from any recognised board (CBSE, ICSE, State Board).",
    },
    {
      label: "Minimum 50% in PCB (General)",
      value:
        "50% aggregate in Physics, Chemistry, and Biology. SC/ST/OBC category students require 40% aggregate as per NMC norms.",
    },
    {
      label: "Valid NEET-UG Qualifying Score",
      value:
        "NEET-UG qualifying score from 2024, 2025, or 2026 is mandatory per NMC's FMGL Regulations. No minimum score beyond the qualifying percentile.",
    },
    {
      label: "Age: Minimum 17 Years",
      value:
        "Must be at least 17 years old on or before 31st December of the year of admission. No upper age limit.",
    },
    {
      label: "Valid Indian Passport",
      value:
        "A valid Indian passport with sufficient remaining validity is required at the time of application and throughout the programme.",
    },
    {
      label: "MEA Apostille (Mandatory)",
      value:
        "All academic documents must be apostilled by the Ministry of External Affairs (MEA), India, before applying for the Kyrgyzstan student visa.",
    },
  ],
  nepali: [
    {
      label: "+2 Science with PCB",
      value:
        "+2 Science (NEB/HSEB) with Physics, Chemistry, and Biology as core subjects from a recognised Nepali board.",
    },
    {
      label: "Minimum 50% in Science Subjects",
      value: "50% aggregate in the core PCB subjects for general category applicants.",
    },
    {
      label: "NEET or Equivalent Accepted",
      value:
        "A valid NEET score or the Nepali national medical entrance test both qualify for admission at NMC-approved Kyrgyz universities.",
    },
    {
      label: "Age: Minimum 17 Years",
      value: "Must be 17 years or older at the time of enrolment.",
    },
    {
      label: "Valid Nepali Passport",
      value:
        "A valid Nepali passport with sufficient validity is required for visa application and university admission.",
    },
    {
      label: "No IELTS / TOEFL Required",
      value:
        "English proficiency test scores are not required for admission to English-medium MBBS at NMC-approved Kyrgyz universities.",
    },
  ],
  npbd: [
    {
      label: "HSC with PCB",
      value:
        "Higher Secondary Certificate with Physics, Chemistry, Biology, and English from a recognised Bangladeshi education board.",
    },
    {
      label: "Minimum 50% in PCB",
      value: "50% aggregate in Physics, Chemistry, and Biology in the HSC examination.",
    },
    {
      label: "Medical Entrance Qualification",
      value:
        "BMDC guidelines for studying abroad should be reviewed before applying. Admission proceeds on academic merit for Bangladeshi students.",
    },
    {
      label: "Age: Minimum 17 Years",
      value:
        "Must be 17 years or older at the time of enrolment at the Kyrgyz medical university.",
    },
    {
      label: "Valid Bangladeshi Passport",
      value:
        "A valid passport from Bangladesh is required for visa processing and university registration in Kyrgyzstan.",
    },
    {
      label: "No IELTS / TOEFL Required",
      value:
        "No English language proficiency test is required for admission to English-medium MBBS programmes in Kyrgyzstan.",
    },
  ],
  specialNotes: [
    {
      code: "NP",
      heading: "Special Note - Nepali Students",
      title: "Why Kyrgyzstan Works for Nepal Students",
      points: [
        "All NMC-approved Kyrgyz universities accept students from Nepal.",
        "Nepali students may use a valid NEET score or Nepal's national medical entrance test.",
        "No IELTS or TOEFL is required for English-medium programmes.",
        "Taksheela has successfully placed students from Nepal in Kyrgyzstan.",
      ],
      footerTitle: "Note:",
      footerText:
        "Admission and licensing requirements can change. Students should verify home-country rules before applying.",
      accentClass: "border-[#00B94A] text-[#2C9B5D]",
      noteBgClass: "bg-[#F1FAF4] border-[#D6EEDF]",
    },
    {
      code: "BD",
      heading: "Special Note - Bangladeshi Students",
      title: "Why Kyrgyzstan Works for Bangladesh Students",
      points: [
        "All NMC-approved Kyrgyz universities accept students from Bangladesh.",
        "Bangladeshi students should review BMDC guidelines before applying.",
        "No IELTS or TOEFL is required for English-medium programmes.",
        "Taksheela has successfully placed students from Bangladesh in Kyrgyzstan.",
      ],
      footerTitle: "Note:",
      footerText:
        "Admission and licensing requirements can change. Students should verify home-country rules before applying.",
      accentClass: "border-[#0066FF] text-[#285F9A]",
      noteBgClass: "bg-[#F2F7FE] border-[#D6E3F5]",
    },
  ],
};

// --- Admission process (AdmissionProcessAbroad) ------------------------------------

export const kyrgyzstanAbroadAdmissionProcessContent: AbroadAdmissionProcessContent =
  {
  eyebrow: "Step by Step",
  titleLead: "Step-by-Step: How to Secure MBBS Admission in ",
  titleAccent: "Kyrgyzstan 2026",
  titleTrail: "",
  subtitle:
    "A straightforward, donation-free process from first enquiry to first day of classes — typically completed in 4–6 weeks.",
  steps: [
    {
      title: "Free Eligibility & Counselling Session",
      description:
        "Consult with a Taksheela counsellor to verify NEET score, Class 12 marks, and passport validity. Receive a personalised shortlist of NMC-approved Kyrgyz universities matched to your profile, city preference, and budget.",
    },
    {
      title: "Submit University Application",
      description:
        "Apply on the chosen university's official admissions portal. Scanned copies of Class 12 marksheet, NEET scorecard, and passport are submitted. Most universities confirm applications within 24–48 hours.",
    },
    {
      title: "Receive Admission Letter",
      description:
        "Once the university reviews your documents, an official Admission Letter is issued. This letter confirms your seat and is required to initiate the Invitation Letter process for visa application.",
    },
    {
      title: "Pay Registration Fee",
      description:
        "A nominal registration fee is paid to confirm acceptance of the offer. The university then issues an official Invitation Letter — the key document required for the Kyrgyzstan student visa application.",
    },
    {
      title: "MEA Apostille Your Documents",
      description:
        "All academic documents (Class 10, Class 12, birth certificate) must be apostilled by the Ministry of External Affairs (MEA), India. Taksheela's team guides the apostille process to avoid errors or delays.",
    },
    {
      title: "Apply for Kyrgyzstan Student Visa",
      description:
        "Submit the visa application at the Kyrgyz Embassy or designated Visa Application Centre. Required: Invitation Letter, apostilled certificates, valid passport, photographs, medical fitness certificate, and proof of financial capacity. Processing typically takes 10–15 working days.",
    },
    {
      title: "Pre-Departure Orientation with Taksheela",
      description:
        "Attend Taksheela's mandatory pre-departure session. Receive a packing list (winter clothing essentials), arrival protocol, university contact details, and the Bishkek/Osh representative's emergency number.",
    },
    {
      title: "Arrive, Register & Begin Classes",
      description:
        "Arrive at your university. A representative assists with medical check-up (mandatory on arrival), visa extension, hostel check-in, and academic registration. Classes begin within the first week of the intake month.",
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
  eyebrow: "Cost & Fees",
  titlePrimary: "MBBS Kyrgyzstan Fees 2026–27",
  titleAccent: "— Complete Breakdown in Rupees",
  subtitle:
    "Total programme cost including tuition, hostel, and estimated living — a university-wise comparison for students from India, Nepal, and Bangladesh.",
  tuitionTableTitle: "University-wise cost (indicative)",
  tuitionColAnnual: "Annual Tuition",
  tuitionColSixYear: "6-Year Total",
  tuitionRows: [
    {
      university: "Osh State University / Jalal-Abad State",
      annualTuition: "USD 3,500–4,200",
      sixYearTotal: "₹15–22L",
    },
    {
      university: "Kyrgyz State Medical Academy (KSMA)",
      annualTuition: "USD 4,200–5,000",
      sixYearTotal: "₹22–27L",
    },
    {
      university: "ISM / IHSM — International Schools",
      annualTuition: "USD 4,800–6,000",
      sixYearTotal: "₹26–32L",
    },
  ],
  livingTableTitle: "Key yearly heads (indicative)",
  livingColMonthly: "Monthly (est.)",
  livingColAnnual: "Annual",
  livingRows: [
    {
      item: "Living cost (food, transport, misc.)",
      monthly: "USD 120–150",
      annual: "USD 1,440–1,800",
    },
    {
      item: "Hostel",
      monthly: "—",
      annual: "USD 1,200–1,800",
    },
    {
      item: "Indian mess",
      monthly: "—",
      annual: "USD 1,500/yr (compulsory Yr 1 at most unis)",
    },
    {
      item: "Fee payment note (India)",
      monthly: "—",
      annual:
        "Standard method: carry USD cash and pay after arrival; some unis allow bank transfers. Semester-wise fee payment available at several universities.",
    },
  ],
  summaryCardTitle: "Total 6-year programme cost",
  summaryLines: [
    {
      label: "Total 6-year cost range (indicative)",
      value: "₹15L – ₹30L",
    },
    {
      label: "Annual tuition range",
      value: "USD 3,500–6,000",
    },
    {
      label: "Monthly living cost",
      value: "USD 120–150",
    },
  ],
  summaryTotalLabel: "TOTAL 6-YEAR PROGRAMME COST (EST.)",
  summaryTotalValue: "₹15–30L",
  summaryFootnote:
    "Fees are approximate and subject to annual revision. All amounts calculated at prevailing USD/INR exchange rates. Indian mess costs an additional USD 1,500/year and is compulsory in Year 1 at most universities.",
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
  eyebrow: "MBBS Intake",
  titlePrimary: "MBBS Intake Calendar",
  titleAccent: "— Kyrgyzstan 2026–27",
  primaryCard: {
    icon: "🍂",
    title: "September Intake (Primary)",
    rows: [
      { label: "Application Window", value: "April – August" },
      { label: "Invitation Letter Issued", value: "June – August" },
      { label: "Visa Processing", value: "10–15 working days" },
      { label: "Classes Begin", value: "September / October" },
      { label: "Recommended Departure", value: "September" },
    ],
    footerNote:
      "The main annual admission cycle for MBBS in Kyrgyzstan. All 10+ NMC-approved universities enrol international students in September. Applications open from April onwards — early applications are strongly recommended as seats fill up through July–August.",
  },
  secondaryCard: {
    icon: "❄️",
    title: "February Intake (Secondary)",
    rows: [
      { label: "Application Window", value: "October – January" },
      { label: "Invitation Letter Issued", value: "November – January" },
      { label: "Visa Processing", value: "10–15 working days" },
      { label: "Classes Begin", value: "February" },
      { label: "Recommended Departure", value: "Late January / early February" },
    ],
    footerNote:
      "A second intake cycle is available at several universities including KSMA, ISM, Osh State, and IHSM. Suitable for students who missed the September cycle or require additional time for documentation preparation.",
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
  eyebrow: "Teaching Methodology",
  titlePrimary: "How MBBS Is Taught in",
  titleAccent: "Kyrgyzstan",
  intro:
    "NMC-approved Kyrgyz universities follow a structured pedagogical model influenced by European and Russian academic traditions — with a practical, hospital-centred approach from Year 3.",
  items: [
    {
      icon: "📖",
      title: "Lecture & Laboratory-Based Foundation",
      description:
        "Years 1 and 2 build theoretical foundations through structured lectures, laboratory sessions, and cadaver dissection. Students are assessed through semester examinations in English. Kyrgyz/Russian language training runs concurrently from Day 1.",
    },
    {
      icon: "🔬",
      title: "Simulation & Pre-Clinical Practice",
      description:
        "Modern simulation labs, anatomy models, microscopy, and histology equipment allow students to develop practical skills before entering hospital settings. Student-to-teacher ratios at top universities range from 10:1 to 15:1.",
    },
    {
      icon: "🏥",
      title: "Hospital Clinical Rotations",
      description:
        "From Year 3, students rotate through government teaching hospitals across Internal Medicine, Surgery, Paediatrics, Obstetrics, Neurology, Psychiatry, and Community Health. High patient volumes and diverse disease exposure support strong FMGE/NExT preparation.",
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
  eyebrow: "Syllabus",
  titlePrimary: "MBBS Kyrgyzstan Syllabus",
  titleAccent: "— Year-by-Year Breakdown",
  subtitle:
    "Aligned with WHO and NMC standards. All examinations conducted in English across all NMC-approved Kyrgyz medical universities.",
  years: [
    {
      yearLabel: "Year 1",
      title: "Pre-Clinical — Foundational Sciences",
      description: "",
      subjectTags: [
        "Human Anatomy",
        "Human Physiology",
        "Biochemistry",
        "Medical Biology & Genetics",
        "Histology & Embryology",
        "Kyrgyz / Russian Language",
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
        "Propaedeutics of Internal Medicine",
        "Kyrgyz / Russian (advanced)",
      ],
      badgeTone: "primary",
    },
    {
      yearLabel: "Year 3",
      title: "Clinical Begins — Hospital Rotations Start",
      description: "",
      subjectTags: [
        "Internal Medicine I",
        "General Surgery",
        "Neurology",
        "Radiology & Imaging Diagnostics",
        "Clinical Pharmacology",
        "Traumatology & Orthopaedics",
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
        "Ophthalmology",
        "ENT (Otorhinolaryngology)",
        "Dermatology & STDs",
      ],
      badgeTone: "primary",
    },
    {
      yearLabel: "Year 5",
      title: "Advanced Clinical — Complex & Systemic",
      description: "",
      subjectTags: [
        "Internal Medicine III (Cardiology)",
        "Paediatrics II (Neonatology)",
        "Psychiatry & Medical Psychology",
        "Oncology",
        "Infectious Diseases",
        "Public Health & Epidemiology",
      ],
      badgeTone: "primary",
    },
    {
      yearLabel: "Year 6",
      title: "Internship — Compulsory Rotatory Clinical",
      description: "",
      subjectTags: [
        "Supervised Hospital Internship",
        "Rotations across all departments",
        "Emergency Medicine",
        "State Licensing Examinations",
        "Research Dissertation / Thesis",
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

export const kyrgyzstanAbroadCompleteComparisonContent: AbroadCompleteComparisonContent =
  {
    eyebrow: "MBBS India vs Kyrgyzstan",
    titlePrimary: "Studying MBBS in India vs Kyrgyzstan",
    titleAccent: "— 2026 Comparison",
    subtitle:
      "A factual, side-by-side breakdown to help Indian students and their families make a clear-headed, informed decision.",
    blockHeading: "India (Private) vs Kyrgyzstan — key parameters",
    colParameter: "Parameter",
    colFeatured: "🇰🇬 MBBS in Kyrgyzstan",
    colIndiaGovt: "",
    colIndiaPrivate: "🇮🇳 MBBS in India (Private)",
    colBangladesh: "",
    colPhilippines: "",
    rows: [
      {
        parameter: "Total 6-Year Fee",
        indiaPrivate: "₹50L – ₹1.5 Crore",
        featured: "₹15L – ₹30L",
        indiaGovt: "",
        bangladesh: "",
        philippines: "",
      },
      {
        parameter: "Donation / Capitation",
        indiaPrivate: "₹20L – ₹1Cr+ (widespread)",
        featured: "Zero — strictly prohibited",
        indiaGovt: "",
        bangladesh: "",
        philippines: "",
        isDonationRow: true,
      },
      {
        parameter: "NEET Requirement",
        indiaPrivate: "High score needed (95th+ percentile for good college)",
        featured: "Only qualifying score (40th–50th percentile)",
        indiaGovt: "",
        bangladesh: "",
        philippines: "",
      },
      {
        parameter: "Seat Availability",
        indiaPrivate: "~1.18 lakh seats — extremely competitive",
        featured: "Wider international seats availability",
        indiaGovt: "",
        bangladesh: "",
        philippines: "",
      },
      {
        parameter: "Medium of Instruction",
        indiaPrivate: "English",
        featured: "English (+ Kyrgyz/Russian for clinical)",
        indiaGovt: "",
        bangladesh: "",
        philippines: "",
      },
      {
        parameter: "International Recognition",
        indiaPrivate: "India primarily",
        featured: "WHO, NMC, FAIMER, ECFMG, WFME (global)",
        indiaGovt: "",
        bangladesh: "",
        philippines: "",
      },
      {
        parameter: "Annual Living Cost",
        indiaPrivate: "₹2.4L – ₹4.8L/year (metro cities)",
        featured: "~₹1.0L – ₹1.5L/year",
        indiaGovt: "",
        bangladesh: "",
        philippines: "",
      },
      {
        parameter: "Admission Transparency",
        indiaPrivate: "Management quota & agents common",
        featured: "Merit-based, direct application",
        indiaGovt: "",
        bangladesh: "",
        philippines: "",
      },
      {
        parameter: "Climate",
        indiaPrivate: "Tropical / familiar",
        featured: "Cold winters (-10°C to -20°C), warm summers",
        indiaGovt: "",
        bangladesh: "",
        philippines: "",
      },
      {
        parameter: "Indian Student Community",
        indiaPrivate: "Domestic",
        featured: "16,000+ students — well-established",
        indiaGovt: "",
        bangladesh: "",
        philippines: "",
        isSummaryRow: true,
      },
      {
        parameter: "Licensing in India",
        indiaPrivate: "NEET-PG / NExT",
        featured: "FMGE / NExT (same pathway)",
        indiaGovt: "",
        bangladesh: "",
        philippines: "",
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
  titlePrimary: "What Our Students Say About MBBS in",
  titleAccent: "Kyrgyzstan",
  stories: [
    {
      rating: 5,
      quote:
        "I scored 435 in NEET and private colleges in Rajasthan wanted ₹70 lakh in donation. Taksheela showed me KSMA — NMC-approved, English medium, total cost under ₹25 lakhs. I've been in Bishkek for two years and the clinical training is genuinely strong. My family is relieved and I am on track.",
      name: "Priya Sharma",
      meta: "Year 2 · Kyrgyz State Medical Academy · Jaipur, Rajasthan",
      initial: "P",
    },
    {
      rating: 5,
      quote:
        "As a Nepali student, I was concerned about finding familiar food and adjusting to the cold. Bishkek surprised me completely — there is a big Nepali student group at ISM and Indian mess is available on campus. The Taksheela pre-departure briefing prepared me for everything. No regrets at all.",
      name: "Bibek Tamang",
      meta: "Year 3 · International School of Medicine · Kathmandu, Nepal",
      initial: "B",
    },
    {
      rating: 5,
      quote:
        "My parents wanted me to study in India but couldn't afford private college fees. Taksheela explained the NMC rules clearly, arranged my visa support, and connected me with the Osh State University representative. The MBBS here costs less than one semester's donation at a private Bangladeshi college. I'm in my final year now.",
      name: "Nadia Rahman",
      meta: "Year 5 · Osh State University · Dhaka, Bangladesh",
      initial: "N",
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
  eyebrow: "Hostel & Climate",
  titlePrimary: "Accommodation & Climate Conditions",
  titleAccent: "in Kyrgyzstan",
  hostel: {
    title: "Hostel Accommodation",
    bullets: [
      "All NMC-approved Kyrgyz universities provide on-campus or closely affiliated hostel accommodation for international students at an annual cost of USD 1,200–1,800.",
      "Furnished rooms (2–4 students per room) with study tables, cupboards, and beds.",
      "Central heating — essential for Bishkek winters (standard in all hostels).",
      "Wi‑Fi connectivity across hostel and academic buildings.",
      "24-hour security, CCTV surveillance, and warden supervision.",
      "Indian mess facility available (USD 1,500/yr — compulsory in Year 1 at most unis).",
      "Gym, recreation rooms, and outdoor sports facilities.",
      "Canteen with halal and vegetarian food options on campus.",
    ],
  },
  climate: {
    title: "Climate in Kyrgyzstan",
    intro:
      "Kyrgyzstan has a continental climate — characterised by cold winters and warm summers.",
    rows: [
      {
        city: "Winter",
        ranges: "-10°C to -20°C",
      },
      {
        city: "Spring",
        ranges: "10°C to 18°C",
      },
      {
        city: "Summer",
        ranges: "25°C to 35°C",
      },
      {
        city: "Autumn",
        ranges: "8°C to 18°C",
      },
    ],
    tipLabel: "Taksheela City Tip",
    tipBody:
      "Winters are cold but shorter and less extreme than Russia or Kazakhstan. Osh (southern Kyrgyzstan) has a milder climate than Bishkek — winters are less harsh. Pack thermal innerwear, a quality winter jacket, gloves, and winter boots for December–February. Taksheela provides a detailed pre-departure winter clothing list to all admitted students.",
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
    {
      icon: "🎓",
      value: "MD Physician (MBBS equivalent)",
      label: "DEGREE AWARDED",
    },
    {
      icon: "⏱️",
      value: "6 Years (5 academic + 1 internship)",
      label: "DURATION",
    },
    { icon: "📅", value: "September · February", label: "INTAKES" },
    {
      icon: "🧾",
      value: "50% PCB in 10+2 + NEET qualified",
      label: "ELIGIBILITY",
    },
    {
      icon: "🌐",
      value: "English + Kyrgyz/Russian (from Year 1)",
      label: "MEDIUM",
    },
    {
      icon: "💰",
      value: "USD 3,500 – 6,000 per year",
      label: "ANNUAL TUITION",
    },
    {
      icon: "🏠",
      value: "USD 1,200 – 1,800 per year",
      label: "HOSTEL (ANNUAL)",
    },
    {
      icon: "✅",
      value: "WHO · NMC · ECFMG · FAIMER · WFME",
      label: "RECOGNISED BY",
    },
    {
      icon: "👥",
      value: "16,000+ currently enrolled",
      label: "INDIAN STUDENTS",
    },
    { icon: "📝", value: "Not required", label: "IELTS / TOEFL" },
    {
      icon: "🌡️",
      value: "Continental — cold winters, warm summers",
      label: "CLIMATE",
    },
    {
      icon: "🍛",
      value: "Available — Indian mess at all major unis",
      label: "INDIAN FOOD",
    },
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
  eyebrow: "Scholarships",
  title: "Scholarship & Financial Assistance Options",
  subtitle:
    "While MBBS in Kyrgyzstan is already one of the most affordable medical degrees globally, there are additional financial support avenues available to deserving students.",
  cards: [
    {
      iconKey: "graduation",
      title: "Kyrgyz Government Scholarships",
      description:
        "The Government of Kyrgyzstan offers limited scholarships through bilateral academic exchange programmes. These are merit-based and available to students from specific partner countries. Contact Taksheela for current eligibility and availability.",
      bullets: [],
    },
    {
      iconKey: "building",
      title: "University Performance Incentives",
      description:
        "Several universities — including KSMA and ISM — offer fee reductions or second-year waivers to students who achieve consistently high GPA scores. Academic excellence during the first year often opens this opportunity.",
      bullets: [],
    },
    {
      iconKey: "books",
      title: "Indian State Government Scholarships",
      description:
        "Students from SC/ST/OBC/EWS categories may be eligible for state government post-matric scholarships that can be applied toward MBBS abroad costs. Taksheela's team assists with documentation and scholarship application.",
      bullets: [],
    },
    {
      iconKey: "globe",
      title: "Taksheela Partner Discount",
      description:
        "Through long-standing relationships with partner universities, Taksheela students may benefit from waived registration fees or preferential hostel arrangements not available through direct applications. Enquire during your counselling session.",
      bullets: [],
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
  eyebrow: "Education Loans",
  title: "How to Finance MBBS in Kyrgyzstan — Education Loan Guide",
  intro:
    "MBBS in Kyrgyzstan qualifies for education loans from major Indian banks. The total cost of ₹15–30 lakhs makes loan repayment very manageable on a physician's income.",
  nationalised: {
    title: "Nationalised Bank Loans (SBI, BoB, Canara)",
    description:
      "SBI, Bank of Baroda, and other public sector banks offer MBBS abroad education loans at 8–11% per annum. Loans up to ₹20 lakhs are often available without collateral. Above ₹20 lakhs, property or LIC policy may be required as security. Moratorium period covers the study duration plus 6–12 months post-completion.",
    bullets: [
      "Interest: 8–11% p.a. (bank-specific)",
      "Up to ₹20L often without collateral",
      "Above ₹20L: collateral may be required",
      "Moratorium: study period + 6–12 months",
    ],
  },
  privateNbfc: {
    title: "Private Bank Loans (HDFC, Axis, ICICI)",
    description:
      "Private banks process faster than nationalised banks and offer loans up to ₹40 lakhs for overseas medical education. Interest rates are slightly higher (10–14%). Collateral requirements are often more flexible. HDFC Credila and Avanse specialise specifically in study abroad loans.",
    bullets: [
      "Loan amount: up to ₹40L (bank-specific)",
      "Interest: 10–14% p.a. (bank-specific)",
      "Faster processing vs PSU banks",
      "HDFC Credila and Avanse specialise in study abroad loans",
    ],
  },
  support: {
    title: "Documents Required for Loan",
    description:
      "University Admission / Invitation Letter, official fee structure, Class 10 and 12 certificates, NEET scorecard, valid passport, 6-month bank statement of parent/guardian, income proof, and collateral documents (if loan exceeds ₹20 lakhs). Taksheela's education finance advisors assist with the complete documentation set.",
  },
};

// --- Career opportunities after MBBS (TeachingMethodologyAbroad — same content shape) ---

/** Same shape as `AbroadTeachingMethodologyContent` so one component can render both sections. */
export const kyrgyzstanAbroadCareerOpportunitiesContent: AbroadTeachingMethodologyContent = {
  eyebrow: "After graduation",
  titlePrimary: "Career Pathways After MBBS in",
  titleAccent: "Kyrgyzstan",
  intro:
    "A WHO-listed, NMC-approved degree from Kyrgyzstan unlocks multiple global career pathways for graduates from India, Nepal, and Bangladesh.",
  items: [
    {
      icon: "🇮🇳",
      title: "Practise in India",
      description:
        "Pass FMGE or NExT to receive NMC registration. Practise as a registered medical professional in India's expanding public and private healthcare sector.",
    },
    {
      icon: "🎓",
      title: "PG / Specialisation in India",
      description:
        "After NMC registration, appear for NEET-PG or INI-CET to pursue MD/MS/DNB specialisations across all clinical disciplines in India.",
    },
    {
      icon: "🇺🇸",
      title: "USMLE — Practice in USA",
      description:
        "FAIMER/ECFMG-listed Kyrgyz universities qualify graduates to sit USMLE Steps 1, 2CK, and 2CS — the established pathway to US medical residency and practice.",
    },
    {
      icon: "🇬🇧",
      title: "PLAB — NHS, United Kingdom",
      description:
        "WHO-listed degree qualifies for PLAB (Professional and Linguistic Assessments Board) — the standard entry route for international medical graduates entering the UK's NHS.",
    },
    {
      icon: "🇦🇺",
      title: "AMC — Practice in Australia",
      description:
        "ECFMG and WFME-recognised degree qualifies for AMC (Australian Medical Council) examination — the pathway to general practice and specialist training in Australia and New Zealand.",
    },
    {
      icon: "🌏",
      title: "Practice in Kyrgyzstan & CIS",
      description:
        "After the state licensing exam, graduates may practise and pursue postgraduate specialisation in Kyrgyzstan or other CIS member states — a growing healthcare market with strong demand for doctors.",
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
  eyebrow: "Why Choose Taksheela",
  titlePrimary: "Why Students from India, Nepal & Bangladesh Trust",
  titleAccent: "Taksheela",
  subtitle:
    "Taksheela Institute of Education is a Kolkata-headquartered study abroad consultancy with offices across India — specialising in MBBS abroad placements since our founding.",
  items: [
    {
      icon: "🔍",
      title: "100% Transparent Shortlisting",
      description:
        "Every university recommendation is based on NMC compliance, FMGE track record, hospital quality, batch size, and your specific profile. Never commission-first.",
    },
    {
      icon: "📋",
      title: "End-to-End Admission Support",
      description:
        "Eligibility check → university application → document apostille → visa filing → pre-departure briefing → arrival coordination. We manage every step so you focus on preparation.",
    },
    {
      icon: "🌐",
      title: "On-Ground Representatives in Kyrgyzstan",
      description:
        "Our Bishkek and Osh representatives coordinate airport pickup, hostel check-in, medical check-up, visa extension, and first-semester registration — so no student arrives to confusion.",
    },
    {
      icon: "📚",
      title: "FMGE / NExT Guidance from Year 1",
      description:
        "We advise on FMGE/NExT preparation strategy from the very beginning of the programme — including recommended study resources, coaching integration, and exam timeline planning.",
    },
    {
      icon: "💳",
      title: "Authorised Fee Remittance Support",
      description:
        "We connect families with RBI-authorised international payment channels. Education loan partnerships are available through verified NBFC and bank partners for eligible students.",
    },
    {
      icon: "🤝",
      title: "Post-Admission Support Throughout",
      description:
        "Our responsibility does not end at admission. Visa renewal reminders, fee payment coordination, mid-programme check-ins, and FMGE preparation milestones — we stay involved.",
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
  eyebrow: "NMC Gazette & Compliance",
  titlePrimary: "NMC Guidelines",
  titleAccent: "— What Every Indian Student Must Know",
  subtitle:
    "India's National Medical Commission sets binding rules for all Indian students studying MBBS abroad. Non-compliance disqualifies graduates from practising in India.",
  rules: [
    {
      icon: "🧾",
      title: "Valid NEET-UG qualifying score",
      description:
        "A valid NEET-UG qualifying score is mandatory before beginning MBBS abroad. All students admitted from 2019 onwards must hold a current qualifying score (2024, 2025, or 2026).",
    },
    {
      icon: "🌍",
      title: "University must be WDOMS-listed (FAIMER)",
      description:
        "The university must appear in the World Directory of Medical Schools (WDOMS) published by FAIMER. All NMC-approved Kyrgyz universities on this page are WDOMS-listed.",
    },
    {
      icon: "📅",
      title: "Minimum duration: 54 months + 12-month internship",
      description:
        "Minimum 54 months of academic study plus a 12-month compulsory clinical internship (totalling 6 years). Kyrgyz NMC-approved programmes fully comply with this requirement.",
    },
    {
      icon: "📝",
      title: "Must pass NExT after graduation",
      description:
        "Students must pass the NExT (National Exit Test) — India's replacement for FMGE — to obtain NMC registration and a licence to practise medicine in India after graduation.",
    },
    {
      icon: "🌐",
      title: "Medium of instruction",
      description:
        "Instruction must be in English or the official national language of the host country. All NMC-approved Kyrgyz universities offer English-medium programmes as the primary language.",
    },
    {
      icon: "🏥",
      title: "Internship policy can require India internship",
      description:
        "A compulsory 12-month internship may need to be completed in India (post-graduation) under updated NMC directives for certain batches. Students must track NMC notifications — Taksheela maintains updated guidance.",
    },
  ],
  officialSourcesLabel: "Official Sources",
  officialLinks: [
    { label: "NMC India", href: "https://www.nmc.org.in" },
    { label: "WHO Directory", href: "https://www.wdoms.org" },
    { label: "Kyrgyz Ministry of Health", href: "https://www.gov.kg" },
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

// (Images intentionally omitted — HTML page provides no university images.)

/** Universities listed on the Kyrgyzstan HTML table (7 entries). */
export const kyrgyzstanTopUniversityCards: AbroadTopUniversityCard[] = [
  {
    id: "ksma",
    name: "Kyrgyz State Medical Academy (KSMA)",
    abbreviation: "KSMA",
    established: "1939",
    locationLine: "Bishkek",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 0,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "Government", variant: "amber" },
    ],
    rankTag: "Oldest & most prestigious medical university in Kyrgyzstan",
    stats: [
      { label: "Annual tuition (USD)", value: "$4,200 – $5,000" },
      { label: "Total 6-Yr (₹ approx.)", value: "₹22–27 Lakhs" },
      { label: "City", value: "Bishkek" },
      { label: "Type", value: "Government" },
    ],
    fmge: { type: "text", text: "—" },
    description: ["Oldest & most prestigious medical university in Kyrgyzstan"],
    featureTags: ["Bishkek", "Government", "NMC Approved"],
    applyHref: "/contact",
    availabilityText: "NMC Approved",
  },
  {
    id: "ism",
    name: "International School of Medicine (ISM)",
    abbreviation: "ISM",
    established: "2003",
    locationLine: "Bishkek",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 0,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "Private", variant: "rose" },
    ],
    rankTag: "First private medical school in Kyrgyzstan; 750+ Indian students",
    stats: [
      { label: "Annual tuition (USD)", value: "$4,800 – $6,000" },
      { label: "Total 6-Yr (₹ approx.)", value: "₹26–32 Lakhs" },
      { label: "City", value: "Bishkek" },
      { label: "Type", value: "Private" },
    ],
    fmge: { type: "text", text: "—" },
    description: ["First private medical school in Kyrgyzstan; 750+ Indian students"],
    featureTags: ["Bishkek", "Private", "Indian Students"],
    applyHref: "/contact",
    availabilityText: "NMC Approved",
  },
  {
    id: "osh",
    name: "Osh State University — Medical Faculty",
    abbreviation: "OSU",
    established: "1951",
    locationLine: "Osh",
    region: "other",
    budgetFriendly: true,
    fmgePercent: 0,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "Government", variant: "amber" },
    ],
    rankTag: "70+ years legacy; largest university in southern Kyrgyzstan",
    stats: [
      { label: "Annual tuition (USD)", value: "$3,500 – $4,500" },
      { label: "Total 6-Yr (₹ approx.)", value: "₹19–24 Lakhs" },
      { label: "City", value: "Osh" },
      { label: "Type", value: "Government" },
    ],
    fmge: { type: "text", text: "—" },
    description: ["70+ years legacy; largest university in southern Kyrgyzstan"],
    featureTags: ["Osh", "Government", "Budget-Friendly"],
    applyHref: "/contact",
    availabilityText: "NMC Approved",
  },
  {
    id: "ihsm",
    name: "International Higher School of Medicine (IHSM)",
    abbreviation: "IHSM",
    established: "2002",
    locationLine: "Bishkek",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 0,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "Private", variant: "rose" },
    ],
    rankTag: "Strong FMGE-prep integration; multiple campuses",
    stats: [
      { label: "Annual tuition (USD)", value: "$4,500 – $5,500" },
      { label: "Total 6-Yr (₹ approx.)", value: "₹24–29 Lakhs" },
      { label: "City", value: "Bishkek" },
      { label: "Type", value: "Private" },
    ],
    fmge: { type: "text", text: "Strong FMGE-prep integration; multiple campuses" },
    description: ["Strong FMGE-prep integration; multiple campuses"],
    featureTags: ["Bishkek", "Private", "FMGE Prep"],
    applyHref: "/contact",
    availabilityText: "NMC Approved",
  },
  {
    id: "jalalabad",
    name: "Jalal-Abad State University — Medical Faculty",
    abbreviation: "JASU",
    established: "1993",
    locationLine: "Jalal-Abad",
    region: "other",
    budgetFriendly: true,
    fmgePercent: 0,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "Government", variant: "amber" },
    ],
    rankTag: "Budget-friendly; quieter city with low living costs",
    stats: [
      { label: "Annual tuition (USD)", value: "$3,500 – $4,200" },
      { label: "Total 6-Yr (₹ approx.)", value: "₹18–22 Lakhs" },
      { label: "City", value: "Jalal-Abad" },
      { label: "Type", value: "Government" },
    ],
    fmge: { type: "text", text: "—" },
    description: ["Budget-friendly; quieter city with low living costs"],
    featureTags: ["Jalal-Abad", "Budget-Friendly", "Government"],
    applyHref: "/contact",
    availabilityText: "NMC Approved",
  },
  {
    id: "krsu",
    name: "Kyrgyz-Russian Slavic University — Medical Faculty",
    abbreviation: "KRSU",
    established: "1993",
    locationLine: "Bishkek",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 0,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "Government", variant: "amber" },
    ],
    rankTag: "Bilingual institution with Russian-European teaching traditions",
    subtitle: "Kyrgyz-Russian Slavic University — Medical Faculty",
    stats: [
      { label: "Annual tuition (USD)", value: "$4,000 – $5,000" },
      { label: "Total 6-Yr (₹ approx.)", value: "₹21–27 Lakhs" },
      { label: "City", value: "Bishkek" },
      { label: "Type", value: "Government" },
    ],
    fmge: { type: "text", text: "—" },
    description: ["Bilingual institution with Russian-European teaching traditions"],
    featureTags: ["Bishkek", "Government", "Bilingual"],
    applyHref: "/contact",
    availabilityText: "NMC Approved",
  },
  {
    id: "avicenna",
    name: "Avicenna International Medical University",
    abbreviation: "AIMU",
    established: "—",
    locationLine: "Bishkek",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 0,
    headerTags: [
      { label: "NMC Approved", variant: "emerald" },
      { label: "Private", variant: "rose" },
    ],
    rankTag: "Growing institution with modern facilities",
    stats: [
      { label: "Annual tuition (USD)", value: "$4,200 – $5,200" },
      { label: "Total 6-Yr (₹ approx.)", value: "₹22–28 Lakhs" },
      { label: "City", value: "Bishkek" },
      { label: "Type", value: "Private" },
    ],
    fmge: { type: "text", text: "—" },
    description: ["Growing institution with modern facilities"],
    featureTags: ["Bishkek", "Private"],
    applyHref: "/contact",
    availabilityText: "NMC Approved",
  },
];

export const kyrgyzstanAbroadTopUniversitiesContent: AbroadTopUniversitiesContent = {
  eyebrow: "Top Universities",
  titlePrimary: "NMC-Approved Medical Universities in Kyrgyzstan",
  titleAccent: "2026–27",
  intro:
    "All institutions listed below are NMC-recognised, WHO-listed, and offer English-medium MBBS with clinical training at affiliated hospitals.",
  cardWatermarkCode: "KG",
  filters: [
    { id: "all", label: "All Universities" },
    { id: "moscow", label: "Bishkek" },
    { id: "other", label: "Other Cities" },
  ],
  universities: kyrgyzstanTopUniversityCards,
  quickComparison: {
    title: "University List (from the 2026–27 page table)",
    disclaimer:
      "* Fees are approximate and subject to annual revision. All amounts calculated at prevailing USD/INR exchange rates. Contact Taksheela for the confirmed, current fee structure for each university.",
    rows: [
      {
        university: "KSMA",
        city: "Bishkek",
        established: "1939",
        annualFees: "$4,200 – $5,000",
        fmgeRate: "NMC Approved",
        bestFor: "Oldest & most prestigious medical university in Kyrgyzstan",
      },
      {
        university: "ISM",
        city: "Bishkek",
        established: "2003",
        annualFees: "$4,800 – $6,000",
        fmgeRate: "NMC Approved",
        bestFor: "First private medical school in Kyrgyzstan; 750+ Indian students",
      },
      {
        university: "Osh State",
        city: "Osh",
        established: "1951",
        annualFees: "$3,500 – $4,500",
        fmgeRate: "NMC Approved",
        bestFor: "70+ years legacy; largest university in southern Kyrgyzstan",
      },
      {
        university: "IHSM",
        city: "Bishkek",
        established: "2002",
        annualFees: "$4,500 – $5,500",
        fmgeRate: "NMC Approved",
        bestFor: "Strong FMGE-prep integration; multiple campuses",
      },
      {
        university: "Jalal-Abad State",
        city: "Jalal-Abad",
        established: "1993",
        annualFees: "$3,500 – $4,200",
        fmgeRate: "NMC Approved",
        bestFor: "Budget-friendly; quieter city with low living costs",
      },
      {
        university: "KRSU",
        city: "Bishkek",
        established: "1993",
        annualFees: "$4,000 – $5,000",
        fmgeRate: "NMC Approved",
        bestFor: "Bilingual institution with Russian-European teaching traditions",
      },
      {
        university: "Avicenna",
        city: "Bishkek",
        established: "—",
        annualFees: "$4,200 – $5,200",
        fmgeRate: "NMC Approved",
        bestFor: "Growing institution with modern facilities",
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
  eyebrow: "FAQs",
  title: "Frequently Asked Questions — MBBS in Kyrgyzstan 2026",
  subtitle:
    "Answers to the most searched questions from students and parents in India, Nepal, and Bangladesh considering MBBS in Kyrgyzstan.",
  items: [
    {
      question: "Is MBBS from Kyrgyzstan valid in India?",
      answer:
        "Yes. Degrees from NMC-listed Kyrgyz medical universities are valid in India. Graduates must pass the FMGE or NExT (National Exit Test) to obtain NMC registration and a licence to practise medicine in India. All universities listed on this page are NMC-approved and WDOMS-listed.",
    },
    {
      question: "Is NEET compulsory for MBBS in Kyrgyzstan?",
      answer:
        "Yes, for Indian students. As per NMC's FMGL Regulations 2021, all Indian students pursuing MBBS at foreign universities must hold a valid NEET-UG qualifying score at the time of admission. Acceptable NEET scores are from 2024, 2025, or 2026. There is no minimum score threshold set by Kyrgyz universities — only the NMC qualifying percentile is required.",
    },
    {
      question: "What is the total cost of MBBS in Kyrgyzstan in INR?",
      answer:
        "The total cost of a 6-year MBBS in Kyrgyzstan ranges from approximately ₹15 lakhs to ₹30 lakhs depending on the university. This includes annual tuition (USD 3,500–6,000/yr), hostel (USD 1,200–1,800/yr), and estimated living expenses (USD 120–150/month). Indian mess costs an additional USD 1,500/year and is compulsory in Year 1 at most universities.",
    },
    {
      question: "How many Indian students are currently studying in Kyrgyzstan?",
      answer:
        "Over 16,000 Indian students are currently enrolled in Kyrgyzstan's medical universities, making it one of the largest Indian student communities in any MBBS abroad destination globally. Major universities like ISM and KSMA each have hundreds of Indian students — well-established communities with peer mentorship, Indian food facilities, and cultural events.",
    },
    {
      question: "Is Kyrgyzstan safe for Indian students?",
      answer:
        "Yes. Kyrgyzstan has a low crime rate and a government that actively supports international student welfare. University campuses have 24-hour security and CCTV surveillance. Both Bishkek and Osh have well-established Indian and South Asian student communities that help newcomers adjust quickly. Taksheela's on-ground representatives also provide emergency support.",
    },
    {
      question: "Is food available for Indian students in Kyrgyzstan?",
      answer:
        "Yes. Indian mess facilities are available at all major NMC-approved universities in Bishkek and Osh. As a Muslim-majority country, halal food is widely available throughout Kyrgyzstan. Indian grocery items are available in Bishkek's larger markets. Most students report comfortable food adaptation within the first few weeks of arrival.",
    },
    {
      question: "What is the FMGE pass rate for Kyrgyzstan graduates?",
      answer:
        "FMGE pass rates vary significantly by university rather than by country. The key determinant is the quality of clinical training, the university's hospital affiliation, and the student's own FMGE preparation. Taksheela evaluates each university's student outcomes and provides verified data during counselling sessions — we do not recommend universities without this analysis.",
    },
    {
      question: "Can Nepali and Bangladeshi students study MBBS in Kyrgyzstan?",
      answer:
        "Yes. All NMC-approved Kyrgyz universities accept students from Nepal and Bangladesh. Nepali students may use a valid NEET score or Nepal's national medical entrance test. Bangladeshi students should review BMDC guidelines before applying. No IELTS or TOEFL is required for either nationality. Taksheela has successfully placed students from both countries in Kyrgyzstan.",
    },
  ],
};

export const kyrgyzstanAbroadCtaBannerContent: AbroadCtaBannerContent = {
  countryLabel: "Kyrgyzstan",
  subtitle:
    "Speak with a Taksheela counsellor today. Honest advice, verified data, and complete support from application to arrival. September 2026 intake seats are filling — apply early.",
  primaryCtaLabel: "Book Free Counselling",
  phoneDisplay: "+91 9831241212",
  phoneTel: "+919831241212",
};

export const kyrgyzstanAbroadQuickFactsContent: AbroadQuickFactItem[] = [
  {
    icon: "🎓",
    label: "Degree Awarded",
    value: "MD Physician (MBBS equivalent)",
    mLabel: "Degree",
    mValue: "MD Physician",
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
    value: "September (primary) · February (secondary)",
    mLabel: "Intakes",
    mValue: "Sep · Feb",
  },
  {
    icon: "💰",
    label: "Annual Tuition",
    value: "USD 3,500 – 6,000 per year",
    mLabel: "Tuition / yr",
    mValue: "USD 3.5k–6k",
  },
  {
    icon: "🏠",
    label: "Hostel (annual)",
    value: "USD 1,200 – 1,800 per year",
    mLabel: "Hostel / yr",
    mValue: "USD 1.2k–1.8k",
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
    label: "Medium of Instruction",
    value: "English + Kyrgyz/Russian (from Year 1)",
    mLabel: "Medium",
    mValue: "English",
  },
  {
    icon: "✅",
    label: "Recognised By",
    value: "WHO · NMC · ECFMG · FAIMER · WFME",
    mLabel: "Recognised",
    mValue: "Multi-body",
  },
  {
    icon: "👥",
    label: "Indian Students",
    value: "16,000+ currently enrolled",
    mLabel: "Indians",
    mValue: "16,000+",
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
    value: "Zero donation · zero capitation",
    mLabel: "Donation",
    mValue: "Zero",
  },
  {
    icon: "📝",
    label: "IELTS / TOEFL Required",
    value: "Not required",
    mLabel: "IELTS/TOEFL",
    mValue: "Not required",
  },
];

const kyrgyzstanAbroadWhyChooseMbbsReasons: AbroadWhyChooseMbbsItem[] = [
  {
    icon: "💸",
    title: "Lowest Total MBBS Cost in Central Asia",
    description:
      "Total six-year programme costs start from ₹15 lakhs and rarely exceed ₹30 lakhs — including tuition, hostel, and living. This is 70% cheaper than private MBBS in India and far below European destinations.",
  },
  {
    icon: "✅",
    title: "10+ NMC, WHO & FAIMER Approved Universities",
    description:
      "Kyrgyzstan offers one of the largest pools of NMC-compliant medical universities globally. All approved institutions are listed on WDOMS (FAIMER), enabling FMGE, NExT, USMLE, and PLAB eligibility after graduation.",
  },
  {
    icon: "🌐",
    title: "English-Medium — No IELTS Required",
    description:
      "The full MBBS curriculum is delivered in English across all NMC-approved Kyrgyz universities. No IELTS or TOEFL score is required for admission — accessible for every NEET-qualified applicant.",
  },
  {
    icon: "🚫",
    title: "Zero Donation, Zero Capitation",
    description:
      "Admission is entirely merit-based. There is no management quota, no under-the-table payment, and no donation demanded at any stage. You pay only the published university fee — nothing more.",
  },
  {
    icon: "👥",
    title: "16,000+ Indian Students — Largest Community",
    description:
      "The most developed Indian student ecosystem outside Russia. Indian mess, Diwali events, Hindi-speaking peers, and a 24/7 support network across Bishkek and Osh. Students from Nepal and Bangladesh are equally well-integrated.",
  },
  {
    icon: "🏥",
    title: "Clinical Training in Government Hospitals",
    description:
      "Students rotate through large affiliated teaching hospitals from Year 3, gaining hands-on exposure to diverse patient profiles and high-volume clinical settings — critical for FMGE and NExT preparation.",
  },
  {
    icon: "🌍",
    title: "Globally Recognised Degree",
    description:
      "WHO-listed, NMC-compliant degree qualifies graduates to appear for FMGE/NExT (India), USMLE (USA), PLAB (UK), and AMC (Australia). A single qualification that opens global medical career pathways.",
  },
  {
    icon: "✈️",
    title: "Accessible Location — 3–4 Hours from India",
    description:
      "Direct or one-stop flights from Delhi, Mumbai, and Kolkata to Bishkek in 3–5 hours. Shorter travel time means easier family visits, faster emergency returns, and lower annual airfare costs compared to Europe or the Americas.",
  },
];

const kyrgyzstanAbroadWhyChooseMbbsSection: AbroadWhyChooseMbbsSectionContent = {
  eyebrow: "Why Choose Kyrgyzstan",
  titleLead: "8 Strong Reasons to Choose MBBS in ",
  titleTrail: "",
  subtitle:
    "Evidence-backed reasons why Kyrgyzstan is a top MBBS abroad choice for students from India, Nepal, and Bangladesh in 2026.",
};

export const kyrgyzstanAbroadWhyChooseMbbsContent: AbroadWhyChooseMbbsContent = {
  section: kyrgyzstanAbroadWhyChooseMbbsSection,
  reasons: kyrgyzstanAbroadWhyChooseMbbsReasons,
};

