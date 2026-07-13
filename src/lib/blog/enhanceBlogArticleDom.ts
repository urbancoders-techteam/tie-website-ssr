const TABLE_WRAP = "blog-article-table-scroll";
const MEDIA_WRAP = "blog-article-media-responsive";
const PRE_WRAP = "blog-article-pre-scroll";

const TABLE_TAGS = new Set([
  "TABLE",
  "THEAD",
  "TBODY",
  "TFOOT",
  "TR",
  "TD",
  "TH",
  "COL",
  "COLGROUP",
  "CAPTION",
]);

function wrapElement(el: Element, className: string) {
  if (el.parentElement?.classList.contains(className)) return;
  const wrap = document.createElement("div");
  wrap.className = className;
  el.parentNode?.insertBefore(wrap, el);
  wrap.appendChild(el);
}

function resetElementLayout(el: HTMLElement) {
  el.style.maxWidth = "100%";
  el.style.boxSizing = "border-box";

  if (el.tagName === "IMG") {
    el.style.width = "100%";
    el.style.height = "auto";
    el.removeAttribute("width");
    el.removeAttribute("height");
    if (el instanceof HTMLImageElement) {
      el.loading = "lazy";
      el.decoding = "async";
    }
    return;
  }

  if (["IFRAME", "VIDEO", "EMBED", "OBJECT"].includes(el.tagName)) {
    el.style.width = "100%";
    el.style.height = "auto";
    return;
  }

  if (el.style.width && !el.style.width.includes("%")) {
    el.style.width = "";
  }
  if (el.style.minWidth) el.style.minWidth = "";
  if (el.style.maxWidth && !el.style.maxWidth.includes("%")) {
    el.style.maxWidth = "100%";
  }
}

/** Only strip layout locks that already exist — never invent new inline styles. */
function clearWrapLocks(el: HTMLElement) {
  const ws = el.style.whiteSpace;
  if (ws === "nowrap" || ws === "pre" || ws === "pre-wrap") {
    el.style.removeProperty("white-space");
  }
  if (el.style.minWidth) {
    el.style.removeProperty("min-width");
  }
}

function isTableRelated(el: Element) {
  return TABLE_TAGS.has(el.tagName) || Boolean(el.closest("table"));
}

/**
 * Client-side pass for any editor markup the server regex did not catch.
 */
export function enhanceBlogArticleDom(root: HTMLElement) {
  root.querySelectorAll("table").forEach((table) => wrapElement(table, TABLE_WRAP));

  root.querySelectorAll("iframe, video, embed, object").forEach((node) => {
    wrapElement(node, MEDIA_WRAP);
    resetElementLayout(node as HTMLElement);
  });

  root.querySelectorAll("pre").forEach((pre) => wrapElement(pre, PRE_WRAP));

  root.querySelectorAll("img").forEach((img) => resetElementLayout(img as HTMLElement));

  root.querySelectorAll<HTMLElement>("[style]").forEach((el) => {
    if (!isTableRelated(el)) {
      clearWrapLocks(el);
    }
    el.style.fontFamily = "";
    if (el.style.fontSize && window.matchMedia("(max-width: 639px)").matches) {
      el.style.fontSize = "";
      el.style.lineHeight = "";
    }
    if (!isTableRelated(el)) {
      resetElementLayout(el);
    }
  });

  // List text wrap: only touch existing inline locks; skip tables; clean NBSP in text
  root.querySelectorAll("li").forEach((li) => {
    const el = li as HTMLElement;

    if (el.hasAttribute("style")) {
      clearWrapLocks(el);
    }

    el.querySelectorAll<HTMLElement>("[style]").forEach((child) => {
      if (isTableRelated(child)) return;
      clearWrapLocks(child);
      if (child.style.width && !child.style.width.includes("%")) {
        child.style.width = "";
      }
    });

    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const textNodes: Text[] = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode as Text);
    textNodes.forEach((node) => {
      if (node.parentElement && isTableRelated(node.parentElement)) return;
      if (node.nodeValue && /\u00a0/.test(node.nodeValue)) {
        node.nodeValue = node.nodeValue.replace(/\u00a0/g, " ");
      }
    });
  });

  root.querySelectorAll("font").forEach((font) => {
    const span = document.createElement("span");
    while (font.firstChild) {
      span.appendChild(font.firstChild);
    }
    font.replaceWith(span);
  });
}
