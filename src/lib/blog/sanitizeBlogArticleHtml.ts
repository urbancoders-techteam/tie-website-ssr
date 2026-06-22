const INLINE_TAGS = ["strong", "b", "em", "i", "u", "span", "a", "font"] as const;

/** Google Docs / Jodit paste artifacts that break HTML parsing and hydration. */
function stripGoogleDocsArtifacts(html: string): string {
  let result = html;

  result = result.replace(/\s id="docs-internal-guid-[^"]*"/gi, "");
  result = result.replace(/\s id="docs-internal-guid-[^']*'/gi, "");

  result = result.replace(
    /<(strong|b)\b[^>]*style="[^"]*font-weight:\s*normal[^"]*"[^>]*>([\s\S]*?)<\/\1>/gi,
    "$2"
  );
  result = result.replace(
    /<(strong|b)\b[^>]*style='[^']*font-weight:\s*normal[^']*'[^>]*>([\s\S]*?)<\/\1>/gi,
    "$2"
  );

  result = result.replace(/<(strong|b)\b[^>]*>\s*<\/\1>/gi, "");

  return result;
}

/** Close unbalanced inline tags so sibling React nodes are not swallowed by the parser. */
function closeDanglingInlineTags(html: string): string {
  let result = html;

  for (const tag of INLINE_TAGS) {
    const openRe = new RegExp(`<${tag}\\b[^>]*>`, "gi");
    const closeRe = new RegExp(`</${tag}>`, "gi");
    const openCount = (result.match(openRe) ?? []).length;
    const closeCount = (result.match(closeRe) ?? []).length;

    if (openCount > closeCount) {
      result += `</${tag}>`.repeat(openCount - closeCount);
    }
  }

  return result;
}

export function sanitizeBlogArticleHtml(html: string): string {
  if (!html?.trim()) return html;

  return closeDanglingInlineTags(stripGoogleDocsArtifacts(html));
}
