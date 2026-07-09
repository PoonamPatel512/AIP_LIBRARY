# Project Blueprint

## Project Identity
AIP Library is a global aviation metadata platform focused on AIRAC cycles, AIP amendments, supplements, AICs, and publication metadata sourced from official AIS authorities worldwide.

## Product Boundary
Phase 1 is strictly metadata and official links. The application records what was published, by whom, when, and where the official source can be verified. It does not host publication files.

## Core Capabilities
- Track publication metadata across jurisdictions and authorities
- Preserve publication provenance and source links
- Represent cycles, amendments, supplements, circulars, and related publication metadata
- Surface current state and historical context
- Support future ingestion and reconciliation workflows without losing source traceability

## Non-Goals
- Document storage or mirroring
- Editorial publishing tools
- Aviation operational guidance
- Unverified crowd-sourced updates
- Features that obscure official source provenance

## System Shape
The application is a single Next.js 15 codebase that serves the frontend and route-handler backend. Domain rules are isolated from infrastructure. PostgreSQL stores normalized publication metadata through Prisma. Deployment is targeted to Render.

## Product Constraints
The system must remain auditable, deterministic, and conservative about trust. If source data is inconsistent, the application must reflect that inconsistency rather than hiding it behind a synthetic certainty.

## Architectural Commitments
- Clean Architecture governs dependency direction
- Domain-Driven Design governs business modeling
- Route handlers are thin entry points
- Persistence is mediated through explicit repositories and adapters
- Documentation is a first-class product artifact
