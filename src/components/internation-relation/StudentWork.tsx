// app/components/international-relation/StudentWork.tsx

import Image from "next/image";
import HeadingTypography from "../Heading";

import ContainerWrapper from "../ContainerWrapper";
import { studentWorkData } from "@/constants/internation-relation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Our Student Exchange Programme Works - Taksheela",
  description:
    "Understand the step-by-step process of Taksheela’s Student Exchange Programme and how it enables global exposure, academic growth, and cultural exchange.",
};

export default function StudentWork() {
  return (
    <ContainerWrapper>
      <section
        id="student-exchange-semester-abroad"
        className="py-16 px-4 md:px-20 text-center"
      >
        <HeadingTypography
          content="How Our Student Exchange Programme Works?"
          textAlign="center"
        />

        <div className="flex flex-wrap justify-evenly items-center gap-8 mt-12">
          {studentWorkData.map((work, index) => (
            <div
              key={index}
              className="bg-white w-[260px] h-[280px] rounded-xl shadow-md flex flex-col items-center p-4"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <Image
                  src={work.Image}
                  alt={work.title}
                  width={100}
                  height={100}
                  className="object-cover rounded-full"
                />
              </div>
              <div
                className="text-sm text-gray-700"
                dangerouslySetInnerHTML={{ __html: work.title }}
              />
            </div>
          ))}
        </div>
      </section>
    </ContainerWrapper>
  );
}
