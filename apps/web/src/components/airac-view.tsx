import { Badge, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@aip-library/ui";

import type { AiracViewModel } from "@/lib/metadata-data";

interface AiracViewProps {
  airac: AiracViewModel;
}

export function AiracView({ airac }: AiracViewProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">AIRAC</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">Global cycle navigator</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Current AIRAC</CardTitle>
            <CardDescription>Currently active worldwide publication cycle.</CardDescription>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">{airac.currentAirac}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Previous AIRAC</CardTitle>
            <CardDescription>Previous retained cycle for reference.</CardDescription>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">{airac.previousAirac}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Next AIRAC</CardTitle>
            <CardDescription>Upcoming cycle for planning and tracking.</CardDescription>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">{airac.nextAirac}</CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Retention policy</CardTitle>
          <CardDescription>
            Current policy retains the active and previous cycle while removing older records.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center gap-3">
          <Badge>Current + Previous</Badge>
          <span className="text-sm text-slate-600">
            Retain a configurable lookback window, with older cycles automatically removed.
          </span>
        </CardContent>
      </Card>
    </div>
  );
}
