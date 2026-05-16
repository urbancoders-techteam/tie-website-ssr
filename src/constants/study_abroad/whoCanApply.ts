import { studyAbroadBaseUrl } from "@/utils/config";
export type WhoCanApplyTheme = "teal" | "navy" | "orange";

export type WhoCanApplyCard = {
  id: string;
  theme: WhoCanApplyTheme;
  imageSrc: string;
  imageAlt: string;
  imageBadge: string;
  imageTitle: string;
  description: string;
  bullets: string[];
  ctaText: string;
};


const whoCanApplyImage1 = studyAbroadBaseUrl + "main-page/bachlors-abroad.jpg";
const whoCanApplyImage2 = studyAbroadBaseUrl + "main-page/masters-abroad.jpg";
const whoCanApplyImage3 = studyAbroadBaseUrl + "main-page/career-upgrade.jpg";

export const whoCanApplyContent = {
  eyebrow: "Who can apply?",
  heading: "Study Abroad After 12th, After Graduation & For Working Professionals",
  subtitle:
    "No matter where you are in your academic journey — there is a study abroad path built for you.",
  cards: [
    {
      id: "bachelors",
      theme: "teal",
      imageSrc:
        whoCanApplyImage1,
      imageAlt: "Graduates celebrating with caps in the air",
      imageBadge: "After Class 12",
      imageTitle: "Bachelor's Abroad",
      description:
        "Pursue a 3–4 year undergraduate degree in the UK, Ireland, Germany, Canada, Australia and more — with clear pathways from CBSE/ISC boards, foundation years where needed, and visa-ready planning.",
      bullets: [
        "Foundation & direct Bachelor’s routes mapped to your subjects & grades",
        "IELTS / PTE prep and English pathway options where required",
        "Budget-aware university shortlists with scholarship angles",
        "Admission essays, forms & document checks end-to-end",
        "Student visa filing, mock interviews & pre-departure support",
      ],
      ctaText: "Explore Bachelor's Options",
    },
    {
      id: "masters",
      theme: "navy",
      imageSrc:
        whoCanApplyImage2,
      imageAlt: "Smiling young professional with glasses",
      imageBadge: "After Graduation",
      imageTitle: "Master's Abroad",
      description:
        "From fast 1-year MSc programmes in the UK to tuition-friendly public universities in Germany — we align your degree, work experience and goals with the right course, country and intake.",
      bullets: [
        "1-year & 2-year MSc / MA options across UK, EU & beyond",
        "Low- or no-tuition routes in Germany & similar destinations",
        "SOP, CV & LOR strategy tailored to each university",
        "GTE / credibility interview prep where applicable",
        "Post-study work & stay-back rules explained upfront",
      ],
      ctaText: "Explore Master's Options",
    },
    {
      id: "professionals",
      theme: "orange",
      imageSrc:
        whoCanApplyImage3,
      imageAlt: "Minimal desk with keyboard and workspace",
      imageBadge: "Working Professionals",
      imageTitle: "Career Upgrade Abroad",
      description:
        "Executive-style MBAs, specialised master’s and flexible formats for professionals who want global credentials without putting life on hold — structured around your calendar and career pivot.",
      bullets: [
        "Executive MBA & part-time / blended programme shortlists",
        "Career pivot mapping: industry, country & ROI",
        "Gap years & employment narrative handled sensitively",
        "Employer documentation & leave planning guidance",
        "Fast-track intakes aligned with appraisal cycles",
      ],
      ctaText: "Get a Career Upgrade Plan",
    },
  ] satisfies WhoCanApplyCard[],
};
