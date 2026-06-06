export const siteConfig = {
  name: "Da Sabarr",
  tagline: "Pure Nature. Better Health.",
  description:
    "Premium organic and natural health products crafted to support a healthier lifestyle. Discover the raw purity of West African superfoods.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dasabarr.com",
  ogImage: "/images/og-default.jpg",
  locale: "en_IN",
  contact: {
    email: "info@dasabarr.com",
    phone: "+91 98765 43210",
    address: {
      street: "Da Sabarr HQ, Wellness Estate",
      city: "Global City Center",
      postalCode: "560001",
      country: "India",
    },
  },
  social: {
    instagram: "https://instagram.com/dasabarr",
    facebook: "https://facebook.com/dasabarr",
    linkedin: "https://linkedin.com/company/dasabarr",
  },
  company: {
    legalName: "Da Sabarr Organics Pvt. Ltd.",
    foundedYear: 2014,
  },
} as const;
