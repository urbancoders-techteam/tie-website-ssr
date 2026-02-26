/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ContainerWrapper from "../ContainerWrapper";
import HeadingTypography from "../Heading";
import ChooseFlipCard from "./ChooseFlipCard";


interface ChooseReasonProps {
  chooseus: any;
  title: string; 
}

const ChooseReason: React.FC<ChooseReasonProps> = ({ chooseus, title }) => {
  return (
    <ContainerWrapper>
      <HeadingTypography content={`Why choose ${title}`} textAlign="center" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {chooseus?.map(
          (
            reason: { title: string; content?: string[]; image: string },
            index: React.Key | null | undefined
          ) => (
            <div key={index} className="flex justify-center">
              <ChooseFlipCard
                data={reason}
            
              />
            </div>
          )
        )}
      </div>
    </ContainerWrapper>
  );
};

export default ChooseReason;
