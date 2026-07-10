import { ConnectorLoaderError } from "./errors";
import type { ConnectorLoadResult, ConnectorDefinition } from "./types";
import type { ConnectorRegistry } from "./registry";

export class ConnectorLoader {
  constructor(private readonly registry: ConnectorRegistry) {}

  async load(id: string): Promise<ConnectorLoadResult> {
    const connector = this.registry.get(id);

    if (!connector) {
      throw new ConnectorLoaderError(`Connector ${id} was not found`);
    }

    const definition: ConnectorDefinition = {
      id: connector.id,
      name: connector.name,
      version: connector.version,
    };

    return {
      connector,
      definition,
    };
  }
}
