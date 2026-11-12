import type { StudyAbroadCampaignData } from "@/components/campaign/study-abroad-campaign/custom-components/studyAbroadTypes";
import { imageBaseUrl } from "@/utils/config";

const place = `${imageBaseUrl}CountryPlaces/germany`;
const uni = `${imageBaseUrl}CountryUniversities/germany`;

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
    image: `${imageBaseUrl}CountryBanner/germany.png`,
    kicker: "Germany",
    title: "Study in Germany",
    subtitle: "Top universities, low tuition, strong careers",
    description:
      "Public universities, English-taught master’s programmes, and an 18-month post-study window. Winter intake in October, summer intake in April.",
    formAnchorId: "counselling",
    chips: [
      { icon: "wallet", label: "Low or no public tuition" },
      { icon: "bookOpen", label: "English-taught master’s" },
      { icon: "calendarRange", label: "October & April intakes" },
    ],
  },
  why: {
    id: "why-germany",
    kicker: "Germany",
    title: "Why Study in Germany?",
    carouselLabel: "Why study in Germany",
    intro: [
      "Germany draws a growing number of Indian students for its academic system, low public tuition, and careers in engineering, technology, and research.",
      "More than 49,000 Indian students are enrolled at German universities, the largest international student group in the country.",
    ],
    points: [
      {
        icon: "graduationCap",
        title: "World-class public universities",
        paragraphs: [
          "Germany has 400+ universities, including more than 40 in the QS top 500. Teaching is research-led and tied to industry, especially in engineering and technology.",
          "Many master’s programmes are taught in English. Bachelor’s programmes are more often in German, and some applicants need a Studienkolleg year.",
        ],
      },
      {
        icon: "wallet",
        title: "Public tuition is often low or waived",
        paragraphs: [
          "At many public universities, international students pay little or no tuition. A semester contribution, usually €100–€400, covers administration and often a local transport pass.",
          "These are typical ranges, not a quote. Private universities and most MBAs cost more.",
        ],
        stats: [
          { label: "Bachelor’s", value: "€0–€3,000", note: "Per year at many public universities" },
          { label: "Master’s", value: "€0–€5,000", note: "Per year at many public universities" },
          { label: "MBA", value: "€10,000–€40,000+", note: "Per year, usually at private schools" },
          { label: "Living", value: "€900–€1,300", note: "Per month, depending on the city" },
        ],
        after:
          "For a student visa, Indian applicants also set up a blocked account. The 2025–26 requirement is about €11,904 for one year.",
      },
      {
        icon: "briefcase",
        title: "Careers in Europe’s largest economy",
        paragraphs: [
          "Engineering, automotive, IT, data, manufacturing, healthcare, and research hire from German campuses. Students may work up to 140 full days or 280 half days a year.",
        ],
        pills: [
          "Engineering",
          "Automotive",
          "Computer science",
          "Data and AI",
          "Business and finance",
        ],
      },
      {
        icon: "calendarClock",
        title: "18 months to look for work after graduation",
        paragraphs: [
          "International graduates can stay for up to 18 months after the degree to find a job related to their field. That search is easier when the course matches a shortage skill.",
        ],
      },
      {
        icon: "globe",
        title: "A large Indian student community",
        paragraphs: [
          "Indians are the largest international student group in Germany. English-taught master’s programmes are common, and cities such as Berlin, Munich, Hamburg, Frankfurt, Stuttgart, Cologne, and Aachen have large student populations.",
        ],
      },
      {
        icon: "landmark",
        title: "Research linked to industry",
        paragraphs: [
          "Universities work with companies in automotive, green technology, and manufacturing. That is why engineering, renewable energy, and applied sciences are common shortlists.",
        ],
        steps: [
          "University shortlisting",
          "APS and documents",
          "Scholarships, including DAAD",
          "Student visa and blocked account",
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
      "Germany is known for engineering, technology, and research, with public tuition that is often far below the UK or the US. English-taught master’s programmes are the usual route for Indian students.",
      "Fees below are typical yearly ranges at public universities, not a quote. Private universities and MBAs sit higher.",
    ],
    headers: ["Course", "Highlights", "Strong cities", "Fee / year (€)", "Fee / year (₹)"],
    minWidth: 880,
    centerColumns: [3, 4],
    cta: {
      href: "#counselling",
      label: "Connect with our trusted study in Germany consultants today",
    },
    rows: [
      [
        "Mechanical and automotive engineering",
        "Germany’s car and manufacturing industry, including BMW, Mercedes-Benz, Volkswagen, Porsche, and Audi.",
        "Munich, Stuttgart, Aachen",
        "0–3,000",
        "About ₹0–2.7 lakh",
      ],
      [
        "Computer science and IT",
        "Software, cybersecurity, cloud, and IT consulting. A common English-taught master’s route.",
        "Munich, Berlin, Aachen",
        "0–5,000",
        "About ₹0–4.5 lakh",
      ],
      [
        "Data science and AI",
        "Demand across automotive, finance, and manufacturing as companies automate.",
        "Munich, Berlin",
        "0–5,000",
        "About ₹0–4.5 lakh",
      ],
      [
        "Electrical and industrial engineering",
        "Research-led programmes with industry projects and plant visits.",
        "Aachen, Karlsruhe, Munich",
        "0–3,000",
        "About ₹0–2.7 lakh",
      ],
      [
        "Business and management",
        "Roles in European companies, consulting, and supply chain. MBAs cost more than public MSc programmes.",
        "Mannheim, Munich, Frankfurt",
        "0–5,000",
        "About ₹0–4.5 lakh",
      ],
      [
        "Renewable energy",
        "Green technology and sustainability, a long-running German industry focus.",
        "Freiburg, Hamburg",
        "0–6,000",
        "About ₹0–5.4 lakh",
      ],
      [
        "Biotechnology and life sciences",
        "Research labs and healthcare companies. Often needs a related bachelor’s degree.",
        "Heidelberg, Munich, Berlin",
        "0–3,000",
        "About ₹0–2.7 lakh",
      ],
    ],
  },
  universities: {
    id: "universities",
    kicker: "Germany",
    title: "Top-Ranked Universities in Germany",
    background: "#F7F1E6",
    introAlign: "left",
    intro: [
      "Germany has more than 400 universities. Public ones are the usual choice for Indian students because tuition is often a semester contribution rather than a full international fee.",
      "Fees below are typical yearly ranges for international students, not a quote. TUM is one of the public universities that charges tuition on some international master’s programmes. Always check the programme page for the intake you want.",
    ],
    headers: ["University", "Known for", "Tuition (per year)", "Highlights"],
    minWidth: 820,
    cta: {
      href: "#counselling",
      label: "Talk to Our Trusted Study in Germany Consultants Today",
    },
    logos: [
      { name: "Technical University of Munich", src: `${uni}/ger1.png` },
      { name: "LMU Munich", src: `${uni}/ger2.png` },
      { name: "Heidelberg University", src: `${uni}/ger3.png` },
      { name: "Humboldt University of Berlin", src: `${uni}/ger4.png` },
      { name: "Freie Universität Berlin", src: `${uni}/ger5.png` },
      { name: "RWTH Aachen", src: `${uni}/ger6.png` },
      { name: "University of Freiburg", src: `${uni}/ger7.png` },
    ],
    rows: [
      [
        "Technical University of Munich (TUM)",
        "Engineering, computer science, natural sciences",
        "€4,000–€12,000 on some international master’s",
        "QS 28. Public technical university. Some international master’s programmes charge tuition.",
      ],
      [
        "LMU Munich",
        "Sciences, humanities, business",
        "€0–€3,000",
        "QS 59. Large research university with many programmes at low or no tuition.",
      ],
      [
        "Heidelberg University",
        "Life sciences, medicine-related research, humanities",
        "€0–€3,000",
        "QS 84. Germany’s oldest university, strong in research.",
      ],
      [
        "Humboldt University of Berlin",
        "Social sciences, humanities, natural sciences",
        "€0–€3,000",
        "QS 126. Central Berlin campus with a large international intake.",
      ],
      [
        "Freie Universität Berlin",
        "Humanities, social sciences, area studies",
        "€0–€3,000",
        "QS 97. English-taught master’s options and a large international community.",
      ],
      [
        "RWTH Aachen",
        "Mechanical, electrical, and industrial engineering",
        "€0–€3,000",
        "QS 99. One of Europe’s largest technical universities.",
      ],
      [
        "University of Freiburg",
        "Sustainability, environment, medicine-related fields",
        "€3,000–€6,000 for some programmes",
        "QS 212. Baden-Württemberg charges tuition on some international programmes.",
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
      "Public tuition is already low, so most awards help with living costs rather than a large fee. Applications often open with the university intake, typically between October and March for the following year.",
    ],
    headers: ["Scholarship", "Details"],
    rows: [
      [
        "DAAD",
        "Germany’s main award for international students. Monthly support is often about €934–€1,500, and some awards add insurance and travel.",
      ],
      [
        "Deutschlandstipendium",
        "€300 a month. Merit-based, funded jointly by the government and private sponsors at participating universities.",
      ],
      [
        "Konrad-Adenauer-Stiftung",
        "About €934–€1,400 a month for strong academics who also show leadership or social commitment.",
      ],
      [
        "Heinrich Böll Foundation",
        "About €934–€1,400 a month. Looks for academic results and an interest in sustainability and public life.",
      ],
      [
        "Erasmus+",
        "About €300–€850 a month for eligible Erasmus Mundus and participating European programmes.",
      ],
      [
        "University merit awards",
        "Many campuses add their own grants, often about €1,000–€12,000 a year, based on marks or research plans.",
      ],
    ],
  },
  costOfLiving: {
    id: "cost-of-living",
    kicker: "Germany",
    title: "Cost of Living in Germany: A Guide for Indian Students",
    background: "#FBF8F3",
    minWidth: 760,
    centerColumns: [1, 2],
    intro: [
      "Munich, Frankfurt, and Hamburg cost more than Leipzig, Dresden, or Magdeburg. Figures below turn the usual monthly ranges into a year. They are planning ranges, not a quote. A semester ticket often covers local transport.",
    ],
    headers: ["Expense", "Major cities / year", "Other cities / year", "Notes"],
    rows: [
      ["University residence", "€3,600–€7,200", "€3,000–€5,400", "About €300–€600 a month in major cities"],
      ["Private rent", "€7,200–€14,400", "€4,200–€8,400", "About €600–€1,200 a month in major cities"],
      ["Food and groceries", "€2,400–€4,200", "€2,160–€3,600", "Cooking at home keeps this down"],
      ["Local transport", "€0–€720", "€0–€720", "Often included in the semester contribution"],
      ["Health insurance", "€1,680–€1,800", "€1,680–€1,800", "About €140–€150 a month, and mandatory"],
      ["Utilities and internet", "€960–€1,800", "€840–€1,440", "Sometimes included in a student hall"],
      ["Blocked account", "€11,904", "€11,904", "2025–26 visa proof of funds for one year"],
    ],
  },
  faq: {
    heading: "Frequently Asked Questions – Study in Germany",
    sectionId: "faqs",
    initialVisibleCount: 0,
    variant: "dubai",
    items: [
      {
        question: "What is the minimum percentage required to study in Germany?",
        answer:
          "Most master’s programmes look for about 60–70% in a related bachelor’s degree. Competitive courses and higher-ranked universities often expect 70–75% or the equivalent CGPA. For a bachelor’s, Class 12 is usually 70–90%, and some students need a Studienkolleg year.",
        highlightTerms: ["60–70%", "70–75%"],
      },
      {
        question: "Can I study in Germany without IELTS?",
        answer:
          "Some universities accept a medium-of-instruction letter instead of IELTS. An IELTS of about 6.0–6.5 still opens more English-taught programmes. German-taught courses need TestDaF, DSH, Goethe, or telc, usually at B2–C1.",
        highlightTerms: ["6.0–6.5"],
      },
      {
        question: "What is the cost of studying in Germany for Indian students?",
        answer:
          "Many public universities charge no tuition, or a few thousand euros a year, plus a semester contribution of about €100–€400. Living costs are usually about €900–€1,300 a month. The blocked account for a visa is about €11,904 for one year.",
        highlightTerms: ["€900–€1,300", "€11,904"],
      },
      {
        question: "What scholarships are available for Indian students?",
        answer:
          "DAAD, Deutschlandstipendium, Erasmus+, and university merit awards are the usual options. Most of them help with living costs. Applications often open between October and March for the next academic year.",
        highlightTerms: ["DAAD"],
      },
      {
        question: "How long does the German student visa take?",
        answer:
          "Processing is often 4–12 weeks, depending on the embassy. Start 3–6 months before the intake. Indian students also need an APS certificate for the visa and for many university applications.",
        highlightTerms: ["4–12 weeks", "APS"],
      },
      {
        question: "Can I work while studying in Germany?",
        answer:
          "Yes. Students can work up to 140 full days or 280 half days a year. That can cover part of the living cost. It does not replace the blocked account.",
        highlightTerms: ["140 full days"],
      },
      {
        question: "When are the intakes?",
        answer:
          "The main intake is the winter semester in October. A smaller summer intake starts in April. Not every course offers both.",
        highlightTerms: ["October", "April"],
      },
      {
        question: "What does Taksheela handle on a Germany file?",
        answer:
          "Shortlisting, the application, SOP review, APS, scholarship checks, the blocked account and visa papers, and pre-departure planning. The offer letter is what confirms the fee and any waiver.",
      },
    ],
  },
};
