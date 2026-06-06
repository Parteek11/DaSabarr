import { FlaskConical, ShieldCheck, Shield, Leaf } from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "@/components/shared/section-header";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    icon: ShieldCheck,
    title: "Quality Tested",
    subtitle: "FSSAI Compliant",
  },
  {
    icon: FlaskConical,
    title: "Lab Verified",
    subtitle: "Batch Certification",
  },
  {
    icon: Leaf,
    title: "Organic Standards",
    subtitle: "Non-GMO Certified",
  },
  {
    icon: Shield,
    title: "Safety Assured",
    subtitle: "Test Reports Available",
  },
] as const;

export function CertificationsPreview() {
  return (
    <section className="relative overflow-hidden bg-primary py-[var(--spacing-section)] text-white">
      <div className="absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-container/30 blur-[100px]" />
      <div className="container-site relative z-10">
        <RevealOnScroll>
          <SectionHeader
            title="Quality You Can Trust"
            description="Meeting the highest global standards for safety and purity."
            dark
          />
        </RevealOnScroll>

        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {certifications.map((cert, index) => (
            <RevealOnScroll key={cert.title} delay={index * 100}>
              <div className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md">
                <cert.icon className="mb-4 h-10 w-10 text-primary-fixed" />
                <h4 className="mb-2 font-bold">{cert.title}</h4>
                <p className="text-xs text-white/50">{cert.subtitle}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10"
          >
            <Link href="/certifications">View All Certifications</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
