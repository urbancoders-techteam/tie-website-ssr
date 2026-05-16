import Link from "next/link";
import { MdAccessTime, MdArrowForward } from "react-icons/md";

import type { BlogPost } from "./blogHomePageData";
import { DEFAULT_GUIDE_HREF } from "./blogHomePageData";

export default function BlogCard({
  post,
  compact = false,
}: {
  post: BlogPost;
  compact?: boolean;
}) {
  const postHref = post.href ?? DEFAULT_GUIDE_HREF;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#CBECEF] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,153,158,0.16)]">
      <Link href={postHref}>
        <div
          className={`flex items-center justify-center bg-gradient-to-br ${post.gradient} ${
            post.featured ? "h-72 sm:h-80" : compact ? "h-40" : "h-52"
          }`}
        >
          <span
            className={`rounded-2xl border border-white/20 bg-white/15 px-5 py-3 font-black uppercase tracking-[0.22em] text-white shadow-lg backdrop-blur ${
              post.featured ? "text-3xl" : "text-xl"
            }`}
          >
            {post.icon}
          </span>
        </div>
      </Link>

      <div className={`flex flex-1 flex-col ${compact ? "p-5" : "p-6"}`}>
        <span className="mb-3 w-fit rounded-full bg-[#E7F8FA] px-3 py-1 text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-[#007F83]">
          {post.category}
        </span>
        <h2
          className={`font-extrabold leading-snug text-[#0B162C] ${
            post.featured ? "text-2xl md:text-3xl" : compact ? "text-lg" : "text-xl"
          }`}
        >
          <Link href={postHref} className="transition hover:text-[#00999E]">
            {post.title}
          </Link>
        </h2>
        {!compact && (
          <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{post.description}</p>
        )}
        <Link
          href={postHref}
          className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-bold text-[#00999E] transition group-hover:gap-2"
        >
          Read Guide
          <MdArrowForward className="h-4 w-4" aria-hidden />
        </Link>

        <div className="mt-5 flex items-center justify-between gap-4 border-t border-[#E4F4F6] pt-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00999E] text-xs font-extrabold text-white">
              {post.authorInitials}
            </div>
            <div className="min-w-0">
              {!compact && (
                <p className="truncate text-sm font-bold text-[#0B162C]">{post.author}</p>
              )}
              <p className="truncate text-xs text-slate-500">{post.date}</p>
            </div>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-slate-500">
            <MdAccessTime className="h-4 w-4" aria-hidden />
            {post.readTime}
          </span>
        </div>
      </div>
    </article>
  );
}

