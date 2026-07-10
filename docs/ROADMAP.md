# Roadmap

## Roadmap Philosophy

The roadmap is organized around trusted publication intelligence first, then controlled expansion. Each phase should produce a stable foundation for the next without forcing premature generalization.

## Phase 1

- Establish repository standards and engineering governance
- Define the country, AIRAC, and official publication metadata model
- Create the database schema and core persistence layer for metadata-only records
- Build the primary navigation flow of Region → Country → AIRAC → Publication List
- Deliver country pages that expose current, previous, and future AIRAC context
- Implement ingestion and reconciliation paths that preserve provenance and official source links
- Add validation, testing, and operational observability around the core data flow

## Phase 2

- Expand jurisdiction coverage and ingestion breadth
- Improve search, filtering, and cycle comparison experiences
- Add richer historical views for publication changes by country and AIRAC
- Expand automation for source validation, fresh discovery, and record refresh

## Phase 3

- Extend the platform to additional publication types and authorities
- Improve cross-country comparison and operational intelligence workflows
- Strengthen analytics for publication change patterns and source reliability

## Completed Foundation

- `@aip-library/airac` implements deterministic AIRAC generation, lookup, validation, and formatting.

## Planning Rules

Roadmap items must be expressed as product outcomes rather than technical wish lists. Every phase should have a clear relationship to the product mission and should not require breaking the Phase 1 trust model.

## Change Rule

If a feature idea does not fit the current phase, record it here or in `docs/DECISIONS.md` rather than sneaking it into implementation scope.
