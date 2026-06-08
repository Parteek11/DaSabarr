export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Certifications", href: "/certifications" },
  { label: "Blog", href: "/blog" },
];

export const footerNavigation = {
  quickLinks: mainNavigation.filter((item) => item.href !== "/blog"),
  support: [
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;
