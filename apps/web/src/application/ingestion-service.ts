import type { ConnectorDefinition, PublicationRecord } from "@/domain/publication";
import {
  classifyDocumentType,
  normalizeAiracCycle,
  parsePublicationDate,
  resolvePublicationStatus,
} from "@/infrastructure/connector-utils";

export interface IngestionResult {
  connectorName: string;
  country: string;
  records: PublicationRecord[];
}

export class PublicationIngestionService {
  async ingest(
    connector: ConnectorDefinition,
    html: string,
    discoveredAt: string,
  ): Promise<IngestionResult> {
    const normalizedHtml = html.trim();
    const records = this.parseHtml(connector, normalizedHtml, discoveredAt);

    return {
      connectorName: connector.name,
      country: connector.country,
      records,
    };
  }

  private parseHtml(
    connector: ConnectorDefinition,
    html: string,
    discoveredAt: string,
  ): PublicationRecord[] {
    const excerpts = html
      .split(/<[^>]+>/)
      .map((part) =>
        part
          .replace(/&nbsp;|&amp;/g, " ")
          .replace(/\s+/g, " ")
          .trim(),
      )
      .filter(Boolean);

    const records: PublicationRecord[] = [];

    for (const excerpt of excerpts) {
      if (!/(AIP|SUP|AIC|AMDT|Chart|Charts|publication|effective)/i.test(excerpt)) {
        continue;
      }

      const matchedType = classifyDocumentType(excerpt);
      const documentNumber = this.extractDocumentNumber(excerpt);
      const title = this.extractTitle(excerpt);
      const publicationDate = parsePublicationDate(excerpt);
      const effectiveDate = this.extractEffectiveDate(excerpt);
      const airacCycle = normalizeAiracCycle(excerpt, publicationDate);

      if (!documentNumber && !title) {
        continue;
      }

      records.push({
        id: `${connector.country.toLowerCase().replace(/\s+/g, "-")}-${records.length + 1}`,
        documentType: matchedType,
        documentNumber,
        title,
        publicationDate,
        effectiveDate,
        airacCycle,
        sourceUrl: connector.baseUrl,
        country: connector.country,
        icaoPrefix: connector.icaoPrefix,
        connectorName: connector.name,
        discoveredAt,
        status: resolvePublicationStatus(excerpt),
      });
    }

    return records;
  }

  private extractDocumentNumber(text: string): string {
    const match = text.match(/([A-Z]{1,5}\s*\d{1,4}(?:\/\d{2,4})?)/i);
    return match?.[1]?.trim() ?? "N/A";
  }

  private extractTitle(text: string): string {
    const normalized = text.replace(/\s+/g, " ").trim();
    if (/AIP Supplement/i.test(normalized)) return "AIP Supplement";
    if (/AIC/i.test(normalized)) return "AIC";
    if (/AMDT/i.test(normalized)) return "AIP Amendment";
    if (/Chart/i.test(normalized)) return "Charts";
    return normalized.slice(0, 80);
  }

  private extractEffectiveDate(text: string): string {
    const match = text.match(/(\d{4}-\d{2}-\d{2})/);
    return match?.[1] ?? "TBD";
  }
}
