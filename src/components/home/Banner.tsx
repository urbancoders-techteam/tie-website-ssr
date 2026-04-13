"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import Slider from "react-slick";
import Image from "next/image";
import RegisterForm from "./RegisterForm";
import ContainerWrapper from "../ContainerWrapper";
import { baseUrl } from "@/utils/config";

interface BannerItem {
  id: string;
  category?: string;
  title: string;
  content: string;
  image: string;
}

type ApiBannerRow = {
  _id: string;
  category?: string;
  title?: string;
  content?: string;
  subContent?: string;
  bannerImg?: string;
};

/** Mobile: slightly shorter hero so form fits on one screen. md+: fill viewport below sticky header (~80px bar + 3px border). */
const SLIDE_HEIGHT = "h-[58vh] min-h-[300px] md:h-[calc(100dvh-83px)]";
const SLICK_FULL_HEIGHT =
  "[&_.slick-slider]:relative [&_.slick-slider]:h-full [&_.slick-slider]:overflow-visible [&_.slick-list]:h-full [&_.slick-track]:h-full [&_.slick-slide]:h-full [&_.slick-slide>div]:h-full";
/** Pull dots inside the banner (slick-theme defaults to bottom:-25px, which clips below fixed-height heroes). */
const SLICK_DOTS =
  "[&_ul.slick-dots]:!relative [&_ul.slick-dots]:!inset-auto [&_ul.slick-dots]:!mt-0 [&_ul.slick-dots]:!mb-0 [&_ul.slick-dots]:!w-auto [&_ul.slick-dots]:!translate-none [&_li.slick-active>div]:!bg-[#00B2B8] [&_li.slick-active>div]:!opacity-100";
const TITLE_CLASS =
  "text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight";
const DEFAULT_CATEGORY = "TEST PREPARATION";
const FALLBACK_BODY =
  "Expert coaching for IELTS, TOEFL, PTE, GRE, GMAT, SAT & DUOLINGO. Personalised study plans with certified trainers online and at centres across India.";

function BannerArrow({
  onClick,
  direction,
}: {
  onClick?: () => void;
  direction: "prev" | "next";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      className="banner-mobile-arrow absolute bottom-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white/85 backdrop-blur transition hover:bg-black/35 md:hidden"
      style={direction === "prev" ? { right: "3.25rem" } : { right: "1rem" }}
    >
      <span className="text-lg leading-none" aria-hidden>
        {direction === "prev" ? "‹" : "›"}
      </span>
    </button>
  );
}

function mapApiRowToBanner(row: ApiBannerRow): BannerItem | null {
  const image = row.bannerImg?.trim();
  if (!image) return null;
  return {
    id: row._id,
    category: row.category ?? row.title ?? undefined,
    title: row.title ?? row.content ?? "",
    content: row.content ?? row.subContent ?? "",
    image,
  };
}

function BannerHeroTitle({ title }: { title: string }) {
  const trimmed = title.trim();
  const isHtml = trimmed.includes("<") && trimmed.includes(">");
  if (isHtml) {
    return (
      <h2
        className={`${TITLE_CLASS} [&_span]:text-[#00B2B8]`}
        dangerouslySetInnerHTML={{ __html: trimmed }}
      />
    );
  }
  return <h2 className={TITLE_CLASS}>{trimmed}</h2>;
}

function BannerSkeleton() {
  return (
    <div className={`relative w-full ${SLIDE_HEIGHT} animate-pulse`}>
      <div className="absolute inset-0 bg-gray-300" />
      <div className="absolute inset-0 flex items-center bg-black/40">
        <ContainerWrapper>
          <div className="flex w-full items-center justify-between gap-4">
            <div className="w-full space-y-4 md:w-1/2">
              <div className="h-10 w-3/4 rounded bg-gray-400" />
              <div className="h-10 w-1/2 rounded bg-gray-400" />
            </div>
            <div className="hidden w-1/2 space-y-4 md:block">
              <div className="h-12 w-full rounded bg-gray-400" />
              <div className="h-12 w-full rounded bg-gray-400" />
              <div className="h-12 w-full rounded bg-gray-400" />
            </div>
          </div>
        </ContainerWrapper>
      </div>
    </div>
  );
}

