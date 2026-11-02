import type { FAQItem } from "@/components/campaign/FAQSection";

export const DUBAI_THANKYOU = "/study-abroad/dubai-lp/thankyou";
export const DUBAI_CONTAINER = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
export const DUBAI_PHONE = "+919831241212";
export const DUBAI_PHONE_DISPLAY = "+91 98312 41212";

export const DUBAI_NAV = [
  { href: "#why-dubai", label: "Study in Dubai" },
  { href: "#universities", label: "Universities" },
  { href: "#fees", label: "Fees" },
  { href: "#scholarships", label: "Scholarships" },
  { href: "#counselling", label: "Contact" },
] as const;

export const WHY_DUBAI_INTRO = [
  "If you are thinking of studying abroad, you may already have looked at Canada, Australia, or the UK. What many Indian students miss is that Dubai is a strong option after Class 12: modern, well connected, and home to international campuses that offer a world-class degree at a more manageable cost.",
  "Here is why studying in Dubai is often the better decision for the next few years.",
];

export const WHY_DUBAI_POINTS = [
  {
    title: "Dubai offers globally recognised degrees",
    paragraphs: [
      "UK, Australian, and American universities run campuses in Dubai, including the University of Birmingham, Heriot-Watt University, Middlesex University, and the University of Wollongong. The academic programme matches the home university, while tuition and living usually cost less than studying in that same country.",
      "For Indian students, that is an internationally benchmarked degree without the long-haul move, often 30–50% less than the West.",
    ],
  },
  {
    title: "Tuition and living together often cost less than UK or US tuition alone",
    paragraphs: [
      "When families ask what it costs to study in Dubai, the number is usually lower than they expect. These are typical ranges from India, not a quote for one university.",
    ],
    stats: [
      { label: "Tuition", value: "AED 40,000–90,000", note: "Per year, about ₹9–20 lakh depending on the course" },
      { label: "Living", value: "AED 25,000–35,000", note: "Per year, about ₹5.5–8 lakh" },
      { label: "Visa and insurance", value: "AED 5,000–7,000", note: "Per year" },
      { label: "Approximate total", value: "₹15–28 lakh", note: "Per year, all of the above together" },
    ],
    after:
      "That is not far from London or Sydney, and well below New York or San Francisco. A part-time role can add about AED 3,000–4,000 a month toward other expenses.",
  },
  {
    title: "Scholarships and paid internships make it more reachable",
    paragraphs: [
      "Many Dubai universities offer both merit and need-based scholarships, especially for strong Class 12 or undergraduate scores. Some reduce the tuition fee by up to 50%.",
      "Students can also take paid internships in Dubai Internet City and Dubai Media City, with employers such as Microsoft, Oracle, CNN, and HP. Those internships often turn into a job offer after graduation.",
    ],
  },
  {
    title: "Study gaps are treated more flexibly than in the West",
    paragraphs: [
      "A year or two after Class 12 or graduation does not automatically close the door. Canada and the UK often want a gap of about a year or less. Dubai campuses commonly accept up to two years after Class 12, and longer after a bachelor’s degree, when you can show a clear reason and the papers to support it.",
      "That is why Dubai fits Indian students who took a break and want to start again. The rules also allow a longer pause during studies than many Western countries.",
    ],
  },
  {
    title: "The career market around campus is hiring",
    paragraphs: [
      "Dubai is not only a degree. Digital marketing, AI, business development, hospitality, engineering, and fintech are hiring, backed by the UAE’s Operation 300bn and the Dubai 2040 plan. That spending is turning into jobs, startups, and paths for skilled graduates.",
      "These fields sit with Dubai’s economy and with roles international graduates actually get.",
    ],
    pills: [
      "Business and management",
      "Tourism and hospitality",
      "Architecture and civil engineering",
      "Information technology",
      "Media and communication",
    ],
  },
  {
    title: "Admission and the visa can stay straightforward",
    paragraphs: [
      "The paperwork feels heavy when you do it alone. With a counsellor on the file, the path from application to visa is often 6–8 weeks, not a long, confusing process.",
    ],
    steps: [
      "University shortlisting",
      "SOP and document preparation",
      "Scholarships and fee waivers",
      "Visa filing and accommodation",
    ],
  },
  {
    title: "Familiar comfort, with a global classroom",
    paragraphs: [
      "A large Indian community, English-speaking campus life, safe public spaces, and short flights home make Dubai a practical first move. You keep a lot of what is familiar, and you still build the independence that comes from studying abroad.",
      "Whether you are comparing Dubai with other countries or planning specifically as an Indian student, the campuses are built for a mixed, international classroom.",
    ],
  },
];

