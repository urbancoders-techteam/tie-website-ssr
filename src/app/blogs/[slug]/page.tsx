import { BlogDetailPage } from "@/components/blog/blog-pages";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { fetchBlogBySlug } from "@/lib/blog/fetch";
import { extractBlogMetaFromHtml } from "@/lib/blog/parseBlogArticleMeta";
import { fetchRelatedBlogs } from "@/lib/blog/related";
import { blogHref, excerptFrom, stripHtml } from "@/lib/blog/map";
import { stripTrailingNumericSuffix } from "@/lib/blog/numberedSlugRedirect";
import { getSeoBlogRedirectDestination } from "@/lib/blog/seoBlogRedirects";
import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

/**
 * 1) SEO spreadsheet exact mappings (incl. force → /blogs).
 * 2) Else orphan numbered URLs: clean slug if live, else /blogs.
 * Live blogs whose real slugUrl ends in a number are unchanged (exact match first).
 */
async function redirectMissingBlogSlug(slug: string): Promise<never | null> {
  const seoDestination = getSeoBlogRedirectDestination(slug);
  if (seoDestination) {
    permanentRedirect(seoDestination);
  }

  const cleanSlug = stripTrailingNumericSuffix(slug);
  if (!cleanSlug) return null;

  const cleanBlog = await fetchBlogBySlug(cleanSlug);
  if (cleanBlog) {
    permanentRedirect(blogHref(cleanBlog.slugUrl || cleanSlug));
  }

  permanentRedirect("/blogs");
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const seoDestination = getSeoBlogRedirectDestination(slug);
  if (seoDestination) {
    permanentRedirect(seoDestination);
  }

  const blog = await fetchBlogBySlug(slug);

  if (!blog) {
    await redirectMissingBlogSlug(slug);
    return { title: "Article Not Found | Taksheela Blog" };
  }

  const embeddedMeta = extractBlogMetaFromHtml(blog.description);
  const pathSlug = blog.slugUrl?.trim() || slug;

  const description =
    blog.metaDescription?.trim() ||
    embeddedMeta.metaDescription ||
    excerptFrom(blog.description, 32);
  const pageTitle =
    blog.metaTitle?.trim() || embeddedMeta.metaTitle || `${blog.title} | Taksheela Blog`;
  const ogTitle = blog.metaTitle?.trim() || embeddedMeta.metaTitle || blog.title;
  const canonical = `https://www.taksheela.com${blogHref(pathSlug)}`;
  const keywords = blog.keywords
    ?.split(",")
    .map((keyword) => keyword.trim())
    .filter(Boolean);

  return {
    title: pageTitle,
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description,
      url: canonical,
      siteName: "Taksheela Institute",
      type: "article",
      images: blog.image
        ? [{ url: blog.image, width: 1200, height: 630, alt: blog.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: blog.image ? [blog.image] : undefined,
    },
  };
}

export default async function BlogSlugPage({ params }: PageProps) {
  const { slug } = await params;

  const seoDestination = getSeoBlogRedirectDestination(slug);
  if (seoDestination) {
    permanentRedirect(seoDestination);
  }

  const blog = await fetchBlogBySlug(slug);

  if (!blog) {
    await redirectMissingBlogSlug(slug);
    notFound();
  }

  const relatedBlogs = await fetchRelatedBlogs(slug, blog.categoryId, 10);
  const embeddedMeta = extractBlogMetaFromHtml(blog.description);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: (
      blog.metaDescription?.trim() ||
      embeddedMeta.metaDescription ||
      stripHtml(blog.description)
    ).slice(0, 200),
    image: blog.image || undefined,
    datePublished: blog.date || undefined,
    author: {
      "@type": "Organization",
      name: "Taksheela Institute",
    },
    publisher: {
      "@type": "Organization",
      name: "Taksheela Institute",
      logo: {
        "@type": "ImageObject",
        url: "https://www.taksheela.com/static/media/TIE_LOGO.242b5d5230b25dd9bcb6.png",
      },
    },
  };

  return (
    <>
      <BreadcrumbSchema />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogDetailPage blog={blog} relatedBlogs={relatedBlogs} />
    </>
  );
}
