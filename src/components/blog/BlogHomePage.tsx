"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  MdAccessTime,
  MdArrowForward,
  MdLocalFireDepartment,
  MdMailOutline,
  MdSearch,
} from "react-icons/md";

const DARK = "#0B162C";

type BlogPost = {
  title: string;
  description: string;
  category: string;
  author: string;
  authorInitials: string;
  date: string;
  readTime: string;
  icon: string;
  gradient: string;
  featured?: boolean;
};

const categories = [
  "All",
  "Study Abroad",
  "IELTS & GRE",
  "MBBS Abroad",
  "Visa Guides",
  "Scholarships",
  "Student Life",
  "Immersion",
  "Career Abroad",
];

const featuredPosts: BlogPost[] = [
  {
    title: "UK Student Visa 2025: Everything Indian Students Need to Know Before Applying",
    description:
      "From CAS letters to ATAS certificates, here is a practical walkthrough of the UK student visa process, financial requirements and common mistakes that delay applications.",
    category: "Study Abroad",
    author: "Priya Rajan",
    authorInitials: "PR",
    date: "April 22, 2025",
    readTime: "8 min read",
    icon: "UK",
    gradient: "from-[#143C52] via-[#227B8D] to-[#00A99D]",
    featured: true,
  },
  {
    title: "Score 7+ in IELTS Writing: Proven Strategies from Our Coaches",
    description:
      "Task 1 vs Task 2 structure, common errors Indian students make and daily practice habits that move the needle.",
    category: "IELTS & GRE",
    author: "Ankit Mehta",
    authorInitials: "AM",
    date: "April 18, 2025",
    readTime: "6 min read",
    icon: "IELTS",
    gradient: "from-[#0B162C] via-[#174D5A] to-[#00999E]",
  },
  {
    title: "MBBS in Russia 2025: Fees, Universities & FMGE Preparation Guide",
    description:
      "NMC-recognised universities, realistic cost breakdowns from Rs. 20L and how to prepare for the FMGE screening test on return.",
    category: "MBBS Abroad",
    author: "Sunita Kumar",
    authorInitials: "SK",
    date: "April 15, 2025",
    readTime: "10 min read",
    icon: "MBBS",
    gradient: "from-[#082D3A] via-[#155C67] to-[#00B2B8]",
  },
];

const latestPosts: BlogPost[] = [
  {
    title: "How to Write a Winning SOP for US Universities",
    description:
      "A step-by-step framework to craft a Statement of Purpose that stands out to admissions committees at top schools.",
    category: "Study Abroad",
    author: "Rohit Das",
    authorInitials: "RD",
    date: "April 10, 2025",
    readTime: "7 min",
    icon: "SOP",
    gradient: "from-[#1D5361] via-[#25818E] to-[#58C4C9]",
  },
  {
    title: "Study in Germany for Free: DAAD & Other Scholarships in 2025",
    description:
      "A curated list of fully funded scholarships for Indian students, with deadlines, eligibility and application tips.",
    category: "Scholarships",
    author: "Neha Bose",
    authorInitials: "NB",
    date: "April 7, 2025",
    readTime: "5 min",
    icon: "DE",
    gradient: "from-[#16263F] via-[#287081] to-[#00A99D]",
  },
  {
    title: "Canada Study Permit 2025: Timeline, Documents & Interview Tips",
    description:
      "Everything from biometrics to the IRCC portal, explained as a practical guide to your Canadian study permit application.",
    category: "Visa Guides",
    author: "Arjun Singh",
    authorInitials: "AS",
    date: "April 3, 2025",
    readTime: "9 min",
    icon: "VISA",
    gradient: "from-[#0B162C] via-[#1E5F6C] to-[#4FC3C8]",
  },
];

