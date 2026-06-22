import { DEFAULT_BLOG_AUTHOR } from "@/lib/blog/map";
import type { ApiBlog } from "@/lib/blog/types";
import { formatDate } from "@/utils/methods";
import Image from "next/image";
import {
  MdAccessTime,
  MdCalendarToday,
  MdCheckCircle,
  MdMenuBook,
} from "react-icons/md";

const TAG_STYLES = [
  {
    border: "border-amber-300",
    bg: "bg-amber-50",
    text: "text-amber-800",
    Icon: MdMenuBook,
    iconClass: "text-violet-500",
  },
  {
    border: "border-emerald-300",
    bg: "bg-emerald-50",
    text: "text-emerald-800",
    Icon: MdCheckCircle,
    iconClass: "text-emerald-600",
  },
  {
    border: "border-sky-300",
    bg: "bg-sky-50",
    text: "text-sky-800",
    Icon: MdMenuBook,
    iconClass: "text-sky-600",
  },
];

const FALLBACK_HERO_IMAGE = "/images/blog-hero-preview.jpg";

type BlogHeroProps = {
  blog: ApiBlog;
};

function editionLabel(date?: string) {
  if (!date) return null;
  const year = new Date(date).getFullYear();
  if (Number.isNaN(year)) return null;
  return `${year} Edition`;
}

export default function BlogHero({ blog }: BlogHeroProps) {
  const categoryName = blog.categoryName?.trim();
  const readTime = blog.readTime?.trim() || "5 min read";
  const formattedDate = blog.date ? formatDate(blog.date) : null;
  const edition = editionLabel(blog.date);
  const heroImage = blog.image || FALLBACK_HERO_IMAGE;

  const tags = (blog.heroTags ?? [])
    .filter((tag) => tag.trim())
    .map((tag) => tag.trim());
  const displayTags =
    tags.length > 0
      ? tags
      : categoryName
        ? [categoryName.toUpperCase()]
        : [];

  return (
    <header className="bg-[#f8fffe] text-[#0B162C]">
      <div className="w-full px-4 py-8 sm:px-6 sm:py-9 lg:px-8 lg:py-8 xl:py-10">
        <div className="mx-auto w-full max-w-4xl">
          {displayTags.length > 0 ? (
            <div className="flex flex-wrap gap-2 sm:gap-2.5 lg:gap-2">
              {displayTags.map((tag, index) => {
                const style = TAG_STYLES[index % TAG_STYLES.length];
                const Icon = style.Icon;
                return (
                  <span
                    key={`${tag}-${index}`}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.62rem] font-extrabold uppercase tracking-[0.12em] sm:px-3 sm:py-1 sm:text-[0.68rem] lg:px-3 lg:py-1 lg:text-[0.65rem] ${style.border} ${style.bg} ${style.text}`}
                  >
                    <Icon
                      className={`h-3.5 w-3.5 shrink-0 lg:h-3.5 lg:w-3.5 ${style.iconClass}`}
                      aria-hidden
                    />
                    {tag}
                  </span>
                );
              })}
            </div>
          ) : null}

          <h1
            className={`text-pretty text-left text-2xl font-black leading-tight tracking-tight break-words sm:text-[1.75rem] lg:text-[1.875rem] lg:leading-snug xl:text-[2.125rem] xl:leading-tight ${displayTags.length > 0 ? "mt-4 sm:mt-5 lg:mt-4" : ""}`}
          >
            {blog.title}
          </h1>

          <div className="relative mt-5 aspect-[2/1] w-full overflow-hidden rounded-2xl border border-[#CBECEF] bg-white shadow-[0_16px_40px_rgba(0,153,158,0.12)] sm:mt-6 lg:mt-5 lg:aspect-auto lg:h-[220px] xl:h-[260px]">
            <Image
              src={heroImage}
              alt={blog.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
              unoptimized={!blog.image}
            />
          </div>

          <div className="mt-5 flex flex-col gap-4 border-t border-[#CBECEF] pt-5 sm:mt-6 sm:gap-5 sm:pt-6 lg:mt-5 lg:flex-row lg:flex-nowrap lg:items-center lg:justify-between lg:gap-6 lg:pt-5">
            <div className="flex min-w-0 items-center gap-3 lg:max-w-[55%]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00999E] text-xs font-extrabold text-white lg:h-11 lg:w-11">
                TI
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-[#0B162C] lg:text-[0.95rem]">
                  {DEFAULT_BLOG_AUTHOR}
                </p>
                <p className="truncate text-xs text-slate-500 lg:text-[0.8rem]">
                  Taksheela Institute of Education
                </p>
              </div>
            </div>

            <div className="flex shrink-0 flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-600 lg:justify-end lg:gap-x-5 lg:text-[0.8rem]">
              {edition ? (
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <MdCalendarToday
                    className="h-3.5 w-3.5 shrink-0 text-[#00999E] lg:h-4 lg:w-4"
                    aria-hidden
                  />
                  {edition}
                </span>
              ) : formattedDate ? (
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <MdCalendarToday
                    className="h-3.5 w-3.5 shrink-0 text-[#00999E] lg:h-4 lg:w-4"
                    aria-hidden
                  />
                  {formattedDate}
                </span>
              ) : null}

              <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                <MdAccessTime
                  className="h-3.5 w-3.5 shrink-0 text-[#00999E] lg:h-4 lg:w-4"
                  aria-hidden
                />
                {readTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
