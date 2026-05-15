export type ProcessIconKey =
  | "comments"
  | "clipboard"
  | "globe"
  | "layers"
  | "university"
  | "document"
  | "envelope"
  | "gradcap"
  | "idcard"
  | "home"
  | "plane";

export type ProcessStep = {
  id: string;
  num: number;
  label: string;
  icon: ProcessIconKey;
};

export const ourProcessContent = {
  eyebrow: "Our process",
  heading: "Your Step-by-Step Study Abroad Journey with Taksheela",
  subheading:
    "From your first free counselling session to your first day at a global university — we guide every step.",
  ctaText: "Start Step 1 — Book Free Counselling",
  steps: [
    { id: "counsel", num: 1, label: "Free Counselling", icon: "comments" },
    { id: "profile", num: 2, label: "Profile Assessment", icon: "clipboard" },
    { id: "country", num: 3, label: "Country Selection", icon: "globe" },
    { id: "course", num: 4, label: "Course Selection", icon: "layers" },
    { id: "shortlist", num: 5, label: "University Shortlisting", icon: "university" },
    { id: "application", num: 6, label: "Application & SOP", icon: "document" },
    { id: "offer", num: 7, label: "Offer Letter", icon: "envelope" },
    { id: "scholarship", num: 8, label: "Scholarship Guidance", icon: "gradcap" },
    { id: "visa", num: 9, label: "Visa Application", icon: "idcard" },
    { id: "stay", num: 10, label: "Accommodation & Forex", icon: "home" },
    { id: "depart", num: 11, label: "Pre-Departure + Post-Enrolment", icon: "plane" },
  ] satisfies ProcessStep[],
};
