import { DEFAULT_BLOG_AUTHOR,
  //  excerptFrom 
  } from "@/lib/blog/map";
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
    border: "border-amber-400/70",
    Icon: MdMenuBook,
    iconClass: "text-violet-300",
  },
  {
    border: "border-emerald-400/70",
    Icon: MdCheckCircle,
    iconClass: "text-emerald-400",
  },
  {
    border: "border-sky-400/70",
    Icon: MdMenuBook,
    iconClass: "text-sky-300",
  },
];

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

  const tags = (blog.heroTags ?? [])
    .filter((tag) => tag.trim())
    .map((tag) => tag.trim());
  const displayTags =
    tags.length > 0
      ? tags
      : categoryName
        ? [categoryName.toUpperCase()]
        : [];

  // const heroDescription =
  //   blog.heroDescription?.trim() ||
  //   blog.excerpt?.trim() ||
  //   excerptFrom(blog.description, 40);

  return (
    <header className="relative min-h-[600px] overflow-hidden bg-[#0B162C] text-white">
      {blog.image ? (
        <>
          <Image
            src={blog.image}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
            unoptimized
            aria-hidden
          />
          <div className="absolute inset-0 bg-[#0B162C]/75" aria-hidden />
        </>
      ) : null}

      <div className="relative flex min-h-[600px] w-full items-center justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="w-full max-w-5xl">
          {displayTags.length > 0 ? (
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {displayTags.map((tag, index) => {
                const style = TAG_STYLES[index % TAG_STYLES.length];
                const Icon = style.Icon;
                return (
                  <span
                    key={`${tag}-${index}`}
                    className={`inline-flex items-center gap-1.5 rounded-full border bg-white/5 px-3 py-1 text-[0.65rem] font-extrabold uppercase tracking-[0.12em] backdrop-blur-sm sm:px-3.5 sm:py-1.5 sm:text-[0.7rem] ${style.border}`}
                  >
                    <Icon className={`h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 ${style.iconClass}`} aria-hidden />
                    {tag}
                  </span>
                );
              })}
            </div>
          ) : null}

          <h1 className="mt-6 w-full max-w-5xl text-left text-2xl font-black leading-tight tracking-tight break-words sm:mt-7 sm:text-3xl lg:text-[2.35rem] lg:leading-[1.15]">
            {blog.title}
          </h1>


          <div className="mt-6 flex flex-col gap-5 border-t border-white/15 pt-6 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6 sm:pt-8">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00999E] text-xs font-extrabold text-white sm:h-12 sm:w-12 sm:text-sm">
                TI
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-white sm:text-base">{DEFAULT_BLOG_AUTHOR}</p>
                <p className="text-xs text-white/65 sm:text-sm">Taksheela Institute of Education</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-white/80 sm:gap-6 sm:text-sm">
              {edition ? (
                <span className="inline-flex items-center gap-1.5">
                  <MdCalendarToday className="h-4 w-4 text-[#5EEAD4]" aria-hidden />
                  {edition}
                </span>
              ) : formattedDate ? (
                <span className="inline-flex items-center gap-1.5">
                  <MdCalendarToday className="h-4 w-4 text-[#5EEAD4]" aria-hidden />
                  {formattedDate}
                </span>
              ) : null}

              <span className="inline-flex items-center gap-1.5">
                <MdAccessTime className="h-4 w-4 text-[#5EEAD4]" aria-hidden />
                {readTime} read
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
