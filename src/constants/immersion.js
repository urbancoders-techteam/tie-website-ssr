// import middle_east from "../../asset/middle-east.png";
// import northamerica from "../../asset/north-america.png"

import { imageBaseUrl } from "@/utils/config";

export const ZoneData = [
  {
    title: "Middle East",
    items: [
      "Large Indian community across countries like UAE, Saudi Arabia, Qatar.",
      "Indians working in construction, retail, IT, healthcare, and more.",
    ],
    path: "/immersion/middle-east",
  },
  {
    title: "South East Asia",
    items: [
      "Significant Indian population in countries like Singapore, Malaysia, Thailand.",
      "Indians in business, education, and tourism industries.",
    ],
    Image: "/images/thailand-south-east.png",
    path: "/immersion/south-east-asia",
  },
  {
    title: "Europe",
    items: [
      "Indian diaspora across UK, Germany, France, and more.",
      "Indians contributing to sectors like technology, healthcare, and academia.",
    ],
    Image: "/images/europe.png",
    path: "/immersion/europe",
  },
  // {
  //   title: "North America",                                                           // Required Later
  //   items: [
  //     "Canada and the US are home to large Indian populations.",
  //     "Indians working across various sectors like IT, healthcare, finance, and education.",
  //   ],
  //   Image: northamerica,
  //   path: "/immersion/north-america",
  // },
];

const icon1 = imageBaseUrl + "immersion/Benefitsimg1.svg";
const icon2 = imageBaseUrl + "immersion/Benefitsimg2.svg";
const icon3 = imageBaseUrl + "immersion/Benefitsimg3.svg";
const icon4 = imageBaseUrl + "immersion/Benefitsimg4.svg";

export const immersionBenefits = [
  {
    title: "Real-world learning",
    content:
      "Gain hands-on experience in real-world situations, enhancing skills and making knowledge more applicable in professional environments.",
    icon: icon1,
  },
  {
    title: "Cultural experience",
    content:
      "Immerse in diverse cultures, expanding your global understanding and fostering international perspectives.",
    icon: icon2,
  },
  {
    title: "Career boost",
    content:
      "Develop marketable skills, expand your professional network, and gain a competitive edge for career advancement.",
    icon: icon3,
  },
  {
    title: "Personal growth",
    content:
      "Overcome challenges, build resilience, and gain self-confidence, fostering both personal and professional growth.",
    icon: icon4,
  },
];

// immersion slug data

export const immersionSlugData = [
  {
    slug: "middle-east",
    title: "Middle East",
    content:
      "<p>The <strong>Middle East</strong>, with key cities like <strong>Dubai and Sharjah</strong>, offers a unique landscape for <strong>global immersion </strong>. <strong>Dubai</strong>, a hub of <strong>innovation, business, and diversity</strong>, attracts professionals and entrepreneurs worldwide. <strong>Sharjah</strong>, the cultural capital, fosters <strong>art, literature, and academia</strong>, enriching cross-cultural experiences. Together, these cities create a dynamic environment for <strong>global business, cultural exchange, and international collaboration</strong>. With a blend of <strong>modern opportunities and rich traditions</strong>, the region is an ideal destination for those seeking <strong>international exposure, networking, and professional growth</strong> in a thriving <strong>global economy</strong>.</p>",
    image: imageBaseUrl + "immersion/MiddleEastCollage.png",
    srTitle: "Middle East Immersion Program | Global Exposure with Taksheela",
    srDesc:
      "Join Taksheela’s Middle East Immersion Program to explore culture, education, and innovation. Gain real-world experience and global perspective in top MENA hubs.",
  },
  {
    slug: "south-east-asia",
    title: "South East Asia",
    content:
      "<p><strong>Thailand and Malaysia</strong> offer a <strong>vibrant and diverse environment for global immersion</strong>, combining <strong>economic growth, cultural richness, and business opportunities</strong>. <strong>Thailand</strong>, a key player in ASEAN, is known for its <strong>booming tourism, manufacturing, and startup ecosystem</strong>, making it a hotspot for <strong>international trade and investment</strong>. <strong>Malaysia</strong>, with its <strong>multicultural society and strong economic infrastructure</strong>, serves as a bridge between <strong>Eastern and Western markets</strong>, offering exposure to <strong>finance, technology, and sustainable development</strong>. Both countries provide a unique blend of <strong>modern innovation and traditional values</strong>, making them ideal for <strong>cross-cultural learning, business expansion, and international networking</strong>.</p>",
    image: imageBaseUrl + "immersion/CollagePosterSouth1.png",
    srTitle: "Southeast Asia Immersion Program | Taksheela Institute",
    srDesc:
      "Join Taksheela’s Southeast Asia Immersion Program for real-world exposure, cultural exchange, and immersive academic learning across dynamic ASEAN countries.",
  },
  {
    slug: "europe",
    title: "Europe",
    content:
      "<p><strong>Europe</strong>, a hub of <strong>economic power, cultural diversity, and global innovation</strong>, offers unparalleled opportunities for <strong>international exposure and business expansion</strong>. Among its top destinations, <strong>France</strong> stands out for its leadership in <strong>luxury, fashion, finance, and technology</strong>, providing access to <strong>world-class education and global markets</strong>. Meanwhile, <strong>Germany</strong>, known for its <strong>engineering excellence, automotive industry, and strong economy</strong>, is a leader in <strong>manufacturing, sustainability, and industrial innovation</strong>. Both countries offer a unique blend of <strong>heritage and modern business ecosystems</strong>, making them ideal for <strong>cross-cultural learning, professional networking, and hands-on experience in international markets</strong>.</p>",
    image: imageBaseUrl + "immersion/Europe.png",
    srTitle: "Europe Immersion Programs | Study Tours by Taksheele",
    srDesc:
      "Join Taksheela’s Europe Immersion Programs for real-world exposure, academic learning, and cultural exchange in top European cities and institutions.",
  },
];

export const immersionHeadings = {
  "middle-east": {
    h1: "Middle East",
    h2s: [
      "Dubai",
      "Key Objectives",
      "Program Overview",
      "RIT University",
      "Company Visit",
    ],
  },
  "south-east-asia": {
    h1: "South East Asia",
    h2s: [
      "Malaysia",
      "Key Objectives",
      "Program Overview",
      "UTHM University",
      "Company Visit",
    ],
  },
  europe: {
    h1: "Europe",
    h2s: [
      "France",
      "Key Objectives",
      "Program Overview",
      "ASAI & DS University",
      "Company Visit",
    ],
  },
};
