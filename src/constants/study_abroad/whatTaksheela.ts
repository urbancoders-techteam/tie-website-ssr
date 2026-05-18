export type WhatTaksheelaFeature = {
  id: string;
  title: string;
  description: string;
};

export const whatTaksheelaContent = {
  eyebrow: "Why Taksheela?",
  heading: {
    before: "End-to-End Overseas Education Guidance — From",
    highlightA: "First Thought",
    middle: "to",
    highlightB: "First Day at University",
  },
  description:
    "We do not stop at shortlisting universities. Taksheela walks with you through applications, funding, visas, travel and settling in — so you are never guessing the next step.",
  trustBanner:
    "The Only Consultancy That Plans for What Happens AFTER You Enrol",
  ctaText: "Talk to an Expert Counsellor — It's Free",
  features: [
    {
      id: "roadmap",
      title: "Personalised Study Roadmap",
      description:
        "Custom country-course-university plan based on your academic background, career goals and budget — not generic advice.",
    },
    {
      id: "match",
      title: "Country, Course & University Match",
      description:
        "We analyse 1,000+ universities across 14+ countries to find the best fit for your profile and maximise admission chances.",
    },
    {
      id: "documents",
      title: "SOP, LOR & Document Guidance",
      description:
        "Compelling Statements of Purpose, expert LOR request guidance, and document verification for every university application.",
    },
    {
      id: "scholarship",
      title: "Scholarship Identification",
      description:
        "Merit-based, university-specific, country-sponsored and early-bird scholarships — we find every funding opportunity for you.",
    },
    {
      id: "visa",
      title: "Student Visa Guidance",
      description:
        "Complete visa support — documentation, financial proofs, interview preparation and application tracking for all countries.",
    },
    {
      id: "accommodation",
      title: "Accommodation & Forex",
      description:
        "Student housing options, university halls, and guidance on forex cards, bank accounts and living cost planning.",
    },
    {
      id: "predeparture",
      title: "Pre-Departure Preparation",
      description:
        "Comprehensive pre-departure session — packing, banking, transport, student rights and settling-in essentials covered.",
    },
    {
      id: "postenrol",
      title: "Post-Enrolment Support",
      description:
        "Our support continues after admission — course changes, part-time work rules, university concerns — we're always available.",
    },
  ] satisfies WhatTaksheelaFeature[],
};
