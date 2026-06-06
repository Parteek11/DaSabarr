import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/features/products/components/product-card";
import { ProductService } from "@/features/products/services/product-service";
import {
  BreadcrumbJsonLd,
  ProductJsonLd,
} from "@/features/seo/components/json-ld";
import { createProductMetadata } from "@/features/seo/lib/metadata";

export const revalidate = 3600;

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return ProductService.getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = ProductService.getBySlug(slug);
  if (!product) return {};

  return createProductMetadata(
    product.seo.title,
    product.seo.description,
    product.slug,
    product.images.hero
  );
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = ProductService.getBySlug(slug);

  if (!product) notFound();

  const related = ProductService.getRelated(product);

  return (
    <>
      <ProductJsonLd product={product} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: product.name, path: `/products/${product.slug}` },
        ]}
      />

      <section className="bg-surface-container-low pt-32 pb-16">
        <div className="container-site">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: product.name },
            ]}
          />
        </div>
      </section>

      <section className="container-site pb-16">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src={product.images.hero}
              alt={product.images.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <Badge className="mb-4">{product.tagline}</Badge>
            <h1 className="text-display-lg mb-6 text-primary">{product.name}</h1>
            <p className="text-body-lg mb-8 text-on-surface-variant">
              {product.description}
            </p>

            <ul className="mb-8 space-y-3">
              {product.benefits.map((benefit) => (
                <li
                  key={benefit.label}
                  className="flex items-center gap-3 font-medium"
                >
                  <CheckCircle className="h-5 w-5 text-primary" />
                  {benefit.label}
                </li>
              ))}
            </ul>

            <div className="mb-8 flex flex-wrap gap-2">
              {product.certifications.map((cert) => (
                <Badge key={cert} variant="outline">
                  {cert}
                </Badge>
              ))}
            </div>

            <div className="mb-8 rounded-xl bg-surface-container-low p-6">
              <h3 className="text-headline-md mb-4 text-primary">Nutrition</h3>
              <p className="mb-4 text-sm text-on-surface-variant">
                Serving size: {product.nutrition.servingSize}
              </p>
              <div className="space-y-2">
                {product.nutrition.nutrients.map((nutrient) => (
                  <div
                    key={nutrient.name}
                    className="flex justify-between border-b border-outline-variant/30 py-2 text-sm"
                  >
                    <span>{nutrient.name}</span>
                    <span className="font-medium">{nutrient.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Enquire Now</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/products">Back to Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-surface-container-low section-gap">
          <div className="container-site">
            <h2 className="text-headline-lg mb-12 text-center text-primary">
              Related Products
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} variant="grid" />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
