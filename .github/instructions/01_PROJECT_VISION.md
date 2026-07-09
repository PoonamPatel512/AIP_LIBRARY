# 01 Project Vision

## Mission
AIP Library is a global aviation metadata platform that standardizes and surfaces official aeronautical publication metadata from authoritative AIS sources. The platform helps users understand what changed, when it changed, where the publication originated, and where the official source can be verified.

## Phase 1 Goal
Phase 1 establishes the trusted metadata layer. The product captures publication identity, cycle information, amendment history, supplement records, AIC references, jurisdiction, issuer, effective dates, publication dates, source links, and provenance metadata. It does not store or serve the underlying documents.

## Core User Value
The product exists to reduce the friction of finding authoritative publication status across many national AIS sources. It must support discovery, verification, and historical tracking without weakening the trust chain back to official sources.

## Product Principles
- Treat official sources as the only source of truth for publication metadata.
- Preserve traceability from every stored record to the originating source.
- Prefer normalized, searchable metadata over duplicated content.
- Design for multi-jurisdiction coverage from the beginning.
- Keep the user experience fast and legible even when source data is sparse or inconsistent.
- Make provenance visible wherever a record is displayed.

## Explicit Out Of Scope For Phase 1
- Document hosting or file mirrors
- OCR pipelines
- Full-text document search over hosted content
- User-generated publication uploads
- Collaborative editing of source records
- Aviation operational decision support
- Anything that implies legal, navigational, or operational authority beyond metadata presentation

## Success Criteria
The product succeeds when a user can reliably answer the following questions from metadata alone:
- What publication exists for a given authority, cycle, or title?
- What is the latest official state of that publication?
- What changed since the previous cycle or issue?
- Where is the authoritative source link?
- When was the metadata last confirmed?
- Which records require revalidation because the source changed or disappeared?

## Product Behavior Expectations
The platform must be deterministic about what it knows and equally explicit about what it does not know. Unknown or unverified metadata must remain visibly distinct from confirmed official metadata. Historical records must never be overwritten in a way that destroys provenance.

## Audience
The product serves aviation data professionals, operations teams, and engineering systems that need reliable publication metadata. The documentation must therefore emphasize precision, auditability, and lifecycle management rather than marketing language.
