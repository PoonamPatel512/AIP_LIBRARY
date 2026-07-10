export type PublicationDocumentType =
  "AIP" | "AIP Amendment" | "AIP Supplement" | "AIC" | "Charts" | "Other";

export type PublicationStatus = "ACTIVE" | "PENDING" | "REVIEW";

export interface PublicationRecord {
  id: string;
  documentType: PublicationDocumentType;
  documentNumber: string;
  title: string;
  publicationDate: string;
  effectiveDate: string;
  airacCycle: string;
  sourceUrl: string;
  country: string;
  icaoPrefix: string;
  connectorName: string;
  discoveredAt: string;
  status: PublicationStatus;
}

export interface ConnectorDefinition {
  name: string;
  country: string;
  icaoPrefix: string;
  baseUrl: string;
  access: "FREE (Verified)" | "LIKELY FREE" | "PAID" | "RESTRICTED";
}
