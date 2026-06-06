import type { Metadata } from "next";
import { BadgeCheck, Heart, Leaf, Recycle } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { StatsSection } from "@/components/shared/stats-section";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { BreadcrumbJsonLd } from "@/features/seo/components/json-ld";
import { createPageMetadata } from "@/features/seo/lib/metadata";
import { WhyChooseUs } from "@/features/home/components/why-choose-us";

export const metadata: Metadata = createPageMetadata({
  title: "About Us | Da Sabarr",
  description:
    "Learn about Da Sabarr's mission to bring indigenous West African wellness wisdom to the global stage through premium organic superfoods.",
  path: "/about",
});

const values = [
  {
    icon: Leaf,
    title: "Purity First",
    description: "Every product starts with the finest organic ingredients, sourced responsibly.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assured",
    description: "Rigorous testing and certification ensure safety and potency in every batch.",
  },
  {
    icon: Recycle,
    title: "Sustainability",
    description: "We partner with farmers who practice regenerative, chemical-free agriculture.",
  },
  {
    icon: Heart,
    title: "Customer Trust",
    description: "Transparency in sourcing, processing, and labeling builds lasting relationships.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      <section className="bg-surface-container-low pt-32 pb-16">
        <div className="container-site">
          <SectionHeader
            eyebrow="Our Story"
            title="About Da Sabarr"
            description="Bridging indigenous West African wisdom with contemporary global wellness."
            align="left"
          />
        </div>
      </section>

      <section className="section-gap container-site">
        <div className="grid gap-16 md:grid-cols-2">
          <RevealOnScroll>
            <div className="space-y-6 text-body-lg leading-relaxed text-on-surface-variant">
              <p>
                Da Sabarr is dedicated to providing high-quality organic, natural,
                and health-focused products. We believe in the power of nature and
                sustainable sourcing to deliver products that promote wellness,
                nutrition, and healthy living.
              </p>
              <p>
                Our commitment is to purity, quality, transparency, and customer
                trust. Every product in our catalog is carefully selected and
                processed to preserve the natural nutrients that make these
                superfoods so powerful.
              </p>
              <p>
                From the fertile soils of West Africa to your daily wellness routine,
                we ensure that every step of our supply chain reflects our values
                of integrity and respect for both people and planet.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-xl bg-surface-container p-6"
                >
                  <value.icon className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 font-bold text-primary">{value.title}</h3>
                  <p className="text-sm text-on-surface-variant">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <WhyChooseUs />
      <StatsSection />
    </>
  );
}
