# 12 Git Workflow

## Branching Philosophy
Keep the workflow simple and traceable. Changes should be made on focused branches and reviewed before merging. The repository should preserve a clear link between feature intent, implementation, and documentation updates.

## Commit Standards
Commits should be small, meaningful, and coherent. A commit should capture one idea or one step in a larger idea. Avoid mixing unrelated documentation, infrastructure, and feature work in a single commit unless the change is intentionally atomic.

## Change Hygiene
- Keep the working tree understandable.
- Do not commit generated noise that is not needed.
- Do not rewrite history casually.
- Do not hide unrelated changes behind a broad commit.

## Review Standards
Every meaningful change should be reviewable. Reviewers should be able to understand why the change exists, what it affects, and what was intentionally left untouched.

## Merge Standards
Merge only when the branch has the required validation and the change is documented enough for the next engineer to understand it. If the change alters architecture or standards, update the corresponding docs in the same work.

## Documentation Sync Rule
Documentation updates are part of the change, not a postscript. If implementation affects architecture, database behavior, API contracts, or workflows, update the relevant docs before merge.
