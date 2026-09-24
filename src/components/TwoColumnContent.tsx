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
  imageWidth?: number;
  imageHeight?: number;
}

export default function TwoColumnContent({
  heading,
  description,
  imageUrl,
  bgColor =false,
  reverse = false,
  headingAs = "h3",
  imageWidth,
  imageHeight,
}: TwoColumnContentProps) {
  const hasImage = typeof imageUrl === "string" && imageUrl.trim().length > 0;

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
            {imageWidth && imageHeight ? (
              <div className="overflow-hidden rounded-lg shadow-lg">
                {hasImage ? (
                  <Image
                    src={imageUrl}
                    alt={heading}
                    width={imageWidth}
                    height={imageHeight}
                    className="h-auto w-full"
                    priority
                  />
                ) : (
                  <div className="h-64 w-full bg-gray-100" />
                )}
              </div>
            ) : (
              <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg md:h-96">
                {hasImage ? (
                  <Image
                    src={imageUrl}
                    alt={heading}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="h-full w-full bg-gray-100" />
                )}
              </div>
            )}
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
