export type BlogAuthor = {
  name: string;
  role: string;
  avatar?: string;
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: BlogAuthor;
  category: string;
  tags: string[];
  image?: string;
  featured?: boolean;
  readingTime: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};
