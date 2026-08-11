import { SEO_BLOG_NOINDEX_REDIRECTS } from "@/lib/blog/seoBlogRedirects";

/** Legacy / noindex blog slugs that must not appear in the sitemap. */
export function getSeoRedirectSourceBlogSlugs(): Set<string> {
  const slugs = new Set<string>();

  for (const { source } of SEO_BLOG_NOINDEX_REDIRECTS) {
    const sourceSlug = source.replace(/^\/blogs?\//i, "").replace(/\/+$/, "");
    if (sourceSlug) {
      slugs.add(sourceSlug.toLowerCase());
    }
  }

  return slugs;
}

export function slugFromBlogPath(path: string): string {
  return path.replace(/^\/blogs\//i, "").replace(/\/+$/, "").toLowerCase();
}
