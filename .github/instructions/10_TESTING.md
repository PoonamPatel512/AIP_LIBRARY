# 10 Testing

## Testing Purpose
Tests protect domain behavior, contract stability, data integrity, and release confidence. A test suite is not a formality; it is the executable definition of expected behavior.

## Testing Strategy
Use a layered testing strategy:
- Unit tests for pure domain rules and deterministic transformations
- Integration tests for database access and route-handler behavior
- End-to-end tests for user journeys that cross presentation and server boundaries
- Regression tests for previously observed defects and edge cases

## Domain Testing Standards
Domain behavior must be covered directly and without framework dependencies. Invariants, classification rules, normalization logic, and state transitions should be testable in isolation.

## Application Testing Standards
Use application-level tests to verify orchestration, validation, repository interaction, and failure handling. These tests should prove that the use case does the right thing when collaborators succeed or fail.

## Infrastructure Testing Standards
Database mappings, source translators, and persistence adapters require tests that catch schema drift, malformed records, and unexpected external payloads.

## API Testing Standards
Route handlers should be exercised for validation, status codes, response shapes, and authorization behavior. Do not rely only on happy-path tests.

## UI Testing Standards
UI tests should cover critical rendering states, accessibility-sensitive behavior, and user flows where the interface translates important metadata or provenance information.

## Test Data Standards
Use deterministic fixtures that reflect the domain without inventing imaginary product behavior. Test data should be minimal, explicit, and reusable.

## Regression Discipline
Any bug that reaches implementation should receive a test that would have caught it. If a defect cannot be expressed as a test, the underlying behavior is probably still too ambiguous.

## Quality Gate
A change is not ready unless the relevant tests pass and the test coverage added by the change is proportionate to its risk. The goal is not maximum test count; the goal is maximum confidence per unit of effort.
