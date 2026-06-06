import {
  Brain,
  FlaskConical,
  Leaf,
  ShieldBan,
  Sparkles,
  Users,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";

const features = [
  {
    icon: Brain,
    title: "100% Natural",
    description:
      "Pure, unadulterated ingredients directly from the source with zero fillers or synthetics.",
  },
  {
    icon: Leaf,
    title: "Organic Sourcing",
    description:
      "We partner with local farmers who employ traditional, chemical-free cultivation methods.",
  },
  {
    icon: FlaskConical,
    title: "Quality Tested",
    description:
      "Rigorous lab testing ensures every batch meets our uncompromising safety standards.",
  },
  {
    icon: ShieldBan,
    title: "No Harmful Additives",
    description:
      "Free from preservatives, artificial colors, and genetically modified organisms.",
  },
  {
    icon: Sparkles,
    title: "Wellness Focused",
    description:
      "Products designed specifically to align with a holistically healthy and balanced lifestyle.",
  },
  {
    icon: Users,
    title: "Trusted by Customers",
    description:
      "A growing community of wellness enthusiasts relies on us for their daily nutrition.",
  },
] as const;

export function WhyChooseUs() {
  return (
    <section className="bg-surface-container-low section-gap">
      <div className="container-site">
        <RevealOnScroll>
          <SectionHeader title="Why Choose Us" />
        </RevealOnScroll>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <RevealOnScroll key={feature.title} delay={index * 100}>
              <div className="tonal-card rounded-xl bg-white p-10">
                <feature.icon className="mb-6 h-10 w-10 text-primary-container" />
                <h3 className="text-headline-md mb-4 text-primary">
                  {feature.title}
                </h3>
                <p className="text-on-surface-variant">{feature.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
