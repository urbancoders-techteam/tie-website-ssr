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

/** Balance a single inline tag: drop orphaned closes and append missing closes. */
function balanceInlineTag(html: string, tag: string): string {
  const tagPattern = new RegExp(`(<${tag}\\b[^>]*>|</${tag}>)`, "gi");
  let openCount = 0;
  let result = "";
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tagPattern.exec(html)) !== null) {
    const token = match[0];
    const isClose = /^<\//i.test(token);

    if (isClose) {
      if (openCount > 0) {
        result += html.slice(lastIndex, match.index + token.length);
        openCount--;
        lastIndex = match.index + token.length;
      } else {
        result += html.slice(lastIndex, match.index);
        lastIndex = match.index + token.length;
      }
    } else {
      result += html.slice(lastIndex, match.index + token.length);
      openCount++;
      lastIndex = match.index + token.length;
    }
  }

  result += html.slice(lastIndex);

  if (openCount > 0) {
    result += `</${tag}>`.repeat(openCount);
  }

  return result;
}

/** Close unbalanced inline tags so sibling React nodes are not swallowed by the parser. */
function closeDanglingInlineTags(html: string): string {
  let result = html;

  for (const tag of INLINE_TAGS) {
    result = balanceInlineTag(result, tag);
  }

  return result;
}

export function sanitizeBlogArticleHtml(html: string): string {
  if (!html?.trim()) return html;

  return closeDanglingInlineTags(stripGoogleDocsArtifacts(html));
}
