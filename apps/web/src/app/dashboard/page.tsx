import {
  buildAiracViewModelFromSelection,
  buildCountryMetadata,
  buildSourceCatalogFromRows,
  parseAipLinksCsv,
} from "@/lib/metadata-data";
import { generateCycles } from "@aip-library/airac";
import fs from "node:fs";
import path from "node:path";

import { DashboardView } from "@/components/dashboard-view";
import { resolveRepositoryRoot } from "@/lib/repository-root";
import { loadPublicationRecords } from "@/lib/ingestion-data";

type SearchParams =
  | Promise<Record<string, string | string[] | undefined>>
  | Record<string, string | string[] | undefined>;

export default async function DashboardPage({ searchParams }: { searchParams?: SearchParams }) {
  const resolvedSearchParams = await Promise.resolve(searchParams ?? {});
  const repositoryRoot = resolveRepositoryRoot();
  const csvPath = path.join(repositoryRoot, "docs/source/aip-links/DS_AIP Library.csv");
  const csv = fs.readFileSync(csvPath, "utf8");
  const rows = parseAipLinksCsv(csv);
  const sourceCatalog = buildSourceCatalogFromRows(rows);
  const airacCycles = generateCycles(13, 0);
  const airac = buildAiracViewModelFromSelection(resolvedSearchParams, airacCycles);
  const countries = buildCountryMetadata(rows, airac.currentAirac);
  const documents = await loadPublicationRecords();

  return (
    <DashboardView
      countries={countries}
      sourceCatalog={sourceCatalog}
      documents={documents}
      airac={airac}
    />
  );
}
