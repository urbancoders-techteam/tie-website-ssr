/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import PackageCard, { PackageType } from "./PacageCard";
import HeadingTypography from "../Heading";

interface TestPackagesProps {
  PackageData: any;
  Scholarship?: string
}

const TestPackages: React.FC<TestPackagesProps> = ({ PackageData , Scholarship}) => {
  const [itemUpdate, setItemUpdate] = useState(false);

  return (
    <section className="bg-white py-10 md:py-16" id="ug-pg">
      <div className="container mx-auto px-4">
        <HeadingTypography content= {Scholarship ? Scholarship :"Test Packages"} textAlign="center" />

        {/* Flex container instead of grid */}
        <div className="flex flex-wrap justify-center gap-20 mt-10">
          {PackageData?.map((pkg: PackageType, idx: number) => (
            <div key={pkg.id || idx} className="flex justify-center">
              <PackageCard
                data={pkg}
                setItemUpdate={setItemUpdate}
                itemupdate={itemUpdate}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestPackages;
