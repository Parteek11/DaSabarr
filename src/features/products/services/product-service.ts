import { products } from "@/features/products/data/products";
import type { Product, ProductSummary } from "@/features/products/types/product";

/**
 * Product data access layer.
 * Swap this implementation for a database/CMS API when scaling to e-commerce.
 */
export class ProductService {
  static getAll(): Product[] {
    return products.filter((p) => p.isPublished);
  }

  static getAllSummaries(): ProductSummary[] {
    return ProductService.getAll().map(toSummary);
  }

  static getFeatured(): ProductSummary[] {
    return ProductService.getAll()
      .filter((p) => p.isFeatured)
      .map(toSummary);
  }

  static getBySlug(slug: string): Product | undefined {
    return products.find((p) => p.slug === slug && p.isPublished);
  }

  static getRelated(product: Product, limit = 3): ProductSummary[] {
    return ProductService.getAll()
      .filter((p) => p.id !== product.id && p.category === product.category)
      .slice(0, limit)
      .map(toSummary);
  }

  static getAllSlugs(): string[] {
    return ProductService.getAll().map((p) => p.slug);
  }
}

function toSummary(product: Product): ProductSummary {
  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    tagline: product.tagline,
    shortDescription: product.shortDescription,
    category: product.category,
    accentColor: product.accentColor,
    benefits: product.benefits,
    images: product.images,
    isFeatured: product.isFeatured,
    isComingSoon: product.isComingSoon,
  };
}
