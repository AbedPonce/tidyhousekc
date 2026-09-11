# Project Guide

## Architecture

Tidy House is a single-page TanStack Start marketing site deployed on Netlify. `src/routes/__root.tsx` owns the document shell and SEO metadata, while `src/routes/index.tsx` contains the landing page, service content, and quote-form behavior. Global visual styling and responsive rules live in `src/styles.css`.

## Key directories

- `src/routes/` — file-based application routes
- `public/` — static assets and Netlify's form-detection HTML
- `.netlify/` — platform-generated context and task results

## Conventions

- Use TypeScript and React function components.
- Keep the public landing experience in the index route unless a distinct page is needed.
- Reuse the color tokens defined at the top of `src/styles.css`.
- Preserve native labels, focus states, semantic landmarks, and reduced layout complexity on mobile.
- Use Lucide React for interface icons; do not use emoji as icons.

## Netlify Forms

The quote form submits URL-encoded data to `/contact-form.html`. Every submitted field must also exist in `public/contact-form.html`, and the `cleaning-quote` form name must stay identical in both places. The static page is intentionally not linked in the interface; it exists for Netlify's build-time form registration.

## Commands

- `pnpm dev` starts local Vite development.
- `netlify dev --port 8889` starts the site with Netlify platform emulation.
- `pnpm build` creates a production build.
