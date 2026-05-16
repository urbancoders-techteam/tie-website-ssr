export type ShortBlogPost = {
  title: string;
  description: string;
  tagLabel: string;
  date: string;
  readTime: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export type ShortBlogColumn = {
  eyebrow: string;
  heading: string;
  viewAllHref: string;
  viewAllLabel: string;
  tagVariant: "immersion" | "study-india";
  posts: ShortBlogPost[];
};

export const shortBlogColumns: ShortBlogColumn[] = [
  {
    eyebrow: "Global Immersion",
    heading: "GIP: Short-Term International Programs",
    viewAllHref: "/immersion",
    viewAllLabel: "All",
    tagVariant: "immersion",
    posts: [
      {
        title: "Why a 2-Week Global Immersion Beats a Virtual Campus Tour",
        description:
          "How short international programs help Indian students build confidence, cultural awareness, and stronger university applications.",
        tagLabel: "Immersion",
        date: "May 3, 2025",
        readTime: "4 min read",
        href: "/immersion",
        imageSrc:
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80",
        imageAlt: "Students on an international campus",
      },
      {
        title: "Summer Schools in the UK & Europe: What Parents Should Know",
        description:
          "Program formats, safety, costs, and how to choose a credible provider for school students.",
        tagLabel: "Immersion",
        date: "Apr 30, 2025",
        readTime: "5 min read",
        href: "/immersion",
        imageSrc:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
        imageAlt: "Group learning abroad",
      },
      {
        title: "Building Global Skills Before Your UG Degree Abroad",
        description:
          "Leadership, communication, and independence gains from guided immersion experiences.",
        tagLabel: "Immersion",
        date: "Apr 26, 2025",
        readTime: "6 min read",
        href: "/immersion",
        imageSrc:
          "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=400&q=80",
        imageAlt: "International education workshop",
      },
    ],
  },
  {
    eyebrow: "Study in India",
    heading: "Exclusive Blog on Indian College News & Exams",
    viewAllHref: "/mbbs/india",
    viewAllLabel: "All",
    tagVariant: "study-india",
    posts: [
      {
        title: "NEET UG 2025: Cut-Off Trends & State Quota Explained",
        description:
          "What aspirants and parents should track across AIQ, state counselling, and private college fees.",
        tagLabel: "Study in India",
        date: "May 2, 2025",
        readTime: "7 min read",
        href: "/mbbs/india",
        imageSrc:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80",
        imageAlt: "Student preparing for exams",
      },
      {
        title: "Top Medical Colleges in India: Admission Paths After NEET",
        description:
          "Government, deemed, and private options — and how counselling rounds actually work.",
        tagLabel: "Study in India",
        date: "Apr 29, 2025",
        readTime: "6 min read",
        href: "/mbbs/india",
        imageSrc:
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&q=80",
        imageAlt: "Medical education in India",
      },
      {
        title: "CUET & UG Admissions 2025: Key Dates Indian Students Cannot Miss",
        description:
          "A month-by-month checklist for forms, exams, and college shortlisting in India.",
        tagLabel: "Study in India",
        date: "Apr 24, 2025",
        readTime: "5 min read",
        href: "/mbbs/india",
        imageSrc:
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80",
        imageAlt: "University campus in India",
      },
    ],
  },
];
