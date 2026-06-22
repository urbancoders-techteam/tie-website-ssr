import { sanitizeBlogArticleHtml } from "./sanitizeBlogArticleHtml";

const LAYOUT_STYLE_PROPS =
  /(?:^|;)\s*(?:width|min-width|max-width|height|min-height|max-height|margin-left|margin-right|float|position|left|right|white-space)\s*:\s*[^;]+/gi;

function stripLayoutStyles(styleValue: string): string {
  return styleValue
    .replace(LAYOUT_STYLE_PROPS, "")
    .replace(/^\s*;\s*|\s*;\s*;+/g, ";")
    .replace(/^;|;$/g, "")
    .trim();
}

function cleanTagInlineStyles(html: string, tagNames: string): string {
  const tagPattern = new RegExp(`(<(?:${tagNames})\\b[^>]*\\sstyle=)(["'])([^"']*)\\2`, "gi");
  return html.replace(tagPattern, (full, prefix: string, quote: string, styles: string) => {
    const cleaned = stripLayoutStyles(styles);
    if (!cleaned) {
      return full.replace(/\sstyle=(["'])[^"']*\1/i, "");
    }
    return `${prefix}${quote}${cleaned}${quote}`;
  });
}

function wrapOnce(html: string, marker: string, openRe: RegExp, openRepl: string, closeRe: RegExp, closeRepl: string) {
  if (new RegExp(marker, "i").test(html)) return html;
  return html.replace(openRe, openRepl).replace(closeRe, closeRepl);
}

/**
 * Normalizes rich HTML from the admin Jodit editor for responsive blog detail pages.
 * Works together with `enhanceBlogArticleDom` (client) and `blog-article-prose.css`.
 */
export function prepareBlogArticleHtml(html: string): string {
  if (!html?.trim()) return html;

  let result = sanitizeBlogArticleHtml(html);

  result = wrapOnce(
    result,
    "blog-article-table-scroll",
    /<table\b/gi,
    '<div class="blog-article-table-scroll"><table',
    /<\/table>/gi,
    "</table></div>"
  );

  result = wrapOnce(
    result,
    "blog-article-media-responsive",
    /<iframe\b/gi,
    '<div class="blog-article-media-responsive"><iframe',
    /<\/iframe>/gi,
    "</iframe></div>"
  );

  result = wrapOnce(
    result,
    "blog-article-pre-scroll",
    /<pre\b/gi,
    '<div class="blog-article-pre-scroll"><pre',
    /<\/pre>/gi,
    "</pre></div>"
  );

  result = result.replace(/\s(width|height)=["'][^"']*["']/gi, "");

  const tags = "img|table|div|p|span|iframe|video|embed|object|section|article|figure|td|th";
  result = cleanTagInlineStyles(result, tags);

  return result;
}
