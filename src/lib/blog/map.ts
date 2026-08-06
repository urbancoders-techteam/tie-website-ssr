import { formatDate } from "@/utils/methods";
import type {
  ApiBlog,
  ApiBlogCategory,
  BlogCategoryTab,
  BlogPost,
  PopularPostItem,
} from "./types";

export const DARK = "#0B162C";
export const DEFAULT_BLOG_AUTHOR = "Taksheela Team";
export const DEFAULT_BLOG_INITIALS = "TT";

const GRADIENTS = [
  "from-[#143C52] via-[#227B8D] to-[#00A99D]",
  "from-[#0B162C] via-[#174D5A] to-[#00999E]",
  "from-[#082D3A] via-[#155C67] to-[#00B2B8]",
  "from-[#1D5361] via-[#25818E] to-[#58C4C9]",
  "from-[#16263F] via-[#287081] to-[#00A99D]",
];

const TAB_COLORS = [
  "#00B2B8",
  "#C45C26",
  "#3B82F6",
  "#8B5CF6",
  "#166534",
  "#CA8A04",
  "#DB2777",
];

export function stripHtml(html: string): string {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function excerptFrom(html: string, maxWords = 28): string {
  const plain = stripHtml(html);
  const words = plain.split(/\s+/).filter(Boolean);
  if (words.length <= maxWords) return plain;
  return `${words.slice(0, maxWords).join(" ")}…`;
}

export function blogHref(slugUrl: string): string {
  if (!slugUrl?.trim()) return "/blogs";

  let path = slugUrl.trim();

  try {
    if (/^https?:\/\//i.test(path)) {
      path = new URL(path).pathname;
    }
  } catch {
    // keep path as-is
  }

  path = path.replace(/^\/+/, "").replace(/^blogs?\/?/i, "");
  const slug =
    path
      .split("?")[0]
      .split("#")[0]
      .replace(/\/+$/, "")
      .split("/")
      .filter(Boolean)
      .pop() ?? "";

  if (!slug) return "/blogs";
  return `/blogs/${slug}`;
}

export function mapApiBlogToPost(blog: ApiBlog, index = 0): BlogPost {
  const plainDescription = stripHtml(blog.description);
  const categoryLabel = blog.categoryName?.trim() || "Blog";
  const initials = categoryLabel
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return {
    title: blog.title,
    description: plainDescription,
    category: categoryLabel,
    categoryId: blog.categoryId ?? undefined,
    author: DEFAULT_BLOG_AUTHOR,
    authorInitials: initials || DEFAULT_BLOG_INITIALS,
    date: blog.date ? formatDate(blog.date) : "",
    readTime: blog.readTime?.trim() || "5 min read",
    icon: initials || "Blog",
    gradient: GRADIENTS[index % GRADIENTS.length],
    href: blogHref(blog.slugUrl),
    image: blog.image || undefined,
    featured: index === 0,
  };
}

function isOthersCategoryName(name: string | null | undefined): boolean {
  return String(name ?? "").trim().toLowerCase() === "others";
}

/** Keep "Others" last in category filters and dropdowns. */
export function sortBlogCategoriesOthersLast(
  categories: ApiBlogCategory[],
): ApiBlogCategory[] {
  const others: ApiBlogCategory[] = [];
  const rest: ApiBlogCategory[] = [];

  for (const category of categories) {
    if (isOthersCategoryName(category.name)) {
      others.push(category);
    } else {
      rest.push(category);
    }
  }

  return [...rest, ...others];
}

export function mapCategoriesToTabs(categories: ApiBlogCategory[]): BlogCategoryTab[] {
  const sortedCategories = sortBlogCategoriesOthersLast(categories);

  return [
    { id: "all", label: "All Posts", dotColor: TAB_COLORS[0] },
    ...sortedCategories.map((cat, index) => ({
      id: cat._id,
      label: cat.name,
      dotColor: TAB_COLORS[(index + 1) % TAB_COLORS.length],
    })),
  ];
}

export function postMatchesCategoryTab(post: BlogPost, tabId: string) {
  if (tabId === "all") return true;
  return post.categoryId === tabId;
}

export function splitBlogSections(posts: BlogPost[]) {
  const latestPosts = posts.slice(0, 3);
  const explorePosts = posts.slice(3, 7);
  const popularPosts: PopularPostItem[] = posts.slice(0, 4).map((post) => ({
    category: post.category,
    title: post.title,
    meta: excerptFrom(post.description, 18),
    href: post.href,
  }));

  return { latestPosts, explorePosts, popularPosts, allPosts: posts };
}
