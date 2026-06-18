import { htmlToPlainText } from "./parseBlogArticleFaqs";

function normalizeLabel(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

function isMetaTitleLabel(text: string): boolean {
  const label = normalizeLabel(text);
  return /^(?:meta|seo)\s*(?:title|tag)\s*:?\s*$/i.test(label);
}

function isMetaDescriptionLabel(text: string): boolean {
  const label = normalizeLabel(text);
  return /^(?:meta|seo)\s*description\s*:?\s*$/i.test(label);
}

function firstParagraphHtml(blockHtml: string): string {
  const match = blockHtml.match(/<p\b[^>]*>([\s\S]*?)<\/p>/i);
  return match ? match[1] : blockHtml;
}

function parseHeadingValueMeta(html: string) {
  const meta = { metaTitle: "", metaDescription: "" };
  const pattern =
    /<h([1-4])\b[^>]*>([\s\S]*?)<\/h\1>\s*((?:<p\b[^>]*>[\s\S]*?<\/p>\s*)+)/gi;

  let match: RegExpExecArray | null;
  while ((match = pattern.exec(html)) !== null) {
    const label = normalizeLabel(htmlToPlainText(match[2]));
    const value = htmlToPlainText(firstParagraphHtml(match[3]));

    if (isMetaTitleLabel(label) && value) meta.metaTitle = value;
    if (isMetaDescriptionLabel(label) && value) meta.metaDescription = value;
  }

  return meta;
}

function parseInlineParagraphMeta(html: string) {
  const meta = { metaTitle: "", metaDescription: "" };
  const pattern = /<p\b[^>]*>([\s\S]*?)<\/p>/gi;

  let match: RegExpExecArray | null;
  while ((match = pattern.exec(html)) !== null) {
    const text = htmlToPlainText(match[1]);
    const titleMatch = text.match(/^(?:meta|seo)\s*(?:title|tag)\s*:?\s*(.+)$/i);
    const descMatch = text.match(/^(?:meta|seo)\s*description\s*:?\s*(.+)$/i);

    if (titleMatch?.[1]?.trim()) meta.metaTitle = titleMatch[1].trim();
    if (descMatch?.[1]?.trim()) meta.metaDescription = descMatch[1].trim();
  }

  return meta;
}

export function extractBlogMetaFromHtml(html: string) {
  if (!html?.trim()) {
    return { metaTitle: "", metaDescription: "" };
  }

  const fromHeadings = parseHeadingValueMeta(html);
  const fromInline = parseInlineParagraphMeta(html);

  return {
    metaTitle: fromHeadings.metaTitle || fromInline.metaTitle || "",
    metaDescription: fromHeadings.metaDescription || fromInline.metaDescription || "",
  };
}

export function stripBlogMetaFromHtml(html: string): string {
  if (!html?.trim()) return html;

  let result = html;

  result = result.replace(
    /<h([1-4])\b[^>]*>([\s\S]*?)<\/h\1>\s*<p\b[^>]*>[\s\S]*?<\/p>\s*/gi,
    (full, _level, headingInner) => {
      const label = normalizeLabel(htmlToPlainText(headingInner));
      if (isMetaTitleLabel(label) || isMetaDescriptionLabel(label)) {
        return "";
      }
      return full;
    }
  );

  result = result.replace(/<p\b[^>]*>([\s\S]*?)<\/p>\s*/gi, (full, inner) => {
    const text = htmlToPlainText(inner);
    if (
      /^(?:meta|seo)\s*(?:title|tag)\s*:?/i.test(text) ||
      /^(?:meta|seo)\s*description\s*:?/i.test(text)
    ) {
      return "";
    }
    return full;
  });

  return result.trim();
}

export function splitBlogArticleWithMeta(html: string) {
  if (!html?.trim()) {
    return { articleHtml: html, metaTitle: "", metaDescription: "" };
  }

  const { metaTitle, metaDescription } = extractBlogMetaFromHtml(html);
  const articleHtml = stripBlogMetaFromHtml(html);

  return { articleHtml, metaTitle, metaDescription };
}
