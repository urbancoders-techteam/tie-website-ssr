import HeadingTypography from "@/components/Heading";
import Image from "next/image";
import ModalTrigger from "../ModalTrigger";
import ContainerWrapper from "../ContainerWrapper";

const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL || "";
const TestImage = imageBaseUrl + "testprep.png";

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
            src={TestImage}
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
