# 15 Definition Of Done

## A Change Is Done When
- The implementation matches the documented requirement.
- The architecture boundaries remain intact.
- The relevant tests or checks pass.
- The change is understandable to a senior engineer reading the code and docs.
- The docs are updated if the change affects behavior, structure, or policy.
- The code does not introduce obvious security, correctness, or performance regressions.

## Documentation Done Means
- The operating rules remain accurate.
- The living docs describe the current product and project state.
- The repository contains enough information for a new engineer to contribute safely.

## Release Done Means
- The change is validated.
- The deployment impact is understood.
- The rollback story is clear.
- Any migration or operational consequence is documented.

## Final Acceptance Rule
If a change works but violates architecture, provenance, security, or maintainability standards, it is not done.
