# Product Requirements

## Product Summary

AIP Library is an AIP Publication Intelligence Platform. It serves users who need to understand what official aviation publications became effective for a country during a given AIRAC cycle, without hosting the source documents themselves.

## Functional Requirements

### Publication Intelligence Workflow

The platform must support a primary workflow of Region → Country → AIRAC Cycle → Official Publications.

### AIRAC-Aware Publication Views

Every country page must display:

- Current AIRAC
- Two previous AIRAC cycles
- Two future AIRAC cycles

The selected cycle must determine which publications are shown as effective for that country.

### Metadata Tracking

The platform must store and present metadata for official publications, including:

- Document Type
- Document Number
- Publication Date
- Effective Date
- AIRAC Cycle
- Official Source URL
- Discovery Timestamp
- Connector
- Status

### Provenance Tracking

Every stored record must retain source identity, source link, capture time, and validation state so the system can explain where the data came from and when it was last confirmed.

### Historical Visibility

The platform must preserve enough history to show how publication metadata changed over time. Current state and prior state must be distinguishable.

### Discovery

Users must be able to find publications by jurisdiction, authority, publication type, cycle, issue, or source identity as the product expands.

### Official Link Access

The product must present official source links prominently and preserve them as the authoritative reference for each record.

## Data Requirements

- No hosted documents
- No silent overwriting of provenance
- No ambiguous representation of unknown or unverified data
- No loss of authority, jurisdiction, or AIRAC context
- Publication metadata must remain tied to the AIRAC cycle in which it became effective

## Quality Requirements

- Data must be traceable back to official sources
- Changes must be explainable in a human-readable way
- The system must tolerate inconsistent upstream sources without corrupting stored history
- The UI must clearly distinguish confirmed, pending, and unverified metadata
- The product must make the relationship between country and effective AIRAC publication list explicit

## Operational Requirements

- The application must be deployable on Render
- The database must be PostgreSQL
- The code must remain maintainable within a single application repository
- The architecture must support future ingestion expansion without requiring a rewrite

## Phase 1 Acceptance Criteria

Phase 1 is complete when official publication metadata can be stored, queried, displayed, and reconciled by country and AIRAC cycle, with official links and provenance preserved end to end.
