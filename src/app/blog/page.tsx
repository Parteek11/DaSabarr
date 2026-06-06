import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/section-header";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { BlogCard } from "@/features/blog/components/blog-card";
import { BlogService } from "@/features/blog/lib/blog";
import { BreadcrumbJsonLd } from "@/features/seo/components/json-ld";
import { createPageMetadata } from "@/features/seo/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Blog | Da Sabarr",
  description:
    "Wellness insights, nutrition science, and indigenous wisdom from the Da Sabarr team. Explore articles on superfoods and healthy living.",
  path: "/blog",
  keywords: ["wellness blog", "superfoods", "organic health", "nutrition"],
});

export default function BlogPage() {
  const posts = BlogService.getAllPosts().map(({ content, ...meta }) => {
    void content;
    return meta;
  });
  const categories = BlogService.getCategories();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />

      <section className="bg-surface-container-low pt-32 pb-16">
        <div className="container-site">
          <SectionHeader
            eyebrow="Wellness Insights"
            title="Our Blog"
            description="Explore articles on superfoods, indigenous wellness wisdom, and healthy living."
            align="left"
          />
          <div className="mt-6 flex flex-wrap gap-3">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full bg-primary-fixed/30 px-4 py-1 text-xs font-semibold text-primary"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap container-site">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <RevealOnScroll key={post.slug} delay={index * 100}>
              <BlogCard post={post} />
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
