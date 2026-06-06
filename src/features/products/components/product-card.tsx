import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import type { ProductSummary } from "@/features/products/types/product";
import { cn } from "@/lib/utils";

const accentMap = {
  beetroot: "text-product-beetroot",
  moringa: "text-product-moringa",
  turmeric: "text-product-turmeric",
  amla: "text-product-amla",
} as const;

type ProductCardProps = {
  product: ProductSummary;
  variant?: "horizontal" | "grid";
  index?: number;
};

export function ProductCard({
  product,
  variant = "horizontal",
  index = 0,
}: ProductCardProps) {
  if (variant === "grid") {
    return (
      <Link
        href={`/products/${product.slug}`}
        className="tonal-card group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.images.hero}
            alt={product.images.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <span className="text-label-caps mb-2 text-primary/50">
            {product.tagline}
          </span>
          <h3 className="text-headline-md mb-3 text-primary">{product.name}</h3>
          <p className="mb-4 flex-1 text-sm text-on-surface-variant">
            {product.shortDescription}
          </p>
          <span className="w-fit border-b-2 border-primary py-1 font-bold text-primary transition-all group-hover:pb-2">
            Learn More
          </span>
        </div>
      </Link>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl md:flex-row",
        index % 2 === 1 && "md:flex-row-reverse"
      )}
    >
      <div className="relative min-h-[280px] overflow-hidden md:w-1/2 md:min-h-0">
        <Image
          src={product.images.hero}
          alt={product.images.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center p-10 md:w-1/2">
        <span className={cn("text-label-caps mb-2 uppercase", accentMap[product.accentColor])}>
          {product.tagline}
        </span>
        <h3 className="text-headline-lg mb-4 text-primary">{product.name}</h3>
        <p className="mb-6 text-on-surface-variant">{product.shortDescription}</p>
        <ul className="mb-8 space-y-3">
          {product.benefits.map((benefit) => (
            <li key={benefit.label} className="flex items-center gap-3 text-sm font-medium">
              <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
              {benefit.label}
            </li>
          ))}
        </ul>
        <Link
          href={`/products/${product.slug}`}
          className="w-fit border-b-2 border-primary py-1 font-bold text-primary transition-all hover:pb-2"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
