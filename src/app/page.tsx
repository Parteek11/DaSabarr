import { AboutPreview } from "@/features/home/components/about-preview";
import { CertificationsPreview } from "@/features/home/components/certifications-preview";
import { HeroSection } from "@/features/home/components/hero-section";
import { WhyChooseUs } from "@/features/home/components/why-choose-us";
import { ProductGrid } from "@/features/products/components/product-grid";
import { ProductService } from "@/features/products/services/product-service";
import { SectionHeader } from "@/components/shared/section-header";
import { StatsSection } from "@/components/shared/stats-section";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import Link from "next/link";

export default function HomePage() {
  const featuredProducts = ProductService.getFeatured();

  return (
    <>
      <HeroSection />
      <AboutPreview />
      <WhyChooseUs />
      <section className="section-gap container-site" id="products">
        <RevealOnScroll>
          <SectionHeader
            eyebrow="Our Signature Blends"
            title="Featured Products"
          />
        </RevealOnScroll>
        <ProductGrid products={featuredProducts} />
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center border-b-2 border-primary py-1 font-bold text-primary transition-all hover:pb-2"
          >
            View All Products
          </Link>
        </div>
      </section>
      <CertificationsPreview />
      {/*<StatsSection />*/}
    </>
  );
}
