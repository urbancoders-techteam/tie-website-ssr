"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import { fetchBlogCategoriesWeb, fetchBlogsWeb } from "@/lib/blog/fetch";
import {
  mapApiBlogToPost,
  mapCategoriesToTabs,
  postMatchesCategoryTab,
  splitBlogSections,
} from "@/lib/blog/map";
import type { BlogCategoryTab, BlogPost } from "@/lib/blog/types";
import { useCallback, useEffect, useMemo, useState } from "react";
import BlogCard from "./BlogCard";
import BlogCategoryTabs from "./BlogCategoryTabs";
import BlogHeroSearch from "./BlogHeroSearch";
import BlogNewsletterCta from "./BlogNewsletterCta";
import BlogPopularList from "./BlogPopularList";
import BlogSectionLabel from "./BlogSectionLabel";

// ---------------------------------------------------------------------------
// Skeleton helpers
// ---------------------------------------------------------------------------

function SkeletonPulse({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-slate-200 ${className}`}
      aria-hidden="true"
    />
  );
}

function BlogCardSkeleton({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#CBECEF] bg-white shadow-sm">
      <SkeletonPulse className={compact ? "h-40" : "h-52"} />
      <div className={`flex flex-1 flex-col gap-3 ${compact ? "p-5" : "p-6"}`}>
        <SkeletonPulse className="h-4 w-20 rounded-full" />
        <SkeletonPulse className={`h-5 w-full ${compact ? "" : "mt-1"}`} />
        {!compact && <SkeletonPulse className="h-5 w-4/5" />}
        {!compact && <SkeletonPulse className="h-4 w-full" />}
        {!compact && <SkeletonPulse className="h-4 w-3/4" />}
        <SkeletonPulse className="mt-auto h-4 w-24" />
        <div className="mt-3 flex items-center gap-3 border-t border-[#E4F4F6] pt-3">
          <SkeletonPulse className="h-9 w-9 rounded-full" />
          <div className="flex flex-1 flex-col gap-1.5">
            {!compact && <SkeletonPulse className="h-3 w-32" />}
            <SkeletonPulse className="h-3 w-20" />
          </div>
          <SkeletonPulse className="h-3 w-16 shrink-0" />
        </div>
      </div>
    </div>
  );
}

function PopularListSkeleton() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[#CBECEF] bg-white p-6">
      <SkeletonPulse className="h-4 w-28 rounded-full" />
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex flex-col gap-2 border-t border-[#E4F4F6] pt-3">
          <SkeletonPulse className="h-3 w-16 rounded-full" />
          <SkeletonPulse className="h-4 w-full" />
          <SkeletonPulse className="h-4 w-3/4" />
        </div>
      ))}
    </div>
  );
}

function BlogGridSkeleton() {
  return (
    <ContainerWrapper className="py-12 sm:py-14 lg:py-16">
      {/* Latest articles */}
      <section>
        <SkeletonPulse className="mb-6 h-4 w-36 rounded-full" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <BlogCardSkeleton key={i} />
          ))}
        </div>
      </section>

      {/* Explore + popular */}
      <section className="mt-12 grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div>
          <SkeletonPulse className="mb-6 h-4 w-36 rounded-full" />
          <div className="grid gap-6 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <BlogCardSkeleton key={i} compact />
            ))}
          </div>
        </div>
        <PopularListSkeleton />
      </section>
    </ContainerWrapper>
  );
}
// import NMCApprovedColleges from "./NMCApprovedColleges";
// import ShortBlogs from "./ShortBlogs";

export default function BlogHomePage() {
  const [activeTabId, setActiveTabId] = useState("all");
  const [query, setQuery] = useState("");
  const [tabs, setTabs] = useState<BlogCategoryTab[]>([
    { id: "all", label: "All Posts", dotColor: "#00B2B8" },
  ]);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadBlogData = useCallback(async (categoryId?: string) => {
    setIsLoading(true);
    try {
      const [categories, blogs] = await Promise.all([
        fetchBlogCategoriesWeb(),
        fetchBlogsWeb(categoryId && categoryId !== "all" ? categoryId : undefined),
      ]);

      setTabs(mapCategoriesToTabs(categories));
      setPosts(blogs.map((blog, index) => mapApiBlogToPost(blog, index)));
    } catch (error) {
      console.warn("BlogHomePage load failed", error);
      setPosts([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadBlogData(activeTabId);
  }, [activeTabId, loadBlogData]);

  const { latestPosts, explorePosts, popularPosts, allPosts } = useMemo(
    () => splitBlogSections(posts),
    [posts],
  );

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return allPosts.filter((post) => {
      const matchesCategory = postMatchesCategoryTab(post, activeTabId);
      const matchesQuery =
        !normalizedQuery ||
        [post.title, post.description, post.category, post.author]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeTabId, query, allPosts]);

  const hasFilters = activeTabId !== "all" || query.trim().length > 0;
  const showDefaultLayout = !hasFilters;

  return (
    <div className="min-h-screen bg-[#F7FCFD] text-[#0B162C]">
      <BlogHeroSearch query={query} onChangeQuery={setQuery} />
      <BlogCategoryTabs
        tabs={tabs}
        activeTabId={activeTabId}
        onSelectTab={setActiveTabId}
      />

      {isLoading ? <BlogGridSkeleton /> : null}

      {!isLoading && hasFilters ? (
        <ContainerWrapper className="py-12 sm:py-14 lg:py-16">
          <section>
            <BlogSectionLabel>Search Results</BlogSectionLabel>
            {filteredPosts.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.href} post={post} />
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
        </ContainerWrapper>
      ) : null}

      {!isLoading && showDefaultLayout ? (
        <>
          {posts.length === 0 ? (
            <ContainerWrapper className="py-16 text-center">
              <p className="text-lg text-slate-600">No blog articles published yet.</p>
            </ContainerWrapper>
          ) : (
            <>
              <ContainerWrapper className="py-12 sm:py-14 lg:py-16">
                <section>
                  <BlogSectionLabel>Latest Articles</BlogSectionLabel>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {latestPosts.map((post) => (
                      <BlogCard key={post.href} post={post} />
                    ))}
                  </div>
                </section>

                <BlogNewsletterCta />
              </ContainerWrapper>

              {explorePosts.length > 0 || popularPosts.length > 0 ? (
                <ContainerWrapper className="pb-12 sm:pb-14 lg:pb-16">
                  <section className="grid gap-10 lg:grid-cols-[2fr_1fr]">
                    {explorePosts.length > 0 ? (
                      <div>
                        <BlogSectionLabel>More to Explore</BlogSectionLabel>
                        <div className="grid gap-6 md:grid-cols-2">
                          {explorePosts.map((post) => (
                            <BlogCard key={post.href} post={post} compact />
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {popularPosts.length > 0 ? (
                      <BlogPopularList posts={popularPosts} />
                    ) : null}
                  </section>
                </ContainerWrapper>
              ) : null}
            </>
          )}

          {/* <NMCApprovedColleges /> */}
          {/* <ShortBlogs /> */}
        </>
      ) : null}
    </div>
  );
}
