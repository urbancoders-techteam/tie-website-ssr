/* eslint-disable @typescript-eslint/no-explicit-any */
import HeadingTypography from "@/components/Heading";
import Image from "next/image";

export default function KeyObjectives({ data }: any) {
  return (
    <div className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex justify-center">
          <HeadingTypography content="Key Objectives" textAlign="center" />
        </div>

        {data?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center ">
            {data.map((item: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md h-[370px] text-center transform transition-transform duration-300 hover:scale-105 w-full max-w-xs flex flex-col justify-center items-center p-6"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={item?.icon}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <p className="text-md font-semibold text-[#525560]">
                  {item?.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-red-600 mt-8">
            No Objectives Available
          </p>
        )}

        <div className="mt-10 text-center">
          {/* <ButtonComponent
            width="auto"
            fontSize="20px"
            text="BOOK A COUNSELLING SESSION"
            onClick={handleOpenDialog}
          /> */}
        </div>
      </div>
    </div>
  );
}