export const COURSE_INTRO = [
  "If you are choosing Dubai, the course matters as much as the university. Dubai is no longer only a travel and business hub. It is an education hub, with programmes built around the industries that are hiring.",
  "Whether you are planning to study after Class 12 or after a bachelor’s degree, these are the courses families shortlist most often. Fees below are typical yearly ranges, not a quote.",
];

export const COURSE_HEADERS = [
  "Course",
  "Highlights",
  "Top institutions",
  "Fee / year (AED)",
  "Fee / year (₹)",
];

export const COURSE_ROWS = [
  [
    "Business and management",
    "High demand in Dubai’s corporate hubs, with internships in finance, marketing, and operations.",
    "University of Birmingham Dubai, Heriot-Watt",
    "45,000–85,000",
    "₹10–19 lakh",
  ],
  [
    "Hospitality and tourism",
    "Hotels, events, and airline services. Internships at leading hotels often start in the second year.",
    "Emirates Academy of Hospitality Management, EHL Dubai",
    "40,000–60,000",
    "₹9–13 lakh",
  ],
  [
    "Engineering and technology",
    "Infrastructure, AI, and renewable energy, with access to expos and the city’s tech events.",
    "Amity University Dubai, Canadian University Dubai",
    "55,000–90,000",
    "₹12–20 lakh",
  ],
  [
    "Media and communication",
    "Digital journalism, branding, advertising, and PR, with media brands based in Dubai Media City.",
    "Institutions in Dubai Media City",
    "From 40,000",
    "From ₹9 lakh",
  ],
  [
    "Architecture and interior design",
    "Demand from the skyline and luxury interiors. Living costs are lower than New York or London.",
    "American University in Dubai, Manipal Academy of Higher Education",
    "From about 50,000",
    "From about ₹11 lakh",
  ],
  [
    "IT and cybersecurity",
    "Cloud, cybersecurity, and digital roles. Many campuses partner with IBM and Microsoft.",
    "Various campuses, including IBM and Microsoft partners",
    "50,000–85,000",
    "₹11–18 lakh",
  ],
  [
    "Fashion and luxury brand management",
    "Creative and commercial training, with internships around brands such as Gucci, Dior, and Armani.",
    "ESMOD Dubai, Dubai Institute of Design and Innovation",
    "45,000–70,000",
    "₹10–15 lakh",
  ],
];

export const RANKED_UNI_INTRO = [
  "Dubai has fast become one of the leading global study destinations because of its education quality, international recognition, cultural diversity, and potential career opportunities. There are so many university options for students looking to study in Dubai, particularly Indian high school graduates, that it can be overwhelming to decide which university to attend.",
  "Dubai is home to over 60 globally recognized universities and higher education institutions. Many offer degrees that are recognized in both the UAE (to work) and around the world (to study). You can choose from UK and Australian branch campuses, American-style institutions, Indian-affiliated universities, and more. Students just need to determine what university is best suited for their own academic goals, financial situation, and graduate plans.",
  "This overview covers the best universities in Dubai, their unique offerings, the overall cost to study in Dubai from India, academic strengths, and why they are attractive for both Indian and international students. Fees below are typical yearly ranges, not a quote.",
];

