import { studyAbroadBaseUrl } from "@/utils/config";

const realStudentsJourneysImage1 = studyAbroadBaseUrl + "main-page/rsj-img1.webp";
const realStudentsJourneysImage2 = studyAbroadBaseUrl + "main-page/rsj-img2.avif";
const realStudentsJourneysImage3 = studyAbroadBaseUrl + "main-page/rsj-img3.jpg";
const realStudentsJourneysImage4 = studyAbroadBaseUrl + "main-page/rsj-img4.jpg";

export const realStudentsJourneysContent = {
  eyebrow: "Real student journeys",
  headingLine1: "From Indian Classrooms to",
  headingLine2: "Global Campuses",
  description:
    "Every year, thousands of Indian students make the leap from local colleges to world-class universities in the UK, Germany, Ireland, Australia and beyond. Their journeys begin with a single counselling session and end with a degree that opens global doors.",
  ctaText: "Start Your Journey Today",
  gallery: [
    {
      id: "hallway",
      src: realStudentsJourneysImage1,
      alt: "Students in a bright school corridor with lockers",
    },
    {
      id: "campus",
      src: realStudentsJourneysImage2,
      alt: "Historic university building with columns under a blue sky",
    },
    {
      id: "together",
      src: realStudentsJourneysImage3,
      alt: "Group of friends sitting together at a table",
    },
    {
      id: "graduation",
      src: realStudentsJourneysImage4,
      alt: "Graduates in caps and gowns celebrating outdoors",
    },
  ],
};
