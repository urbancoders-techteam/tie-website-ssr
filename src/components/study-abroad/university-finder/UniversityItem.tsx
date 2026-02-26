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
      window.open(university.webLink, "_blank");
    }
  };

  return (
    <div className="bg-[#effdff]  border-2 border-[#00999E] rounded-2xl p-4 sm:p-6 mb-5 w-full">
      <div className="flex flex-col">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-[#00999E] rounded-full h-10 w-10 flex items-center justify-center shadow">
              <Icon icon="fa:university" className="text-white text-xl" />
            </div>
            <h2 className="text-base sm:text-lg font-semibold">
              {university?.universityName}
            </h2>
          </div>
          <div className="text-sm text-yellow-500 mt-1 sm:mt-0">
            ⭐&nbsp;{university?.rating?.toFixed(1) ?? "0.0"}
          </div>
        </div>

        {/* Details */}
        <div className="mt-4 space-y-3">
          {
          [
            {
              label: "Courses:",
              value: university.courses?.join(", ") ?? "N/A",
              icon: "carbon:course",
            },
            {
              label: "Country:",
              value: university.countryName,
              icon: "subway:world",
            },
            {
              label: "Intakes:",
              value: university.intake?.join(", ") ?? "-",
              icon: "material-symbols:editor-choice-rounded",
            },
            {
              label: "Yearly Tuition Fees:",
              value: `${university.currency} ${university.tutionFee}`,
              icon: "mdi:currency-usd",
            },
            {
              label: "Highest Qualification:",
              value: university.highestQualification,
              icon: "hugeicons:global-education",
            },
            {
              label: "QS Ranking:",
              value: university.qsRanking,
              icon: "material-symbols:editor-choice-rounded",
            },
          ]
          .map((item, i) => (
            <div key={i} className="flex items-start sm:items-center gap-2 flex-wrap text-sm">
              <div className="bg-[#00999E] h-5 w-5 flex items-center justify-center rounded-full shadow mt-0.5">
                <Icon icon={item.icon} className="text-white text-xs" />
              </div>
              <span className="font-medium text-gray-600">{item.label}</span>
              <span className="text-black">{item.value}</span>
            </div>
          ))}

          {/* Actions: Shortlist and Compare */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-3">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isShortlisted}
                onChange={onShortlist}
                className="accent-[#00999E]"
              />
              <span className="text-sm">Shortlist</span>
            </label>

            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isCompared}
                onChange={onCompare}
                className="accent-[#00999E]"
              />
              <span className="text-sm">Compare</span>
            </label>
          </div>

          {/* More Details & Download Button */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mt-4">
            {university.webLink && (
              <span
                onClick={handleMoreDetailsClick}
                className="text-[#00999E] cursor-pointer text-sm underline"
              >
                More Details
              </span>
            )}
            <ButtonComponent text="Download" onClick={onDownload} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityItem;