const explorePosts: BlogPost[] = [
  {
    title: "Living in Australia as an Indian Student: Cost, Culture & Community",
    description:
      "Understand monthly expenses, campus life and the support networks Indian students can build in Australia.",
    category: "Student Life",
    author: "Kavya Pillai",
    authorInitials: "KP",
    date: "Mar 28, 2025",
    readTime: "6 min",
    icon: "AUS",
    gradient: "from-[#1A4B56] via-[#288994] to-[#00A99D]",
  },
  {
    title: "Thailand Immersion 2025: What to Expect on a 10-Day Industry Tour",
    description:
      "A quick guide to workshops, industry visits, cultural learning and the outcomes students can expect.",
    category: "Immersion",
    author: "Maya Paul",
    authorInitials: "MP",
    date: "Mar 20, 2025",
    readTime: "4 min",
    icon: "TOUR",
    gradient: "from-[#132D49] via-[#1C6B78] to-[#6CE0D7]",
  },
];

const popularPosts = [
  {
    category: "IELTS",
    title: "How to crack IELTS in 60 days with a full-time job",
    meta: "March 2025 - 14.2k reads",
  },
  {
    category: "MBBS",
    title: "Georgia vs Russia: Best country for MBBS in 2025?",
    meta: "February 2025 - 11.8k reads",
  },
  {
    category: "Study Abroad",
    title: "Top 10 affordable universities in Canada for Indian students",
    meta: "January 2025 - 9.4k reads",
  },
  {
    category: "Scholarships",
    title: "Fully funded scholarships in USA: deadlines and tips",
    meta: "December 2024 - 8.1k reads",
  },
];

const allPosts = [...featuredPosts, ...latestPosts, ...explorePosts];

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-[0.68rem] font-extrabold uppercase tracking-[0.24em] text-[#00999E]">
      <span>{children}</span>
      <span className="h-px flex-1 bg-[#CBECEF]" aria-hidden />
    </div>
  );
}

