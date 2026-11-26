import type { StudyAbroadCampaignData } from "@/components/campaign/study-abroad-campaign/custom-components/studyAbroadTypes";
import { imageBaseUrl, studyAbroadImageUrl } from "@/utils/config";

const place = `${imageBaseUrl}CountryPlaces/newzealand`;

const heroImage = `${studyAbroadImageUrl}campaign/new-zealand/newzealand-home-banner.jpg`;

const universityLogo1 = `${studyAbroadImageUrl}campaign/new-zealand/University_Of_Auckland.png`;
const universityLogo2 = `${studyAbroadImageUrl}campaign/new-zealand/University_Of_Otago.png`;
const universityLogo3 = `${studyAbroadImageUrl}campaign/new-zealand/University-of-Waikato.jpg`;
const universityLogo4 = `${studyAbroadImageUrl}campaign/new-zealand/Victoria_University_of_Wellington.png`;
const universityLogo5 = `${studyAbroadImageUrl}campaign/new-zealand/University_of_Canterbury.png`;

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
    intakes: ["February", "July", "November", "Not sure yet"],
    courses: [
      "Computer science / IT",
      "Engineering",
      "Business & analytics",
      "Agriculture & food science",
      "Environmental science",
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
    image: heroImage,
    kicker: "New Zealand",
    title: "Study in New Zealand",
    subtitle: "Eight universities, smaller classes, a post-study work visa",
    description:
      "Learn about recognised qualifications, relevant programmes, and research opportunities available in New Zealand. Plan your courses, finance, and future with Taksheela.",
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
      "From education based on research to learning aimed at careers, here are seven reasons why Indian students choose New Zealand.",
    ],
    points: [
      {
        icon: "graduationCap",
        title: "Globally recognised degrees from respected universities",
        paragraphs: [
          "NZ universities provide internationally recognised qualification programmes at both undergraduate and postgraduate levels. Students have the option to compare universities and courses based on their academic suitability and future career aspirations.",
        ],
      },
      {
        icon: "bookOpen",
        title: "Practical learning is built into many programmes",
        paragraphs: [
          "Applied projects, along with industry-orientated learning and research, will assist the students in bridging the gap between theory and practice. This can vary from programme to programme.",
        ],
      },
      {
        icon: "fileCheck",
        title: "Clear academic quality and student support",
        paragraphs: [
          "Standards for education quality and international student services allow the students to cope with studies and life at the university better.",
        ],
      },
      {
        icon: "briefcase",
        title: "Strong options across technology, engineering and environmental fields",
        paragraphs: [
          "Computer Science & IT, engineering, business and analytics, agriculture and food science, and environmental science are emphasised in New Zealand.",
        ],
        pills: [
          "Computer Science & IT",
          "Engineering",
          "Business and analytics",
          "Agriculture and food science",
          "Environmental science",
        ],
      },
      {
        icon: "calendarClock",
        title: "Eligible students can work while they study",
        paragraphs: [
          "An eligible student visa may allow a maximum of 25 hours of work each week, with a maximum of full-time employment during break periods where allowed by the visa criteria.",
        ],
        stats: [
          { label: "Term-time work", value: "Up to 25 hours", note: "A week, subject to visa conditions" },
        ],
      },
      {
        icon: "globe",
        title: "Post-study work opportunities can extend your experience",
        paragraphs: [
          "An eligible graduate may be entitled to a post-study work visa lasting up to three years, subject to the qualification.",
        ],
        stats: [
          { label: "Post-study work", value: "Up to 3 years", note: "Depends on the qualification and immigration rules" },
        ],
      },
      {
        icon: "badgePercent",
        title: "Scholarships can make study more achievable.",
        paragraphs: [
          "Possible sources include international scholarships from the university, faculty merit scholarships, and Manaaki New Zealand Scholarships. Eligibility criteria, amount of funding and deadlines differ.",
        ],
        pills: ["University international scholarships", "Faculty merit scholarships", "Manaaki New Zealand Scholarships"],
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
    title: "Top Courses to Study in New Zealand",
    background: "#ffffff",
    intro: [
      "Popular subjects of study in New Zealand. Tuition fees vary according to qualifications, courses, and year of admission.",
    ],
    headers: ["Course", "Highlights", "Top institutions", "Fee / year (NZD)", "Fee / year (₹)"],
    minWidth: 880,
    centerColumns: [3, 4],
    note: "Indicative tuition: bachelor's NZ$32,000–50,000+ per year; master's NZ$35,000–55,000+ per year. These are general ranges, not specific course rates.",
    cta: { href: "#counselling", label: "Connect with our trusted study in New Zealand consultants today" },
    rows: [
      [
        "Computer Science & IT",
        "Software development, computing and information technology",
        "University of Auckland",
        "NZ$48,133–58,009",
        "₹25.17–30.33 lakh",
      ],
      [
        "Engineering",
        "Engineering disciplines and applied problem-solving",
        "University of Otago",
        "NZ$36,750–45,150",
        "₹19.21–23.61 lakh",
      ],
      [
        "Business & Analytics",
        "Business management, finance and data-led decision-making",
        "University of Waikato",
        "NZ$38,252–48,345",
        "₹20.00–25.28 lakh",
      ],
      [
        "Agriculture & Food Science",
        "Food systems, agriculture and associated science",
        "Victoria University of Wellington",
        "NZ$37,546–46,451",
        "₹19.63–24.29 lakh",
      ],
      [
        "Environmental Science",
        "Environment, sustainability and scientific study",
        "University of Canterbury",
        "NZ$36,304–51,904",
        "₹18.98–27.14 lakh",
      ],
    ],
  },
  universities: {
    id: "universities",
    kicker: "New Zealand",
    title: "Top Universities in New Zealand",
    background: "#F7F1E6",
    introAlign: "left",
    intro: [
      "Confirm current tuition for each course on the university website. Rankings are not listed here.",
    ],
    headers: ["University", "Popular Courses / Best Programs", "Tuition Fees (per year)", "Highlights"],
    minWidth: 920,
    cta: { href: "#counselling", label: "Talk to our trusted study in New Zealand consultants today" },
    logos: [
      { name: "University of Auckland", src: universityLogo1 },
      { name: "University of Otago", src: universityLogo2 },
      { name: "University of Waikato", src: universityLogo3 },
      { name: "Victoria University of Wellington", src: universityLogo4 },
      { name: "University of Canterbury", src: universityLogo5 },
    ],
    rows: [
      [
        "University of Auckland",
        "Computer Science, Engineering, Business, Data Science, Environmental Science",
        "NZ$48,133–58,009",
        "Research-intensive university with strong international recognition and industry connections.",
      ],
      [
        "University of Otago",
        "Health Sciences, Biomedical Sciences, Psychology, Business, Computer Science",
        "NZ$36,750–45,150",
        "Renowned for health sciences, medical research and student-focused education.",
      ],
      [
        "University of Waikato",
        "Computer Science, Business Analytics, Management, Engineering, Environmental Science",
        "NZ$38,252–48,345",
        "Known for practical learning, industry partnerships and career-oriented education.",
      ],
      [
        "Victoria University of Wellington",
        "Computer Science, Business, Public Policy, Environmental Science, Data Science",
        "NZ$37,546–46,451",
        "Strong reputation for research, public policy, innovation and industry engagement.",
      ],
      [
        "University of Canterbury",
        "Civil Engineering, Mechanical Engineering, Computer Science, Business, Environmental Science",
        "NZ$36,304–51,904",
        "Recognised for engineering, research excellence and practical learning opportunities.",
      ],
    ],
  },
  scholarship: {
    id: "scholarships",
    kicker: "New Zealand",
    title: "Scholarships & Education Loans",
    background: "#ffffff",
    labelWidthClass: "w-[42%] sm:w-[30%]",
    intro: [
      "Scholarships must be confirmed with the respective university or organisation providing the funds. Students might also consider educational loans from various institutions according to the lender's eligibility criteria.",
    ],
    headers: ["Type of Scholarship", "Details"],
    rows: [
      [
        "University International Scholarships",
        "International-student awards offered by selected New Zealand universities; funding values and criteria vary.",
      ],
      [
        "Faculty Merit Scholarships",
        "Merit-based awards from individual faculties; requirements depend on academic performance and programme.",
      ],
      [
        "Manaaki New Zealand Scholarships",
        "Programme eligibility is country-specific and must be checked for the applicant's nationality and course.",
      ],
      [
        "Education Loans",
        "Students may explore education financing with eligible lenders; loan availability, collateral, rates and repayment rules are lender-specific.",
      ],
    ],
  },
  costOfLiving: {
    id: "cost-of-living",
    kicker: "New Zealand",
    title: "Cost of Living in New Zealand: A Detailed Guide for Indian Students Planning to Study Abroad",
    background: "#FBF8F3",
    minWidth: 880,
    centerColumns: [1, 2],
    intro: [
      "Living costs are typically about NZ$20,000–28,000+ per year, with accommodation about NZ$9,000–14,400 per year. Other category figures are planning estimates and vary by city and lifestyle.",
    ],
    headers: ["Expense Category", "Indicative Annual Cost (NZ$)", "Average Annual Cost (₹)", "Notes"],
    rows: [
      [
        "Accommodation",
        "9,000–14,400",
        "₹4.71–7.53 lakh",
        "Rents vary by city and housing type.",
      ],
      [
        "Food & Groceries",
        "4,160–6,240",
        "₹2.18–3.26 lakh",
        "Estimate according to household size, meal plans and shopping habits.",
      ],
      [
        "Local Transportation",
        "780–1,924",
        "₹0.41–1.01 lakh",
        "Budget for public transport, commuting and occasional travel.",
      ],
      [
        "Personal / Other Expenses",
        "1,500–3,600",
        "₹0.78–1.88 lakh",
        "Phone, course materials, clothing, entertainment and incidentals.",
      ],
      [
        "Health Insurance",
        "2,600–4,160",
        "₹1.36–2.18 lakh",
        "Check insurance requirements and university-approved policies.",
      ],
      [
        "Visa / Travel",
        "855–900",
        "₹0.45–0.47 lakh",
        "Budget separately for visa application fees and flights.",
      ],
      [
        "Total Indicative Living Expenses",
        "20,000–28,000+",
        "₹10.46–14.64+ lakh",
        "Overall annual estimate; do not add accommodation again to this total.",
      ],
    ],
    note: "Important: Tuition fees are separate from living costs. Estimated annual tuition is NZ$32,000–50,000+ for a bachelor's degree and NZ$35,000–55,000+ for a master's degree. Visa, insurance, airfare and exchange rates can change.",
  },
  faq: {
    heading: "Frequently Asked Question – Study In New Zealand",
    sectionId: "faqs",
    initialVisibleCount: 0,
    variant: "dubai",
    items: [
      {
        question: "What are the benefits of studying in New Zealand?",
        answer:
          "Students can access recognised universities, applied learning, student support and courses in fields such as IT, engineering, agriculture and environmental science.",
      },
      {
        question: "Can Indian students study in New Zealand after Class 12?",
        answer:
          "Yes, subject to the admission requirements of the chosen programme. Universities assess recognised Class XII qualifications, subject grades and English-language evidence.",
        highlightTerms: ["Class XII"],
      },
      {
        question: "How much does it cost to study in New Zealand?",
        answer:
          "Bachelor's tuition is typically NZ$32,000–50,000+ yearly, master's tuition NZ$35,000–55,000+ yearly, and living expenses approximately NZ$20,000–28,000+ yearly. Personal budgets may differ.",
        highlightTerms: ["NZ$32,000–50,000+", "NZ$35,000–55,000+", "NZ$20,000–28,000+"],
      },
      {
        question: "What is the average annual cost of living?",
        answer:
          "A broad estimate is NZ$20,000–28,000+ per year, including expenses such as accommodation. Accommodation alone is listed at NZ$9,000–14,400 per year.",
        highlightTerms: ["NZ$20,000–28,000+", "NZ$9,000–14,400"],
      },
      {
        question: "What are the main New Zealand university intakes?",
        answer: "February and July are the main intakes, with November available for selected programmes.",
        highlightTerms: ["February", "July", "November"],
      },
      {
        question: "Which courses are popular in New Zealand?",
        answer:
          "Popular fields include computer science & IT, engineering, business & analytics, agriculture & food science, and environmental science.",
      },
      {
        question: "Can international students work while studying?",
        answer:
          "Eligible student visas may permit up to 25 hours per week and full-time work during approved vacation periods. Students must follow the specific conditions on their visas.",
        highlightTerms: ["25 hours"],
      },
      {
        question: "Can students stay and work after graduation?",
        answer:
          "Eligible graduates may apply for a Post Study Work Visa for up to three years, depending on qualification and immigration requirements. Work or residence is not automatic.",
        highlightTerms: ["Post Study Work Visa", "three years"],
      },
      {
        question: "What scholarships are available?",
        answer:
          "University international awards, faculty merit awards and Manaaki New Zealand Scholarships are available. Manaaki eligibility depends on nationality and other criteria.",
        highlightTerms: ["Manaaki New Zealand Scholarships"],
      },
      {
        question: "How can Taksheela assist with the application?",
        answer:
          "Taksheela offers profile evaluation, course and university shortlisting, application and SOP/LOR assistance, scholarship or loan guidance, visa-document support and pre-departure guidance.",
        highlightTerms: ["SOP/LOR"],
      },
    ],
  },
};
