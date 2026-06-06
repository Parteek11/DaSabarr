import type { ProductSummary } from "@/features/products/types/product";
import { ProductCard } from "@/features/products/components/product-card";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";

type ProductGridProps = {
  products: ProductSummary[];
  variant?: "horizontal" | "grid";
};

export function ProductGrid({ products, variant = "horizontal" }: ProductGridProps) {
  if (variant === "grid") {
    return (
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {products.map((product, index) => (
          <RevealOnScroll key={product.id} delay={index * 100}>
            <ProductCard product={product} variant="grid" />
          </RevealOnScroll>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-12 lg:grid-cols-1">
      {products.map((product, index) => (
        <RevealOnScroll key={product.id} delay={index * 100}>
          <ProductCard product={product} variant="horizontal" index={index} />
        </RevealOnScroll>
      ))}
    </div>
  );
}
