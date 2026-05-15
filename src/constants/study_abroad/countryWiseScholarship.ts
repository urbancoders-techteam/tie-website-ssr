import { homePageBaseUrl } from "@/utils/config";

const countryUkImage = homePageBaseUrl + "Uk-home.jpg";
const countryIrelandImage = homePageBaseUrl + "Ireland-home.jpg";
const countryAustraliaImage = "/images/australia.jpg";
const countryFranceImage = homePageBaseUrl + "france-home.jpg";
const countryGermanyImage = homePageBaseUrl + "germany-home.jpg";
const countryCanadaImage = homePageBaseUrl + "canada-home.jpg";
const countryHungaryImage = homePageBaseUrl + "Hungary-home.jpg";
const countryItalyImage = homePageBaseUrl + "Italy-home.jpg";
const countryNetherlandsImage = homePageBaseUrl + "netherland-home.jpg";
const countrySwedenImage = homePageBaseUrl + "Sweden-home.jpg";

export type ScholarshipCountry = {
  country: string;
  code: string;
  imageSrc: string;
  imageAlt: string;
  scholarships: string[];
  ctaText: string;
};

export const countryWiseScholarshipContent = {
  eyebrow: "Country-Wise Scholarships",
  heading: {
    prefix: "Study Abroad",
    highlight: "Scholarships",
  },
  intro:
    "Scholarships for Indian students studying abroad can significantly reduce tuition fees and living costs. Hundreds of universities and governments worldwide offer fully-funded, partially-funded and merit-based scholarships to international students. Understanding country-specific and institution-specific funding opportunities is key to making overseas education affordable.",
  secondaryIntro:
    "Some of the most prestigious global scholarships available to Indian students include Chevening (UK), DAAD (Germany), Eiffel Excellence (France), Government of Ireland Scholarship, and the Australia Awards. Apart from these flagship programmes, individual universities offer their own entry scholarships, departmental awards, and early-application fee reductions. Here is a country-wise overview of the most relevant scholarships for Indian students in 2025-26.",
  countries: [
    {
      country: "United Kingdom",
      code: "GB",
      imageSrc: countryUkImage,
      imageAlt: "London skyline and Westminster Bridge in the United Kingdom",
      scholarships: [
        "Chevening Scholarship (UK Government fully-funded)",
        "University of Edinburgh Global Scholarship",
        "University of Warwick Merit Awards",
        "University of Manchester International Excellence Award",
        "Commonwealth Scholarship and Fellowship Plan",
      ],
      ctaText: "View UK Scholarships",
    },
    {
      country: "Germany",
      code: "DE",
      imageSrc: countryGermanyImage,
      imageAlt: "Historic government building in Germany",
      scholarships: [
        "DAAD Scholarship (German Academic Exchange Service)",
        "Heinrich Boll Foundation Scholarships",
        "Friedrich Ebert Stiftung Scholarship",
        "TU Munich Excellence Scholarships",
        "Konrad Adenauer Foundation Scholarship",
      ],
      ctaText: "View Germany Scholarships",
    },
    {
      country: "Ireland",
      code: "IE",
      imageSrc: countryIrelandImage,
      imageAlt: "City skyline in Ireland",
      scholarships: [
        "Government of Ireland International Education Scholarship",
        "University College Dublin Global Excellence Award",
        "Trinity College Dublin Postgraduate Research Bursary",
        "NUI Galway International Student Scholarship",
        "DCU Access Scholarship for International Students",
      ],
      ctaText: "View Ireland Scholarships",
    },
    {
      country: "Australia",
      code: "AU",
      imageSrc: countryAustraliaImage,
      imageAlt: "Sydney Harbour in Australia",
      scholarships: [
        "Australia Awards Scholarships",
        "Monash International Merit Scholarship",
        "University of Melbourne Graduate Research Scholarship",
        "ANU Chancellor's International Scholarship",
        "University of Sydney International Scholarship",
      ],
      ctaText: "View Australia Scholarships",
    },
    {
      country: "Canada",
      code: "CA",
      imageSrc: countryCanadaImage,
      imageAlt: "Toronto skyline in Canada",
      scholarships: [
        "Vanier Canada Graduate Scholarships",
        "University of Toronto Lester B. Pearson Scholarship",
        "UBC International Scholars Program",
        "York University International Entrance Scholarship",
        "University of Waterloo International Funding",
      ],
      ctaText: "View Canada Scholarships",
    },
    {
      country: "France",
      code: "FR",
      imageSrc: countryFranceImage,
      imageAlt: "Eiffel Tower in Paris, France",
      scholarships: [
        "Eiffel Excellence Scholarship Programme",
        "Charpak Master's Scholarship",
        "Emile Boutmy Scholarship",
        "Campus France Scholarships",
        "Paris-Saclay International Master's Scholarship",
      ],
      ctaText: "View France Scholarships",
    },
    {
      country: "Netherlands",
      code: "NL",
      imageSrc: countryNetherlandsImage,
      imageAlt: "Amsterdam canal and city architecture in the Netherlands",
      scholarships: [
        "Holland Scholarship (Dutch Government)",
        "Amsterdam Excellence Scholarship (AES)",
        "Leiden University Excellence Scholarship",
        "TU Delft Excellence Fellowship Programme",
        "Erasmus University Rotterdam Scholarship",
      ],
      ctaText: "View Netherlands Scholarships",
    },
    {
      country: "Sweden",
      code: "SE",
      imageSrc: countrySwedenImage,
      imageAlt: "Historic public square and buildings in Sweden",
      scholarships: [
        "Swedish Institute Scholarship for Global Professionals",
        "KTH Royal Institute of Technology Scholarships",
        "Lund University Global Scholarship",
        "University of Gothenburg International Scholarship",
        "Stockholm University Baltic Sea Region Scholarship",
      ],
      ctaText: "View Sweden Scholarships",
    },
    {
      country: "Italy",
      code: "IT",
      imageSrc: countryItalyImage,
      imageAlt: "Colosseum in Rome, Italy",
      scholarships: [
        "Italian Government Scholarship for Foreign Students",
        "University of Bologna International Scholarship",
        "Bocconi University Merit and International Awards",
        "Padua International Excellence Scholarship",
        "Politecnico di Milano International Grants",
      ],
      ctaText: "View Italy Scholarships",
    },
    {
      country: "Hungary",
      code: "HU",
      imageSrc: countryHungaryImage,
      imageAlt: "Budapest city view in Hungary",
      scholarships: [
        "Stipendium Hungaricum Scholarship Programme",
        "University of Szeged Scholarship Awards",
        "Bilateral State Scholarships",
        "Central European University Financial Aid",
        "Pazmany Peter Catholic University Scholarships",
      ],
      ctaText: "View Hungary Scholarships",
    },
  ] satisfies ScholarshipCountry[],
  primaryCta: "Find Scholarships for My Profile",
};
