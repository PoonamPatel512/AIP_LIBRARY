# Project Blueprint

## Project Identity

AIP Library is an AIP Publication Intelligence Platform. Its purpose is to answer one question with confidence: what official aviation publications became effective for a country during a specific AIRAC cycle?

## Product Boundary

Phase 1 is strictly metadata and official links. The application records official publication metadata, provenance, and effective timing. It does not host publication files and does not function as a document repository.

## Core Product Navigation

Region

↓

Country

↓

AIRAC

↓

Publication List

## Core Product Philosophy

The application is designed to answer one question:

"What official aviation publications became effective for this country during this AIRAC cycle?"

## Core Capabilities

- Track publication metadata across jurisdictions, authorities, and AIRAC cycles
- Preserve publication provenance and official source links
- Connect each publication to the country and AIRAC cycle in which it became effective
- Surface current, previous, and future AIRAC context for each country
- Support future ingestion and reconciliation workflows without losing source traceability

## Publication Record Model

Every publication record is anchored to:

- Document Type
- Document Number
- Publication Date
- Effective Date
- AIRAC Cycle
- Official Source URL
- Discovery Timestamp
- Connector
- Status

## Non-Goals

- Document storage or mirroring
- Editorial publishing tools
- Aviation operational guidance
- Unverified crowd-sourced updates
- Features that obscure official source provenance

## System Shape

The application is a single Next.js 15 codebase that serves the frontend and route-handler backend. Domain rules are isolated from infrastructure. PostgreSQL stores normalized publication metadata through Prisma. Deployment is targeted to Render.

A standalone AIRAC engine (`@aip-library/airac`) implements deterministic AIRAC cycle generation, lookup, and validation without depending on the web or database stack. See `docs/adr/ADR-003-AIRAC_ENGINE.md`.

## Product Constraints

The system must remain auditable, deterministic, and conservative about trust. If source data is inconsistent, the application must reflect that inconsistency rather than hiding it behind a synthetic certainty.

## Architectural Commitments

- Clean Architecture governs dependency direction
- Domain-Driven Design governs business modeling
- Route handlers are thin entry points
- Persistence is mediated through explicit repositories and adapters
- Documentation is a first-class product artifact
- The domain model must preserve the relationship between region, country, AIRAC cycle, and official publications
