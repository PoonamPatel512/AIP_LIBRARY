import type { AiracAssignment, ConnectorResult, PublicationMetadata } from "./types";

export function createPublicationMetadata(
  input: Partial<PublicationMetadata> &
    Pick<PublicationMetadata, "id" | "sourceId" | "title" | "countryCode">,
): PublicationMetadata {
  return {
    id: input.id,
    sourceId: input.sourceId,
    title: input.title,
    countryCode: input.countryCode,
    region: input.region,
    publicationDate: input.publicationDate,
    effectiveDate: input.effectiveDate,
    documentUrl: input.documentUrl,
    sourceUrl: input.sourceUrl,
    airacCycle: input.airacCycle,
    notes: input.notes ?? [],
    tags: input.tags ?? [],
  };
}

export function createConnectorResult(
  input: Partial<ConnectorResult> & Pick<ConnectorResult, "status">,
): ConnectorResult {
  return {
    status: input.status,
    publication: input.publication,
    error: input.error,
    metadata: input.metadata,
  };
}

export function createAiracAssignment(input: AiracAssignment): AiracAssignment {
  return {
    publicationId: input.publicationId,
    cycle: input.cycle,
    source: input.source,
  };
}
