'use client'
import React, { useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DownloadIcon from "@mui/icons-material/Download";

interface FeeStructureOption {
  nationality: string;
  file: string | null;
}

interface Props {
  data: {
    map(arg0: (option: { nationality: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<null>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<null>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, idx: React.Key | null | undefined) => React.JSX.Element): React.ReactNode;
    find(arg0: (opt: { nationality: string; }) => boolean): unknown;
    feeStructure: FeeStructureOption[];
  };
}

const NationalityBrochureDownload: React.FC<Props> = ({ data }) => {
  const nationalityOptions = data || [];
  
  const [selected, setSelected] = useState<FeeStructureOption | null>(null);

  const handleDownload = () => {
    if (selected?.file) {
      window.open(selected.file, "_blank");
      setSelected(null);
    }
  };

  return (
    <div className="text-center py-12 px-4">
    
        <select
          className=" w-[400px]  p-3 border border-[#00999e] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00999e]"
          onChange={(e) => {
            const selectedOption = nationalityOptions.find(
              (opt: { nationality: string; }) => opt.nationality === e.target.value
            );
            setSelected(selectedOption as FeeStructureOption | null);
          }}
          value={selected?.nationality || ""}
        >
          <option value="">Select Your Nationality</option>
          {nationalityOptions.map((option: { nationality: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<null>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<null>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, idx: React.Key | null | undefined) => (
            <option key={idx} value={option?.nationality as string}>
              {option.nationality}
            </option>
          ))}
        </select>
    

      {selected && (
        <>
          {/* Dashed connector with arrow */}
          <div className="relative h-10 my-6 flex items-center justify-center">
            <div
              className="absolute w-px h-full bg-[length:1px_8px] bg-repeat-y bg-gradient-to-b from-[#00999e] to-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, #00999E 50%, transparent 50%)",
              }}
            ></div>
            <ArrowDownwardIcon
              className="absolute bottom-[-18px] text-[#00999e] bg-white rounded-full p-1"
              style={{ fontSize: "28px" }}
            />
          </div>

          {/* Card */}
          <div className="bg-white border-2 border-[#00999e] rounded-xl shadow-xl w-[400px] mx-auto p-6 transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#00999e] mb-2">
              {selected.nationality} Fee Structure
            </h3>
            <hr className="my-3 border-gray-300" />
            {selected?.file ? (
              <>
                <p className="text-sm text-gray-600 mb-4">
                  Download the fee structure for {selected.nationality}.
                </p>
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 bg-[#00999e] hover:bg-[#00999e] text-white font-medium py-2 px-4 rounded-md transition"
                  >
                    <DownloadIcon fontSize="small" />
                    Download Fee Structure
                  </button>
                </div>
              </>
            ) : (
              <p className="text-sm text-red-600">No file available.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default NationalityBrochureDownload;
