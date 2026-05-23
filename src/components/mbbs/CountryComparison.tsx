"use client";

import ContainerWrapper from "@/components/ContainerWrapper";

type Row = {
  code: string;
  country: string;
  totalCost: string;
  duration: string;
  medium: string;
  fmgeAlignment: string;
  nmcStatus: string;
  bestFor: string;
  mediumClassName?: string;
  nmcClassName?: string;
};

const rows: Row[] = [
  {
    code: "RU",
    country: "Russia",
    totalCost: "₹18 - 36L total",
    duration: "6 years",
    medium: "English",
    fmgeAlignment: "★★★☆☆ Moderate",
    nmcStatus: "NMC Approved",
    bestFor: "Budget + Value",
    mediumClassName: "bg-[#E7FAEF] text-[#13915a]",
    nmcClassName: "bg-[#ebfbfb] text-[#00999E]",
  },
  {
    code: "BD",
    country: "Bangladesh",
    totalCost: "₹18 - 25L total",
    duration: "6 years",
    medium: "English",
    fmgeAlignment: "★★★★★ Highest",
    nmcStatus: "NMC Recognised",
    bestFor: "FMGE Success",
    mediumClassName: "bg-[#E7FAEF] text-[#13915a]",
    nmcClassName: "bg-[#ebfbfb] text-[#00999E]",
  },
  {
    code: "PH",
    country: "Philippines",
    totalCost: "₹20 - 30L total",
    duration: "5 years",
    medium: "English",
    fmgeAlignment: "★★★★☆ Very High",
    nmcStatus: "NMC Listed",
    bestFor: "FMGE + USMLE",
    mediumClassName: "bg-[#E7FAEF] text-[#13915a]",
    nmcClassName: "bg-[#ebfbfb] text-[#00999E]",
  },
  {
    code: "KG",
    country: "Kyrgyzstan",
    totalCost: "₹15 - 25L total",
    duration: "6 years",
    medium: "English",
    fmgeAlignment: "★★★☆☆ Moderate",
    nmcStatus: "NMC Listed",
    bestFor: "Most Affordable",
    mediumClassName: "bg-[#E7FAEF] text-[#13915a]",
    nmcClassName: "bg-[#ebfbfb] text-[#00999E]",
  },
  {
    code: "KZ",
    country: "Kazakhstan",
    totalCost: "₹30 - 40L total",
    duration: "6 years",
    medium: "English",
    fmgeAlignment: "★★★☆☆ Moderate",
    nmcStatus: "NMC Approved",
    bestFor: "Modern Campus",
    mediumClassName: "bg-[#E7FAEF] text-[#13915a]",
    nmcClassName: "bg-[#ebfbfb] text-[#00999E]",
  },
  {
    code: "UZ",
    country: "Uzbekistan",
    totalCost: "₹20 - 30L total",
    duration: "6 years",
    medium: "English",
    fmgeAlignment: "★★★☆☆ Moderate",
    nmcStatus: "NMC Eligible",
    bestFor: "Emerging + Budget",
    mediumClassName: "bg-[#E7FAEF] text-[#13915a]",
    nmcClassName: "bg-[#FFF4D8] text-[#AD7600]",
  },
  {
    code: "NP",
    country: "Nepal",
    totalCost: "₹28 - 35L total",
    duration: "6 years",
    medium: "English",
    fmgeAlignment: "★★★★☆ High",
    nmcStatus: "NMC Recognised",
    bestFor: "Proximity + No Visa",
    mediumClassName: "bg-[#E7FAEF] text-[#13915a]",
    nmcClassName: "bg-[#ebfbfb] text-[#00999E]",
  },
  {
    code: "DE",
    country: "Germany",
    totalCost: "Near-zero tuition",
    duration: "6 years",
    medium: "German (B2/C1)",
    fmgeAlignment: "N/A — EU Practice",
    nmcStatus: "EU Standard",
    bestFor: "Europe + PR",
    mediumClassName: "bg-[#FFF4D8] text-[#AD7600]",
    nmcClassName: "bg-[#ebfbfb] text-[#00999E]",
  },
  {
    code: "GB",
    country: "United Kingdom",
    totalCost: "₹80L - 1.5Cr total",
    duration: "5 years",
    medium: "English",
    fmgeAlignment: "N/A — PLAB Route",
    nmcStatus: "GMC Accredited",
    bestFor: "Prestige + NHS",
    mediumClassName: "bg-[#E7FAEF] text-[#13915a]",
    nmcClassName: "bg-[#ebfbfb] text-[#00999E]",
  },
  {
    code: "CA",
    country: "Canada",
    totalCost: "₹80L - 1.2Cr total",
    duration: "4 years (MD)",
    medium: "English",
    fmgeAlignment: "N/A — LMCC Route",
    nmcStatus: "CACMS Accredited",
    bestFor: "North America Career",
    mediumClassName: "bg-[#E7FAEF] text-[#13915a]",
    nmcClassName: "bg-[#ebfbfb] text-[#00999E]",
  },
  {
    code: "US",
    country: "USA",
    totalCost: "₹1Cr - 2Cr+ total",
    duration: "4 years (MD)",
    medium: "English",
    fmgeAlignment: "N/A — USMLE Route",
    nmcStatus: "LCME Accredited",
    bestFor: "Global Prestige",
    mediumClassName: "bg-[#E7FAEF] text-[#13915a]",
    nmcClassName: "bg-[#ebfbfb] text-[#00999E]",
  },
  {
    code: "AU",
    country: "Australia",
    totalCost: "₹90L - 1.5Cr total",
    duration: "4-6 years",
    medium: "English",
    fmgeAlignment: "N/A — AMC Route",
    nmcStatus: "AMC Accredited",
    bestFor: "Premium + Visa",
    mediumClassName: "bg-[#E7FAEF] text-[#13915a]",
    nmcClassName: "bg-[#ebfbfb] text-[#00999E]",
  },
];

