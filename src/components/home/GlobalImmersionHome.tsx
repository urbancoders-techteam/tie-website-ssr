import Image from "next/image";
import Link from "next/link";
import ContainerWrapper from "../ContainerWrapper";
import { globalImmersionHome } from "@/constants/home";
import HomeSectionHeader from "./HomeSectionHeader";

/** ~4 cards + peek (lg+); 3 (md); 2 (sm); 1+ (base) */
const cardClass =
  "flex h-full min-h-[395px] w-[min(86vw,252px)] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-[0_4px_20px_-8px_rgba(15,39,68,0.12)] sm:w-[calc((100%-0.75rem)/2.08)] md:w-[calc((100%-1.5rem)/3.08)] lg:w-[calc((100%-2.25rem)/4.12)]";

const scrollerClass =
  "-mx-1 flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto overflow-y-hidden scroll-smooth px-1 pb-2 [-ms-overflow-style:none] [scrollbar-width:thin] sm:px-0 md:mx-0 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300/80 [&::-webkit-scrollbar-track]:bg-slate-100";

const imgSizes =
  "(max-width: 640px) 86vw, (max-width: 768px) 45vw, (max-width: 1024px) 31vw, 24vw";

type Program = (typeof globalImmersionHome.programs)[number];

function ProgramCard({ program: p, priority }: { program: Program; priority?: boolean }) {
  return (
    <article className={cardClass}>
      <div className="relative aspect-[5/3] w-full bg-slate-100">
        <Image
          src={p.image}
          alt={`${p.countryName} immersion — ${p.duration}`}
          fill
          priority={priority}
          className="object-cover object-center"
          sizes={imgSizes}
          draggable={false}
        />
        <span className="absolute left-2 top-2 rounded bg-[#0f2744] px-2 py-0.5 text-[0.625rem] font-semibold tracking-wide text-white shadow-sm sm:left-2.5 sm:top-2.5 sm:px-2.5 sm:py-1 sm:text-[0.6875rem]">
          {p.duration}
        </span>
      </div>
      <div className="flex min-h-0 flex-1 flex-col p-3 sm:p-4">
        <h3 className="text-left text-base font-bold leading-snug text-[#0f2744] sm:text-[1.0625rem]">
          <span className="text-[#00a88f]">{p.countryCode}</span> {p.countryName}
        </h3>
        <p className="mt-1.5 line-clamp-3 text-left text-[0.75rem] leading-relaxed text-slate-600 sm:text-[0.8125rem]">
          {p.description}
        </p>
        <div className="mt-2 flex flex-wrap gap-1">
          {p.tags.map((tag) => (
            <span
              key={`${p.id}-${tag}`}
              className="rounded-full bg-[#00a88f]/10 px-2 py-0.5 text-[0.6rem] font-medium text-[#00a88f] sm:text-[0.65rem]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between gap-2 border-t border-slate-100 pt-3">
          <span className="text-sm font-bold text-[#00a88f] sm:text-base">{p.price}</span>
          <Link
            href={p.href}
            className="shrink-0 rounded-md bg-[#00a88f]/12 px-2.5 py-1.5 text-[0.6875rem] font-semibold text-[#00a88f] transition hover:bg-[#00a88f]/18 sm:px-3 sm:py-2 sm:text-xs"
          >
            Know More →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function GlobalImmersionHome() {
  const { eyebrow, title, description, programs, viewAllCta } = globalImmersionHome;

  return (
    <section className="w-full bg-white py-12 md:py-14 lg:py-16 xl:py-[4.5rem]">
      <ContainerWrapper>
        <HomeSectionHeader
          headerClassName="mx-auto mb-8 max-w-3xl text-center md:mb-9 lg:mb-10"
          eyebrow={eyebrow}
          title={title}
          subtitle={description}
          eyebrowClassName="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#00a88f] sm:text-xs sm:tracking-[0.28em]"
          titleClassName="mt-3 text-balance text-2xl font-bold leading-tight text-[#0f2744] sm:text-3xl md:text-[1.85rem] lg:text-[2rem]"
          subtitleClassName="mx-auto mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem] md:text-base"
        />

        <div role="region" aria-label="Immersion programs" className={scrollerClass}>
          {programs.map((p, index) => (
            <ProgramCard key={p.id} program={p} priority={index === 0} />
          ))}
        </div>

        <div className="mt-9 flex justify-center sm:mt-10">
          <Link
            href={viewAllCta.href}
            className="inline-flex items-center justify-center rounded-lg bg-[#00a88f] px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:brightness-105 sm:px-10 sm:py-4 sm:text-base"
          >
            {viewAllCta.label}
          </Link>
        </div>
      </ContainerWrapper>
    </section>
  );
}
