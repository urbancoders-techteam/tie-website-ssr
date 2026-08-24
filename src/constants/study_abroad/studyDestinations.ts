import { homePageImageUrl } from "@/utils/config";

const countryUkImage = homePageImageUrl + "Uk-home.jpg";
const countryIrelandImage = homePageImageUrl + "Ireland-home.jpg";
const countryAustraliaImage = "/images/australia.jpg";
const countryFranceImage = homePageImageUrl + "france-home.jpg";
const countryGermanyImage = homePageImageUrl + "germany-home.jpg";
const countryCanadaImage = homePageImageUrl + "canada-home.jpg";
const countryHungaryImage = homePageImageUrl + "Hungary-home.jpg";
const countryDenmarkImage = homePageImageUrl + "Denmark-home.jpg";
const countryItalyImage = homePageImageUrl + "Italy-home.jpg";
const countryMaltaImage = homePageImageUrl + "Malta-home.jpg";
const countryNetherlandsImage = homePageImageUrl + "netherland-home.jpg";
const countrySwedenImage = homePageImageUrl + "Sweden-home.jpg";
const countryBelgiumImage = homePageImageUrl + "Belgium-home.jpg";

export type StudyDestinationCard = {
  /** In-app country page when available; otherwise hub `/study-abroad/country`. */
  href: string;
  countryCode: string;
  countryName: string;
  imageSrc: string;
  imageAlt: string;
  bestFor: string;
  courses: string;
  highlight: string;
  ctaLabel: string;
};

