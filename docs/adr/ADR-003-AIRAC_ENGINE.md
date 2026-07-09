# ADR-003: AIRAC Engine

Status: Accepted

Context
-------

The system needs a deterministic, standalone AIRAC cycle engine that can be reused by REST APIs, schedulers, connectors and future CLIs without depending on web or database frameworks.

Decision
--------

Create a pure TypeScript package `@aip-library/airac` that implements cycle generation, lookup, formatting and validation. The implementation is deterministic (UTC-based) and uses a fixed epoch with a 28-day cycle length. Publication lead-time is 14 days.

Consequences
------------

- The engine can be imported without side effects and has no runtime dependencies.
- Migrations or DB changes are not required for the engine.
- Consumers should treat publication lead-time and epoch as authoritative values exposed by the package.
