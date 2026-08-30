# ADESEN Website

A professional, mobile-first website for **ADESEN** (Action pour le Développement Socioéconomique, la Promotion de l'Éducation et la Protection de l'Environnement), presenting its 2026–2028 Action Plan for Gatsibo District, Rwanda.

Built with Next.js (App Router) + TypeScript + Tailwind CSS v4, following the tech stack and brief confirmed for this project.

## What's included

- **Home, About Us, Our Programmes** (overview + 5 individual component pages: Health, Education, Talent, Environment, Advocacy), **Impact & Results, Partnerships, News, Contact**
- Responsive header/footer, mobile nav, subtle Framer Motion reveals (position-only — never opacity — so content is always visible even without JavaScript)
- Client-side validated contact form (React Hook Form + Zod) — see "Wiring up the contact form" below
- SEO metadata, Open Graph tags, `sitemap.xml`, `robots.txt`
- Self-hosted fonts (Poppins for headings, Inter for body) via `@fontsource` — no external font requests, so the site never depends on Google Fonts being reachable
- Branded placeholder graphics everywhere a real photo will eventually go (see "Replacing placeholder images")
- Analytics slot ready for Google Analytics (see below)

All copy and figures (10,000+ beneficiaries, 1,000 households, 2 ECD centres, 3,000 youth, 100,000 trees, RWF 630 million budget, core values, Theory of Change, NST2/Vision 2050/SDG alignment) are drawn directly from the official ADESEN Action Plan 2026–2028 and Annual Report 2026. All site content lives in one place for easy editing: `src/lib/data/site.ts` and `src/lib/data/programmes.ts`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # ESLint
```

## Before you launch — things to confirm or replace

1. **Contact details.** `src/lib/data/site.ts` has placeholder email/phone (`info@adesen.rw`, `+250 7XX XXX XXX`) — no confirmed contact details were found in the source documents. Update the `contact` object once you have them.
2. **Social media links.** The `social` object in the same file points to `#` placeholders until ADESEN's accounts exist.
3. **Logo.** The header/footer currently render a simple text + leaf-icon wordmark (`src/components/layout/Logo.tsx`). Once you have ADESEN's real logo file, drop it into `public/` and swap the contents of that component for an `<Image>` tag.
4. **Replacing placeholder images.** Every photo slot renders as a branded gradient placeholder (`src/components/ui/PlaceholderImage.tsx`) labelled with what should go there (e.g. "community members in Gatsibo District"). This avoids shipping unlicensed or mismatched stock photos. To replace one:
   - Source a real ADESEN photo, or a properly licensed stock photo (Unsplash and Pexels both allow free commercial use — search their sites directly for terms like "rural Rwanda community", "African classroom", "tree planting Rwanda", "Rwandan youth").
   - Save it to `public/images/` and swap the `<PlaceholderImage ... />` usage for a Next.js `<Image src="/images/your-photo.jpg" alt="..." fill className="rounded-2xl object-cover" />` inside the same wrapper `div`.
5. **Domain.** `siteUrl` is set to `https://www.adesen.rw` as a placeholder in `src/app/layout.tsx`, `src/app/sitemap.ts` and `src/app/robots.ts`. Update all three once the real domain is known.

## Wiring up the contact form

`src/components/ContactForm.tsx` validates input client-side but does not currently send anywhere — `onSubmit` just logs to the console and shows a success state, so you can review the UI end to end. Before launch, pick one:

- **Email service** (recommended): create a Next.js API route (`src/app/api/contact/route.ts`) that sends the form data via [Resend](https://resend.com), SendGrid, or similar, and call it with `fetch` from `onSubmit`.
- **Form backend**: use a hosted service like Formspree or Getform — point the form at their endpoint.

## Analytics

`src/components/Analytics.tsx` loads nothing until you set a `NEXT_PUBLIC_GA_ID` environment variable (Google Analytics 4 Measurement ID) in your hosting provider's dashboard. To use Plausible instead, edit that file directly.

## Deployment (Vercel — recommended)

1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: Next.js (auto-detected). No special build settings are required.
4. Add any environment variables (e.g. `NEXT_PUBLIC_GA_ID`) under Project Settings → Environment Variables.
5. Deploy. Vercel gives you a free `*.vercel.app` URL immediately; add your own domain under Project Settings → Domains once ready.

Netlify works too: framework preset "Next.js", build command `npm run build`, and the Next.js Runtime plugin (Netlify detects this automatically).

## Project structure

```
src/
  app/                    Routes (App Router) — one folder per page
  components/
    layout/               Header, Footer, Logo, SkipLink
    ui/                   Shared primitives (Button, Section, StatCard, PlaceholderImage, Reveal, ...)
    ContactForm.tsx
    ProgrammeCard.tsx
    Analytics.tsx
  lib/
    data/site.ts           Org-wide facts, nav links, key stats, contact info
    data/programmes.ts      The five programme components (activities, targets, alignment)
    utils.ts
```
