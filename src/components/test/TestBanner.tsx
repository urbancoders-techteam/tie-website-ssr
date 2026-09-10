import HeadingTypography from "@/components/Heading";
import Image from "next/image";
import ModalTrigger from "../ModalTrigger";
import ContainerWrapper from "../ContainerWrapper";
import { testPrepImageUrl } from "@/utils/config";

const testImage = `${testPrepImageUrl}testprep.jpg`;

const TestBanner = () => {
  return (
    <>
      <section className="w-full bg-[#effdff] pt-10 flex justify-center items-center">
        <ContainerWrapper>
          <HeadingTypography
            content="Ace your exams with our comprehensive test preparation courses"
            textAlign="center"
          />

          <div className="w-full   text-center my-6">
            <ModalTrigger text="Book A Free Demo Class" />
          </div>

          <Image
            src={testImage}
            alt="Test Prep"
            width={600}
            height={300}
            className="mx-auto"
          />
        </ContainerWrapper>
      </section>
    </>
  );
};

export default TestBanner;
