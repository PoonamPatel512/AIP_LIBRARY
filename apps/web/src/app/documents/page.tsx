import { buildAiracViewModelFromSelection } from "@/lib/metadata-data";
import { generateCycles } from "@aip-library/airac";

import { DocumentsView } from "@/components/documents-view";
import { loadPublicationRecords } from "@/lib/ingestion-data";

type SearchParams =
  | Promise<Record<string, string | string[] | undefined>>
  | Record<string, string | string[] | undefined>;

export default async function DocumentsPage({ searchParams }: { searchParams?: SearchParams }) {
  const resolvedSearchParams = await Promise.resolve(searchParams ?? {});
  const airacCycles = generateCycles(13, 0);
  const airac = buildAiracViewModelFromSelection(resolvedSearchParams, airacCycles);
  const documents = await loadPublicationRecords();

  return <DocumentsView documents={documents} />;
}
