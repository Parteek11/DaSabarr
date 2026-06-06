# Da Sabarr — Architecture Guide

## Overview

Production-ready Next.js 15 informational website designed to evolve into a full e-commerce platform without major refactoring. UI is derived from the **Stitch "Da Sabarr Organic Platform"** design system (Ethnobotanical Purity).

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 App Router |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 + Stitch design tokens |
| Components | shadcn/ui patterns (Radix primitives) |
| Rendering | React Server Components + ISR-ready static pages |
| Forms | Server Actions + Zod validation |
| Content | MDX content collections (blog) |
| SEO | Metadata API, JSON-LD, sitemap, robots |
| Deployment | Vercel |

## Folder Architecture

```
src/
├── app/                    # Routes (App Router)
│   ├── page.tsx            # Home
│   ├── about/
│   ├── products/
│   │   └── [slug]/         # Product detail (SSG)
│   ├── certifications/
│   ├── blog/
│   │   └── [slug]/         # Blog detail (SSG)
│   ├── contact/
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── ui/                 # shadcn/ui primitives
│   ├── layout/             # Header, footer
│   └── shared/             # Section header, breadcrumbs, reveal
├── features/               # Feature-based modules
│   ├── products/
│   │   ├── data/           # Static product catalog (→ DB later)
│   │   ├── types/
│   │   ├── services/       # ProductService (→ API later)
│   │   └── components/
│   ├── blog/
│   │   ├── content/        # MDX files (→ CMS later)
│   │   ├── lib/            # BlogService
│   │   └── components/
│   ├── contact/
│   │   ├── actions/        # Server Actions
│   │   ├── services/email/ # Provider abstraction
│   │   └── schemas/
│   ├── home/               # Home page sections
│   └── seo/                # Metadata + JSON-LD
├── config/                 # Site config, navigation
├── lib/                    # Utilities
└── types/                  # Commerce types (future)
```

## Route Architecture

| Route | Rendering | Revalidate |
|-------|-----------|------------|
| `/` | Static | — |
| `/about` | Static | — |
| `/products` | Static | — |
| `/products/[slug]` | SSG | ISR-ready |
| `/certifications` | Static | — |
| `/blog` | Static | — |
| `/blog/[slug]` | SSG | ISR-ready |
| `/contact` | Static | — |

## Product Data Model

Products are stored in `src/features/products/data/products.ts`, separate from UI. The `Product` type includes:

- Core info (name, slug, descriptions, category)
- Benefits, features, nutrition, certifications
- Images with alt text
- SEO metadata
- **Future-ready**: `pricing`, `inventory`, variant SKUs

Access via `ProductService` — swap the data layer for a database/API without changing components.

## Blog Content Strategy

- MDX files in `src/features/blog/content/`
- Frontmatter: title, description, author, category, tags, image, featured
- `BlogService` reads filesystem (→ headless CMS later)
- `next-mdx-remote` for server-side MDX rendering

## Contact Backend Abstraction

```
ContactForm → Server Action → getEmailProvider() → EmailProvider interface
```

Providers:
- `console` — development (default)
- `resend` — production email (set `RESEND_API_KEY`)
- `nodemailer` — placeholder for SMTP
- `crm` — placeholder for HubSpot/Salesforce

## SEO Implementation

- **Metadata API**: per-page `generateMetadata` / static `metadata`
- **JSON-LD**: Organization, Product, Article, BreadcrumbList, FAQPage
- **Canonical URLs**: via `alternates.canonical`
- **Open Graph + Twitter Cards**: on all pages
- **robots.ts** + **sitemap.ts**: dynamic generation

## Future E-Commerce Scalability

Types in `src/types/commerce.ts` define Cart, Order, User, Inventory, Razorpay fields.

### Migration path (no major refactor):

1. **Auth** → Add `src/features/auth/` + middleware; `User` type ready
2. **Cart** → `Cart` type + `src/features/cart/` with server-side session
3. **Checkout** → `Order` type + Razorpay webhook route under `src/app/api/`
4. **Inventory** → Replace static `inventory` on Product with `ProductInventory` from DB
5. **Admin** → `src/app/(admin)/` route group; reuse `ProductService` interface
6. **CMS** → Replace `BlogService` filesystem reads with CMS API; same types

### Key design decisions:

- `ProductService` / `BlogService` are the only data access points
- Product UI never imports raw data files
- Pricing and inventory fields exist but are not displayed (informational site)
- Feature folders map 1:1 to future micro-features

## Design Source of Truth

Stitch project: **Da Sabarr Organic Platform** (`6354927256019833259`)

- Design tokens: `.stitch/DESIGN.md`
- Wireframe HTML: `.stitch/designs/`
- Sync command: `npm run fetch-stitch`

## Performance Targets

- Static rendering for all marketing pages
- `next/image` for optimized remote images
- `next/font` for Playfair Display + Inter
- `optimizePackageImports` for lucide-react
- Lazy intersection observer for scroll reveals (client islands only where needed)

## Deployment (Vercel)

1. Connect GitHub repo
2. Set `NEXT_PUBLIC_SITE_URL`
3. Set `EMAIL_PROVIDER=resend` + `RESEND_API_KEY` for production contact
4. Deploy — zero config required
