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
    phone: "+91 95925 05572",
    whatsapp: "+91 95925 05572",
    address: {
      street: "Lalru Mandi, Dharamgarh Road, Near Mukhija Palace",
      city: "Lalru",
      tehsil:"Derabassi",
      district: "S.A.S Nagar",
      state:"Punjab",
      postalCode: "140501",
      country: "India",
    },
  },
  social: {
    instagram: "https://instagram.com/da_sabarr",
    facebook: "https://facebook.com/da_sabarr",
    // linkedin: "https://linkedin.com/company/dasabarr",
  },
  company: {
    legalName: "Da Sabarr Organics Pvt. Ltd.",
    foundedYear: 2026,
  },
} as const;
