"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import {
  BLOGS_PER_PAGE,
  fetchBlogCategoriesWeb,
  fetchBlogsWebPaginated,
} from "@/lib/blog/fetch";
import { mapApiBlogToPost, mapCategoriesToTabs } from "@/lib/blog/map";
import type { BlogCategoryTab, BlogPost } from "@/lib/blog/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDeferredValue, useEffect, useRef, useState } from "react";
import BlogCard from "./BlogCard";
import BlogCategoryTabs from "./BlogCategoryTabs";
import BlogHeroSearch from "./BlogHeroSearch";
import BlogNewsletterCta from "./BlogNewsletterCta";
import BlogPagination from "./BlogPagination";
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

function BlogGridSkeleton() {
  return (
    <ContainerWrapper className="py-12 sm:py-14 lg:py-16">
      <section>
        <SkeletonPulse className="mb-6 h-4 w-36 rounded-full" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: BLOGS_PER_PAGE }).map((_, i) => (
            <BlogCardSkeleton key={i} />
          ))}
        </div>
      </section>
    </ContainerWrapper>
  );
}

function parsePageParam(value: string | null): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 1 ? Math.floor(parsed) : 1;
}

function buildBlogListHref(
  pathname: string,
  current: URLSearchParams,
  updates: { page?: number; category?: string; q?: string },
): string {
  const params = new URLSearchParams(current.toString());

  if (updates.page !== undefined) {
    if (updates.page <= 1) params.delete("page");
    else params.set("page", String(updates.page));
  }

  if (updates.category !== undefined) {
    if (!updates.category || updates.category === "all") params.delete("category");
    else params.set("category", updates.category);
  }

  if (updates.q !== undefined) {
    const trimmed = updates.q.trim();
    if (!trimmed) params.delete("q");
    else params.set("q", trimmed);
  }

  const query = params.toString();
  return query ? `${pathname}?${query}` : pathname;
}

