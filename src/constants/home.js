import { homePageBaseUrl, imageBaseUrl } from "@/utils/config";
// import mbbsStudent from "@/assets/mbbs_student.png"

const stbg = imageBaseUrl + "homestudybg.svg";
const imbg = imageBaseUrl + "homeimmigrationbg.svg";
const mbbg = imageBaseUrl + "homembbsbg.svg";
const tpbg = imageBaseUrl + "hometestprepbg.svg";
// const st = imageBaseUrl + "homestudyabroad.svg";
// const mb = imageBaseUrl + "homeBanner/IR.jpg";
// const tp = imageBaseUrl + "hometest.svg";

// Overview Images
const st = homePageBaseUrl + "study-abroad-home.png";
const im = imageBaseUrl + "homeBanner/immersion.jpg";
const ie = homePageBaseUrl + "international-engagement-home.png";
const mbbs = homePageBaseUrl + "mbbs-home.jpg";

// Global Reach country images
const countryUkImage = homePageBaseUrl + "Uk-home.jpg";
const countryIrelandImage = homePageBaseUrl + "Ireland-home.jpg";
const countryAustraliaImage = "/images/australia.jpg";
const countryFranceImage = homePageBaseUrl + "france-home.jpg";
const countryGermanyImage = homePageBaseUrl + "germany-home.jpg";
const countryCanadaImage = homePageBaseUrl + "canada-home.jpg";
const countryHungaryImage = homePageBaseUrl + "Hungary-home.jpg";
const countryDenmarkImage = homePageBaseUrl + "Denmark-home.jpg";
const countryItalyImage = homePageBaseUrl + "Italy-home.jpg";
const countryMaltaImage = homePageBaseUrl + "Malta-home.jpg";
const countryNetherlandsImage = homePageBaseUrl + "netherland-home.jpg";
const countrySwedenImage = homePageBaseUrl + "Sweden-home.jpg";
const countryBelgiumImage = homePageBaseUrl + "Belgium-home.jpg";
const thailandHomeImage = homePageBaseUrl + "thailand.avif";
const germanyHomeImage = homePageBaseUrl + "germany-home.jpg";
const franceHomeImage = homePageBaseUrl + "france-home.jpg";

const NMCHomeImage = homePageBaseUrl + "NMC-home.png";

export const ourserviceshomedata = [
  {
    background: stbg,
    image: st,
    title: "STUDY ABROAD",
    path: "/study-abroad",
    description:
      "Study abroad consultants India — student with globe End-to-end guidance for UG, PG & PhD admissions in USA, UK, Canada, Germany, Australia & more. SOP, visa, scholarships, all covered.",
  },
  {
    background: imbg,
    image: im,
    title: "IMMERSION",
    path: "/immersion",
    description:
      "Short-term global programs (7–21 days) in Thailand, Malaysia, Dubai, Germany & France: industry exposure, university visits & cultural immersion.",
  },
  {
    background: mbbg,
    image: ie,
    title: "STUDY IN INDIA",
    path: "/international-relation",
    description:
      "Group immersion experience abroad Academic writing and international engagement Helping Indian HEIs build global partnerships, MoUs, faculty exchanges and international student mobility programs with world-class universities.",
  },
  {
    background: tpbg,
    image: mbbs,
    title: "MBBS",
    path: "/mbbs",
    description:
      "Affordable NMC/WHO-recognised MBBS in Russia, Uzbekistan, Georgia & Philippines. From ₹20 lakhs. Full application, visa & FMGE prep support.",
  },
];

/** Top-left, top-right, bottom-left, bottom-right for the home services mosaic */
export const ourServicesCornerImages = [
  { src: st, alt: "Study abroad consultants India — student with globe" },
  { src: im, alt: "Group immersion experience abroad" },
  { src: ie, alt: "Academic writing and international engagement" },
  { src: mbbs, alt: "Medical education and MBBS pathways" },
];

