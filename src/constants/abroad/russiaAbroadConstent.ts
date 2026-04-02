/**
 * Russia MBBS abroad — single source of truth for `/mbbs/abroad/russia` UI copy and structured data.
 * Keep all new section payloads (JSON-shaped objects, arrays, labels) here — do not add
 * separate Russia data files; extend types and exports below as needed.
 * Slug-page wiring (which countries use the full stack) lives in `abroadFullPageRegistry.ts`.
 */

import { imageBaseUrl } from "@/utils/config";

/** Quick Facts grid (`QuickFactsAbroad`) — one card per item. */
export type AbroadQuickFactItem = {
  icon: string;
  label: string;
  value: string;
  /** Short label + value for mobile 2×2 */
  mLabel?: string;
  mValue?: string;
};

/** Generic quick facts when a country page does not pass a `facts` prop (other destinations). */
export const abroadDefaultQuickFactsContent: AbroadQuickFactItem[] = [
  {
    icon: "🎓",
    label: "Degree Awarded",
    value: "Equivalent MBBS/MD medical degree",
    mLabel: "Degree",
    mValue: "MBBS/MD equivalent",
  },
  {
    icon: "⏱️",
    label: "Course Duration",
    value: "5-6 years (including internship)",
    mLabel: "Duration",
    mValue: "5–6 yrs + internship",
  },
  {
    icon: "📅",
    label: "Intakes",
    value: "Primary and secondary intakes by university",
    mLabel: "Intakes",
    mValue: "Primary & secondary",
  },
  {
    icon: "📋",
    label: "Eligibility",
    value: "10+2 PCB + NEET (as applicable)",
    mLabel: "Eligibility",
    mValue: "10+2 PCB + NEET",
  },
  {
    icon: "🌐",
    label: "Medium of Instruction",
    value: "English medium available",
    mLabel: "Medium",
    mValue: "English medium",
  },
  {
    icon: "💰",
    label: "Annual Tuition (Range)",
    value: "Varies by university and country",
    mLabel: "Tuition / yr",
    mValue: "Varies by uni",
  },
  {
    icon: "🏠",
    label: "Annual Living Cost",
    value: "Affordable student living options",
    mLabel: "Living / yr",
    mValue: "Affordable",
  },
  {
    icon: "✅",
    label: "Recognised By",
    value: "WHO · NMC · ECFMG · FAIMER",
    mLabel: "Recognised",
    mValue: "WHO · NMC · ECFMG…",
  },
  {
    icon: "📊",
    label: "FMGE/NExT Readiness",
    value: "NMC-aligned curriculum pathways",
    mLabel: "FMGE/NExT",
    mValue: "NMC-aligned",
  },
  {
    icon: "👩‍🎓",
    label: "International Students",
    value: "Strong IN · NP · BD presence",
    mLabel: "Students",
    mValue: "IN · NP · BD",
  },
];

/** Why Choose MBBS section (`WhyChooseMbbs`) — one card per item. */
export type AbroadWhyChooseMbbsItem = {
  icon: string;
  title: string;
  description: string;
};

/** Eyebrow, main heading (split around accented `country.title`), and subtitle. Use `{country}` where the live country name should appear. */
export type AbroadWhyChooseMbbsSectionContent = {
  eyebrow: string;
  titleLead: string;
  titleTrail: string;
  subtitle: string;
};

export type AbroadWhyChooseMbbsContent = {
  section: AbroadWhyChooseMbbsSectionContent;
  reasons: AbroadWhyChooseMbbsItem[];
};

/** Default heading copy when `WhyChooseMbbs` is rendered without a full `content` bundle. */
export const abroadDefaultWhyChooseMbbsSectionContent: AbroadWhyChooseMbbsSectionContent = {
  eyebrow: "Why Choose {country}",
  titleLead: "Why Study MBBS in ",
  titleTrail: "?",
  subtitle:
    "Eight evidence-backed reasons why {country} is a top MBBS abroad destination for students from India, Nepal and Bangladesh.",
};

/** Generic reasons when `WhyChooseMbbs` is rendered without a `reasons` prop. */
export const abroadDefaultWhyChooseMbbsContent: AbroadWhyChooseMbbsItem[] = [
  {
    icon: "🎯",
    title: "Affordable and Transparent Costs",
    description:
      "Tuition and living costs remain significantly lower than many private alternatives, with clear fee structures.",
  },
  {
    icon: "✅",
    title: "Recognised Universities",
    description:
      "Students can target institutions listed under globally accepted frameworks and aligned with NMC pathways.",
  },
  {
    icon: "🌐",
    title: "English-Medium Learning",
    description:
      "Most popular destinations provide full English-medium programs for international medical aspirants.",
  },
  {
    icon: "🏥",
    title: "Clinical Exposure",
    description:
      "Teaching hospitals and practical rotations build patient-facing confidence and real-world readiness.",
  },
  {
    icon: "🚫",
    title: "Merit-Based Admissions",
    description:
      "No donation or capitation model in many destinations, making admission outcomes cleaner and fair.",
  },
  {
    icon: "👩‍🎓",
    title: "Strong Student Communities",
    description: "Indian, Nepali, and Bangladeshi student networks help smoother transition and peer support.",
  },
  {
    icon: "🎓",
    title: "Global Degree Mobility",
    description: "Graduates can pursue licensing pathways such as FMGE/NExT, USMLE, PLAB, or AMC as applicable.",
  },
  {
    icon: "📚",
    title: "Long-Term Career Foundation",
    description:
      "Structured curriculum, internships, and mentoring support students toward PG and specialist goals.",
  },
];

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

export const russiaAbroadHeroContent: AbroadHeroContent = {
  eyebrow: "RU MBBS in Russia 2026-27 - Admissions Open",
  headline: {
    line1: "Study MBBS in Russia",
    line2Accent: "Where Affordability Meets",
    line3: "Global Medical Excellence.",
  },
  description:
    "Russia is known the world over for its excellence in teaching and research. It is known for providing high-quality education at a low cost, which is why it is one of the most sought-after destinations for international students desiring to study MBBS in Russia. Most of the students wish to study MBBS so as to become successful doctors in their field. Russia and India both are great destinations to study MBBS.",
  descriptionMaxLength: 260,
  cta: {
    primaryText: "Book Free Counselling ->",
    secondaryText: "View Universities",
    secondaryHref: "#top-universities",
  },
  quickStats: [
    { label: "Total Fees", value: "Rs. 2.7L" },
    { label: "Duration", value: "6 Years" },
    { label: "Medium", value: "English" },
    { label: "Intake", value: "Sep / Feb" },
  ],
  spotlight: {
    value: "27,000+",
    caption: "Students currently pursuing MBBS in Russia",
  },
  statGrid: [
    { value: "50+", label: "NMC-Compliant Universities" },
    { value: "Rs. 2.7L", label: "Annual Fees From" },
    { value: "200+", label: "Years Medical Tradition" },
    /** Last card value is replaced by `russiaAbroadHeroFeaturedCount` when used from the page. */
    { value: "10", label: "Featured Universities" },
  ],
};