export default function CountryComparison() {
  return (
    <section className="py-12 md:py-16">
      <ContainerWrapper>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#00999E]">
              MBBS Abroad Country Comparison
            </h2>
            <div className="h-1 w-28 bg-[#F4C542] rounded-full mx-auto mt-3" />
            <p className="text-[#626C7C] text-sm sm:text-base md:text-xl leading-relaxed max-w-5xl mx-auto mt-5">
              Choosing the best countries for doing MBBS depends on your budget, NEET score, and
              licensing goals. Here&apos;s a data-driven comparison of all 12 destinations — fees,
              FMGE rates, NMC status, and medium of instruction.
            </p>
          </div>

          <div className="mt-10 rounded-[10px] border border-[#D9E2EF] overflow-x-auto lg:overflow-visible bg-white shadow-sm">
            <table className="w-full min-w-[980px] rounded-[10px] lg:min-w-0 table-auto lg:table-fixed text-[12px] sm:text-[13px] lg:text-[12px] xl:text-sm">
              <caption className="sr-only">
                MBBS abroad country comparison — fees, FMGE rates and NMC status for Indian students 2026-27
              </caption>
              <thead>
                <tr className="bg-[#00999E] rounded-[10px] text-white text-left">
                  <th className="px-3 sm:px-4 lg:px-2 xl:px-3 py-5 text-[11px] sm:text-xs font-bold uppercase tracking-wide">
                    Country
                  </th>
                  <th className="px-3 sm:px-4 lg:px-2 xl:px-3 py-5 text-[11px] sm:text-xs font-bold uppercase tracking-wide">
                    Total Cost (Approx.)
                  </th>
                  <th className="px-3 sm:px-4 lg:px-2 xl:px-3 py-5 text-[11px] sm:text-xs font-bold uppercase tracking-wide">
                    Duration
                  </th>
                  <th className="px-3 sm:px-4 lg:px-2 xl:px-3 py-5 text-[11px] sm:text-xs font-bold uppercase tracking-wide">
                    Medium
                  </th>
                  <th className="px-3 sm:px-4 lg:px-2 xl:px-3 py-5 text-[11px] sm:text-xs font-bold uppercase tracking-wide">
                    FMGE Alignment
                  </th>
                  <th className="px-3 sm:px-4 lg:px-2 xl:px-3 py-5 text-[11px] sm:text-xs font-bold uppercase tracking-wide">
                    NMC Status
                  </th>
                  <th className="px-3 sm:px-4 lg:px-2 xl:px-3 py-5 text-[11px] sm:text-xs font-bold uppercase tracking-wide">
                    Best For
                  </th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row.code}
                    className={index % 2 === 0 ? "bg-white" : "bg-[#F3F6FC]"}
                  >
                    <td className="px-3 sm:px-4 lg:px-2 xl:px-3 py-3.5 text-[#22324D] text-sm lg:text-[13px] xl:text-[15px] font-semibold whitespace-nowrap lg:whitespace-normal">
                      <span className="mr-1.5 text-[#00999E] font-bold">{row.code}</span>
                      {row.country}
                    </td>
                    <td className="px-3 sm:px-4 lg:px-2 xl:px-3 py-3.5 text-[#4B5565] text-[13px] lg:text-[12px] xl:text-[14px] whitespace-nowrap lg:whitespace-normal leading-snug">
                      {row.totalCost}
                    </td>
                    <td className="px-3 sm:px-4 lg:px-2 xl:px-3 py-3.5 text-[#4B5565] text-[13px] lg:text-[12px] xl:text-[14px] whitespace-nowrap">
                      {row.duration}
                    </td>
                    <td className="px-3 sm:px-4 lg:px-2 xl:px-3 py-3.5 whitespace-nowrap">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${row.mediumClassName}`}
                      >
                        {row.medium}
                      </span>
                    </td>
                    <td className="px-3 sm:px-4 lg:px-2 xl:px-3 py-3.5 text-[#4B5565] text-[13px] lg:text-[12px] xl:text-[14px] whitespace-nowrap lg:whitespace-normal leading-snug">
                      {row.fmgeAlignment}
                    </td>
                    <td className="px-3 sm:px-4 lg:px-2 xl:px-3 py-3.5 whitespace-nowrap">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${row.nmcClassName}`}
                      >
                        {row.nmcStatus}
                      </span>
                    </td>
                    <td className="px-3 sm:px-4 lg:px-2 xl:px-3 py-3.5 text-[#4B5565] text-[13px] lg:text-[12px] xl:text-[14px] whitespace-nowrap lg:whitespace-normal leading-snug">
                      {row.bestFor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
