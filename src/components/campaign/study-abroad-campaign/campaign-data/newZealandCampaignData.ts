import type { StudyAbroadCampaignData } from "@/components/campaign/study-abroad-campaign/custom-components/studyAbroadTypes";
import { imageBaseUrl } from "@/utils/config";

const place = `${imageBaseUrl}CountryPlaces/newzealand`;
const uni = `${imageBaseUrl}CountryUniversities/newzealand`;

export const newZealandCampaignData: StudyAbroadCampaignData = {
  containerClass: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
  theme: {
    pageBackground: "#FBF8F3",
    text: "#122033",
    footer: { background: "#122033", accent: "#C6A35A", onAccent: "#122033" },
  },
  phone: "+919831241212",
  phoneDisplay: "+91 98312 41212",
  email: "info@taksheela.com",
  whatsappMessage: "Hi, I want to know about studying in New Zealand.",
  leadForm: {
    thankYouPath: "/study-abroad/new-zealand-lp/thankyou",
    formLabel: "New Zealand study abroad campaign",
    defaultTitle: "Get Your Free Counselling",
    submitLabel: "Get Free Counselling",
    submittingLabel: "Submitting...",
    courses: [
      "Information technology",
      "Engineering",
      "Business",
      "Healthcare",
      "Agriculture and environment",
      "Hospitality",
      "Foundation pathway",
      "Not sure yet",
    ],
  },
  header: {
    nav: [
      { href: "#why-new-zealand", label: "Study in New Zealand" },
      { href: "#universities", label: "Universities" },
      { href: "#fees", label: "Fees" },
      { href: "#scholarships", label: "Scholarships" },
      { href: "#counselling", label: "Contact" },
    ],
  },
  hero: {
    image: `${imageBaseUrl}CountryBanner/newzealand.png`,
    kicker: "New Zealand",
    title: "Study in New Zealand",
    subtitle: "Eight universities, smaller classes, a post-study work visa",
    description:
      "English-medium degrees, February and July intakes, and a post-study work visa of up to three years after the qualification.",
    formAnchorId: "counselling",
    chips: [
      { icon: "graduationCap", label: "Eight public universities" },
      { icon: "calendarRange", label: "February & July intakes" },
      { icon: "briefcase", label: "Up to 3 years post-study" },
    ],
  },
  why: {
    id: "why-new-zealand",
    kicker: "New Zealand",
    title: "Why Study in New Zealand?",
    carouselLabel: "Why study in New Zealand",
    intro: [
      "New Zealand’s eight universities teach in English, in smaller classes than many larger destinations. IT, engineering, healthcare, and agriculture are the fields that hire graduates.",
      "A student visa allows up to 20 hours of work a week in term and full-time work in scheduled breaks.",
    ],
    points: [
      {
        icon: "graduationCap",
        title: "Public universities with practical teaching",
        paragraphs: [
          "Auckland, AUT, Waikato, Massey, Victoria University of Wellington, Canterbury, Lincoln, and Otago cover the country. Degrees are recognised for further study and for skilled work.",
        ],
      },
      {
        icon: "wallet",
        title: "Fees are published in New Zealand dollars",
        paragraphs: [
          "On the Taksheela New Zealand guide, undergraduate tuition is often about NZD 22,000–35,000 a year, and postgraduate about NZD 26,000–40,000. Living is often planned around NZD 15,000 a year, and Auckland costs more.",
        ],
        stats: [
          { label: "Bachelor’s", value: "NZD 22,000–35,000", note: "Per year" },
          { label: "Master’s", value: "NZD 26,000–40,000", note: "Per year" },
          { label: "Living", value: "About NZD 15,000", note: "A year, before Auckland rent" },
          { label: "Work", value: "20 hours", note: "A week in term" },
        ],
        after: "These are ranges from the country guide, not a quote. Scholarships and the part-time job change the family budget.",
      },
      {
        icon: "briefcase",
        title: "Work after the degree",
        paragraphs: [
          "A post-study work visa can run for up to three years, depending on the level of the qualification. IT, engineering, healthcare, and agriculture are the sectors that recruit.",
        ],
        pills: ["Information technology", "Engineering", "Healthcare", "Agriculture", "Hospitality"],
      },
      {
        icon: "globe",
        title: "The visa is the Fee Paying Student Visa",
        paragraphs: [
          "It is for full-time study longer than three months. You need the offer, funds, insurance, and an English score. Processing is often about 4–6 weeks.",
        ],
        steps: ["Course and university", "Offer and fee deposit", "Visa, funds, and insurance", "Travel and housing"],
      },
    ],
  },
  connect: {
    image: `${place}/NZ1.png`,
    nightImage: `${place}/NZ3.png`,
    kicker: "New Zealand",
    title: "Connect With Us",
    description: "A counsellor can walk you through the eight universities, scholarships, and the February or July intake.",
    formTitle: "Get Your Free Counselling",
    callLabel: "Call",
    whatsappLabel: "WhatsApp",
    emailLabel: "Email",
  },
  courses: {
    id: "fees",
    kicker: "New Zealand",
    title: "Courses Indian Students Shortlist",
    background: "#ffffff",
    intro: [
      "IT, engineering, healthcare, and agriculture match the jobs New Zealand lists as shortages. Hospitality and business are the other common files.",
      "Undergraduate fees on the country guide are about NZD 22,000–35,000 a year. Postgraduate fees are about NZD 26,000–40,000. Clinical courses can be higher.",
    ],
    headers: ["Course", "Why students pick it", "Where it is taught", "Fee / year (NZD)", "Fee / year (₹)"],
    minWidth: 880,
    centerColumns: [3, 4],
    cta: { href: "#counselling", label: "Connect with our trusted study in New Zealand consultants today" },
    rows: [
      ["Information technology", "Software and networks, with post-study work in a listed skill.", "Auckland, Wellington, Christchurch", "26,000–40,000", "About ₹13–20 lakh"],
      ["Engineering", "Civil, mechanical, and electronic degrees with lab work.", "Auckland, Canterbury, Waikato", "26,000–40,000", "About ₹13–20 lakh"],
      ["Healthcare", "Nursing and public health need registration after the degree.", "Auckland, Otago, AUT", "26,000–40,000", "About ₹13–20 lakh"],
      ["Agriculture and environment", "Lincoln and Massey focus on farming, food, and land.", "Lincoln, Palmerston North", "22,000–35,000", "About ₹11–18 lakh"],
      ["Business", "Commerce and management at every university.", "Auckland, Wellington", "22,000–35,000", "About ₹11–18 lakh"],
      ["Hospitality and tourism", "Tied to the visitor economy. Check whether the offer is a diploma or a degree.", "Auckland, Wellington", "22,000–35,000", "About ₹11–18 lakh"],
    ],
  },
  universities: {
    id: "universities",
    kicker: "New Zealand",
    title: "New Zealand’s Universities",
    background: "#F7F1E6",
    introAlign: "left",
    intro: [
      "New Zealand has eight universities. The fee column uses the country-guide range, about NZD 22,000–40,000 a year depending on the level. It is not a quote for one course.",
    ],
    headers: ["University", "City", "Typical fee band", "Notes"],
    minWidth: 820,
    cta: { href: "#counselling", label: "Talk to our trusted study in New Zealand consultants today" },
    logos: [
      { name: "University of Auckland", src: `${uni}/nz1.png` },
      { name: "Massey University", src: `${uni}/nz2.png` },
      { name: "University of Waikato", src: `${uni}/nz3.png` },
      { name: "Victoria University of Wellington", src: `${uni}/nz4.png` },
      { name: "University of Canterbury", src: `${uni}/nz5.png` },
      { name: "University of Otago", src: `${uni}/nz6.png` },
      { name: "Auckland University of Technology", src: `${uni}/nz7.png` },
    ],
    rows: [
      ["University of Auckland", "Auckland", "NZD 22,000–40,000", "The largest university. Auckland rent is the highest in the country."],
      ["Massey University", "Palmerston North, Auckland, Wellington", "NZD 22,000–40,000", "Agriculture, food, and business are common files."],
      ["University of Waikato", "Hamilton", "NZD 22,000–40,000", "Management and computer science. Hamilton costs less than Auckland."],
      ["Victoria University of Wellington", "Wellington", "NZD 22,000–40,000", "Law, public policy, and science, in the capital."],
      ["University of Canterbury", "Christchurch", "NZD 22,000–40,000", "Engineering is the course families ask about."],
      ["University of Otago", "Dunedin", "NZD 22,000–40,000", "Health sciences and a residential student campus."],
      ["Auckland University of Technology", "Auckland", "NZD 22,000–40,000", "Applied degrees in IT, health, and design."],
    ],
  },
  scholarship: {
    id: "scholarships",
    kicker: "New Zealand",
    title: "Scholarships for Indian Students",
    background: "#ffffff",
    labelWidthClass: "w-[42%] sm:w-[30%]",
    intro: [
      "Awards are competitive and the deadlines move by university. Apply for the scholarship with the admission, not after the visa.",
    ],
    headers: ["Scholarship", "Details"],
    rows: [
      ["New Zealand Excellence Awards", "A merit award used by participating universities for strong international applicants. It usually reduces the fee rather than covering living costs."],
      ["University international scholarships", "Auckland, Otago, Canterbury, Victoria, Massey, Waikato, and AUT each publish their own master’s and bachelor’s awards."],
      ["Faculty grants", "Engineering, IT, and health departments sometimes add a smaller bursary. The course page lists it."],
    ],
  },
  costOfLiving: {
    id: "cost-of-living",
    kicker: "New Zealand",
    title: "Cost of Living in New Zealand",
    background: "#FBF8F3",
    minWidth: 760,
    centerColumns: [1, 2],
    intro: [
      "The country guide plans living costs at about NZD 15,000 a year, before the higher rents in Auckland. The rows below use the monthly planning cards on that guide, multiplied by 12. They are ranges, not a quote.",
    ],
    headers: ["Expense", "Per year (₹)", "Per year (NZD, about)", "Notes"],
    rows: [
      ["Accommodation", "₹7.2–14.3 lakh", "NZD 14,000–28,000", "From ₹59,700–₹1,19,400 a month on the country guide"],
      ["Food", "₹1.9–3.6 lakh", "NZD 3,700–7,000", "From ₹15,900–₹29,800 a month"],
      ["Transport", "₹0.95–1.7 lakh", "NZD 1,900–3,300", "From ₹7,950–₹13,900 a month"],
      ["Other costs", "₹1.2–2.4 lakh", "NZD 2,300–4,700", "Phone, insurance extras, and personal costs"],
    ],
  },
  faq: {
    heading: "Frequently Asked Questions – Study in New Zealand",
    sectionId: "faqs",
    initialVisibleCount: 0,
    variant: "dubai",
    items: [
      {
        question: "What are the fees?",
        answer: "Undergraduate tuition is often about NZD 22,000–35,000 a year. Postgraduate tuition is often about NZD 26,000–40,000. Living is often planned at about NZD 15,000 a year, and Auckland costs more.",
        highlightTerms: ["NZD 22,000–35,000", "NZD 26,000–40,000"],
      },
      {
        question: "Can I work while I study?",
        answer: "A student visa usually allows 20 hours a week in term and full-time work in scheduled breaks.",
        highlightTerms: ["20 hours"],
      },
      {
        question: "What happens after graduation?",
        answer: "A post-study work visa can last up to three years, depending on the level of the qualification. IT, engineering, healthcare, and agriculture hire graduates.",
        highlightTerms: ["three years"],
      },
      {
        question: "Which visa do I need?",
        answer: "The Fee Paying Student Visa, for full-time study longer than three months. You need the offer, funds, insurance, and an English score. Processing is often 4–6 weeks.",
        highlightTerms: ["4–6 weeks"],
      },
      {
        question: "When are the intakes?",
        answer: "The main intake is February. A second intake in July is available for many courses, not all.",
        highlightTerms: ["February", "July"],
      },
      {
        question: "What English score is required?",
        answer: "Universities ask for IELTS or TOEFL. The score depends on the course. Undergraduate entry is a Class 12 certificate. A master’s needs a related bachelor’s degree.",
      },
    ],
  },
};
