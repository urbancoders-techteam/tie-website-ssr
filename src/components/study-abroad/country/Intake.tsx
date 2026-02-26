/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Icon } from "@iconify/react";
import React from "react";

interface IntakeProps {
  data: any;
}

const Intake: React.FC<IntakeProps> = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center gap-20 ">
      {data?.map((pkg: any, idx: number) => (
        <div key={pkg.id || idx} className="flex justify-center">
          <div
            className="w-[300px] h-fit max-h-[400px] border-t-4 rounded-lg shadow-md p-5 flex flex-col justify-between items-center text-center"
            style={{ borderTopColor: pkg.topColor || "#00999E" }}
          >
            <h3 className="text-xl font-semibold text-teal-700">{pkg.title}</h3>

            <div className="my-4 flex-1 flex flex-col justify-start gap-5">
              {pkg?.listitem?.map(
                (
                  item:
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
                  idx: number
                ) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Icon
                      icon="iconamoon:check-bold"
                      className="text-teal-600 text-xl mt-1"
                    />
                    <p className="text-sm text-gray-700 text-left capitalize">
                      {item}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Intake;
