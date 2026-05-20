# GrowthOS AI — Marketing Site

Single-page marketing site for **GrowthOS AI** — the 3-way partnership (AJ Jordan / Daniel Lee / Jeremy Garcia) selling AI growth infrastructure to service businesses.

Live target domain: `growthos-ai.com` (to be purchased).

## Stack

- **Astro 5** + **Tailwind v4** — static output, zero JS runtime cost
- Pure HTML/CSS at build time (~1s build)
- Dark navy + gold palette matching the v16 pitch deck

## Local dev

```bash
npm install
npm run dev       # → http://localhost:4321
npm run build     # → dist/ (static)
npm run preview   # → preview built site
```

## Sections (single-page scroll)

1. **Hero** — "The first $1M+ comes from speed."
2. **Stats bar** — $450M+ / $12M+ / 50+ / 40+
3. **Services** — 6 tiles (Leads, Voice, DBR, CRM, Custom Agents, Strategic)
4. **Receipts** — $1.6M pool / $1K PI / 77× ROAS / $5 GLP-1
5. **Founders** — AJ + Daniel public; Jeremy redacted (NDA-gated)
6. **Pricing** — $12K setup + $5K/mo + Enterprise
7. **Book a Call** — Calendly placeholder
8. **Footer**

## Deploy

- Mocks: pushed to private GitHub repo, Cloudflare Pages preview auto-deploys per commit
- Launch target: Cloudflare Pages w/ `growthos-ai.com` (static, ~free)
- Fallback: Lovable import if AI-driven content iteration becomes priority

## Content sources

Lifted verbatim from `projects/aj-jordan-partnership/growthos-one-pager.html` (Jeremy's locked v15 messaging).
