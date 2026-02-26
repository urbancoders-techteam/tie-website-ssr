import Image from "next/image";
import HeadingTypography from "@/components/Heading";
import { OurTestData } from "@/constants/test";
import Link from "next/link";
import ContainerWrapper from "../ContainerWrapper";

const OurTest = () => {
  return (
    <ContainerWrapper className="py-12">
      <div className="text-center mb-10">
        <HeadingTypography content="Resource Hub" textAlign="center" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center ">
        {OurTestData?.map((test, index) => (
          <Link
            key={index}
            href={test?.path}
            className="group relative hover:bg-[#00999e] bg-white shadow-md rounded-lg w-[280px] h-[200px] flex items-center justify-center transition-all duration-300 transform hover:scale-[1.02]"
          >
            {/* Corner Borders */}
            <span className="absolute top-0 left-0 w-12 h-12 border-t-3 border-l-3 border-[#00999e] group-hover:border-white "></span>
            <span className="absolute bottom-0 right-0 w-12 h-12 border-b-3 border-r-3 border-[#00999e]  group-hover:border-white "></span>

            {/* Image */}
            <div className="flex-1 flex justify-center items-center">
              <Image
                src={test?.image}
                alt={test?.title}
                width={160}
                height={100}
                className="object-contain"
              />
            </div>

           {/* Arrow */}
            <div className="absolute right-4 text-gray-700 group-hover:text-[#00999e] group-hover:translate-x-1 transition-all duration-300">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
                />
            </svg>
            </div>
          </Link>
        ))}
      </div>
    </ContainerWrapper>
  );
};

export default OurTest;
