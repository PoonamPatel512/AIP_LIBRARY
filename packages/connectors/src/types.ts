export type ConnectorStatus = "success" | "failed" | "skipped";

export interface Connector {
  readonly id: string;
  readonly name: string;
  readonly version: string;
  execute(input?: ConnectorExecutionInput): Promise<ConnectorResult>;
}

export interface ConnectorExecutionInput {
  readonly source?: string;
  readonly context?: Record<string, unknown>;
}

export interface ConnectorDefinition {
  readonly id: string;
  readonly name: string;
  readonly version: string;
}

export interface ConnectorResult {
  readonly status: ConnectorStatus;
  readonly publication?: PublicationMetadata;
  readonly error?: string;
  readonly metadata?: Record<string, unknown>;
}

export interface PublicationMetadata {
  readonly id: string;
  readonly sourceId: string;
  readonly title: string;
  readonly countryCode: string;
  readonly region?: string;
  readonly publicationDate?: string;
  readonly effectiveDate?: string;
  readonly documentUrl?: string;
  readonly sourceUrl?: string;
  readonly airacCycle?: string;
  readonly notes?: string[];
  readonly tags?: string[];
}

export interface AiracAssignment {
  readonly publicationId: string;
  readonly cycle: string;
  readonly source: string;
}

export interface ConnectorLoadResult {
  readonly connector: Connector;
  readonly definition: ConnectorDefinition;
}
