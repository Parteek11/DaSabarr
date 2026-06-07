import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

const contactItems = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: (
      <>
        {siteConfig.contact.address.street},
        <br />
        {siteConfig.contact.address.city}, {siteConfig.contact.address.postalCode}
      </>
    ),
  },
  {
    icon: Mail,
    title: "Email Us",
    content: (
      <a
        href={`mailto:${siteConfig.contact.email}`}
        className="hover:text-primary transition-colors"
      >
        {siteConfig.contact.email}
      </a>
    ),
  },
  {
    icon: Phone,
    title: "Call Us",
    content: (
      <a
        href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
        className="hover:text-primary transition-colors"
      >
        {siteConfig.contact.phone}
      </a>
    ),
  },
] as const;

export function ContactInfo() {
  return (
    <div className="space-y-12">
      <div className="grid gap-8">
        {contactItems.map((item) => (
          <div key={item.title} className="flex gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-fixed">
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="mb-1 text-lg font-bold">{item.title}</h4>
              <p className="text-on-surface-variant">{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative h-64 overflow-hidden rounded-2xl bg-surface-container shadow-inner">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-on-surface-variant/40">
          <MapPin className="mb-2 h-10 w-10" />
          <p className="text-sm font-medium">Lalru, Punjab, India</p>
        </div>
      </div>
    </div>
  );
}
