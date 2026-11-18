import type { StudyAbroadCampaignData } from "@/components/campaign/study-abroad-campaign/custom-components/studyAbroadTypes";
import { imageBaseUrl, studyAbroadImageUrl } from "@/utils/config";

const place = `${imageBaseUrl}CountryPlaces/germany`;
const uni = `${imageBaseUrl}CountryUniversities/germany`;

const heroImage = `${studyAbroadImageUrl}campaign/germany/germany-campaign-banner.jpg`;

const TUMImage = `${studyAbroadImageUrl}campaign/germany/Technical_University_of_Munich.png`;
const LMUImage = `${studyAbroadImageUrl}campaign/germany/LMU_Munich.png`;
const HeidelbergImage = `${studyAbroadImageUrl}campaign/germany/Heidelberg_University.png`;
const FreieUniversitaetBerlinImage = `${studyAbroadImageUrl}campaign/germany/Freie_Universität_Berlin.webp`;
const RWTHAachenImage = `${studyAbroadImageUrl}campaign/germany/RWTH_Logo_3.webp`;

export const germanyCampaignData: StudyAbroadCampaignData = {
  containerClass: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
  theme: {
    pageBackground: "#FBF8F3",
    text: "#122033",
    footer: {
      background: "#122033",
      accent: "#C6A35A",
      onAccent: "#122033",
    },
  },
  phone: "+919831241212",
  phoneDisplay: "+91 98312 41212",
  email: "info@taksheela.com",
  whatsappMessage: "Hi, I want to know about studying in Germany.",
  leadForm: {
    thankYouPath: "/study-abroad/germany-lp/thankyou",
    formLabel: "Germany study abroad campaign",
    defaultTitle: "Get Your Free Counselling",
    submitLabel: "Get Free Counselling",
    submittingLabel: "Submitting...",
    courses: [
      "Engineering",
      "Computer science / IT",
      "Data science / AI",
      "Business / MBA",
      "Automotive engineering",
      "Renewable energy",
      "Studienkolleg / foundation",
      "Not sure yet",
    ],
  },
  header: {
    nav: [
      { href: "#why-germany", label: "Study in Germany" },
      { href: "#universities", label: "Universities" },
      { href: "#fees", label: "Fees" },
      { href: "#scholarships", label: "Scholarships" },
      { href: "#counselling", label: "Contact" },
    ],
  },
  hero: {
    image: heroImage,
    kicker: "Germany",
    title: "Study in Germany",
    description:
      "Explore internationally acknowledged degrees, engineering and technology disciplines, dual study programmes, and career prospects in Germany with the help of Taksheela.",
    formAnchorId: "counselling",
    chips: [
      { icon: "graduationCap", label: "World-class universities" },
      { icon: "wallet", label: "Affordable public education" },
      { icon: "briefcase", label: "Research & career opportunities" },
    ],
  },
  why: {
    id: "why-germany",
    kicker: "Germany",
    title: "Why Study in Germany?",
    carouselLabel: "Why study in Germany",
    intro: [
      "Germany offers high academic standards together with practical research opportunities, an inexpensive education at public universities and access to European employers. Here are seven of them.",
    ],
    points: [
      {
        icon: "graduationCap",
        title: "Globally respected universities and research",
        paragraphs: [
          "Germany provides research-focused universities and science colleges. These include Technical University of Munich (TUM), LMU Munich, Heidelberg University, Freie Universität Berlin, Karlsruhe Institute of Technology (KIT) and RWTH Aachen. The reputation of the programme, its accreditation status, and language of instruction needs to be verified.",
        ],
      },
      {
        icon: "wallet",
        title: "Public-university tuition can be considerably lower",
        paragraphs: [
          "Most public programmes have minimal or no tuition fees, although semester fees and exemptions are applicable. Example public bachelor’s tuition ranges from €0 to €3,000+ per year, and public master’s degrees from €0 to €6,000+. Private universities usually have higher tuition fees.",
        ],
        stats: [
          { label: "Bachelor’s", value: "€0–€3,000+", note: "Per year at many public universities" },
          { label: "Master’s", value: "€0–€6,000+", note: "Per year at many public universities" },
        ],
      },
      {
        icon: "badgePercent",
        title: "Scholarships make international study more accessible",
        paragraphs: [
          "Students could check out the various scholarship programmes like DAAD, Erasmus+, Deutschlandstipendium, research scholarships, or university scholarships. The availability would vary according to the program, academic credentials, nationalities, and qualification criteria.",
        ],
        pills: ["DAAD", "Erasmus+", "Deutschlandstipendium", "Research scholarships", "University scholarships"],
      },
      {
        icon: "bookOpen",
        title: "Dual study connects academic learning with paid training",
        paragraphs: [
          "The Duales Studium is an educational program that involves learning at the university level alongside job training at a partner firm. The students normally switch between theory and practice stages, with some being paid by their employers. This includes universities which are highly competitive and might need you to be good in German.",
        ],
      },
      {
        icon: "briefcase",
        title: "Strong opportunities across engineering and technology",
        paragraphs: [
          "Germany is home to leading automotive, engineering, industrial, and software companies. The fields of study and future careers may involve mechanical and automotive engineering, artificial intelligence, data sciences, software development, renewable energy, business analytics, and finance. There is no guarantee of employment.",
        ],
        pills: [
          "Mechanical and automotive engineering",
          "Artificial intelligence",
          "Data sciences",
          "Software development",
          "Renewable energy",
          "Business analytics and finance",
        ],
      },
      {
        icon: "calendarClock",
        title: "A defined study-to-job-search route for eligible graduates",
        paragraphs: [
          "Students can typically work 140 full days or 280 half days a year. Eligible graduates may get a post-study job-seeking residence permit of up to 18 months. All this depends on the existing German immigration policy.",
        ],
      },
      {
        icon: "globe",
        title: "An international academic experience in Europe",
        paragraphs: [
          "International students have the opportunity to pursue their studies in English or German language programmes while benefiting from the research atmosphere in Germany, its public transportation system and multicultural environment. The learning of the German language greatly enhances one's daily life and work opportunities.",
        ],
      },
    ],
  },
  connect: {
    image: `${place}/germany1.png`,
    nightImage: `${place}/germany5.png`,
    kicker: "Germany",
    title: "Connect With Us",
    description:
      "A counsellor can walk you through public universities, APS, scholarships, and the October or April intake.",
    formTitle: "Get Your Free Counselling",
    callLabel: "Call",
    whatsappLabel: "WhatsApp",
    emailLabel: "Email",
  },
  courses: {
    id: "fees",
    kicker: "Germany",
    title: "Top Courses to Study in Germany",
    background: "#ffffff",
    introAlign: "center",
    intro: [
      "Select a programme depending on your eligibility, language proficiency, professional orientation and whether it is offered by a public or a private training institution. The tuition fees mentioned below are general guidelines.",
    ],
    headers: ["Course", "Highlights", "Top Institutions", "Fee / year (€)", "Fee / year (₹)"],
    minWidth: 880,
    centerColumns: [3, 4],
    note: "These tuition fees are general guidelines. Confirm current fees on the university website.",
    cta: {
      href: "#counselling",
      label: "Connect with our trusted study in Germany consultants today",
    },
    rows: [
      [
        "Engineering",
        "Mechanical, electrical, industrial",
        "Technical University of Munich (TUM)",
        "€0–3,000*",
        "₹0–3.13 lakh",
      ],
      [
        "Computer Science & IT",
        "Software, cybersecurity, cloud",
        "LMU Munich",
        "€0–3,000*",
        "₹0–3.13 lakh",
      ],
      [
        "Data Science & AI",
        "ML, analytics, intelligent systems",
        "Heidelberg University",
        "€0–3,000*",
        "₹0–3.13 lakh",
      ],
      [
        "Automotive Engineering",
        "Vehicle systems, mobility",
        "Freie Universität Berlin",
        "€0–3,000*",
        "₹0–3.13 lakh",
      ],
      [
        "Business & Management",
        "Finance, operations, analytics",
        "Karlsruhe Institute of Technology (KIT)",
        "€0–3,000*",
        "₹0–3.13 lakh",
      ],
      [
        "Renewable Energy & Sustainability",
        "Clean energy, environment",
        "RWTH Aachen University",
        "€0–3,000*",
        "₹0–3.13 lakh",
      ],
      [
        "Dual Study (Duales Studium)",
        "Academic degree + company training",
        "Technical University of Munich (TUM)",
        "€0–3,000*",
        "₹0–3.13 lakh",
      ],
    ],
  },
  universities: {
    id: "universities",
    kicker: "Germany",
    title: "Top Universities in Germany",
    background: "#F7F1E6",
    introAlign: "left",
    intro: [
      "QS 2026 rankings, where used, apply to the entire university and not to a specific course. Confirm the ranking year, course details, and tuition on each university's official website.",
    ],
    headers: ["University", "Popular Courses / Best Programs", "Tuition Fees (per year)", "Highlights"],
    minWidth: 920,
    note: "Verify the relevant ranking year, course details and tuition on each university's official website.",
    cta: {
      href: "#counselling",
      label: "Talk to Our Trusted Study in Germany Consultants Today",
    },
    logos: [
      { name: "Technical University of Munich", src: TUMImage },
      { name: "LMU Munich", src: LMUImage },
      { name: "Heidelberg University", src: HeidelbergImage },
      { name: "Freie Universität Berlin", src: FreieUniversitaetBerlinImage },
      { name: "RWTH Aachen", src: RWTHAachenImage },
    ],
    rows: [
      [
        "Technical University of Munich (TUM)",
        "Mechanical Engineering, Computer Science, Artificial Intelligence, Automotive Engineering, Robotics",
        "€4,000–6,000 (UG); €8,000–12,000 (PG)",
        "Leading technical university with strong engineering, innovation and research programmes.",
      ],
      [
        "LMU Munich",
        "Data Science, Economics, Business, Physics, Life Sciences",
        "€0 for most regular degree programmes",
        "Research-intensive university with strengths across science, humanities and economics.",
      ],
      [
        "Heidelberg University",
        "Life Sciences, Biotechnology, Medicine, Physics, Computer Science",
        "Approx. €3,000 for applicable non-EU programmes",
        "Historic research university recognised for life sciences, medicine and interdisciplinary research.",
      ],
      [
        "Freie Universität Berlin",
        "Computer Science, Business & Economics, Political Science, Data Science, Environmental Studies",
        "€0 for regular degree programmes",
        "International research university with strong academic networks and interdisciplinary education.",
      ],
      [
        "Karlsruhe Institute of Technology (KIT)",
        "Mechanical Engineering, Computer Science, Electrical Engineering, AI, Renewable Energy",
        "Approx. €3,000 for applicable non-EU programmes",
        "Technology-focused university with strong engineering research and industry collaboration.",
      ],
      [
        "RWTH Aachen University",
        "Mechanical Engineering, Automotive Engineering, Computer Science, Electrical Engineering, Robotics",
        "€0 for regular degree programmes",
        "Renowned for engineering, applied research and connections with industry.",
      ],
    ],
  },
  scholarship: {
    id: "scholarships",
    kicker: "Germany",
    title: "Scholarships & Education Loans",
    background: "#ffffff",
    labelWidthClass: "w-[42%] sm:w-[30%]",
    intro: [
      "There are various ways of securing scholarships to study in Germany. The financial aid depends on the university, level of qualification, country of origin, academic performance, and type of scholarship program. Other than that, Indians can apply for educational loans.",
    ],
    headers: ["Type of Scholarship", "Details"],
    rows: [
      [
        "Merit-based Scholarships",
        "Academic and research merit may form part of considerations for funding via university initiatives, the Deutschlandstipendium and other scholarship programmes.",
      ],
      [
        "Need-based Scholarships",
        "There may be some sources that will consider financial situation; eligibility and documentation requirements differ.",
      ],
      [
        "Program-specific Scholarships",
        "DAAD, Erasmus+ and other research-related options may provide scholarships for some chosen degree programmes, exchanges or research project. It depends on the program.",
      ],
      [
        "International Student Scholarships",
        "Funding for international students is available from universities and other organisations; check out deadlines and conditions.",
      ],
    ],
    note: "Educational loans: Analyse the eligibility criteria of lenders, collateral/co-applicants, interest, disbursement, and repayment period with the documents needed for visa financial proof. Scholarships/loans are not assured.",
  },
  costOfLiving: {
    id: "cost-of-living",
    kicker: "Germany",
    title: "Cost of Living in Germany: A Detailed Guide for Indian Students Planning to Study Abroad",
    background: "#FBF8F3",
    minWidth: 760,
    centerColumns: [1, 2],
    intro: [
      "Costs of living typically range from €11,000 to €18,000 a year. The budget breakdown below is an estimated student budget. Costs vary significantly depending on city, accommodation, and exchange rates.",
    ],
    headers: ["Expense Category", "Illustrative Annual Budget (€)", "Average Annual Cost (₹)", "Notes"],
    rows: [
      ["Accommodation", "€4,920", "₹5.14 lakh", "Shared flat or student residence; city is key"],
      ["Food & Groceries", "€2,376", "₹2.48 lakh", "Home cooking generally reduces costs."],
      ["Local Transport", "€1,068", "₹1.11 lakh", "Student transport arrangements vary"],
      ["Utilities & Connectivity", "€384", "₹0.40 lakh", "Check what rent already includes."],
      ["Personal & Study Expenses", "€3,060", "₹3.19 lakh", "Books, clothing, mobile and leisure"],
      ["Health Insurance", "€1,200", "₹1.25 lakh", "Depends on age, insurance status and eligibility"],
      ["Overall planning range", "Approx. €11,000–€18,000/year", "₹11.27–15.03 lakh", "Use this range as a planning total."],
    ],
    note: "Important: This is only a guide for budgeting and not an exact quote. Do not add these lines to get a total. Tuition, semester fee, visa fee, airfare, deposit and any blocked account requirement should all be confirmed individually.",
  },
  faq: {
    heading: "Frequently Asked Question – Study In Germany",
    sectionId: "faqs",
    initialVisibleCount: 0,
    variant: "dubai",
    items: [
      {
        question: "Why should Indian students consider Germany for higher studies?",
        answer:
          "There are good universities, chances for research, no tuition at many public universities, exposure to industry, and various English and German programmes. It would depend on one's academic qualifications and financial capacity.",
      },
      {
        question: "Can Indian students apply to Germany after Class 12?",
        answer:
          "Yes, however, entry into a German bachelor's degree programme is contingent upon the recognition of the school leaving certificate and university-specific criteria. Some candidates might require the completion of a Studienkolleg or other preparation programme.",
        highlightTerms: ["Studienkolleg"],
      },
      {
        question: "How much does it cost to study in Germany?",
        answer:
          "Public bachelor’s tuition is about €0–€3,000+, public master’s tuition €0–€6,000+, private bachelor’s tuition €5,000–€20,000+, and private master’s tuition €8,000–€25,000+. The total cost for annual living is estimated to be €11,000–€18,000.",
        highlightTerms: ["€11,000–€18,000"],
      },
      {
        question: "What is the average cost of living in Germany for students?",
        answer:
          "€11,000–€18,000 per year is a rough planning budget. The expenses will depend on the place of accommodation and choice of city; take into account the insurance, travel costs, food, electricity and personal expenses.",
        highlightTerms: ["€11,000–€18,000"],
      },
      {
        question: "What are the main intakes for universities in Germany?",
        answer:
          "The winter intake takes place during September/October, while the summer intake is relatively limited and takes place during March/April. Application deadlines could be months earlier and are subject to variation based on institution and programme of study.",
        highlightTerms: ["September/October", "March/April"],
      },
      {
        question: "What are the best courses to study in Germany?",
        answer:
          "Areas covered include engineering, computer science and information technology, data science and artificial intelligence, automotive engineering, business and management, and renewable energy and sustainability. Choose your programme according to your area of interest.",
      },
      {
        question: "How do I apply to a university in Germany?",
        answer:
          "Identify suitable programmes, establish academic equivalence, ascertain language proficiency and APS/Studienkolleg requirements if any, request transcripts and other supporting documents, apply for the requisite programme, evaluate your offer, and secure funding, health insurance, and a student visa.",
        highlightTerms: ["APS"],
      },
      {
        question: "Can international students work while studying in Germany?",
        answer:
          "Eligible students can undertake up to 140 days, or 280 half days, of work per annum. Relevant regulations will determine the method of counting and any exemption applicable based on individual immigration status.",
        highlightTerms: ["140 days", "280 half days"],
      },
      {
        question: "Can graduates stay in Germany after completing their degree?",
        answer:
          "Qualified graduates may get a job-seeking residence permit of up to 18 months after the study period. A job offer does not necessarily mean employment authorisation and long-term residence; there are certain conditions.",
        highlightTerms: ["18 months"],
      },
      {
        question: "What scholarships and support can Taksheela help with?",
        answer:
          "There are many possibilities for students to find the DAAD, Erasmus+, Deutschlandstipendium and university scholarships. Taksheela can help you with choosing courses, preparing documents, APS, finding scholarships, blocked accounts and visa issues.",
        highlightTerms: ["DAAD", "APS"],
      },
    ],
  },
};
