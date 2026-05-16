import { studyAbroadBaseUrl } from "@/utils/config";

export type ForParentsFeatureIcon =
  | "shield"
  | "chart"
  | "money"
  | "visa"
  | "home"
  | "phone";

export type ForParentsFeature = {
  id: string;
  icon: ForParentsFeatureIcon;
  title: string;
  description: string;
};

const forParentsImage = studyAbroadBaseUrl + "main-page/parents.avif";

export const forParentsContent = {
  eyebrow: "For parents",
  heading: "A Message to Parents: Your Questions, Answered with Complete Transparency.",
  description:
    "We know sending your child abroad is a big decision. Taksheela walks with families through every concern — safety, costs, visas, and outcomes — with clear timelines, documented processes, and honest guidance so you always know what comes next.",
  heroImageSrc: forParentsImage,
  heroImageAlt:
    "Parents and counsellors collaborating over study abroad planning documents",
  stats: [
    { value: "500+", label: "Students Guided" },
    { value: "98%", label: "Success Rate" },
    { value: "10+", label: "Years Experience" },
  ] as const,
  features: [
    {
      id: "safety",
      icon: "shield",
      title: "Safety & Student Support",
      description:
        "We prioritise destinations and institutions with strong student welfare, orientation, and on-ground support networks.",
    },
    {
      id: "roi",
      icon: "chart",
      title: "Return on Investment",
      description:
        "Clear conversations on course outcomes, employability, and how choices align with your family’s long-term goals.",
    },
    {
      id: "budget",
      icon: "money",
      title: "Transparent Budget Planning",
      description:
        "Itemised estimates for tuition, living costs, and contingencies — no surprise fees buried in fine print.",
    },
    {
      id: "visa",
      icon: "visa",
      title: "Visa Clarity",
      description:
        "Step-by-step visa guidance with document checklists and realistic timelines for each destination.",
    },
    {
      id: "accommodation",
      icon: "home",
      title: "Accommodation Guidance",
      description:
        "Options for university halls, private housing, and safe neighbourhoods suited to your budget.",
    },
    {
      id: "ongoing",
      icon: "phone",
      title: "Ongoing Support",
      description:
        "Your child — and your family — can reach our counsellors through the journey, from offer to arrival.",
    },
  ] satisfies ForParentsFeature[],
  ctaText: "Talk to Our Counsellors",
};
