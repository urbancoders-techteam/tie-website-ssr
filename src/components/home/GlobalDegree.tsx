import Link from "next/link";
import {
  MdOutlineAssignment,
  MdOutlineAssignmentInd,
  MdOutlineFlightTakeoff,
  MdOutlineTrackChanges,
} from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import ContainerWrapper from "../ContainerWrapper";
import { globalDegreeJourney } from "@/constants/home";
import HomeSectionHeader from "./HomeSectionHeader";

const BG = "#0B162C";
const TEAL = "#00C4B4";

const ICON_CLASS = "h-6 w-6 shrink-0";

function GlowingStepIconRing({
  name,
  size = "lg",
}: {
  name: string;
  size?: "lg" | "sm";
}) {
  const dim = size === "lg" ? "h-14 w-14" : "h-12 w-12";
  return (
    <div
      className={`global-degree-icon-ring inline-flex shrink-0 ${dim} items-center justify-center rounded-full border border-[#00C4B4]/45 bg-[#00C4B4]/10`}
    >
      <StepIcon name={name} />
    </div>
  );
}

function StepIcon({ name }: { name: string }) {
  const cls = `${ICON_CLASS} text-[#00C4B4]`;
  switch (name) {
    case "target":
      return <MdOutlineTrackChanges className={cls} aria-hidden />;
    case "clipboard":
      return <MdOutlineAssignment className={cls} aria-hidden />;
    case "handshake":
      return <FaHandshake className={cls} aria-hidden />;
    case "badge":
      return <MdOutlineAssignmentInd className={cls} aria-hidden />;
    case "plane":
      return <MdOutlineFlightTakeoff className={cls} aria-hidden />;
    default:
      return null;
  }
}

export default function GlobalDegree() {
  const { eyebrow, title, subtitle, steps, cta } = globalDegreeJourney;

  return (
    <section
      className="relative overflow-x-hidden py-12 md:py-16 lg:py-20 xl:py-[5rem]"
      style={{ backgroundColor: BG }}
    >
      <ContainerWrapper className="relative z-10">
        <HomeSectionHeader
          headerClassName="mx-auto max-w-3xl text-center"
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          eyebrowClassName="text-[0.65rem] font-semibold uppercase tracking-[0.28em] sm:text-xs"
          eyebrowStyle={{ color: TEAL }}
          markerClassName="opacity-70"
          titleClassName="mt-3 text-balance text-2xl font-bold leading-tight text-white sm:text-3xl md:text-[1.85rem] lg:text-[2rem]"
          subtitleClassName="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-[0.9375rem] md:text-base"
        />

        {/* Large screens: horizontal timeline */}
        <div className="relative mx-auto mt-12 hidden max-w-6xl lg:mt-14 lg:block">
          <div
            className="pointer-events-none absolute left-[6%] right-[6%] top-[27px] z-0 h-px bg-gradient-to-r from-transparent via-[#00C4B4]/45 to-transparent"
            aria-hidden
          />
          <ul className="relative z-10 grid grid-cols-5 gap-2 xl:gap-3">
            {steps.map((s) => (
              <li key={s.id} className="flex flex-col items-center text-center">
                <GlowingStepIconRing name={s.icon} size="lg" />
                <p
                  className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em]"
                  style={{ color: TEAL }}
                >
                  {s.step}
                </p>
                <h3 className="mt-2 text-sm font-bold leading-snug text-white lg:text-[0.9375rem]">
                  {s.title}
                </h3>
                <p className="mt-2 text-pretty text-xs leading-relaxed text-slate-400 lg:text-[0.8125rem]">
                  {s.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Up to lg: stacked steps */}
        <ul className="mx-auto mt-10 max-w-lg space-y-8 lg:hidden">
          {steps.map((s, i) => (
            <li key={s.id} className="flex gap-4">
              <div className="flex flex-col items-center">
                <GlowingStepIconRing name={s.icon} size="sm" />
                {i < steps.length - 1 ? (
                  <div
                    className="mt-2 h-10 w-px shrink-0 bg-gradient-to-b from-[#00C4B4]/50 to-[#00C4B4]/10"
                    aria-hidden
                  />
                ) : null}
              </div>
              <div className="min-w-0 pt-0.5">
                <p
                  className="text-[0.65rem] font-semibold uppercase tracking-[0.2em]"
                  style={{ color: TEAL }}
                >
                  {s.step}
                </p>
                <h3 className="mt-1 text-base font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {s.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center md:mt-14">
          {cta.href.startsWith("http") ? (
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1 rounded-lg px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:brightness-110 sm:px-10 sm:py-4 sm:text-base"
              style={{ backgroundColor: TEAL }}
            >
              {cta.label}
              <span aria-hidden className="text-lg font-light">
                ›
              </span>
            </a>
          ) : (
            <Link
              href={cta.href}
              className="inline-flex items-center justify-center gap-1 rounded-lg px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:brightness-110 sm:px-10 sm:py-4 sm:text-base"
              style={{ backgroundColor: TEAL }}
            >
              {cta.label}
              <span aria-hidden className="text-lg font-light">
                ›
              </span>
            </Link>
          )}
        </div>
      </ContainerWrapper>
    </section>
  );
}
