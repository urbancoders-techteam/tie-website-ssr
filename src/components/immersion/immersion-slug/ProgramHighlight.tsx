import ContainerWrapper from "@/components/ContainerWrapper";
import HeadingTypography from "@/components/Heading";
import React from "react";

interface HighlightItem {
  _id: string;
  title: string;
  description: string[];
}

interface Props {
  data: HighlightItem[];
}

export default function ProgramHighlight({ data }: Props) {
  const mid = Math.ceil(data?.length / 2);
  const leftColumn = data?.slice(0, mid);
  const rightColumn = data?.slice(mid);

  return (
    <ContainerWrapper className="py-12">
      <HeadingTypography content="Program Overview" textAlign="center" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {[leftColumn, rightColumn].map((column, colIndex) => (
          <div key={colIndex} className="space-y-6">
            {column?.map((item, index) => (
              <div key={item._id} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded bg-[#00999e] text-white font-semibold flex items-center justify-center text-md">
                  {index + 1 + colIndex * mid}
                </div>
                <div>
                  <h3 className="text-md font-semibold text-[#00999e]">
                    {item?.title}
                  </h3>

                  {Array.isArray(item.description) && item.description.length > 0 ? (
                    <ul className="list-disc pl-5 text-gray-700 mt-1 space-y-1">
                      {item.description.map((point, i) => (
                        <li key={i}>{point.trim()}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700 mt-1">No details provided.</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </ContainerWrapper>
  );
}
