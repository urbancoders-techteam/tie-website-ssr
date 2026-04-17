import Link from "next/link";
import ContainerWrapper from "../ContainerWrapper";
import { whereYouAreHome } from "@/constants/home";
import HomeSectionHeader from "./HomeSectionHeader";

const BG = "#0a1628";
const TEAL = "#00a88f";

export default function WhereYouAre() {
  const { eyebrow, title, locations } = whereYouAreHome;

  return (
    <section className="w-full py-12 md:py-14 lg:py-16 xl:py-[4.5rem]" style={{ backgroundColor: BG }}>
      <ContainerWrapper>
        <HomeSectionHeader
          headerClassName="mx-auto max-w-3xl text-center"
          eyebrow={eyebrow}
          title={title}
          eyebrowClassName="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#00a88f] sm:text-xs"
          titleClassName="mt-3 text-balance text-2xl font-bold leading-tight text-white sm:text-3xl md:text-[1.85rem] lg:text-[2rem]"
        />

        <div
          role="region"
          aria-label="Taksheela office locations"
          className="where-you-are-scroller mt-10 flex w-full flex-nowrap gap-4 overflow-x-auto scroll-px-1 py-3 sm:mt-12 sm:gap-5 sm:scroll-px-0 sm:py-4 lg:gap-4 lg:py-5"
        >
          {locations.map((loc) => (
            <Link
              key={loc.id}
              href={loc.href}
              className="block w-[min(78vw,300px)] shrink-0 rounded-2xl border border-white/10 bg-white/[0.06] p-5 no-underline transition-[border-color,box-shadow,background-color,transform] duration-300 ease-out hover:-translate-y-1 hover:border-[#00a88f] hover:bg-white/[0.09] hover:shadow-[0_10px_36px_-10px_rgba(0,168,143,0.35)] focus-visible:-translate-y-1 focus-visible:border-[#00a88f] focus-visible:bg-white/[0.09] focus-visible:shadow-[0_10px_36px_-10px_rgba(0,168,143,0.35)] sm:w-[min(42vw,320px)] sm:p-6 lg:w-[calc((100%-5rem)/5.5)] lg:max-w-[calc((100%-5rem)/5.5)] lg:basis-[calc((100%-5rem)/5.5)] lg:shrink-0"
            >
              <article className="flex h-full flex-col">
                <h3 className="line-clamp-2 min-h-[3.1em] text-left text-lg font-bold leading-snug text-white sm:min-h-[3em] sm:text-xl">
                  {loc.headline}
                </h3>
                <p className="mt-3 line-clamp-4 text-left text-sm leading-relaxed text-slate-400 sm:line-clamp-5 sm:text-[0.9375rem]">
                  {loc.address}
                </p>
                <div className="mt-auto border-t border-white/10 pt-4">
                  <span className="inline-flex text-sm font-semibold transition hover:brightness-110 sm:text-base" style={{ color: TEAL }}>
                    {loc.cta.label}
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </ContainerWrapper>
    </section>
  );
}