export const RANKED_UNI_LOGOS = [
  "Manipal University Dubai",
  "University of Wollongong in Dubai",
  "University of Birmingham Dubai",
  "Heriot-Watt University",
  "Middlesex University",
  "American University in Dubai",
  "SP Jain School of Global Management",
];

export const RANKED_UNI_HEADERS = [
  "University",
  "Popular Courses / Best Programs",
  "Tuition Fees (per year)",
  "Highlights",
];

export const RANKED_UNI_ROWS = [
  [
    "University of Birmingham Dubai",
    "BSc Business Management, BEng Mechanical Engineering, Computer Science",
    "~AED 100,000 (₹22,50,000)",
    "UK’s #1 branch campus, high employability, strong research, merit-based scholarships, direct admission after 12th",
  ],
  [
    "Heriot-Watt University Dubai",
    "AI, Civil Engineering, Finance, Data Analytics, Engineering",
    "AED 55,000–85,000 (₹12–19 lakhs)",
    "Same curriculum as UK campus, project-based learning, foundation programs, flexible entry",
  ],
  [
    "Middlesex University Dubai",
    "Law, Psychology, Marketing, Hospitality",
    "AED 55,000–70,000 (₹12–15 lakhs)",
    "Affordable, multicultural, UK education system, accepts 1–2 years gap, part-time work allowed",
  ],
  [
    "University of Wollongong in Dubai (UOWD)",
    "MSc Cybersecurity, BBA Logistics, IT, Engineering, Supply Chain",
    "AED 75,000–90,000 (₹17–20 lakhs)",
    "Dual degree recognition (UAE + Australia), strong industry links, practical education",
  ],
  [
    "American University in Dubai (AUD)",
    "Architecture, Communication, Design, International Relations",
    "AED 80,000–100,000 (₹18–22 lakhs)",
    "U.S.-style education, internship placement support, accepts up to 2 years gap",
  ],
  [
    "SP Jain School of Global Management",
    "BBA, Global MBA, Data Science",
    "AED 80,000–120,000 (₹18–27 lakhs)",
    "Multi-city learning (Dubai + Singapore/Sydney), global internships, entrepreneurship focus",
  ],
  [
    "Manipal Academy of Higher Education (MAHE) Dubai",
    "Engineering, Biotechnology, Interior Design, Journalism",
    "AED 35,000–55,000 (₹8–12 lakhs)",
    "Affordable, strong support for Indian students, accepts gaps, counseling provided, career-focused",
  ],
];

export const RANKED_UNI_TIPS = [
  "If you’re on a budget, start with MAHE Dubai, which is an offshore campus, or Middlesex, and still look at funding options.",
  "For a globally recognized degree, University of Birmingham, Heriot-Watt, and UOWD are the options worth comparing for return on the fee.",
  "Choose the university for the quality of the course, not only the tuition. Business, tech, and healthcare are taught to a different standard at each campus.",
  "Speak to a study in Dubai counsellor about part-time work, visa processing, and recognition of the university before you take the next step.",
];

export const SCHOLARSHIP_INTRO =
  "When looking into study in Dubai for Indian students, one of the most often asked questions involves the total amount of money needed to study in Dubai, and then how to cope with the total cost to study in Dubai from India. Luckily, Dubai’s education system provides a number of scholarships and education loans which are intended to tackle these issues related to money, primarily aimed at Indian students looking to study in Dubai after the 12th grade, or after higher studies.";

export const SCHOLARSHIP_HEADERS = ["Type of Scholarship", "Details"];
export const SCHOLARSHIP_ROWS = [
  [
    "Merit-based Scholarships",
    "Offered by most universities to attract Indian students with excellent 12th grade or Bachelor degree results. Reduces tuition costs significantly.",
  ],
  [
    "Need-based Scholarships",
    "Supports students concerned about the cost of studying in Dubai by covering part of tuition and living expenses.",
  ],
  [
    "Program-specific Scholarships",
    "Available for high-demand fields like Business, Engineering, Hospitality, and IT to encourage students to pursue key courses for Dubai’s growth.",
  ],
  [
    "International Student Scholarships",
    "Aimed at students from outside Dubai, including Indians, covering a broad range of programs to support cultural diversity and global learning.",
  ],
];

