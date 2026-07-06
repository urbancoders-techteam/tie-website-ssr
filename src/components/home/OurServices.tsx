"use client";

import type { CSSProperties } from "react";
import ContainerWrapper from "../ContainerWrapper";
import {
  ourserviceshomedata,
  ourServicesCornerImages,
} from "@/constants/home";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import HomeSectionHeader from "./HomeSectionHeader";
import Slider from "react-slick";
import type { Settings } from "react-slick";

/** Matches design reference — vibrant teal blocks + accents */
const TEAL = "#00a88f";

const plusPatternStyle: CSSProperties = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6V5z' fill='%23ffffff' fill-opacity='0.07'/%3E%3C/svg%3E")`,
};

const mobileSliderSettings: Settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 450,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4200,
};

const mobileSliderWrapClass =
  "sm:hidden [&_.slick-list]:overflow-hidden [&_.slick-slide]:px-1 [&_ul.slick-dots]:!bottom-[-30px] [&_ul.slick-dots>li]:!m-0 [&_ul.slick-dots>li>button:before]:!text-[#00a88f] [&_ul.slick-dots>li>button:before]:!opacity-35 [&_ul.slick-dots>li.slick-active>button:before]:!opacity-90";

type ServiceData = {
  title: string;
  description: string;
  path: string;
};

type CornerImageData = {
  src: string | StaticImageData;
  alt: string;
};

type ServiceWithImage = {
  service: ServiceData;
  image: CornerImageData;
};

function ServiceContent({
  title,
  description,
  href,
  mobile = false,
}: {
  title: string;
  description: string;
  href: string;
  mobile?: boolean;
}) {
  const wrapperClass = mobile
    ? "relative z-10 flex h-full flex-col justify-between gap-4 p-5 sm:gap-5 sm:p-6"
    : "relative z-10 flex h-full min-h-0 flex-col justify-between gap-4 p-5 sm:gap-5 sm:p-6 lg:gap-3 lg:p-5 xl:gap-4 xl:p-6 2xl:p-7";

  const titleClass = mobile
    ? "text-[0.9875rem] font-bold uppercase leading-snug tracking-[0.18em] text-white sm:text-sm"
    : "text-[0.9875rem] font-bold uppercase leading-snug tracking-[0.18em] text-white sm:text-sm md:text-[0.8125rem] lg:text-[0.6875rem] xl:text-[0.75rem] 2xl:text-[0.8125rem]";

  const descriptionClass = mobile
    ? "text-[0.8125rem] font-normal leading-[1.65] text-white sm:text-[0.875rem]"
    : "text-[0.8125rem] font-normal leading-[1.65] text-white sm:text-[0.875rem] lg:text-[0.75rem] lg:leading-[1.55] xl:text-[0.8125rem] xl:leading-[1.62] 2xl:text-[0.875rem]";

  const buttonClass = mobile
    ? "relative z-20 inline-flex w-fit shrink-0 items-center rounded-md border border-white/25 bg-white px-4 py-2 text-[0.8125rem] font-semibold shadow-sm transition-[background-color,box-shadow,transform] duration-200 hover:bg-white hover:shadow-md active:scale-[0.99]"
    : "relative inline-flex w-fit shrink-0 items-center rounded-md bg-white px-4 py-2 text-[0.8125rem] font-semibold shadow-sm transition-[background-color,box-shadow,transform] duration-200 hover:bg-white hover:shadow-md active:scale-[0.99] sm:px-5 sm:py-2.5 sm:text-sm lg:px-4 lg:py-2 lg:text-[0.75rem] xl:px-5 xl:py-2.5 xl:text-[0.8125rem]";

  return (
    <div className={wrapperClass}>
      <div className="min-h-0 space-y-3 sm:space-y-3.5">
        <h3 className={titleClass}>{title}</h3>
        <p className={descriptionClass}>{description}</p>
      </div>
      <div className={mobile ? "pt-1" : undefined}>
        <Link
          href={href}
          className={buttonClass}
          style={{ color: TEAL }}
        >
          View Details
          <span
            className="ml-0.5 translate-x-0 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden
          >
            ›
          </span>
        </Link>
      </div>
    </div>
  );
}