/** Merges live college count into the hero stat grid (Russia). */
export function russiaAbroadHeroFeaturedCount(
  featuredCount: number,
  base: AbroadHeroContent = russiaAbroadHeroContent
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

export const russiaAbroadOverviewContent: AbroadOverviewContent = {
  eyebrow: "Overview",
  heading: "Overview of MBBS in Russia",
  paragraphs: [
    "Russia stands as the world's single most popular destination for Indian medical students abroad — a fact confirmed by India's Ministry of External Affairs (MEA) in the December 2025 Winter Session of Parliament, which recorded over 27,000 Indian students currently enrolled in Russian medical programs.",
    "Russian medical universities carry over two centuries of scientific heritage. Institutions like Sechenov University (est. 1758) and Kazan State Medical University (est. 1814) have trained physicians who practice across the globe. State subsidies keep fees far below Indian private medical colleges, while the 6-year English-medium curriculum fully satisfies NMC's guidelines for FMGE/NExT eligibility.",
    "For students from India, Nepal, and Bangladesh, the proposition is clear: 50+ NMC-compliant universities, merit-based admission with zero donation, total program costs of ₹18–36 lakhs, and a globally recognised degree that qualifies graduates for FMGE, USMLE, PLAB, and AMC.",
  ],
  officialData: {
    leadBold: "Official Data (MEA, Dec 2025):",
    textBeforeBold: "{countryName} has ",
    textBold: "{universityCount}+ recognised medical universities",
    textAfterBold:
      " and remains one of the strongest MBBS destinations for South Asian students pursuing globally accepted medical degrees.",
  },
  mediaPlaceholder: {
    emoji: "🏛️",
    title: "[Russia Medical University Campus Image]",
    subtitle: "Replace with actual asset",
  },
  recognisedStrip: {
    label: "Recognised by:",
    body: "WHO (WDOMS) · NMC India · Russian Ministry of Health · ECFMG · FAIMER - enabling FMGE/NExT (India), USMLE (USA), PLAB (UK), AMC (Australia).",
  },
};

// --- Common fears (CommonFearsSection) ----------------------------------------

export type AbroadFearsItem = {
  icon: string;
  title: string;
  description: string;
};

/** Hero lines above the two columns. `title` = `country.title` is inserted between `titleLead` and `titleMiddle`. */
export type AbroadFearsSectionContent = {
  eyebrow: string;
  titleLead: string;
  titleMiddle: string;
  titleAccent: string;
  titleTrail: string;
  subtitle: string;
};

export type AbroadFearsContent = {
  section: AbroadFearsSectionContent;
  painTitle: string;
  solutionTitle: string;
  painPoints: AbroadFearsItem[];
  solutions: AbroadFearsItem[];
};

export const abroadDefaultFearsSectionContent: AbroadFearsSectionContent = {
  eyebrow: "Challenges & Solutions",
  titleLead: "Common Fears About MBBS in ",
  titleMiddle: " — ",
  titleAccent: "And the Real Answers",
  titleTrail: "",
  subtitle:
    "Every aspiring student carries genuine concerns. Here is an honest breakdown of each challenge and exactly how Taksheela resolves it.",
};

/** Generic fallback when `CommonFearsSection` is rendered without country-specific `fears` from `*AbroadConstent`. */
export const abroadDefaultFearsContent: AbroadFearsContent = {
  section: abroadDefaultFearsSectionContent,
  painTitle: "Common Pain Points",
  solutionTitle: "Taksheela's Solutions",
  painPoints: [
    {
      icon: "🎯",
      title: "Admission Uncertainty",
      description:
        "Students are unsure which universities are reliable and genuinely aligned with licensing goals.",
    },
    {
      icon: "💰",
      title: "Budget Planning Stress",
      description:
        "Families worry about hidden tuition, hostel, and forex costs while planning the full MBBS journey.",
    },
    {
      icon: "🧭",
      title: "Country Selection Confusion",
      description:
        "Choosing between multiple destinations without clear performance benchmarks creates indecision.",
    },
    {
      icon: "📚",
      title: "Licensing Exam Anxiety",
      description:
        "Students fear whether their university training will prepare them for FMGE/NExT pathways.",
    },
    {
      icon: "🍛",
      title: "Lifestyle Adjustment",
      description:
        "Questions around food, climate, language, and student support communities remain major concerns.",
    },
  ],
  solutions: [
    {
      icon: "✅",
      title: "Verified University Matching",
      description:
        "We shortlist only vetted, NMC-aligned universities based on your budget, profile, and career goals.",
    },
    {
      icon: "📊",
      title: "Transparent Cost Planning",
      description:
        "You get a clear, line-by-line fee and living-cost projection before any decision is finalized.",
    },
    {
      icon: "🧠",
      title: "Data-Backed Counselling",
      description:
        "Every recommendation is driven by outcomes, compliance, and student-fit instead of commission bias.",
    },
    {
      icon: "🎓",
      title: "FMGE/NExT-Oriented Guidance",
      description:
        "From day one, we align students with institutions and study systems that improve exam readiness.",
    },
    {
      icon: "🤝",
      title: "On-Ground Student Support",
      description:
        "Pre-departure orientation and active student communities help faster adaptation in new environments.",
    },
  ],
};

export const russiaAbroadFearsContent: AbroadFearsContent = {
  section: {
    eyebrow: "Challenges & Solutions",
    titleLead: "Common Fears About MBBS in ",
    titleMiddle: " — ",
    titleAccent: "And the Real Answers",
    titleTrail: "",
    subtitle:
      "Cold, language, FMGE, fees — real questions for Russia MBBS. Below is an honest look at each worry and how Taksheela supports you with data and on-ground networks.",
  },
  painTitle: "Common Pain Points",
  solutionTitle: "Taksheela's Solutions",
  painPoints: [
    {
      icon: "❄️",
      title: "Extreme Cold Weather",
      description:
        "Siberian cities drop to -30 C. Students from tropical India, Nepal, and Bangladesh worry about health and acclimatisation.",
    },
    {
      icon: "🗣️",
      title: "Language Barrier in Clinical Years",
      description:
        "Hospital rotations involve Russian-speaking patients. Students fear inability to communicate during practice from Year 3.",
    },
    {
      icon: "📉",
      title: "FMGE Pass Rate Anxiety",
      description:
        "The overall FMGE pass rate for Russian graduates was ~29.5% in 2024 - lower than Bangladesh or Philippines. Students worry about career prospects.",
    },
    {
      icon: "🏦",
      title: "Fee Payment in Foreign Currency",
      description:
        "Fees are in USD or Russian Rubles. Exchange rate fluctuations and international transfer restrictions concern many families.",
    },
    {
      icon: "🏫",
      title: "Choosing the Wrong University",
      description:
        "With 70+ universities in Russia, not all perform equally on FMGE. Students fear selecting a weak institution.",
    },
    {
      icon: "🍲",
      title: "Food and Cultural Adjustment",
      description:
        "Students worry about Indian food availability, religious dietary requirements, and lifestyle compatibility.",
    },
  ],
  solutions: [
    {
      icon: "🏠",
      title: "Preparation + Strong Indian Communities",
      description:
        "Taksheela provides a winter checklist pre-departure. Established Indian communities in Kazan, Saratov, Moscow guide new arrivals - most adapt within 2-3 weeks.",
    },
    {
      icon: "📚",
      title: "Russian Language Is Built Into the Curriculum",
      description:
        "All NMC-compliant programs include Russian language as a compulsory subject from Year 1. Basic conversational proficiency is achieved within 2 years - exactly as NMC requires.",
    },
    {
      icon: "🎯",
      title: "FMGE-First University Selection from Day One",
      description:
        "RUDN achieved 45.45% FMGE (2024). Tver TSMU consistently achieves ~40%. We guide students toward high-performing institutions and provide FMGE coaching resources from Year 1.",
    },
    {
      icon: "💳",
      title: "RBI-Authorised Remittance Channels",
      description:
        "Taksheela partners with compliant international fee transfer channels. Multi-year payment plans are available at several universities, reducing upfront burden.",
    },
    {
      icon: "🔍",
      title: "Data-Driven Shortlisting",
      description:
        "We evaluate every university on FMGE track record, infrastructure, Indian community, city safety, and fee structure - presenting only matched options. Never commission-based recommendations.",
    },
    {
      icon: "🏪",
      title: "Indian Mess + Active Communities",
      description:
        "Kazan, Saratov, Volgograd, Moscow have Indian restaurants, Indian grocery stores, and Indian mess facilities. Halal food available in Kazan and other Muslim-majority cities.",
    },
  ],
};

// --- Eligibility (EligibilityCriteraAbroad) ----------------------------------------

export type AbroadEligibilityRow = {
  label: string;
  value: string;
};

export type AbroadEligibilitySpecialNoteCard = {
  code: string;
  heading: string;
  title: string;
  points: string[];
  footerTitle: string;
  footerText: string;
  accentClass: string;
  noteBgClass: string;
};

export type AbroadEligibilityContent = {
  eyebrow: string;
  /** Text before the country name (accent). */
  titleLead: string;
  titleTrail: string;
  /** Use `{country}` for `country.title` where needed. */
  subtitle: string;
  tabIndian: string;
  tabNpbd: string;
  indian: AbroadEligibilityRow[];
  npbd: AbroadEligibilityRow[];
  nepali: AbroadEligibilityRow[];
  specialNotes: AbroadEligibilitySpecialNoteCard[];
};

export const abroadDefaultEligibilityContent: AbroadEligibilityContent = {
  eyebrow: "Who Can Apply",
  titleLead: "Eligibility Criteria for MBBS in ",
  titleTrail: "",
  subtitle:
    "Requirements for students from India, Nepal and Bangladesh - based on NMC guidelines and university requirements.",
  tabIndian: "IN Indian Students",
  tabNpbd: "NP BD Nepal & Bangladesh",
  indian: [
    {
      label: "Academic Qualification",
      value: "10+2 (HSC) with Physics, Chemistry, Biology and English from a recognised board.",
    },
    {
      label: "Minimum Marks in PCB",
      value: "General: 50% aggregate in PCB. Reserved categories: as per current NMC criteria.",
    },
    {
      label: "NEET Score",
      value: "Valid NEET-UG qualifying score is mandatory for students planning to practice in India.",
    },
    {
      label: "Age Requirement",
      value: "Minimum 17 years on or before 31st December of the admission year.",
    },
    {
      label: "Documents",
      value: "Passport, marksheets, transfer certificate, medical fitness, and visa documentation.",
    },
    {
      label: "Language Tests",
      value: "IELTS/TOEFL only for select countries. Most MBBS abroad destinations do not require it.",
    },
    {
      label: "Post-Degree Licensing",
      value: "Graduates must clear required licensing pathways (FMGE/NExT, USMLE, PLAB, AMC etc.)",
    },
  ],
  npbd: [
    {
      label: "Academic Qualification",
      value: "Equivalent higher secondary qualification with PCB from a recognised board.",
    },
    {
      label: "Minimum Marks in PCB",
      value: "Universities generally require strong science scores; exact cutoff varies by destination.",
    },
    {
      label: "Entry Examination",
      value: "NEET or equivalent national eligibility route as applicable to student citizenship pathway.",
    },
    {
      label: "Age Requirement",
      value: "Minimum 17 years at the time of admission in most universities.",
    },
    {
      label: "Documentation",
      value: "Passport, academics, embassy forms, financial documents, and attestation as required.",
    },
    {
      label: "Language Tests",
      value: "Most English-medium MBBS destinations do not require IELTS/TOEFL at admission stage.",
    },
    {
      label: "Post-Degree Licensing",
      value: "Graduates must follow licensing rules in home country / intended practice destination.",
    },
  ],
  nepali: [],
  specialNotes: [
    {
      code: "NP",
      heading: "Special Note - Nepali Students",
      title: "Why this is the right choice for Nepal students",
      points: [
        "English-medium universities with affordable fee structures and supportive hostels.",
        "Eligibility and documentation aligned with destination-country admission requirements.",
        "Student communities and on-ground support help faster adaptation after arrival.",
        "Licensing planning is mapped based on intended country of medical practice.",
      ],
      footerTitle: "Nepal Licensing Note:",
      footerText:
        "Graduates must follow Nepal Medical Council (NMC-Nepal) licensing pathway before clinical practice in Nepal.",
      accentClass: "border-[#00B94A] text-[#2C9B5D]",
      noteBgClass: "bg-[#F1FAF4] border-[#D6EEDF]",
    },
    {
      code: "BD",
      heading: "Special Note - Bangladeshi Students",
      title: "Why this is the right choice for Bangladesh students",
      points: [
        "Universities selected for international recognition, safety, and curriculum quality.",
        "Admission support includes document compliance, visa support, and travel planning.",
        "City-level food and community insights are shared before final university shortlisting.",
        "Licensing guidance is provided based on Bangladesh and global career pathways.",
      ],
      footerTitle: "Bangladesh Licensing Note:",
      footerText:
        "Graduates must follow Bangladesh Medical and Dental Council (BMDC) licensing requirements for local practice.",
      accentClass: "border-[#0066FF] text-[#285F9A]",
      noteBgClass: "bg-[#F2F7FE] border-[#D6E3F5]",
    },
  ],
};

export const russiaAbroadEligibilityContent: AbroadEligibilityContent = {
  eyebrow: "Who Can Apply",
  titleLead: "Eligibility Criteria for MBBS in ",
  titleTrail: "",
  subtitle:
    "Requirements for students from India, Nepal and Bangladesh - based on NMC guidelines and university requirements.",
  tabIndian: "IN Indian Students",
  tabNpbd: "NP BD Nepal & Bangladesh",
  indian: [
    {
      label: "Academic Qualification",
      value:
        "10+2 (HSC) with Physics, Chemistry, Biology and English as core subjects from a recognised board.",
    },
    {
      label: "Minimum Marks in PCB",
      value:
        "General category: minimum 50% aggregate in Physics, Chemistry and Biology. SC/ST/OBC: minimum 40% aggregate.",
    },
    {
      label: "NEET Score",
      value:
        "Valid NEET-UG qualifying score mandatory (NMC regulations, effective March 2019). Score valid for 3 years from result date. No minimum score set by Russian universities - NEET qualification only.",
    },
    {
      label: "Age Requirement",
      value:
        "Minimum 17 years on or before 31st December of the admission year. No maximum age limit at most Russian universities.",
    },
    {
      label: "MEA Apostille",
      value:
        "All academic documents must be apostilled by Ministry of External Affairs (MEA), India - mandatory for visa and university admission.",
    },
    {
      label: "Language Tests",
      value: "No IELTS or TOEFL required for any of the 10 featured Russian medical universities.",
    },
    {
      label: "Post-Degree Licensing",
      value: "Must clear GOZZ (Russian state medical licensing exam) then FMGE or NExT to practice medicine in India.",
    },
  ],
  npbd: [
    {
      label: "Academic Qualification",
      value: "Equivalent higher secondary (science stream) with Biology, Chemistry, Physics and English.",
    },
    {
      label: "Minimum Marks in PCB",
      value: "Recommended 50%+ aggregate in PCB for smoother admissions and stronger university options.",
    },
    {
      label: "Entry Pathway",
      value: "Students should meet national eligibility norms applicable to eventual licensing destination.",
    },
    {
      label: "Age Requirement",
      value: "Minimum 17 years by year of admission in line with university and regulatory requirements.",
    },
    {
      label: "Document Legalisation",
      value:
        "Academic records, passport, and required documents must be properly attested/legalised before visa filing.",
    },
    {
      label: "Language Tests",
      value: "IELTS/TOEFL not required for Russia MBBS admissions in most universities.",
    },
    {
      label: "Post-Degree Licensing",
      value:
        "Graduates must clear licensing examination process of their home/target practice country after graduation.",
    },
  ],
  nepali: [],
  specialNotes: [
    {
      code: "NP",
      heading: "Special Note - Nepali Students",
      title: "Why Russia is the Right Choice for Nepal Students",
      points: [
        "No IELTS/TOEFL required - all 10 featured universities admit Nepali students without English proficiency tests.",
        "NEET or equivalent accepted - valid NEET score or Nepali national medical entry test both qualify for admission.",
        "Fees in NPR - total 6-year program ~ NPR 29-58 lakh (Rs. 18-36L x ~1.6 NPR/INR rate, varies by university).",
        "Established Nepali communities at Kazan KSMU, NSMU Arkhangelsk, and Tver TSMU - peer support from Day 1.",
        "Nepal NMC licensing pathway - Taksheela advises on both FMGE/NExT (India) and Nepal Medical Council exam routes after graduation.",
      ],
      footerTitle: "Nepal Licensing Note:",
      footerText:
        "Graduates must clear the Nepal Medical Council (NMC-Nepal) licensing examination to practice in Nepal. Taksheela counsels on both the Indian FMGE/NExT and the Nepal NMC pathways based on each student's career plan.",
      accentClass: "border-[#00B94A] text-[#2C9B5D]",
      noteBgClass: "bg-[#F1FAF4] border-[#D6EEDF]",
    },
    {
      code: "BD",
      heading: "Special Note - Bangladeshi Students",
      title: "Why Russia is the Right Choice for Bangladesh Students",
      points: [
        "Full DGME alignment - all 10 featured universities satisfy DGME Bangladesh requirements - English medium, WHO-listed, 6-year duration, government recognised.",
        "DGME entry test accepted - Bangladeshi students qualifying the national DGME-administered medical entry test are eligible - Taksheela confirms eligibility documentation.",
        "Fees in BDT - total 6-year program ~ BDT 24-49 lakh (Rs. 18-36L x ~1.35 BDT/INR rate, varies by university).",
        "Halal food confirmed at Kazan (large Muslim-majority Tatar population), Ufa/BSMU (Bashkortostan), and Moscow - key cities for Bangladeshi students.",
        "Taksheela BD support - DGME document compliance, Russian Embassy visa from Dhaka, certified translation, and full on-ground support after arrival.",
      ],
      footerTitle: "Bangladesh Licensing Note:",
      footerText:
        "BMDC (Bangladesh Medical and Dental Council) recognises degrees from WHO-listed, DGME-compliant universities. Graduates must clear the BMDC licensing exam to practice in Bangladesh. Taksheela advises on both BMDC and Indian FMGE pathways.",
      accentClass: "border-[#0066FF] text-[#285F9A]",
      noteBgClass: "bg-[#F2F7FE] border-[#D6E3F5]",
    },
  ],
};

// --- Admission process (AdmissionProcessAbroad) ------------------------------------

export type AbroadAdmissionProcessStep = {
  title: string;
  description: string;
};

export type AbroadAdmissionProcessContent = {
  eyebrow: string;
  /** Text before `country.title` in the main heading. */
  titleLead: string;
  /** Accent segment (e.g. "— Admission Process"). */
  titleAccent: string;
  /** Optional text after the accent span. */
  titleTrail: string;
  /** Use `{country}` for `country.title` where needed. */
  subtitle: string;
  steps: AbroadAdmissionProcessStep[];
};

export const abroadDefaultAdmissionProcessContent: AbroadAdmissionProcessContent = {
  eyebrow: "Step by Step",
  titleLead: "MBBS in ",
  titleAccent: "— Admission Process",
  titleTrail: "",
  subtitle:
    "No donation, no entrance test beyond NEET, no management quota. Fully merit-based and completely guided by Taksheela from start to arrival.",
  steps: [
    {
      title: "Free Counselling Session",
      description:
        "One-on-one session with a Taksheela specialist to assess your profile, budget, and shortlist suitable NMC-compliant universities.",
    },
    {
      title: "University Shortlist",
      description:
        "2–3 universities shortlisted with transparent fee breakdowns and track record so you can compare options clearly.",
    },
    {
      title: "Document Preparation",
      description:
        "Academic records, passport, photographs, medical certificate — compiled and verified as per embassy and university requirements.",
    },
    {
      title: "University Application",
      description:
        "We submit your application to the selected university and follow up until you receive a response.",
    },
    {
      title: "Admission Offer Letter",
      description:
        "Official offer letter received — your confirmed MBBS seat, secured through merit-based admission.",
    },
    {
      title: "Fee Payment",
      description:
        "Guided fee remittance through authorised channels directly to the university with full transparency.",
    },
    {
      title: "Visa Application",
      description:
        "Invitation and complete student visa support — documentation, medical tests, and embassy requirements.",
    },
    {
      title: "Pre-Departure & Arrival",
      description:
        "Orientation, travel checklist, and on-ground support after arrival for a smooth start abroad.",
    },
  ],
};

export const russiaAbroadAdmissionProcessContent: AbroadAdmissionProcessContent = {
  eyebrow: "Step by Step",
  titleLead: "MBBS in ",
  titleAccent: "— Admission Process",
  titleTrail: "",
  subtitle:
    "No donation, no entrance test beyond NEET, no management quota. Fully merit-based and completely guided by Taksheela from start to arrival.",
  steps: [
    {
      title: "Free Counselling Session",
      description:
        "1:1 session with a Taksheela Russia specialist — assesses NEET score, budget, city preference, and maps the ideal NMC-compliant university for your profile.",
    },
    {
      title: "University Shortlist",
      description:
        "2-3 NMC-compliant, WHO-listed universities shortlisted with complete, transparent fee breakdowns and FMGE track record for each option.",
    },
    {
      title: "Document Preparation & Apostille",
      description:
        "10th/12th marksheets, NEET scorecard, passport, photographs, medical certificate — compiled and apostilled for Indian students. Nepal/BD students receive equivalent guidance.",
    },
    {
      title: "University Application",
      description:
        "We submit your application directly to the selected university and handle all follow-ups until confirmation is received.",
    },
    {
      title: "Admission Offer Letter",
      description:
        "Official Offer Letter received — your confirmed MBBS seat in Russia, secured without any donation or intermediary payment.",
    },
    {
      title: "Fee Payment",
      description:
        "Guided fee remittance through RBI-authorised channels directly to the university. No hidden fees, no agent commissions, no surprises.",
    },
    {
      title: "Visa Application",
      description:
        "University issues visa invitation. Taksheela prepares complete student visa package — medical tests, insurance, SOP compliant with Russian Embassy requirements.",
    },
    {
      title: "Pre-Departure & Arrival",
      description:
        "Pre-departure orientation covering forex, winter checklist, and flight planning. Airport pickup and first-week support by a local Taksheela representative in Russia.",
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

export const russiaAbroadConsiderBeforeContent: AbroadConsiderBeforeContent = {
  eyebrow: "Honest assessment",
  title: "Things to Consider Before Choosing Russia",
  subtitle:
    "An unbiased view of the genuine advantages and real challenges — so you make a fully informed decision.",
  advantagesTitle: "Strong Advantages",
  advantages: [
    "Fees are often 3–5× lower than Indian private medical colleges, with state-subsidised tuition at many public universities.",
    "No donation or capitation — merit-based admission to universities listed under NMC’s current guidelines.",
    "50+ NMC-compliant options; degrees recognised for FMGE/NExT when other requirements are met.",
    "27,000+ Indian students in Russia (MEA parliamentary data, 2025) — established peer communities in major cities.",
    "English-medium 6-year programmes structured to align with NMC norms for abroad MBBS.",
    "Long clinical tradition and exposure in large teaching hospitals for hands-on training.",
  ],
  challengesTitle: "Genuine Challenges",
  challenges: [
    "Cold winters, especially in northern cities — a real lifestyle adjustment for students from warmer regions.",
    "Overall FMGE pass rate for graduates from Russia was ~29.5% in 2024 — outcomes vary significantly by university and preparation.",
    "Russian language becomes essential for patient interaction in clinical years (typically Years 3–6).",
    "Syllabus and exam patterns differ from Indian boards — disciplined self-study and licensing-focused prep matter.",
    "Tuition and living costs in foreign currency — families should plan for exchange-rate movement.",
    "Distance from home and cultural adaptation; MBBS abroad is a multi-year commitment, not a shortcut.",
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

export const russiaAbroadCostBreakdownContent: AbroadCostBreakdownContent = {
  eyebrow: "Financial planning",
  titlePrimary: "MBBS in Russia",
  titleAccent: "— Complete Cost Breakdown",
  subtitle:
    "For Nepal: multiply ₹ by ~1.6 for NPR. For Bangladesh: multiply ₹ by ~1.35 for BDT. All figures are approximate for 2025–26.",
  tuitionTableTitle: "University Tuition",
  tuitionColAnnual: "Annual Tuition",
  tuitionColSixYear: "6-Year Total",
  tuitionRows: [
    {
      university: "Sechenov University",
      annualTuition: "~$10,000 (₹8.4L)",
      sixYearTotal: "~₹50L",
    },
    {
      university: "Kazan State Medical University (KSMU)",
      annualTuition: "~$5,650 (₹4.7L)",
      sixYearTotal: "~₹28–42L",
    },
    {
      university: "RUDN University",
      annualTuition: "~$9,200 (₹7.6L)",
      sixYearTotal: "~₹45–52L",
    },
    {
      university: "Northern State Medical University (NSMU)",
      annualTuition: "~₹3–4L",
      sixYearTotal: "~₹18–24L",
    },
    {
      university: "Tver State Medical University",
      annualTuition: "~₹3.5–4.5L",
      sixYearTotal: "~₹21–27L",
    },
  ],
  livingTableTitle: "Living Expense",
  livingColMonthly: "Monthly",
  livingColAnnual: "Annual",
  livingRows: [
    {
      item: "University Hostel",
      monthly: "₹3,000–6,000",
      annual: "₹36,000–72,000",
    },
    {
      item: "Food (Indian mess + groceries)",
      monthly: "₹4,000–7,000",
      annual: "₹48,000–84,000",
    },
    {
      item: "Local transport & mobile",
      monthly: "₹1,500–3,000",
      annual: "₹18,000–36,000",
    },
    {
      item: "Winter clothing & misc.",
      monthly: "₹2,000–4,000 (avg.)",
      annual: "₹24,000–48,000",
    },
  ],
  summaryCardTitle: "Total 6-Year Cost (Budget University)",
  summaryLines: [
    { label: "Tuition (6 years)", value: "₹18–36L" },
    { label: "Hostel (6 years)", value: "₹2.2–4.3L" },
    { label: "Food & living", value: "₹4.3–7.5L" },
    { label: "Insurance & misc.", value: "₹1–2L" },
    { label: "One-time visa & travel", value: "₹80K–1.5L" },
  ],
  summaryTotalLabel: "TOTAL (Budget Universities)",
  summaryTotalValue: "₹18–36 Lakhs",
  summaryFootnote:
    "Indian private medical college MBBS costs ₹50L – ₹1.5Cr — 2 to 5× higher for comparable NMC-recognised degrees.",
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

export const russiaAbroadIntakePeriodContent: AbroadIntakePeriodContent = {
  eyebrow: "Application timeline",
  titlePrimary: "MBBS in Russia —",
  titleAccent: "Intake Periods",
  primaryCard: {
    icon: "🎯",
    title: "September Intake (Primary)",
    rows: [
      { label: "Application Opens", value: "May – June 2025" },
      { label: "Application Deadline", value: "July – August 2025" },
      { label: "Offer Letter", value: "July – August 2025" },
      { label: "Visa Application", value: "August 2025" },
      { label: "Classes Begin", value: "September 2025" },
      { label: "Availability", value: "All 10 Universities" },
    ],
    footerNote:
      "Recommended for all first-year students. Apply by June for best university selection and maximum seats.",
  },
  secondaryCard: {
    icon: "📅",
    title: "February Intake (Secondary)",
    rows: [
      { label: "Application Opens", value: "October – November" },
      { label: "Application Deadline", value: "December" },
      { label: "Offer Letter", value: "December – January" },
      { label: "Visa Application", value: "January" },
      { label: "Classes Begin", value: "February" },
      { label: "Availability", value: "Select Universities Only" },
    ],
    footerNote:
      "For students who missed September. Fewer university options. Confirm with Taksheela for February availability at specific universities.",
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

export const russiaAbroadTeachingMethodologyContent: AbroadTeachingMethodologyContent = {
  eyebrow: "How you learn",
  titlePrimary: "Teaching Methodology at",
  titleAccent: "Russian Medical Universities",
  items: [
    {
      icon: "📖",
      title: "Lecture-Based Instruction",
      description:
        "Theoretical subjects — anatomy, biochemistry, physiology, pathology — taught in English by experienced faculty. Structured semesters with defined learning outcomes.",
    },
    {
      icon: "🔬",
      title: "Laboratory & Practical Sessions",
      description:
        "Dissection labs, histology microscopes, biochemistry practicals from Year 1. Modern simulation centres and virtual anatomy tables at top-tier universities.",
    },
    {
      icon: "🏥",
      title: "Hospital Clinical Rotations",
      description:
        "From Year 3, rotations through affiliated government hospitals. General medicine, surgery, obstetrics, paediatrics, psychiatry. High patient volumes ensure real-world exposure.",
    },
    {
      icon: "🗣️",
      title: "Russian Language Training",
      description:
        "Compulsory Russian language from Year 1 for patient communication. Basic conversational proficiency typically achieved within 2 years — NMC-mandated.",
    },
    {
      icon: "💻",
      title: "Digital & E-Learning",
      description:
        "Sechenov, RUDN, and Kazan lead in digital libraries, virtual anatomy tables, and online patient simulation systems supplementing in-person instruction.",
    },
    {
      icon: "📝",
      title: "Assessment Formats",
      description:
        "Written exams, oral viva sessions, practical competency evaluations, and OSCE formats. Semester-based examinations conducted in English throughout.",
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

export const russiaAbroadMbbsSyllabusContent: AbroadMbbsSyllabusContent = {
  eyebrow: "Curriculum",
  titlePrimary: "MBBS Syllabus in Russia",
  titleAccent: "— Year by Year",
  subtitle:
    "The 6-year MD Physician program — meeting NMC's minimum 54-month academic requirement plus 12-month internship.",
  years: [
    {
      yearLabel: "Year 1",
      title: "Pre-Clinical Sciences I",
      description:
        "Anatomy (dissection), Medical Biology, Medical Chemistry, Medical Physics, Russian Language. Foundation of body structure and basic sciences.",
      badgeTone: "primary",
    },
    {
      yearLabel: "Year 2",
      title: "Pre-Clinical Sciences II",
      description:
        "Histology & Embryology, Biochemistry, Normal Physiology, Microbiology & Virology (introduction), Russian Language II.",
      badgeTone: "primary",
    },
    {
      yearLabel: "Year 3",
      title: "Para-Clinical Sciences",
      description:
        "Pathological Anatomy, Pathophysiology, Pharmacology, Microbiology (full), Immunology, Biostatistics. Clinical rotations begin.",
      badgeTone: "primary",
    },
    {
      yearLabel: "Year 4",
      title: "Clinical Sciences I",
      description:
        "Internal Medicine, General Surgery, Obstetrics & Gynaecology (introduction), Neurology, Ophthalmology, ENT. Full clinical rotation schedule begins.",
      badgeTone: "primary",
    },
    {
      yearLabel: "Year 5",
      title: "Clinical Sciences II + GOZZ Preparation",
      description:
        "Paediatrics, Psychiatry, Oncology, Emergency Medicine, Forensic Medicine, Infectious Diseases. Final examinations and GOZZ preparation.",
      badgeTone: "primary",
    },
    {
      yearLabel: "Year 6",
      title: "Mandatory Internship (12 Months)",
      description:
        "Rotating clinical internship at university-affiliated hospital: general medicine, surgery, obstetrics, paediatrics, emergency medicine. Completion = FMGE/NExT eligibility.",
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

export const russiaAbroadCompleteComparisonContent: AbroadCompleteComparisonContent = {
  eyebrow: "Side by side",
  titlePrimary: "MBBS in Russia vs Other Countries",
  titleAccent: "— 2025–26 Complete Comparison",
  subtitle:
    "Data-driven comparisons for students asking 'Is Russia better than India, Bangladesh, or Philippines for MBBS?' — structured for AI-assisted decision-making.",
  blockHeading: "Russia · India · Bangladesh · Philippines — MBBS snapshot",
  colParameter: "Parameter",
  colFeatured: "RU MBBS in Russia",
  colIndiaGovt: "IN India (Govt. College)",
  colIndiaPrivate: "IN India (Private College)",
  colBangladesh: "🇧🇩 BD Bangladesh",
  colPhilippines: "🇵🇭 PH Philippines",
  rows: [
    {
      parameter: "Total 6-Year Cost",
      featured: "₹18–36 Lakhs (all-in)",
      indiaGovt: "₹5–15 Lakhs",
      indiaPrivate: "₹50L – ₹1.5 Crore",
      bangladesh: "₹15–30 Lakhs (typical all-in)",
      philippines: "₹20–40 Lakhs (typical all-in)",
    },
    {
      parameter: "For Nepal (NPR equiv.)",
      featured: "NPR 29–58 Lakh",
      indiaGovt: "NPR 8–24 Lakh",
      indiaPrivate: "NPR 80L – 2.4 Crore",
      bangladesh: "NPR 24–48 Lakh (approx.)",
      philippines: "NPR 32–64 Lakh (approx.)",
    },
    {
      parameter: "For Bangladesh (BDT equiv.)",
      featured: "BDT 24–49 Lakh",
      indiaGovt: "BDT 7–20 Lakh",
      indiaPrivate: "BDT 67L – 2 Crore",
      bangladesh: "Domestic fee bands; BDT 15–35 L common range",
      philippines: "PHP-based fees — BDT 20–45 L (equiv. estimate)",
    },
    {
      parameter: "Seat Availability",
      featured: "High — 50+ NMC-compliant universities",
      indiaGovt: "Very limited — 1.18L seats for 23L+ aspirants",
      indiaPrivate: "Limited, donation-dependent",
      bangladesh: "~8–10 NMC-listed institutions; widely available",
      philippines: "~8–10 recognised options; limited in some cities",
    },
    {
      parameter: "Admission Process",
      featured: "Merit-based, no donation, no capitation",
      indiaGovt: "Pure NEET merit, very competitive",
      indiaPrivate: "Opaque, capitation ₹20–80L common",
      bangladesh: "NEET + merit; transparent vs many private India routes",
      philippines: "NEET + academic screening; no donation route typical",
    },
    {
      parameter: "NEET Requirement",
      featured: "Qualifying score (any percentile)",
      indiaGovt: "Very high rank essential",
      indiaPrivate: "Moderate rank + large payment",
      bangladesh: "Qualifying score mandatory (NMC)",
      philippines: "Qualifying score mandatory (NMC)",
    },
    {
      parameter: "Program Duration",
      featured: "6 years (5 academic + 1 internship)",
      indiaGovt: "5.5 years (4.5 + 1 internship)",
      indiaPrivate: "5.5 years",
      bangladesh: "5 years + 1-year internship (typical pathway)",
      philippines: "4 yrs pre-med + 4 yrs MD + 1-yr internship (typical)",
    },
    {
      parameter: "Medium of Instruction",
      featured: "English (full) + Russian (clinical subject)",
      indiaGovt: "English + regional languages",
      indiaPrivate: "English",
      bangladesh: "Bengali + English (programme-dependent)",
      philippines: "English only (majority of programmes)",
    },
    {
      parameter: "Licensing Exam (India)",
      featured: "GOZZ (Russia) → FMGE or NExT (India)",
      indiaGovt: "NExT only",
      indiaPrivate: "NExT only",
      bangladesh: "FMGE / NExT after BMDC registration pathway",
      philippines: "FMGE / NExT; strong USMLE prep culture at many schools",
    },
    {
      parameter: "Global Recognition",
      featured: "WHO, NMC, ECFMG, FAIMER, WFME",
      indiaGovt: "NMC — globally recognised",
      indiaPrivate: "NMC — varies by institution",
      bangladesh: "WHO, NMC, BMDC alignment for Indian students",
      philippines: "WHO, NMC; USMLE pathway widely advertised",
    },
    {
      parameter: "Clinical Exposure",
      featured: "High — large govt. hospitals, Year 3+",
      indiaGovt: "Very High",
      indiaPrivate: "Moderate — varies by college",
      bangladesh: "Strong at approved teaching hospitals",
      philippines: "Varies — strong at established universities",
    },
    {
      parameter: "Donation / Capitation",
      featured: "None",
      indiaGovt: "None",
      indiaPrivate: "₹20–80L typically",
      bangladesh: "None",
      philippines: "None",
      isDonationRow: true,
    },
    {
      parameter: "Best For",
      featured: "Students needing a seat with NMC compliance at low cost",
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

export const russiaAbroadOurStoriesContent: AbroadOurStoriesContent = {
  eyebrow: "Real experiences",
  titlePrimary: "Stories from Our Students",
  titleAccent: "in Russia",
  stories: [
    {
      rating: 5,
      quote:
        "The English-medium faculty at Kazan cleared every doubt I had about studying abroad. Clinical postings started in Year 3 — real patients, real learning. TIE’s counselling made visa and hostel feel straightforward.",
      name: "Riya Mehta",
      meta: "MBBS Year 2, KSMU Kazan | Jaipur, India",
      initial: "R",
    },
    {
      rating: 5,
      quote:
        "I chose Sechenov for its research exposure. Moscow felt overwhelming at first, but the Indian student community here is strong. FMGE-focused mentoring from seniors helped me plan early.",
      name: "Arjun Nair",
      meta: "MBBS Year 4, Sechenov University | Kochi, India",
      initial: "A",
    },
    {
      rating: 5,
      quote:
        "Fees were transparent — no hidden donation story. Russian language classes were tough initially but our batch supports each other. I’d recommend verifying NMC-listed universities before you fly.",
      name: "Sana Sheikh",
      meta: "MBBS Year 3, RUDN Moscow | Hyderabad, India",
      initial: "S",
    },
    {
      rating: 5,
      quote:
        "St. Petersburg’s campus is beautiful and the hospitals are busy — great for clinical confidence. Homesick moments happen; video calls and festivals on campus make it feel like a second home.",
      name: "Karan Bhatt",
      meta: "MBBS Year 1, Pavlov University | Ahmedabad, India",
      initial: "K",
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

export const russiaAbroadAccommodationClimateContent: AbroadAccommodationClimateContent = {
  eyebrow: "Campus life",
  titlePrimary: "Accommodation &",
  titleAccent: "Climate",
  hostel: {
    title: "Hostel Accommodation",
    bullets: [
      "Most NMC-listed universities offer on-campus hostels or partner housing within a short commute of lecture blocks.",
      "Male and female students are typically assigned separate blocks or floors with controlled access.",
      "Rooms are commonly shared (2–4 beds) with basic furniture, study desk, wardrobe, and shared washrooms on each floor.",
      "Mess or canteen facilities are available on campus or nearby; larger cities often have Indian vegetarian options.",
      "Wi‑Fi, laundry, heating, and 24×7 security are standard at university-managed hostels in major cities.",
      "Annual hostel fees vary by city, room type (shared vs twin), and whether utilities are bundled — confirm before you fly.",
      "TIE can help you shortlist verified hostel options and what to pack for your first semester in Russia.",
    ],
  },
  climate: {
    title: "Climate Conditions in University Cities",
    intro:
      "Russia spans many climate zones — winters are cold and long, while summers are generally mild and pleasant. Layered clothing is essential.",
    rows: [
      { city: "Moscow / St. Petersburg", ranges: "Winter: -10 to -20°C | Summer: 20–25°C" },
      { city: "Kazan (KSMU)", ranges: "Winter: -15 to -25°C | Summer: 22–28°C" },
      { city: "Novosibirsk", ranges: "Winter: -20 to -30°C | Summer: 18–26°C" },
      { city: "Yekaterinburg", ranges: "Winter: -15 to -25°C | Summer: 20–26°C" },
      { city: "Rostov-on-Don", ranges: "Winter: -5 to -12°C | Summer: 25–32°C" },
      { city: "Vladivostok", ranges: "Winter: -12 to -20°C | Summer: 18–24°C" },
    ],
    tipLabel: "Taksheela Tip",
    tipBody:
      "Coming from a warm Indian climate? Invest in a good winter jacket, thermal wear, and waterproof boots before departure — you’ll need them from late October onward. Layering beats one bulky coat indoors.",
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

export const russiaAbroadKeyFactsContent: AbroadKeyFactsContent = {
  eyebrow: "Russia at a glance",
  titlePrimary: "Key Facts for",
  titleAccent: "Medical Students",
  items: [
    { icon: "🌍", value: "17M km²", label: "WORLD'S LARGEST COUNTRY" },
    { icon: "👥", value: "144M", label: "POPULATION" },
    { icon: "🏙️", value: "Moscow", label: "CAPITAL CITY" },
    { icon: "💱", value: "Ruble (₽)", label: "CURRENCY" },
    { icon: "🏛️", value: "70+", label: "MEDICAL UNIVERSITIES" },
    { icon: "✈️", value: "~6–8 hrs", label: "DELHI TO MOSCOW" },
    { icon: "🍽️", value: "Available", label: "INDIAN FOOD ACCESS" },
    { icon: "🤝", value: "Strong", label: "INDIA-RUSSIA RELATIONS" },
    { icon: "🛡️", value: "Safe", label: "UNIVERSITY CITIES" },
    { icon: "📡", value: "English", label: "MEDIUM AT ALL 10 UNIS" },
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

export const russiaAbroadScholarshipsContent: AbroadScholarshipsContent = {
  eyebrow: "Financial aid",
  title: "Scholarships for MBBS in Russia",
  subtitle:
    "Explore government, university, and India-based funding routes that can lower your cost of study — eligibility and seat quotas change yearly, so verify deadlines with the issuing body.",
  cards: [
    {
      iconKey: "building",
      title: "Russian Government Scholarship (ROSSOTRUDNICHESTVO)",
      description:
        "Federal scholarships for international students channelled through Russian universities and Rossotrudnichestvo missions. Awards may cover tuition partly or fully for selected programmes.",
      bullets: [
        "Typically tied to embassy nomination and academic merit; quotas vary by country.",
        "Often requires Russian language pathway or preparatory year unless specified otherwise.",
        "Apply early — documentation and attestations can take several months.",
        "Confirm NMC-listed university status before accepting any award.",
      ],
    },
    {
      iconKey: "graduation",
      title: "University Merit Scholarships",
      description:
        "Individual medical universities offer merit- or entrance-based fee waivers for strong NEET or internal exam performance. Rules differ by institution and intake.",
      bullets: [
        "May apply as a percentage off annual tuition for Year 1 or renewable terms.",
        "Often combined with hostel or academic performance conditions.",
        "Usually processed through the university after admission, not before visa.",
        "Ask your counsellor for the latest list of partner universities with active schemes.",
      ],
    },
    {
      iconKey: "books",
      title: "Indian Government Scholarships",
      description:
        "Central and state schemes for overseas medical study may apply depending on category, state domicile, and income — each programme has its own form and timeline.",
      bullets: [
        "Check eligibility for schemes aimed at SC/ST/OBC/EWS or merit-based national awards.",
        "Maintain attested marksheets, NEET scorecard, and admission letter ready.",
        "Disbursement timelines rarely align with Russia’s fee due dates — plan liquidity.",
        "TIE can guide on documentation; final approval rests with the granting authority.",
      ],
    },
    {
      iconKey: "globe",
      title: "Education Exchange Programs",
      description:
        "Bilateral student exchanges and institutional partnerships sometimes offer fee support or semester mobility between Indian and Russian institutions.",
      bullets: [
        "Usually limited seats and faculty-nominated or competitive selection.",
        "May require partial study in India and partial in Russia — check credit transfer.",
        "Ideal for research exposure or elective terms rather than full MBBS funding.",
        "Verify that the pathway still meets NMC internship and licensing requirements.",
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

export const russiaAbroadEducationLoanContent: AbroadEducationLoanContent = {
  eyebrow: "Financing your MBBS",
  title: "Education Loans for MBBS in Russia",
  nationalised: {
    title: "Nationalised Banks (India)",
    description:
      "Major Indian public-sector banks offer IBA-aligned overseas education loan products for MBBS abroad, including Russia, subject to eligibility, margin money, and collateral as per policy.",
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
export const russiaAbroadCareerOpportunitiesContent: AbroadTeachingMethodologyContent = {
  eyebrow: "After graduation",
  titlePrimary: "Career Opportunities After MBBS in",
  titleAccent: "Russia",
  intro:
    "An NMC-compliant Russian MBBS degree, combined with FMGE/NExT clearance, opens genuine pathways in India and globally.",
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
        "Russia's strong research tradition opens doors in pharmacology, oncology, and biomedical sciences globally.",
    },
    {
      icon: "🏢",
      title: "Healthcare Administration",
      description:
        "MBA/MHA alongside MBBS for hospital management, healthcare policy, and pharmaceutical management.",
    },
    {
      icon: "RU",
      title: "Practice in Russia (GOZZ)",
      description:
        "Clear GOZZ and obtain Russian medical licence to practice or pursue postgraduate research in Russia.",
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

export const russiaAbroadWhyChooseTaksheelaContent: AbroadWhyChooseTaksheelaContent = {
  eyebrow: "Your Russia MBBS partner",
  titlePrimary: "Why Choose Taksheela for",
  titleAccent: "MBBS in Russia?",
  subtitle:
    "Not just a consultancy — your end-to-end medical career partner from NEET score to Russian medical licence.",
  items: [
    {
      icon: "🎯",
      title: "Russia-Specialist Counsellors",
      description:
        "Advisors trained on Russian medical universities, NMC compliance, city-wise living costs, and realistic FMGE timelines — not generic abroad talk.",
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
        "Structured checklists for admission letters, apostille, translations, and embassy paperwork — fewer rejections and last-minute panic.",
    },
    {
      icon: "🛂",
      title: "Visa & Travel Hand-Holding",
      description:
        "Invitation letters, visa filing guidance, pre-departure briefings, and travel coordination so your first landing in Russia feels planned, not chaotic.",
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

export const russiaAbroadRegulatoryFrameworkContent: AbroadRegulatoryFrameworkContent = {
  eyebrow: "Regulatory framework",
  titlePrimary: "NMC Gazette Rules &",
  titleAccent: "Russia Compliance",
  subtitle:
    "These 6 NMC rules determine whether your Russian MBBS degree can be used to practice medicine in India. All Taksheela-recommended universities comply with all 6.",
  rules: [
    {
      icon: "📅",
      title: "Rule 1 — Minimum 54 Months",
      description:
        "The programme must include at least 54 months (4.5 years) of full-time medical education, excluding the one-year internship. Russia’s standard 6-year English-medium MBBS pathway meets this when structured as 5 academic years plus internship.",
    },
    {
      icon: "🏥",
      title: "Rule 2 — 12-Month Internship",
      description:
        "A compulsory 12-month internship is required, completed at the same institution or its affiliated teaching hospitals. NMC-compliant Russian universities integrate this internship into the 6-year curriculum.",
    },
    {
      icon: "🌐",
      title: "Rule 3 — English Medium",
      description:
        "The entire course, including theory and clinical training, must be delivered in English for the full duration. Recommended universities offer English-medium instruction aligned with NMC’s abroad-MBBS guidelines.",
    },
    {
      icon: "🪪",
      title: "Rule 4 — Russian Medical Licence",
      description:
        "Graduates must be eligible to obtain registration / licensing to practise in the country of award (e.g. Russian Federation requirements such as state exams where applicable). This is part of proving a complete, recognised medical qualification.",
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
        "The university must be listed in the World Directory of Medical Schools (WDOMS). Taksheela shortlists only institutions that appear on WHO’s directory and satisfy NMC’s screening / FMGE pathway requirements.",
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

const ru = (n: number) => `${imageBaseUrl ?? ""}mbbsCollege/russia/rus${n}.png`;

export const russiaTopUniversityCards: AbroadTopUniversityCard[] = [
  {
    id: "ksmu",
    name: "Kazan State Medical University",
    abbreviation: "KSMU",
    established: "1814",
    locationLine: "Kazan, Republic of Tatarstan",
    region: "other",
    budgetFriendly: false,
    fmgePercent: 30.73,
    headerTags: [
      { label: "NMC Compliant", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "30–32% FMGE", variant: "amber" },
    ],
    rankTag: "Top 5 in Russia",
    headerEmoji: "🏛️",
    imageSrc: ru(1),
    stats: [
      { label: "Annual fees", value: "~$5,650/yr (₹4.7L)" },
      { label: "6-year total", value: "~₹42 Lakhs" },
      { label: "Duration", value: "6 Years" },
      { label: "Medium", value: "English" },
    ],
    fmge: {
      type: "text",
      text: "FMGE Pass Rate 2024: 30.73% (134/436 graduates)",
    },
    description: [
      "Founded in 1814, KSMU is one of Russia's oldest medical schools and a flagship institution in Kazan. It combines deep clinical heritage with modern simulation labs and strong international student support.",
      "Indian students benefit from structured FMGE-oriented mentoring, English-medium instruction, and an active diaspora in a student-friendly city.",
    ],
    featureTags: ["Founded 1814", "33 Affiliated Hospitals", "800+ Indian Students", "ECFMG Recognised"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "rudn",
    name: "Peoples' Friendship University of Russia",
    abbreviation: "RUDN",
    established: "1960",
    locationLine: "Moscow (Central)",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 45.45,
    headerTags: [
      { label: "NMC Compliant", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "45%+ FMGE", variant: "amber" },
    ],
    rankTag: "World Rank 923 (QS)",
    subtitle: "RUDN – Moscow, Russia",
    headerEmoji: "🌍",
    imageSrc: ru(2),
    stats: [
      { label: "Annual fees", value: "~$9,200/yr (₹7.6L)" },
      { label: "6-year total", value: "~₹52 Lakhs" },
      { label: "Duration", value: "6 Years" },
      { label: "Medium", value: "English" },
    ],
    fmge: {
      type: "bar",
      barLabel: "45.45% — Highest Among Featured Universities",
      barPercent: 90,
    },
    description: [
      "RUDN is globally known for its diverse student body and strong English-taught MBBS track. Moscow offers unmatched clinical exposure and connectivity for internships and electives.",
      "Consistently strong FMGE outcomes make RUDN a top pick for Indian applicants targeting competitive licensing performance.",
    ],
    featureTags: ["International Campus", "FMGE Coaching Partners", "Indian Mess Options", "ECFMG"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "rsmu",
    name: "Russian National Research Medical University",
    abbreviation: "RNRMU / RSMU",
    established: "1906",
    locationLine: "Moscow",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 38,
    headerTags: [
      { label: "NMC Compliant", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "38–42% FMGE", variant: "amber" },
    ],
    rankTag: "Premier Moscow Medical Hub",
    subtitle: "RNRMU – Moscow, Russia",
    headerEmoji: "🔬",
    imageSrc: ru(3),
    stats: [
      { label: "Annual fees", value: "~$8,800/yr (₹7.3L)" },
      { label: "6-year total", value: "~₹50 Lakhs" },
      { label: "Duration", value: "6 Years" },
      { label: "Location", value: "Moscow (Central)" },
    ],
    fmge: {
      type: "text",
      text: "FMGE Pass Rate 2024: strong cohort performance among Moscow research universities.",
    },
    description: [
      "RNRMU blends research-led teaching with extensive hospital networks across Moscow. Ideal for students who want a research edge alongside clinical training.",
      "English-medium programs align with NMC norms; clinical years build communication skills for diverse patient populations.",
    ],
    featureTags: ["Research Institutes", "Teaching Hospitals", "Indian Student Office", "NMC Aligned"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "msmu",
    name: "Moscow State Medical University",
    abbreviation: "MSMU",
    established: "1758",
    locationLine: "Moscow",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 35,
    headerTags: [
      { label: "NMC Compliant", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "8,000+ Students", variant: "amber" },
    ],
    rankTag: "Moscow University",
    subtitle: "MSMU – Moscow, Russia",
    headerEmoji: "🏥",
    imageSrc: ru(4),
    stats: [
      { label: "Annual fees", value: "~₹4–5.5L / year" },
      { label: "6-year total", value: "~₹24–33 Lakhs" },
      { label: "Duration", value: "6 Years" },
      { label: "Medium", value: "English" },
    ],
    fmge: {
      type: "text",
      text: "FMGE outcomes vary by cohort; counselling focuses on high-discipline preparation pathways.",
    },
    description: [
      "Among Russia's most recognised names in medicine, MSMU offers robust infrastructure and deep clinical rotations through leading Moscow hospitals.",
      "Strong alumni networks support electives and career planning for students targeting multiple licensing exams.",
    ],
    featureTags: [
      "Moscow Location",
      "NMC Approved",
      "English Medium",
      "Hospital Network",
      "Indian Community",
    ],
    applyHref: "/contact",
    availabilityText: "Limited Seats 2026-27",
  },
  {
    id: "sechenov",
    name: "I.M. Sechenov First Moscow State Medical University",
    abbreviation: "Sechenov",
    established: "1758",
    locationLine: "Moscow",
    region: "moscow",
    budgetFriendly: false,
    fmgePercent: 42,
    headerTags: [
      { label: "NMC Compliant", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "40%+ FMGE", variant: "amber" },
    ],
    rankTag: "Oldest in Russia 1758",
    subtitle: "Sechenov University – Moscow, Russia",
    headerEmoji: "⭐",
    imageSrc: ru(5),
    stats: [
      { label: "Annual fees", value: "~$10,000/yr (₹8.4L)" },
      { label: "6-year total", value: "~₹50 Lakhs" },
      { label: "Duration", value: "6 Years" },
      { label: "Hospital beds", value: "3,000+ Beds" },
    ],
    fmge: {
      type: "bar",
      barLabel: "~42% — Strong FMGE Track (selected cohorts)",
      barPercent: 78,
    },
    description: [
      "Sechenov University carries centuries of prestige with modern campuses and advanced research centres. Clinical training emphasises evidence-based practice.",
      "Popular with international students seeking a flagship Moscow brand with structured support for licensing exams.",
    ],
    featureTags: ["Founded 1758", "3,000 Hospital Beds", "25 Clinics", "Robotic Surgery", "Global Alumni"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "nsmu",
    name: "Northern State Medical University",
    abbreviation: "NSMU",
    established: "1932",
    locationLine: "Arkhangelsk",
    region: "other",
    budgetFriendly: true,
    fmgePercent: 28,
    headerTags: [
      { label: "NMC Compliant", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Budget Track", variant: "rose" },
    ],
    rankTag: "Arctic Region Clinical Exposure",
    headerEmoji: "🧠",
    imageSrc: ru(6),
    stats: [
      { label: "Annual fees", value: "~₹3–4L / year" },
      { label: "6-year total", value: "~₹18–24 Lakhs" },
      { label: "Duration", value: "6 Years" },
      { label: "Departments", value: "55 (27 Clinical)" },
    ],
    fmge: {
      type: "text",
      text: "FMGE preparation benefits from small batch mentoring and focused coaching add-ons.",
    },
    description: [
      "NSMU offers affordable tuition with a close-knit campus environment. Clinical training includes regional hospital networks across the North.",
      "Best suited for students prioritising cost control while meeting NMC-compliant programme structure.",
    ],
    featureTags: [
      "55 Departments",
      "27 Clinical Depts",
      "1,000 Researchers",
      "ECFMG Recognised",
      "Budget-Friendly",
    ],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "tver",
    name: "Tver State Medical University",
    abbreviation: "Tver TSMU",
    established: "1936",
    locationLine: "Tver",
    region: "other",
    budgetFriendly: true,
    fmgePercent: 40,
    headerTags: [
      { label: "NMC Compliant", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "~40% FMGE", variant: "amber" },
    ],
    rankTag: "Consistent FMGE Performer",
    subtitle: "Tver TSMU – Tver, Russia",
    headerEmoji: "📍",
    imageSrc: ru(7),
    stats: [
      { label: "Annual fees", value: "~₹3.5–4.5L / year" },
      { label: "6-year total", value: "~₹21–27 Lakhs" },
      { label: "Duration", value: "6 Years" },
      { label: "Location", value: "170 km from Moscow" },
    ],
    fmge: {
      type: "bar",
      barLabel: "~40% — Consistently strong FMGE outcomes",
      barPercent: 72,
    },
    description: [
      "Tver TSMU is widely chosen by Indian students for balanced fees and reliable academic delivery. The city is calmer than Moscow yet well connected by rail.",
      "Long-standing Indian student community with mess options and peer support for licensing exams.",
    ],
    featureTags: [
      "Founded 1936",
      "~40% FMGE Rate",
      "Top 10 Russia",
      "Near Moscow",
      "Ministry of Health",
    ],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "spsp",
    name: "Saint Petersburg State Pediatric Medical University",
    abbreviation: "SPSPMU",
    established: "1925",
    locationLine: "Saint Petersburg",
    region: "other",
    budgetFriendly: false,
    fmgePercent: 32,
    headerTags: [
      { label: "NMC Compliant", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
    ],
    rankTag: "Pediatric Focus Excellence",
    headerEmoji: "👶",
    imageSrc: ru(8),
    stats: [
      { label: "Annual fees", value: "~$6,100/yr (₹5.0L)" },
      { label: "6-year total", value: "~₹44 Lakhs" },
      { label: "Duration", value: "6 Years" },
      { label: "Location", value: "Saint Petersburg" },
    ],
    fmge: {
      type: "text",
      text: "FMGE Pass Rate 2024: mid-tier cohort; strong clinical paediatrics foundation.",
    },
    description: [
      "Unique pediatric medical focus within a historic city campus. Clinical exposure includes leading children's hospitals in the region.",
      "Attractive for students who want a European-style city experience with strong cultural life.",
    ],
    featureTags: ["Pediatric Speciality", "Cultural City", "English Program", "Hospital Network"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "bsmu",
    name: "Bashkir State Medical University",
    abbreviation: "BSMU",
    established: "1932",
    locationLine: "Ufa",
    region: "other",
    budgetFriendly: true,
    fmgePercent: 33,
    headerTags: [
      { label: "NMC Compliant", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
      { label: "Budget Friendly", variant: "rose" },
    ],
    rankTag: "Volga Region Hub",
    headerEmoji: "🌿",
    imageSrc: ru(9),
    stats: [
      { label: "Annual fees", value: "~$4,500/yr (₹3.7L)" },
      { label: "6-year total", value: "~₹34 Lakhs" },
      { label: "Duration", value: "6 Years" },
      { label: "Medium", value: "English" },
    ],
    fmge: {
      type: "text",
      text: "FMGE outcomes improving with structured coaching partnerships and peer groups.",
    },
    description: [
      "BSMU offers one of the more affordable English-medium tracks with growing Indian enrolment. Ufa provides lower living costs than capitals.",
      "Suitable for families seeking predictable total spend across six years.",
    ],
    featureTags: ["Affordable", "Hostel", "Halal Options Nearby", "NMC Listed"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
  {
    id: "ismu",
    name: "Irkutsk State Medical University",
    abbreviation: "ISMU",
    established: "1918",
    locationLine: "Irkutsk",
    region: "other",
    budgetFriendly: true,
    fmgePercent: 29,
    headerTags: [
      { label: "NMC Compliant", variant: "emerald" },
      { label: "WHO Listed", variant: "sky" },
    ],
    rankTag: "Siberian Clinical Training",
    headerEmoji: "❄️",
    imageSrc: ru(10),
    stats: [
      { label: "Annual fees", value: "~$4,300/yr (₹3.6L)" },
      { label: "6-year total", value: "~₹33 Lakhs" },
      { label: "Duration", value: "6 Years" },
      { label: "Recognition", value: "NMC · WHO" },
    ],
    fmge: {
      type: "text",
      text: "FMGE preparation emphasises disciplined self-study with external coaching ecosystems.",
    },
    description: [
      "ISMU serves students seeking lower tuition with full 6-year English-medium delivery. Irkutsk offers a distinct cultural setting near Lake Baikal tourism corridor.",
      "Indian student groups organise shared accommodation and festival celebrations for easier transition.",
    ],
    featureTags: ["Low Fees", "English Medium", "Student Associations", "Clinical Rotations"],
    applyHref: "/contact",
    availabilityText: "Seats Available 2026-27",
  },
];

export const russiaAbroadTopUniversitiesContent: AbroadTopUniversitiesContent = {
  eyebrow: "WHERE TO STUDY",
  titlePrimary: "Top 10 Medical Universities in Russia",
  titleAccent: "for Indian Students 2026-27",
  intro:
    "Hand-picked NMC-compliant, WHO-listed institutions with transparent fee bands, FMGE track signals, and city fit — filter by Moscow, value, or FMGE strength to shortlist faster.",
  cardWatermarkCode: "RU",
  filters: [
    { id: "all", label: "All Universities" },
    { id: "moscow", label: "Moscow" },
    { id: "other", label: "Other Cities" },
    { id: "budget", label: "Budget-Friendly" },
    { id: "top_fmge", label: "Top FMGE Rate" },
  ],
  /** Only RUDN + Tver in the Top FMGE Rate tab */
  topFmgeFilterIds: ["rudn", "tver"],
  universities: russiaTopUniversityCards,
  quickComparison: {
    title: "Quick Comparison — All 10 Universities",
    disclaimer:
      "Fees are approximate for 2025–26 based on publicly available data. Exact figures vary by year and exchange rate. Verified breakdown provided during free counselling.",
    rows: [
      {
        university: "Kazan KSMU",
        city: "Kazan",
        established: "1814",
        annualFees: "~₹4.7L/yr",
        fmgeRate: "30–32%",
        bestFor: "Value + Indian community",
      },
      {
        university: "RUDN University",
        city: "Moscow",
        established: "1960",
        annualFees: "~₹7.6L/yr",
        fmgeRate: "45.45%",
        fmgeHighlight: true,
        bestFor: "Highest FMGE + global rank",
      },
      {
        university: "Pirogov RNRMU",
        city: "Moscow",
        established: "1906",
        annualFees: "~₹7.3L/yr",
        fmgeRate: "38–42%",
        bestFor: "Research + clinical",
      },
      {
        university: "Moscow State (MSMU)",
        city: "Moscow",
        established: "1758",
        annualFees: "~₹7.0L/yr",
        fmgeRate: "Strong",
        bestFor: "Legacy brand + hospitals",
      },
      {
        university: "Sechenov University",
        city: "Moscow",
        established: "1758",
        annualFees: "~₹7.5L/yr",
        fmgeRate: "~42%",
        bestFor: "Heritage + research",
      },
      {
        university: "NSMU",
        city: "Arkhangelsk",
        established: "1932",
        annualFees: "~₹3–4L/yr",
        fmgeRate: "Good",
        bestFor: "Budget + research",
      },
      {
        university: "Tver TSMU",
        city: "Tver",
        established: "1936",
        annualFees: "~₹4.0L/yr",
        fmgeRate: "~40%",
        fmgeHighlight: true,
        bestFor: "FMGE track + near Moscow",
      },
      {
        university: "SPSPMU",
        city: "St Petersburg",
        established: "1925",
        annualFees: "~₹5.0L/yr",
        fmgeRate: "Moderate",
        bestFor: "Pediatrics + culture",
      },
      {
        university: "BSMU",
        city: "Ufa",
        established: "1932",
        annualFees: "~₹3.7L/yr",
        fmgeRate: "Good",
        bestFor: "Affordable + diversity",
      },
      {
        university: "ISMU",
        city: "Irkutsk",
        established: "1918",
        annualFees: "~₹3.6L/yr",
        fmgeRate: "Moderate",
        bestFor: "Low fees + English track",
      },
    ],
  },
};

// --- FAQ — Russia MBBS (FAQPage schema / AI-optimised) ----------------------------

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

export const russiaAbroadFaqPageContent: AbroadFaqPageContent = {
  eyebrow: "Frequently asked questions",
  title: "MBBS in Russia 2026-27 — FAQs for India, Nepal and Bangladesh Students",
  subtitle:
    "Structured for FAQPage rich results and natural-language queries — including INR, NPR, and BDT-specific cost questions.",
  items: [
    {
      question: "Which are the best NMC-approved universities in Russia for Indian students in 2025?",
      answer:
        "The top 10 Taksheela-recommended NMC-compliant universities: (1) Kazan KSMU (est.1814, Kazan), (2) RUDN University (est.1960, Moscow, World Rank 923), (3) Pirogov RNRMU (est.1906, Moscow), (4) Moscow State MSMU, (5) Sechenov University (est.1758, oldest in Russia), (6) NSMU (est.1932, Arkhangelsk), (7) Tver TSMU (est.1936, 170km from Moscow), (8) SPSPMU (est.1925, St Petersburg), (9) BSMU (est.1932, Ufa), (10) ISMU (est.1918, Irkutsk). All WHO-listed and NMC-compliant.",
    },
    {
      question: "Is MBBS in Russia better than Bangladesh for Indian students?",
      answer:
        "For India-return careers, Russia offers: 50+ NMC-compliant universities vs ~8-10 in Bangladesh; 27,000+ Indian student community (world largest) vs much smaller in Bangladesh; RUDN at 45.45% FMGE and Tver TSMU at ~40% match or exceed Bangladesh FMGE averages; 200-year institutional heritage. Bangladesh may suit students preferring warmer climate or cultural familiarity. Taksheela provides personalised advice based on NEET score, budget, and career goals.",
    },
    {
      question:
        "What is the total cost of MBBS in Russia in Indian Rupees, Nepali Rupees (NPR), and Bangladeshi Taka (BDT)?",
      answer:
        "Total 6-year all-inclusive cost: Indian Rupees: Rs 18-36 lakhs. Nepal NPR: approximately NPR 29-58 lakh (Rs x ~1.6). Bangladesh BDT: approximately BDT 24-49 lakh (Rs x ~1.35). Budget universities (NSMU, ISMU, TSMU) at lower end; premium institutions (Sechenov ~Rs 50L, RUDN ~Rs 55L) at higher end. Annual living: Rs 1.2-2.4 lakh per year in all featured cities.",
    },
    {
      question: "What is the FMGE pass rate at RUDN University Russia in 2024?",
      answer:
        "RUDN University recorded 45.45% FMGE pass rate in 2024 — highest among all 10 Taksheela-featured universities and significantly above the Russia average of 29.5%. RUDN holds world rank 923, attracts students from 150+ nations, and is in Moscow. Annual fees ~$11,000 (Rs 9.2L/year), total 6-year cost approximately Rs 55 lakhs. Top Taksheela recommendation for students prioritising India-return medical career.",
    },
    {
      question: "Is MBBS in Russia valid in India? What are the requirements to practice in India?",
      answer:
        "Yes, valid in India with four requirements: (1) Valid NEET-UG qualifying score before admission (NMC regulation, March 2019); (2) Complete minimum 54-month academic program + 12-month internship at same university hospital; (3) Pass GOZZ — Russia State Final Attestation in Russian language — to receive Russian medical licence; (4) Clear FMGE or NExT examination in India. All 10 Taksheela-featured universities satisfy requirements 2 and 3.",
    },
    {
      question: "Is NEET mandatory for MBBS in Russia?",
      answer:
        "Yes. NMC regulations (effective March 2019) require a valid NEET-UG qualifying score for Indian students studying MBBS abroad who want to practice in India. Score valid for 3 years. Russian universities do not set a minimum score. For Nepal: NEET or Nepali national medical entry test accepted. For Bangladesh: DGME-administered national medical entry test is the qualifying requirement.",
    },
    {
      question: "Which Russian medical university has the best FMGE pass rate?",
      answer:
        "Based on 2024 FMGE data: RUDN University leads at 45.45%, Tver TSMU achieves ~40%, KSMU achieves 30-42% depending on batch. Overall Russia average 29.5% (3,331 passed of 11,276 appeared). Choosing RUDN or TSMU can improve FMGE pass probability by 15-16 percentage points above the Russia average. Taksheela shortlisting is FMGE-data-driven, never commission-driven.",
    },
    {
      question: "Can students from Nepal and Bangladesh study MBBS in Russia through Taksheela?",
      answer:
        "Yes. Nepal: NEET or equivalent entry test required; total cost ~NPR 29-58 lakh; Taksheela provides Kathmandu document authentication, Russian visa support, Nepal NMC or Indian FMGE pathway guidance. Bangladesh: DGME entry test required; all 10 universities satisfy DGME compliance; total cost ~BDT 24-49 lakh; Taksheela provides DGME document compliance and Russian Embassy visa from Dhaka. Halal food confirmed in Kazan, Ufa, and Moscow.",
    },
    {
      question: "What is the GOZZ exam and why does it matter for FMGE eligibility?",
      answer:
        "GOZZ is Russia's State Final Attestation exam at end of Year 5, conducted in Russian language. Passing GOZZ is mandatory to receive the Russian medical degree and Russian medical licence. This Russian medical licence is a prerequisite before applying for FMGE or NExT in India. Without it the degree cannot be converted into an Indian medical licence. This is why Russian language training from Year 1 is essential, not optional.",
    },
    {
      question: "What is the total MBBS fee in Russia in Nepali Rupees (NPR) for 2026-27?",
      answer:
        "For Nepali students, total 6-year cost approximately NPR 29-58 lakh (~1 INR = 1.6 NPR). Budget universities NSMU and ISMU: NPR 29-39 lakh. Kazan KSMU mid-range: ~NPR 46-67 lakh. Premium institutions Sechenov and RUDN: NPR 80-88 lakh. Taksheela provides personalised NPR breakdown for Nepali students during free counselling.",
    },
    {
      question: "What is the total MBBS fee in Russia in Bangladeshi Taka (BDT) for 2026-27?",
      answer:
        "For Bangladeshi students, total 6-year cost approximately BDT 24-49 lakh (~1 INR = 1.35 BDT). NSMU and ISMU (budget): BDT 24-32 lakh. Tver TSMU and BSMU (mid-range): BDT 28-36 lakh. Sechenov and RUDN (premium): BDT 67-74 lakh. All 10 featured universities satisfy DGME Bangladesh compliance requirements.",
    },
    {
      question: "When should I apply for MBBS in Russia for September 2025 intake?",
      answer:
        "September 2025 intake: Applications open May-June 2025, deadline July-August 2025. Taksheela recommends starting by May to complete university shortlisting, MEA apostille (takes 2-4 weeks), and visa processing before August. All 10 featured universities participate in September intake. A secondary February intake exists at select universities for students who miss September.",
    },
  ],
};

// --- Pre-FAQ CTA banner (AbroadMbbsCtaBanner) ----------------------------------------

export type AbroadCtaBannerContent = {
  /** Shown in: Ready to Begin Your MBBS in {countryLabel} Journey? */
  countryLabel: string;
  subtitle: string;
  primaryCtaLabel: string;
  phoneDisplay: string;
  /** Value for <a href={`tel:${phoneTel}`}> — e.g. +919831241212 */
  phoneTel: string;
};

export const russiaAbroadCtaBannerContent: AbroadCtaBannerContent = {
  countryLabel: "Russia",
  subtitle:
    "Book your free counselling session. Get a personalised university shortlist, fee breakdown, and eligibility confirmation in 24 hours.",
  primaryCtaLabel: "Book Free Counselling",
  phoneDisplay: "+91 9831241212",
  phoneTel: "+919831241212",
};

export const russiaAbroadQuickFactsContent: AbroadQuickFactItem[] = [
  {
    icon: "🎓",
    label: "Degree Awarded",
    value: "MD Physician (equivalent to MBBS)",
    mLabel: "Degree",
    mValue: "MD (MBBS equiv.)",
  },
  {
    icon: "⏱️",
    label: "Course Duration",
    value: "6 Years (5 academic + 1 internship)",
    mLabel: "Duration",
    mValue: "6 yrs (5+1 intern)",
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
    label: "Eligibility",
    value: "50% PCB in 10+2 + NEET qualified",
    mLabel: "Eligibility",
    mValue: "50% PCB + NEET",
  },
  {
    icon: "🌐",
    label: "Medium of Instruction",
    value: "English + Russian (clinical year subject)",
    mLabel: "Medium",
    mValue: "English + Russian",
  },
  {
    icon: "💰",
    label: "Annual Tuition (Range)",
    value: "Rs. 2.7L - Rs. 8L / year",
    mLabel: "Tuition / yr",
    mValue: "₹2.7L–₹8L",
  },
  {
    icon: "🏠",
    label: "Annual Living Cost",
    value: "Rs. 1.2 - Rs. 2.4 Lakhs / year",
    mLabel: "Living / yr",
    mValue: "₹1.2L–₹2.4L",
  },
  {
    icon: "✅",
    label: "Recognised By",
    value: "WHO · NMC · ECFMG · FAIMER · WFME",
    mLabel: "Recognised",
    mValue: "WHO · NMC · WFME…",
  },
  {
    icon: "📊",
    label: "FMGE Pass Rate 2024",
    value: "~29.5% overall · Up to 45.45% top unis",
    mLabel: "FMGE 2024",
    mValue: "~29.5% · top ~45%",
  },
  {
    icon: "👩‍🎓",
    label: "Indian Students",
    value: "27,000+ (MEA, Dec 2025)",
    mLabel: "Indians",
    mValue: "27,000+",
  },
  {
    icon: "🏛️",
    label: "NMC-Compliant Universities",
    value: "50+ government medical universities",
    mLabel: "NMC unis",
    mValue: "50+ govt. colleges",
  },
  {
    icon: "📝",
    label: "IELTS / TOEFL",
    value: "Not required for admission",
    mLabel: "IELTS/TOEFL",
    mValue: "Not required",
  },
];

const russiaAbroadWhyChooseMbbsReasons: AbroadWhyChooseMbbsItem[] = [
  {
    icon: "🔥",
    title: "Government-Subsidised Affordable Fees",
    description:
      "Annual tuition from Rs. 2.7 lakh at government universities - total 6-year program Rs. 18-36L versus Rs. 50L-1.5Cr at Indian private colleges. Russian government subsidises medical education structurally.",
  },
  {
    icon: "✅",
    title: "50+ NMC-Compliant Universities",
    description:
      "The largest pool of NMC-compliant medical institutions in any single country - maximum choice across cities, fee levels, and specialisations for students from all three target countries.",
  },
  {
    icon: "🌐",
    title: "English-Medium Programs, No IELTS",
    description:
      "All 10 featured universities offer MBBS entirely in English. Russian language is taught as a compulsory subject. No IELTS or TOEFL required for admission - accessible for all NEET-qualified students.",
  },
  {
    icon: "🏥",
    title: "World-Class Clinical Training",
    description:
      "Clinical rotations at large government teaching hospitals from Year 3. High patient volumes and diverse disease exposure - a significant advantage for FMGE preparation and real-world competence.",
  },
  {
    icon: "🚫",
    title: "Zero Donation or Capitation",
    description:
      "Admission is purely merit-based and transparent. No donation, no capitation, no management quota. You pay only the published fee, directly to the university - a stark contrast to Indian private colleges.",
  },
  {
    icon: "👥",
    title: "Largest Indian Student Community",
    description:
      "27,000+ Indians enrolled - the most developed Indian student ecosystem of any MBBS abroad destination. Peer mentorship, Indian food, Diwali celebrations, Holi on campus - a genuine home away from home.",
  },
  {
    icon: "🏅",
    title: "Globally Recognised Degrees",
    description:
      "WHO-listed, NMC-compliant degrees qualify graduates for FMGE/NExT (India), USMLE (USA), PLAB (UK), and AMC (Australia) - a genuinely global medical career from one degree.",
  },
  {
    icon: "🧪",
    title: "200+ Years of Medical Heritage",
    description:
      "Sechenov University founded 1758. Kazan State Medical University 1814. Russian medical education has been a global benchmark for over two centuries - producing Nobel laureates and internationally respected clinicians.",
  },
];

const russiaAbroadWhyChooseMbbsSection: AbroadWhyChooseMbbsSectionContent = {
  eyebrow: "Why Choose MBBS in {country}",
  titleLead: "Why Study MBBS in ",
  titleTrail: "?",
  subtitle:
    "Eight reasons government universities, NMC compliance, and India’s largest MBBS-abroad community make {country} a strategic choice for students from India, Nepal and Bangladesh.",
};

export const russiaAbroadWhyChooseMbbsContent: AbroadWhyChooseMbbsContent = {
  section: russiaAbroadWhyChooseMbbsSection,
  reasons: russiaAbroadWhyChooseMbbsReasons,
};

