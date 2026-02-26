"use client";

import { Icon } from "@iconify/react";
import moment from "moment";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface WebinarCardProps {
  data: {
    title: string;
    description: string;
    image: string;
    date: string;
    content?: string;
    url?: string;
  };
  imageheight?: number;
  imagewidth?: number;
}

const WebinarCard: React.FC<WebinarCardProps> = ({
  data
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleReadMoreClick = () => {
    setExpanded(true);
  };

  const handleShowLessClick = () => {
    setExpanded(false);
  };

  const changeHTMLToText = (htmlString: string): string => {
    if (!htmlString) return "";
    const stripped = htmlString.replace(/<[^>]*>?/gm, "");
    return stripped.trim();
  };
  

  useEffect(() => {
    if (data?.description) changeHTMLToText(data.description);
  }, [data]);

  return (
    <div
      className={`flex flex-col justify-between bg-white rounded-lg shadow-md mb-6 w-[320px] md:w-[360px] overflow-hidden ${
        expanded ? "h-auto" : "h-[500px]"
      }`}
    >
      <div>
        <div className="relative w-full h-60">
          <Image
            src={data?.image}
            alt="event"
            fill
            className="object-cover rounded-t-lg"
          />
        </div>

        <div className="p-4 mt-1">
          <h3 className="text-[16px] font-semibold mb-1 text-start">
            {data?.title}
          </h3>
          <p className="text-xs text-[#00999E] font-semibold text-start mb-1">
            {data?.date && moment(data?.date).format("DD MMM YYYY")}
          </p>
          <p
            className={`text-sm text-justify ${
              !expanded ? "line-clamp-5" : ""
            }`}
          >
            {data?.description && changeHTMLToText(data.description)}
          </p>

          {expanded && !data?.url && (
            <p className="text-sm text-justify mt-2">{data?.content}</p>
          )}
        </div>
      </div>

      <div className="flex justify-center pb-4 mt-auto">
        {!expanded && (
          <button
            onClick={handleReadMoreClick}
            className="px-5 py-2 text-sm font-semibold flex items-center gap-2 bg-[#00999E] text-white rounded-full hover:bg-[#007e86] transition"
          >
            Read More <Icon icon="fluent:arrow-right-28-regular" />
          </button>
        )}
        {expanded && !data?.url && (
          <button
            onClick={handleShowLessClick}
            className="px-5 py-2 text-sm font-semibold flex items-center gap-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            Show Less <Icon icon="fluent:arrow-right-28-regular" />
          </button>
        )}
      </div>
    </div>
  );
};

export default WebinarCard;
