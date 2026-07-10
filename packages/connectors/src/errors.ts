export class ConnectorValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ConnectorValidationError";
  }
}

export class ConnectorRegistryError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ConnectorRegistryError";
  }
}

export class ConnectorLoaderError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ConnectorLoaderError";
  }
}
