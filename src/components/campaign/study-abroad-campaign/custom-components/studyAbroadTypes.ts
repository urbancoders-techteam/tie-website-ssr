import type { FAQItem } from "@/components/campaign/FAQSection";
import type { StudyAbroadIcon } from "./studyAbroadIcons";

export type StudyAbroadNavItem = {
  href: string;
  label: string;
};

export type StudyAbroadStat = {
  label: string;
  value: string;
  note: string;
};

export type StudyAbroadWhyPoint = {
  icon: StudyAbroadIcon;
  title: string;
  paragraphs: string[];
  stats?: StudyAbroadStat[];
  pills?: string[];
  steps?: string[];
  after?: string;
};

export type StudyAbroadCta = {
  href: string;
  label: string;
};

export type StudyAbroadTableSection = {
  id: string;
  kicker: string;
  title: string;
  intro: string[];
  introAlign?: "center" | "left";
  background: string;
  headers: string[];
  rows: string[][];
  minWidth?: number;
  centerColumns?: number[];
  labelWidthClass?: string;
  note?: string;
  cta?: StudyAbroadCta;
};

export type StudyAbroadLeadFormConfig = {
  thankYouPath: string;
  formLabel: string;
  courses: string[];
  intakes?: string[];
  showCity?: boolean;
  phonePlaceholder?: string;
  coursePlaceholder?: string;
  defaultTitle: string;
  submitLabel: string;
  submittingLabel: string;
};

export type StudyAbroadConnect = {
  image: string;
  nightImage: string;
  kicker: string;
  title: string;
  description: string;
  formTitle: string;
  callLabel: string;
  whatsappLabel: string;
  emailLabel: string;
};

export type StudyAbroadStory = {
  id: string;
  kicker: string;
  title: string;
  subtitle?: string;
  paragraphs?: string[];
  pills?: string[];
  bullets?: string[];
  note?: string;
  background: string;
};

export type StudyAbroadFeaturedUniversity = {
  name: string;
  place: string;
  href: string;
  linkLabel: string;
  logo: string;
};

export type StudyAbroadChecklist = {
  id: string;
  kicker: string;
  title: string;
  subtitle?: string;
  items: string[];
  background: string;
};

export type StudyAbroadClosing = {
  id: string;
  kicker: string;
  title: string;
  subtitle: string;
  description: string;
  ctas: StudyAbroadCta[];
  background: string;
};

export type StudyAbroadCampaignData = {
  containerClass: string;
  theme: {
    pageBackground: string;
    text: string;
    footer: {
      background: string;
      accent: string;
      onAccent: string;
    };
  };
  phone: string;
  phoneDisplay: string;
  email: string;
  whatsappMessage: string;
  leadForm: StudyAbroadLeadFormConfig;
  header: {
    nav: StudyAbroadNavItem[];
  };
  hero: {
    image: string;
    kicker: string;
    title: string;
    subtitle: string;
    description: string;
    chips: { icon: StudyAbroadIcon; label: string }[];
    ctas?: StudyAbroadCta[];
    hideForm?: boolean;
    formAnchorId: string;
  };
  why: {
    id: string;
    kicker: string;
    title: string;
    intro: string[];
    carouselLabel: string;
    points: StudyAbroadWhyPoint[];
  };
  connect: StudyAbroadConnect;
  courses: StudyAbroadTableSection;
  universities: StudyAbroadTableSection & {
    logos: { name: string; src: string }[];
  };
  scholarship: StudyAbroadTableSection;
  costOfLiving: StudyAbroadTableSection;
  faq: {
    heading: string;
    sectionId: string;
    initialVisibleCount: number;
    variant: "default" | "abroad" | "hub" | "dubai";
    items: FAQItem[];
  };
};
