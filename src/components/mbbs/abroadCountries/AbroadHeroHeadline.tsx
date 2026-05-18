import type { AbroadHeroHeadline } from "@/constants/abroad/russiaAbroadConstent";

type Props = {
  headline: AbroadHeroHeadline;
  accentClassName?: string;
};

/** Single flowing H1 — avoids "Meets" + block "Global" rendering as MeetsGlobal for crawlers. */
export default function AbroadHeroHeadline({
  headline,
  accentClassName = "text-[#FFD465]",
}: Props) {
  const { line1, line2Accent, line3 } = headline;

  return (
    <>
      {line1}
      {line2Accent ? (
        <>
          {" "}
          <span className={accentClassName}>{line2Accent}</span>
        </>
      ) : null}
      {line3 ? <> {line3}</> : null}
    </>
  );
}
