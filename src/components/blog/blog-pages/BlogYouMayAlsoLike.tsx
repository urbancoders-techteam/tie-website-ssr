"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import { blogHref } from "@/lib/blog/map";
import type { ApiBlog } from "@/lib/blog/types";
import { formatDate } from "@/utils/methods";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Slider, { type Settings } from "react-slick";

const CATEGORY_STYLES: Record<string, { bg: string; text: string }> = {
  "test prep": { bg: "#F3E8FF", text: "#7C3AED" },
  "study abroad": { bg: "#E7F8FA", text: "#00999E" },
  "global immersion": { bg: "#DCFCE7", text: "#166534" },
  "mbbs abroad": { bg: "#FFEDD5", text: "#C45C26" },
  "study in india": { bg: "#DBEAFE", text: "#2563EB" },
  "visa & docs": { bg: "#FEF9C3", text: "#CA8A04" },
  scholarships: { bg: "#FCE7F3", text: "#DB2777" },
};

const DEFAULT_STYLE = { bg: "#E7F8FA", text: "#007F83" };

function getCategoryStyle(categoryName: string) {
  const key = categoryName.trim().toLowerCase();
  return CATEGORY_STYLES[key] ?? DEFAULT_STYLE;
}

function RelatedBlogCard({ blog }: { blog: ApiBlog }) {
  const categoryName = blog.categoryName?.trim() || "Blog";
  const style = getCategoryStyle(categoryName);
  const href = blogHref(blog.slugUrl);
  const formattedDate = blog.date ? formatDate(blog.date) : null;
  const readTime = blog.readTime?.trim() || "5 min read";
  const meta = [formattedDate, readTime].filter(Boolean).join(" · ");

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E8F4F5] bg-white shadow-[0_8px_30px_rgba(11,22,44,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,153,158,0.12)]">
      <Link href={href} className="block">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
          {blog.image ? (
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 90vw, 380px"
              unoptimized
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#0B162C] via-[#174D5A] to-[#00999E]">
              <span className="text-sm font-extrabold uppercase tracking-widest text-white/90">
                {categoryName}
              </span>
            </div>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span
          className="mb-3 w-fit rounded-md px-2.5 py-1 text-[0.65rem] font-extrabold uppercase tracking-[0.14em]"
          style={{ backgroundColor: style.bg, color: style.text }}
        >
          {categoryName}
        </span>

        <h3 className="line-clamp-3 min-h-[4.5rem] text-lg font-extrabold leading-snug text-[#0B162C] transition group-hover:text-[#00999E]">
          <Link href={href}>{blog.title}</Link>
        </h3>

        {meta ? (
          <p className="mt-4 text-sm font-medium text-slate-500">{meta}</p>
        ) : null}
      </div>
    </article>
  );
}

function NavArrow({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={direction === "prev" ? "Previous articles" : "Next articles"}
      onClick={onClick}
      className="blog-related-nav-btn flex shrink-0 items-center justify-center rounded-full border-2 border-[#00999E] bg-white text-[#00999E] shadow-[0_4px_20px_rgba(0,153,158,0.25)] transition hover:bg-[#00999E] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00999E] focus-visible:ring-offset-2"
    >
      {direction === "prev" ? (
        <MdChevronLeft className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden />
      ) : (
        <MdChevronRight className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden />
      )}
    </button>
  );
}

type BlogYouMayAlsoLikeProps = {
  relatedBlogs: ApiBlog[];
  sectionTitle?: string;
};

export default function BlogYouMayAlsoLike({
  relatedBlogs,
  sectionTitle = "More Study Abroad & Education Guides",
}: BlogYouMayAlsoLikeProps) {
  const sliderRef = useRef<Slider>(null);

  if (!relatedBlogs.length) return null;

  const canSlide = relatedBlogs.length > 1;

  const settings: Settings = {
    dots: canSlide,
    arrows: false,
    infinite: relatedBlogs.length > 3,
    speed: 450,
    slidesToShow: Math.min(3, relatedBlogs.length),
    slidesToScroll: 1,
    autoplay: relatedBlogs.length > 3,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, relatedBlogs.length),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goPrev = () => sliderRef.current?.slickPrev();
  const goNext = () => sliderRef.current?.slickNext();

  return (
    <section className="border-t border-[#CBECEF] bg-white py-14 sm:py-16 lg:py-20">
      <ContainerWrapper>
        <div className="text-center">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[#00999E] sm:text-xs">
            <span className="opacity-60" aria-hidden>
              —
            </span>{" "}
            You May Also Like{" "}
            <span className="opacity-60" aria-hidden>
              —
            </span>
          </p>
          <h2 className="mt-3 text-2xl font-black text-[#0B162C] sm:text-3xl lg:text-[2rem]">
            {sectionTitle}
          </h2>
        </div>

        <div className="blog-related-slider-wrap mt-10 sm:mt-12">
          {canSlide ? (
            <div className="flex items-center gap-2 sm:gap-4 lg:gap-5">
              <NavArrow direction="prev" onClick={goPrev} />
              <div className="blog-related-slider min-w-0 flex-1 pb-10">
                <Slider ref={sliderRef} {...settings}>
                  {relatedBlogs.map((item) => (
                    <div key={blogHref(item.slugUrl)} className="h-full px-1.5 outline-none sm:px-2">
                      <RelatedBlogCard blog={item} />
                    </div>
                  ))}
                </Slider>
              </div>
              <NavArrow direction="next" onClick={goNext} />
            </div>
          ) : (
            <div className="blog-related-slider mx-auto max-w-md pb-4">
              <RelatedBlogCard blog={relatedBlogs[0]} />
            </div>
          )}
        </div>
      </ContainerWrapper>
    </section>
  );
}
