// components/SliderWrapper.tsx
"use client";

import React from "react";
import Slider from "react-slick";

interface SliderWrapperProps {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  settings: any;
}

const SliderWrapper = ({ children, settings }: SliderWrapperProps) => {
  return <Slider {...settings}>{children}</Slider>;
};

export default SliderWrapper;
