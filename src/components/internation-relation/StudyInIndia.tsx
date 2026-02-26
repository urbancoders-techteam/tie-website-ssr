import Image from "next/image";
import HeadingTypography from "../Heading";
import ContainerWrapper from "../ContainerWrapper";
import { StudyInIndiaData } from "@/constants/internation-relation";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Study in India - Taksheela",
  description:
    "Discover why international students choose India for higher education. Learn about top universities, cultural diversity, affordability, and opportunities at Taksheela Institute.",
};

export default function StudyInIndia() {
  return (
    <section className="w-full py-16 bg-white" id="why-study-in-india">
      <ContainerWrapper>
        <HeadingTypography
          content="Why study in INDIA ?"
          textAlign="center"
          color="#00999E"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-12">
          {StudyInIndiaData.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center justify-center text-center align-middle p-6 bg-gray-100 hover:bg-[#00999E] hover:text-white transition-all duration-300 h-[270px] rounded-lg"
            >
              <div className="mb-4">
                <Image src={card.icon} alt="Card icon" width={50} height={50} />
              </div>
              <p className="mt-4 text-base font-medium">{card.about}</p>
            </div>
          ))}
        </div>
      </ContainerWrapper>
    </section>
  );
}
