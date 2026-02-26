"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import React from "react";

type PostStudyDataItem = {
  Field: string;
  Salary: string | number;
};

type PostStudyProps = {
  data: PostStudyDataItem[];
};

const PostStudy: React.FC<PostStudyProps> = ({ data }) => {
  return (

      <ContainerWrapper>
        <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-sm">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#00999E] text-white">
                <th className="px-6 py-3 border-r border-gray-300 text-center font-medium">
                  Courses
                </th>
                <th className="px-6 py-3 text-center font-medium">
                  Average Annual Salary (INR)
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr
                  key={item.Field + index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <td className="px-6 py-3 border-r border-gray-300 text-center">
                    {item.Field}
                  </td>
                  <td className="px-6 py-3 text-center">{item.Salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContainerWrapper>

  );
};

export default PostStudy;
