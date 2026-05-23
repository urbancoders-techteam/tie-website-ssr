


import globalCombinationData from "@/constants/study_abroad/study-abroad";
import ContainerWrapper from "../ContainerWrapper";
import HeadingTypography from "../Heading";
import HexagonalCard from "../HexagonCard";
import ModalTrigger from "../ModalTrigger";

type GlobalCombinationProps = {
  sectionHeadingAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export default function GlobalCombination({
  sectionHeadingAs = "h3",
}: GlobalCombinationProps) {
  return (
    <section className="bg-[#effdff] my-12">
      <ContainerWrapper className="py-12">
        <HeadingTypography
          textAlign="center"
          content="Find Your Perfect Global Combination"
          as={sectionHeadingAs}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {globalCombinationData.map((item, index) => (
            <div key={index} className="flex justify-center">
              <HexagonalCard data={item} />
            </div>
          ))}
        </div>

        <div className="mt-12 w-full text-center">
          <ModalTrigger/>
        </div>
      </ContainerWrapper>

      {/* Modal usage */}
     
        
    </section>
  );
}
