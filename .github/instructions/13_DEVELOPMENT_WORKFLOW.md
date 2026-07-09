# 13 Development Workflow

## Workflow Objective
Every change should move from intent to implementation to validation in a disciplined sequence. The goal is to make the repository easy to work in for humans and AI agents alike.

## Expected Workflow
1. Read the relevant standards and the nearest existing code or docs.
2. Identify the smallest correct implementation surface.
3. Design the change to preserve the architecture boundaries.
4. Implement the change with minimal scope.
5. Validate the change with the narrowest meaningful check.
6. Update documentation if the behavior, structure, or policy changed.
7. Commit only after the change is understandable and validated.

## Decision Discipline
Do not guess at project behavior when the docs do not specify it. When a decision is missing, either infer only the minimum safe assumption or capture the decision explicitly in `docs/DECISIONS.md` before proceeding.

## Local Validation
Use the cheapest validation that can disprove the current implementation hypothesis first. Prefer focused tests, type checks, or targeted route checks over broad repo-wide commands until the touched surface is confirmed.

## Documentation Discipline
Living docs should be updated whenever the product or architecture meaningfully changes. Instructions are stricter than notes, and notes are stricter than memory. Keep each layer consistent with the next.

## Operational Discipline
Development, review, and release work should all preserve provenance, correctness, and rollback safety. Treat migrations, ingestion flows, and public API changes as release-sensitive work.

## Agent Discipline
AI agents must work inside the standards of this repository, not around them. If an agent needs a rule to proceed safely, that rule belongs in the docs before the agent acts on it.
