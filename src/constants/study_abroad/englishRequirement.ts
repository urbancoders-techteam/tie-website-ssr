export type MoiStep = {
  num: number;
  title: string;
  body: string;
};

export const englishRequirementContent = {
  eyebrow: "English requirements",
  heading: "Can You Study Abroad Without IELTS? Understanding MOI & English Proficiency",
  intro:
    "Many universities accept alternatives to IELTS — including PTE, TOEFL, Duolingo, and in several cases a Medium of Instruction (MOI) letter when your prior degree was taught in English. The rules change by country, course level and institution: we help you match the right proof to each application.",
  testTags: [
    "IELTS Academic",
    "PTE Academic",
    "TOEFL iBT",
    "Duolingo English Test",
    "MOI Certificate",
    "University Interview",
  ],
  importantLead: "Important:",
  importantBody:
    "MOI acceptance is not universal — it depends on the university, programme level, and sometimes the visa office. Always confirm the latest requirement for your exact intake before you skip a standardised English test.",
  primaryCta: "Check Your English Requirement",
  moiCardHeading: "What is an MOI Certificate?",
  moiCardIntro:
    "An MOI (Medium of Instruction) certificate is an official letter from your school or university stating that your degree or prior study was completed with English as the language of instruction.",
  moiSteps: [
    {
      num: 1,
      title: "Who Qualifies?",
      body: "Students who completed Class 10, 12, or a prior degree in English-medium boards or institutions — subject to the destination university’s policy.",
    },
    {
      num: 2,
      title: "Where Accepted?",
      body: "Select universities in the UK, Ireland, Australia, Canada and other regions may waive IELTS/PTE when a valid MOI is submitted with the application.",
    },
    {
      num: 3,
      title: "How to Get It?",
      body: "Request an official letter on letterhead from your institution’s registrar or controller of examinations — clearly naming your programme, medium of instruction, and dates of study.",
    },
    {
      num: 4,
      title: "Always Enough?",
      body: "No. Some universities and visa categories still require IELTS, PTE or TOEFL. We map safe options and backup tests so you are not caught at the last minute.",
    },
  ] satisfies MoiStep[],
  moiSecondaryCta: "Get MOI Guidance from Taksheela",
};
