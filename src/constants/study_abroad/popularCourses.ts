import { studyAbroadBaseUrl } from "@/utils/config";

export type PopularCourseItem = {
  id: string;
  label: string;
  imgSrc: string;
};

const mainPageBaseUrl = studyAbroadBaseUrl + "main-page/"

export const popularCoursesContent = {
  eyebrow: "Popular courses",
  heading: "Most In-Demand Courses Abroad for Indian Students",
  description:
    "High-employability, globally recognised programmes across top universities worldwide.",
  ctaText: "Match Courses to Your Profile",
  courses: [
    { id: "business", label: "Business Management", imgSrc: mainPageBaseUrl + "BusinessManagement.png" },
    { id: "mba", label: "MBA", imgSrc: mainPageBaseUrl + "MBA.png" },
    { id: "dataScience", label: "Data Science", imgSrc: mainPageBaseUrl + "DataScience.png" },
    { id: "ai", label: "Artificial Intelligence", imgSrc: mainPageBaseUrl + "ArtificialIntelligence.png" },
    { id: "engineering", label: "Engineering", imgSrc: mainPageBaseUrl + "Engineering.png" },
    { id: "computerScience", label: "Computer Science", imgSrc: mainPageBaseUrl + "ComputerScience.png" },
    { id: "cybersecurity", label: "Cybersecurity", imgSrc: mainPageBaseUrl + "CyberSequirity.png" },
    { id: "hospitality", label: "Hospitality", imgSrc: mainPageBaseUrl + "Hospitality.png" },
    { id: "healthcare", label: "Healthcare", imgSrc: mainPageBaseUrl + "HealthCare.png" },
    { id: "nursing", label: "Nursing", imgSrc: mainPageBaseUrl + "Nursing.png" },
    { id: "publicHealth", label: "Public Health", imgSrc: mainPageBaseUrl + "PublicHealth.png" },
    { id: "finance", label: "Finance", imgSrc: mainPageBaseUrl + "Finance.png" },
    { id: "supplyChain", label: "Supply Chain", imgSrc: mainPageBaseUrl + "SupplyChain.png" },
    { id: "design", label: "Design", imgSrc: mainPageBaseUrl + "Design.png" },
    { id: "psychology", label: "Psychology", imgSrc: mainPageBaseUrl + "Psychology.png" },
    { id: "education", label: "Education", imgSrc: mainPageBaseUrl + "Education.png" },
  ] satisfies readonly PopularCourseItem[],
} as const;