/** Home — Taksheela Edge (why us) — icons: trophy | calculator | users | handshake | clipboardCheck | globe */
export const taksheelaEdge = {
  eyebrow: "TAKSHEELA EDGE",
  title: "What Makes Us the Best Study Abroad Consultants in India",
  subtitle:
    "As one of the leading abroad education consultants in India, Taksheela isn't just a consultancy, we are a full-spectrum global education partner trusted by students, parents and institutions across India.",
  cta: {
    label: "Talk to an Expert Now",
    href: "https://wa.me/919831241212",
  },
  features: [
    {
      id: "platinum",
      icon: "trophy",
      heading: "Platinum Consultancy Status",
      subheading:
        "Premier partners with leading universities in the UK, USA, Canada and Europe, giving our students direct advantages in admissions, scholarships and processing speed.",
    },
    {
      id: "tech",
      icon: "calculator",
      heading: "Technology Integration",
      subheading:
        "Tailored web-based portal for seamless real-time tracking of your end-to-end application process, class scheduling and live status updates.",
    },
    {
      id: "squad",
      icon: "users",
      heading: "Pinnacle Expert Squad",
      subheading:
        "Our team's deep expertise in global education guides students in logical course and university selection, fostering genuinely informed decisions, not sales pitches.",
    },
    {
      id: "partnerships",
      icon: "handshake",
      heading: "Extensive Partnerships",
      subheading:
        "Established connections with 500+ global universities, language schools and institutions, enabling priority processing and exclusive scholarship access.",
    },
    {
      id: "documentation",
      icon: "clipboardCheck",
      heading: "Zero-Error Documentation",
      subheading:
        "Our dedicated team meticulously reviews every SOP, LOR, transcript and visa document before submission, near-zero rejection rates for our students.",
    },
    {
      id: "presence",
      icon: "globe",
      heading: "Pan-India + Dubai Presence",
      subheading:
        "Offices in Kolkata, Delhi NCR, Mumbai, Bangalore, Bhubaneswar and Dubai, walk in anytime or connect online for expert support wherever you are.",
    },
  ],
};

/** Why trust us — home section (TrustTaksheela) */
export const trustTaksheelaHero = {
  image: imageBaseUrl + "homeedge.jpg",
  badgeValue: "15+",
  badgeLabel: "YEARS TRUSTED",
};

export const trustTaksheelaIntro = {
  eyebrow: "THE TAKSHEELA DIFFERENCE",
  title: "Why 5,000+ Indian Students Trust Taksheela to Study Abroad",
  description:
    "From shortlisting universities to visa filing and pre-departure briefings, Taksheela delivers trusted overseas education counselling in India, combining certified counsellors, transparent processes, and a technology-backed journey so you can plan your future abroad with confidence.",
  ctaLabel: "Book Free Counselling Session",
  ctaHref: "https://wa.me/919831241212",
};

/** Icons: trophy | calculator | people | document | heart | airplane */
export const trustTaksheelaFeatures = [
  {
    id: 1,
    icon: "trophy",
    heading: "Platinum Consultancy",
    subheading:
      "Exclusive, premium services with top-tier expertise, encompassing comprehensive guidance and elite academic transition assistance.",
  },
  {
    id: 2,
    icon: "calculator",
    heading: "Technology Portal",
    subheading:
      "Tailored web-based application for seamless tracking of end-to-end application processes, class scheduling, and real-time updates.",
  },
  {
    id: 3,
    icon: "people",
    heading: "Pinnacle Squad",
    subheading:
      "Our team's deep expertise in global education guides students in logical course and university selection, fostering informed decisions.",
  },
  {
    id: 4,
    icon: "document",
    heading: "Extensive Partnerships",
    subheading:
      "Established connections with esteemed global universities, language schools, and educational institutions, showcasing extensive partnerships.",
  },
  {
    id: 5,
    icon: "heart",
    heading: "Student-First Mentoring",
    subheading:
      "Dedicated counsellors who prioritise your goals, timelines, and wellbeing at every step of your international education journey.",
  },
  {
    id: 6,
    icon: "airplane",
    heading: "Global Pathways Support",
    subheading:
      "Structured guidance from shortlisting and applications to visa filing, pre-departure, and arrival support overseas.",
  },
];

