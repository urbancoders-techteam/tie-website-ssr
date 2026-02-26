"use client";

import React from "react";
import  Image  from "next/image";
import { useRouter } from "next/navigation";
import { BackRouteContainer } from "@/components/study-abroad/university-finder/ViewComponents";
import { imageBaseUrl } from "@/utils/config";
import ContainerWrapper from "@/components/ContainerWrapper";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";



const universities = [
  { id: 1, name: "Engineering", image: `${imageBaseUrl}selectcourse/b1.png`, path: "/study-abroad/courses/enginnering" },
  { id: 2, name: "Computer Science & Information Technology", image: `${imageBaseUrl}selectcourse/b2.png`, path: "/study-abroad/courses/csit" },
  { id: 3, name: "Health Science and Medicine", image: `${imageBaseUrl}selectcourse/b3.png`, path: "/study-abroad/courses/healthscience" },
  { id: 4, name: "Social Science", image: `${imageBaseUrl}selectcourse/b4.png`, path: "/study-abroad/courses/socialscience" },
  { id: 5, name: "Bussiness Management", image: `${imageBaseUrl}selectcourse/b5.png`, path: "/study-abroad/courses/bussinessmanagement" },
  { id: 6, name: "Physical & Life Science", image: `${imageBaseUrl}selectcourse/b6.png`, path: "/study-abroad/courses/physicalscience" },
  { id: 7, name: "Fine & Applied Art", image: `${imageBaseUrl}selectcourse/b7.png`, path: "/study-abroad/courses/fineart" },
  { id: 8, name: "Communication & Journalism", image: `${imageBaseUrl}selectcourse/b8.png`, path: "/study-abroad/courses/journalism" },
  { id: 9, name: "Designing", image: `${imageBaseUrl}selectcourse/b9.png`, path: "/study-abroad/courses/designing" },
];

const SelectCourses: React.FC = () => {
  const router = useRouter();

  return (
    <ContainerWrapper className="py-12">
       <BreadcrumbSchema />
      <BackRouteContainer path="/study-abroad" title="Study Abroad Main Page" logo={'/images/backuniversity.png'}/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center my-10">
          {universities.map((university) => (
            <div
              key={university.id}
              className="w-full md:w-[350px] lg:w-[380px] h-[300px] md:h-[350px] border border-[#00999E] shadow-lg rounded-lg overflow-hidden cursor-pointer flex flex-col"
              onClick={() => router.push(university.path)}
            >
              <Image
                src={university.image}
                alt={university.name}
                className="w-full h-[70%] object-cover"
                height={200}
                width={100}
              />
              <div className="flex justify-center items-center h-[30%] px-3 py-5">
                <h3 className="text-center font-semibold text-lg">{university.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <BackRouteContainer path="/study-abroad" title="Study Abroad Main Page" logo={'/images/backuniversity.png'} />
    </ContainerWrapper>
  );
};

export default SelectCourses;
