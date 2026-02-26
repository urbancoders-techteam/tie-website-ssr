/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import PopularCard from "./PopularCard";
import ContainerWrapper from "@/components/ContainerWrapper";
import Intake from "./Intake";
import CostofStudy from "./CostofStudy";
import PostStudy from "./PostStudy";
import VisaEnlightenment from "./VisaEnlightenment";

type TabData = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  data1: any;
  data2: any;
  data3: any;
  data4: any;
  data5: any;
};

export default function CustomTabs({
  data1,
  data2,
  data3,
  data4,
  data5,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs: TabData[] = [
    { label: "Popular Programs", content: <><PopularCard data={data1} /></> },
    { label: "Intakes", content: <><Intake data={data2} /></> },
    { label: "Cost of Education", content: <><CostofStudy data={data3} /></> },
    { label: "Post Study", content: <><PostStudy data={data4} /> </> },
    { label: "Visa Enlightenment", content: <><VisaEnlightenment data={data5} /></> },
  ];

  return (
    <ContainerWrapper className="my-12">
      {/* Tabs Container */}
    
       <div className="shadow-md rounded-lg overflow-x-auto bg-white">
      <div className="flex justify-around md:justify-between whitespace-nowrap">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={` cursor-pointer px-6 py-4 text-sm font-semibold uppercase tracking-wide transition-all duration-200 
              ${
                activeTab === index
                  ? "bg-[#00999E] text-white shadow-sm"
                  : "text-[#00999E] hover:bg-[#e6fafa]"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>


     
        <div className="my-12 py-12">
          {tabs[activeTab].content}
        </div>
    
    </ContainerWrapper>
  );
}
