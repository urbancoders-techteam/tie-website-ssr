const DEFAULT_GUIDE_HREF = "/blogs";

export type NmcCollegeArticle = {
  title: string;
  description: string;
  categoryLabel: string;
  author?: string;
  date: string;
  readTime: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export const nmcApprovedCollegesContent = {
  eyebrow: "MBBS Abroad",
  heading: "MBBS Abroad: NMC-Approved Colleges & Costs",
  viewAllHref: "/blogs",
  viewAllLabel: "All MBBS Articles",
};

export const nmcFeaturedArticle: NmcCollegeArticle = {
  title: "MBBS in Russia vs Ukraine: Which is Better for Indian Students in 2025?",
  description:
    "A practical comparison of tuition, living costs, NMC recognition, medium of instruction, and post-graduation pathways for Indian students weighing Russia and Ukraine.",
  categoryLabel: "MBBS Abroad",
  author: "Dr. Priya Sharma",
  date: "May 1, 2025",
  readTime: "9 min",
  href: DEFAULT_GUIDE_HREF,
  imageSrc:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Stethoscope and medical equipment representing MBBS abroad",
};

export const nmcSideArticles: NmcCollegeArticle[] = [
  {
    title: "Top NMC-Approved Medical Universities in Russia 2025",
    description: "Fees, intake timelines, and recognition checklist for Indian applicants.",
    categoryLabel: "Russia",
    date: "Apr 28, 2025",
    readTime: "5 min read",
    href: "/mbbs/abroad/russia",
    imageSrc:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80",
    imageAlt: "University campus",
  },
  {
    title: "MBBS in Georgia: Complete Fee Structure for Indian Students",
    description: "Tuition bands, hostel costs, and what to budget before you apply.",
    categoryLabel: "Georgia",
    date: "Apr 25, 2025",
    readTime: "6 min read",
    href: "/mbbs/abroad/georgia",
    imageSrc:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=400&q=80",
    imageAlt: "Students on campus",
  },
  {
    title: "Kazakhstan MBBS Admission 2025: Step-by-Step Guide",
    description: "Documents, NEET requirements, and how to shortlist safe universities.",
    categoryLabel: "Kazakhstan",
    date: "Apr 22, 2025",
    readTime: "7 min read",
    href: "/mbbs/abroad/kazakhstan",
    imageSrc:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=400&q=80",
    imageAlt: "Medical students studying",
  },
  {
    title: "NExT Exam After MBBS Abroad: What Indian Students Must Know",
    description: "How NExT affects licensing, internships, and your return-to-India plan.",
    categoryLabel: "NMC & NExT",
    date: "Apr 18, 2025",
    readTime: "8 min read",
    href: DEFAULT_GUIDE_HREF,
    imageSrc:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508a1c?auto=format&fit=crop&w=400&q=80",
    imageAlt: "Doctor with clipboard",
  },
];
