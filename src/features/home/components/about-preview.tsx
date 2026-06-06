import { BadgeCheck, Heart, Leaf, Recycle } from "lucide-react";
import Link from "next/link";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { Button } from "@/components/ui/button";

const values = [
  { icon: Leaf, label: "Natural Ingredients", bg: "bg-surface-container" },
  { icon: BadgeCheck, label: "Quality Assurance", bg: "bg-primary-fixed" },
  { icon: Recycle, label: "Sustainable", bg: "bg-secondary-container" },
  { icon: Heart, label: "Core Values", bg: "bg-surface-container-highest" },
] as const;

export function AboutPreview() {
  return (
    <section className="section-gap container-site">
      <div className="grid items-center gap-16 md:grid-cols-2">
        <RevealOnScroll>
          <div>
            <span className="text-label-caps mb-4 block uppercase tracking-[0.2em] text-primary/60">
              Our Story
            </span>
            <h2 className="text-display-lg mb-8 text-primary">About Da Sabarr</h2>
            <p className="text-body-lg mb-8 leading-relaxed text-on-surface-variant">
              Da Sabarr is dedicated to providing high-quality organic, natural,
              and health-focused products. We believe in the power of nature and
              sustainable sourcing to deliver products that promote wellness,
              nutrition, and healthy living.
            </p>
            <div className="mb-8 grid grid-cols-2 gap-8">
              <div>
                <h4 className="mb-2 font-bold text-primary">Our Mission</h4>
                <p className="text-sm text-on-surface-variant">
                  Empowering global wellness through natural, raw superfoods.
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-bold text-primary">Our Vision</h4>
                <p className="text-sm text-on-surface-variant">
                  To be the bridge between indigenous wisdom and modern health.
                </p>
              </div>
            </div>
            <Button asChild variant="secondary">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-2 gap-4">
          {values.map((item, index) => (
            <RevealOnScroll key={item.label} delay={index * 100}>
              <div
                className={`${item.bg} flex flex-col items-center rounded-xl p-8 text-center`}
              >
                <item.icon className="mb-4 h-10 w-10 text-primary" />
                <p className="font-bold text-primary">{item.label}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
