import Image from "next/image";
import { ourServices } from "@/constants/about";
import HeadingTypography from "../Heading";
import ContainerWrapper from "../ContainerWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Values - Taksheela Institute",
  description:
    "Explore the core values that drive Taksheela Institute – integrity, excellence, innovation, and global collaboration in education.",
};


const OurValues = () => {
  return (
    <ContainerWrapper className="py-16 text-center">
      <HeadingTypography content="Our Values" textAlign='center' />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
        {ourServices.map((value, index) => (
          <div
            key={index}
            className="group p-6 rounded-lg text-center items-center transition-all duration-300 ease-in-out  hover:cursor-pointer    bg-white hover:bg-[#5cd2d6] hover:text-white
            "
          >
            <div
              className="w-20 h-20 mx-auto mb-4 relative rounded-full shadow-lg bg-white 
             transition-colors duration-300 ease-in-out 
             group-hover:bg-white"
            >
              <Image
                src={value.icon}
                alt={value.title}
                fill
                className="object-contain p-3"
              />
            </div>

            <h3
              className={`text-xl font-semibold mt-4 transition-colors duration-300 ${"text-[#00999e] group-hover:text-white"}`}
            >
              {value.title}
            </h3>
            <p
              className={`mt-2 text-base leading-relaxed transition-colors duration-300 ${"text-gray-700 group-hover:text-white"}`}
            >
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </ContainerWrapper>
  );
};

export default OurValues;
