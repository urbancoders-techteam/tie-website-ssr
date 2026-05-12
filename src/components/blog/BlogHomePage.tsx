"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import { useMemo, useState } from "react";
import BlogCard from "./BlogCard";
import BlogCategoryTabs from "./BlogCategoryTabs";
import BlogHeroSearch from "./BlogHeroSearch";
import BlogNewsletterCta from "./BlogNewsletterCta";
import BlogPopularList from "./BlogPopularList";
import BlogSectionLabel from "./BlogSectionLabel";
import {
  allPosts,
  categories,
  explorePosts,
  featuredPosts,
  latestPosts,
  popularPosts,
} from "./blogHomePageData";

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
      <BlogHeroSearch query={query} onChangeQuery={setQuery} />
      <BlogCategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      <ContainerWrapper className="py-12 sm:py-14 lg:py-16">
        {hasFilters ? (
          <section>
            <BlogSectionLabel>Search Results</BlogSectionLabel>
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
              <BlogSectionLabel>Featured Stories</BlogSectionLabel>
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
              <BlogSectionLabel>Latest Articles</BlogSectionLabel>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {latestPosts.map((post) => (
                  <BlogCard key={post.title} post={post} />
                ))}
              </div>
            </section>

            <BlogNewsletterCta />

            <section className="mt-16 grid gap-10 lg:grid-cols-[2fr_1fr]">
              <div>
                <BlogSectionLabel>More to Explore</BlogSectionLabel>
                <div className="grid gap-6 md:grid-cols-2">
                  {explorePosts.map((post) => (
                    <BlogCard key={post.title} post={post} compact />
                  ))}
                </div>
              </div>

              <BlogPopularList posts={popularPosts} />
            </section>
          </>
        )}
      </ContainerWrapper>
    </div>
  );
}