export const globalReachIntro = {
  eyebrow: "GLOBAL REACH",
  title: "Top Study Abroad Destinations for Indian Students",
  subtitle:
    "From tuition-free Germany to PR-pathway Canada, as experienced foreign education consultants in India we cover the full global map of higher education.",
};

/** Study-abroad destination cards */
export const globalReachDestinations = [
  {
    id: "uk",
    code: "UK",
    name: "United Kingdom",
    tagline: "Russell Group · PSW route",
    image: countryUkImage,
  },
  {
    id: "ie",
    code: "IE",
    name: "Ireland",
    tagline: "Tech hub · 2-year stay back",
    image: countryIrelandImage,
  },
  {
    id: "au",
    code: "AU",
    name: "Australia",
    tagline: "Go8 Universities",
    image: countryAustraliaImage,
  },
  {
    id: "fr",
    code: "FR",
    name: "France",
    tagline: "Grandes Écoles · Affordable",
    image: countryFranceImage,
  },
  {
    id: "de",
    code: "DE",
    name: "Germany",
    tagline: "Tuition-free · STEM hub",
    image: countryGermanyImage,
  },
  {
    id: "ca",
    code: "CA",
    name: "Canada",
    tagline: "PR pathway · PGWPP",
    image: countryCanadaImage,
  },
  {
    id: "hu",
    code: "HU",
    name: "Hungary",
    tagline: "Affordable tuition · Schengen access",
    image: countryHungaryImage,
  },
  {
    id: "dk",
    code: "DK",
    name: "Denmark",
    tagline: "Innovation-led education",
    image: countryDenmarkImage,
  },
  {
    id: "it",
    code: "IT",
    name: "Italy",
    tagline: "Historic universities · Global rankings",
    image: countryItalyImage,
  },
  {
    id: "mt",
    code: "MT",
    name: "Malta",
    tagline: "English-friendly island campus life",
    image: countryMaltaImage,
  },
  {
    id: "nl",
    code: "NL",
    name: "Netherlands",
    tagline: "English-taught · EU hub",
    image: countryNetherlandsImage,
  },
  {
    id: "se",
    code: "SE",
    name: "Sweden",
    tagline: "Research-driven · Sustainable campuses",
    image: countrySwedenImage,
  },
  {
    id: "be",
    code: "BE",
    name: "Belgium",
    tagline: "EU capital exposure · Multilingual",
    image: countryBelgiumImage,
  },
];

/** Home — Medical Education Abroad (MBBS) section */
export const medicalEducationAbroad = {
  eyebrow: "MEDICAL EDUCATION ABROAD",
  title: "Pursue MBBS Abroad from ₹20 Lakhs — Fully NMC Recognised",
  description:
    "Transparent counselling, NMC-listed universities, end-to-end application & visa support, and coaching partners who prepare you for FMGE & NExT: all through one trusted team at Taksheela.",
  heroImage: NMCHomeImage,
  watermark: "MBBS",
  primaryCta: { label: "Compare MBBS Programs ›", href: "/mbbs" },
  secondaryCta: { label: "Check My Eligibility", href: "/contact" },
  countries: [
    {
      id: "ru",
      code: "RU",
      flag: "https://flagcdn.com/w160/ru.png",
      name: "Russia",
      detail:
        "6-yr MBBS · Fees from ₹22L · NMC approved · English medium",
      badge: "Most Popular",
      badgeTone: "teal",
    },
    {
      id: "uz",
      code: "UZ",
      flag: "https://flagcdn.com/w160/uz.png",
      name: "Uzbekistan",
      detail:
        "Affordable tuition · WHO-listed colleges · Clinical exposure · English medium",
      badge: "Affordable",
      badgeTone: "green",
    },
    {
      id: "ge",
      code: "GE",
      flag: "https://flagcdn.com/w160/ge.png",
      name: "Georgia",
      detail:
        "European degree · 6-year program · NMC recognised · Safe & welcoming",
      badge: "European",
      badgeTone: "blue",
    },
    {
      id: "kz",
      code: "KZ",
      flag: "https://flagcdn.com/w160/kz.png",
      name: "Kazakhstan",
      detail:
        "Globally recognised degree · 5–6 year program · NMC recognised · Advanced medical training",
      badge: "Value Choice",
      badgeTone: "teal",
    },
    {
      id: "kg",
      code: "KG",
      flag: "https://flagcdn.com/w160/kg.png",
      name: "Kyrgyzstan",
      detail:
        "Budget-friendly MBBS · 6-year program · NMC recognised · Popular among Indian students",
      badge: "Budget Friendly",
      badgeTone: "cyan",
    },
  ],
};

