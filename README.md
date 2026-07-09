# AIP Library

AIP Library is a global aviation metadata platform for AIRAC cycles, AIP Amendments, Supplements, AICs, and official publication metadata sourced from AIS authorities worldwide.

Phase 1 is metadata-only. The application records authoritative publication data and official links. It does not host documents or mirror source files.

## Stack

- Next.js 15 with the App Router
- React 19
- TypeScript
- pnpm
- Tailwind CSS v4
- shadcn/ui components
- Prisma with PostgreSQL
- Zod, TanStack Query, TanStack Table, Recharts, and Framer Motion
- Vitest, Playwright, ESLint, Prettier, Husky, and lint-staged
- Docker and GitHub Actions
- Render deployment

## Repository Layout

- `apps/web` - the Next.js application
- `packages/ui` - shared UI primitives and shadcn-style components
- `prisma` - Prisma schema and persistence groundwork
- `workers` - future background jobs and sync workers
- `scripts` - repository maintenance and validation scripts
- `docs` - living product and architecture documentation
- `.github/instructions` - permanent engineering operating standards

## Commands

- `pnpm dev` starts the web application in development mode.
- `pnpm build` produces the production build.
- `pnpm start` runs the production web server.
- `pnpm lint` runs ESLint.
- `pnpm typecheck` runs TypeScript validation for the workspace packages.
- `pnpm test:unit` runs Vitest.
- `pnpm test:e2e` runs Playwright.

## Foundation Rules

- No business logic.
- No AIRAC engine.
- No scraper.
- No database models yet.
- No APIs yet.
- No dashboard yet.

The repository is intentionally scaffolded for future implementation with Clean Architecture and Domain-Driven Design boundaries preserved from the start.# AIP Library

Phase 1 foundation.

## Vision

Global AIRAC metadata tracking platform.

## Planned architecture

- apps/
- packages/
- workers/
- prisma/
- docs/

Initial Sprint 1 repository bootstrap.
