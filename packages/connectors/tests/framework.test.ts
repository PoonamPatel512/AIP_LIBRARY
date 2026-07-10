import { describe, expect, it } from "vitest";
import {
  ConnectorLoader,
  ConnectorRegistry,
  ConnectorValidationError,
  createConnectorResult,
  createPublicationMetadata,
  validatePublicationMetadata,
  type Connector,
  type ConnectorResult,
} from "../src";

class DummyConnector implements Connector {
  readonly id = "dummy";
  readonly name = "Dummy connector";
  readonly version = "1.0.0";

  async execute(): Promise<ConnectorResult> {
    return createConnectorResult({
      status: "success",
      publication: createPublicationMetadata({
        id: "dummy-publication",
        sourceId: "dummy-source",
        title: "Dummy publication",
        countryCode: "AU",
      }),
    });
  }
}

describe("connector framework", () => {
  it("registers and resolves connectors", () => {
    const registry = new ConnectorRegistry();
    registry.register(new DummyConnector());

    const connector = registry.get("dummy");

    expect(connector).toBeDefined();
    expect(connector?.id).toBe("dummy");
    expect(registry.list()).toHaveLength(1);
  });

  it("loads a connector from the registry", async () => {
    const registry = new ConnectorRegistry();
    registry.register(new DummyConnector());

    const loader = new ConnectorLoader(registry);
    const loaded = await loader.load("dummy");

    expect(loaded.connector.id).toBe("dummy");
    expect(loaded.definition.id).toBe("dummy");
  });

  it("validates publication metadata", () => {
    const publication = createPublicationMetadata({
      id: "publication-1",
      sourceId: "source-1",
      title: "Example publication",
      countryCode: "NZ",
    });

    expect(() => validatePublicationMetadata(publication)).not.toThrow();
  });

  it("rejects invalid publication metadata", () => {
    const publication = createPublicationMetadata({
      id: "publication-1",
      sourceId: "",
      title: "",
      countryCode: "ZZ",
    });

    expect(() => validatePublicationMetadata(publication)).toThrow(ConnectorValidationError);
  });
});
