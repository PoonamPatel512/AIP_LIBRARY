# 11 Performance

## Performance Goal
The application must remain responsive for browsing, searching, and inspecting aviation metadata at scale. Performance matters because the product is read-heavy and provenance-heavy, not because it must optimize for exotic workloads.

## Performance Principles
- Prefer efficient data models over expensive runtime transformation.
- Fetch only the data required for the current view or use case.
- Avoid unnecessary client-side state when server-rendered data is sufficient.
- Keep route handlers and queries predictable.
- Optimize based on measured bottlenecks, not assumptions.

## Database Performance
- Index for real query patterns.
- Keep queries selective and stable.
- Avoid broad scans where a targeted lookup is possible.
- Be careful with joins that multiply rows or hide latency.

## Rendering Performance
- Use server rendering where it improves time to meaningful content.
- Keep client components focused on interaction, not data orchestration.
- Avoid excessive re-renders in metadata-heavy views.
- Preserve fast navigation and fast record inspection.

## Data Fetching Performance
Batch when it is safe and useful. Avoid waterfall fetches when a single orchestration layer can assemble the required view. Prefer predictable request shapes over ad hoc chaining.

## Ingestion Performance
External source ingestion should be resilient and resumable. Long-running ingestion work should not block user-facing requests. The system should be able to process repeated syncs without corrupting history.

## Observability For Performance
Performance work must be measurable. If a route, query, or render path is slow, add the instrumentation or test coverage needed to prove the improvement and prevent regression.

## Optimization Rule
Do not optimize a path that is not on a proven critical path. When optimization is required, choose the simplest improvement that materially addresses the bottleneck and preserves readability.
