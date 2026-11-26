import type { StudyAbroadCampaignData } from "@/components/campaign/study-abroad-campaign/custom-components/studyAbroadTypes";
import { imageBaseUrl, studyAbroadImageUrl } from "@/utils/config";

const place = `${imageBaseUrl}CountryPlaces/ireland`;

const heroImage = `${studyAbroadImageUrl}campaign/ireland/ireland-campaign-banner.jpg`;

const universityLogo1 = `${studyAbroadImageUrl}campaign/ireland/trinity-college-dublin-logo.webp`;
const universityLogo2 = `${studyAbroadImageUrl}campaign/ireland/University-College-Dublin.jpg`;
const universityLogo3 = `${studyAbroadImageUrl}campaign/ireland/University_College_Cork.png`;
const universityLogo4 = `${studyAbroadImageUrl}campaign/ireland/University_Of_Galway.png`;
const universityLogo5 = `${studyAbroadImageUrl}campaign/ireland/University_Of_Limerick.png`;
const universityLogo6 = `${studyAbroadImageUrl}campaign/ireland/Dublin_City_University.png`;

export const irelandCampaignData: StudyAbroadCampaignData = {
  containerClass: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
  theme: {
    pageBackground: "#EEF6F0",
    text: "#122033",
    accent: "#2A8F57",
    accentHover: "#3AA86A",
    accentSoft: "#B3E0C0",
    accentMuted: "#1E6B45",
    onAccent: "#ffffff",
    buttonBorder: "#2A8F57",
    ink: "#164A32",
    footer: { background: "#0C2418", accent: "#6FCB8A", onAccent: "#0C2418" },
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
      "Data science / AI",
      "Business & finance",
      "Engineering",
      "Life sciences",
      "Pharmaceuticals",
      "Healthcare",
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
    image: heroImage,
    kicker: "Ireland",
    title: "Study in Ireland",
    subtitle: "Tech, pharma, and English-taught degrees",
    description:
      "Find internationally  recognised qualifications, top-notch universities, and career opportunities within Ireland's technological, pharmaceutical, financial, and engineering industries. Browse through various programmes, tuition costs, scholarships, and more at Taksheela.",
    formAnchorId: "counselling",
    chips: [
      { icon: "graduationCap", label: "Globally Recognised Degrees" },
      { icon: "landmark", label: "English-Medium Campuses" },
      { icon: "calendarClock", label: "September & January intakes" },
    ],
  },
  why: {
    id: "why-ireland",
    kicker: "Ireland",
    title: "Why Study in Ireland?",
    carouselLabel: "Why study in Ireland",
    background: "#EEF6F0",
    intro: [
      "English-speaking universities, foreign campuses, multinational business environments, and career opportunities after graduation are all found in Ireland. Seven reasons why you should study there include:",
    ],
    points: [
      {
        icon: "graduationCap",
        title: "Globally recognised degrees from leading universities",
        paragraphs: [
          "Educate yourself at reputable universities such as Trinity College Dublin, University College Dublin and University College Cork. Six universities in the QS World University Rankings 2027 are listed below.",
        ],
      },
      {
        icon: "bookOpen",
        title: "Study in English in a European education hub.",
        paragraphs: [
          "Being taught in English is one of the main benefits for Indians who would like to study abroad in Europe. There are course-related language requirements in English, which should be met.",
        ],
      },
      {
        icon: "briefcase",
        title: "A strong base for technology and innovation",
        paragraphs: [
          "Ireland has a thriving technology, pharmaceutical, financial, engineering, and life sciences industry, thus enabling the students' access to research-based education and global employers.",
        ],
        pills: ["Technology", "Pharmaceutical", "Financial", "Engineering", "Life sciences"],
      },
      {
        icon: "calendarClock",
        title: "Part-time work can support student experience.",
        paragraphs: [
          "Students who are eligible for Stamp 2 authorisation are allowed to work while they are studying, up to 40 hours a week during certain times, but based on immigration regulations. The part-time income is not assured.",
        ],
        stats: [
          { label: "Stamp 2 work", value: "Up to 40 hours", note: "A week during certain times, subject to immigration rules" },
        ],
      },
      {
        icon: "users",
        title: "Graduate career pathways with international companies",
        paragraphs: [
          "The Irish workforce comprises firms like Google, Microsoft, Apple, Meta, Amazon, Intel, Pfizer, Accenture, and Deloitte. Career options may include software programming, data analysis, business analytics, engineering, and finance; competition for jobs can be fierce.",
        ],
        pills: [
          "Software programming",
          "Data analysis",
          "Business analytics",
          "Engineering",
          "Finance",
        ],
      },
      {
        icon: "fileCheck",
        title: "Eligible graduates can explore post-study permission",
        paragraphs: [
          "Ireland's Third Level Graduate Programme, or Stamp 1G, may permit the graduates to stay after completing the required qualification period, which is one year for Level 8 graduates and two years for Level 9 and above, under existing guidelines.",
        ],
        stats: [
          { label: "Level 8", value: "1 year", note: "Stamp 1G after the qualification period" },
          { label: "Level 9+", value: "2 years", note: "Stamp 1G after the qualification period" },
        ],
      },
      {
        icon: "badgePercent",
        title: "Scholarships can help manage the overall budget.",
        paragraphs: [
          "Scholarship programmes include the Government of Ireland International Education Scholarship, UCD Global Excellence, Trinity Global Excellence, and university scholarships.",
        ],
        pills: ["GOI-IES", "UCD Global Excellence", "Trinity Global Excellence", "University scholarships"],
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
    title: "Top Courses to Study in Ireland",
    background: "#F5FBF7",
    intro: [
      "Popular courses of study in Ireland. Tuition costs and eligibility requirements differ depending on the course.",
    ],
    headers: ["Course / field", "Highlights", "Top Institutions", "Fee / year (€)", "Fee / year (₹)"],
    minWidth: 880,
    centerColumns: [3, 4],
    cta: { href: "#counselling", label: "Connect with our trusted study in Ireland consultants today" },
    rows: [
      [
        "Computer Science & IT",
        "Software development, cybersecurity and cloud technologies",
        "Trinity College Dublin",
        "€14,500–28,500",
        "₹15.14–29.75 lakh",
      ],
      [
        "Data Science & AI",
        "Data analytics, artificial intelligence and machine learning",
        "University College Dublin (UCD)",
        "€14,500–28,500",
        "₹15.14–29.75 lakh",
      ],
      [
        "Business & Finance",
        "Business management, accounting, finance and strategy",
        "University College Cork (UCC)",
        "€10,300–29,000",
        "₹10.75–30.27 lakh",
      ],
      [
        "Engineering",
        "Mechanical, civil, electrical and biomedical engineering",
        "University of Galway",
        "€14,500–28,500",
        "₹15.14–29.75 lakh",
      ],
      [
        "Life Sciences",
        "Biotechnology, biomedical research and biological sciences",
        "University of Limerick",
        "€14,500–28,500",
        "₹15.14–29.75 lakh",
      ],
      [
        "Pharmaceuticals",
        "Pharmaceutical science, drug development and biotechnology",
        "Dublin City University (DCU)",
        "€14,500–28,500",
        "₹15.14–29.75 lakh",
      ],
      [
        "Healthcare",
        "Medicine, nursing, healthcare and allied health sciences",
        "Trinity College Dublin",
        "€50,135–62,500*",
        "₹52.33–65.24 lakh",
      ],
    ],
  },
  universities: {
    id: "universities",
    kicker: "Ireland",
    title: "Top Universities in Ireland",
    background: "#DCEFDE",
    introAlign: "left",
    intro: [
      "QS World University Rankings 2027. The rankings do not determine eligibility for admissions and scholarships.",
    ],
    headers: ["University", "Popular Courses / Best Programs", "Tuition Fees (per year)", "Highlights"],
    minWidth: 920,
    cta: { href: "#counselling", label: "Talk to our trusted study in Ireland consultants today" },
    logos: [
      { name: "Trinity College Dublin", src: universityLogo1 },
      { name: "University College Dublin", src: universityLogo2 },
      { name: "University College Cork", src: universityLogo3 },
      { name: "University of Galway", src: universityLogo4 },
      { name: "University of Limerick", src: universityLogo6 },
      { name: "Dublin City University", src: universityLogo5 },
    ],
    rows: [
      [
        "Trinity College Dublin",
        "Computer Science, Engineering, Business, Biomedical Sciences, Data Science",
        "€29,570 (Engineering example)",
        "Historic university with strong international recognition and research excellence.",
      ],
      [
        "University College Dublin (UCD)",
        "Business, Computer Science, Data Science, Engineering, Finance",
        "University-specific fees to confirm",
        "Research-intensive university with international partnerships and strong business and technology programmes.",
      ],
      [
        "University College Cork (UCC)",
        "Computer Science, Business, Finance, Life Sciences, Engineering",
        "€21,700–27,000 (selected courses)",
        "Recognised for scientific research, innovation and industry engagement.",
      ],
      [
        "University of Galway",
        "Biomedical Science, Engineering, Computer Science, Business, Environmental Science",
        "€19,890–26,640 (selected courses)",
        "Strong reputation for biomedical research, engineering and interdisciplinary learning.",
      ],
      [
        "University of Limerick",
        "Engineering, Business, Computer Science, Data Analytics, Health Sciences",
        "University-specific fees to confirm",
        "Known for cooperative education, practical learning and employer engagement.",
      ],
      [
        "Dublin City University (DCU)",
        "Computer Science, Data Science & AI, Business Studies, Finance, Engineering",
        "€17,000–17,900 (selected courses)",
        "Career-oriented programmes, industry partnerships and practical learning opportunities.",
      ],
    ],
  },
  scholarship: {
    id: "scholarships",
    kicker: "Ireland",
    title: "Scholarships & Education Loans",
    background: "#F5FBF7",
    labelWidthClass: "w-[42%] sm:w-[30%]",
    intro: [
      "The universities of Ireland, along with the various funding agencies, have a number of scholarship schemes in place for international students who meet the criteria.",
    ],
    headers: ["Type of Scholarship", "Details"],
    rows: [
      [
        "Government of Ireland International Education Scholarship (GOI-IES)",
        "An international scholarship program through the support of the government. See present eligibility requirements and award details.",
      ],
      [
        "UCD Global Excellence Scholarships",
        "Institution-specific scholarships for eligible international students at University College Dublin.",
      ],
      [
        "Trinity Global Excellence Scholarships",
        "Institution-specific scholarships for eligible international students at Trinity College Dublin.",
      ],
      [
        "University-specific Scholarships",
        "There may also be other scholarships available from individual Irish universities; eligibility requirements and amounts vary.",
      ],
    ],
    note: "Education loans: An Indian student applying for education loans can compare lending institutions that cover tuition and living costs. Confirm loan companies, interest rates, and amounts with the lender.",
  },
  costOfLiving: {
    id: "cost-of-living",
    kicker: "Ireland",
    title: "Cost of Living in Ireland: A Detailed Guide for Indian Students Planning to Study Abroad",
    background: "#EEF6F0",
    minWidth: 880,
    centerColumns: [1, 2],
    intro: [
      "Sample cost analysis in Dublin based on the Cost of Living Guide for International Students of Trinity College Dublin (16 July 2026 edition). National planning figures may differ. Costs may vary depending on the city, accommodation agreement, and personal situations.",
    ],
    headers: ["Expense Category", "Indicative annual cost (€)", "Average Annual Cost (₹)", "Notes"],
    rows: [
      [
        "Accommodation",
        "€7,227–€16,000",
        "₹7.54–16.70 lakh",
        "Trinity College Dublin examples: UG residence €7,227–€13,000 (academic/calendar-year options); PG housing €9,000–€16,000. Rates and durations differ.",
      ],
      [
        "Food & Groceries",
        "€3,000–€5,000",
        "₹3.13–5.22 lakh",
        "Trinity guide: meals, groceries and occasional eating out.",
      ],
      [
        "Local Transportation",
        "Approx. €1,000",
        "₹1.04 lakh",
        "Commuting in and around Dublin; other towns may cost less.",
      ],
      [
        "Utilities",
        "€1,000–€2,000",
        "₹1.04–2.09 lakh",
        "Electricity, heating and internet; some rentals include bills.",
      ],
      [
        "Personal / Other Living Expenses",
        "€4,500–€5,500",
        "₹4.70–5.74 lakh",
        "Trinity: €2,500 miscellaneous plus €2,000–€3,000 personal and social spending.",
      ],
      [
        "Health Insurance",
        "Approx. €550",
        "₹57,410",
        "Trinity estimate for non-EU students; actual insurance premiums vary by policy.",
      ],
      [
        "Total UG Living Expenses",
        "€19,937–€29,050",
        "₹20.81–30.32 lakh",
        "Trinity College Dublin published total (2026), excluding tuition; not the sum of the standalone category extremes.",
      ],
      [
        "Total PG Living Expenses",
        "€21,050–€27,050",
        "₹21.97–28.24 lakh",
        "Trinity College Dublin published total (2026), excluding tuition; postgraduate fieldwork/thesis expenses may be additional.",
      ],
    ],
    note: "Tuition planning: Bachelor's programmes typically range from €10,300 to €29,000 and master's programmes from €12,000 to €40,000 per year. This range should not be confused with the living cost budget for Trinity College Dublin above, which does not include tuition.",
  },
  faq: {
    heading: "Frequently Asked Question – Study In Ireland",
    sectionId: "faqs",
    initialVisibleCount: 0,
    variant: "dubai",
    items: [
      {
        question: "What are the benefits of studying in Ireland?",
        answer:
          "There are world-renowned universities in Ireland, English-speaking programmes, opportunities for interaction with multinational corporations, and graduate employment prospects.",
      },
      {
        question: "Can Indian students apply after Class 12?",
        answer:
          "Yes, subject to institutional and programme eligibility criteria. Typical examples include Class XII marks of 75-85%+ for bachelor's degree admission.",
        highlightTerms: ["75-85%+"],
      },
      {
        question: "How much does undergraduate study in Ireland cost?",
        answer:
          "Bachelor's fees typically range between €10,300 and €29,000 per year. Trinity College Dublin estimates student living costs between €19,937 and €29,050 per year in Dublin, excluding tuition.",
        highlightTerms: ["€10,300", "€29,000", "€19,937", "€29,050"],
      },
      {
        question: "How much does a master's degree cost in Ireland?",
        answer:
          "Master's tuition typically ranges from €12,000–€40,000 per year. Trinity College Dublin's 2026 guide estimates postgraduate living costs of €21,050–€27,050 per year in Dublin, excluding tuition.",
        highlightTerms: ["€12,000–€40,000", "€21,050–€27,050"],
      },
      {
        question: "What are the main intakes in Ireland?",
        answer:
          "September is the primary intake period. Some universities and programmes offer limited intake in January/February.",
        highlightTerms: ["September", "January/February"],
      },
      {
        question: "What language scores are needed?",
        answer:
          "Typical IELTS scores are 6.0-6.5+ for undergraduate programmes and 6.5+ for postgraduate programmes. Competitive programmes can require higher IELTS scores or another form of certification.",
        highlightTerms: ["IELTS", "6.0-6.5+", "6.5+"],
      },
      {
        question: "Can international students work while studying?",
        answer:
          "Part-time work for eligible Stamp 2 students is allowed, and they are able to work up to 40 hours per week during certain times. Conditions apply.",
        highlightTerms: ["Stamp 2", "40 hours"],
      },
      {
        question: "What are popular courses in Ireland?",
        answer:
          "Popular courses include computer science and IT, data science and AI, business and finance, engineering, life sciences, pharmaceuticals and healthcare.",
      },
      {
        question: "Are scholarships available for Indian students?",
        answer:
          "GOI-IES, UCD Global Excellence, Trinity Global Excellence and many other scholarships are offered by universities. The awards are based on competition depending on certain criteria.",
        highlightTerms: ["GOI-IES", "UCD Global Excellence", "Trinity Global Excellence"],
      },
      {
        question: "What happens after graduation?",
        answer:
          "The eligible graduates can avail of Ireland's Third Level Graduate Programme (Stamp 1G). The length of time will be one year for level 8, two years for level 9 and above.",
        highlightTerms: ["Stamp 1G", "level 8", "level 9"],
      },
    ],
  },
};
