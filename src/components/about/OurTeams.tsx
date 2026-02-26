// components/OurTeam.tsx
import Image from "next/image";
import { ourTeams } from "@/constants/about";
import { imageBaseUrl } from "@/utils/config";
import ContainerWrapper from "../ContainerWrapper";
import HeadingTypography from "../Heading";
import { Metadata } from "next";

const background = imageBaseUrl + "temaBg.svg";

export const metadata: Metadata = {
  title: "Our Team - Taksheela Institute",
  description:
    "Meet the dedicated team of educators, advisors, and professionals who drive Taksheela Institute's mission for global academic excellence.",
};



const OurTeam = () => {
  return (
    <section
      className="relative py-20 px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <HeadingTypography content="Our Team" textAlign="center"/>

      <ContainerWrapper>
        <div className="flex flex-wrap justify-center gap-8 py-12">
          {ourTeams.map((member) => (
            <div
              key={member.id}
              className="bg-white max-w-xl w-full shadow-md rounded-xl p-8 flex flex-col items-center text-center"
            >
              <div className="w-36 h-36 rounded-md border-2 border-[#00999e] overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={144}
                  height={144}
                  className="object-contain"
                />
              </div>

              <h3 className="text-[#00999e] font-bold text-lg mb-4">
                {member.name}
              </h3>

              <div className="text-left w-full">
                <p className="font-semibold mb-2">{member.greeting}</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {member.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default OurTeam;
