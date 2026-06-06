import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HERO_IMAGE = "/images/og-default.jpg";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Da Sabarr organic superfood powders arrangement"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent" />
      </div>

      <div className="container-site relative z-10 w-full">
        <div className="max-w-2xl text-white">
          <span className="text-label-caps mb-4 block uppercase tracking-widest">
            Indigenous Wellness Wisdom
          </span>
          <h1 className="text-display-lg mb-6 leading-tight">
            Pure Nature.
            <br />
            Better Health.
          </h1>
          <p className="text-body-lg mb-10 max-w-lg text-white/90">
            Premium organic and natural products crafted to support a healthier
            lifestyle. Discover the raw purity of West African superfoods.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-primary-fixed"
            >
              <Link href="/products">View Products</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
