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

1. **Contact details.** `src/lib/data/site.ts` has placeholder email/phone (`info@adesen.rw`, `+250 7XX XXX XXX`) — no confirmed contact details were found in the source documents. While `contact.isPlaceholder` is `true`, the site shows "to be confirmed" instead of a live `mailto:`/`tel:` link, so nobody can reach a fake address. Update the `contact` object and flip `isPlaceholder` to `false` once you have real details.
2. **Social media links.** The `social` object in `src/lib/data/site.ts` still points to `#` placeholders, so the footer's "Follow ADESEN" block stays hidden (`org.social.isPlaceholder`) until real accounts exist and the URLs are filled in.
3. **Replacing placeholder images.** Every photo slot renders as a branded gradient placeholder (`src/components/ui/PlaceholderImage.tsx`) labelled with what should go there (e.g. "community members in Gatsibo District"). This avoids shipping unlicensed or mismatched stock photos. To replace one:
   - Source a real ADESEN photo, or a properly licensed stock photo (Unsplash and Pexels both allow free commercial use — search their sites directly for terms like "rural Rwanda community", "African classroom", "tree planting Rwanda", "Rwandan youth").
   - Save it to `public/images/` and swap the `<PlaceholderImage ... />` usage for a Next.js `<Image src="/images/your-photo.jpg" alt="..." fill className="rounded-2xl object-cover" />` inside the same wrapper `div`.

The logo is done: `src/components/layout/Logo.tsx` renders ADESEN's real emblem (`public/images/adesen-logo.png`), recreated from the org's Word/PDF branding file with the "ADESEN" wordmark redrawn in place of a leftover "CRD" placeholder from the source template. The favicon and Open Graph share image still use a generated leaf mark instead (the real logo's source resolution is too low to scale up cleanly there).

## Wiring up the contact form

`src/components/ContactForm.tsx` posts to `src/app/api/contact/route.ts`, which sends the message via [Resend](https://resend.com). To make it actually deliver mail:

1. Create a free account at [resend.com](https://resend.com) and generate an API key.
2. Add `RESEND_API_KEY=re_...` to `.env.local`.
3. Set `CONTACT_TO_EMAIL` to the address that should receive enquiries (defaults to `org.contact.email` in `src/lib/data/site.ts` if unset).
4. Once ADESEN's domain is verified in Resend, set `CONTACT_FROM_EMAIL` to a verified address (e.g. `"ADESEN <contact@adesen.rw>"`). Until then, it falls back to Resend's shared `onboarding@resend.dev` sandbox address, which works but is rate-limited and not meant for production volume.

Without `RESEND_API_KEY` set, the form fails honestly with an on-screen error rather than pretending to send.

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
