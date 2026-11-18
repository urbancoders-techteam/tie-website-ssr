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
  listStyle = "disc",
  fontSize = "text-sm",
  textAlign = "center",
  padding = "0",
  cardWidth = "230px",
  titleFontSize = "text-lg",
  isContent = true,
  margin = "10px",
}) => {

  return (
    <Link
      href={data?.link || "#"}
      target={data?.link?.startsWith("https") ? "_blank" : "_self"}
      rel={data?.link?.startsWith("https") ? "noopener noreferrer" : undefined}
      style={{ width: cardWidth, borderRadius }}
      className="flex max-w-full flex-col self-start bg-white shadow-md overflow-hidden cursor-pointer group transition-all duration-300"
    >
      <div className="flex h-[220px] w-full shrink-0 items-center justify-center p-5">
        <div className="relative h-full w-full">
          <Image
            src={data?.image}
            alt={data?.title}
            fill
            sizes="220px"
            className="object-contain"
          />
        </div>
      </div>

      {/* Text area grows naturally with its content. */}
      <div
        className="w-full bg-[#0A9DA2] text-white px-3 py-3"
      >
        <h3 className={`${titleFontSize} font-semibold text-sm text-center`}>
          {data?.title}
        </h3>

        <div style={{ padding }}>
          {isContent && data?.content && <p className="mt-3 text-white text-sm">{data.content}</p>}

          {!!data?.items?.length && <ul className={`mt-2 list-${listStyle} pl-5`}>
            {data?.items?.map((item, index) => (
              <li
                key={index}
                className={`${fontSize} font-normal`}
                style={{
                  textAlign,
                  margin,
                  fontFamily: '"Roboto", sans-serif',
                }}
              >
                {item}
              </li>
            ))}
          </ul>}
        </div>
      </div>

    </Link>
  );
};

export default RegulatoryCard;
