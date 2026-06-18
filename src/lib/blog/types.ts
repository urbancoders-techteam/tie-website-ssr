export type ApiBlog = {
  title: string;
  excerpt?: string;
  heroDescription?: string;
  metaTitle?: string;
  metaDescription?: string;
  heroTags?: string[];
  description: string;
  slugUrl: string;
  image: string | null;
  date?: string;
  readTime?: string | null;
  categoryId?: string | null;
  categoryName?: string | null;
};

export type ApiBlogCategory = {
  _id: string;
  name: string;
  createdAt?: string;
};

export type BlogPost = {
  _id?: string;
  title: string;
  description: string;
  category: string;
  categoryId?: string;
  author: string;
  authorInitials: string;
  date: string;
  readTime: string;
  icon: string;
  gradient: string;
  href: string;
  image?: string;
  featured?: boolean;
};

export type BlogCategoryTab = {
  id: string;
  label: string;
  dotColor: string;
};

export type PopularPostItem = {
  category: string;
  title: string;
  meta: string;
  href: string;
};
