/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@iconify/react";
import React from "react";
import { ButtonComponent } from "./ViewComponents";

interface UniversityItemProps {
  university: any;
  onCompare: () => void;
  isCompared: boolean;
  onShortlist: () => void;
  onDownload: () => void;
  isShortlisted: boolean;
}

function formatCourses(courses: any): string {
  if (!courses?.length) return "N/A";
  const parts = courses.map((c: any) =>
    typeof c === "string" ? c : c?.name ?? ""
  );
  return parts.filter(Boolean).join(", ") || "N/A";
}

const UniversityItem: React.FC<UniversityItemProps> = ({
  university,
  onCompare,
  isCompared,
  onShortlist,
  onDownload,
  isShortlisted,
}) => {
  const handleMoreDetailsClick = () => {
    if (university.webLink) {
      window.open(university.webLink, "_blank", "noopener,noreferrer");
    }
  };

  const rows = [
    {
      label: "Courses:",
      value: formatCourses(university?.courses),
      icon: "carbon:course",
    },
    {
      label: "Country:",
      value: university?.countryName ?? "—",
      icon: "subway:world",
    },
    {
      label: "Intakes:",
      value: university?.intake?.join(", ") ?? "-",
      icon: "material-symbols:editor-choice-rounded",
    },
    {
      label: "Tuition:",
      value: [university?.currency, university?.tutionFee]
        .filter(Boolean)
        .join(" ") || "—",
      icon: "mdi:currency-usd",
    },
    {
      label: "Qualification:",
      value: university?.highestQualification ?? "—",
      icon: "hugeicons:global-education",
    },
    {
      label: "QS:",
      value: university?.qsRanking ?? "—",
      icon: "material-symbols:editor-choice-rounded",
    },
  ];

  return (
    <div className="bg-[#effdff] border-2 border-[#00999E] rounded-xl p-3 sm:p-3.5 mb-3 w-full">
      <div className="flex flex-col gap-0.5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
          <div className="flex items-center gap-2 min-w-0">
            <div className="bg-[#00999E] rounded-full h-8 w-8 shrink-0 flex items-center justify-center shadow-sm">
              <Icon icon="fa:university" className="text-white text-base" />
            </div>
            <h2 className="text-sm sm:text-[0.9375rem] font-semibold leading-snug line-clamp-2 min-w-0">
              {university?.universityName}
            </h2>
          </div>
          <div className="text-xs text-amber-600 font-medium shrink-0 sm:ml-2">
            ⭐ {university?.rating?.toFixed(1) ?? "0.0"}
          </div>
        </div>

        <div className="mt-2 space-y-1.5">
          {rows.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-1.5 text-xs leading-snug"
            >
              <div className="bg-[#00999E] h-4 w-4 shrink-0 rounded-full flex items-center justify-center mt-px">
                <Icon icon={item.icon} className="text-white text-[0.625rem]" />
              </div>
              <span className="font-semibold text-gray-700 shrink-0">
                {item.label}
              </span>
              <span className="text-gray-900 break-words min-w-0">{item.value}</span>
            </div>
          ))}

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1">
            <label className="inline-flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={isShortlisted}
                onChange={onShortlist}
                className="accent-[#00999E] h-3.5 w-3.5 rounded"
              />
              <span className="text-xs font-semibold text-gray-800">Shortlist</span>
            </label>
            <label className="inline-flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={isCompared}
                onChange={onCompare}
                className="accent-[#00999E] h-3.5 w-3.5 rounded"
              />
              <span className="text-xs font-semibold text-gray-800">Compare</span>
            </label>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1.5 border-t border-[#00999E]/20">
            {university.webLink ? (
              <button
                type="button"
                onClick={handleMoreDetailsClick}
                className="text-[#00999E] text-xs font-semibold underline-offset-2 hover:underline"
              >
                More details
              </button>
            ) : null}
            <div className="ml-auto shrink-0">
              <ButtonComponent
                text="Download"
                onClick={onDownload}
                width="120px"
                height="32px"
                padding="6px 12px"
                fontSize="12px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityItem;
