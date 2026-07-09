# 04 Folder Structure

## Repository Shape
The repository should remain organized around one application with explicit boundaries for domain, application, infrastructure, presentation, documentation, and operational concerns.

## Expected Top-Level Areas
- Application code for the Next.js app
- Domain and shared library code for business logic
- Prisma schema and persistence artifacts
- Documentation and engineering standards
- Operational scripts and deployment configuration

## Structural Rules
- Keep domain code isolated from framework-specific code.
- Keep infrastructure code isolated from UI components.
- Keep route handlers thin and delegating.
- Keep reusable components in a dedicated UI layer rather than embedded in routes.
- Keep database schema artifacts centralized and versioned.
- Keep generated output out of source control unless it is required by the chosen workflow.

## Ownership Rules
Every directory should have one obvious owner. If a directory mixes routes, database access, and domain logic, it is too broad. If a directory contains only wrappers and no meaningful code, it is too granular.

## Naming Rules
Directory names should describe architectural responsibility or business capability. Avoid vague names that hide intent. Prefer names that make it obvious whether the folder belongs to domain, application, infrastructure, or presentation concerns.

## Documentation Placement
- `.github/instructions/` contains immutable engineering operating principles.
- `docs/` contains living project documentation that can evolve as decisions are made.
- Project-specific architecture notes belong in `docs/`, not in ad hoc comments scattered through the codebase.

## Change Rule
When a new subsystem is added, update the folder structure documentation before or alongside the first implementation so the repository remains navigable. Architecture should be documented as it is formed, not reverse-engineered after it has spread.
