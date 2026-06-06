import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/section-header";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { ContactForm } from "@/features/contact/components/contact-form";
import { ContactInfo } from "@/features/contact/components/contact-info";
import { BreadcrumbJsonLd } from "@/features/seo/components/json-ld";
import { createPageMetadata } from "@/features/seo/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us | Da Sabarr",
  description:
    "Get in touch with Da Sabarr. Reach us by email, phone, or fill out our contact form. We'd love to hear from you.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      <section className="bg-surface-container-low pt-32 pb-16">
        <div className="container-site">
          <SectionHeader
            title="Get In Touch"
            description="We'd love to hear from you and answer any questions."
            align="left"
          />
        </div>
      </section>

      <section className="section-gap container-site">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <RevealOnScroll>
            <div className="rounded-2xl bg-white p-10 shadow-sm">
              <ContactForm />
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <ContactInfo />
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
