import { imageBaseUrl } from "@/utils/config";

const stbg = imageBaseUrl + "homestudybg.svg";
const imbg = imageBaseUrl + "homeimmigrationbg.svg";
const mbbg = imageBaseUrl + "homembbsbg.svg";
const tpbg = imageBaseUrl + "hometestprepbg.svg";
const st = imageBaseUrl + "homestudyabroad.svg";
const im = imageBaseUrl + "homeBanner/immersion.jpg";
const mb = imageBaseUrl + "homeBanner/IR.jpg";
const tp = imageBaseUrl + "hometest.svg";

export const ourserviceshomedata = [
  {
    background: stbg,
    image: st,
    title: "STUDY ABROAD",
    path: "/study-abroad",
  },
  {
    background: imbg,
    image: im,
    title: "IMMERSION",
    path: "/immersion",
  },
  {
    background: mbbg,
    image: mb,
    title: "INTERNATIONAL ENGAGEMENT",
    path: "/international-relation",
  },
  {
    background: tpbg,
    image: tp,
    title: "TEST PREP",
    path: "/test",
  },
];

export const taksheelaEdge = [
  {
    id: 1,
    heading: "Platinum Consultancy",
    subheading:
      "Exclusive, premium services with top-tier expertise, encompassing comprehensive guidance and elite academic transition assistance.",
  },
  {
    id: 2,
    heading: "Technology Integration",
    subheading:
      "Tailored web-based application for seamless tracking of end-to-end application processes, class scheduling, and real-time updates.",
  },
  {
    id: 3,
    heading: "Pinnacle Squad",
    subheading:
      "Our team's deep expertise in global education guides students in logical course and university selection, fostering informed decisions.",
  },
  {
    id: 4,
    heading: "Extensive Partnerships",
    subheading:
      "Established connections with esteemed global universities, language schools, and educational institutions, showcasing extensive partnerships.",
  },
];

export const taksheelaInsights = [
  {
    id: 1,
    subheading:
      "Join us as we take you on Rahul's journey with Taksheela to his dream university.",
  },
];
