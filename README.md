# Tidy House KC

A warm, responsive marketing website for a home cleaning company serving the Kansas City Metro area and beyond. It presents recurring, deep-clean, and move-related services and includes a Netlify-powered quote request form with spam protection and clear submission feedback.

## Technology

- TanStack Start and React 19
- TypeScript and Vite
- Tailwind CSS with a custom responsive design system
- Netlify Forms for contact submissions
- Lucide icons

## Local development

Install dependencies with `pnpm install`, then run `pnpm dev`. For local Netlify platform emulation, use `netlify dev --port 8889`. Form registration and processing are available on a deployed Netlify site.

## Contact form

The interactive form is implemented in `src/routes/index.tsx`. The matching static form in `public/contact-form.html` allows Netlify to register all fields during deployment.
