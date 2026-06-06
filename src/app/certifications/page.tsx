import type { Metadata } from "next";
import { FlaskConical, Shield, ShieldCheck, Leaf } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
} from "@/features/seo/components/json-ld";
import { createPageMetadata } from "@/features/seo/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Certifications | Da Sabarr",
  description:
    "Da Sabarr meets the highest global standards for safety and purity. FSSAI compliant, lab verified, organic certified, and non-GMO.",
  path: "/certifications",
});

const certifications = [
  {
    icon: ShieldCheck,
    title: "Quality Tested",
    subtitle: "FSSAI Compliant",
    description:
      "All products comply with Food Safety and Standards Authority of India regulations, ensuring safe consumption.",
  },
  {
    icon: FlaskConical,
    title: "Lab Verified",
    subtitle: "Batch Certification",
    description:
      "Every production batch undergoes independent laboratory testing for purity, potency, and contaminants.",
  },
  {
    icon: Leaf,
    title: "Organic Standards",
    subtitle: "Non-GMO Certified",
    description:
      "Our ingredients are certified organic and free from genetically modified organisms.",
  },
  {
    icon: Shield,
    title: "Safety Assured",
    subtitle: "Test Reports Available",
    description:
      "Complete test reports are available upon request, demonstrating our commitment to transparency.",
  },
] as const;

const faqs = [
  {
    question: "Are Da Sabarr products FSSAI certified?",
    answer:
      "Yes, all Da Sabarr products are FSSAI compliant and meet Indian food safety standards.",
  },
  {
    question: "How do you ensure product purity?",
    answer:
      "Every batch undergoes independent laboratory testing for heavy metals, pesticides, microbial contamination, and nutritional content.",
  },
  {
    question: "Are your products organic?",
    answer:
      "Yes, our products are sourced from certified organic farms that use chemical-free cultivation methods.",
  },
  {
    question: "Can I request lab test reports?",
    answer:
      "Absolutely. Contact us at info@dasabarr.com and we'll provide batch-specific test reports for any product.",
  },
] as const;

export default function CertificationsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Certifications", path: "/certifications" },
        ]}
      />
      <FaqJsonLd faqs={[...faqs]} />

      <section className="bg-surface-container-low pt-32 pb-16">
        <div className="container-site">
          <SectionHeader
            eyebrow="Quality Assurance"
            title="Certifications & Standards"
            description="Meeting the highest global standards for safety, purity, and transparency."
            align="left"
          />
        </div>
      </section>

      <section className="section-gap container-site">
        <div className="grid gap-8 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <RevealOnScroll key={cert.title} delay={index * 100}>
              <div className="rounded-2xl bg-white p-10 shadow-sm">
                <cert.icon className="mb-6 h-12 w-12 text-primary" />
                <h3 className="text-headline-md mb-2 text-primary">
                  {cert.title}
                </h3>
                <p className="mb-4 text-sm font-semibold text-secondary">
                  {cert.subtitle}
                </p>
                <p className="text-on-surface-variant">{cert.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="bg-primary py-[var(--spacing-section)] text-white">
        <div className="container-site">
          <SectionHeader
            title="Frequently Asked Questions"
            description="Common questions about our quality standards and certifications."
            dark
          />
          <div className="mx-auto max-w-3xl space-y-6">
            {faqs.map((faq, index) => (
              <RevealOnScroll key={faq.question} delay={index * 100}>
                <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
                  <h3 className="mb-3 text-lg font-bold">{faq.question}</h3>
                  <p className="text-white/70">{faq.answer}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
