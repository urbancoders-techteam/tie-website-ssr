import { imageBaseUrl } from "@/utils/config";

const indiaWhyStudyLogo = (fileName) =>
  `${imageBaseUrl}international-relation/whyStudyIncountry/logos/india/${encodeURIComponent(fileName)}`;

export const IndiaWhyStudy = {
  title: "Why study in INDIA ?",
  point1: {
    title: "Globally recognized Universities",
    subtitle: "1,100+ Globally recognized Universities & 42,000+ Colleges",
    image: indiaWhyStudyLogo("Globally recognized Universities.png"),
  },
  point2: {
    title: "70% Less Costly",
    subtitle: "Up to 70% Less Costly Than Europe/US",
    image: indiaWhyStudyLogo("70% Less Costly.png"),
  },
  point3: {
    title: "100% scholarships",
    subtitle:
      "Up to 100% scholarships on tuition fees for international students.",
    image: indiaWhyStudyLogo("100% scholarships.png"),
  },
  point4: {
    title: "2,500+ Courses",
    subtitle: "2,500+ Courses – Wide-ranging programs across disciplines.",
    image: indiaWhyStudyLogo("2,500+ Courses.png"),
  },
  point5: {
    title: "50,000+ International Students",
    subtitle:
      "50,000+ International Students – From 160+ countries, ensuring cultural diversity.",
    image: indiaWhyStudyLogo("50,000+ International Students.png"),
  },
};
