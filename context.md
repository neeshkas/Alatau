# Project Context (Session Log)

## Project Overview
- Project: `aaag---alatau-advance-air-group`
- Stack: React + TypeScript + Vite + Tailwind (via Vite plugin), framer-motion, react-router-dom, react-leaflet.
- Primary language mix: RU/EN content.

## Agreed Terms
- `безоп`: conditional short name for the safety landing.
- Current route naming:
  - Main landing: `/main`
  - Safety landing (`безоп`): `/security`
- Legacy route support currently present:
  - `/` redirects to `/main`
  - `/bezop` redirects to `/security`

## High-Level Work Done In This Session

### 1) Initial Audit + Critical Report
- Performed technical audit of site structure, build health, accessibility, routing, and performance.
- Created `critical.md` with findings and priorities.

### 2) Infrastructure / Build / Styling
- Migrated Tailwind from CDN in `index.html` to local build pipeline via `@tailwindcss/vite`.
- Added `index.css` and imported it in `index.tsx`.
- Removed `importmap` and obsolete direct `/index.css` reference from `index.html`.
- Fixed viewport rule (removed `user-scalable=0`).

### 3) Routing and Navigation Evolution
- Introduced additional pages for legal links:
  - `pages/PrivacyPage.tsx`
  - `pages/TermsPage.tsx`
- Routing updated over time; final convention now `/main` and `/security`.
- Added redirect fallback behavior for SPA hosting via `public/404.html` and redirect restoration logic in `index.tsx`.
- Navigation behavior on `/security` set to local section anchors (`#safety-top`, `#safety-architecture`, `#safety-scenarios`).

### 4) Performance Work
- Converted major heavy `.png` assets to `.webp` and updated imports across components/pages.
- Added lazy route-level chunking (`React.lazy` + `Suspense`) for heavier pages/components.
- Reduced JS payload by moving map GeoJSON from JS bundle (`?raw`) to runtime fetch from `public/data`.
- Added manual chunk splitting in `vite.config.ts` for large vendors.

### 5) Accessibility / UX
- Replaced/removed placeholder `href="#"` links.
- Improved button/link semantics and aria labels in navigation.
- Fixed scroll-to-top logic for layouts with internal `main` scroll container.

### 6) Safety Blocks Iterations (Main + Security)
- Main Safety section was aligned multiple times with Security first block style.
- Added then restyled CTA (`Узнать больше`) with hover animation variants:
  - tested `offset`, then switched to `slide`.
  - fixed partial fill bug by implementing slide through pseudo-element overlay.
- Added `Назад на главную` button on safety page and iterated its target behavior.

### 7) Security Page (Block 2 / Block 3) Iterations
- Multiple layout experiments executed per user instructions:
  - block 2 redesign with cards and animation,
  - rollback to simpler form,
  - move text/image right/up repeatedly,
  - temporary transfer of block 3 content into block 2,
  - rollback to separated block 2 and block 3 state,
  - further micro-positioning adjustments.
- Current UI state reflects latest user-directed positional adjustments (right-shifted image/text in block 2).

## Important Session Events / Notes
- At one point, `components/Safety.tsx` was accidentally truncated by a shell replacement command and immediately reconstructed.
- User explicitly requested strict incremental changes in later phase ("only do exactly what I ask").
- Several requests were intentionally iterative and visual (position tuning by repeated "higher/right").

## Files Touched During Session (Key)
- `critical.md`
- `context.md` (this file)
- `index.html`
- `index.tsx`
- `index.css`
- `vite.config.ts`
- `App.tsx`
- `components/Navigation.tsx`
- `components/Safety.tsx`
- `components/Hero.tsx`
- `components/Footer.tsx`
- `components/RoutesMap.tsx`
- `pages/SafetyPage.tsx`
- `pages/PrivacyPage.tsx`
- `pages/TermsPage.tsx`
- `public/404.html`
- `public/data/almaty-boundary.geojson`
- `public/data/almaty-roads.geojson`

## Current Working Conventions
- "безоп" means safety landing (`/security`).
- Main landing is `/main`.
- User prefers precise, stepwise visual changes with no extra unsolicited edits.
- For layout tuning, user gives direct relative commands ("higher", "right", etc.) and expects immediate micro-adjustment.

## Pending User Intent (Most Recent)
- Continue precise positioning and design alignment for block 2/3 on `/security` as directed in follow-up steps.
