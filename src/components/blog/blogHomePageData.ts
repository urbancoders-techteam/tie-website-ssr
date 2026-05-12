import {
  admissionSteps,
  countryGuides,
  eligibilityPoints,
  faqs,
  mistakesToAvoid,
  nextExamPoints,
} from "./mbbsGuideData";

export const DARK = "#0B162C";
export const DEFAULT_GUIDE_HREF = "/mbbs/abroad";

const TEAM_AUTHOR = "Taksheela MBBS Team";
const TEAM_INITIALS = "TM";
const GUIDE_DATE = "2026 Guide";

export type BlogPost = {
  title: string;
  description: string;
  category: string;
  author: string;
  authorInitials: string;
  date: string;
  readTime: string;
  icon: string;
  gradient: string;
  href?: string;
  featured?: boolean;
};

type BlogPostInput = Omit<BlogPost, "author" | "authorInitials" | "date">;

const countryGradients = [
  "from-[#143C52] via-[#227B8D] to-[#00A99D]",
  "from-[#0B162C] via-[#174D5A] to-[#00999E]",
  "from-[#082D3A] via-[#155C67] to-[#00B2B8]",
  "from-[#1D5361] via-[#25818E] to-[#58C4C9]",
  "from-[#16263F] via-[#287081] to-[#00A99D]",
];

function createGuidePost(post: BlogPostInput): BlogPost {
  return {
    ...post,
    author: TEAM_AUTHOR,
    authorInitials: TEAM_INITIALS,
    date: GUIDE_DATE,
    href: post.href ?? DEFAULT_GUIDE_HREF,
  };
}

function joinGuidePoints(points: string[]) {
  return points.join(" ");
}

export const countryPosts: BlogPost[] = countryGuides.map((country, index) =>
  createGuidePost({
    title: country.headline,
    description: country.summary,
    category: "Country Guides",
    readTime: index === 0 ? "8 min read" : "6 min read",
    icon: country.country,
    gradient: countryGradients[index % countryGradients.length],
    href: country.href,
    featured: index === 0,
  }),
);

export const featuredPosts: BlogPost[] = countryPosts.slice(0, 3);

export const latestPosts: BlogPost[] = [
  createGuidePost({
    title: "Who Can Apply for MBBS Abroad in 2026?",
    description: joinGuidePoints(eligibilityPoints),
    category: "Eligibility",
    readTime: "5 min",
    icon: "NEET",
    gradient: "from-[#1D5361] via-[#25818E] to-[#58C4C9]",
  }),
  createGuidePost({
    title: "Do Not Choose a University on Fees Alone",
    description: joinGuidePoints(nextExamPoints),
    category: "NMC & NExT",
    readTime: "6 min",
    icon: "NExT",
    gradient: "from-[#16263F] via-[#287081] to-[#00A99D]",
  }),
  createGuidePost({
    title: "Step-by-Step MBBS Abroad Admission Process",
    description: joinGuidePoints(admissionSteps),
    category: "Admission Process",
    readTime: "7 min",
    icon: "APPLY",
    gradient: "from-[#0B162C] via-[#1E5F6C] to-[#4FC3C8]",
    href: "/contact",
  }),
];

export const explorePosts: BlogPost[] = [
  ...countryPosts.slice(3),
  createGuidePost({
    title: "Common Mistakes Students Must Avoid",
    description: joinGuidePoints(mistakesToAvoid),
    category: "Student Safety",
    readTime: "4 min",
    icon: "CHECK",
    gradient: "from-[#132D49] via-[#1C6B78] to-[#6CE0D7]",
    href: "/contact",
  }),
];

export const faqPosts: BlogPost[] = faqs.map((faq, index) =>
  createGuidePost({
    title: faq.question,
    description: faq.answer,
    category: "FAQs",
    readTime: `${index + 2} min`,
    icon: "FAQ",
    gradient: "from-[#0B162C] via-[#174D5A] to-[#00999E]",
  }),
);

export const popularPosts = faqPosts.slice(0, 4).map((post) => ({
  category: "FAQs",
  title: post.title,
  meta: post.description,
}));

export const allPosts = [...featuredPosts, ...latestPosts, ...explorePosts, ...faqPosts];

export const categories = [
  "All",
  ...Array.from(new Set(allPosts.map((post) => post.category))),
];