/** Home — Global Immersion Program (GIP) */
export const globalImmersionHome = {
  eyebrow: "FOR STUDENTS & INSTITUTIONS",
  title: "Taksheela Global Immersion Program (GIP)",
  description:
    "Short-term international programs (7–21 days) combining university visits, industry exposure and cultural immersion. Available for individual students and as B2B institutional partnerships.",
  viewAllCta: {
    label: "View All Immersion Programs ›",
    href: "/immersion",
  },
  /** Order matches home carousel: TH → MY → AE → DE → FR */
  programs: [
    {
      id: "th",
      duration: "7 Days",
      countryCode: "TH",
      countryName: "Thailand",
      description:
        "Bangkok & Pattaya: factory & startup visits, Thai culture workshop, and a university partner session with certificate.",
      tags: ["Kasetsart University", "Industry Visits", "Certificate"],
      price: "From ₹65,000",
      image: thailandHomeImage,
      href: "/immersion/south-east-asia",
    },
    {
      id: "my",
      duration: "10 Days",
      countryCode: "MY",
      countryName: "Malaysia",
      description:
        "Kuala Lumpur tech hub visits, campus tour at partner universities, and ASEAN business immersion with expert mentors.",
      tags: ["UTM / UPM", "Tech Industry", "Certificate"],
      price: "From ₹75,000",
      image:
        "https://taksheelabucket.s3.ap-south-1.amazonaws.com/immersion/image/a5befa02-a277-4ee4-8177-bcac2dbf2a27.png",
      href: "/immersion/south-east-asia",
    },
    {
      id: "ae",
      duration: "7 Days",
      countryCode: "AE",
      countryName: "Dubai",
      description:
        "World's business crossroads — entrepreneurship, innovation and hospitality immersion in a truly global city.",
      tags: ["GEMS / HCT", "Business Visits", "Certificate"],
      price: "From ₹80,000",
      image:
        "https://taksheelabucket.s3.ap-south-1.amazonaws.com/immersion/image/77002874-6469-41af-8cb9-9dde7e132076.jpeg",
      href: "/immersion/middle-east",
    },
    {
      id: "de",
      duration: "14 Days",
      countryCode: "DE",
      countryName: "Germany",
      description:
        "Berlin & Munich — applied research labs, engineering immersions, and curated industry visits with certificates.",
      tags: ["TU Munich", "Siemens/BMW", "Certificate"],
      price: "From ₹1,20,000",
      image: germanyHomeImage,
      href: "/immersion/europe",
    },
    {
      id: "fr",
      duration: "14 Days",
      countryCode: "FR",
      countryName: "France",
      description:
        "Paris & Lyon — grandes écoles campus visits, luxury & creative industries, and curated cultural immersion.",
      tags: ["ESSEC / HEC", "Cultural Tour", "Certificate"],
      price: "From ₹1,10,000",
      image: franceHomeImage,
      href: "/immersion/europe",
    },
  ],
};

/** Study in India — home grid card images (S3). Filenames match bucket objects. */
const studyInIndiaImagesBaseUrl =
  "https://tied-web-bkt.s3.ap-south-1.amazonaws.com/study-in-india/";

