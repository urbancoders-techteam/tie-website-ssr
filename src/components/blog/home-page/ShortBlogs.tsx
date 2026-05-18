import Image from "next/image";
import Link from "next/link";

import ContainerWrapper from "@/components/ContainerWrapper";
import { shortBlogColumns, type ShortBlogColumn, type ShortBlogPost } from "./shortBlogsData";

const TEAL = "text-[#00A79D]";
const NAVY = "text-[#002147]";
const BODY = "text-[#4A4A4A]";
const META = "text-[#757575]";

const TAG_STYLES = {
  immersion: "bg-[#ecfdf5] text-[#166534]",
  "study-india": "bg-[#eff6ff] text-[#1e40af]",
} as const;

function ColumnEyebrow({ label }: { label: string }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="h-px flex-1 bg-[#00A79D]/25" aria-hidden />
      <span className={`shrink-0 text-[10px] font-extrabold uppercase tracking-[0.2em] ${TEAL}`}>
        — {label} —
      </span>
      <span className="h-px flex-1 bg-[#00A79D]/25" aria-hidden />
    </div>
  );
}

function ShortBlogCard({
  post,
  tagVariant,
}: {
  post: ShortBlogPost;
  tagVariant: ShortBlogColumn["tagVariant"];
}) {
  return (
    <article className="flex gap-3 rounded-xl border border-slate-100 bg-white p-3 shadow-[0_4px_20px_rgba(0,33,71,0.06)] transition hover:shadow-[0_8px_28px_rgba(0,33,71,0.1)] sm:gap-4 sm:p-4">
      <Link
        href={post.href}
        className="relative h-[72px] w-[88px] shrink-0 overflow-hidden rounded-lg sm:h-20 sm:w-[100px]"
      >
        <Image
          src={post.imageSrc}
          alt={post.imageAlt}
          fill
          className="object-cover"
          sizes="100px"
        />
      </Link>

      <div className="min-w-0 flex-1">
        <span
          className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${TAG_STYLES[tagVariant]}`}
        >
          {post.tagLabel}
        </span>
        <h3 className={`mt-2 text-sm font-bold leading-snug sm:text-base ${NAVY}`}>
          <Link href={post.href} className="transition hover:text-[#00A79D]">
            {post.title}
          </Link>
        </h3>
        <p className={`mt-1.5 line-clamp-2 text-xs leading-relaxed sm:text-[13px] ${BODY}`}>
          {post.description}
        </p>
        <p className={`mt-2 text-xs sm:text-[13px] ${META}`}>
          {post.date} · {post.readTime}
        </p>
      </div>
    </article>
  );
}

function ShortBlogColumnBlock({ column }: { column: ShortBlogColumn }) {
  return (
    <div>
      <ColumnEyebrow label={column.eyebrow} />
      <div className="mb-5 flex items-start justify-between gap-4 sm:mb-6">
        <h2 className={`max-w-md text-xl font-extrabold leading-snug sm:text-2xl ${NAVY}`}>
          {column.heading}
        </h2>
        <Link
          href={column.viewAllHref}
          className={`inline-flex shrink-0 items-center gap-0.5 text-sm font-bold transition hover:underline ${TEAL}`}
        >
          {column.viewAllLabel}
          <span aria-hidden>→</span>
        </Link>
      </div>
      <div className="flex flex-col gap-3 sm:gap-4">
        {column.posts.map((post) => (
          <ShortBlogCard key={post.title} post={post} tagVariant={column.tagVariant} />
        ))}
      </div>
    </div>
  );
}

export default function ShortBlogs() {
  return (
    <section className="bg-[#f4f6f8] py-10 sm:py-12 lg:py-14">
      <ContainerWrapper>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {shortBlogColumns.map((column) => (
            <ShortBlogColumnBlock key={column.eyebrow} column={column} />
          ))}
        </div>
      </ContainerWrapper>
    </section>
  );
}
