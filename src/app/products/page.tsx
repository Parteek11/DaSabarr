import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/section-header";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { ProductGrid } from "@/features/products/components/product-grid";
import { ProductService } from "@/features/products/services/product-service";
import { BreadcrumbJsonLd } from "@/features/seo/components/json-ld";
import { createPageMetadata } from "@/features/seo/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Products | Da Sabarr",
  description:
    "Explore our premium organic superfood powders — Beetroot, Moringa, Turmeric, and Amla. 100% natural, lab-tested, and sustainably sourced.",
  path: "/products",
  keywords: ["organic powder", "superfoods", "beetroot", "moringa", "turmeric", "amla"],
});

export default function ProductsPage() {
  const products = ProductService.getAllSummaries();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ]}
      />

      <section className="bg-surface-container-low pt-32 pb-16">
        <div className="container-site">
          <RevealOnScroll>
            <SectionHeader
              eyebrow="Our Signature Blends"
              title="Our Products"
              description="Premium organic superfood powders crafted for purity, potency, and wellness."
              align="left"
            />
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-gap container-site">
        <ProductGrid products={products} variant="grid" />
      </section>
    </>
  );
}
