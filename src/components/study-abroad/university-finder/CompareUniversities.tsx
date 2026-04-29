/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import LetsStart from "@/components/immersion/LetsStart";
import { UniversityFinderBanner } from "@/components/study-abroad/university-finder/ViewComponents";
import { baseUrl } from "@/utils/config";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface University {
  universityId?: string;
  _id?: string;
  universityName: string;
  countryName?: string;
  Intake?: string[];
  Courses?: string[];
  TutionFee?: string;
  Language?: string;
  QSRanking?: string;
  Duration?: string;
  URL?: string;
  [key: string]: any;
}

function rowKeyForUniversity(u: University, index: number): string {
  const id = u?.universityId ?? u?._id;
  if (id != null && String(id) !== "") return String(id);
  return `compare-col-${index}`;
}

function formatArrayValue(raw: unknown[]) {
  const values = raw
    .map((item: unknown) =>
      typeof item === "object" && item !== null && "name" in item
        ? String((item as { name?: string }).name ?? "")
        : String(item ?? "")
    )
    .filter(Boolean);

  return values.join(", ") || "-";
}

const UniversityComparison: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
const idsParam = searchParams.get("ids"); 
const idsArray = idsParam ? idsParam.split(",") : [];
  const [universities, setUniversities] = useState<University[]>([]);

useEffect(() => {
  if (idsArray.length > 0) {
    fetchComparisonData(idsArray);
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [idsParam]);

const fetchComparisonData = async (ids: string[]) => {

  try {
    const res = await fetch(`${baseUrl}university/compareUniveristy`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids }),
    });

    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const data = await res.json();
    setUniversities(data.data || []);
  } catch (error) {
    console.error("Error fetching comparison data:", error);
  }
};
  const details = [
    { label: "Country", key: "countryName" },
    { label: "Intake", key: "Intake" },
    { label: "Courses", key: "courses" },
    { label: "Tuition Fees", key: "TutionFee" },
    { label: "Language", key: "Language" },
    { label: "QS Ranking", key: "QSRanking" },
    { label: "Duration", key: "duration" },
    { label: "URL", key: "webLink" },
  ];

  return (
    <>
      <UniversityFinderBanner />
      <ContainerWrapper className="py-12">
 
          {/* Back Button + Title */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => router.back()}
              className="bg-[#00999E] text-white px-4 py-2 rounded-md hover:bg-[#007b8f] transition"
            >
              Back
            </button>
            <h1 className="text-xl md:text-2xl font-semibold">
              Top University For You
            </h1>
          </div>

          {/* Table */}
          <div className="overflow-x-auto border-2 border-[#00999E] rounded-lg">
            <table className="min-w-full border-separate border-spacing-0">
              <thead>
                <tr className="bg-white border-b-2 border-[#00999E]">
                  <th className="sticky left-0 z-20 min-w-[180px] bg-white px-4 py-3 text-left text-lg font-semibold shadow-[4px_0_8px_-6px_rgba(0,0,0,0.35)] after:absolute after:right-0 after:top-0 after:h-full after:w-px after:bg-[#00999E]">
                    University Name
                  </th>
                  {universities.map((university, uIndex) => (
                    <th
                      key={rowKeyForUniversity(university, uIndex)}
                      className="px-4 py-3 border-r border-[#00999E] text-center text-[#00999E] font-semibold"
                    >
                      {university.universityName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {details.map((detail, index) => (
                  <tr
                    key={detail.label}
                    className={`${
                      index % 2 === 0 ? "bg-[#effdff]" : "bg-white"
                    } border-b border-[#00999E]`}
                  >
                    <td
                      className={`sticky left-0 z-10 min-w-[180px] px-4 py-2 font-semibold max-w-xs shadow-[4px_0_8px_-6px_rgba(0,0,0,0.35)] after:absolute after:right-0 after:top-0 after:h-full after:w-px after:bg-[#00999E] ${
                        index % 2 === 0 ? "bg-[#effdff]" : "bg-white"
                      }`}
                    >
                      {detail.label}
                    </td>
                    {universities.map((university, uIndex) => {
                      const raw = university[detail.key];
                      let value: string | number | null = Array.isArray(raw)
                        ? formatArrayValue(raw)
                        : raw ?? "-";

                      if (detail.key === "TutionFee") {
                        const currency = university.Currency || "";
                        value =
                          value !== "-"
                            ? `${currency ? currency + " " : ""}${value}`
                            : "-";
                      }

                      const cellKey = `${detail.label}-${rowKeyForUniversity(university, uIndex)}`;

                      return (
                        <td
                          key={cellKey}
                          className="px-4 py-2 text-center border-r border-[#00999E] max-w-xs break-words"
                        >
                          {detail.key === "webLink" && value !== "-" ? (
                            <a
                              href={String(value)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#00999E] underline hover:text-[#007b8f]"
                            >
                              {value}
                            </a>
                          ) : (
                            value
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
     
      </ContainerWrapper>
      <LetsStart />

    </>
  );
};

export default UniversityComparison;