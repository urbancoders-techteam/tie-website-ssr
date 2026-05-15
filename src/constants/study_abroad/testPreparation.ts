export type TestPreparationCategoryId = "academic" | "english";

export type TestPreparationExam = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconSrc: string;
};

export type TestPreparationCategory = {
  id: TestPreparationCategoryId;
  title: string;
  exams: TestPreparationExam[];
};

export const testPreparationContent = {
  eyebrow: "Test Preparation",
  heading: {
    prefix: "Exams for",
    highlight: "Study Abroad",
  },
  intro:
    "Indian students planning to study abroad need to clear certain standardised examinations as part of the university admissions process. These fall into two broad categories: aptitude-based tests that assess cognitive ability and academic readiness, and English language proficiency tests that evaluate reading, writing, listening and speaking.",
  secondaryIntro:
    "Requirements vary - some universities need IELTS or PTE, others accept MOI certificates. Postgraduate applicants may also need GRE or GMAT. Hover over any exam card below to learn more. Taksheela counsellors assess your target university requirements and guide you on the right exam path for your profile.",
  image: {
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80",
    alt: "Student writing study abroad exam preparation notes on a whiteboard",
  },
  categories: [
    {
      id: "academic",
      title: "Academic",
      exams: [
        {
          id: "sat",
          title: "SAT",
          subtitle: "Undergraduate admissions - USA, Canada, select UK & Australia",
          description:
            "The SAT (Scholastic Assessment Test) is a globally recognised standardised exam used for undergraduate admissions at universities in the USA, Canada, and select institutions in the UK and Australia. It tests mathematical reasoning, evidence-based reading and writing.",
          iconSrc: "/images/sat.svg",
        },
        {
          id: "gre",
          title: "GRE",
          subtitle: "Master's & doctoral programmes - USA, Canada & UK",
          description:
            "GRE scores are commonly requested for postgraduate admissions, especially for STEM, research and management-related programmes. It evaluates verbal reasoning, quantitative reasoning and analytical writing.",
          iconSrc: "/images/gre.svg",
        },
        {
          id: "gmat",
          title: "GMAT",
          subtitle: "MBA admissions at global business schools",
          description:
            "GMAT is designed for business and management programmes. It helps universities assess quantitative skills, data interpretation, verbal reasoning and decision-making readiness for MBA-level study.",
          iconSrc: "/images/gmat.svg",
        },
      ],
    },
    {
      id: "english",
      title: "English",
      exams: [
        {
          id: "toefl",
          title: "TOEFL",
          subtitle: "11,000+ universities worldwide - especially USA & Canada",
          description:
            "TOEFL iBT measures academic English across reading, listening, speaking and writing. It is widely accepted by universities in North America and many other study destinations.",
          iconSrc: "/images/toefl.svg",
        },
        {
          id: "ielts",
          title: "IELTS",
          subtitle: "Standard for UK, Australia, Ireland, Canada - 2-year validity",
          description:
            "IELTS Academic is the world's most widely accepted English proficiency exam for study, work and migration. For Indian students, it is the standard requirement for university admissions across the UK, Australia, Ireland, Canada and many European institutions.",
          iconSrc: "/images/ielts.svg",
        },
        {
          id: "pte",
          title: "PTE",
          subtitle: "Computer-based - accepted across UK, Australia & New Zealand",
          description:
            "PTE Academic is a fast computer-based English test with AI scoring and quick results. It is accepted by many universities and visa bodies across major study abroad destinations.",
          iconSrc: "/images/pte.svg",
        },
        {
          id: "duolingo",
          title: "Duolingo",
          subtitle: "Growing acceptance - fast, online, affordable",
          description:
            "The Duolingo English Test is an online English proficiency test accepted by many universities. It is convenient and affordable, but acceptance depends on the institution and programme.",
          iconSrc: "/images/toefl.svg",
        },
      ],
    },
  ] satisfies TestPreparationCategory[],
  note: {
    title: "Not sure which exam you need?",
    body:
      "Many universities in UK, Ireland, Australia and Europe accept a Medium of Instruction (MOI) certificate from your previous English-medium institution - meaning you may not need IELTS at all. Taksheela counsellors verify your exact exam requirements before you invest time and money in preparation.",
    ctaText: "Check My Exam Requirement",
  },
};
