import { ConnectorValidationError } from "./errors";
import type { PublicationMetadata } from "./types";

export function validatePublicationMetadata(publication: PublicationMetadata): PublicationMetadata {
  const errors: string[] = [];

  if (!publication.id.trim()) {
    errors.push("publication.id is required");
  }

  if (!publication.sourceId.trim()) {
    errors.push("publication.sourceId is required");
  }

  if (!publication.title.trim()) {
    errors.push("publication.title is required");
  }

  if (!/^[A-Z]{2}$/.test(publication.countryCode.toUpperCase())) {
    errors.push("publication.countryCode must be a two-letter ISO country code");
  }

  if (errors.length > 0) {
    throw new ConnectorValidationError(errors.join("; "));
  }

  return publication;
}

export function validateAiracAssignment(cycle: string): string {
  if (!cycle.trim()) {
    throw new ConnectorValidationError("airac cycle is required");
  }

  return cycle.trim();
}
