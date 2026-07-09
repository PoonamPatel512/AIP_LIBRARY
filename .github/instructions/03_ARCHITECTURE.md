# 03 Architecture

## Architectural Style
AIP Library uses Clean Architecture and Domain-Driven Design. The architecture must preserve a strict separation between domain rules, application orchestration, infrastructure concerns, and presentation concerns.

## Layer Responsibilities

### Domain Layer
The domain layer contains the aviation publication model, invariants, value objects, entity behavior, domain events, and domain policies. It must not depend on Next.js, Prisma, HTTP, or UI concepts.

### Application Layer
The application layer orchestrates use cases. It coordinates repositories, transactions, validation, and response shaping without embedding persistence details or presentation logic.

### Infrastructure Layer
The infrastructure layer implements database access, external source integration, cache adapters, and other technology-specific concerns. It translates external data into domain-safe structures.

### Presentation Layer
The presentation layer contains Next.js routes, route handlers, server components, client components, form handling, and request/response translation. It must never contain domain rules that belong elsewhere.

## Dependency Rule
Dependencies point inward. Outer layers may depend on inner layers, but not the other way around. Domain logic must remain stable even if the database, route structure, or host platform changes.

## Bounded Context Mindset
The core bounded context is aviation publication metadata. Within that context, model distinctions explicitly: issuer, jurisdiction, publication series, cycle, issue, amendment, supplement, circular, source reference, and synchronization state. Do not flatten these concepts into generic records unless a deliberate design decision proves that no domain information is lost.

## Source Of Truth Policy
Official AIS sources are authoritative for metadata provenance. Internal storage is a projection of those sources, not an independent authority. Internal records must preserve the origin, capture time, and validation state of each field that depends on external data.

## Aggregation Policy
Aggregate boundaries must be chosen to protect invariants and keep writes intentional. A write operation should change one conceptual concern at a time. Avoid aggregates so large that they become fragile or so small that they cannot enforce consistency.

## Consistency Policy
Use strong consistency where provenance or current publication state matters. Accept eventual consistency only when the user-facing behavior is explicitly tolerant of freshness lag and the lag is observable.

## Integration Policy
External source ingestion must be isolated from request handling. Route handlers should not directly perform long-running or brittle ingestion workflows. Ingestion code must be resumable, observable, and safe to retry.

## Architecture Review Test
Before implementing any feature, verify that each proposed file belongs in the correct layer and that no file crosses more than one responsibility. If a file is doing domain work, persistence translation, and HTTP shaping at the same time, the design is wrong.
