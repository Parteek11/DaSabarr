import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { BlogPostMeta } from "@/features/blog/types/blog";
import { formatDate } from "@/lib/utils";

type BlogCardProps = {
  post: BlogPostMeta;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="tonal-card group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm">
      {post.image && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3">
          <Badge variant="secondary">{post.category}</Badge>
          <span className="text-xs text-on-surface-variant">
            {formatDate(post.publishedAt)} · {post.readingTime}
          </span>
        </div>
        <h3 className="text-headline-md mb-3 text-primary group-hover:underline">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mb-4 flex-1 text-sm text-on-surface-variant line-clamp-3">
          {post.description}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="w-fit border-b-2 border-primary py-1 text-sm font-bold text-primary transition-all group-hover:pb-2"
        >
          Read Article
        </Link>
      </div>
    </article>
  );
}
