import Image from "next/image";

const TEAL = "#00999E";
const TITLE = "#0B162C";

export type BlogPostHome = {
  image: string;
  date?: string;
  title: string;
  description: string;
  slugUrl: string;
};

function stripHtml(html: string): string {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function excerptFrom(html: string, maxWords = 22): string {
  const plain = stripHtml(html);
  const words = plain.split(/\s+/).filter(Boolean);
  if (words.length <= maxWords) return plain;
  return `${words.slice(0, maxWords).join(" ")}…`;
}

function readMinutesFrom(html: string): number {
  const plain = stripHtml(html);
  const words = plain.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

const CATEGORY_POOL = ["STUDY ABROAD", "TEST PREP"] as const;

export default function BlogsCarousel({ posts }: { posts: BlogPostHome[] }) {
  return (
    <div className="mt-8 md:mt-10">
      <div
        role="region"
        aria-label="Latest blog posts"
        className="blogs-home-scroller flex w-full flex-nowrap gap-4 overflow-x-auto overflow-y-visible py-2 pb-8 sm:gap-5 sm:pb-10"
      >
        {posts.map((post, index) => {
          const category = CATEGORY_POOL[index % CATEGORY_POOL.length];
          const excerpt = excerptFrom(post.description);
          const mins = readMinutesFrom(post.description);
          return (
            <article
              key={`${post.slugUrl}-${index}`}
              className="group flex w-[min(88vw,340px)] shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-[#00999E] hover:shadow-[0_12px_40px_-16px_rgba(0,153,158,0.35)] lg:w-[min(32vw,360px)]"
            >
              <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-300 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 88vw, 360px"
                  unoptimized
                />
              </div>
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <p
                  className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] sm:text-xs"
                  style={{ color: TEAL }}
                >
                  {category}
                </p>
                <h3
                  className="mt-2 line-clamp-3 text-base font-bold leading-snug sm:text-lg"
                  style={{ color: TITLE }}
                >
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-3 text-sm">
                  <span className="shrink-0 text-slate-500">{mins} min read</span>
                  <a
                    href={post.slugUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 font-semibold transition hover:opacity-80"
                    style={{ color: TEAL }}
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
