"use client";

import FAQSection, { type FAQItem } from "@/components/campaign/FAQSection";

type BlogArticleFaqSectionProps = {
  items: FAQItem[];
};

export default function BlogArticleFaqSection({ items }: BlogArticleFaqSectionProps) {
  if (!items.length) return null;

  return (
    <FAQSection
      items={items}
      embedded
      sectionId="blog-article-faq"
      headingId="blog-article-faq-heading"
    />
  );
}
