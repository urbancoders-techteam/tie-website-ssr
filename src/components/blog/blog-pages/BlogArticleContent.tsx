"use client";

import { enhanceBlogArticleDom } from "@/lib/blog/enhanceBlogArticleDom";
import { prepareBlogArticleHtml } from "@/lib/blog/prepareBlogArticleHtml";
import { useEffect, useMemo, useRef } from "react";

type BlogArticleContentProps = {
  html: string;
};

export default function BlogArticleContent({ html }: BlogArticleContentProps) {
  const proseRef = useRef<HTMLDivElement>(null);

  const safeHtml = useMemo(() => prepareBlogArticleHtml(html), [html]);

  useEffect(() => {
    const root = proseRef.current;
    if (!root) return;
    enhanceBlogArticleDom(root);
  }, [safeHtml]);

  if (!html?.trim()) {
    return (
      <p className="text-base leading-relaxed text-slate-600">
        No content available for this article.
      </p>
    );
  }

  return (
    <div className="blog-article-prose-root w-full min-w-0 max-w-full">
      <div
        ref={proseRef}
        className="blog-article-prose"
        dangerouslySetInnerHTML={{ __html: safeHtml }}
      />
    </div>
  );
}
