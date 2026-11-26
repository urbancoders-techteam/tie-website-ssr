// @ts-nocheck
const imageBaseUrl = process.env.REACT_APP_IMAGE_URL

const ChooseUsImg1 = imageBaseUrl + "ChooseUsImg1.svg";
const ChooseUsImg2 = imageBaseUrl + "ChooseUsImg2.svg";
const ChooseUsImg3 = imageBaseUrl + "ChooseUsImg3.svg";
const ChooseUsImg4 = imageBaseUrl + "ChooseUsImg4.svg";
const ChooseUsImg5 = imageBaseUrl + "ChooseUsImg5.svg";

const immigrationChooseData = [
  {
    title: "Expert Guidance",
    items: [
      "Our team comprises experienced immigration consultants who are well-versed in the intricacies of immigration laws, policies, and procedures.",
    ],
    Image: ChooseUsImg3,
  },
  {
    title: "Personalized Approach",
    items: [
      "We recognize that every client is unique, with distinct backgrounds, aspirations, and circumstances.",
    ],
    Image: ChooseUsImg2,
  },
  {
    title: "Transparency and Integrity",
    items: [
      "We believe in providing honest, accurate, and up-to-date information to our clients, empowering them to make informed decisions about their immigration journey.",
    ],
    Image: ChooseUsImg1,
  },
  {
    title: "Comprehensive Services",
    items: [
      "From initial consultation to post-arrival support, we offer a wide range of comprehensive services to cover every aspect of the immigration process.",
    ],
    Image: ChooseUsImg4,
  },
  {
    title: "Customer Satisfaction",
    items: [
      "We go above and beyond to ensure that your immigration experience is smooth, stress-free, and successful.",
    ],
    Image: ChooseUsImg5,
  },
];

export default immigrationChooseData;
