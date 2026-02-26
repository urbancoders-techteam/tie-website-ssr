"use client";

import { usePathname } from "next/navigation";

const BreadcrumbSchema = () => {
  const pathname = usePathname();
  const baseUrl = "https://www.taksheela.com";
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: baseUrl,
    },
    ...segments.map((segment, index) => {
      const url = `${baseUrl}/${segments.slice(0, index + 1).join("/")}`;
      const name = decodeURIComponent(segment)
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      return {
        "@type": "ListItem",
        position: index + 2,
        name,
        item: url,
      };
    }),
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems,
  };

  return (
    <script
      key="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema),
      }}
    />
  );
};

export default BreadcrumbSchema;