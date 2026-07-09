# 09 Security

## Security Goal
Protect the integrity, availability, and provenance of aviation metadata. Security in this repository is primarily about preventing data corruption, unauthorized mutation, accidental disclosure, and unsafe trust in external inputs.

## Threat Model
The main risks are malformed source data, hostile or broken external sources, injection into queries or rendered output, accidental exposure of environment secrets, and unauthorized changes to records or administrative workflows.

## Input Security
- Treat every external input as untrusted.
- Validate and normalize before use.
- Reject unexpected structure, length, or format.
- Never pass raw user input into persistence or dynamic code paths without validation.

## Secrets And Credentials
- Keep secrets out of source control.
- Use environment variables and deployment secrets for credentials.
- Do not log sensitive values.
- Minimize credential scope to only the systems that need them.

## Data Protection
- Avoid storing information that is not required for Phase 1.
- Preserve provenance without exposing unnecessary internals.
- Protect mutation endpoints and operational tools with explicit authorization.
- Limit who can write or backfill authoritative metadata.

## External Source Security
External AIS sources can be incomplete, inconsistent, or temporarily unavailable. Treat them as data dependencies, not trusted application peers. Sanitize source content before persistence and never execute source-provided content.

## Web Security
- Escape or otherwise safely render all user-visible content.
- Prevent cross-site scripting through disciplined rendering and sanitization.
- Use safe defaults for headers, cookies, and redirects.
- Avoid open redirects and unsafe URL construction.

## Database Security
- Use least-privilege database access.
- Protect administrative operations from casual access.
- Review schema changes and destructive actions carefully.
- Keep backup and restore procedures aligned with production risk.

## Operational Security
Deployment logs, error reporting, and monitoring must not become a leak path for secrets or sensitive source details. Access to production operations should be deliberate and auditable.

## Security Review Rule
No feature is complete until its trust boundaries are clear. If a change introduces a new external input, write path, or privileged action, the security impact must be explicit before merge.
