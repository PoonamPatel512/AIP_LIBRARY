import { buildAiracViewModelFromSelection } from "@/lib/metadata-data";
import { generateCycles } from "@aip-library/airac";

import { AiracView } from "@/components/airac-view";

type SearchParams =
  | Promise<Record<string, string | string[] | undefined>>
  | Record<string, string | string[] | undefined>;

export default async function AiracPage({ searchParams }: { searchParams?: SearchParams }) {
  const resolvedSearchParams = await Promise.resolve(searchParams ?? {});
  const airacCycles = generateCycles(13, 0);
  const airac = buildAiracViewModelFromSelection(resolvedSearchParams, airacCycles);

  return <AiracView airac={airac} />;
}
