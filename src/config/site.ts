export const siteConfig = {
  name: "Da Sabarr",
  tagline: "Pure Nature. Better Health.",
  description:
    "Premium organic and natural health products crafted to support a healthier lifestyle. Discover the raw purity of West African superfoods.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dasabarr.com",
  ogImage: "/images/og-default.jpg",
  locale: "en_IN",
  contact: {
    email: "info@dasabrr.com",
    phone: "+91 95925 05572",
    address: {
      street: "Da Sabarr, Lalru, Derabassi, Punjab 140501",
      city: "Lalru",
      postalCode: "140501",
      country: "India",
    },
  },
  social: {
    instagram: "https://instagram.com/das_sabarr",
    facebook: "https://facebook.com/das_sabarr",
    // linkedin: "https://linkedin.com/company/dasabarr",
  },
  company: {
    legalName: "Da Sabarr Organics Pvt. Ltd.",
    foundedYear: 2014,
  },
} as const;