export default function BlogHomePage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = parsePageParam(searchParams.get("page"));
  const activeTabId = searchParams.get("category") || "all";
  const urlQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(urlQuery);
  const deferredQuery = useDeferredValue(query);

  const [tabs, setTabs] = useState<BlogCategoryTab[]>([
    { id: "all", label: "All Posts", dotColor: "#00B2B8" },
  ]);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  const requestSeqRef = useRef(0);
  const hasLoadedOnceRef = useRef(false);
  const categoriesLoadedRef = useRef(false);
  const resultsRef = useRef<HTMLElement>(null);
  const isInternalSearchUrlUpdateRef = useRef(false);

  // Restore search input on browser back/forward (not on our own search URL writes).
  useEffect(() => {
    if (isInternalSearchUrlUpdateRef.current) {
      isInternalSearchUrlUpdateRef.current = false;
      return;
    }
    setQuery(urlQuery);
  }, [urlQuery]);

  // Persist deferred search to the URL (replace, so typing does not spam history).
  useEffect(() => {
    if (deferredQuery === urlQuery) return;

    isInternalSearchUrlUpdateRef.current = true;
    const href = buildBlogListHref(pathname, searchParams, {
      q: deferredQuery,
      page: 1,
    });
    router.replace(href, { scroll: false });
  }, [deferredQuery, urlQuery, pathname, router, searchParams]);

  useEffect(() => {
    let cancelled = false;
    const seq = (requestSeqRef.current += 1);

    if (!hasLoadedOnceRef.current) {
      setIsInitialLoading(true);
    } else {
      setIsFetching(true);
    }

    async function loadBlogData() {
      try {
        if (!categoriesLoadedRef.current) {
          const categories = await fetchBlogCategoriesWeb();
          if (cancelled || seq !== requestSeqRef.current) return;
          setTabs(mapCategoriesToTabs(categories));
          categoriesLoadedRef.current = true;
        }

        const result = await fetchBlogsWebPaginated({
          page: currentPage,
          limit: BLOGS_PER_PAGE,
          categoryId: activeTabId,
          search: deferredQuery,
        });

        if (cancelled || seq !== requestSeqRef.current) return;

        setPosts(result.blogs.map((blog, index) => mapApiBlogToPost(blog, index)));
        setTotalCount(result.count);
        setTotalPages(result.totalPage);
        hasLoadedOnceRef.current = true;

        // If API clamps the page (e.g. page 9 when only 3 exist), correct the URL.
        if (result.currentPage !== currentPage) {
          const href = buildBlogListHref(pathname, searchParams, {
            page: result.currentPage,
          });
          router.replace(href, { scroll: false });
        }
      } catch (error) {
        if (cancelled || seq !== requestSeqRef.current) return;
        console.warn("BlogHomePage load failed", error);
        setPosts([]);
        setTotalCount(0);
        setTotalPages(1);
      } finally {
        if (cancelled || seq !== requestSeqRef.current) return;
        setIsInitialLoading(false);
        setIsFetching(false);
      }
    }

    loadBlogData();

    return () => {
      cancelled = true;
    };
  }, [activeTabId, currentPage, deferredQuery, pathname, router, searchParams]);

  const handleSelectTab = (tabId: string) => {
    if (tabId === activeTabId) return;
    const href = buildBlogListHref(pathname, searchParams, {
      category: tabId,
      page: 1,
    });
    router.push(href, { scroll: false });
  };

  const handlePageChange = (page: number) => {
    if (page === currentPage) return;
    const href = buildBlogListHref(pathname, searchParams, { page });
    router.push(href, { scroll: false });
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const normalizedQuery = deferredQuery.trim();
  const isAllTab = activeTabId === "all";
  const sectionTitle = normalizedQuery
    ? "Search Results"
    : isAllTab
      ? "All Posts"
      : tabs.find((tab) => tab.id === activeTabId)?.label ?? "Articles";

  return (
    <div className="min-h-screen bg-[#F7FCFD] text-[#0B162C]">
      <BlogHeroSearch query={query} onChangeQuery={setQuery} />
      <BlogCategoryTabs
        tabs={tabs}
        activeTabId={activeTabId}
        onSelectTab={handleSelectTab}
      />

      {isInitialLoading ? <BlogGridSkeleton /> : null}

      {!isInitialLoading ? (
        <ContainerWrapper className="py-12 sm:py-14 lg:py-16">
          <section ref={resultsRef} aria-busy={isFetching}>
            <BlogSectionLabel>{sectionTitle}</BlogSectionLabel>

            {posts.length > 0 ? (
              <>
                <div
                  className={`grid gap-6 transition-opacity md:grid-cols-2 lg:grid-cols-3 ${
                    isFetching ? "pointer-events-none opacity-60" : "opacity-100"
                  }`}
                >
                  {posts.map((post) => (
                    <BlogCard key={post.href} post={post} />
                  ))}
                </div>

                <BlogPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  totalCount={totalCount}
                  pageSize={BLOGS_PER_PAGE}
                  onPageChange={handlePageChange}
                  disabled={isFetching}
                />
              </>
            ) : (
              <div className="rounded-2xl border border-dashed border-[#BFE6EA] bg-white p-10 text-center">
                <h2 className="text-2xl font-extrabold text-[#0B162C]">
                  {totalCount === 0 && !normalizedQuery && isAllTab
                    ? "No blog articles published yet."
                    : "No articles found"}
                </h2>
                {totalCount === 0 && !normalizedQuery && isAllTab ? null : (
                  <p className="mt-2 text-slate-600">
                    Try another keyword or choose a different blog category.
                  </p>
                )}
              </div>
            )}
          </section>

          {isAllTab && !normalizedQuery ? <BlogNewsletterCta /> : null}
        </ContainerWrapper>
      ) : null}
    </div>
  );
}
