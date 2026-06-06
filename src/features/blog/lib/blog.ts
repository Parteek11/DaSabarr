import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogPost, BlogPostMeta } from "@/features/blog/types/blog";

const CONTENT_DIR = path.join(process.cwd(), "src/features/blog/content");

function parsePost(filename: string): BlogPost {
  const filePath = path.join(CONTENT_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug: data.slug as string,
    title: data.title as string,
    description: data.description as string,
    publishedAt: data.publishedAt as string,
    updatedAt: data.updatedAt as string | undefined,
    author: data.author as BlogPost["author"],
    category: data.category as string,
    tags: data.tags as string[],
    image: data.image as string | undefined,
    featured: data.featured as boolean | undefined,
    readingTime: stats.text,
    content,
  };
}

export class BlogService {
  static getAllPosts(): BlogPost[] {
    const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
    return files
      .map(parsePost)
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
  }

  static getPostBySlug(slug: string): BlogPost | undefined {
    return BlogService.getAllPosts().find((p) => p.slug === slug);
  }

  static getAllSlugs(): string[] {
    return BlogService.getAllPosts().map((p) => p.slug);
  }

  static getFeaturedPosts(limit = 2): BlogPostMeta[] {
    return BlogService.getAllPosts()
      .filter((p) => p.featured)
      .slice(0, limit)
      .map(toMeta);
  }

  static getRelatedPosts(post: BlogPost, limit = 3): BlogPostMeta[] {
    return BlogService.getAllPosts()
      .filter(
        (p) =>
          p.slug !== post.slug &&
          (p.category === post.category ||
            p.tags.some((t) => post.tags.includes(t)))
      )
      .slice(0, limit)
      .map(toMeta);
  }

  static getCategories(): string[] {
    return [...new Set(BlogService.getAllPosts().map((p) => p.category))];
  }
}

function toMeta(post: BlogPost): BlogPostMeta {
  const { content, ...meta } = post;
  void content;
  return meta;
}
