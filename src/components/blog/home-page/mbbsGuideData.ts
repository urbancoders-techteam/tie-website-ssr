export type CountryGuide = {
  country: string;
  label: string;
  headline: string;
  summary: string;
  fees: string;
  universities: string[];
  whyChoose: string;
  considerations: string;
  href: string;
};

export type ComparisonRow = {
  country: string;
  cost: string;
  climate: string;
  nmcApproved: string;
  bestFor: string;
};

export const guideStats = [
  { value: "25,000+", label: "Indian students choose MBBS abroad every year" },
  { value: "₹11L-₹51L", label: "Approx. total six-year budget range" },
  { value: "5", label: "High-demand NMC-approved destinations covered" },
  { value: "2026", label: "Admission intake guidance" },
];

export const countryGuides: CountryGuide[] = [
  {
    country: "Russia",
    label: "Most trusted destination",
    headline: "MBBS in Russia 2026",
    summary:
      "Russia remains the most popular MBBS abroad destination for Indian students because its state-supported medical universities combine affordability, history, and strong clinical exposure.",
    fees:
      "Annual tuition usually ranges from ₹2.5 lakh to ₹6 lakh. Monthly living costs are around ₹15,000-₹20,000, with a complete six-year budget of ₹22 lakh-₹45 lakh.",
    universities: [
      "Kazan Federal University",
      "Perm State Medical University",
      "Kursk State Medical University",
      "Orenburg State Medical University",
      "Bashkir State Medical University",
    ],
    whyChoose:
      "Russia is ideal for students who want a balance of reputation, cost, large teaching hospitals, and future options such as NExT, USMLE, or PLAB preparation.",
    considerations:
      "Winters can be extremely cold and students must learn local language basics for patient interaction during clinical years, even when classroom teaching is in English.",
    href: "/mbbs/abroad/russia",
  },
  {
    country: "Georgia",
    label: "European quality",
    headline: "MBBS in Georgia 2026",
    summary:
      "Georgia has become a fast-growing choice for Indian students because of its European curriculum structure, safe student cities, and strong international licensing orientation.",
    fees:
      "Annual tuition ranges from ₹3.5 lakh to ₹7 lakh. Monthly living costs are around ₹20,000-₹25,000, taking total six-year investment to ₹32 lakh-₹51 lakh.",
    universities: [
      "Tbilisi State Medical University",
      "David Tvildiani Medical University",
      "University of Georgia Medical Faculty",
      "New Vision University",
      "Caucasus International University",
    ],
    whyChoose:
      "Georgia suits students who want a comfortable European environment, ECTS-aligned academics, and better positioning for PLAB or USMLE pathways.",
    considerations:
      "Fees are higher than most Central Asian options. Students must verify internship rules and host-country practice requirements under NMC Regulation 4(b).",
    href: "/mbbs/abroad/georgia",
  },
  {
    country: "Kazakhstan",
    label: "Modern infrastructure",
    headline: "MBBS in Kazakhstan 2026",
    summary:
      "Kazakhstan offers a practical middle path with modern campuses, shorter travel from India, established Indian communities, and affordable medical education.",
    fees:
      "Annual tuition ranges from ₹2.8 lakh to ₹4.5 lakh. Monthly expenses average ₹12,000-₹18,000, with total six-year costs around ₹17 lakh-₹28 lakh.",
    universities: [
      "Kazakh National Medical University",
      "Astana Medical University",
      "South Kazakhstan Medical Academy",
      "West Kazakhstan Marat Ospanov Medical University",
      "Semey Medical University",
    ],
    whyChoose:
      "Kazakhstan works well for mid-budget students who want upgraded infrastructure, cosmopolitan cities like Almaty and Astana, and dependable hospital exposure.",
    considerations:
      "Winters are severe, especially in northern cities, so students should prepare practically for long cold seasons before finalising their university.",
    href: "/mbbs/abroad/kazakhstan",
  },
  {
    country: "Uzbekistan",
    label: "Rising affordable option",
    headline: "MBBS in Uzbekistan 2026",
    summary:
      "Uzbekistan is growing quickly as a credible MBBS destination after major education reforms and wider recognition of selected medical universities.",
    fees:
      "Annual tuition ranges from ₹2.2 lakh to ₹4 lakh. Monthly living expenses are usually ₹10,000-₹15,000, with a six-year budget of ₹13 lakh-₹24 lakh.",
    universities: [
      "Tashkent Medical Academy",
      "Samarkand State Medical University",
      "Andijan State Medical Institute",
      "Bukhara State Medical Institute",
      "Fergana Medical Institute of Public Health",
    ],
    whyChoose:
      "Uzbekistan offers strong value for students comparing pure cost-to-quality ratio, with a warmer culture, moderate climate, and improving student infrastructure.",
    considerations:
      "Not every Uzbek university is NMC-approved. Students should verify the exact institution and plan independently for NExT preparation support.",
    href: "/mbbs/abroad/uzbekistan",
  },
  {
    country: "Kyrgyzstan",
    label: "Lowest entry cost",
    headline: "MBBS in Kyrgyzstan 2026",
    summary:
      "Kyrgyzstan remains the most affordable credible MBBS abroad option, with English-medium instruction and a simple admission process for NEET-qualified students.",
    fees:
      "Annual tuition ranges from ₹1.8 lakh to ₹3.5 lakh. Monthly living costs average ₹10,000-₹14,000, with a total six-year cost of ₹11 lakh-₹19 lakh.",
    universities: [
      "International School of Medicine, Bishkek",
      "Kyrgyz State Medical Academy",
      "Osh State University Medical Faculty",
      "Asian Medical Institute",
      "International University of Kyrgyzstan Medical Faculty",
    ],
    whyChoose:
      "Kyrgyzstan is best for disciplined students whose primary constraint is budget and who are ready to take NExT preparation seriously from the beginning.",
    considerations:
      "Clinical exposure varies by university. Choosing an institution with strong hospital affiliations is especially important in Kyrgyzstan.",
    href: "/mbbs/abroad/kyrgyzstan",
  },
];