export const studyDestinationsContent = {
  eyebrow: "Study destinations",
  heading: "Countries We Help Indian Students Apply To",
  description:
    "From world-leading universities in the UK to tuition-free public institutions in Germany — choose your destination and let us guide the rest.",
  destinations: [
    {
      href: "/study-abroad/country/UK",
      countryCode: "GB",
      countryName: "United Kingdom",
      imageSrc: countryUkImage,
      imageAlt: "London skyline and Thames",
      bestFor: "1-year MSc, MBA, STEM — fast-track degrees",
      courses: "Business, Data Science, Engineering, Finance, Law",
      highlight: "2-year Graduate Route visa post-graduation",
      ctaLabel: "Explore United Kingdom Admissions",
    },
    {
      href: "/study-abroad/country/Germany",
      countryCode: "DE",
      countryName: "Germany",
      imageSrc: countryGermanyImage,
      imageAlt: "Brandenburg Gate Berlin",
      bestFor: "Low or no tuition at public universities, strong industry links",
      courses: "Engineering, IT, Natural Sciences, Business, Medicine",
      highlight: "18-month post-study job search residence permit",
      ctaLabel: "Explore Germany Admissions",
    },
    {
      href: "/study-abroad/country/Ireland",
      countryCode: "IE",
      countryName: "Ireland",
      imageSrc: countryIrelandImage,
      imageAlt: "Dublin city and river",
      bestFor: "English-taught degrees, tech & pharma hubs, EU access",
      courses: "Computer Science, Pharmacy, Business, Data Analytics",
      highlight: "Up to 24 months stay-back for master’s graduates",
      ctaLabel: "Explore Ireland Admissions",
    },
    {
      href: "/study-abroad/country/Australia",
      countryCode: "AU",
      countryName: "Australia",
      imageSrc: countryAustraliaImage,
      imageAlt: "Sydney Opera House and harbour",
      bestFor: "QS-ranked universities, research-led courses, coastal campuses",
      courses: "IT, Nursing, Engineering, Accounting, Environmental Science",
      highlight: "Post-study work stream up to 4–6 years for eligible graduates",
      ctaLabel: "Explore Australia Admissions",
    },
    {
      href: "/study-abroad/country/Canada",
      countryCode: "CA",
      countryName: "Canada",
      imageSrc: countryCanadaImage,
      imageAlt: "Toronto city skyline",
      bestFor: "PGWP-friendly pathways, PR-oriented programs, co-op options",
      courses: "Business, Health Sciences, IT, Hospitality, Media",
      highlight: "PGWP up to 3 years; strong PR pathways for graduates",
      ctaLabel: "Explore Canada Admissions",
    },
    {
      href: "/study-abroad/country/France",
      countryCode: "FR",
      countryName: "France",
      imageSrc: countryFranceImage,
      imageAlt: "Eiffel Tower and Paris",
      bestFor: "Affordable public fees, English-taught Masters, EU mobility",
      courses: "Fashion, Hospitality, Engineering, Arts, Management",
      highlight: "APS residence permit for job search after master’s",
      ctaLabel: "Explore France Admissions",
    },
    {
      href: "/study-abroad/country",
      countryCode: "NL",
      countryName: "Netherlands",
      imageSrc: countryNetherlandsImage,
      imageAlt: "Amsterdam canals and architecture",
      bestFor: "English-taught Bachelors & Masters, bike-friendly cities",
      courses: "Logistics, Engineering, Economics, Design, Agriculture",
      highlight: "Orientation year visa for graduates to find work",
      ctaLabel: "Explore Netherlands Admissions",
    },
    {
      href: "/study-abroad/country",
      countryCode: "SE",
      countryName: "Sweden",
      imageSrc: countrySwedenImage,
      imageAlt: "Stockholm waterfront",
      bestFor: "Innovation-led degrees, sustainability focus, English programs",
      courses: "Engineering, IT, Life Sciences, Design, Business",
      highlight: "6-month job-seeking permit after degree completion",
      ctaLabel: "Explore Sweden Admissions",
    },
    {
      href: "/study-abroad/country",
      countryCode: "DK",
      countryName: "Denmark",
      imageSrc: countryDenmarkImage,
      imageAlt: "Copenhagen colourful waterfront",
      bestFor: "Problem-based learning, strong welfare, English-taught courses",
      courses: "Renewable Energy, Engineering, Life Sciences, Business",
      highlight: "Establishment card pathway for job search after studies",
      ctaLabel: "Explore Denmark Admissions",
    },
    {
      href: "/study-abroad/country/Italy",
      countryCode: "IT",
      countryName: "Italy",
      imageSrc: countryItalyImage,
      imageAlt: "Venice canals",
      bestFor: "Design, architecture, culinary arts, affordable living",
      courses: "Architecture, Fashion, Engineering, Tourism, Fine Arts",
      highlight: "Permesso di soggiorno for study-to-work transitions",
      ctaLabel: "Explore Italy Admissions",
    },
    {
      href: "/study-abroad/country",
      countryCode: "BE",
      countryName: "Belgium",
      imageSrc: countryBelgiumImage,
      imageAlt: "Brussels Grand Place architecture",
      bestFor: "EU institutions nearby, multilingual environment",
      courses: "International Relations, Business, Engineering, Political Science",
      highlight: "Orientation toward internships in Brussels & EU agencies",
      ctaLabel: "Explore Belgium Admissions",
    },
    {
      href: "/study-abroad/country",
      countryCode: "AT",
      countryName: "Austria",
      imageSrc:
        "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Vienna historic architecture and Alps",
      bestFor: "Central Europe hub, affordable living, strong hospitality sector",
      courses: "Music, Tourism, Engineering, Natural Sciences, Management",
      highlight: "Red-white-red card route for skilled graduates",
      ctaLabel: "Explore Austria Admissions",
    },
    {
      href: "/study-abroad/country",
      countryCode: "MT",
      countryName: "Malta",
      imageSrc: countryMaltaImage,
      imageAlt: "Malta coastline and cityscape",
      bestFor: "English-speaking EU country, Healthcare, Gaming",
      courses: "IT, Healthcare, Hospitality, Finance, Gaming",
      highlight: "English is an official language — no language barrier",
      ctaLabel: "Learn More",
    },
    {
      href: "/study-abroad/country",
      countryCode: "HU",
      countryName: "Hungary",
      imageSrc: countryHungaryImage,
      imageAlt: "Budapest Parliament and Danube",
      bestFor: "Medical, Dental, Veterinary, Pharmacy",
      courses: "MBBS, Dentistry, Pharmacy, Veterinary, Engineering",
      highlight: "Affordable English-taught medical programmes in Europe",
      ctaLabel: "Learn More",
    },
  ] satisfies StudyDestinationCard[],
};
