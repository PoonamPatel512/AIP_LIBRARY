import { generateCycles, generateCyclesBetween } from "./generator";
import { AiracCycle } from "./types";

export function lookupByAiracNumber(idLike: string, windowYears = 3): AiracCycle | null {
  // Accept formats like YYYY-NN or YYYYNN or YYYY-NN-INDEX
  const digits = idLike.replace(/[^0-9]/g, "");
  if (digits.length < 5) return null;
  // search a reasonable window around the year
  const year = parseInt(digits.slice(0, 4), 10);
  const startYear = year - windowYears;
  const endYear = year + windowYears;
  const startIso = `${startYear}-01-01`;
  const endIso = `${endYear}-12-31`;
  for (const c of generateCyclesBetween(startIso, endIso)) {
    const candidate = `${c.year}${String(c.sequence).padStart(2, "0")}`;
    if (candidate === digits.slice(0, 6)) return c;
  }
  return null;
}

export function lookupByEffectiveDate(effectiveIso: string): AiracCycle | null {
  for (const c of generateCycles(52 * 5)) {
    if (c.effectiveDate === effectiveIso) return c;
  }
  // fallback: generate between +/-5 years
  const start = `${new Date(effectiveIso).getUTCFullYear() - 5}-01-01`;
  const end = `${new Date(effectiveIso).getUTCFullYear() + 5}-12-31`;
  for (const c of generateCyclesBetween(start, end)) if (c.effectiveDate === effectiveIso) return c;
  return null;
}
