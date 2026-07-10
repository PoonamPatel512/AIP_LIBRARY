import { NextResponse } from "next/server";
import { PublicationIngestionService } from "@/application/ingestion-service";
import { officialConnectors } from "@/infrastructure/official-connectors";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export async function POST() {
  const ingestionService = new PublicationIngestionService();
  const discoveredAt = new Date().toISOString();
  const payload = [] as Array<{ connectorName: string; country: string; records: number }>;

  for (const connector of officialConnectors) {
    const htmlPath = join(
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
      html = readFileSync(htmlPath, "utf8");
    } catch {
      html = `<html><body>Official publication metadata for ${connector.country} is currently unavailable through the public endpoint. Source: ${connector.baseUrl}</body></html>`;
    }

    const result = await ingestionService.ingest(connector, html, discoveredAt);
    payload.push({
      connectorName: result.connectorName,
      country: result.country,
      records: result.records.length,
    });
  }

  return NextResponse.json({ ok: true, discoveredAt, payload });
}
