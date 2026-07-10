import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@aip-library/ui";

import type { AiracViewModel, CountryMetadata, SourceCatalogEntry } from "@/lib/metadata-data";
import type { PublicationRecord } from "@/domain/publication";

interface DashboardViewProps {
  countries: CountryMetadata[];
  sourceCatalog: SourceCatalogEntry[];
  documents: PublicationRecord[];
  airac: AiracViewModel;
}

export function DashboardView({ countries, sourceCatalog, documents, airac }: DashboardViewProps) {
  const coverage = Math.round((countries.length / Math.max(sourceCatalog.length, 1)) * 100);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Operations dashboard
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-950">
              A trusted aviation metadata platform
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              This release surfaces authoritative publication metadata for the initial rollout
              countries using the source documents as the source of truth.
            </p>
          </div>
          <Badge variant="secondary">Phase 1 foundation</Badge>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Countries in rollout</CardTitle>
            <CardDescription>
              Countries surfaced from the selected exposure sources.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">{countries.length}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Shared sources</CardTitle>
            <CardDescription>Eligible official sources in the current catalog.</CardDescription>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">{sourceCatalog.length}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active AIRAC</CardTitle>
            <CardDescription>Current cycle used across the experience.</CardDescription>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">{airac.currentAirac}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Documents tracked</CardTitle>
            <CardDescription>
              Metadata records currently discovered through the first reusable connectors.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">{documents.length}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Last synchronization</CardTitle>
            <CardDescription>Most recent metadata confirmation date.</CardDescription>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">2024-07-10</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Coverage percentage</CardTitle>
            <CardDescription>Coverage of the selected rollout source set.</CardDescription>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">{coverage}%</CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Shared Ingestion Sources</CardTitle>
          <CardDescription>
            Official source inventory imported from the source documents.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Domain</TableHead>
                <TableHead>Region</TableHead>
                <TableHead>States Covered</TableHead>
                <TableHead>Access Type</TableHead>
                <TableHead>Build Priority</TableHead>
                <TableHead>Connector Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sourceCatalog.map((entry) => (
                <TableRow key={`${entry.domain}-${entry.country}`}>
                  <TableCell>{entry.domain}</TableCell>
                  <TableCell>{entry.region}</TableCell>
                  <TableCell>{entry.statesCovered}</TableCell>
                  <TableCell>{entry.accessType}</TableCell>
                  <TableCell>High</TableCell>
                  <TableCell>{entry.connectorStatus}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
