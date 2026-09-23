import ContainerWrapper from "@/components/ContainerWrapper";
import ModalTrigger from "@/components/ModalTrigger";
import Image from "next/image";
import type { ReactNode } from "react";

export type ConsultantHeroImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ConsultantHeroProps = {
  /** Heading content. Pass a highlight span inside when part of the title should be teal. */
  title: ReactNode;
  /** One line, or several lines that each render as their own paragraph. Omit when the hero is title and image only. */
  description?: string | string[];
  image: ConsultantHeroImage;
  ctaText?: string;
};

const descriptionClassName =
  "mt-5 text-left! text-base leading-relaxed text-gray-700 sm:text-lg first:mt-5 [&+&]:mt-3";

export default function ConsultantHero({
  title,
  description,
  image,
  ctaText = "Book A Counselling Session",
}: ConsultantHeroProps) {
  const paragraphs = (Array.isArray(description) ? description : description ? [description] : []).filter(
    (paragraph) => paragraph.trim() !== "",
  );

  return (
    <div className="w-full bg-[#1090cb1a] py-10 sm:py-14">
      <ContainerWrapper>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="w-full">
            <h1 className="font-poppins text-left text-[22px] font-semibold leading-snug text-black/80 sm:text-[30px] md:text-[36px] lg:text-[40px]">
              {title}
            </h1>
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className={descriptionClassName}>
                {paragraph}
              </p>
            ))}
            {ctaText ? (
              <div className="mt-6 flex justify-start sm:mt-8">
                <ModalTrigger text={ctaText} />
              </div>
            ) : null}
          </div>

          <div className="flex w-full items-center justify-center">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-auto w-full object-contain"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
}