export const SCHOLARSHIP_TIPS = [
  "Apply early to meet deadlines and increase your chances.",
  "Showcase not just grades, but also leadership, extracurriculars, and work experience.",
];

export const SCHOLARSHIP_STEPS = [
  {
    title: "Start Your Research Early",
    tone: "white" as const,
    body: "Once you decide to study in Dubai—whether after 12th or for higher education—it’s important to start looking for scholarships as soon as possible. Early planning gives you time to explore different options and prepare strong applications.",
  },
  {
    title: "Maintain a Strong Academic Profile",
    tone: "teal" as const,
    body: "Scholarships in Dubai often focus on merit. Keep your academic performance consistent and take part in activities that show your abilities, leadership, and dedication.",
  },
  {
    title: "Write a Clear and Convincing Personal Statement",
    tone: "white" as const,
    body: "In your personal statement, explain why you want to study in Dubai. Highlight your educational goals, career ambitions, and the qualities that make you a good candidate for the scholarship.",
  },
  {
    title: "Gather Strong Recommendation Letters",
    tone: "teal" as const,
    body: "Request recommendation letters from teachers, mentors, or employers who know your strengths well and can provide positive feedback about your achievements and character.",
  },
  {
    title: "Seek Support from Experts",
    tone: "white" as const,
    body: "Consider getting help from experienced study abroad consultants for Dubai. Their guidance on preparing documents, checking applications, and getting ready for interviews can boost your chances of success.",
  },
];

export const SCHOLARSHIP_NOTE =
  "Dubai offers a variety of scholarships for Indian students, including merit-based, need-based, and program-specific options. These scholarships not only ease tuition costs but also consider leadership and extracurricular achievements. Apply early and seek expert guidance to improve your chances of securing financial support for your studies.";

export const LIVING_COST_INTRO =
  "If you are going to study in Dubai for Indian students after 12th, it is equally important to consider the cost of living in Dubai as it is to understand your tuition fees. Many students usually ask questions like “how much money is needed to study in Dubai?” or “what is the total cost to study in Dubai from India?” In order to make responsible decisions and properly budget your money, you must fully understand the living expenses that will come in addition to your education.";

export const LIVING_COST_HEADERS = [
  "Expense Category",
  "Average Annual Cost (AED)",
  "Average Annual Cost (₹)",
  "Notes",
];

export const LIVING_COST_ROWS = [
  ["Accommodation", "15,000 – 25,000", "₹3.2 – ₹5.5 lakhs", "Shared apartments or university hostels"],
  ["Food & Groceries", "8,000 – 12,000", "₹1.7 – ₹2.6 lakhs", "Save more by using Indian groceries and home cooking"],
  ["Transportation", "2,000 – 3,000", "₹42,000 – ₹63,000", "Public transport with student discounts"],
  ["Other Living Expenses", "5,000 – 7,000", "₹1 – ₹1.5 lakhs", "Includes mobile data, personal items, entertainment"],
  ["Student Visa Fees", "5,000 – 7,000", "₹1 – ₹1.5 lakhs", "Depends on visa duration and processing"],
  ["Airfare (Round Trip)", "1,500 – 3,000", "₹30,000 – ₹60,000", "Varies by city and time of booking"],
  ["Health Insurance", "2,000 – 4,000", "₹42,000 – ₹84,000", "Mandatory, ensures medical support during stay"],
];

