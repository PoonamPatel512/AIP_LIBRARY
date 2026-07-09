# Roadmap

## Roadmap Philosophy
The roadmap is organized around trusted metadata first, then controlled expansion. Each phase should produce a stable foundation for the next without forcing premature generalization.

## Phase 1
- Establish repository standards and engineering governance
- Define the aviation publication metadata model
- Create the database schema and core persistence layer
- Build the primary read surfaces for publication metadata and source links
- Implement ingestion and reconciliation paths that preserve provenance
- Add validation, testing, and operational observability around the core data flow

## Phase 2
- Expand jurisdiction coverage and ingestion breadth
- Improve search and filtering experiences
- Add richer comparison and historical views
- Expand automation for source validation and record refresh

## Phase 3
- Increase operational tooling for review and exception handling
- Add more advanced reporting over publication trends and freshness
- Improve maintenance workflows for source changes and schema evolution

## Planning Rules
Roadmap items must be expressed as product outcomes rather than technical wish lists. Every phase should have a clear relationship to the product mission and should not require breaking the Phase 1 trust model.

## Change Rule
If a feature idea does not fit the current phase, record it here or in `docs/DECISIONS.md` rather than sneaking it into implementation scope.
