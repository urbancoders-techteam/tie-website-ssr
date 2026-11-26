// @ts-nocheck


const imageBaseUrl = process.env.REACT_APP_IMAGE_URL

//australia
const ausskilled = imageBaseUrl + "Ausimmi/skilledvisa.png";
const ausemployer = imageBaseUrl + "Ausimmi/employer.png";
const ausfamily = imageBaseUrl + "Ausimmi/family.png";
const ausbusiness = imageBaseUrl + "Ausimmi/business.png";
const ausworking = imageBaseUrl + "Ausimmi/holiday.png";


//canada
const canexpress = imageBaseUrl + "Canimmi/express.png";
const canpnp = imageBaseUrl + "Canimmi/pnp.png";
const canfamily = imageBaseUrl + "Canimmi/family.png";
const canwork = imageBaseUrl + "Canimmi/work.png";
const canbusiness = imageBaseUrl + "Canimmi/business.png";
const canwhp = imageBaseUrl + "Canimmi/whp.png";


//uk
const ukskilled = imageBaseUrl + "ukimmi/skilled.png";
const ukfamily = imageBaseUrl + "ukimmi/family.png";
const ukinvestor = imageBaseUrl + "ukimmi/investor.png";
const ukentrepreneur = imageBaseUrl + "ukimmi/entrepreneur.png";
const ukwork = imageBaseUrl + "ukimmi/work.png";


const AustraliaImmigrationVisa = {
  heading: "Key Visa Categories in Australia",
  item: [
    {
      title: "Skilled Visas",
      items: [
        "Skilled Independent visa (subclass 189): For skilled workers not sponsored by an employer or family member.",
        "Skilled Nominated visa (subclass 190): For skilled workers nominated by a state or territory government.",
        "Work Regional (Provisional) visa (subclass 491): For skilled workers nominated by a state or territory government or sponsored by an eligible family member to work in regional Australia."
      ],
      img: ausskilled
    },
    {
      title: "Employer-Sponsored Visas",
      items: [
        "Employer Nomination Scheme (subclass 186): For skilled workers nominated by an approved Australian employer.",
        "Temporary Skill Shortage visa (subclass 482): For skilled workers nominated by an approved Australian employer to fill positions where no local worker is available.",
        "Regional Sponsored Migration Scheme (subclass 187): For skilled workers nominated by an employer in regional Australia."
      ],
      img: ausemployer
    },
    {
      title: "Family Visas",
      items: [
        "Partner visas (subclass 309/100 or 820/801): For spouses or de facto partners of Australian citizens, permanent residents, or eligible New Zealand citizens.",
        "Parent visas: For parents of Australian citizens, permanent residents, or eligible New Zealand citizens.",
        "Child visas: For dependent children of Australian citizens, permanent residents, or eligible New Zealand citizens."
      ],
      img: ausfamily
    },
    {
      title: "Business and Investment Visas",
      items: [
        "Business Innovation and Investment (Provisional) visa (subclass 188): For investors, entrepreneurs, and business owners interested in establishing or managing a business in Australia.",
        "Business Talent (Permanent) visa (subclass 132): For high-caliber business owners or entrepreneurs nominated by an Australian state or territory government."
      ],
      img: ausbusiness
    },
    // {
    //     title: "Student Visas",
    //     items: [
    //         "Student visa (subclass 500): For international students enrolled in a course of study in Australia."
    //     ],
    //     img: ausstudent,
    // },
    // {
    //     title: "Visitor Visas",
    //     items: [
    //         "Visitor visa (subclass 600): For individuals visiting Australia for tourism, business, or visiting family and friends."
    //     ],
    //     img: ausvisitor,
    // },
    {
      title: "Working Holiday Visas",
      items: [
        "Working Holiday visa (subclass 417) and Work and Holiday visa (subclass 462): For young adults aged 18 to 30 (or 35 for some countries) to work and travel in Australia for up to 12 months."
      ],
      img: ausworking
    }
  ]
};
const CanadaImmigrationVisa = {
  heading: "Key Visa Categories in Canada",
  item: [
    {
      title: "Express Entry System",
      items: [
        "Federal Skilled Worker Program (FSWP)",
        "Federal Skilled Trades Program (FSTP)",
        "Canadian Experience Class (CEC)"
      ],
      img: canexpress
    },
    {
      title: "Provincial Nominee Program (PNP):",
      items: [
        "Ontario Immigrant Nominee Program (OINP)",
        "Saskatchewan Immigrant Nominee Program (SINP)",
        "British Columbia Provincial Nominee Program (BC PNP)",
        "Alberta Immigrant Nominee Program (AINP)"
      ],
      img: canpnp
    },
    {
      title: "Family Sponsorship",
      items: [
        "Spouse or common-law partner sponsorship",
        "Parent and grandparent sponsorship",
        "Dependent child sponsorship"
      ],
      img: canfamily
    },
    // {
    //     title: "Study Permits",
    //     items: [
    //         "For Indian students wishing to study at Canadian universities, colleges, or other educational institutions",

    //     ],
    //     img: canstudent,
    // },
    {
      title: "Work Permits",
      items: [
        "Temporary Foreign Worker Program (TFWP)",
        "International Mobility Program (IMP)"
      ],
      img: canwork
    },
    {
      title: "Business Immigration",
      items: [
        "Start-up Visa Program",
        "Self-employed Persons Program",
        "Entrepreneur Immigration Program (available in some provinces)"
      ],
      img: canbusiness
    },
    // {
    //     title: "Visitor Visa",
    //     items: [
    //         "For Indians wishing to visit Canada for tourism, visiting family and friends, or attending business meetings or conferences.",

    //     ],
    //     img: canvisitor,
    // },
    {
      title: "Working Holiday Visa",
      items: [
        "Allows young Indians (18-35 years old) to work and travel in Canada for up to 12 or 24 months, depending on the agreement between Canada and India"
      ],
      img: canwhp
    }
  ]
};

