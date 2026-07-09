# 99 Global Constitution

## Constitutional Purpose
This document is the highest-level engineering contract for AIP Library. It defines the permanent standards that govern implementation, review, and evolution of the repository.

## Constitutional Statements
1. AIP Library exists to serve authoritative aviation publication metadata, not hosted documents.
2. Phase 1 scope is limited to metadata and official links.
3. Official AIS sources are the authority for publication provenance.
4. The architecture is Clean Architecture with Domain-Driven Design.
5. Next.js 15 is the application framework and route-handling surface.
6. TypeScript is the language of record.
7. PostgreSQL and Prisma are the persistence foundation.
8. Render is the deployment target.
9. Domain rules must remain independent of framework and infrastructure details.
10. Security, provenance, and correctness outrank convenience.
11. Historical integrity must not be sacrificed for simplicity.
12. Documentation is part of the product and must remain current.
13. AI agents must operate inside these standards rather than around them.
14. Any durable exception to these rules requires an explicit documented decision.

## Constitutional Enforcement
When a change, request, or implementation idea conflicts with this constitution, the conflict must be resolved before code is written. If a decision cannot be made immediately, the safest narrow interpretation should be chosen and the uncertainty documented.

## Amendment Rule
This constitution may evolve, but only through deliberate documentation updates that are reviewed as carefully as code. Silent drift is not permitted.
