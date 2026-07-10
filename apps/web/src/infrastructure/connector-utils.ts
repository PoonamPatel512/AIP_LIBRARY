export type ConnectorDocumentType =
  "AIP" | "AIP Amendment" | "AIP Supplement" | "AIC" | "Charts" | "Other";

export function classifyDocumentType(text: string): ConnectorDocumentType {
  if (/AIP Supplement/i.test(text)) return "AIP Supplement";
  if (/AIC/i.test(text)) return "AIC";
  if (/AMDT/i.test(text)) return "AIP Amendment";
  if (/Chart/i.test(text)) return "Charts";
  if (/AIP/i.test(text)) return "AIP";
  return "Other";
}

export function parsePublicationDate(text: string): string {
  const match = text.match(/(\d{4})[^\d]*(\d{2})[^\d]*(\d{2})/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }

  return "TBD";
}

export function normalizeAiracCycle(text: string, publicationDate: string): string {
  const cycleMatch = text.match(/(\d{4})[^\d]*(\d{2})/);
  if (cycleMatch) {
    return `${cycleMatch[1]}-${cycleMatch[2]}`;
  }

  if (publicationDate !== "TBD") {
    const [year, month] = publicationDate.split("-");
    return `${year}-${month}`;
  }

  return "2024-08";
}

export function resolvePublicationStatus(text: string): "ACTIVE" | "PENDING" | "REVIEW" {
  if (/effective/i.test(text)) return "ACTIVE";
  if (/pending/i.test(text)) return "PENDING";
  return "REVIEW";
}

export function createConnectorDefinition(
  name: string,
  country: string,
  icaoPrefix: string,
  baseUrl: string,
): {
  name: string;
  country: string;
  icaoPrefix: string;
  baseUrl: string;
  access: "FREE (Verified)" | "LIKELY FREE" | "PAID" | "RESTRICTED";
} {
  return {
    name,
    country,
    icaoPrefix,
    baseUrl,
    access: "FREE (Verified)",
  };
}
