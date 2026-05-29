import { blogHref } from "@/lib/blog/map";
import type { ApiBlog } from "@/lib/blog/types";
import { formatDate } from "@/utils/methods";
import Image from "next/image";
import Link from "next/link";
import { MdDescription } from "react-icons/md";

type BlogRelatedArticlesProps = {
  relatedBlogs: ApiBlog[];
  maxItems?: number;
};

function formatReadTime(readTime?: string | null) {
  const value = readTime?.trim();
  if (!value) return "5 min";
  return value.replace(/\s*read\s*$/i, "").trim() || "5 min";
}

export default function BlogRelatedArticles({
  relatedBlogs,
  maxItems = 3,
}: BlogRelatedArticlesProps) {
  const items = relatedBlogs.slice(0, maxItems);
  if (!items.length) return null;

  return (
    <section
      className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_4px_24px_rgba(11,22,44,0.06)] sm:p-6"
      aria-labelledby="related-articles-heading"
    >
      <div className="flex items-center gap-2.5">
        <MdDescription className="h-5 w-5 shrink-0 text-[#00999E]" aria-hidden />
        <h2 id="related-articles-heading" className="text-base font-bold text-[#0B162C]">
          Related Articles
        </h2>
      </div>

      <ul className="mt-5 space-y-5">
        {items.map((blog) => {
          const href = blogHref(blog.slugUrl);
          const formattedDate = blog.date ? formatDate(blog.date) : null;
          const readTime = formatReadTime(blog.readTime);
          const meta = [formattedDate, readTime].filter(Boolean).join(" · ");

          return (
            <li key={`${href}-${blog.title}`}>
              <Link
                href={href}
                className="group flex gap-3 rounded-lg outline-none transition focus-visible:ring-2 focus-visible:ring-[#00999E] focus-visible:ring-offset-2"
              >
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-slate-100 sm:h-[3.75rem] sm:w-[3.75rem]">
                  {blog.image ? (
                    <Image
                      src={blog.image}
                      alt=""
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="60px"
                      unoptimized
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0B162C] via-[#174D5A] to-[#00999E] px-1 text-center text-[0.55rem] font-extrabold uppercase leading-tight tracking-wide text-white">
                      Blog
                    </div>
                  )}
                </div>

                <div className="min-w-0 flex-1 pt-0.5">
                  <p className="line-clamp-3 text-sm font-bold leading-snug text-[#0B162C] transition group-hover:text-[#00999E]">
                    {blog.title}
                  </p>
                  {meta ? (
                    <p className="mt-1.5 text-xs font-medium text-slate-500">{meta}</p>
                  ) : null}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
