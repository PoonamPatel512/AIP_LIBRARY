# 07 API Standards

## API Model
Next.js Route Handlers define the public server contract. Each handler is part of the product surface and must be stable, predictable, and narrowly scoped.

## Design Principles
- Keep handlers thin.
- Move business logic into application use cases.
- Validate all external input at the boundary.
- Return structured responses with consistent status semantics.
- Prefer simple, explicit resources over overloaded endpoints.

## Request Standards
- Treat all input as untrusted.
- Validate path parameters, query parameters, headers, and bodies separately where needed.
- Reject ambiguous requests rather than guessing intent.
- Preserve request correlation information for observability where possible.

## Response Standards
- Use clear status codes that reflect the actual outcome.
- Return machine-readable structures that are stable across versions.
- Distinguish validation failure, authorization failure, absence of data, and internal errors.
- Do not leak internal implementation details in public error responses.

## Contract Stability
API shapes should evolve conservatively. Once a response shape is used by the frontend or an integration, changing it requires a deliberate compatibility review. Additive changes are preferred over breaking changes.

## Error Semantics
User-caused errors must be expressed distinctly from system failures. A client should be able to determine whether a request is retryable, fixable, or invalid without inspecting server logs.

## Pagination And Filtering
List endpoints must support deterministic pagination and stable filtering semantics. Query parameters should be documented, validated, and consistent across comparable resources.

## Authentication And Authorization
If a route requires protection, the authorization rule should be explicit in the handler contract and enforced before business logic executes. Public read routes and protected mutation routes must not be confused.

## Caching And Revalidation
Caching rules should be intentional and documented per route. Freshness-sensitive aviation metadata should not be cached in ways that hide updates or provenance changes.

## API Review Rule
Before adding a new route, verify that the behavior cannot be served by an existing route, shared application use case, or server-rendered page. The public API surface must remain minimal and purposeful.
