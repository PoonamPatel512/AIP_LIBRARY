import {
  buildAiracViewModelFromSelection,
  buildCountryMetadata,
  parseAipLinksCsv,
} from "@/lib/metadata-data";
import { generateCycles } from "@aip-library/airac";
import fs from "node:fs";
import path from "node:path";

import { CountriesView } from "@/components/countries-view";
import { resolveRepositoryRoot } from "@/lib/repository-root";

type SearchParams =
  | Promise<Record<string, string | string[] | undefined>>
  | Record<string, string | string[] | undefined>;

export default async function CountriesPage({ searchParams }: { searchParams?: SearchParams }) {
  const resolvedSearchParams = await Promise.resolve(searchParams ?? {});
  const repositoryRoot = resolveRepositoryRoot();
  const csvPath = path.join(repositoryRoot, "docs/source/aip-links/DS_AIP Library.csv");
  const csv = fs.readFileSync(csvPath, "utf8");
  const rows = parseAipLinksCsv(csv);
  const airacCycles = generateCycles(13, 0);
  const airac = buildAiracViewModelFromSelection(resolvedSearchParams, airacCycles);
  const countries = buildCountryMetadata(rows, airac.currentAirac);

  return <CountriesView countries={countries} />;
}
