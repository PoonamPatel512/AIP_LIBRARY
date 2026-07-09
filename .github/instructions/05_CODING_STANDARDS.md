# 05 Coding Standards

## General Standard
Code must be explicit, readable, and stable under change. The codebase is optimized for long-term maintainability, not for cleverness or terse implementations.

## TypeScript Standards
- Prefer exact types over broad types.
- Prefer inferred types when the inferred name is self-evident and readable.
- Avoid `any`.
- Avoid type assertions unless the boundary is genuinely untyped and the assertion is validated.
- Model nullable and optional values deliberately.
- Use discriminated unions when behavior depends on a known set of variants.

## Naming Standards
- Use descriptive names that communicate domain intent.
- Use nouns for entities and value objects.
- Use verbs for use cases and commands.
- Use consistent suffixes for infrastructure adapters, repositories, and mappers when those roles are present.
- Avoid abbreviations unless they are standard aviation or database terminology already understood in the project.

## Function Standards
- Keep functions small and single-purpose.
- Prefer pure functions for transformation logic.
- Separate validation from mutation where practical.
- Avoid hidden side effects.
- Return explicit results rather than relying on ambient state.

## Error Handling Standards
- Fail fast on invalid input.
- Preserve the original cause when rethrowing errors.
- Convert technical errors into domain-appropriate responses at the application boundary.
- Never swallow errors silently.
- Represent expected failure modes explicitly instead of using exceptions for ordinary control flow.

## Formatting And Readability
Formatting should be consistent enough that code review focuses on meaning rather than style. Use the repository's formatter and linter as the final authority on mechanical style. Do not introduce ad hoc local formatting conventions.

## Boundary Hygiene
- Domain code must not import framework APIs.
- UI code must not directly query the database.
- Route handlers must not contain business rules.
- Infrastructure adapters must not mutate domain semantics.

## Commenting Standards
Comments should explain intent, constraints, or non-obvious decisions. Do not comment obvious syntax. If code requires a long comment to be understandable, the design likely needs simplification.

## Refactoring Standard
When touching existing code, preserve behavior unless the change is explicitly intended to alter behavior. Refactor with a clear reason, and keep refactors scoped to the smallest meaningful surface.