function ServiceCell({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div
      className="group relative flex h-full min-h-[11rem] flex-col text-white sm:min-h-[12rem] lg:min-h-0 lg:h-full"
      style={{ backgroundColor: TEAL, ...plusPatternStyle }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-white/[0.06] via-transparent to-transparent"
        aria-hidden
      />
      <ServiceContent title={title} description={description} href={href} />
    </div>
  );
}

function MosaicImage({
  src,
  alt,
}: {
  src: string | StaticImageData;
  alt: string;
}) {
  return (
    <div className="relative h-full min-h-[10rem] bg-[#e8eef0] sm:min-h-[11rem] lg:min-h-0 lg:h-full">
      <Image
        fill
        loading="lazy"
        alt={alt}
        src={src}
        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
        className="object-cover object-center transition-transform duration-500 ease-out lg:group-hover:scale-[1.02]"
      />
    </div>
  );
}

function MosaicImageCell(props: {
  src: string | StaticImageData;
  alt: string;
}) {
  return (
    <div className="group relative h-full min-h-0 overflow-hidden">
      <MosaicImage {...props} />
    </div>
  );
}

function MobileServiceCard({
  imageSrc,
  imageAlt,
  title,
  description,
  href,
}: {
  imageSrc: string | StaticImageData;
  imageAlt: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_28px_-10px_rgba(15,39,68,0.14)] ring-1 ring-black/5">
      <div className="relative aspect-[16/10] w-full bg-[#e8eef0]">
        <Image
          fill
          loading="lazy"
          alt={imageAlt}
          src={imageSrc}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div
        className="group relative flex min-h-[11rem] flex-col text-white"
        style={{ backgroundColor: TEAL, ...plusPatternStyle }}
      >
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-white/[0.06] via-transparent to-transparent"
          aria-hidden
        />
        <ServiceContent title={title} description={description} href={href} mobile />
      </div>
    </div>
  );
}

export default function OurServices() {
  const serviceItems = ourserviceshomedata as ServiceData[];
  const cornerImages = ourServicesCornerImages as CornerImageData[];

  const cards: ServiceWithImage[] = serviceItems
    .map((service, idx) => ({
      service,
      image: cornerImages[idx],
    }))
    .filter((item): item is ServiceWithImage => Boolean(item.image));

  const desktopSlots: ReadonlyArray<
    { kind: "image"; index: number } | { kind: "service"; index: number }
  > = [
      { kind: "image", index: 0 },
      { kind: "service", index: 0 },
      { kind: "service", index: 1 },
      { kind: "image", index: 1 },
      { kind: "image", index: 2 },
      { kind: "service", index: 2 },
      { kind: "service", index: 3 },
      { kind: "image", index: 3 },
    ];

  return (
    <section className="bg-[#f0f9f8]">
      <ContainerWrapper className="py-10 md:py-12 lg:py-12 xl:py-14 2xl:py-16">
        <HomeSectionHeader
          headerClassName="mx-auto mb-8 max-w-4xl text-center sm:mb-9 md:mb-10 lg:mb-10 xl:mb-11"
          eyebrow="OUR SERVICES"
          title="One Platform. Every Path to Global Education."
          subtitle={
            <><a href="/study-abroad" className="underline hover:text-[#00999E] transition-colors">Study Abroad</a>, MBBS, Immersion or Test Prep: Taksheela Institute of Education is among India&apos;s most trusted overseas education consultants in India, your single partner for international education from India</>
          }
          eyebrowClassName="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#00a88f] sm:mb-3.5 sm:text-[0.7rem] md:tracking-[0.32em]"
          titleClassName="text-balance text-2xl font-bold leading-[1.15] tracking-tight text-[#0f2744] sm:text-3xl md:text-[2rem] md:leading-[1.2] lg:text-[1.85rem] xl:text-[2.125rem] 2xl:text-[2.5rem]"
          subtitleClassName="mx-auto mt-4 max-w-3xl text-pretty text-sm leading-[1.65] text-slate-600 sm:mt-5 sm:text-[0.9375rem] md:text-base lg:mt-4 lg:max-w-[40rem] lg:text-[0.9375rem] lg:leading-[1.6] xl:mt-5 xl:max-w-[42rem] xl:text-base"
        />

        {/* MOBILE ONLY (sm and below): swipeable service cards */}
        <div className={mobileSliderWrapClass}>
          <Slider {...mobileSliderSettings}>
            {cards.map(({ service, image }) => (
              <div key={service.path} className="pb-10">
                <MobileServiceCard
                  imageSrc={image.src}
                  imageAlt={image.alt}
                  title={service.title}
                  description={service.description}
                  href={service.path}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* DESKTOP / TABLET (sm and above): 2x4 mosaic grid layout */}
        <div className="overflow-hidden rounded-2xl bg-white p-px shadow-[0_4px_28px_-6px_rgba(15,39,68,0.1)] ring-1 ring-white">
          <div
            className="hidden grid-cols-1 gap-px bg-white sm:grid sm:grid-cols-2 lg:h-[24rem] lg:w-full lg:grid-cols-4 lg:grid-rows-2 xl:h-[26rem] 2xl:h-[27rem]"
          >
            {desktopSlots.map((slot) => {
              if (slot.kind === "image") {
                const image = cards[slot.index]?.image;
                if (!image) return null;
                return (
                  <MosaicImageCell
                    key={`image-${slot.index}`}
                    src={image.src}
                    alt={image.alt}
                  />
                );
              }

              const service = cards[slot.index]?.service;
              if (!service) return null;
              return (
                <ServiceCell
                  key={`service-${slot.index}`}
                  title={service.title}
                  description={service.description}
                  href={service.path}
                />
              );
            })}
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
