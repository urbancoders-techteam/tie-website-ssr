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
  isOpen: boolean;
  onToggle: () => void;
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
  isOpen,
  onToggle,
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
    <div className="mb-3 w-full overflow-hidden rounded-xl border-2 border-[#00999E] bg-[#effdff]">
      <div className="flex w-full items-center justify-between gap-3 border-b border-[#00999E]/25 px-3 py-2 sm:px-3.5">
        <button
          type="button"
          onClick={onToggle}
          className="flex min-w-0 flex-1 items-center gap-2 text-left"
          aria-expanded={isOpen}
        >
          <div className="bg-[#00999E] rounded-full h-8 w-8 shrink-0 flex items-center justify-center shadow-sm">
            <Icon icon="fa:university" className="text-white text-base" />
          </div>
          <div className="min-w-0">
            <h2 className="text-sm sm:text-[0.9375rem] font-semibold leading-snug line-clamp-2">
              {university?.universityName}
            </h2>
            <p className="mt-0.5 line-clamp-1 text-[11px] text-gray-600">
              {formatCourses(university?.courses)}
            </p>
          </div>
        </button>

        <div className="flex shrink-0 flex-wrap items-center gap-x-3 gap-y-1">
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
          <div className="text-xs text-amber-600 font-medium">
            ⭐ {university?.rating?.toFixed(1) ?? "0.0"}
          </div>
          <button
            type="button"
            onClick={onToggle}
            className={`text-[#00999E] transition-transform ${isOpen ? "rotate-180" : ""}`}
            aria-label={isOpen ? "Collapse university details" : "Expand university details"}
          >
            ▼
          </button>
        </div>
      </div>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <div className="min-h-0">
          <div className="px-3 pb-3 sm:px-3.5 sm:pb-3.5">
            <div className="mt-1.5 space-y-1.5">
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
      </div>
    </div>
  );
};

export default UniversityItem;
