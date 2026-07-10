import { ConnectorRegistryError } from "./errors";
import type { Connector, ConnectorDefinition } from "./types";

export class ConnectorRegistry {
  private readonly connectors = new Map<string, Connector>();

  register(connector: Connector): ConnectorDefinition {
    if (this.connectors.has(connector.id)) {
      throw new ConnectorRegistryError(`Connector ${connector.id} is already registered`);
    }

    this.connectors.set(connector.id, connector);

    return {
      id: connector.id,
      name: connector.name,
      version: connector.version,
    };
  }

  get(id: string): Connector | undefined {
    return this.connectors.get(id);
  }

  list(): ConnectorDefinition[] {
    return Array.from(this.connectors.entries()).map(([id, connector]) => ({
      id,
      name: connector.name,
      version: connector.version,
    }));
  }
}
