# Database

## Database Role
PostgreSQL is the system of record for normalized aviation publication metadata, provenance, and synchronization state. The database must support the trust model of the product, not merely store rows.

## Modeling Objectives
- Preserve official source identity and source links
- Track publication series and publication type explicitly
- Store current and historical metadata without destroying provenance
- Support verification timestamps and freshness tracking
- Allow efficient filtering by jurisdiction, authority, series, and cycle-related fields

## Schema Design Principles
- Use relational structure for strongly identified concepts
- Use unique constraints where a real-world identifier must not duplicate
- Separate canonical records from source observations when that distinction protects history
- Keep temporal fields explicit and named for their meaning
- Avoid denormalization that weakens provenance or consistency

## Migration Practice
Schema changes must be deliberate and reviewed. Every migration should preserve the ability to explain how the data model changed and what happens to existing rows.

## Data Integrity Practice
The database should reject impossible states where practical. Application logic should not be the only line of defense for uniqueness, foreign-key validity, or essential constraints.

## Operational Notes
- Use Prisma as the application contract over the database
- Keep schema changes synchronized with docs and validation
- Protect historical records from accidental overwrite
- Plan for future ingestion and reconciliation without redesigning the core model
