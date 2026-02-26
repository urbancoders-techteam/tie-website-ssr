// app/components/MbbsTabs.tsx

"use client";

import { MbbsTabData } from "@/constants/mbbs";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";

interface TabItem {
  title: string;
  items: string[];
}

const TabButton = ({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className={` cursor-pointer px-6 py-2 mx-2 text-lg font-semibold border-b-4 transition-all duration-300 ${
        selected
          ? "text-[#00999E] border-[#00999E]"
          : "text-gray-400 border-transparent hover:text-[#00999E]"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const TabCard = ({ data }: { data: TabItem }) => {
  return (
    <div className="w-[320px] min-h-[440px] bg-white border-t-[4px] border-[#00999E] rounded-xl shadow-lg flex flex-col justify-between p-6">
      <h3 className="text-[#00999e] text-lg text-center mb-7 font-semibold">
        ~{data?.title}~
      </h3>
      <ul className="flex flex-col gap-5 mb-8">
        {data.items.map((item, index) => (
          <li key={index} className="flex items-start gap-4">
            <Icon
              icon="material-symbols-light:check"
              className="text-[#00999E] text-[22px] flex-shrink-0 mt-1"
            />
            <p className="text-base text-gray-800 leading-snug">{item}</p>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="w-full text-center text-base font-medium border-2 border-black rounded-md py-2.5 hover:bg-[#00999E] hover:text-white hover:border-[#00999E] transition-all"
      >
        Get started
      </Link>
    </div>
  );
};

const MbbsTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <section className="w-full bg-[#EFFDFF] py-10" id="ug-pg">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">
          MBBS UG & PG in India and Abroad
        </h2>

        <div className="flex  flex-wrap justify-center gap-4 mb-10">
          <TabButton
            label="MBBS UG"
            selected={selectedTab === 0}
            onClick={() => setSelectedTab(0)}
          />
          <TabButton
            label="MBBS PG"
            selected={selectedTab === 1}
            onClick={() => setSelectedTab(1)}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {selectedTab === 0 ? (
            <>
              <TabCard data={MbbsTabData[0]} />
              <TabCard data={MbbsTabData[1]} />
            </>
          ) : (
            <>
              <TabCard data={MbbsTabData[2]} />
              <TabCard data={MbbsTabData[3]} />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default MbbsTabs;
