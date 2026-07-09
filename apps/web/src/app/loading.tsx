export default function Loading() {
  return (
    <div className="min-h-screen bg-background px-6 py-12 text-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <div className="h-8 w-40 animate-pulse rounded-full bg-muted" />
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="h-[22rem] animate-pulse rounded-3xl border border-border/60 bg-card/60" />
          <div className="h-[22rem] animate-pulse rounded-3xl border border-border/60 bg-card/60" />
        </div>
      </div>
    </div>
  );
}
