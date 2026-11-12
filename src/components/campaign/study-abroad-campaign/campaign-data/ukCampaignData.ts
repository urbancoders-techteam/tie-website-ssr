import type { StudyAbroadCampaignData } from "@/components/campaign/study-abroad-campaign/custom-components/studyAbroadTypes";
import { imageBaseUrl } from "@/utils/config";

const place = `${imageBaseUrl}CountryPlaces/uk`;
const uni = `${imageBaseUrl}CountryUniversities/uk`;

export const ukCampaignData: StudyAbroadCampaignData = {
  containerClass: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
  theme: {
    pageBackground: "#FBF8F3",
    text: "#122033",
    footer: { background: "#122033", accent: "#C6A35A", onAccent: "#122033" },
  },
  phone: "+919831241212",
  phoneDisplay: "+91 98312 41212",
  email: "info@taksheela.com",
  whatsappMessage: "Hi, I want to know about studying in the UK.",
  leadForm: {
    thankYouPath: "/study-abroad/uk-lp/thankyou",
    formLabel: "UK study abroad campaign",
    defaultTitle: "Get Your Free Counselling",
    submitLabel: "Get Free Counselling",
    submittingLabel: "Submitting...",
    courses: [
      "Business / MBA",
      "Computer science / IT",
      "Data science",
      "Engineering",
      "Health and life sciences",
      "Law",
      "Foundation pathway",
      "Not sure yet",
    ],
  },
  header: {
    nav: [
      { href: "#why-uk", label: "Study in the UK" },
      { href: "#universities", label: "Universities" },
      { href: "#fees", label: "Fees" },
      { href: "#scholarships", label: "Scholarships" },
      { href: "#counselling", label: "Contact" },
    ],
  },
  hero: {
    image: `${imageBaseUrl}CountryBanner/uk.png`,
    kicker: "United Kingdom",
    title: "Study in the UK",
    subtitle: "One-year master’s and a two-year Graduate Route",
    description:
      "English-medium degrees, September as the main intake, and a Graduate Route that lets you stay and work for up to two years after a master’s.",
    formAnchorId: "counselling",
    chips: [
      { icon: "calendarRange", label: "September main intake" },
      { icon: "bookOpen", label: "1-year master’s" },
      { icon: "briefcase", label: "2-year Graduate Route" },
    ],
  },
  why: {
    id: "why-uk",
    kicker: "UK",
    title: "Why Study in the UK?",
    carouselLabel: "Why study in the UK",
    intro: [
      "The UK is one of the most common choices for Indian students: a familiar academic structure, degrees taught in English, and a one-year master’s that is shorter than in the US or Australia.",
      "The Graduate Route lets international graduates stay and work in the UK for up to two years after a bachelor’s or master’s, and up to three years after a PhD.",
    ],
    points: [
      {
        icon: "graduationCap",
        title: "Degrees that are recognised worldwide",
        paragraphs: [
          "UK universities are a standard reference for employers and for further study. Teaching is in English, so Indian students do not need a local language before they start.",
        ],
      },
      {
        icon: "calendarClock",
        title: "A master’s is often one year",
        paragraphs: [
          "Most taught master’s programmes run for one academic year, usually from September. That cuts tuition and living time compared with a two-year master’s.",
        ],
        stats: [
          { label: "Bachelor’s", value: "£10,000–£20,000", note: "Per year, typical international range" },
          { label: "Master’s", value: "£13,000–£26,000", note: "Per year for a one-year MSc or MA" },
          { label: "MBA", value: "£25,000–£60,000+", note: "Per year at business schools" },
          { label: "Living", value: "£900–£1,400", note: "Per month, higher in London" },
        ],
        after: "These are typical ranges, not a quote. London is often 30–50% more expensive than other UK cities.",
      },
      {
        icon: "briefcase",
        title: "Graduate Route after the degree",
        paragraphs: [
          "After the course you can apply to stay and work, or look for work, for two years (three after a PhD). During study, the student visa allows part-time work in term time.",
        ],
        pills: ["Business", "Computer science", "Engineering", "Data science", "Health sciences"],
      },
      {
        icon: "globe",
        title: "Intakes and the student visa",
        paragraphs: [
          "The main intake is September or October. A smaller January intake exists for some courses. The visa is the UK Student visa. The application fee is about £363, plus the Immigration Health Surcharge of about £776 a year.",
        ],
        steps: ["University shortlisting", "SOP and documents", "Scholarship check", "CAS, visa, and IHS"],
      },
    ],
  },
  connect: {
    image: `${place}/uk1.png`,
    nightImage: `${place}/uk5.png`,
    kicker: "UK",
    title: "Connect With Us",
    description: "A counsellor can walk you through universities, scholarships, and the September or January intake.",
    formTitle: "Get Your Free Counselling",
    callLabel: "Call",
    whatsappLabel: "WhatsApp",
    emailLabel: "Email",
  },
  courses: {
    id: "fees",
    kicker: "UK",
    title: "Top Courses to Study in the UK",
    background: "#ffffff",
    intro: [
      "Indian students most often shortlist business, computing, engineering, data, and health. A taught master’s is usually one year.",
      "Fees below are typical yearly ranges for international students, not a quote for one university.",
    ],
    headers: ["Course", "Highlights", "Cities families shortlist", "Fee / year (£)", "Fee / year (₹)"],
    minWidth: 880,
    centerColumns: [3, 4],
    cta: { href: "#counselling", label: "Connect with our trusted study in UK consultants today" },
    rows: [
      ["Business and management", "One-year MSc routes. A full MBA is a separate, higher band.", "London, Manchester, Warwick", "13,000–26,000", "About ₹14–28 lakh"],
      ["MBA", "Most UK MBAs run for one year. The course table on the UK guide starts higher than a standard MSc.", "London, Warwick, Oxford, Cambridge", "35,000–65,000+", "About ₹38–71 lakh"],
      ["Computer science", "Software, cybersecurity, and cloud. Imperial, UCL, Manchester, and Bristol are the names on the guide.", "London, Manchester, Bristol", "24,000–30,000", "About ₹26–33 lakh"],
      ["Data science", "The guide lists Imperial, UCL, Edinburgh, and Warwick for data and AI.", "London, Edinburgh, Warwick", "22,000–32,000", "About ₹24–35 lakh"],
      ["Engineering", "Mechanical, civil, and electrical, often with a placement. Imperial, Southampton, Sheffield, and Bath are on the guide.", "Southampton, Sheffield, Birmingham", "20,000–30,000", "About ₹22–33 lakh"],
      ["Law (LLM)", "A one-year LLM. Qualifying to practise is a separate step.", "London, Glasgow", "22,000–35,000", "About ₹24–38 lakh"],
    ],
  },
  universities: {
    id: "universities",
    kicker: "UK",
    title: "Universities Indian Students Shortlist",
    background: "#F7F1E6",
    introAlign: "left",
    intro: [
      "These are universities already listed on the Taksheela UK guide. Fees are typical international master’s ranges from that guide, not a quote. Oxford, Cambridge, Imperial, UCL, Edinburgh, and Manchester publish higher bands on some courses.",
    ],
    headers: ["University", "Often shortlisted for", "Typical master’s fee", "Notes"],
    minWidth: 820,
    cta: { href: "#counselling", label: "Talk to our trusted study in UK consultants today" },
    logos: [
      { name: "University of Bristol", src: `${uni}/bristol.png` },
      { name: "University of Leeds", src: `${uni}/leeds.png` },
      { name: "University of Glasgow", src: `${uni}/glasgow.png` },
      { name: "University of Birmingham", src: `${uni}/birmingham.png` },
      { name: "Imperial College London", src: `${uni}/imperial.png` },
      { name: "Queen Mary University of London", src: `${uni}/queenmary.png` },
      { name: "University of Edinburgh", src: `${uni}/edinburgh.png` },
    ],
    rows: [
      ["University of Bristol", "Computer science is the course the UK guide names Bristol for", "£13,000–£26,000", "Typical international master’s band. Computer science on the guide sits nearer £24,000–£30,000."],
      ["University of Leeds", "Business, engineering, media", "£13,000–£26,000", "Typical international master’s band. Living costs are below London."],
      ["University of Glasgow", "Computing, engineering, finance", "£18,000–£24,000", "Master’s fee band on the UK guide. Scotland."],
      ["University of Birmingham", "Data, engineering, business, healthcare", "£18,000–£24,000", "Master’s fee band on the UK guide."],
      ["Imperial College London", "Engineering, computing, science", "£30,000–£38,000", "QS 6 on the Taksheela UK guide. London living costs apply."],
      ["Queen Mary University of London", "Business, law, science", "£13,000–£26,000", "Typical international master’s band. Budget London rent on top of tuition."],
      ["University of Edinburgh", "Data, AI, finance, business analytics", "£22,000–£28,000", "QS 27 on the Taksheela UK guide. Scotland."],
    ],
  },
  scholarship: {
    id: "scholarships",
    kicker: "UK",
    title: "Scholarships for Indian Students",
    background: "#ffffff",
    labelWidthClass: "w-[42%] sm:w-[30%]",
    intro: [
      "Most UK scholarship rounds open with admissions, often between October and February for the September intake. Chevening needs work experience. Many campus awards are automatic if your marks qualify.",
    ],
    headers: ["Scholarship", "Details"],
    rows: [
      ["Chevening", "UK government award. Tuition, a living allowance, and travel. For professionals with leadership experience, usually at least two years of work."],
      ["Commonwealth Scholarship", "Master’s and PhD funding for eligible Commonwealth countries, including India. Tuition, airfare, and a stipend."],
      ["GREAT Scholarships (India)", "About £10,000 for one year, with the British Council and participating UK universities, for Indian master’s students."],
      ["University merit awards", "Examples on the UK guide include Edinburgh (£5,000–£10,000), Warwick (£3,000–£10,000), and Manchester Global Futures (£3,000–£6,000)."],
      ["Early-acceptance reductions", "Some universities cut the fee by about £2,000–£8,000 if you accept the offer before their deadline."],
    ],
  },
  costOfLiving: {
    id: "cost-of-living",
    kicker: "UK",
    title: "Cost of Living in the UK",
    background: "#FBF8F3",
    minWidth: 760,
    centerColumns: [1, 2],
    intro: [
      "London is typically 30–50% more expensive than other UK cities. Figures below turn the monthly ranges on the Taksheela UK guide into a year. They are planning ranges, not a quote.",
    ],
    headers: ["Expense", "London / year", "Other cities / year", "Notes"],
    rows: [
      ["University housing", "£10,800–£16,800", "£6,000–£10,200", "About £900–£1,400 a month in London"],
      ["Private rent", "£12,000–£21,600", "£5,400–£9,000", "About £1,000–£1,800 a month in London"],
      ["Food and groceries", "£2,400–£3,840", "£1,800–£3,120", "Cooking at home keeps this down"],
      ["Local transport", "£1,200–£1,800", "£400–£900", "A student bus pass is cheaper than daily tickets"],
      ["Immigration Health Surcharge", "£776", "£776", "Charged per year of the visa, on top of the £363 visa fee"],
    ],
  },
  faq: {
    heading: "Frequently Asked Questions – Study in the UK",
    sectionId: "faqs",
    initialVisibleCount: 0,
    variant: "dubai",
    items: [
      {
        question: "How long is a master’s in the UK?",
        answer: "Most taught master’s programmes are one academic year, starting in September. Some courses, including research degrees and certain MBAs, run longer.",
        highlightTerms: ["one academic year"],
      },
      {
        question: "What does a UK degree usually cost?",
        answer: "A typical international bachelor’s is about £10,000–£20,000 a year. A typical master’s is about £13,000–£26,000 for the year. London and specialist courses, including many MBAs, cost more.",
        highlightTerms: ["£13,000–£26,000"],
      },
      {
        question: "Can I stay and work after studying?",
        answer: "The Graduate Route allows up to two years after a bachelor’s or master’s, and up to three years after a PhD, to work or look for work.",
        highlightTerms: ["two years"],
      },
      {
        question: "When should I apply?",
        answer: "The main intake is September or October. Apply in the previous autumn or winter if you also want a scholarship. A January intake exists for some courses only.",
        highlightTerms: ["September"],
      },
      {
        question: "What English score do universities ask for?",
        answer: "Most courses ask for IELTS about 6.0–7.0, or PTE. Some accept a medium-of-instruction letter. The offer letter states the score for that course.",
        highlightTerms: ["6.0–7.0"],
      },
      {
        question: "What does the visa cost?",
        answer: "The student visa application is about £363, plus the Immigration Health Surcharge of about £776 for each year of the visa.",
        highlightTerms: ["£363", "£776"],
      },
    ],
  },
};