function BlogCard({ post, compact = false }: { post: BlogPost; compact?: boolean }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#CBECEF] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,153,158,0.16)]">
      <Link href="https://blog.taksheela.com/" target="_blank" rel="noopener noreferrer">
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
          <Link
            href="https://blog.taksheela.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#00999E]"
          >
            {post.title}
          </Link>
        </h2>
        {!compact && (
          <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{post.description}</p>
        )}
        <Link
          href="https://blog.taksheela.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-bold text-[#00999E] transition group-hover:gap-2"
        >
          Read Article
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

export default function BlogHomePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return allPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;
      const matchesQuery =
        !normalizedQuery ||
        [post.title, post.description, post.category, post.author]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const hasFilters = activeCategory !== "All" || query.trim().length > 0;

  return (
    <div className="min-h-screen bg-[#F7FCFD] text-[#0B162C]">
      <section
        className="relative overflow-hidden py-16 text-white sm:py-20 lg:py-24"
        style={{
          background:
            "radial-gradient(circle at 72% 35%, rgba(0,178,184,0.34), transparent 34%), linear-gradient(135deg, #0B162C 0%, #123044 58%, #007F83 100%)",
        }}
      >
        <ContainerWrapper>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-[#00B2B8]/40 bg-[#00B2B8]/15 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#6CE0D7]">
              Knowledge Hub
            </span>
            <h1 className="mt-6 text-balance text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Your Guide to <span className="text-[#6CE0D7]">Global Education</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Expert insights on studying abroad, IELTS prep, visa guides, MBBS
              pathways and life as an international student.
            </p>
            <label className="mx-auto mt-8 flex max-w-xl items-center overflow-hidden rounded-2xl bg-white p-2 shadow-2xl shadow-black/25">
              <MdSearch className="ml-3 h-5 w-5 shrink-0 text-slate-400" aria-hidden />
              <span className="sr-only">Search blog articles</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search articles, guides, destinations..."
                className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm font-semibold text-[#0B162C] outline-none placeholder:text-slate-400"
              />
              <button
                type="button"
                className="rounded-xl bg-[#00999E] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#007F83]"
              >
                Search
              </button>
            </label>
          </div>
        </ContainerWrapper>
      </section>

      <section className="border-b border-[#D8EEF1] bg-white py-5">
        <ContainerWrapper>
          <div className="flex flex-wrap justify-center gap-2.5">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                  activeCategory === category
                    ? "border-[#00999E] bg-[#00999E] text-white"
                    : "border-[#CBECEF] bg-white text-slate-600 hover:border-[#00999E] hover:text-[#00999E]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ContainerWrapper>
      </section>

      <ContainerWrapper className="py-12 sm:py-14 lg:py-16">
        {hasFilters ? (
          <section>
            <SectionLabel>Search Results</SectionLabel>
            {filteredPosts.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.title} post={post} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-[#BFE6EA] bg-white p-10 text-center">
                <h2 className="text-2xl font-extrabold text-[#0B162C]">No articles found</h2>
                <p className="mt-2 text-slate-600">
                  Try another keyword or choose a different blog category.
                </p>
              </div>
            )}
          </section>
        ) : (
          <>
            <section>
              <SectionLabel>Featured Stories</SectionLabel>
              <div className="grid gap-6 lg:grid-cols-[1.55fr_1fr]">
                <div className="lg:row-span-2">
                  <BlogCard post={featuredPosts[0]} />
                </div>
                {featuredPosts.slice(1).map((post) => (
                  <BlogCard key={post.title} post={post} />
                ))}
              </div>
            </section>

            <section className="mt-16">
              <SectionLabel>Latest Articles</SectionLabel>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {latestPosts.map((post) => (
                  <BlogCard key={post.title} post={post} />
                ))}
              </div>
            </section>

            <section className="mt-16 overflow-hidden rounded-3xl px-6 py-10 text-center text-white shadow-xl sm:px-10 lg:px-12" style={{ background: `linear-gradient(135deg, ${DARK} 0%, #007F83 100%)` }}>
              <div className="relative z-10 mx-auto max-w-2xl">
                <MdMailOutline className="mx-auto h-10 w-10 text-[#6CE0D7]" aria-hidden />
                <h2 className="mt-4 text-3xl font-black">Never Miss an Update</h2>
                <p className="mt-3 text-sm leading-7 text-white/75 sm:text-base">
                  Get the latest visa changes, scholarship deadlines and expert
                  tips delivered to your inbox.
                </p>
                <form className="mx-auto mt-7 flex max-w-lg flex-col gap-3 sm:flex-row">
                  <label className="sr-only" htmlFor="blog-newsletter-email">
                    Email address
                  </label>
                  <input
                    id="blog-newsletter-email"
                    type="email"
                    placeholder="Enter your email address"
                    className="min-w-0 flex-1 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#0B162C] outline-none placeholder:text-slate-400"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-[#00999E] px-6 py-3 text-sm font-extrabold text-white transition hover:bg-[#00B2B8]"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </section>

            <section className="mt-16 grid gap-10 lg:grid-cols-[2fr_1fr]">
              <div>
                <SectionLabel>More to Explore</SectionLabel>
                <div className="grid gap-6 md:grid-cols-2">
                  {explorePosts.map((post) => (
                    <BlogCard key={post.title} post={post} compact />
                  ))}
                </div>
              </div>

              <aside>
                <div className="mb-5 flex items-center gap-2 text-xl font-black text-[#0B162C]">
                  <MdLocalFireDepartment className="h-6 w-6 text-[#00999E]" aria-hidden />
                  Most Popular
                </div>
                <div className="space-y-3">
                  {popularPosts.map((post, index) => (
                    <Link
                      key={post.title}
                      href="https://blog.taksheela.com/"
                      target="_blank"
                      rel="noopener noreferrer"
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
                        <span className="mt-1 block text-xs font-semibold text-slate-500">
                          {post.meta}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </aside>
            </section>
          </>
        )}
      </ContainerWrapper>
    </div>
  );
}
