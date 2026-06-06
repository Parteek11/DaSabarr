import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

export type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  image,
  keywords,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path, siteConfig.url);
  const ogImage = image ?? absoluteUrl(siteConfig.ogImage, siteConfig.url);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function createProductMetadata(
  productTitle: string,
  description: string,
  slug: string,
  image: string
): Metadata {
  return createPageMetadata({
    title: productTitle,
    description,
    path: `/products/${slug}`,
    image,
    keywords: ["organic", "natural health", "Da Sabarr"],
  });
}

export function createArticleMetadata(
  title: string,
  description: string,
  slug: string,
  image?: string
): Metadata {
  const url = absoluteUrl(`/blog/${slug}`, siteConfig.url);
  const ogImage = image ?? absoluteUrl(siteConfig.ogImage, siteConfig.url);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
