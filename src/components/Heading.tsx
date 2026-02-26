import React from "react";
import classNames from "classnames";

interface HeadingTypographyProps {
  color?: string;
  textAlign?: "left" | "center" | "right" | "justify";
  content: string;
  fontSize?: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const HeadingTypography: React.FC<HeadingTypographyProps> = ({
  textAlign = "left",
  content,
  fontSize = "text-2xl sm:text-3xl md:text-4xl", 
  className,
  as = "h3",
}) => {
  const Tag = as;
  return (
    <Tag
      className={classNames(
        "font-poppins font-semibold",
        fontSize,
        "text-[#00999e]",
        {
          "text-left": textAlign === "left",
          "text-center": textAlign === "center",
          "text-right": textAlign === "right",
          "text-justify": textAlign === "justify",
        },
        className
      )}
    >
      ~{content}~
    </Tag>
  );
};

export default HeadingTypography;
