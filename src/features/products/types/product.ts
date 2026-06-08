import type { Money, ProductInventory, ProductVariant } from "@/types/commerce";

export type ProductCategory =
  | "superfood-powders"
  | "immunity"
  | "antioxidants"
  | "wellness";

export type ProductBenefit = {
  label: string;
  icon?: string;
};

export type ProductNutrition = {
  servingSize: string;
  calories?: number;
  nutrients: { name: string; value: string }[];
};

export type ProductSEO = {
  title: string;
  description: string;
  keywords: string[];
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  description: string;
  category: ProductCategory;
  accentColor: "beetroot" | "moringa" | "turmeric" | "amla";
  benefits: ProductBenefit[];
  features: string[];
  nutrition: ProductNutrition;
  certifications: string[];
  images: {
    hero: string;
    gallery: string[];
    alt: string;
  };
  seo: ProductSEO;
  /** Placeholder pricing for future e-commerce */
  pricing: {
    basePrice: Money;
    variants: Omit<ProductVariant, "stockQuantity" | "isAvailable">[];
  };
  /** Placeholder inventory for future stock management */
  inventory?: Pick<ProductInventory, "status" | "totalStock">;
  isFeatured: boolean;
  isPublished: boolean;
  isComingSoon?: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ProductSummary = Pick<
  Product,
  | "id"
  | "slug"
  | "name"
  | "tagline"
  | "shortDescription"
  | "category"
  | "accentColor"
  | "benefits"
  | "images"
  | "isFeatured"
  | "isComingSoon"
>;
