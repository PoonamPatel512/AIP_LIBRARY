# 00 Start Here

## Purpose
This repository is the source of truth for AIP Library, a global aviation metadata platform that tracks AIRAC cycles, AIP amendments, supplements, AICs, and publication metadata from official AIS sources worldwide.

Phase 1 is metadata-only. The system records authoritative publication metadata and official source links. It does not host documents and does not redistribute operational content.

## How To Use These Instructions
Any engineer or AI agent working in this repository must read these instructions before making implementation decisions. The documents under `.github/instructions/` define the engineering operating system for this codebase. The documents under `docs/` define the product, architecture, and living project record.

When there is a conflict between a feature idea and these instructions, the instructions win until a formal decision updates them.

## First Principles
Work from official sources only. Preserve provenance. Model aviation publication data as regulated domain information, not generic CMS content. Favor correctness, traceability, and deterministic behavior over convenience. Keep the implementation small, explicit, and auditable.

## Mandatory Reading Order
1. `01_PROJECT_VISION.md`
2. `02_TECH_STACK_STACK.md`
3. `03_ARCHITECTURE.md`
4. `04_FOLDER_STRUCTURE.md`
5. `05_CODING_STANDARDS.md`
6. `06_DATABASE_STANDARDS.md`
7. `07_API_STANDARDS.md`
8. `08_UI_DESIGN_SYSTEM.md`
9. `09_SECURITY.md`
10. `10_TESTING.md`
11. `11_PERFORMANCE.md`
12. `12_GIT_WORKFLOW.md`
13. `13_DEVELOPMENT_WORKFLOW.md`
14. `14_COPILOT_RULES.md`
15. `15_DEFINITION_OF_DONE.md`
16. `99_GLOBAL_CONSTITUTION.md`

Then read the living project docs in `docs/` in the same spirit: blueprint, requirements, roadmap, decisions, session state, database, API, and changelog.

## Non-Negotiable Project Facts
- Frontend: Next.js 15
- Backend: Next.js Route Handlers
- Language: TypeScript
- Database: PostgreSQL with Prisma
- Architecture: Clean Architecture and Domain-Driven Design
- Deployment target: Render
- Phase 1 scope: metadata and official links only
- No document hosting

## Repository Identity
AIP Library is a public-facing aviation intelligence platform. Its value comes from the quality of its metadata, the provenance of its links, and the consistency of its publication history. Every implementation choice must strengthen those properties.

## What Good Looks Like
A future engineer should be able to answer the following questions by reading the docs in this repository:
- What problem does the product solve?
- What is in scope and out of scope for Phase 1?
- How is aviation publication data modeled?
- Where does business logic live?
- What is allowed in API handlers, UI components, and database access layers?
- How are changes reviewed, tested, and deployed?
- What standards protect provenance, security, and performance?

If the answer to any of those questions is unclear, the documentation is incomplete.

## Operating Rule For AI Agents
AI agents must not invent product behavior, schemas, endpoints, or UI patterns that are not grounded in these documents or in explicit user direction. When the required behavior is missing, the agent must extend the docs first or surface the gap rather than improvising.
