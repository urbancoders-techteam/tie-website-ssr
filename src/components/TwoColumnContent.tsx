/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import ContainerWrapper from "./ContainerWrapper";
import HeadingTypography from "./Heading";


interface TwoColumnContentProps {
  heading: string;
  description: any;
  imageUrl: string;
  bgColor?: boolean;
  reverse?: boolean;
  headingAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function TwoColumnContent({
  heading,
  description,
  imageUrl,
  bgColor =false,
  reverse = false,
  headingAs = "h3",
}: TwoColumnContentProps) {
  return (
    <section className={`py-12 ${bgColor ? 'bg-[#effdff] ': 'bg-white'}`}>
      <ContainerWrapper>
        <div
          className={`flex flex-col md:flex-row items-center gap-10 ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Text Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <HeadingTypography content={heading} as={headingAs} />
            <div className="text-[#525560] text-base leading-relaxed">
              {typeof description === "string" ? <p>{description}</p> : description}
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={imageUrl}
                alt={heading}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