function BannerSlide({ item }: { item: BannerItem }) {
  const category = (item.category || DEFAULT_CATEGORY).toUpperCase();
  const body = item.content || FALLBACK_BODY;

  return (
    <div className={`relative ${SLIDE_HEIGHT}`}>
      <Image src={item.image} alt={item.title} fill className="object-cover" priority sizes="100vw" />

      <div className="absolute inset-0 flex items-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/10" />
        <ContainerWrapper>
          <div className="relative flex w-full items-center justify-between gap-6">
            <div className="w-full md:w-[55%] lg:w-1/2">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold tracking-wide text-white">
                <span className="inline-block h-2 w-2 rounded-full bg-[#00B2B8]" />
                {category}
              </div>

              <div className="mt-4">
                <BannerHeroTitle title={item.title} />
              </div>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 md:text-[13px]">{body}</p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-[#0B1B22] shadow-sm transition hover:bg-white/90"
                >
                  <span className="md:hidden">Explore Destinations &rsaquo;</span>
                  <span className="hidden md:inline">Start Coaching &rsaquo;</span>
                </button>
                <button
                  type="button"
                  className="rounded-md border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <span className="md:hidden">Schedule A Meeting</span>
                  <span className="hidden md:inline">Book Free Demo</span>
                </button>
              </div>
            </div>

            <div className="hidden w-[340px] shrink-0 items-center justify-center md:flex lg:w-[360px]">
              <RegisterForm floating={false} />
            </div>
          </div>
        </ContainerWrapper>
      </div>
    </div>
  );
}

export default function Banner() {
  const [banners, setBanners] = useState<BannerItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(`${baseUrl}web-banner`);
        if (!res.ok) throw new Error(`Banner request failed: ${res.status}`);
        const data: { data?: { formattedData?: ApiBannerRow[] } } = await res.json();
        const rows = data?.data?.formattedData;
        if (!Array.isArray(rows) || cancelled) return;

        const next: BannerItem[] = [];
        for (const row of rows) {
          const item = mapApiRowToBanner(row);
          if (item) next.push(item);
        }
        if (!cancelled) setBanners(next);
      } catch (err) {
        console.error("Failed to fetch banner data", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const sliderSettings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      fade: true,
      arrows: true,
      prevArrow: <BannerArrow direction="prev" />,
      nextArrow: <BannerArrow direction="next" />,
      appendDots: (dots: ReactNode) => (
        <div className="pointer-events-none absolute inset-x-0 bottom-6 z-30 flex justify-center px-4 md:bottom-16">
          <ul className="pointer-events-auto flex items-center justify-center gap-2">{dots}</ul>
        </div>
   
      ),
      customPaging: () => (
        <div className="h-[3px] w-8 rounded-full bg-white/50 shadow-sm transition-all" />
      ),
    }),
    [],
  );

  if (loading) {
    return <BannerSkeleton />;
  }

  if (banners.length === 0) {
    return null;
  }

  return (
    <>
      <div className={`relative w-full ${SLIDE_HEIGHT} ${SLICK_FULL_HEIGHT} ${SLICK_DOTS}`}>
        <Slider {...sliderSettings}>
          {banners.map((item) => (
            <BannerSlide key={item.id} item={item} />
          ))}
        </Slider>
      </div>
      {/* Mobile-only: keep the form as a separate, clean block (no overlap) */}
      <div className="block bg-[#0B162C] px-4 pb-10 pt-5 md:hidden">
        <RegisterForm floating={false} variant="dark" />
      </div>
    </>
  );
}
