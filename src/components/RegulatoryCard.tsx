import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  borderRadius?: string;
  data: {
    image: string;
    title: string;
    content?: string;
    items?: string[];
    link?: string;
  };
  width?: number | string;
  height?: number | string;
  hoverHeight?: string;
  initialheight?: string;
  listStyle?: string;
  fontSize?: string;
  textAlign?: "left" | "center" | "right";
  padding?: string;
  cardWidth?: string;
  cardHeight?: string;
  titleFontSize?: string;
  isContent?: boolean;
  margin?: string;
}

const RegulatoryCard: React.FC<CardProps> = ({
  borderRadius = "10px",
  data,
  width = 200,
  height = 140,
  initialheight = "22%",
  listStyle = "disc",
  fontSize = "text-sm",
  textAlign = "center",
  padding = "0",
  cardWidth = "230px",
  cardHeight = "280px",
  titleFontSize = "text-lg",
  isContent = true,
  margin = "10px",
}) => {

  console.log('image',data?.image)

  return (
    <Link
      href={data?.link || "#"}
      target={data?.link?.startsWith("https") ? "_blank" : "_self"}
      rel={data?.link?.startsWith("https") ? "noopener noreferrer" : undefined}
      style={{ width: cardWidth, height: cardHeight, borderRadius }}
      className="relative bg-white shadow-md p-3 overflow-hidden cursor-pointer group transition-all duration-300"
    >
      <Image
        src={data?.image}
        alt={data?.title}
        width={typeof width === "number" ? width : undefined}
        height={typeof height === "number" ? height : undefined}
        className="rounded-md w-[75%] mx-auto h-[auto] object-contain "
        style={{ borderRadius }}
      />

    {/* Overlay */}
      <div
        className="absolute left-0 bottom-0 w-full bg-[#0A9DA2] text-white px-3 py-2 transition-all duration-500 ease-in-out group-hover:h-full"
        style={{
          height: initialheight,
          borderRadius,
        }}
      >
        {/* Title hamesha fixed rahega */}
        <h3 className={`${titleFontSize} font-semibold text-sm text-center`}>
          {data?.title}
        </h3>

        {/* Scrollable content */}
        <div className="mt-3 overflow-auto max-h-[calc(100%-40px)]" style={{ padding }}>
          {isContent && <p className="text-white text-sm">{data?.content}</p>}

          <ul className={`mt-2 list-${listStyle} pl-5`}>
            {data?.items?.map((item, index) => (
              <li
                key={index}
                className={`${fontSize} font-normal`}
                style={{
                  textAlign,
                  margin,
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

    </Link>
  );
};

export default RegulatoryCard;
