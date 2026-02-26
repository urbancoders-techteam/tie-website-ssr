import { imageBaseUrl } from "@/utils/config";
import { CategoryKey, ViewMoreItem } from "@/utils/interface";

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



export default globalCombinationData;
