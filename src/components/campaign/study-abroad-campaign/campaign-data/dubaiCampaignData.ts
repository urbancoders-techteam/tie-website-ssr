import type { StudyAbroadCampaignData } from "@/components/campaign/study-abroad-campaign/custom-components/studyAbroadTypes";
import { webIconsUrl } from "@/utils/config";

const logoBase = `${webIconsUrl}dubai/campaign`;

export const dubaiCampaignData: StudyAbroadCampaignData = {
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
  whatsappMessage: "Hi, I want to know about studying in Dubai.",
  leadForm: {
    thankYouPath: "/study-abroad/dubai-lp/thankyou",
    formLabel: "Dubai study abroad campaign",
    defaultTitle: "Get Your Free Counselling",
    submitLabel: "Get Free Counselling",
    submittingLabel: "Submitting...",
    courses: [
      "Business / BBA / MBA",
      "Computer science / IT",
      "Engineering",
      "Psychology",
      "Media and design",
      "Hospitality",
      "Foundation pathway",
      "Not sure yet",
    ],
  },
  header: {
    nav: [
      { href: "#why-dubai", label: "Study in Dubai" },
      { href: "#universities", label: "Universities" },
      { href: "#fees", label: "Fees" },
      { href: "#scholarships", label: "Scholarships" },
      { href: "#counselling", label: "Contact" },
    ],
  },
  hero: {
    image: "/images/campaign/dubai-skyline.jpg",
    kicker: "Dubai, UAE",
    title: "Study in Dubai",
    subtitle: "DREAM BIG. STUDY IN DUBAI. GO GLOBAL!",
    description:
      "Explore UK, Australian, US, and India-based universities in Dubai, an air travel away from India. Compare universities, cost, scholarship, and career possibilities at Taksheela.",
    formAnchorId: "counselling",
    chips: [
      { icon: "graduationCap", label: "Globally Recognised Degrees" },
      { icon: "landmark", label: "English-Medium Campuses" },
      { icon: "calendarClock", label: "September & January intakes" },
    ],
  },
  why: {
    id: "why-dubai",
    kicker: "Dubai",
    title: "Why Study in Dubai?",
    introAlign: "center",
    carouselLabel: "Why study in Dubai",
    intro: [
      "If you are thinking of studying abroad, you may already have looked at Canada, Australia, or the UK. What many Indian students miss is that Dubai is a strong option after Class 12: modern, well connected, and home to international campuses that offer a world-class degree at a more manageable cost.",
      "Here is why studying in Dubai is often the better decision for the next few years.",
    ],
    points: [
      {
        icon: "graduationCap",
        title: "Dubai offers globally recognised degrees",
        paragraphs: [
          "Dubai campuses of UK, Australian, and American universities include University of Birmingham Dubai, Heriot-Watt University Dubai, Middlesex University Dubai, and the University of Wollongong in Dubai. This makes it possible for students to enrol in internationally recognised courses close to India.",
        ],
      },
      {
        icon: "wallet",
        title: "Tuition and living together often cost less than UK or US tuition alone",
        paragraphs: [
          "Typical study costs per year are around AED 40,000–90,000 (about ₹9–20 lakh). Living costs are around AED 25,000–35,000 (about ₹5.5–8 lakh). Visa and insurance are around AED 5,000–7,000. Together, the approximate total is about ₹15–28 lakh per year.",
        ],
        stats: [
          { label: "Tuition", value: "AED 40,000–90,000", note: "Per year, about ₹9–20 lakh depending on the course" },
          { label: "Living", value: "AED 25,000–35,000", note: "Per year, about ₹5.5–8 lakh" },
          { label: "Visa and insurance", value: "AED 5,000–7,000", note: "Per year" },
          { label: "Approximate total", value: "₹15–28 lakh", note: "Per year, all of the above together" },
        ],
      },
      {
        icon: "badgePercent",
        title: "Scholarships and paid internships make it more reachable",
        paragraphs: [
          "Dubai universities may offer merit, need, and programme-based scholarships, and some selected awards can reduce tuition significantly. Eligible students may also intern or work in business, technology, and media centres, depending on availability with employers and universities.",
        ],
      },
      {
        icon: "calendarClock",
        title: "Study gaps are treated more flexibly than in the West",
        paragraphs: [
          "A gap after Class 12 or after completing a degree does not necessarily prevent admission. Some institutions in Dubai have accepted gaps of one or two years after school, and longer periods after an undergraduate degree, when the student can give a clear justification.",
        ],
      },
      {
        icon: "briefcase",
        title: "The career market around campus is hiring",
        paragraphs: [
          "Dubai offers career exposure in business and management, hospitality and tourism, architecture, engineering, IT, fintech, media, and communications. Its corporate, logistics, tourism, and technology ecosystem can support networking, internships, and graduate-programme applications. Job prospects are not guaranteed.",
        ],
        pills: [
          "Business and management",
          "Hospitality and tourism",
          "Architecture and engineering",
          "IT and fintech",
          "Media and communications",
        ],
      },
      {
        icon: "fileCheck",
        title: "Admission and the visa can stay straightforward",
        paragraphs: [
          "The usual path is shortlisting institutions and programmes, preparing documents such as transcripts, SOP, and language-requirement evidence, checking scholarships and fee waivers, then completing the visa process. A sample timeline with counselling is 6–8 weeks; actual timelines can vary.",
        ],
        steps: [
          "Shortlist institutions and programmes",
          "Prepare transcripts, SOP, and language proof",
          "Check scholarships and fee waivers",
          "Complete the visa process",
        ],
      },
      {
        icon: "globe",
        title: "Familiar comfort, with a global classroom",
        paragraphs: [
          "Students also benefit from Dubai’s large Indian community, English as a common language in higher education, international classmates, and shorter flights back to India.",
        ],
      },
    ],
  },
  connect: {
    image: "/images/campaign/dubai-skyline.jpg",
    nightImage: "/images/campaign/dubai-night.jpg",
    kicker: "Dubai",
    title: "Connect With Us",
    description:
      "A counsellor in Kolkata can walk you through campuses, scholarships, and the September or January intake.",
    formTitle: "Get Your Free Counselling",
    callLabel: "Call",
    whatsappLabel: "WhatsApp",
    emailLabel: "Email",
  },
  courses: {
    id: "fees",
    kicker: "Dubai",
    title: "Top Courses to Study in Dubai",
    background: "#ffffff",
    introAlign: "center",
    intro: [
      "The indicative annual fee is shown below. Please check the specific course fees at each university.",
    ],
    headers: ["Course", "Highlights", "Top institutions", "Fee/year (AED)"],
    minWidth: 880,
    centerColumns: [3],
    cta: {
      href: "#counselling",
      label: "Connect with our trusted study in Dubai consultants today",
    },
    rows: [
      [
        "Business & management",
        "Finance, marketing, operations",
        "University of Birmingham Dubai; Heriot-Watt",
        "45,000–85,000",
      ],
      [
        "Hospitality & tourism",
        "Hotels, events and airline services",
        "Emirates Academy; EHL Dubai",
        "40,000–60,000",
      ],
      [
        "Engineering & technology",
        "Infrastructure, AI and renewable energy",
        "Amity University Dubai; Canadian University Dubai",
        "55,000–90,000",
      ],
      [
        "Media & communication",
        "Branding, advertising and PR",
        "Dubai Media City education options",
        "From 40,000",
      ],
      [
        "Architecture & interior design",
        "Built environment and luxury interiors",
        "American University in Dubai; MAHE Dubai",
        "From 50,000",
      ],
      [
        "IT & cybersecurity",
        "Cloud, software and security",
        "Various Dubai campuses",
        "50,000–85,000",
      ],
      [
        "Fashion & luxury management",
        "Design and luxury retail",
        "ESMOD Dubai; Dubai Institute of Design and Innovation",
        "45,000–70,000",
      ],
    ],
  },
  universities: {
    id: "universities",
    kicker: "Dubai",
    title: "Top Universities in Dubai",
    background: "#F7F1E6",
    introAlign: "center",
    intro: [
      "Indicative annual tuition is shown below. Please confirm current fees with the university.",
    ],
    headers: ["University", "Popular programmes", "Indicative annual tuition", "Highlights"],
    minWidth: 820,
    cta: {
      href: "#counselling",
      label: "Talk to Our Trusted Study in Dubai Consultants Today",
    },
    logos: [
      { name: "Manipal University Dubai", src: `${logoBase}/Manipal_University_Dubai.png` },
      { name: "University of Wollongong in Dubai", src: `${logoBase}/University_of_Wollongong_in_Dubai.png` },
      { name: "University of Birmingham Dubai", src: `${logoBase}/University_of_Birmingham_Dubai.jpg` },
      { name: "Heriot-Watt University", src: `${logoBase}/Heriot_Watt_University.webp` },
      { name: "Middlesex University", src: `${logoBase}/Middlesex_University.avif` },
      { name: "American University in Dubai", src: `${logoBase}/American_University_In_Dubai.png` },
      { name: "SP Jain School of Global Management", src: `${logoBase}/SP_Jain_School_of_Global_Management.jpg` },
    ],
    rows: [
      [
        "University of Birmingham Dubai",
        "Business, engineering, computer science",
        "~AED 100,000",
        "UK university branch campus",
      ],
      [
        "Heriot-Watt University Dubai",
        "AI, civil engineering, finance, analytics",
        "AED 55,000–85,000",
        "UK-linked curriculum",
      ],
      [
        "Middlesex University Dubai",
        "Law, psychology, marketing, hospitality",
        "AED 55,000–70,000",
        "UK branch campus; diverse programmes",
      ],
      [
        "University of Wollongong in Dubai",
        "Cybersecurity, logistics, IT, engineering",
        "AED 75,000–90,000",
        "Australian university connection",
      ],
      [
        "American University in Dubai",
        "Architecture, communication, design",
        "AED 80,000–100,000",
        "US-style higher education",
      ],
      [
        "SP Jain School of Global Management",
        "BBA, MBA, data science",
        "AED 80,000–120,000",
        "International study pathways",
      ],
      [
        "MAHE Dubai",
        "Engineering, biotechnology, design, journalism",
        "AED 35,000–55,000",
        "Indian-affiliated institution",
      ],
    ],
  },
  scholarship: {
    id: "scholarships",
    kicker: "Dubai",
    title: "Scholarships & Education Loans",
    introAlign: "center",
    background: "#ffffff",
    labelWidthClass: "w-[42%] sm:w-[30%]",
    intro: [
      "In the case of Indians studying abroad in Dubai, one of the most common inquiries pertains to the total costs incurred by Indians to study in Dubai, followed by handling those costs. The education system of Dubai offers scholarships and education loans to cater to these expenses for students after class 12th or even higher classes.",
    ],
    headers: ["Type of Scholarship", "Details"],
    rows: [
      [
        "Merit-based Scholarships",
        "Available in all universities in order to attract Indian students who have performed excellently in their 12th-grade studies or even the Bachelor degree. It greatly cuts the cost of tuition.",
      ],
      [
        "Need-based Scholarships",
        "Benefits those students worried about the high cost of education in Dubai through subsidizing tuition fees and costs of living.",
      ],
      [
        "Program-specific Scholarships",
        "Offered for high-demand programs such as Business, Engineering, Hospitality, and Information Technology to attract students towards studying essential subjects for the growth of Dubai.",
      ],
      [
        "International Student Scholarships",
        "This program is intended for students who are not based in Dubai, which includes Indian students. This program covers a variety of courses.",
      ],
    ],
    note: "The eligibility, amount, period, and renewability of scholarship depends on the college. The students may also consult about education loans with their lenders/counsellors.",
  },
  costOfLiving: {
    id: "cost-of-living",
    kicker: "Dubai",
    title: "Cost of Living in Dubai: A Detailed Guide for Indian Students Planning to Study Abroad",
    background: "#FBF8F3",
    minWidth: 760,
    centerColumns: [1, 2],
    intro: [
      "Apart from tuition fees, there are other things like accommodation, food, transportation, personal expenditure, travel, insurance, and visa expenses that should be planned. The following table gives the expenditure heads and estimated annual costs. The Rupee cost estimates given here are approximate.",
    ],
    headers: ["Expense Category", "Average Annual Cost (AED)", "Average Annual Cost (₹)", "Notes"],
    rows: [
      ["Accommodation", "15,000–25,000", "₹3.2–5.5 lakh", "Shared apartments or university hostels"],
      ["Food & Groceries", "8,000–12,000", "₹1.7–2.6 lakh", "Indian groceries and home cooking can reduce costs"],
      ["Transportation", "2,000–3,000", "₹42,000–63,000", "Public transport; check student discounts"],
      ["Other Living Expenses", "5,000–7,000", "₹1–1.5 lakh", "Mobile data, personal items and entertainment"],
      ["Student Visa Fees", "5,000–7,000", "₹1–1.5 lakh", "Dependent on visa duration and processing"],
      ["Airfare (Round Trip)", "1,500–3,000", "₹30,000–60,000", "Depends on origin and booking period"],
      ["Health Insurance", "2,000–4,000", "₹42,000–84,000", "Coverage and premium vary"],
    ],
  },
  faq: {
    heading: "Frequently Asked Question – Study In Dubai",
    sectionId: "faqs",
    initialVisibleCount: 0,
    variant: "dubai",
    items: [
      {
        question: "What are the benefits of choosing to study in Dubai?",
        answer:
          "The UAE city of Dubai provides branch campuses, English-language education, scholarships, industry contacts, and an Indian community. Tuition and living can be lower than in some Western countries, although prices differ by campus.",
      },
      {
        question: "Can Indian students study in Dubai after 12th?",
        answer:
          "Yes. Access to undergraduate admission usually hinges on Class 12 grades, subject requirements, and language requirements. Common cut-offs are around 55–65%, with foundation programs available, and September and January intakes.",
        highlightTerms: ["55–65%"],
      },
      {
        question: "How much money is required to study in Dubai?",
        answer:
          "The estimate for annual cost is approximately ₹15–28 lakhs, including tuition (AED 40,000–90,000), maintenance (AED 25,000–35,000) and visa and insurance (AED 5,000–7,000).",
        highlightTerms: ["₹15–28 lakhs"],
      },
      {
        question: "What is the average cost of living in Dubai for students?",
        answer:
          "Typical annual figures cover accommodation sharing at AED 15,000 to 25,000, food at AED 8,000 to 12,000, travel at AED 2,000 to 3,000, and miscellaneous expenses at AED 5,000 to 7,000, with or without including visa, flights and insurance.",
      },
      {
        question: "Is there any restriction on gap years before applying to study in Dubai?",
        answer:
          "No uniform policy exists across Dubai for all courses. Some universities accept one or two years of gap following Class 12 and even longer postgraduate gap periods with proper justification.",
        highlightTerms: ["one or two years"],
      },
      {
        question: "What are the best courses to study in Dubai?",
        answer:
          "Popular majors include business, hospitality, engineering, media, architecture, information technology and cybersecurity, and fashion. Choose based on your career objective, accreditation, tuition cost, and curriculum.",
      },
      {
        question: "How to study in Dubai — what is the admission process?",
        answer:
          "Shortlisting programs, preparing transcripts and other paperwork, evaluating scholarship applications, applying for programs, getting an acceptance letter, and settling accommodation issues. The processing time will vary.",
      },
      {
        question: "Are there specific study programs for international students in Dubai?",
        answer:
          "Yes. In fact, students can select from universities with branches in UK and Australia, American Universities, as well as universities affiliated with India.",
      },
      {
        question: "How much money is required to study in Dubai in Indian Rupees?",
        answer:
          "Typical undergraduate tuition is usually in the range of ₹9–20 lakh per year, and living costs are approximately ₹5.5–8 lakh per year.",
        highlightTerms: ["₹9–20 lakh", "₹5.5–8 lakh"],
      },
      {
        question: "What role do study in Dubai consultants play?",
        answer:
          "Counselors may assist in program matching with academics, assist with documentation and application procedures, search for scholarships and arrange for visas and accommodation. Always cross-check visa and university requirements with the official sources.",
      },
    ],
  },
};
