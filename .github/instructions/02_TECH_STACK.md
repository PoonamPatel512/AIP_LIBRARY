# 02 Tech Stack Stack

## Required Stack

- Frontend framework: Next.js 15
- Backend runtime model: Next.js Route Handlers
- Language: TypeScript
- ORM: Prisma
- Database: PostgreSQL
- Deployment target: Render

## Technology Policy

The repository standardizes on a single integrated application runtime. New frameworks, ORMs, job systems, or state libraries are not introduced casually. Any additional dependency must justify itself against simplicity, maintainability, and long-term operational cost.

## TypeScript Policy

TypeScript is the language of record for all application code, shared libraries, tests, scripts, and tooling. JavaScript may appear only when required by platform tooling or when the repository intentionally excludes a script from type checking, which should be rare.

## Next.js Policy

Next.js is the application shell, server runtime, and UI delivery layer. Route Handlers are the backend interface for HTTP traffic. Server Components, Client Components, and route handlers must be used intentionally and only when they fit the execution and data-fetching model of the route.

## Prisma And PostgreSQL Policy

Prisma owns the data access contract at the application level. PostgreSQL owns persistence. Schema changes must be intentional, reviewed, and reflected in the docs. Queries should be simple, indexed, and shaped around the product's read patterns.

## Hosting And Runtime Policy

Render is the target deployment platform. The codebase must remain deployable without custom host-specific assumptions that cannot be reproduced locally. Environment configuration, startup behavior, and database connectivity must remain portable between local development and Render.

## Dependency Policy

Add dependencies only when they reduce total complexity. Prefer built-in platform capabilities, native browser APIs, standard Node.js features, and existing project primitives before adding a package. Every dependency should have a clear owner, purpose, and removal cost.

## Compatibility Policy

All technology choices must remain compatible with a clean, testable, server-first architecture. Avoid patterns that bind business logic to the browser, make the API difficult to test, or hide persistence concerns inside UI code.

## Stability Policy

The stack should be boring in the best sense. Favor mature, well-supported libraries. Avoid speculative abstractions and premature multi-service decomposition. Phase 1 should remain a single, coherent application with a disciplined internal architecture.