export const DUBAI_FAQ_ITEMS: FAQItem[] = [
  {
    question: "What are the benefits of choosing to study in Dubai?",
    answer:
      "UK, Australian, and American universities run campuses in Dubai, and the degree is awarded by the home university. Tuition and living together are often 30–50% less than studying in the UK or the US. Campuses are English-medium, the Indian community is large, flights home are short, and merit scholarships can cut the first-year fee by up to 50%.",
    highlightTerms: ["30–50% less", "50%"],
  },
  {
    question: "Can Indian students study in Dubai after 12th?",
    answer:
      "Yes. Direct undergraduate offers often start around 55–65% in Class 12, and the cut-off moves by course. A lower score can still enter through a foundation pathway. Many campuses accept IELTS or PTE, and some accept a medium-of-instruction letter. The main intakes are September and January.",
    highlightTerms: ["55–65%"],
  },
  {
    question: "How much money is required to study in Dubai?",
    answer:
      "A typical year is about ₹15–28 lakh all in: tuition AED 40,000–90,000 (about ₹9–20 lakh), living AED 25,000–35,000 (about ₹5.5–8 lakh), and visa plus insurance AED 5,000–7,000. Lab courses, MBAs, and some branch campuses sit higher. These are ranges, not a quote.",
    highlightTerms: ["₹15–28 lakh"],
  },
  {
    question: "What is the average cost of living in Dubai for students?",
    answer:
      "Typical yearly living ranges are accommodation AED 15,000–25,000 (₹3.2–5.5 lakh) for a shared apartment or hostel, food AED 8,000–12,000, local transport AED 2,000–3,000 with a student discount, and other personal costs AED 5,000–7,000. Health insurance is mandatory, usually AED 2,000–4,000. A round-trip airfare is about ₹30,000–60,000.",
  },
  {
    question: "Is there any restriction on gap years before applying to study in Dubai?",
    answer:
      "A gap does not automatically close the door. Dubai campuses commonly accept up to two years after Class 12, and a longer gap after a bachelor’s degree when you can explain it. Middlesex often accepts a 1–2 year gap, and the American University in Dubai accepts up to two years. Each university still checks the course and your documents.",
    highlightTerms: ["two years"],
  },
  {
    question: "What are the best courses to study in Dubai?",
    answer:
      "Families shortlist business and management, hospitality, engineering, media, architecture and interior design, IT and cybersecurity, and fashion. Yearly fees for these usually fall between about AED 40,000 and AED 90,000, depending on the campus. Pick the course for the industry you want, not only the lowest fee.",
  },
  {
    question: "How to study in Dubai — what is the admission process?",
    answer:
      "The usual path is university shortlisting, then your SOP and documents, then scholarships and fee waivers, then the visa and accommodation. With a counsellor on the file, that path is often 6–8 weeks. The offer letter is the document that confirms the fee and any waiver.",
    highlightTerms: ["6–8 weeks"],
  },
  {
    question: "Are there specific study programs for international students in Dubai?",
    answer:
      "Dubai has over 60 universities and colleges built for international students. You can choose a UK or Australian branch campus, an American-style university, or an Indian-affiliated campus. On the branch campuses listed here, the curriculum matches the home university and the degree is recognised for work in the UAE and for further study abroad.",
  },
  {
    question: "How much money is required to study in Dubai in Indian Rupees?",
    answer:
      "Most undergraduate tuition is about ₹9–20 lakh a year. Living is about ₹5.5–8 lakh a year. Together with visa and insurance, families usually plan ₹15–28 lakh for one year. A campus such as Birmingham Dubai can be about ₹22.5 lakh in tuition alone, while MAHE Dubai is often closer to ₹8–12 lakh.",
    highlightTerms: ["₹15–28 lakh"],
  },
  {
    question: "What role do study in Dubai consultants play?",
    answer:
      "A counsellor shortlists campuses for your marks and course, prepares the SOP and documents, checks scholarships, and files the visa and accommodation. Before you pay an application fee, ask about part-time work, the visa steps, and whether the degree is the same award as the home campus. Taksheela handles that file with you.",
  },
];
