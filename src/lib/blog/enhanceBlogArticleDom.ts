const TABLE_WRAP = "blog-article-table-scroll";
const MEDIA_WRAP = "blog-article-media-responsive";
const PRE_WRAP = "blog-article-pre-scroll";

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
    if (el.style.whiteSpace === "nowrap") {
      el.style.whiteSpace = "normal";
    }
    if (el.style.fontSize && window.matchMedia("(max-width: 639px)").matches) {
      el.style.fontSize = "";
      el.style.lineHeight = "";
    }
    resetElementLayout(el);
  });
}
