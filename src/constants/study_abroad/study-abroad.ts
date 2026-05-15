import { imageBaseUrl, studyAbroadBaseUrl } from "@/utils/config";
import { CategoryKey, ViewMoreItem } from "@/utils/interface";

export const studyAbroadImpactCountryLinks = [
  "AU Study in Australia",
  "CA Study in Canada",
  "FR Study in France",
  "NL Study in Netherlands",
  "SE Study in Sweden",
  "DK Study in Denmark",
  "BE Study in Belgium",
  "AT Study in Austria",
  "IT Study in Italy",
  "MT Study in Malta",
];

export const studyAbroadImpactStats = [
  {
    icon: "🏆",
    value: 10,
    suffix: "+",
    label: "Years of Counselling Excellence",
    cardClassName: "bg-[#071b3a] text-white shadow-[0_22px_50px_rgba(7,27,58,0.22)]",
    valueClassName: "text-white",
  },
  {
    icon: "✅",
    value: 98,
    suffix: "%",
    label: "Application Success Rate",
    cardClassName: "bg-[#10b6ad] text-white shadow-[0_22px_50px_rgba(16,182,173,0.24)]",
    valueClassName: "text-white",
  },
  {
    icon: "🎓",
    value: 500,
    suffix: "+",
    label: "Students Placed Globally",
    cardClassName: "border border-[#d9eeee] bg-white/45 text-[#0d233f] shadow-[0_20px_45px_rgba(13,35,63,0.07)]",
    valueClassName: "text-[#10b6ad]",
  },
  {
    icon: "🏛️",
    value: 1000,
    suffix: "+",
    label: "Partner Universities Worldwide",
    cardClassName: "border border-[#f2d49a] bg-[#fff7e7] text-[#0d233f] shadow-[0_20px_45px_rgba(210,159,55,0.12)]",
    valueClassName: "text-[#d9a420]",
  },
] as const;

export const milestonesData = [
  {
    id: 1,
    icon: imageBaseUrl + "milestone1.png",
    count: 10,
    parameter: "+",
    title: "Year",
  },
  {
    id: 2,
    icon: imageBaseUrl + "mileston2.png",
    count: 98,
    parameter: "%",
    title: "Success Rate",
  },
  {
    id: 3,
    icon: imageBaseUrl + "mileston3.png",
    count: 1000,
    parameter: "+",
    title: "Universities",
  },
  {
    id: 4,
    icon: imageBaseUrl + "mileston4.png",
    count: 500,
    parameter: "+",
    title: "Students Placed",
  },
];

export const globalCombinationData = [
  {
    Image: "/images/hexcountry.svg",
    icon: "/images/minicountry.svg",
    buttontext: "Country",
    path: "/study-abroad/country",
  },
  {
    Image: "/images/hexcourse.svg",
    icon: "/images/minicourse.svg",
    buttontext: "Courses",
    path: `/study-abroad/courses`,
  },
  {
    Image: "/images/hexuniversity.svg",
    icon: "/images/miniuniversity.svg",
    buttontext: "University",
    // "path": "/study-abroad/universities"
    path: `/study-abroad/university-finder`,
  },
];

export const viewmoredata: Record<CategoryKey, ViewMoreItem[]> = {
  personalized: [
    {
      id: 1,
      title: "COUNSELLING",
      about:
        "Experience world-class education counseling that helps you navigate your academic journey with confidence",
    },
    {
      id: 2,
      title: "PYSCHOMETRIC TEST",
      about:
        "Receive expert assistance in navigating psychometric tests, helping you choose the perfect career pathway",
    },
    {
      id: 3,
      title: "PROFILE BUILDING",
      about:
        "Forge a compelling academic profile with our expert guidance, as we assist you in crafting a well-rounded and impactful representation of your achievements",
    },
  ],
  career: [
    {
      id: 1,
      title: "COUNTRIES",
      about:
        "Our experienced advisors will assist you in the intricate process of shortlisting countries for your education",
    },
    {
      id: 2,
      title: "COURSES",
      about:
        "Providing tailored assistance to match your academic interests, career goals, and desired learning outcomes",
    },
    {
      id: 3,
      title: "UNIVERSITIES",
      about:
        "Get personalized assistance in shortlisting universities that align with your academic and career goals",
    },
  ],
  admission: [
    {
      id: 1,
      title: "EXAM PREPARATION",
      about:
        "Gain a competitive edge with our comprehensive exam preparation assistance",
    },
    {
      id: 3,
      title: "LOR/ESSAYs/SOPs",
      about:
        "Elevate your application with our expert assistance in crafting compelling letters of recommendation",
    },
    {
      id: 5,
      title: "SCHOLARSHIPS",
      about:
        "We recognize your academic brilliance by helping you secure the funding you need to pursue your academic dreams",
    },
  ],
  post: [
    {
      id: 1,
      title: "EDUCATION LOAN",
      about:
        "Ensuring personalized guidance to secure the financial support you need for your academic aspirations",
    },
    {
      id: 2,
      title: "VISA/IMMIGRATION/TRAVEL & FOREX",
      about:
        "Facilitating a smooth and expertly-guided process to navigate the complexities of visa applications and immigration requirements",
    },
    {
      id: 3,
      title: "ACCOMMODATION",
      about:
        "Simplify your transition to studying abroad with our specialized accommodation assistance",
    },
  ],
};

export type StudyAbroadFilmstripIconId =
  | "library"
  | "discussions"
  | "departure"
  | "graduation"
  | "campus";

export type StudyAbroadFilmstripItem = {
  src: string;
  alt: string;
  /** Shown centered on card hover */
  label: string;
  icon: StudyAbroadFilmstripIconId;
};

/** Study-abroad page only: filmstrip below WhatTaksheela (separate from WhatTaksheela UI) */
export const studyAbroadAfterWhatTaksheelaFilmstrip: StudyAbroadFilmstripItem[] = [
  {
    src: studyAbroadBaseUrl + "main-page/wsa-img1.avif",
    alt: "Students collaborating outdoors on campus",
    label: "University Library",
    icon: "library",
  },
  {
    src: studyAbroadBaseUrl + "main-page/wsa-img2.avif",
    alt: "Team study session around a table with laptops",
    label: "Group Discussions",
    icon: "discussions",
  },
  {
    src: studyAbroadBaseUrl + "main-page/diparture-day.jpg",
    alt: "University campus with historic brick building",
    label: "Departure Day",
    icon: "departure",
  },
  {
    src: studyAbroadBaseUrl + "main-page/graduation-day.jpg",
    alt: "Graduates celebrating in caps and gowns",
    label: "Graduation Day",
    icon: "graduation",
  },
  {
    src: studyAbroadBaseUrl + "main-page/campus-life.jpg",
    alt: "Two students studying together with laptops",
    label: "Campus Life",
    icon: "campus",
  },
];

export default globalCombinationData;