const UkImmigrationVisa = {
  heading: "Key Visa Categories in United Kingdom",
  item: [
    {
      title: "Skilled Worker Visa",
      items: [
        "For individuals with a job offer from a UK employer.",
        "Requires a job at an appropriate skill level and English proficiency.",
        "Allows for long-term work and potential path to permanent residency."
      ],
      img: ukskilled
    },
    // {
    //     title: "Student Visa (Tier 4)",
    //     items: [
    //         "For students accepted into a UK educational institution.",
    //         "Requires proof of acceptance and sufficient funds.",
    //         "Allows for study and part-time work during the course."
    //     ],
    //     img: ukstudent,
    // },
    {
      title: "Family Visa",
      items: [
        "For individuals joining family members already in the UK.",
        "Includes spouse, partner, child, parent, or relative who will provide long-term care.",
        "Requires proof of relationship and financial support."
      ],
      img: ukfamily
    },
    {
      title: "Tier 1 (Investor) Visa",
      items: [
        "For individuals who want to invest £2,000,000 or more in the UK.",
        "Allows for business activities and long-term residence.",
        "Provides a pathway to permanent residency."
      ],
      img: ukinvestor
    },
    {
      title: "Tier 1 (Entrepreneur) Visa",
      items: [
        "For individuals starting or running a business in the UK.",
        "Requires access to at least £50,000 in investment funds.",
        "Allows for business operation and potential path to permanent residency."
      ],
      img: ukentrepreneur
    },
    {
      title: "Tier 5 (Temporary Worker) Visa",
      items: [
        "For temporary work in specific roles such as charity work, sports, or creative fields.",
        "Requires a certificate of sponsorship from a licensed employer.",
        "Valid for short-term work up to 12-24 months, depending on the category."
      ],
      img: ukwork
    }
    // {
    //     title: "Visitor Visa",
    //     items: [
    //         "For short visits up to six months for tourism, business, or visiting family.",
    //         "Requires proof of intent to return home and sufficient funds for the stay.",
    //         "Does not permit long-term residence or work."
    //     ],
    //     img: ukvisitor,
    // },
  ]
};
export { CanadaImmigrationVisa, AustraliaImmigrationVisa, UkImmigrationVisa };
