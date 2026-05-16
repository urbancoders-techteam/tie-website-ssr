import type { ReactNode } from "react";

/** Same highlight behaviour as the legacy campaign `HeroSection`. */
export function renderCampaignHeroTitle(title: string, titleHighlight?: string): ReactNode {
  if (!titleHighlight || !title.includes(titleHighlight)) {
    return title;
  }
  const parts = title.split(titleHighlight);
  return (
    <>
      {parts[0]}
      <span className="text-[#5dd4d9]">{titleHighlight}</span>
      {parts[1]}
    </>
  );
}
