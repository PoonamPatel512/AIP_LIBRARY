import { lookupByAiracNumber, lookupByEffectiveDate } from "./lookup";

export function isValidAiracNumber(s: string): boolean {
  return lookupByAiracNumber(s) !== null;
}

export function isValidEffectiveDate(iso: string): boolean {
  return lookupByEffectiveDate(iso) !== null;
}
