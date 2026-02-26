import { Metadata } from "next";
import Image from "next/image";
import ContainerWrapper from "../ContainerWrapper";
import HeadingTypography from "../Heading";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Internationalisation at Home - Taksheela",
  description:
    "Explore India's NEP 2020 vision for global education through internationalisation at home.",
};

export default function GlobalNavigation() {
  return (
    <ContainerWrapper>
      <div className=" py-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image Section */}
        <div className="relative w-full h-60 md:h-140 rounded-lg overflow-hidden ">
          <Image
            src={'/images/StudyabroadMain.svg'}
            alt="Internationalisation"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <HeadingTypography content="Global Navigation" />

          <p className="text-[#525560] text-base leading-relaxed">
          From the academic powerhouses of the United States and the United Kingdom, with their Ivy League institutions and centuries-old universities, to the innovative landscapes of Australia and Canada, offering cutting-edge research facilities and multicultural environments, our platform navigates you through a plethora of study destinations. Explore the rich tapestry of educational experiences, diverse cultures, and vibrant communities awaiting you as you step into the world of international education.
          </p>
         
        </div>
      </div>
    </ContainerWrapper>
  );
}
