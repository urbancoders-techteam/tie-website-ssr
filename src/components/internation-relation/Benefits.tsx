import Image from "next/image";
import { Metadata } from "next";
import { imageBaseUrl } from "@/utils/config";
import HeadingTypography from "../Heading";
import ContainerWrapper from "../ContainerWrapper";
import { benefits } from "@/constants/internation-relation";

const icons = [
  "International-Relation/self-improvement.png",
  "International-Relation/economic-activity.png",
  "International-Relation/diversity.png",
  "International-Relation/seo.png",
  "International-Relation/internship.png",
  "International-Relation/enhance.png",
];

export const metadata: Metadata = {
  title: "Benefits of Internationalisation - Taksheela",
  description: "Explore the key benefits of internationalisation in education.",
};

export const dynamic = "force-static";

export default function Benefits() {
  return (
    <ContainerWrapper>
      <HeadingTypography content="Benefits" textAlign="center" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center mt-5">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white shadow-md rounded-xl p-5 w-full max-w-xs min-h-[200px] transition hover:shadow-lg"
          >
            <div className="mb-4">
              <Image
                src={`${imageBaseUrl}${icons[index]}`}
                alt={benefit.title}
                width={60}
                height={60}
                className="mx-auto"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold">{benefit.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{benefit.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </ContainerWrapper>
  );
}
