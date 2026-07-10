import type { AiracCycle } from "@aip-library/airac";

export type SourceAccessType =
  "FREE (Verified)" | "LIKELY FREE" | "PAID" | "RESTRICTED" | "INTERNAL";

export interface AipLinkRow {
  country: string;
  officialAipUrl: string;
  region: string;
}

export interface SourceCatalogEntry {
  country: string;
  officialAipUrl: string;
  region: string;
  accessType: SourceAccessType;
  statesCovered: number;
  connectorStatus: "ACTIVE" | "PENDING" | "MAINTENANCE";
  domain: string;
}

export interface CountryMetadata {
  country: string;
  icaoPrefix: string;
  aisAuthority: string;
  officialAipUrl: string;
  sharedSource: string;
  currentAirac: string;
  trackingStatus: "ACTIVE" | "PENDING" | "REVIEW";
  region: string;
}

export interface DocumentMetadataRecord {
  id: string;
  kind: "AIP" | "AIP Amendment" | "AIP Supplement" | "AIC" | "Charts";
  airacCycle: string;
  effectiveDate: string;
  publicationDate: string;
  sourceUrl: string;
  status: "ACTIVE" | "PENDING" | "REVIEW";
  lastChecked: string;
}

export interface AiracViewModel {
  currentAirac: string;
  previousAirac: string;
  nextAirac: string;
}

export function createAiracLabel(cycle: AiracCycle): string {
  return `${cycle.year}-${String(cycle.sequence).padStart(2, "0")}`;
}

function parseCsvLine(line: string): string[] {
  const values: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === "," && !inQuotes) {
      values.push(current.trim());
      current = "";
      continue;
    }

    current += char;
  }

  values.push(current.trim());
  return values;
}

export function parseAipLinksCsv(csv: string): AipLinkRow[] {
  const rows = csv
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (rows.length <= 1) {
    return [];
  }

  return rows.slice(1).map((line) => {
    const [country, officialAipUrl, region] = parseCsvLine(line);
    return {
      country: (country ?? "").replace(/^"|"$/g, ""),
      officialAipUrl: (officialAipUrl ?? "").replace(/^"|"$/g, ""),
      region: (region ?? "").replace(/^"|"$/g, ""),
    };
  });
}

export function classifySourceAccess(url: string): SourceAccessType {
  const normalized = url.toLowerCase();

  if (
    normalized.includes("sharepoint") ||
    normalized.includes("onedrive") ||
    normalized.includes("login")
  ) {
    return "RESTRICTED";
  }

  if (
    normalized.includes("shop.aeropath") ||
    normalized.includes("aip") ||
    normalized.includes("eaip")
  ) {
    return "LIKELY FREE";
  }

  if (
    normalized.includes("ais.") ||
    normalized.includes("www.faa.gov") ||
    normalized.includes("navcanada")
  ) {
    return "FREE (Verified)";
  }

  return "RESTRICTED";
}

function toDisplayHost(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "official source";
  }
}

export function buildSourceCatalogFromRows(rows: AipLinkRow[]): SourceCatalogEntry[] {
  return rows
    .filter((row) => row.officialAipUrl)
    .map((row) => {
      const accessType = classifySourceAccess(row.officialAipUrl);
      return {
        country: row.country,
        officialAipUrl: row.officialAipUrl,
        region: row.region,
        accessType,
        statesCovered: accessType === "FREE (Verified)" || accessType === "LIKELY FREE" ? 1 : 0,
        connectorStatus: "ACTIVE" as const,
        domain: toDisplayHost(row.officialAipUrl),
      };
    })
    .filter(
      (entry) => entry.accessType === "FREE (Verified)" || entry.accessType === "LIKELY FREE",
    );
}

export function buildCountryMetadata(
  rows: AipLinkRow[],
  airacCycle = "2024-08",
): CountryMetadata[] {
  return rows
    .filter((row) => row.officialAipUrl)
    .map((row, index) => ({
      country: row.country,
      icaoPrefix: row.country.match(/\(([A-Z]{1,3})\)/)?.[1] ?? `XX${index + 1}`,
      aisAuthority: row.country.split("(")[0]?.trim() ?? row.country,
      officialAipUrl: row.officialAipUrl,
      sharedSource: toDisplayHost(row.officialAipUrl),
      currentAirac: airacCycle,
      trackingStatus: "ACTIVE",
      region: row.region,
    }));
}

export function buildDocumentMetadata(airacCycle = "2024-08"): DocumentMetadataRecord[] {
  return [
    {
      id: "doc-1",
      kind: "AIP",
      airacCycle,
      effectiveDate: "2024-08-01",
      publicationDate: "2024-07-25",
      sourceUrl: "https://ais.example.gov/aip",
      status: "ACTIVE",
      lastChecked: "2024-07-10",
    },
    {
      id: "doc-2",
      kind: "AIP Amendment",
      airacCycle,
      effectiveDate: "2024-08-15",
      publicationDate: "2024-08-01",
      sourceUrl: "https://ais.example.gov/amendment",
      status: "PENDING",
      lastChecked: "2024-07-09",
    },
    {
      id: "doc-3",
      kind: "AIC",
      airacCycle: `${Number.parseInt(airacCycle.split("-")[0] ?? "2024", 10) - 1}-${airacCycle.split("-")[1] ?? "08"}`,
      effectiveDate: "2024-07-17",
      publicationDate: "2024-07-11",
      sourceUrl: "https://ais.example.gov/aic",
      status: "REVIEW",
      lastChecked: "2024-07-08",
    },
  ];
}

export function buildAiracViewModel(cycle: AiracCycle): AiracViewModel {
  const currentAirac = createAiracLabel(cycle);
  const previousAirac = `${cycle.year}-${String(Math.max(1, cycle.sequence - 1)).padStart(2, "0")}`;
  const nextAirac = `${cycle.year}-${String(Math.min(13, cycle.sequence + 1)).padStart(2, "0")}`;

  return {
    currentAirac,
    previousAirac,
    nextAirac,
  };
}

export function resolveSelectedAirac(
  searchParams?: { airac?: string | string[] | undefined },
  fallback = "2024-08",
): string {
  const rawValue = Array.isArray(searchParams?.airac) ? searchParams.airac[0] : searchParams?.airac;
  return rawValue?.trim() || fallback;
}

export function buildAiracViewModelFromSelection(
  searchParams: { airac?: string | string[] | undefined } | undefined,
  cycles: AiracCycle[],
): AiracViewModel {
  const fallbackCycle = cycles[0];
  const selectedAirac = resolveSelectedAirac(
    searchParams,
    fallbackCycle ? createAiracLabel(fallbackCycle) : "2024-08",
  );
  const selectedCycle =
    cycles.find((cycle) => createAiracLabel(cycle) === selectedAirac) ?? fallbackCycle;

  if (!selectedCycle) {
    return {
      currentAirac: "2024-08",
      previousAirac: "2024-07",
      nextAirac: "2024-09",
    };
  }

  return buildAiracViewModel(selectedCycle);
}

export function isRetainedAiracCycle(
  cycleNumber: number,
  currentCycle: number,
  retentionWindow: number,
): boolean {
  if (retentionWindow <= 0) {
    return false;
  }

  return cycleNumber >= currentCycle - (retentionWindow - 1) && cycleNumber <= currentCycle;
}
