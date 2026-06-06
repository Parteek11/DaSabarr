import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";

const stats = [
  { value: "10k+", label: "Products Delivered" },
  { value: "5k+", label: "Happy Customers" },
  { value: "100%", label: "Quality Checks" },
  { value: "10+", label: "Years of Trust" },
] as const;

export function StatsSection() {
  return (
    <section className="bg-surface-container-highest py-24">
      <div className="container-site">
        <div className="grid grid-cols-2 gap-12 text-center lg:grid-cols-4">
          {stats.map((stat, index) => (
            <RevealOnScroll key={stat.label} delay={index * 100}>
              <div className="font-display text-4xl font-bold text-primary mb-2 md:text-[40px]">
                {stat.value}
              </div>
              <p className="text-label-caps text-on-surface-variant">
                {stat.label}
              </p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
