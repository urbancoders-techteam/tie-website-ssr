"use client";

import { useStickyChromeOffset } from "@/hooks/useStickyChromeOffset";
import type { ApiBlog } from "@/lib/blog/types";
import BlogCounsellingCard from "./BlogCounsellingCard";
import BlogRelatedArticles from "./BlogRelatedArticles";

const STICKY_GAP_PX = 20;

type BlogDetailSidebarProps = {
  relatedBlogs: ApiBlog[];
};

/**
 * Sticks below site header while the article scrolls (no inner scrollbar).
 */
export default function BlogDetailSidebar({ relatedBlogs }: BlogDetailSidebarProps) {
  const chromeOffset = useStickyChromeOffset(128);
  const stickyTop = chromeOffset + STICKY_GAP_PX;

  return (
    <aside className="hidden lg:block" aria-label="Blog sidebar">
      <div className="sticky z-30 space-y-6" style={{ top: stickyTop }}>
        <BlogCounsellingCard />
        <BlogRelatedArticles relatedBlogs={relatedBlogs} />
      </div>
    </aside>
  );
}
