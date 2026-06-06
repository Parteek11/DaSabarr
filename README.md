# Da Sabarr

Production-ready Next.js 15 website for **Da Sabarr** — an organic and natural health products company. Built from the Stitch "Da Sabarr Organic Platform" design system.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Page | Route |
|------|-------|
| Home | `/` |
| About | `/about` |
| Products | `/products` |
| Product Detail | `/products/[slug]` |
| Certifications | `/certifications` |
| Blog | `/blog` |
| Blog Article | `/blog/[slug]` |
| Contact | `/contact` |

## Tech Stack

- Next.js 15 (App Router, RSC, Server Actions)
- TypeScript
- Tailwind CSS v4
- shadcn/ui components
- MDX blog content collections
- SEO-first (Metadata API, JSON-LD, sitemap, robots)

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

## Stitch Design Sync

Pull latest wireframes from the Stitch project:

```bash
STITCH_API_KEY=your_key npm run fetch-stitch
```

## Architecture

See [ARCHITECTURE.md](./ARCHITECTURE.md) for folder structure, e-commerce scalability plan, and content strategy.

## Deploy

Optimized for [Vercel](https://vercel.com) — connect the repo and deploy.
