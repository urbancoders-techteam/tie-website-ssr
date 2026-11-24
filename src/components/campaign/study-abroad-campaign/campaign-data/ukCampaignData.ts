import type { StudyAbroadCampaignData } from "@/components/campaign/study-abroad-campaign/custom-components/studyAbroadTypes";
import { imageBaseUrl, studyAbroadImageUrl } from "@/utils/config";

const place = `${imageBaseUrl}CountryPlaces/uk`;

const heroImage = `${studyAbroadImageUrl}campaign/united-kingdom/uk-hero-banner.jpg`;

const universityLogo1 = `${studyAbroadImageUrl}campaign/united-kingdom/Imperial_College_London.webp`;
const universityLogo2 = `${studyAbroadImageUrl}campaign/united-kingdom/University_of_Oxford.webp`;
const universityLogo3 = `${studyAbroadImageUrl}campaign/united-kingdom/University_of_Cambridge_logo.png`;
const universityLogo4 = `${studyAbroadImageUrl}campaign/united-kingdom/University_College_London.svg`;
const universityLogo5 = `${studyAbroadImageUrl}campaign/united-kingdom/University_Of_Edinburgh.jpg`;

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
  whatsappMessage: "Hi, I want to know about studying in the United Kingdom.",
  leadForm: {
    thankYouPath: "/study-abroad/united-kingdom-lp/thankyou",
    formLabel: "United Kingdom study abroad campaign",
    defaultTitle: "Get Your Free Counselling",
    submitLabel: "Get Free Counselling",
    submittingLabel: "Submitting...",
    courses: [
      "Business & Finance",
      "Computer Science & AI",
      "Engineering",
      "Data Science",
      "Health & Life Sciences",
      "Foundation pathway",
      "Not sure yet",
    ],
  },
  header: {
    nav: [
      { href: "#why-united-kingdom", label: "Study in the United Kingdom" },
      { href: "#universities", label: "Universities" },
      { href: "#fees", label: "Fees" },
      { href: "#scholarships", label: "Scholarships" },
      { href: "#counselling", label: "Contact" },
    ],
  },
  hero: {
    image: heroImage,
    kicker: "United Kingdom",
    title: "Study in the United Kingdom",
    subtitle: "One-year master’s, globally recognised degrees, and a Graduate visa",
    description:
      "Explore British qualifications that have international recognition, industry experience and vibrant campus life. Compare your preferred courses, universities, scholarships and budgets annually with Taksheela.",
    formAnchorId: "counselling",
    chips: [
      { icon: "graduationCap", label: "Globally recognised degrees" },
      { icon: "calendarClock", label: "One-year master’s" },
      { icon: "briefcase", label: "Graduate visa options" },
    ],
  },
  why: {
    id: "why-united-kingdom",
    kicker: "United Kingdom",
    title: "Why Study in the United Kingdom?",
    carouselLabel: "Why study in the United Kingdom",
    intro: [
      "Seven reasons Indian students consider the United Kingdom for undergraduate and postgraduate education:",
    ],
    points: [
      {
        icon: "graduationCap",
        title: "Globally recognised degrees and leading universities",
        paragraphs: [
          "United Kingdom universities award internationally recognised qualifications and offer strong research, academic and employer networks. Leading institutions include Oxford, Cambridge, Imperial College London, UCL and Edinburgh.",
        ],
      },
      {
        icon: "calendarClock",
        title: "One-year master’s programmes can save time",
        paragraphs: [
          "Many taught master’s programmes in the United Kingdom are usually one-year programmes. Those shorter courses can reduce the cost of living compared with longer postgraduate degrees.",
        ],
      },
      {
        icon: "badgePercent",
        title: "Scholarships can reduce study costs",
        paragraphs: [
          "Students can look into scholarships such as Chevening, GREAT, Commonwealth Scholarships, and university merit scholarships. Some awards have very strict selection criteria.",
        ],
        pills: ["Chevening", "GREAT", "Commonwealth Scholarships", "University merit scholarships"],
      },
      {
        icon: "bookOpen",
        title: "Flexible course choices and admissions pathways",
        paragraphs: [
          "Universities offer subject combinations, foundation routes and a range of undergraduate and postgraduate courses. Admissions depend on academic results, English proficiency and course-specific requirements; flexibility is not guaranteed.",
        ],
      },
      {
        icon: "briefcase",
        title: "Industry exposure and placement opportunities",
        paragraphs: [
          "The United Kingdom has large-scale employers in fields such as finance, technology, engineering, life sciences, and creative arts. Some programmes include a placement year or industry-based projects, depending on the course.",
        ],
        pills: ["Finance", "Technology", "Engineering", "Life sciences", "Creative arts"],
      },
      {
        icon: "fileCheck",
        title: "Part-time work and an eligible graduate route",
        paragraphs: [
          "Eligible degree-level Student visa holders can usually work up to 20 hours per week during term and full-time in qualifying vacations. Graduate visa permission is normally two years for applications by 31 December 2026, 18 months from 1 January 2027, and three years for eligible doctoral graduates. Check current official rules before applying.",
        ],
        stats: [
          { label: "Term-time work", value: "Up to 20 hours", note: "A week, plus full-time in qualifying vacations" },
          { label: "Graduate visa", value: "2 years / 18 months", note: "Two years until 31 Dec 2026; 18 months from 1 Jan 2027" },
        ],
      },
      {
        icon: "users",
        title: "A multicultural, English-speaking learning environment",
        paragraphs: [
          "Study and daily life offer opportunities to improve communication, connect with international classmates and join alumni networks. Student support, transport and housing options vary by city and university.",
        ],
      },
    ],
  },
  connect: {
    image: `${place}/uk1.png`,
    nightImage: `${place}/uk5.png`,
    kicker: "United Kingdom",
    title: "Connect With Us",
    description: "A counsellor can walk you through universities, scholarships, and the September or January intake.",
    formTitle: "Get Your Free Counselling",
    callLabel: "Call",
    whatsappLabel: "WhatsApp",
    emailLabel: "Email",
  },
  courses: {
    id: "fees",
    kicker: "United Kingdom",
    title: "Top Courses to Study in the United Kingdom",
    background: "#ffffff",
    intro: [
      "Indicative annual international tuition is £15,000–£35,000+ for bachelor’s degrees and £16,000–£40,000+ for master’s degrees. The amounts below are broad planning bands, not programme-specific quotes.",
    ],
    headers: ["Course", "Highlights", "Top institutions", "Fee / year (£)", "Fee / year (₹)"],
    minWidth: 880,
    centerColumns: [3, 4],
    cta: { href: "#counselling", label: "Connect with our trusted study in United Kingdom consultants today" },
    rows: [
      [
        "Business & Finance",
        "Finance, accounting, management and strategy",
        "Oxford; Cambridge; UCL",
        "£15,000–£40,000+",
        "₹18.71–49.89+ lakh",
      ],
      [
        "Computer Science & AI",
        "Software, AI, cybersecurity and computing",
        "Imperial; Oxford; Cambridge",
        "£15,000–£40,000+",
        "₹18.71–49.89+ lakh",
      ],
      [
        "Engineering",
        "Mechanical, electrical, civil and design",
        "Imperial; Cambridge; Edinburgh",
        "£15,000–£40,000+",
        "₹18.71–49.89+ lakh",
      ],
      [
        "Data Science",
        "Statistics, machine learning and analytics",
        "UCL; Imperial; Edinburgh",
        "£15,000–£40,000+",
        "₹18.71–49.89+ lakh",
      ],
      [
        "Health & Life Sciences",
        "Biomedical sciences, public health and research",
        "Oxford; Cambridge; UCL",
        "£15,000–£40,000+",
        "₹18.71–49.89+ lakh",
      ],
    ],
  },
  universities: {
    id: "universities",
    kicker: "United Kingdom",
    title: "Top Universities in the United Kingdom",
    background: "#F7F1E6",
    introAlign: "left",
    intro: [
      "Confirm programme and academic-year fees on official websites. The ranges below are planning figures, not a quote for one course.",
    ],
    headers: ["University", "Popular Courses / Best Programs", "Tuition Fees (per year)", "Highlights"],
    minWidth: 920,
    cta: { href: "#counselling", label: "Talk to our trusted study in United Kingdom consultants today" },
    logos: [
      { name: "Imperial College London", src: universityLogo1 },
      { name: "University of Oxford", src: universityLogo2 },
      { name: "University of Cambridge", src: universityLogo3 },
      { name: "University College London (UCL)", src: universityLogo4 },
      { name: "University of Edinburgh", src: universityLogo5 },
    ],
    rows: [
      [
        "Imperial College London",
        "Engineering, computing, AI, business, life sciences",
        "£42,700–£45,500",
        "Strong focus on science, technology, research and innovation",
      ],
      [
        "University of Oxford",
        "Humanities, computer science, economics, medicine",
        "£39,620–£66,580",
        "Broad academic disciplines and research-intensive teaching",
      ],
      [
        "University of Cambridge",
        "Engineering, natural sciences, economics, mathematics",
        "£30,798–£46,872",
        "Collegiate education and research reputation",
      ],
      [
        "University College London (UCL)",
        "Data science, architecture, engineering, health sciences",
        "£35,400–£42,700",
        "Broad interdisciplinary programmes in London",
      ],
      [
        "University of Edinburgh",
        "AI, informatics, business, engineering, life sciences",
        "£28,000–£36,800",
        "Research-led university and international student community",
      ],
    ],
  },
  scholarship: {
    id: "scholarships",
    kicker: "United Kingdom",
    title: "Scholarships & Education Loans",
    background: "#ffffff",
    labelWidthClass: "w-[42%] sm:w-[30%]",
    intro: [
      "Scholarships are competitive and subject to award conditions. Education loans are a separate funding option and depend on lender eligibility, collateral, repayment and documentation requirements.",
    ],
    headers: ["Type of Scholarship", "Details"],
    rows: [
      [
        "Chevening Scholarships",
        "United Kingdom government-funded postgraduate scholarships for eligible applicants; review country, course and leadership criteria.",
      ],
      [
        "GREAT Scholarships",
        "Selected postgraduate scholarships offered through participating United Kingdom universities and country-specific campaigns.",
      ],
      [
        "Commonwealth Scholarships",
        "Funding routes for eligible applicants from Commonwealth countries and specific study schemes.",
      ],
      [
        "University Merit Scholarships",
        "Institution-specific tuition discounts or awards based on academic achievement, course and applicant profile.",
      ],
      [
        "Education Loans",
        "Students can compare education loans covering eligible tuition and living costs; approval, interest and terms depend on the lender.",
      ],
    ],
  },
  costOfLiving: {
    id: "cost-of-living",
    kicker: "United Kingdom",
    title: "Cost of Living in the United Kingdom: A Detailed Guide for Indian Students Planning to Study Abroad",
    background: "#FBF8F3",
    minWidth: 880,
    centerColumns: [1, 2],
    intro: [
      "Overall annual living-cost bands are £10,800–£17,100 outside London and £16,020–£24,600 in London. Individual categories below are illustrative budgeting allocations. They should not be summed to reproduce the totals.",
    ],
    headers: ["Expense Category", "Average Annual Cost (£)", "Average Annual Cost (₹)", "Notes"],
    rows: [
      [
        "Accommodation",
        "£6,000–£12,000",
        "₹7.48–14.97 lakh",
        "Location, housing type and shared/private arrangements matter.",
      ],
      [
        "Food & Groceries",
        "£1,800–£3,000",
        "₹2.24–3.74 lakh",
        "Cooking at home versus dining out affects spending.",
      ],
      [
        "Local Transportation",
        "£600–£1,500",
        "₹0.75–1.87 lakh",
        "Student transport passes and journey patterns differ.",
      ],
      [
        "Utilities & Internet",
        "£600–£1,800",
        "₹0.75–2.24 lakh",
        "Some student accommodation includes utilities.",
      ],
      [
        "Personal & Other Expenses",
        "£1,200–£3,000",
        "₹1.50–3.74 lakh",
        "Phone, supplies, clothing and leisure.",
      ],
      [
        "Health Surcharge / Visa / Travel",
        "Check current official charges",
        "Not included in living total",
        "Budget separately; amounts depend on visa length and travel.",
      ],
      [
        "Total Living – Outside London",
        "£10,800–£17,100",
        "₹13.47–21.33 lakh",
        "Overall annual estimate; do not add the rows above to this total.",
      ],
      [
        "Total Living – London",
        "£16,020–£24,600",
        "₹19.98–30.68 lakh",
        "Overall annual estimate; do not add the rows above to this total.",
      ],
    ],
    note: "Conversion used for planning: £1 ≈ ₹124.71 (12 November 2026). Actual rates vary. Category estimates are illustrative, while the total living ranges are planning bands. Tuition is additional.",
  },
  faq: {
    heading: "Frequently Asked Question – Study In the United Kingdom",
    sectionId: "faqs",
    initialVisibleCount: 0,
    variant: "dubai",
    items: [
      {
        question: "Why should Indian students choose the United Kingdom?",
        answer:
          "The United Kingdom offers globally recognised degrees, numerous subject choices, research opportunities and access to international employers and alumni networks.",
        highlightTerms: ["globally recognised degrees"],
      },
      {
        question: "Can I study in the United Kingdom after Class 12?",
        answer:
          "Yes. Bachelor’s admissions consider Class 12 qualifications, required subject grades and English proficiency; some courses require extra tests or a foundation route.",
        highlightTerms: ["Class 12"],
      },
      {
        question: "How much does it cost to study in the United Kingdom?",
        answer:
          "Annual undergraduate tuition is about £15,000–£35,000+ and postgraduate tuition about £16,000–£40,000+, plus living costs and visa-related expenses.",
        highlightTerms: ["£15,000–£35,000+", "£16,000–£40,000+"],
      },
      {
        question: "What are the living costs in London and outside London?",
        answer:
          "Living costs are approximately £16,020–£24,600 per year for London and £10,800–£17,100 outside London. Your actual accommodation and lifestyle choices determine expenses.",
        highlightTerms: ["£16,020–£24,600", "£10,800–£17,100"],
      },
      {
        question: "Can students work part-time during studies?",
        answer:
          "Eligible degree-level students are typically permitted to work up to 20 hours weekly during term. Vacation work allowances and restrictions depend on visa conditions.",
        highlightTerms: ["20 hours"],
      },
      {
        question: "Are one-year master’s degrees available?",
        answer:
          "Yes. Many taught master’s programmes in the United Kingdom are designed for one-year full-time completion; some courses are longer.",
        highlightTerms: ["one-year"],
      },
      {
        question: "Which scholarships can I apply for?",
        answer:
          "Potential options include Chevening, GREAT, Commonwealth and university-specific merit scholarships. Always review award eligibility and deadlines.",
        highlightTerms: ["Chevening", "GREAT", "Commonwealth"],
      },
      {
        question: "What are the most popular courses in the United Kingdom?",
        answer:
          "Popular fields include business and finance, computer science and AI, engineering, data science, and health and life sciences.",
      },
      {
        question: "Can I stay in the United Kingdom after graduation?",
        answer:
          "Eligible graduates may consider the Graduate visa. A rule change applies from 2027; assess current Home Office rules when planning.",
        highlightTerms: ["Graduate visa", "2027"],
      },
      {
        question: "How can Taksheela help with United Kingdom applications?",
        answer:
          "Taksheela offers profile evaluation, university and course shortlisting, UCAS/SOP/LOR support, scholarship and loan guidance, CAS and visa documentation assistance, and pre-departure guidance.",
        highlightTerms: ["UCAS/SOP/LOR"],
      },
    ],
  },
};
