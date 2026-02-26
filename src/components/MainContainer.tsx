
import React from 'react';
import ContainerWrapper from './ContainerWrapper';

type Props = {
  com1: React.ReactNode;
  com2: React.ReactNode;
  color?: string;
  dir?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
};

const MainContainer = ({ com1, com2, color = 'transparent', dir = 'row' }: Props) => {
  return (
    <div className={`w-full py-5 sm:py-8 md:py-12 lg:py-12`} style={{ backgroundColor: color }}>
      <ContainerWrapper>
        <div
          className={`flex flex-col sm:gap-6 md:flex-row md:gap-8 items-center ${
            dir === 'row-reverse' ? 'md:flex-row-reverse' : 'md:flex-row'
          }`}
        >
          <div className="w-full md:w-1/2 flex items-center justify-center">{com1}</div>
          <div className="w-full md:w-1/2 flex items-center justify-center">{com2}</div>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default MainContainer;
