# MagnaRix — Decision Orchestration for the Enterprise

Enterprise SaaS marketing website for MagnaRix, built with Next.js 14, TypeScript, Tailwind CSS v3, and the App Router.

## Stack

- **Next.js 16** with TypeScript and App Router
- **Tailwind CSS v3** with custom design system
- **ESLint** for code quality
- **Inter** (Google Fonts via `next/font`) for typography
- Zero external UI libraries — all components built custom

## Getting Started

### Prerequisites

Node.js 18+ is required.

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
magnarix.com/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (Header, Footer, metadata)
│   ├── globals.css             # Global styles and Tailwind directives
│   ├── page.tsx                # Home page
│   ├── not-found.tsx           # 404 page
│   ├── product/page.tsx        # Product overview
│   ├── platform/page.tsx       # Platform architecture
│   ├── use-cases/page.tsx      # Enterprise use cases
│   ├── why-magnarix/page.tsx   # Why MagnaRix
│   ├── company/page.tsx        # Company / mission
│   ├── contact/page.tsx        # Contact / demo request
│   ├── insights/page.tsx       # Insights (coming soon)
│   ├── privacy/page.tsx        # Privacy policy
│   └── terms/page.tsx          # Terms of use
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Fixed nav with scroll state and mobile menu
│   │   └── Footer.tsx          # Site footer with nav columns
│   ├── sections/
│   │   ├── PageHero.tsx        # Reusable page hero section
│   │   ├── CTASection.tsx      # Reusable bottom CTA section
│   │   ├── FeatureGrid.tsx     # Card grid for features
│   │   └── ContactForm.tsx     # Client-side contact form with validation
│   └── ui/
│       ├── Button.tsx          # Button component (primary, secondary, ghost)
│       ├── Card.tsx            # Card component with optional hover state
│       └── SectionLabel.tsx    # Small label tag component
├── public/
│   └── robots.txt
├── tailwind.config.ts          # Tailwind v3 config with custom design tokens
└── postcss.config.mjs          # PostCSS config for Tailwind v3
```

## Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `midnight` | `#0A0E1A` | Primary background |
| `navy` | `#0D1B2E` | Section backgrounds |
| `slate-deep` | `#1A2744` | Card backgrounds |
| `steel` | `#2A3F6F` | Borders and dividers |
| `frost` | `#8BA4C8` | Secondary / muted text |
| `off-white` | `#E8EDF5` | Body text |
| `accent` | `#4A7CF7` | Primary CTA blue |
| `accent-light` | `#6B96FF` | Hover states |
| `gold` | `#C9A84C` | Premium accent (used sparingly) |

### Typography

- **Font**: Inter (via `next/font/google`)
- **Headings**: weight 600–700, tight letter-spacing
- **Body**: weight 400, relaxed line-height

### Component Classes (globals.css)

| Class | Description |
|---|---|
| `.section-container` | Max-width constrained, horizontally padded |
| `.section-pad` | Standard vertical padding for sections |
| `.heading-xl` | Hero-size headings |
| `.heading-lg` | Section headings |
| `.heading-md` | Sub-section headings |
| `.heading-sm` | Card/item headings |
| `.body-lg` | Large body text |
| `.body-base` | Standard body text |
| `.label-tag` | Uppercase tracking label |
| `.card-base` | Styled card with deep slate background |
| `.btn-primary` | Primary button style |
| `.btn-secondary` | Secondary button style |
| `.text-gradient` | White-to-frost gradient text |
| `.text-gradient-accent` | Accent color gradient text |
| `.grid-bg` | Subtle dot-grid background pattern |
| `.glow-accent` | Large accent glow box-shadow |
| `.glow-sm` | Small accent glow box-shadow |

## Pages

| Route | Description |
|---|---|
| `/` | Home — problem statement, capabilities, Decision Canvas preview, use cases |
| `/product` | Product — Decision Canvas deep-dive, AI assistance, workflow |
| `/platform` | Platform — five-layer architecture, enterprise readiness, responsible AI |
| `/use-cases` | Use Cases — seven enterprise decision domains |
| `/why-magnarix` | Why MagnaRix — the case, tool gap analysis, differentiation |
| `/about` | About — mission, vision, principles, founding context |
| `/contact` | Contact — demo request form with validation |
| `/insights` | Insights — placeholder (content coming) |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Use |

## Key Components

### Header

Fixed navigation with:
- Transparent at top, blurred dark on scroll
- Active state per route
- Hamburger menu for mobile (animated, closes on route change)

### Button

Supports `primary`, `secondary`, and `ghost` variants with `sm`, `md`, and `lg` sizes. Renders as a `<Link>` when given an `href`, otherwise as a `<button>`.

### ContactForm

Client-side form with:
- Field validation (name, company, email, message)
- Loading state during submission
- Success state after submission
- Error state with guidance
- Form backend integration point marked with `TODO` comment

To wire up form submission, replace the mock `setTimeout` in `components/sections/ContactForm.tsx` with a real integration — options include a Next.js API route, Formspree, or Resend.

### PageHero

Reusable hero section accepting `label`, `headline`, `subheadline`, optional `cta` (primary and secondary buttons), and `centered` layout option.

### FeatureGrid

Card grid supporting 2, 3, or 4 columns with responsive breakpoints.

## Customization

### Adding Pages

Create `app/[slug]/page.tsx` with a default export and optional `metadata` export following the existing pattern.

### Updating Navigation

Edit the `navLinks` array in `components/layout/Header.tsx` and the `footerNav` object in `components/layout/Footer.tsx`.

### Tailwind Config

Custom colors, font, and spacing are defined in `tailwind.config.ts`. All custom tokens are available as Tailwind utilities throughout the project.

### Form Backend

The contact form in `components/sections/ContactForm.tsx` currently simulates submission with a 1.2-second delay. Replace the `await new Promise(...)` block with your actual form handling — a Next.js Server Action, an API route at `/api/contact`, Formspree, or similar.

## Deployment

This site builds entirely as static output (all pages are statically pre-rendered). It can be deployed to:

- **Vercel** — zero-config (recommended)
- **Netlify** — with `npm run build` and `out/` directory output
- **Any static host** — after running `next export` if needed
- **Docker** — using a Node.js base image running `next start`

For Vercel deployment, connect the repository and Vercel will detect Next.js automatically.

## Environment Variables

No environment variables are required for the marketing site as shipped. If you add a form backend or analytics, add relevant keys to `.env.local` (excluded from git by `.gitignore`).

## License

Proprietary. All rights reserved by MagnaRix.
