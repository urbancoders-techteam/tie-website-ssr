import Link from "next/link";
import Image from "next/image";
import ContainerWrapper from "@/components/ContainerWrapper";
import { countryData } from "@/constants/mbbs";

type CountryCard = {
  code: string;
  country: string;
  tagline: string;
  description: string;
  chips: string[];
  href: string;
};

type CountryDataItem = {
  title: string;
  image: string;
};

const countryFlags = new Map(
  (countryData as CountryDataItem[]).map((item) => [item.title, item.image])
);

const getFlagUrl = (countryCode: string) =>
  `https://flagcdn.com/w160/${countryCode.toLowerCase()}.png`;

const getCountryFlag = (countryName: string, countryCode: string) =>
  countryFlags.get(countryName) ?? getFlagUrl(countryCode);

const countries: CountryCard[] = [
  {
    code: "RU",
    country: "Russia",
    tagline: "MOST POPULAR - 10,000+ INDIANS ENROLLED",
    description:
      "The number one MBBS destination for Indian students. Two-hundred-year-old medical universities, rigorous English-medium programs, and the lowest annual fees in Europe - backed by full NMC approval.",
    chips: ["₹3-6L/year", "6 years", "NMC Approved"],
    href: "/mbbs/abroad/russia",
  },
  {
    code: "BD",
    country: "Bangladesh",
    tagline: "HIGHEST FMGE ALIGNMENT - CULTURALLY CLOSEST",
    description:
      "India-identical curriculum, zero language barrier, and the highest FMGE alignment of any destination. Culturally closest option for students from West Bengal, Bihar, and Northeast India.",
    chips: ["₹18-25L total", "6 years", "SAARC-Friendly"],
    href: "/mbbs/abroad/bangladesh",
  },
  {
    code: "CA",
    country: "Canada",
    tagline: "GLOBAL RECOGNITION - RESEARCH-LED",
    description:
      "World-ranked medical schools with cutting-edge research and unparalleled clinical training. Opens doors to practice across North America, Europe, and beyond.",
    chips: ["Top-Ranked", "USMLE/LMCC", "Post-Study Work"],
    href: "/mbbs/abroad/canada",
  },
  {
    code: "DE",
    country: "Germany",
    tagline: "NEAR-ZERO TUITION - EUROPEAN STANDARD",
    description:
      "Public university MBBS at near-zero tuition fees. A European MD, world-class infrastructure, and one of the clearest pathways to EU permanent residency.",
    chips: ["Near-Zero Fees", "EU Standard", "PR-Friendly"],
    href: "/mbbs/abroad/germany",
  },
  {
    code: "PH",
    country: "Philippines",
    tagline: "TOP FMGE RATES - US CURRICULUM",
    description:
      "American-pattern BS+MD curriculum, the highest FMGE pass rates among affordable destinations (30-35%), full English instruction, and low living costs.",
    chips: ["₹20-30L total", "US Curriculum", "English Only"],
    href: "/mbbs/abroad/philippines",
  },
  {
    code: "AU",
    country: "Australia",
    tagline: "WORLD-CLASS - TOP-50 RANKED",
    description:
      "Consistently top-50 globally ranked medical schools, exceptional clinical diversity, and an established post-study work pathway for international graduates.",
    chips: ["Top-50 Ranked", "AMC Pathway", "Post-Study Visa"],
    href: "/mbbs/abroad/australia",
  },
  {
    code: "NP",
    country: "Nepal",
    tagline: "CLOSEST - NO VISA FOR INDIANS",
    description:
      "India-aligned curriculum, no visa required for Indian nationals, the lowest cost of living of any destination, and cultural familiarity that eases the entire transition.",
    chips: ["₹28-35L total", "No Visa (India)", "6 years"],
    href: "/mbbs/abroad/nepal",
  },
  {
    code: "US",
    country: "USA",
    tagline: "PINNACLE OF MEDICAL EDUCATION",
    description:
      "The world's most prestigious medical schools. An MD from a US institution opens every career door globally - research, academic medicine, and clinical practice.",
    chips: ["Top Global Rank", "4-year MD", "USMLE"],
    href: "/mbbs/abroad/usa",
  },
  {
    code: "GB",
    country: "United Kingdom",
    tagline: "LEGACY EXCELLENCE - PLAB PATHWAY",
    description:
      "Russell Group MBBS programs, NHS clinical exposure, and a clear PLAB registration pathway for students targeting a career in British healthcare.",
    chips: ["5-year MBBS", "PLAB", "NHS"],
    href: "/mbbs/abroad/uk",
  },
  {
    code: "KZ",
    country: "Kazakhstan",
    tagline: "MODERN INFRASTRUCTURE - 70+ NATIONALITIES",
    description:
      "Modern campuses in Almaty and Astana, English-medium NMC-compliant programs, a 5+1 structured curriculum, and a growing, safe Indian student community.",
    chips: ["₹30-40L total", "NMC Approved", "5+1 years"],
    href: "/mbbs/abroad/kazakhstan",
  },
  {
    code: "KG",
    country: "Kyrgyzstan",
    tagline: "MOST AFFORDABLE GLOBALLY",
    description:
      "The most budget-friendly MBBS destination worldwide. Annual tuition from USD 2,500, strong Indian community, Indian food available, and multiple NMC-listed universities.",
    chips: ["₹15-25L total", "NMC Listed", "Indian Community"],
    href: "/mbbs/abroad/kyrgyzstan",
  },
  {
    code: "UZ",
    country: "Uzbekistan",
    tagline: "FASTEST GROWING - GOVERNMENT-BACKED",
    description:
      "One of the fastest-growing MBBS destinations in Central Asia. Government-backed infrastructure investment, English-medium programs, and low living costs.",
    chips: ["Affordable", "English Medium", "NMC Eligible"],
    href: "/mbbs/abroad/uzbekistan",
  },
];

