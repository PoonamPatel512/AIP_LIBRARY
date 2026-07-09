"use client";

import { Button } from "@aip-library/ui";

export default function Error({ error, reset }: Readonly<{ error: Error; reset: () => void }>) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-16 text-foreground">
      <div className="max-w-xl rounded-3xl border border-border/60 bg-card/80 p-8 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.55)] backdrop-blur">
        <p className="text-sm font-medium uppercase tracking-[0.32em] text-muted-foreground">
          Application error
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          The page could not be rendered.
        </h1>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          The application encountered an unexpected error while rendering this route.
        </p>
        <p className="mt-4 rounded-2xl border border-border/70 bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
          {error.message}
        </p>
        <div className="mt-6 flex gap-3">
          <Button onClick={reset}>Retry</Button>
        </div>
      </div>
    </div>
  );
}
