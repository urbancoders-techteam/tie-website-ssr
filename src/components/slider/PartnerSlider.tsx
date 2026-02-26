/* eslint-disable @typescript-eslint/no-explicit-any */
// app/components/PartnerSlider.tsx
'use client';

import React from "react";
import Slider from "react-slick";

interface PartnerSliderProps {
  settings: any;
  children: React.ReactNode;
}

const PartnerSlider = ({ settings, children }: PartnerSliderProps) => {
  return <Slider {...settings}>{children}</Slider>;
};

export default PartnerSlider;
