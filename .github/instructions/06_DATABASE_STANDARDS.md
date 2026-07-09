# 06 Database Standards

## Database Philosophy
PostgreSQL is the durable system of record for normalized aviation metadata. The schema must support provenance, historical tracking, queryability, and future scale without relying on undocumented behavior.

## Prisma Policy
Prisma is the application-level database contract. Schema definitions, migrations, and generated client usage must remain aligned. No direct SQL bypasses the documented persistence layer unless a deliberate technical decision requires it and the decision is recorded.

## Modeling Standards
- Model aviation concepts explicitly instead of flattening them into generic metadata rows.
- Preserve source provenance at the record and field level where relevant.
- Represent time using explicit temporal semantics.
- Model current state and historical state intentionally.
- Separate official source identity from the publication artifact itself.

## Migration Standards
- Schema changes must be reviewed as application design changes, not as mechanical maintenance.
- Migrations should be small, reversible where practical, and easy to reason about.
- Avoid destructive schema changes unless the product requirement is clear and the data impact is understood.
- Backfill or transition logic must be documented when a migration changes meaning, not just shape.

## Indexing Standards
Indexes must reflect actual access patterns. Add an index because a query needs it, not because a table exists. Every index should have a readable reason tied to a route, use case, or background process.

## Data Integrity Standards
- Use constraints to protect invariants that the application should not be trusted to enforce alone.
- Prefer database-enforced uniqueness for identifiers that must not duplicate.
- Avoid silent duplication of official source records.
- Track ingestion and validation timestamps where freshness matters.

## Historical Data Standards
Historical records must remain reconstructable. If a source changes a publication, the system should retain enough metadata to explain what was observed previously and when it changed.

## Query Standards
Queries should be shaped around read models that match product behavior. Avoid over-fetching. Avoid hidden N+1 patterns. Prefer predictable, indexed filters and stable sort orders.

## Operational Standards
Database access must be observable, reviewable, and safe to run in production. Schema and migration changes should be treated as release-affecting work and validated accordingly.
