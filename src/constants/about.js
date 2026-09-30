import { imageBaseUrl, webIconsUrl } from "@/utils/config";
import sheetal from "../../public/images/Sheetal_Jalan.png";
import sumit from "../../public/images/Sumit_Jalan.png";

const serviceIcon1 = webIconsUrl + "excellence.png";
const serviceIcon2 = webIconsUrl + "Integrity.png";
const serviceIcon3 = webIconsUrl + "study-skills.png";
const serviceIcon4 = webIconsUrl + "citizenship.png";

export const ourServices = [
  {
    title: "Excellence",
    description:
      "Dedicated to providing excellence in all our services, ensuring students receive top-quality education and support.",
    icon: serviceIcon1,
  },
  {
    title: "Integrity",
    description:
      "To uphold the highest standards of honesty, transparency, and ethical conduct, our institution places a paramount emphasis on integrity.",
    icon: serviceIcon2,
  },
  {
    title: "Student-Centric Approach",
    description:
      "Prioritizing students' needs, aspirations, and well-being, we offer personalized guidance to help achieve academic and personal goals.",
    icon: serviceIcon3,
  },
  {
    title: "Global Citizenship",
    description:
      "We foster the growth of global citizens—culturally competent, socially responsible, and positively contributing to a globalized society.",
    icon: serviceIcon4,
  },
];

const icon1 = imageBaseUrl + "teamImg1.png";
const icon3 = imageBaseUrl + "teamImg3.png";

export const ourTeams = [
  {
    id: 1,
    icon: icon1,
    name: "Sheetal Jalan, Co-Founder",
    image: sheetal,
    greeting: "Dear Explorers,",
    message:
      "In the early 20th century, Ford manufactured cars in only black. Today, such one-size-fits-all thinking is outdated. Similarly, when embarking on our overseas journey, despite choosing a top player in the industry, we realized the importance of offering a world-class customized solution to each student, respecting their unique dreams and aspirations. At Taksheela, our goal is to inspire every student to attain what they truly desire and deserve!",
  },
  {
    id: 3,
    icon: icon3,
    name: "Sumit Jalan, Director",
    image: sumit,
    greeting: "Dear Trailblazers,",
    message:
      "As the Director of TIE, I invite you to a transformative journey where education transcends boundaries. We're not just about study programs; we're architects of global experiences. Our commitment is your success—personally, academically, and globally. From personalized guidance to world-class partnerships, we pave the way for your global odyssey. This isn't just education; it's an expedition into a future without borders. Welcome to a community that believes in your limitless potential.",
  },
];
