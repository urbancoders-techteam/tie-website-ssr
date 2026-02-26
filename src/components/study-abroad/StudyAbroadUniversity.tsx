"use client";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Image from "next/image";
import React, { useState } from "react";

interface FeeStructureOption {
  englishProficiencyTest: string;
  approximateAnnualFees: string;
  eligibilityCriteria: string;
  courses: string;
  file: string | null;
}

interface Props {
  data: {
    map(
      arg0: (
        option: {
          courses:
            | string
            | number
            | bigint
            | boolean
            | React.ReactElement<
                unknown,
                string | React.JSXElementConstructor<null>
              >
            | Iterable<React.ReactNode>
            | Promise<
                | string
                | number
                | bigint
                | boolean
                | React.ReactPortal
                | React.ReactElement<
                    unknown,
                    string | React.JSXElementConstructor<null>
                  >
                | Iterable<React.ReactNode>
                | null
                | undefined
              >
            | null
            | undefined;
        },
        idx: React.Key | null | undefined
      ) => React.JSX.Element
    ): React.ReactNode;
    find(arg0: (opt: { courses: string }) => boolean): unknown;
    feeStructure: FeeStructureOption[];
  };
}

const StudyAbroadFeeStructure: React.FC<Props> = ({ data }) => {
  const nationalityOptions = data || [];

  const [selected, setSelected] = useState<FeeStructureOption | null>(null);

  return (
    <div className="text-center py-12 px-4">
      <select
        className=" w-[400px]  p-3 border border-[#00999e] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00999e]"
        onChange={(e) => {
          const selectedOption = nationalityOptions.find(
            (opt: { courses: string }) => opt.courses === e.target.value
          );
          setSelected(selectedOption as FeeStructureOption | null);
        }}
        value={selected?.courses || ""}
      >
        <option value="">Select a course</option>
        {nationalityOptions.map(
          (
            option: {
              courses:
                | string
                | number
                | bigint
                | boolean
                | React.ReactElement<
                    unknown,
                    string | React.JSXElementConstructor<null>
                  >
                | Iterable<React.ReactNode>
                | Promise<
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactPortal
                    | React.ReactElement<
                        unknown,
                        string | React.JSXElementConstructor<null>
                      >
                    | Iterable<React.ReactNode>
                    | null
                    | undefined
                  >
                | null
                | undefined;
            },
            idx: React.Key | null | undefined
          ) => (
            <option key={idx} value={option?.courses as string}>
              {option.courses}
            </option>
          )
        )}
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
          <div className="flex  gap-4 flex-wrap">
            <div className="bg-white border-2 border-[#00999e] rounded-xl flex flex-col justify-center  gap-10 shadow-xl w-[380px] mx-auto p-6 transition-all duration-300 items-center">
              <Image
                src={
                  "https://tied-web-bkt.s3.ap-south-1.amazonaws.com/ChooseUsImg1.svg"
                }
                alt="Logo"
                height={100}
                width={100}
              />
              <div>
                <h3 className="text-xl font-semibold text-[#00999e] mb-2">
                  Eligibility Criteria
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {selected?.eligibilityCriteria}
                </p>
              </div>
            </div>
            <div className="bg-white border-2 border-[#00999e] rounded-xl flex flex-col justify-center  gap-10 shadow-xl w-[380px] mx-auto p-6 transition-all duration-300 items-center">
              <Image
                src={
                  "https://tied-web-bkt.s3.ap-south-1.amazonaws.com/ChooseUsImg2.svg"
                }
                alt="Logo"
                height={100}
                width={100}
              />
              <div>
                <h3 className="text-xl font-semibold text-[#00999e] mb-2">
                  English Proficiency Test
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {selected?.englishProficiencyTest}
                </p>
              </div>
            </div>
            <div className="bg-white border-2 border-[#00999e] rounded-xl flex flex-col justify-center  gap-10 shadow-xl w-[380px] mx-auto p-6 transition-all duration-300 items-center">
              <Image
                src={
                  "https://tied-web-bkt.s3.ap-south-1.amazonaws.com/ChooseUsImg3.svg"
                }
                alt="Logo"
                height={100}
                width={100}
              />
              <div>
                <h3 className="text-xl font-semibold text-[#00999e] mb-2">
                  Approximate Annual Fees (INR)
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {selected?.approximateAnnualFees}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StudyAbroadFeeStructure;
