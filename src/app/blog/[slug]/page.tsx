import { BlogDetailPage } from "@/components/blog/blog-pages";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { fetchBlogBySlug } from "@/lib/blog/fetch";
import { fetchRelatedBlogs } from "@/lib/blog/related";
import { excerptFrom, stripHtml } from "@/lib/blog/map";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await fetchBlogBySlug(slug);

  if (!blog) {
    return { title: "Article Not Found | Taksheela Blog" };
  }

  const description =
    blog.heroDescription?.trim() ||
    blog.excerpt?.trim() ||
    excerptFrom(blog.description, 32);
  const canonical = `https://www.taksheela.com/blog/${slug}`;

  return {
    title: `${blog.title} | Taksheela Blog`,
    description,
    alternates: { canonical },
    openGraph: {
      title: blog.title,
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
      title: blog.title,
      description,
      images: blog.image ? [blog.image] : undefined,
    },
  };
}

export default async function BlogSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await fetchBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = await fetchRelatedBlogs(slug, blog.categoryId, 10);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: (
      blog.heroDescription?.trim() ||
      blog.excerpt?.trim() ||
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