export default function CountryWeWorkWith() {
  return (
    <section className="bg-white py-12 md:py-16">
      <ContainerWrapper>
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#00999E]">
              Countries We Work With
            </h2>
            <div className="h-1 w-28 bg-[#F4C542] rounded-full mx-auto mt-3" />
            <p className="text-[#5D6678] text-sm md:text-xl leading-relaxed max-w-4xl mx-auto mt-5">
              Each destination is selected for NMC compliance, cost-effectiveness, academic
              quality, and student safety. Find your pathway below.
            </p>
          </div>

          {/* Mobile + tablet slider */}
          <div className="lg:hidden mt-10 -mx-1 px-1 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-4 pb-1">
              {countries.map((item) => (
                <Link
                  key={item.code}
                  href={item.href}
                  className="snap-start shrink-0 w-[85%] sm:w-[60%] block rounded-[10px] border border-[#D9E2EF] bg-white p-5 shadow-[0_8px_22px_rgba(16,24,40,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2D62CC] hover:shadow-[0_16px_28px_rgba(16,24,40,0.16)]"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={getCountryFlag(item.country, item.code)}
                      alt={`${item.country} flag`}
                      width={50}
                      height={50}
                      className="h-[50px] w-[50px] rounded-lg object-cover border border-[#D9E2EF]"
                    />
                    <div className="text-[30px] leading-none text-[#00999E] font-semibold">{item.code}</div>
                  </div>
                  <h3 className="text-[31px] text-[#173A73] font-semibold mt-3 leading-tight">{item.country}</h3>
                  <p className="text-[11px] tracking-[0.5px] text-[#FF8A00] font-semibold mt-2 uppercase leading-relaxed">
                    {item.tagline}
                  </p>
                  <p className="text-[13px] text-[#5B667A] leading-relaxed mt-3">{item.description}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.chips.map((chip) => (
                      <span
                        key={chip}
                        className="inline-flex items-center rounded-full bg-[#E8F0FF] text-[#2D62CC] text-[11px] font-medium px-2.5 py-1"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  <span className="inline-block mt-4 text-[14px] font-medium text-[#2D62CC] transition-colors">
                    Read More →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Laptop + desktop grid */}
          <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
            {countries.map((item) => (
              <Link
                key={item.code}
                href={item.href}
                className="block rounded-[10px] border border-[#D9E2EF] bg-white p-5 shadow-[0_8px_22px_rgba(16,24,40,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2D62CC] hover:shadow-[0_16px_28px_rgba(16,24,40,0.16)]"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={getCountryFlag(item.country, item.code)}
                    alt={`${item.country} flag`}
                    width={50}
                    height={50}
                    className="h-[50px] w-[50px] rounded-xl object-cover border border-[#D9E2EF]"
                  />
                  <div className="text-[30px] leading-none text-[#00999E] font-semibold">{item.code}</div>
                </div>
                <h3 className="text-[31px] text-[#173A73] font-semibold mt-3 leading-tight">{item.country}</h3>
                <p className="text-[11px] tracking-[0.5px] text-[#FF8A00] font-semibold mt-2 uppercase leading-relaxed">
                  {item.tagline}
                </p>
                <p className="text-[13px] text-[#5B667A] leading-relaxed mt-3">{item.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {item.chips.map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center rounded-full bg-[#E8F0FF] text-[#2D62CC] text-[11px] font-medium px-2.5 py-1"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                <span className="inline-block mt-4 text-[14px] font-medium text-[#2D62CC] transition-colors">
                  Read More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
