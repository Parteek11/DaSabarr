import type { MetadataRoute } from "next";
import { BlogService } from "@/features/blog/lib/blog";
import { ProductService } from "@/features/products/services/product-service";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/products",
    "/certifications",
    "/blog",
    "/contact",
  ].map((path) => ({
    url: absoluteUrl(path, baseUrl),
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = ProductService.getAllSlugs().map(
    (slug) => ({
      url: absoluteUrl(`/products/${slug}`, baseUrl),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })
  );

  const blogPages: MetadataRoute.Sitemap = BlogService.getAllSlugs().map(
    (slug) => ({
      url: absoluteUrl(`/blog/${slug}`, baseUrl),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  return [...staticPages, ...productPages, ...blogPages];
}
