/* eslint-disable @typescript-eslint/no-explicit-any */
import ContainerWrapper from "../ContainerWrapper";
import { baseUrl } from "@/utils/config";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";
import { formatDate } from "@/utils/methods";
import BlogsCarousel, { type BlogPostHome } from "./BlogsCarousel";

const TEAL = "#00999E";
const TITLE = "#0B162C";

// Don't cache: `item.image` is a pre-signed S3 URL with short expiry.

interface BlogData {
  image: string;
  date?: string;
  title: string;
  description: string;
  slugUrl: string;
  content?: string;
}

async function fetchBlogs(): Promise<BlogData[]> {
  try {
    const res = await fetch(`${baseUrl}blogs/web`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: "",
      },
    });

    if (!res.ok) {
      if (res.status === 404) return [];
      const body = await res.text().catch(() => "");
      console.warn("Blog fetch failed", res.status, body);
      return [];
    }

    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      const body = await res.text().catch(() => "");
      console.warn("Blog fetch returned non-JSON", contentType, body);
      return [];
    }

    const json = await res.json();
    return (json?.data || [])?.map((item: any) => ({
      title: item.title,
      description: item.description,
      image: item.image,
      slugUrl: item.slugUrl,
      date: formatDate(item.date),
    }));
  } catch (error) {
    console.warn("Blog fetch failed", error);
    return [];
  }
}

export default async function Blogs() {
  const scrollData: BlogPostHome[] = await fetchBlogs();

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
                  href="https://blog.taksheela.com/"
                  target="_blank"
                  rel="noopener noreferrer"
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
