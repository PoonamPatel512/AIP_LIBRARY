# Decisions

## Decision Log Purpose
This file records durable architectural and product decisions that are important enough to survive beyond a single implementation session. It is the place for resolved tradeoffs, not brainstorming.

## Recording Standard
Each decision entry should capture the decision, the reason it was chosen, and the implications that matter to future work. Record decisions when they affect architecture, schema design, API contracts, security, workflow, or product scope.

## Current Decisions

### 1. Phase 1 Is Metadata Only
AIP Library will not host publication documents in Phase 1.

Reason: The business value in this phase is authoritative metadata, provenance, and official links. Hosting documents adds operational, legal, and security complexity that is unnecessary for the initial product.

Implication: All storage, UI, and API work must assume that documents remain external and that official links are the only document reference.

### 2. Clean Architecture And DDD Are Mandatory
The repository will use Clean Architecture with Domain-Driven Design as the structural model for implementation.

Reason: The domain is information-rich, provenance-sensitive, and likely to grow across jurisdictions and publication types. Strong boundaries preserve maintainability and testability.

Implication: Domain code stays framework-free, and route handlers or infrastructure adapters do not own business rules.

### 3. Next.js Route Handlers Are The Backend Surface
Server interaction will be exposed through Next.js Route Handlers rather than a separate backend framework.

Reason: The product is intentionally a single application and should not carry unnecessary service split complexity in Phase 1.

Implication: API contracts must remain thin, explicit, and aligned with the application use-case layer.

### 4. PostgreSQL And Prisma Form The Persistence Contract
Persistent state will live in PostgreSQL and be managed through Prisma.

Reason: The product needs a reliable relational model with strong schema evolution and clear application-level access patterns.

Implication: Schema changes and migrations are product decisions, not incidental implementation details.

## Future Decision Rule
When a new decision is made, append it here in a stable, reviewable form. Do not overwrite the historical record unless the prior decision is being explicitly superseded.
