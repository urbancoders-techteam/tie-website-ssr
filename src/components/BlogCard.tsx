"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import moment from "moment";
import Image from "next/image";

type BlogCardProps = {
  data: {
    image: string;
    date?: string;
    title: string;
    description: string;
    slugUrl: string;
    content?: string;
  };
};

const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const [plainTextDescription, setPlainTextDescription] = useState("");

  const handleReadMoreClick = (data: BlogCardProps["data"]) => {
    window.open(data?.slugUrl, "_blank");
  
  };

  const handleShowLessClick = () => {
    setExpanded(false);

  };

  useEffect(() => {
    if (typeof window !== "undefined" && data?.description) {
      const parser = new DOMParser();
      const parsedText =
        parser.parseFromString(data.description, "text/html").body.textContent?.trim() || "";
      const shortText = parsedText.split(/\s+/).slice(0, 10).join(" ");
      setPlainTextDescription(shortText);
    }
  }, [data]);

  return (
    <div
      className={`w-[320px] md:w-[360px] mb-6 mx-2 bg-white rounded-md shadow-md overflow-hidden flex flex-col ${
        expanded ? "h-auto" : "h-[420px]"
      }`}
    >
      <Image
        src={data?.image}
        alt="news"
        width={360}
        height={300}
        className="object-cover"
      />

      <div className="flex flex-col flex-grow p-4 mt-1">
        <p className="text-[#00999E] text-xs font-semibold mb-1">
          {data?.date && moment(data.date, "DD MMM YYYY").format("DD MMM YYYY")}
        </p>

        <h3 className="text-[16px] font-bold text-justify mb-2">
          {data?.title?.split(/\s+/).slice(0, 5).join(" ")}
        </h3>

        <p className="text-[13px] text-justify mb-2 flex-grow">
          {plainTextDescription}
        </p>

        {!expanded && (
          <div className="mt-auto">
            <button
              onClick={() => handleReadMoreClick(data)}
              className="w-fit px-5 py-2 text-sm font-semibold flex items-center justify-center gap-2 bg-[#00999E] text-white rounded-full hover:bg-[#007e86] transition"
            >
              Read More <Icon icon="fluent:arrow-right-28-regular" />
            </button>
          </div>
        )}

        {expanded  && (
          <div className="mt-auto">
            <p className="text-[13px] text-justify mt-2">{data?.content}</p>
            <button
              onClick={handleShowLessClick}
              className="mt-2 w-full px-5 py-2 text-sm font-semibold flex items-center justify-center gap-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            >
              Show Less <Icon icon="fluent:arrow-right-28-regular" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
