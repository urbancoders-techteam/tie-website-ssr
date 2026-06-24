import type { FAQItem } from "@/components/campaign/FAQSection";
import { sanitizeBlogArticleHtml } from "./sanitizeBlogArticleHtml";

const HTML_ENTITY_MAP: Record<string, string> = {
  "&nbsp;": " ",
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&apos;": "'",
};

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (entity, body: string) => {
      if (HTML_ENTITY_MAP[entity]) return HTML_ENTITY_MAP[entity];
      if (body.startsWith("#x")) {
        const code = Number.parseInt(body.slice(2), 16);
        return Number.isNaN(code) ? entity : String.fromCodePoint(code);
      }
      if (body.startsWith("#")) {
        const code = Number.parseInt(body.slice(1), 10);
        return Number.isNaN(code) ? entity : String.fromCodePoint(code);
      }
      return entity;
    })
    .replace(/\u00a0/g, " ");
}

/** Strip tags and collapse whitespace — safe on server (no DOM). */
export function htmlToPlainText(html: string): string {
  if (!html?.trim()) return "";

  return decodeHtmlEntities(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<\/p>/gi, " ")
      .replace(/<\/li>/gi, " ")
      .replace(/<[^>]+>/g, "")
  )
    .replace(/\s+/g, " ")
    .trim();
}

function isFaqHeadingText(text: string): boolean {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (!normalized) return false;

  return (
    /^(?:faqs?|frequently\s+asked\s+questions?)\s*:?\s*$/i.test(normalized) ||
    /\bfrequently\s+asked\s+questions?\b/i.test(normalized)
  );
}

function stripTrailingColon(text: string): string {
  return text.replace(/\s*:\s*$/, "").trim();
}

function parseAnswerBlock(html: string): Omit<FAQItem, "question"> {
  const ulMatch = html.match(/<ul\b[^>]*>([\s\S]*?)<\/ul>/i);

  if (ulMatch) {
    const before = html.slice(0, ulMatch.index ?? 0);
    const intro = htmlToPlainText(before);
    const bullets: string[] = [];
    const liRe = /<li\b[^>]*>([\s\S]*?)<\/li>/gi;
    let liMatch: RegExpExecArray | null;

    while ((liMatch = liRe.exec(ulMatch[1])) !== null) {
      const line = htmlToPlainText(liMatch[1]);
      if (line) bullets.push(line);
    }

    const after = html.slice((ulMatch.index ?? 0) + ulMatch[0].length);
    const closing = htmlToPlainText(after);

    if (bullets.length > 0) {
      return {
        answerIntro: intro || undefined,
        answerBullets: bullets,
        answerClosing: closing || undefined,
      };
    }
  }

  return { answer: htmlToPlainText(html) };
}

/** Google Docs / Jodit export: numbered question in `<li>`, answer in following `<p>`. */
function parseOlLiParagraphFaqs(faqHtml: string): FAQItem[] {
  const items: FAQItem[] = [];
  const pattern =
    /<li\b[^>]*>([\s\S]*?)<\/li>\s*<\/ol>\s*((?:<p\b[^>]*>[\s\S]*?<\/p>\s*)+?)(?=(?:<br\s*\/?>\s*)*<ol\b|<h[1-4]\b|$)/gi;

  let match: RegExpExecArray | null;
  while ((match = pattern.exec(faqHtml)) !== null) {
    const question = stripTrailingColon(htmlToPlainText(match[1]));
    const answerParts = parseAnswerBlock(match[2]);

    if (!question) continue;

    const item: FAQItem = { question, ...answerParts };
    if (item.answer || item.answerBullets?.length) {
      items.push(item);
    }
  }

  return items;
}

