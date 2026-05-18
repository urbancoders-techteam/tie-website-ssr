import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  mbbsAbroadMetaDescriptions,
  mbbsAbroadMetaTitles,
} from "@/constants/metaDescriptions";
import { getAbroadFullPageCopy } from "@/constants/abroad/abroadFullPageRegistry";
import { buildFaqPageSchema } from "@/lib/faqPageSchema";

const SITE_ORIGIN = "https://www.taksheela.com";

type Props = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const slugKey = slug.toLowerCase();
  const description = mbbsAbroadMetaDescriptions[slugKey];
  const title = mbbsAbroadMetaTitles[slugKey];
  const canonicalPath = `/mbbs/abroad/${slugKey}`;

  return {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    alternates: {
      canonical: `${SITE_ORIGIN}${canonicalPath}`,
    },
  };
}

export default async function MbbsAbroadSlugLayout({ children, params }: Props) {
  const { slug } = await params;
  const slugKey = slug.toLowerCase();
  const abroadCopy = getAbroadFullPageCopy(slugKey);
  const faqSchema =
    abroadCopy?.faq.items?.length ?
      buildFaqPageSchema(
        abroadCopy.faq.items.map((item) => ({
          question: item.question,
          answer: item.answer,
        })),
      )
    : null;

  return (
    <>
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
      {children}
    </>
  );
}