/** Home — Study in India (SAARC) — cards use `ProgramCard` (grid). */
export const studyInIndiaHome = {
  eyebrow: "FOR SAARC STUDENTS",
  titleBefore: "Taksheela ",
  titleHighlight: "Study in India",
  titleAfter: " Program",
  description:
    "Structured pathways for South Asian students to pursue degrees and exchange opportunities at Indian universities, with admissions guidance, documentation support, visa counselling and on-campus liaison through Taksheela's institutional network.",
  programs: [
    {
      id: "saarc-af",
      duration: "AF",
      countryCode: "AF",
      countryName: "Afghanistan",
      description:
        "Engineering, medical and scholarship-aligned pathways with partner HEIs — mentoring from application to enrolment and orientation in India.",
      tags: ["Engineering", "Medical", "Scholarship"],
      image: studyInIndiaImagesBaseUrl + "Afganistan-home.png",
    },
    {
      id: "saarc-bd",
      duration: "BD",
      countryCode: "BD",
      countryName: "Bangladesh",
      description:
        "MoU-led programmes, streamlined admissions and certificate-backed short courses — ideal for students seeking credible Indian credentials.",
      tags: ["MoU Programs", "Admissions", "Certificate"],
      image: studyInIndiaImagesBaseUrl + "Bangladesh-home.png",
    },
    {
      id: "saarc-bt",
      duration: "BT",
      countryCode: "BT",
      countryName: "Bhutan",
      description:
        "STEM-focused tracks with curated campus visits and immersion modules across premier Indian institutes.",
      tags: ["STEM", "Campus Visits", "Certificate"],
      image: studyInIndiaImagesBaseUrl + "Bhutan-home.jpg",
    },
    {
      id: "saarc-in",
      duration: "IN",
      countryCode: "IN",
      countryName: "India",
      description:
        "Our hub for HEI partnerships, faculty exchange, joint degrees and mobility programmes — anchor your Study in India journey from here.",
      tags: ["HEI Partnerships", "Faculty Exchange", "MoU"],
      image: studyInIndiaImagesBaseUrl + "India-home.jpg",
      ctaLabel: "View Details >",
      ctaHref: "/international-relation",
    },
    {
      id: "saarc-mv",
      duration: "MV",
      countryCode: "MV",
      countryName: "Maldives",
      description:
        "Health sciences and hospitality streams with industry-linked exposure and placement-aligned preparatory support.",
      tags: ["Health Sciences", "Hospitality", "Certificate"],
      image: studyInIndiaImagesBaseUrl + "Maldives-home.jpg",
    },
    {
      id: "saarc-np",
      duration: "NP",
      countryCode: "NP",
      countryName: "Nepal",
      description:
        "High-placement-potential courses with dedicated visa documentation reviews and pre-departure briefing for Indian campuses.",
      tags: ["Top Placements", "Visa Support", "Certificate"],
      image: studyInIndiaImagesBaseUrl + "Nepal-home.jpg",
    },
    {
      id: "saarc-pk",
      duration: "PK",
      countryCode: "PK",
      countryName: "Pakistan",
      description:
        "Student exchange and MoU-driven enrolments across selective programmes with transparent eligibility guidance.",
      tags: ["Exchange Programs", "MoU", "Certificate"],
      image: studyInIndiaImagesBaseUrl + "Pakistan-home.jpg",
    },
    {
      id: "saarc-lk",
      duration: "LK",
      countryCode: "LK",
      countryName: "Sri Lanka",
      description:
        "STEM and business pathways with blended counselling — choose institutes that match your budget and career goals.",
      tags: ["STEM", "Business", "Certificate"],
      image: studyInIndiaImagesBaseUrl + "Shrilanka-home.png",
    },
  ],
};