/** Heading + body blocks (common in hand-edited Jodit content). */
function parseHeadingBlockFaqs(faqHtml: string): FAQItem[] {
  const items: FAQItem[] = [];
  const pattern = /<h([34])\b[^>]*>([\s\S]*?)<\/h\1>([\s\S]*?)(?=<h[34]\b|$)/gi;

  let match: RegExpExecArray | null;
  while ((match = pattern.exec(faqHtml)) !== null) {
    const question = stripTrailingColon(htmlToPlainText(match[2]));
    if (!question || isFaqHeadingText(question)) continue;

    const answerParts = parseAnswerBlock(match[3]);
    const item: FAQItem = { question, ...answerParts };

    if (item.answer || item.answerBullets?.length) {
      items.push(item);
    }
  }

  return items;
}

/** `<p><strong>Question?</strong></p><p>Answer</p>` pairs. */
function parseStrongParagraphFaqs(faqHtml: string): FAQItem[] {
  const items: FAQItem[] = [];
  const pattern =
    /<p\b[^>]*>\s*(?:<(?:strong|b)\b[^>]*>|<span[^>]*font-weight:\s*(?:700|bold)[^>]*>)([\s\S]*?)<\/(?:strong|b|span)>\s*<\/p>\s*([\s\S]*?)(?=<p\b[^>]*>\s*(?:<(?:strong|b)\b|<span[^>]*font-weight:\s*(?:700|bold))|<h[1-4]\b|$)/gi;

  let match: RegExpExecArray | null;
  while ((match = pattern.exec(faqHtml)) !== null) {
    const question = stripTrailingColon(htmlToPlainText(match[1]));
    const answerParts = parseAnswerBlock(match[2]);
    const item: FAQItem = { question, ...answerParts };

    if (question && (item.answer || item.answerBullets?.length)) {
      items.push(item);
    }
  }

  return items;
}

function findFaqSectionSplit(html: string): { articleHtml: string; faqSectionHtml: string } | null {
  const headingRe = /<h([1-4])\b[^>]*>([\s\S]*?)<\/h\1>/gi;
  let match: RegExpExecArray | null;

  while ((match = headingRe.exec(html)) !== null) {
    if (isFaqHeadingText(htmlToPlainText(match[2]))) {
      return {
        articleHtml: html.slice(0, match.index).trim(),
        faqSectionHtml: html.slice(match.index + match[0].length).trim(),
      };
    }
  }

  const paragraphRe = /<p\b[^>]*>([\s\S]*?)<\/p>/gi;
  while ((match = paragraphRe.exec(html)) !== null) {
    if (isFaqHeadingText(htmlToPlainText(match[1]))) {
      return {
        articleHtml: html.slice(0, match.index).trim(),
        faqSectionHtml: html.slice(match.index + match[0].length).trim(),
      };
    }
  }

  return null;
}

function parseFaqSectionHtml(faqSectionHtml: string): FAQItem[] {
  if (!faqSectionHtml.trim()) return [];

  const parsers = [parseOlLiParagraphFaqs, parseHeadingBlockFaqs, parseStrongParagraphFaqs];

  for (const parse of parsers) {
    const items = parse(faqSectionHtml);
    if (items.length > 0) return items;
  }

  return [];
}

export type SplitBlogArticleResult = {
  articleHtml: string;
  faqItems: FAQItem[];
};

/**
 * Detects FAQ blocks inside Jodit / Google Docs blog HTML and returns
 * article body without the raw FAQ markup plus structured FAQ items.
 */
export function splitBlogArticleWithFaqs(html: string): SplitBlogArticleResult {
  if (!html?.trim()) {
    return { articleHtml: html, faqItems: [] };
  }

  const sanitized = sanitizeBlogArticleHtml(html);
  const split = findFaqSectionSplit(sanitized);
  if (!split) {
    return { articleHtml: sanitized, faqItems: [] };
  }

  const faqItems = parseFaqSectionHtml(split.faqSectionHtml);
  if (faqItems.length === 0) {
    return { articleHtml: sanitized, faqItems: [] };
  }

  return {
    articleHtml: split.articleHtml,
    faqItems,
  };
}
