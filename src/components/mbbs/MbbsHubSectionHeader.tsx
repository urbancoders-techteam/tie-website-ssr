import type { ReactNode } from "react";
import {
  MBBS_HUB_SECTION_DESCRIPTION,
  MBBS_HUB_SECTION_TITLE,
  MBBS_HUB_SECTION_UNDERLINE,
} from "@/constants/mbbsHubSectionTheme";

type MbbsHubSectionHeaderProps = {
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  showUnderline?: boolean;
  headingId?: string;
  className?: string;
  descriptionClassName?: string;
};

export default function MbbsHubSectionHeader({
  title,
  description,
  align = "center",
  showUnderline = true,
  headingId,
  className = "",
  descriptionClassName = "",
}: MbbsHubSectionHeaderProps) {
  const centered = align === "center";
  const descriptionWidth = descriptionClassName || (centered ? "max-w-3xl" : "max-w-none");

  return (
    <div className={`${centered ? "text-center" : "text-left"} ${className}`.trim()}>
      <h2
        id={headingId}
        className={`${MBBS_HUB_SECTION_TITLE}${centered ? "" : " text-left"}`}
      >
        {title}
      </h2>
      {showUnderline ? (
        <div className={`${MBBS_HUB_SECTION_UNDERLINE}${centered ? " mx-auto" : ""}`} />
      ) : null}
      {description ? (
        <p
          className={`${MBBS_HUB_SECTION_DESCRIPTION} ${
            centered ? "mx-auto" : ""
          } ${descriptionWidth}`.trim()}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