/** Home — Test Preparation Coaching */
export const testPrepSectionHome = {
  eyebrow: "TEST PREPARATION COACHING",
  title:
    "Score High. Get Admitted. With India's Best Test Prep Coaching.",
  description:
    "Structured modules, expert trainers, and full-length mocks: built to lift your score fast. Choose your exam and see how we help you hit your target with personalised plans and proven methods.",
  heroImage:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  tests: [
    {
      id: "ielts",
      name: "IELTS",
      target: "Band 7+",
      statEyebrow: "AVG. IELTS IMPROVEMENT",
      statValue: "+1.5 Bands",
    },
    {
      id: "toefl",
      name: "TOEFL",
      target: "100+",
      statEyebrow: "AVG. TOEFL GAIN",
      statValue: "+15 Points",
    },
    {
      id: "pte",
      name: "PTE",
      target: "65+",
      statEyebrow: "AVG. PTE LIFT",
      statValue: "+12 Points",
    },
    {
      id: "gre",
      name: "GRE",
      target: "320+",
      statEyebrow: "AVG. GRE SCORE LIFT",
      statValue: "+18 Points",
    },
    {
      id: "gmat",
      name: "GMAT",
      target: "700+",
      statEyebrow: "AVG. GMAT GAIN",
      statValue: "+90 Points",
    },
    {
      id: "sat",
      name: "SAT",
      target: "1400+",
      statEyebrow: "AVG. SAT LIFT",
      statValue: "+180 Points",
    },
    {
      id: "duolingo",
      name: "DUOLINGO",
      target: "120+",
      statEyebrow: "AVG. DUOLINGO LIFT",
      statValue: "+25 Points",
    },
  ],
  features: [
    {
      id: "plans",
      title: "Personalised Study Plans",
      description:
        "Diagnostic tests and weekly milestones mapped to your target score and timeline.",
      icon: "plans",
    },
    {
      id: "trainers",
      title: "Certified Trainers",
      description:
        "Learn from instructors with proven score lifts and exam-specific strategies.",
      icon: "trainers",
    },
    {
      id: "mocks",
      title: "Full Mock Tests",
      description:
        "Timed, proctored-style mocks with detailed feedback on every section.",
      icon: "mocks",
    },
    {
      id: "modes",
      title: "Online + Offline",
      description:
        "Flexible batches — attend at our centre or join live online from anywhere.",
      icon: "modes",
    },
  ],
};


/** Home — Global Degree: journey / how it works */
export const globalDegreeJourney = {
  eyebrow: "HOW IT WORKS",
  title: "Your Journey to a Global Degree in 5 Steps",
  subtitle:
    "With expert overseas education counselling in India, we handle all the complexity so you can focus on your future.",
  cta: {
    label: "Start Your Journey Today",
    href: "https://wa.me/919831241212",
  },
  steps: [
    {
      id: "counselling",
      step: "STEP 01",
      title: "Free Counselling",
      description:
        "Share your goals and academics. Our experts analyse your profile in depth.",
      icon: "target",
    },
    {
      id: "shortlist",
      step: "STEP 02",
      title: "University Shortlisting",
      description:
        "We curate the best-fit universities and programs across your target countries.",
      icon: "clipboard",
    },
    {
      id: "application",
      step: "STEP 03",
      title: "Application",
      description:
        "Compelling SOP, LOR and complete document preparation and submission.",
      icon: "handshake",
    },
    {
      id: "visa",
      step: "STEP 04",
      title: "Visa Support",
      description:
        "Complete student visa filing with mock interviews and expert guidance.",
      icon: "badge",
    },
    {
      id: "fly",
      step: "STEP 05",
      title: "Fly & Thrive",
      description:
        "Pre-departure briefing, accommodation support and on-ground assistance.",
      icon: "plane",
    },
  ],
};

