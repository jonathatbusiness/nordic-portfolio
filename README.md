# Norway School Portfolio

Educational portfolio website about Norway, built as an English school project. The site presents sections about Norwegian history, culture, geography, tourism, football, language, society and curiosities.

Live project: https://norwayproject-26.vercel.app

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Motion
- Lucide React

## Project Structure

```text
src/
  app/                 App Router entry points, global layout and styles
  components/          Layout, section and reusable UI components
  data/                Structured content used by the page sections
  i18n/                Translation/content provider
  types/               Shared TypeScript types
  utils/               Small shared helpers and constants
public/
  images/              Site images grouped by section
  favicon files        Browser, Apple and Android icons
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Runs the production build locally after `npm run build`.

```bash
npm run lint
```

Runs ESLint checks.

## Content

Most page content lives in `src/data/` and `src/i18n/pt-BR.ts`. Update those files when changing text, cards, references, tourism entries, historical events or section data.

Images are stored in `public/images/` and referenced from the data files or components using root-relative paths such as `/images/cover/hero-norway.webp`.

## Icons

The favicon used by the browser is defined both in `public/favicon.ico` and `src/app/favicon.ico`. Keep both files aligned because Next.js App Router treats `src/app/favicon.ico` as a special metadata route.

## Deploy

The project is ready to deploy on Vercel. A production deployment should run:

```bash
npm run build
```

If the favicon does not update immediately after deployment, clear the browser cache or test in an anonymous/private window, since favicons are cached aggressively by browsers.
