import { imageBaseUrl } from "@/utils/config";

const serviceIcon1 = imageBaseUrl + "value1.svg";
const serviceIcon2 = imageBaseUrl + "value2.svg";
const serviceIcon3 = imageBaseUrl + "value3.svg";
const serviceIcon4 = imageBaseUrl + "value4.svg";

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
const icon2 = imageBaseUrl + "teamImg2.png";
const icon3 = imageBaseUrl + "teamImg3.png";
const richika = imageBaseUrl + "richika.jfif";
const sheetal = imageBaseUrl + "sheetal.jfif";
const sumit = imageBaseUrl + "teams/Sumit.png";
// const background = imageBaseUrl + "temaBg.svg";

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
    id: 2,
    icon: icon2,
    name: "Richika Singhi, Co-Founder",
    image: richika,
    greeting: "Dear Students,",
    message: `Welcome to a journey that opens the door to a world of possibilities ! 
        As founders, our vision is simple yet profound — to empower you with the wings of knowledge and experience so that you may soar beyond the confines of traditional education. It's about immersing yourself in new cultures, embracing diversity, and sculpting a global perspective that will shape the rest of your life. So, let the world be your classroom, and let your education be the catalyst for a future without borders! `,
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