/** Home — Pan-India + Dubai offices */
export const whereYouAreHome = {
  eyebrow: "PAN-INDIA + DUBAI",
  title: "We're Near You. Wherever You Are.",
  locations: [
    {
      id: "kol",
      headline: "Kolkata (IN)",
      address:
        "Salt Lake, Sector V — full-stack study abroad counselling, test prep & visa support.",
      href: "/consultants-study-abroad-kolkata",
      cta: { label: "Know More →" },
    },
    {
      id: "del",
      headline: "Delhi NCR (IN)",
      address:
        "Noida / Gurugram — walk-in sessions for UG, PG & MBA abroad; IELTS & GRE batches.",
      href: "/study-abroad-consultants-delhi-ncr",
      cta: { label: "Know More →" },
    },
    {
      id: "mum",
      headline: "Mumbai (IN)",
      address:
        "Western suburbs — premium counselling for USA, UK, Canada & EU admissions.",
      href: "/study-abroad-consultants-mumbai",
      cta: { label: "Know More →" },
    },
    {
      id: "blr",
      headline: "Bangalore (IN)",
      address:
        "Koramangala — tech & STEM-focused shortlisting; partner university connects.",
      href: "/study-abroad-consultants-bangalore",
      cta: { label: "Know More →" },
    },
    {
      id: "bbsr",
      headline: "Bhubaneswar (IN)",
      address:
        "Eastern India hub — affordable pathways, scholarships & visa filing under one roof.",
      href: "/study-abroad-consultants-bhubaneswar",
      cta: { label: "Know More →" },
    },
    {
      id: "dxb",
      headline: "Dubai (AE)",
      address:
        "Business Bay — Middle East desk for Indian students & institutional partnerships.",
      href: "/study-in-dubai",
      cta: { label: "Know More →" },
    },
  ],
};

/** Home — FAQ strip (two-column + accordion) */
export const faqHome = {
  eyebrow: "GOT QUESTIONS?",
  title: "Frequently Asked Questions",
  description:
    "As experienced foreign education consultants in India, we answer the most common questions from Indian students and parents about studying abroad, MBBS abroad, test prep and the Global Immersion Program.",
  cta: { label: "Ask Our Counsellors Directly", href: "https://wa.me/919831241212" },
  items: [
    {
      id: "services",
      question: "What services does Taksheela Institute of Education offer?",
      answer:
        "We offer end-to-end study abroad counselling—shortlisting universities, applications, SOP guidance, scholarships, visa support, and test prep for IELTS, TOEFL, GRE, SAT and more—so you can move from goal to admission with one trusted partner.",
    },
    {
      id: "cost",
      question: "How much does it cost to study abroad from India?",
      answer:
        "Total cost depends on country, course and lifestyle, typically tuition plus living for the full program. We help you compare realistic budgets, explore scholarships and education loans, and plan finances before you commit to a destination.",
    },
    {
      id: "mbbs-india",
      question: "Is MBBS abroad valid in India? Can I practice after returning?",
      answer:
        "Graduates from recognised universities can pursue the screening pathway (e.g. NEXT/FMGE requirements as applicable) and licensing steps to practise in India. We guide you on NMC guidelines, eligibility and the return pathway during counselling.",
    },
    {
      id: "ielts-toefl",
      question: "Do I need IELTS or TOEFL to study abroad from India?",
      answer:
        "Most English-taught programs ask for proof of English—often IELTS or TOEFL, sometimes PTE. Waivers exist at some institutions. We map your target universities’ requirements and help you choose the right test and target score.",
    },
    {
      id: "gip",
      question: "What is the Taksheela Global Immersion Program?",
      answer:
        "The Global Immersion Program is designed to give you international exposure—campus visits, cultural immersion and academic orientation—so you are better prepared before you fly. Speak to our team for current formats and destinations.",
    },
    {
      id: "get-started",
      question: "How do I get started with Taksheela?",
      answer:
        "Book a free counselling session online or walk into a centre near you. We’ll assess your profile, suggest pathways, and share a clear roadmap for applications, tests and timelines.",
    },
  ],
};

export const taksheelaInsights = [
  {
    id: 1,
    subheading:
      "Join us as we take you on Rahul's journey with Taksheela to his dream university.",
  },
];
