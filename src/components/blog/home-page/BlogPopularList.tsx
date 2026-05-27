import Link from "next/link";
import { MdLocalFireDepartment } from "react-icons/md";

import type { PopularPostItem } from "@/lib/blog/types";

export default function BlogPopularList({ posts }: { posts: PopularPostItem[] }) {
  return (
    <aside>
      <div className="mb-5 flex items-center gap-2 text-xl font-black text-[#0B162C]">
        <MdLocalFireDepartment className="h-6 w-6 text-[#00999E]" aria-hidden />
        Most Popular
      </div>
      <div className="space-y-3">
        {posts.map((post, index) => (
          <Link
            key={`${post.href}-${post.title}`}
            href={post.href}
            className="group flex gap-4 rounded-2xl border border-[#CBECEF] bg-white p-4 transition hover:border-[#00999E] hover:shadow-md"
          >
            <span className="w-10 shrink-0 text-3xl font-black leading-none text-[#BFE6EA] transition group-hover:text-[#00999E]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>
              <span className="text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-[#00999E]">
                {post.category}
              </span>
              <span className="mt-1 block text-sm font-extrabold leading-snug text-[#0B162C]">
                {post.title}
              </span>
              <span className="mt-1 block line-clamp-2 text-xs font-semibold text-slate-500">
                {post.meta}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
