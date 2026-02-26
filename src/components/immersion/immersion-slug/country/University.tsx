/* eslint-disable @typescript-eslint/no-explicit-any */
import ContainerWrapper from "@/components/ContainerWrapper";
import HeadingTypography from "@/components/Heading";
import Image from "next/image";
import React from "react";

export default function University({ data }: any) {

    
  return (
    <section className="bg-[#effdff] text-[#525560]">
      <ContainerWrapper>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative w-full h-64 md:h-96 overflow-hidden shadow-lg">
       {   data?.image &&<Image
              src={data?.image}
              alt={'company visit data'}
              fill
              className="object-cover"
              priority
            />}
          </div>
          {/* Title + HTML Description */}
          <div className="space-y-6">
            <HeadingTypography content={data?.title} />
            <p>{data?.shortDes}</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800 text-base">
              {data?.features.map(
                (
                  point:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        unknown,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<
                        | string
                        | number
                        | bigint
                        | boolean
                        | React.ReactPortal
                        | React.ReactElement<
                            unknown,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | null
                        | undefined
                      >
                    | null
                    | undefined,
                  index: React.Key | null | undefined
                ) => (
                  <li key={index}>{point}</li>
                )
              )}
            </ul>
          </div>

        
        </div>
      </ContainerWrapper>
    </section>
  );
}
