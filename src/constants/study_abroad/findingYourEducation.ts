export type FundingCardVariant = "teal" | "peach" | "navy" | "lavender";

export type FundingCard = {
  id: string;
  variant: FundingCardVariant;
  icon: "medal" | "clock" | "globe" | "target";
  title: string;
  description: string;
  tags: string[];
};

export const findingYourEducationContent = {
  eyebrow: "Funding your education",
  heading: "Scholarship Guidance for Indian Students Studying Abroad",
  description:
    "We help you identify realistic funding options — from university merit awards to country-level programmes — and align deadlines, documents and eligibility so you do not miss out on free money sitting on the table.",
  ctaText: "Find Scholarships for My Profile",
  cards: [
    {
      id: "merit",
      variant: "teal",
      icon: "medal",
      title: "Merit-Based Scholarships",
      description:
        "Strong academics, test scores and extracurriculars can unlock partial to full tuition waivers at ranked universities in the UK, Ireland, Australia and beyond.",
      tags: ["UK", "Ireland", "Australia"],
    },
    {
      id: "early",
      variant: "peach",
      icon: "clock",
      title: "Early-Bird Scholarships",
      description:
        "Many institutions reward applicants who confirm early — we track intake windows so your file is ready before competitive funding rounds close.",
      tags: ["September Intake", "January Intake", "Apply Early"],
    },
    {
      id: "gov",
      variant: "navy",
      icon: "globe",
      title: "Government & Country Scholarships",
      description:
        "National programmes such as DAAD, Chevening and Irish Government awards can cover tuition and living costs for eligible Indian students — we assess fit and paperwork early.",
      tags: ["DAAD Germany", "Chevening UK", "Ireland Gov"],
    },
    {
      id: "course",
      variant: "lavender",
      icon: "target",
      title: "Course & Department Scholarships",
      description:
        "Faculty-specific funds often exist for STEM, business and health programmes — we surface lesser-known awards tied to your exact course and campus.",
      tags: ["STEM", "Business", "Healthcare"],
    },
  ] satisfies FundingCard[],
};
