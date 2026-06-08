import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

const WhatsAppIcon = (props: React.ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const contactItems = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: (
      <>
        {siteConfig.contact.address.street},
        <br/>
         {siteConfig.contact.address.city},{siteConfig.contact.address.tehsil},{siteConfig.contact.address.district},
        <br/>
        {siteConfig.contact.address.state},{siteConfig.contact.address.postalCode}
      </>
    ),
  },
  {
    icon: Mail,
    title: "Email Us",
    actionHref: `mailto:${siteConfig.contact.email}`,
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
    actionHref: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
    content: (
      <a
        href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
        className="hover:text-primary transition-colors"
      >
        {siteConfig.contact.phone}
      </a>
    ),
  },
  {
    icon: WhatsAppIcon,
    title: "WhatsApp",
    actionHref: `https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}`,
    content: (
      <a
        href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors"
      >
        {siteConfig.contact.whatsapp}
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
            {"actionHref" in item ? (
              <a
                href={item.actionHref}
                target={item.title === "WhatsApp" ? "_blank" : undefined}
                rel={item.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-fixed transition-transform active:scale-95 md:pointer-events-none"
                aria-label={item.title}
              >
                <item.icon className="h-5 w-5 text-primary" />
              </a>
            ) : (
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-fixed">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
            )}
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
