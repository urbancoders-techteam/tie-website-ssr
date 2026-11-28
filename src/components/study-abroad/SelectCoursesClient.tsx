"use client";

import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContainerWrapper from "@/components/ContainerWrapper";
import { studyAbroadImageUrl } from "@/utils/config";
import Image from "next/image";
import { useRouter } from "next/navigation";

const universities = [
  { id: 1, name: "Engineering", path: "/study-abroad/courses/enginnering" },
  { id: 2, name: "Computer Science & Information Technology", path: "/study-abroad/courses/csit" },
  { id: 3, name: "Health Science and Medicine", path: "/study-abroad/courses/healthscience" },
  { id: 4, name: "Social Science", path: "/study-abroad/courses/socialscience" },
  { id: 5, name: "Bussiness Management", path: "/study-abroad/courses/bussinessmanagement" },
  { id: 6, name: "Physical & Life Science", path: "/study-abroad/courses/physicalscience" },
  { id: 7, name: "Fine & Applied Art", path: "/study-abroad/courses/fineart" },
  { id: 8, name: "Communication & Journalism", path: "/study-abroad/courses/journalism" },
  { id: 9, name: "Designing", path: "/study-abroad/courses/designing" },
].map((course) => ({
  ...course,
  image: `${studyAbroadImageUrl}courses/${encodeURIComponent(course.name)}.png`,
}));

export default function SelectCoursesClient() {
  const router = useRouter();

  return (
    <ContainerWrapper className="py-12">
      <BreadcrumbSchema />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold text-[#00999e] text-center mb-8">
        Explore Top Courses to Study Abroad
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center my-10">
        {universities.map((university) => (
          <div
            key={university.id}
            className="w-full md:w-[350px] lg:w-[380px] h-[300px] md:h-[350px] border border-[#00999E] shadow-lg rounded-lg overflow-hidden cursor-pointer flex flex-col"
            onClick={() => router.push(university.path)}
          >
            <div className="relative h-[70%] w-full shrink-0">
              <Image
                src={university.image}
                alt={university.name}
                fill
                sizes="(min-width: 1024px) 380px, (min-width: 768px) 350px, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex justify-center items-center h-[30%] px-3 py-5">
              <h3 className="text-center font-semibold text-lg">{university.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </ContainerWrapper>
  );
}
