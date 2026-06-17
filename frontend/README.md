# Crowdix v2 Frontend

Crowdix v2 is a premium AI agency portfolio frontend built from scratch with a dark editorial visual direction, portfolio-first hierarchy, glass surfaces, cyan accents, and portrait-safe founder layouts.

This repository is intentionally frontend-only for now.

- No backend yet
- No Laravel
- No Filament
- No WAMP/PHP backend
- No admin dashboard
- No public login page
- Supabase will be integrated later for data and storage

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- npm
- Local mock data in `lib/data`
- Shared interfaces in `types`

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

## Commands

Development:

```bash
npm run dev
```

Lint:

```bash
npm run lint
```

Production build:

```bash
npm run build
```

Production preview:

```bash
npm run start
```

## Routes

- `/`
- `/projects`
- `/projects/[slug]`
- `/services`
- `/founders`
- `/founders/[slug]`

## Project Structure

- `app/` App Router pages, layout, loading, error, and not-found states
- `components/` reusable UI building blocks
- `lib/data/` local mock content and site copy
- `types/` shared interfaces for future backend integration
- `public/` static assets

## Notes

- Founder pages use portrait-safe framed placeholders instead of horizontal face crops.
- Public page content is structured around local mock data so it can be migrated to Supabase later.
- The design reference source for this frontend is:
  `C:\wamp64\www\ai-agency-portfolio_02\Open-Design-Landing`

## Future Integration

Supabase will be added later for:

- structured content records
- image storage
- public content delivery
- internal/admin workflows after product decisions are finalized
