import type { StudyAbroadCampaignData } from "@/components/campaign/study-abroad-campaign/custom-components/studyAbroadTypes";
import { imageBaseUrl } from "@/utils/config";

const place = `${imageBaseUrl}CountryPlaces/ireland`;
const uni = `${imageBaseUrl}CountryUniversities/ireland`;

export const irelandCampaignData: StudyAbroadCampaignData = {
  containerClass: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
  theme: {
    pageBackground: "#FBF8F3",
    text: "#122033",
    footer: { background: "#122033", accent: "#C6A35A", onAccent: "#122033" },
  },
  phone: "+919831241212",
  phoneDisplay: "+91 98312 41212",
  email: "info@taksheela.com",
  whatsappMessage: "Hi, I want to know about studying in Ireland.",
  leadForm: {
    thankYouPath: "/study-abroad/ireland-lp/thankyou",
    formLabel: "Ireland study abroad campaign",
    defaultTitle: "Get Your Free Counselling",
    submitLabel: "Get Free Counselling",
    submittingLabel: "Submitting...",
    courses: [
      "Computer science / IT",
      "Data and analytics",
      "Business",
      "Engineering",
      "Pharmaceutical and life sciences",
      "Hospitality",
      "Foundation pathway",
      "Not sure yet",
    ],
  },
  header: {
    nav: [
      { href: "#why-ireland", label: "Study in Ireland" },
      { href: "#universities", label: "Universities" },
      { href: "#fees", label: "Fees" },
      { href: "#scholarships", label: "Scholarships" },
      { href: "#counselling", label: "Contact" },
    ],
  },
  hero: {
    image: `${imageBaseUrl}CountryBanner/ireland.png`,
    kicker: "Ireland",
    title: "Study in Ireland",
    subtitle: "Tech, pharma, and English-taught degrees",
    description:
      "English-medium universities, a tech and pharmaceutical industry next to campus, and a post-study stay under the Third Level Graduate Scheme.",
    formAnchorId: "counselling",
    chips: [
      { icon: "bookOpen", label: "Taught in English" },
      { icon: "briefcase", label: "Tech and pharma hiring" },
      { icon: "calendarRange", label: "September main intake" },
    ],
  },
  why: {
    id: "why-ireland",
    kicker: "Ireland",
    title: "Why Study in Ireland?",
    carouselLabel: "Why study in Ireland",
    intro: [
      "Ireland is a common European choice for Indian students who want an English-taught degree without moving to the UK. The Higher Education Authority has reported about 10,000 Indian students in Irish colleges.",
      "The usual shortlist is business, engineering, computer science, healthcare, and hospitality.",
    ],
    points: [
      {
        icon: "graduationCap",
        title: "Degrees taught in English",
        paragraphs: [
          "Courses are in English. Universities usually ask for IELTS or TOEFL. Trinity College Dublin, UCD, and the other public universities on this page are the names families compare first.",
        ],
      },
      {
        icon: "briefcase",
        title: "Employers sit next to the campuses",
        paragraphs: [
          "Technology and pharmaceutical companies have large offices in Dublin, Cork, and Galway. That is why computing, data, engineering, and life sciences are the courses counsellors hear most often.",
        ],
        pills: ["Computer science", "Data", "Engineering", "Pharma and life sciences", "Business"],
      },
      {
        icon: "wallet",
        title: "Tuition and living in euros",
        paragraphs: [
          "On Taksheela’s planning ranges, international tuition is often about €10,000–€25,000 a year, and living about €900–€1,400 a month. Dublin costs more than Cork, Galway, or Limerick.",
        ],
        stats: [
          { label: "Tuition", value: "€10,000–€25,000", note: "Per year, typical international range" },
          { label: "Living", value: "€900–€1,400", note: "Per month, higher in Dublin" },
          { label: "Work in term", value: "20 hours", note: "A week, full-time in the holidays" },
          { label: "After study", value: "Graduate Scheme", note: "Stay to look for work after the degree" },
        ],
      },
      {
        icon: "calendarClock",
        title: "Work during study, and stay after it",
        paragraphs: [
          "A student permission usually allows up to 20 hours a week in term and full-time work in official holidays. After the degree, the Third Level Graduate Scheme is the route to stay and work.",
        ],
        steps: ["University shortlisting", "Offer and fee deposit", "Visa and funds", "Accommodation"],
      },
    ],
  },
  connect: {
    image: `${place}/ireland1.png`,
    nightImage: `${place}/ireland3.png`,
    kicker: "Ireland",
    title: "Connect With Us",
    description: "A counsellor can walk you through Dublin and other cities, scholarships, and the September intake.",
    formTitle: "Get Your Free Counselling",
    callLabel: "Call",
    whatsappLabel: "WhatsApp",
    emailLabel: "Email",
  },
  courses: {
    id: "fees",
    kicker: "Ireland",
    title: "Courses Indian Students Shortlist",
    background: "#ffffff",
    intro: [
      "Business, engineering, computer science, healthcare, and hospitality are the courses named most often for Indian students in Ireland.",
      "The fee column is the same typical yearly band, about €10,000–€25,000. Medicine and some clinical courses sit above it. These are ranges, not a quote.",
    ],
    headers: ["Course", "Why students pick it", "Cities", "Fee / year (€)", "Fee / year (₹)"],
    minWidth: 880,
    centerColumns: [3, 4],
    cta: { href: "#counselling", label: "Connect with our trusted study in Ireland consultants today" },
    rows: [
      ["Computer science and IT", "Dublin is a European base for software companies.", "Dublin, Cork, Limerick", "10,000–25,000", "About ₹9–23 lakh"],
      ["Data and analytics", "Sits next to the technology employers already in Ireland.", "Dublin, Galway", "10,000–25,000", "About ₹9–23 lakh"],
      ["Engineering", "Electronic, mechanical, and energy programmes at the public universities.", "Cork, Galway, Dublin", "10,000–25,000", "About ₹9–23 lakh"],
      ["Pharmaceutical and life sciences", "Ireland has a large pharmaceutical manufacturing base. Clinical courses can sit above this band.", "Cork, Dublin", "10,000–25,000", "About ₹9–23 lakh"],
      ["Business", "Commerce, finance, and management degrees taught in English.", "Dublin, Limerick", "10,000–25,000", "About ₹9–23 lakh"],
      ["Hospitality", "Named on the Ireland guide alongside business, engineering, computing, and healthcare.", "Dublin", "10,000–25,000", "About ₹9–23 lakh"],
    ],
  },
  universities: {
    id: "universities",
    kicker: "Ireland",
    title: "Universities on the Ireland Shortlist",
    background: "#F7F1E6",
    introAlign: "left",
    intro: [
      "These are the universities on the Taksheela Ireland list. Tuition inside one university still moves by course, so the fee column stays the country range of about €10,000–€25,000 a year unless a clinical course is higher.",
    ],
    headers: ["University", "City", "Typical fee band", "Notes"],
    minWidth: 820,
    cta: { href: "#counselling", label: "Talk to our trusted study in Ireland consultants today" },
    logos: [
      { name: "Trinity College Dublin", src: `${uni}/ire1.png` },
      { name: "University College Dublin", src: `${uni}/ire2.png` },
      { name: "University of Galway", src: `${uni}/ire3.png` },
      { name: "University College Cork", src: `${uni}/ire4.png` },
      { name: "Dublin City University", src: `${uni}/ire5.png` },
      { name: "University of Limerick", src: `${uni}/ire6.png` },
      { name: "Maynooth University", src: `${uni}/ire7.png` },
    ],
    rows: [
      ["Trinity College Dublin", "Dublin", "€10,000–€25,000", "The university most families ask about first. Dublin rent is the highest in the country."],
      ["University College Dublin", "Dublin", "€10,000–€25,000", "Large public university. Business, science, and engineering are common files."],
      ["University of Galway", "Galway", "€10,000–€25,000", "West-coast campus. Living costs are usually below Dublin."],
      ["University College Cork", "Cork", "€10,000–€25,000", "Strong for science, engineering, and pharma-related courses."],
      ["Dublin City University", "Dublin", "€10,000–€25,000", "Business, computing, and communications. Still a Dublin housing market."],
      ["University of Limerick", "Limerick", "€10,000–€25,000", "Known for cooperative placements on many degrees."],
      ["Maynooth University", "Maynooth", "€10,000–€25,000", "Close to Dublin, with rents that are often lower than the city centre."],
    ],
  },
  scholarship: {
    id: "scholarships",
    kicker: "Ireland",
    title: "Scholarships for Indian Students",
    background: "#ffffff",
    labelWidthClass: "w-[42%] sm:w-[30%]",
    intro: [
      "Ireland awards are smaller in number than the UK list. The Government of Ireland scholarship and each university’s own merit award are the ones to check before you pay a deposit.",
    ],
    headers: ["Scholarship", "Details"],
    rows: [
      ["Government of Ireland International Education Scholarship", "A national award for international students. Places are limited, so the deadline is earlier than a normal university application."],
      ["University merit awards", "Trinity, UCD, UCC, Galway, DCU, Limerick, and Maynooth each publish their own fee waivers. Many are decided from the application itself."],
      ["Faculty awards", "Computing, engineering, and science departments sometimes add a separate bursary. The course page is the place to check."],
    ],
  },
  costOfLiving: {
    id: "cost-of-living",
    kicker: "Ireland",
    title: "Cost of Living in Ireland",
    background: "#FBF8F3",
    minWidth: 760,
    centerColumns: [1, 2],
    intro: [
      "The budget planner puts living at about €900–€1,400 a month, higher in Dublin. The rows below turn the monthly cards on the Ireland guide into a year. Tuition is separate, about €10,000–€25,000 a year.",
    ],
    headers: ["Expense", "Per year (₹)", "Monthly card on the guide", "Notes"],
    rows: [
      ["Accommodation", "₹3.6–7.2 lakh", "₹30,000–₹60,000", "The largest bill. Dublin sits at the top of the range."],
      ["Food", "₹2.4–3.6 lakh", "₹20,000–₹30,000", "Cooking at home keeps this down."],
      ["Transport", "₹60,000–₹1.2 lakh", "₹5,000–₹10,000", "A student travel card cuts bus fares."],
      ["Other costs", "₹1.2–1.8 lakh", "₹10,000–₹15,000", "Phone, laundry, and personal costs. Insurance is extra for the visa."],
    ],
  },
  faq: {
    heading: "Frequently Asked Questions – Study in Ireland",
    sectionId: "faqs",
    initialVisibleCount: 0,
    variant: "dubai",
    items: [
      {
        question: "Which courses do Indian students pick in Ireland?",
        answer: "Business, engineering, computer science, healthcare, and hospitality. Computing and pharmaceutical sciences are common because those industries hire in Ireland.",
      },
      {
        question: "Do I need IELTS?",
        answer: "Most courses are taught in English and ask for IELTS or TOEFL. The offer letter states the score. Some colleges accept a medium-of-instruction letter.",
        highlightTerms: ["IELTS"],
      },
      {
        question: "How much should a family budget?",
        answer: "Tuition is often about €10,000–€25,000 a year. Living is about €900–€1,400 a month, higher in Dublin. These are ranges, not a quote.",
        highlightTerms: ["€10,000–€25,000", "€900–€1,400"],
      },
      {
        question: "Can I work while I study?",
        answer: "Yes. Term-time work is usually up to 20 hours a week, and full-time in the official holidays, if the immigration permission allows it.",
        highlightTerms: ["20 hours"],
      },
      {
        question: "Can I stay after the degree?",
        answer: "The Third Level Graduate Scheme lets graduates stay and look for work after the course. The length depends on the level of the degree.",
        highlightTerms: ["Third Level Graduate Scheme"],
      },
      {
        question: "Is the student visa difficult?",
        answer: "You need an offer from a recognised college, the fee evidence the embassy asks for, insurance, and the English score. Start once the offer is in hand.",
      },
    ],
  },
};
