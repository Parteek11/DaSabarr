import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { BlogCard } from "@/features/blog/components/blog-card";
import { MdxContent } from "@/features/blog/components/mdx-content";
import { BlogService } from "@/features/blog/lib/blog";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
} from "@/features/seo/components/json-ld";
import { createArticleMetadata } from "@/features/seo/lib/metadata";
import { formatDate } from "@/lib/utils";

export const revalidate = 3600;

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BlogService.getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BlogService.getPostBySlug(slug);
  if (!post) return {};

  return createArticleMetadata(
    post.title,
    post.description,
    post.slug,
    post.image
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BlogService.getPostBySlug(slug);

  if (!post) notFound();

  const related = BlogService.getRelatedPosts(post);

  return (
    <>
      <ArticleJsonLd post={post} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <article className="pt-32">
        {post.image && (
          <div className="relative mb-12 h-[40vh] min-h-[300px] w-full overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>
        )}

        <div className="container-site max-w-3xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />

          <div className="mb-6 flex flex-wrap items-center gap-3">
            <Badge>{post.category}</Badge>
            <span className="text-sm text-on-surface-variant">
              {formatDate(post.publishedAt)} · {post.readingTime}
            </span>
          </div>

          <h1 className="text-display-lg mb-6 text-primary">{post.title}</h1>
          <p className="text-body-lg mb-8 text-on-surface-variant">
            {post.description}
          </p>

          <div className="mb-12 flex items-center gap-4 border-b border-outline-variant/30 pb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed font-bold text-primary">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-primary">{post.author.name}</p>
              <p className="text-sm text-on-surface-variant">{post.author.role}</p>
            </div>
          </div>

          <MdxContent source={post.content} />

          <div className="mt-12 flex flex-wrap gap-2 border-t border-outline-variant/30 pt-8">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-surface-container-low section-gap">
          <div className="container-site">
            <h2 className="text-headline-lg mb-12 text-center text-primary">
              Related Articles
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <BlogCard key={item.slug} post={item} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="border-b-2 border-primary py-1 font-bold text-primary transition-all hover:pb-2"
              >
                Back to Blog
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
