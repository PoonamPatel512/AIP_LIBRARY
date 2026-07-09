# API

## API Purpose
The API exposes trusted aviation metadata to the frontend and to any future integrations. It must present a stable contract that reflects the product's provenance-first model.

## Contract Principles
- Route handlers are thin and delegate to application use cases
- Input is validated at the boundary
- Output is structured, explicit, and stable
- Errors are predictable and do not leak internals
- API behavior mirrors the documented product scope

## Resource Model
The API should represent aviation publications, source records, provenance details, and synchronization state in a way that maps cleanly to the underlying domain. The API must not collapse meaningful distinctions into a generic blob of metadata.

## Read Behavior
Read endpoints should support deterministic lookup, filtering, and pagination. Responses should make current state and historical state distinguishable when that distinction matters.

## Write Behavior
Mutation endpoints, when introduced, must be narrow and explicit. They should validate privilege, preserve provenance, and avoid destructive operations that erase history or source traceability.

## Response Semantics
- Use clear status codes
- Return stable response structures
- Distinguish validation errors from missing data and internal failures
- Keep error payloads suitable for both human debugging and machine handling

## Versioning And Stability
The API should evolve conservatively. Prefer additive changes and carefully documented transitions over breakage. Any route contract change must be reflected in the living docs before rollout.
