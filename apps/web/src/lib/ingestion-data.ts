import { PublicationIngestionService } from "@/application/ingestion-service";
import type { PublicationRecord } from "@/domain/publication";
import { officialConnectors } from "@/infrastructure/official-connectors";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export async function loadPublicationRecords(): Promise<PublicationRecord[]> {
  const service = new PublicationIngestionService();
  const discoveredAt = new Date().toISOString();
  const records: PublicationRecord[] = [];

  for (const connector of officialConnectors) {
    const fixturePath = join(
      process.cwd(),
      "apps",
      "web",
      "src",
      "lib",
      "fixtures",
      `${connector.country.toLowerCase().replace(/\s+/g, "-")}.html`,
    );
    let html = "";

    try {
      html = readFileSync(fixturePath, "utf8");
    } catch {
      continue;
    }

    const result = await service.ingest(connector, html, discoveredAt);
    records.push(...result.records);
  }

  return records;
}
