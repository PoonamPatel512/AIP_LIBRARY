# Product Requirements

## Product Summary
AIP Library provides a trusted metadata index for aviation publications. It serves users who need authoritative publication status, change history, and official links without hosting the source documents themselves.

## Functional Requirements

### Metadata Tracking
The platform must store and present publication metadata for AIRAC cycles, AIP amendments, supplements, AICs, and related official publication records.

### Provenance Tracking
Every stored record must retain source identity, source link, capture time, and validation state so the system can explain where the data came from and when it was last confirmed.

### Historical Visibility
The platform must preserve enough history to show how publication metadata changed over time. Current state and prior state must be distinguishable.

### Discovery
Users must be able to find publications by jurisdiction, authority, series, publication type, cycle, issue, or source identity as the product expands.

### Official Link Access
The product must present official source links prominently and preserve them as the authoritative reference for each record.

## Data Requirements
- No hosted documents
- No silent overwriting of provenance
- No ambiguous representation of unknown or unverified data
- No loss of authority or jurisdiction context

## Quality Requirements
- Data must be traceable back to official sources
- Changes must be explainable in a human-readable way
- The system must tolerate inconsistent upstream sources without corrupting stored history
- The UI must clearly distinguish confirmed, pending, and unverified metadata

## Operational Requirements
- The application must be deployable on Render
- The database must be PostgreSQL
- The code must remain maintainable within a single application repository
- The architecture must support future ingestion expansion without requiring a rewrite

## Phase 1 Acceptance Criteria
Phase 1 is complete when metadata for targeted publication types can be stored, queried, displayed, and reconciled with official links and provenance preserved end to end.