export const comparisonRows: ComparisonRow[] = [
  {
    country: "Russia",
    cost: "₹22L-₹45L",
    climate: "Very cold",
    nmcApproved: "Yes",
    bestFor: "Balanced quality + cost",
  },
  {
    country: "Georgia",
    cost: "₹32L-₹51L",
    climate: "Mild",
    nmcApproved: "Yes",
    bestFor: "European exposure, PLAB/USMLE",
  },
  {
    country: "Kazakhstan",
    cost: "₹17L-₹28L",
    climate: "Very cold",
    nmcApproved: "Yes",
    bestFor: "Modern infra, mid-budget",
  },
  {
    country: "Uzbekistan",
    cost: "₹13L-₹24L",
    climate: "Continental",
    nmcApproved: "Yes, selected universities",
    bestFor: "Low cost, emerging quality",
  },
  {
    country: "Kyrgyzstan",
    cost: "₹11L-₹19L",
    climate: "Cold",
    nmcApproved: "Yes, selected universities",
    bestFor: "Tightest budget",
  },
];

export const eligibilityPoints = [
  "Class 12 with Physics, Chemistry, and Biology with at least 50% aggregate marks, or 45% for reserved categories.",
  "A valid qualifying NEET-UG score is mandatory for Indian students who want NMC eligibility and future practice rights in India.",
  "Student must be at least 17 years old by December 31 of the admission year.",
  "A valid Indian passport and medical fitness certificate from a registered physician are required.",
  "IELTS or TOEFL is not required for Russia, Georgia, Kazakhstan, Uzbekistan, or Kyrgyzstan.",
];

export const nextExamPoints = [
  "Students starting MBBS abroad in 2026 will likely return around 2031-2032 and must prepare for NExT instead of depending on the older FMGE pathway.",
  "University selection should consider clinical training quality, historical licensing exam outcomes, and whether dedicated NExT preparation support is available.",
  "NMC requires at least 54 months of academic instruction plus a 12-month internship in the same country and in English-medium instruction.",
];

export const admissionSteps = [
  "Shortlist universities based on NMC approval, budget, clinical exposure, city, climate, and NExT preparation support.",
  "Submit Class 10 and 12 marksheets, NEET scorecard, passport copy, photographs, and other academic documents.",
  "Receive the official university offer letter, usually within two to four weeks after document review.",
  "Apply for the student visa, pay the initial tuition instalment, and complete insurance, forex, and travel formalities.",
  "Attend pre-departure orientation and travel with clarity on hostel, food, local support, and academic expectations.",
];

export const mistakesToAvoid = [
  "Choosing the lowest advertised fee without checking clinical exposure and total six-year cost.",
  "Assuming a country is enough; always verify the exact university's current NMC approval status.",
  "Ignoring hidden administrative, hostel, insurance, visa, and travel costs before committing.",
  "Compromising teaching hospital quality to save a small amount in tuition.",
  "Starting NExT preparation only after returning to India instead of planning from year one.",
];

export const faqs = [
  {
    question: "Which country is best for MBBS abroad in 2026 for Indian students?",
    answer:
      "Russia is the most reliable overall choice, Georgia is strong for PLAB or USMLE-focused students, Kazakhstan and Uzbekistan offer strong value, and Kyrgyzstan is the most affordable option. The best country depends on NEET score, budget, and career goals.",
  },
  {
    question: "Is NEET mandatory for MBBS abroad?",
    answer:
      "Yes. NEET qualification is mandatory for Indian students who want an NMC Eligibility Certificate and plan to practice medicine in India after completing MBBS abroad.",
  },
  {
    question: "What is the total cost of MBBS in Russia for Indian students?",
    answer:
      "The approximate six-year cost in Russia, including tuition, hostel, food, insurance, and visa, ranges from ₹22 lakh to ₹45 lakh depending on university and city.",
  },
  {
    question: "Can I practice in India after MBBS from Kazakhstan or Uzbekistan?",
    answer:
      "Yes, if the specific university is NMC-approved and you complete the required course duration, internship, and NExT exam requirements. University verification before admission is essential.",
  },
  {
    question: "What is the duration of MBBS abroad?",
    answer:
      "The standard pathway is six years: approximately 54 months of academic coursework plus a 12-month internship in the same country, as required by NMC rules.",
  },
];
