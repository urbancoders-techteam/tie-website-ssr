import ContainerWrapper from "../ContainerWrapper";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";
import { fetchBlogsWeb } from "@/lib/blog/fetch";
import { mapApiBlogToPost } from "@/lib/blog/map";
import BlogsCarousel, { type BlogPostHome } from "./BlogsCarousel";

const TEAL = "#00999E";
const TITLE = "#0B162C";

/** Home page blog carousel only — always route to on-site `/blog/[slug]`. */
function homeBlogHref(slugUrl: string): string {
  if (!slugUrl?.trim()) return "/blog";

  let path = slugUrl.trim();

  try {
    if (/^https?:\/\//i.test(path)) {
      path = new URL(path).pathname;
    }
  } catch {
    // keep path as-is
  }

  path = path.replace(/^\/+/, "").replace(/^blog\/?/i, "");
  const slug =
    path
      .split("?")[0]
      .split("#")[0]
      .replace(/\/+$/, "")
      .split("/")
      .filter(Boolean)
      .pop() ?? "";

  if (!slug) return "/blog";
  return `/blog/${slug}`;
}

async function fetchHomeBlogs(): Promise<BlogPostHome[]> {
  const blogs = await fetchBlogsWeb();
  return blogs.map((blog, index) => {
    const post = mapApiBlogToPost(blog, index);
    return {
      title: post.title,
      description: blog.description,
      image: post.image || "",
      slugUrl: homeBlogHref(blog.slugUrl),
      date: post.date,
      category: post.category,
      readTime: post.readTime,
    };
  }).filter((post) => post.image);
}

export default async function Blogs() {
  const scrollData = await fetchHomeBlogs();

  return (
    <section id="blog-section" className="w-full bg-white py-12 md:py-16 lg:py-20">
      <ContainerWrapper>
        {scrollData.length > 0 ? (
          <>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
              <div className="max-w-3xl">
                <p
                  className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.28em] sm:text-xs lg:text-left"
                  style={{ color: TEAL }}
                >
                  <span className="opacity-70" aria-hidden>
                    —
                  </span>{" "}
                  BLOGS & NEWSLETTERS{" "}
                  <span className="opacity-70" aria-hidden>
                    —
                  </span>
                </p>
                <h2
                  className="mt-3 text-balance text-center text-2xl font-bold leading-tight sm:text-3xl md:text-[1.85rem] lg:text-left lg:text-[2rem]"
                  style={{ color: TITLE }}
                >
                  Latest Insights on Studying Abroad
                </h2>
              </div>
              <div className="flex justify-center lg:justify-end lg:shrink-0">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-0.5 rounded-lg border-2 px-5 py-2.5 text-sm font-semibold transition hover:bg-[#00999E]/5 sm:text-base"
                  style={{ borderColor: TEAL, color: TEAL }}
                >
                  View All
                  <MdChevronRight className="h-5 w-5" aria-hidden />
                </Link>
              </div>
            </div>

            <BlogsCarousel posts={scrollData} />
          </>
        ) : (
          <div className="py-10 text-center">
            <p className="text-lg text-slate-600">
              No blogs or newsletters available at the moment.
            </p>
          </div>
        )}
      </ContainerWrapper>
    </section>
  );
}
