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
      imageSrc:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80",
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
      imageSrc:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=900&q=80",
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
      imageSrc:
        "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=900&q=80",
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
      imageSrc:
        "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=900&q=80",
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
      imageSrc:
        "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=900&q=80",
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
      imageSrc:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80",
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
      imageSrc:
        "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=900&q=80",
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
      imageSrc:
        "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=900&q=80",
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
      imageSrc:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=900&q=80",
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
      imageSrc:
        "https://images.unsplash.com/photo-1549877452-9c387954fbc2?auto=format&fit=crop&w=900&q=80",
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
