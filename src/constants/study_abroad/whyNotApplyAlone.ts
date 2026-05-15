export type SelfApplicationStatus = "negative" | "warning";

export type WhyNotApplyAloneComparisonRow = {
  feature: string;
  self: string;
  taksheela: string;
  selfType: SelfApplicationStatus;
};

export const whyNotApplyAloneContent = {
  eyebrow: "Why Not Apply Alone?",
  heading: {
    lineOne: "Self-Application vs Applying with",
    lineTwo: "Taksheela",
  },
  description:
    "See why thousands of Indian students trust Taksheela instead of navigating the complex overseas education process alone.",
  ctaText: "Apply the Smart Way - Free Counselling",
  comparisonRows: [
    {
      feature: "Personalised Country-Course-University Match",
      self: "Generic online research",
      taksheela: "Expert profiling & match",
      selfType: "negative",
    },
    {
      feature: "SOP / LOR Guidance",
      self: "Trial-and-error",
      taksheela: "Dedicated SOP counselling",
      selfType: "warning",
    },
    {
      feature: "Scholarship Identification",
      self: "Often missed or unknown",
      taksheela: "Proactive scholarship hunting",
      selfType: "negative",
    },
    {
      feature: "Application Accuracy",
      self: "Risk of errors & rejections",
      taksheela: "Reviewed error-free applications",
      selfType: "negative",
    },
    {
      feature: "Visa Guidance",
      self: "Confusing & risky if wrong",
      taksheela: "Step-by-step visa support",
      selfType: "negative",
    },
    {
      feature: "Deadline Management",
      self: "Easy to miss critical dates",
      taksheela: "Proactive deadline tracking",
      selfType: "negative",
    },
    {
      feature: "MOI / IELTS Clarity",
      self: "Inconsistent online info",
      taksheela: "Verified university-specific guidance",
      selfType: "warning",
    },
    {
      feature: "Accommodation Help",
      self: "On your own",
      taksheela: "Guided accommodation support",
      selfType: "negative",
    },
    {
      feature: "Parent Communication",
      self: "Not included",
      taksheela: "Regular parent updates",
      selfType: "negative",
    },
    {
      feature: "Post-Enrolment Support",
      self: "No support after admission",
      taksheela: "Ongoing student support",
      selfType: "negative",
    },
    {
      feature: "Cost",
      self: "\"Free\" but risk of costly errors",
      taksheela: "Free counselling. Transparent fees.",
      selfType: "warning",
    },
  ] satisfies WhyNotApplyAloneComparisonRow[],
};
