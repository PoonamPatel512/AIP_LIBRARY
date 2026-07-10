import { isoToDate, dateToIso, addDaysUtc, startOfDayUtc } from "./utils";
import { generateCycles, generateCyclesBetween } from "./generator";
import { AiracCycle } from "./types";
import { CYCLE_LENGTH_DAYS } from "./constants";

export function findCycleByDate(dateIso: string): AiracCycle | null {
  const target = startOfDayUtc(isoToDate(dateIso));
  // search window: 5 years on either side to be safe
  const start = addDaysUtc(target, -365 * 5);
  const end = addDaysUtc(target, 365 * 5);
  for (const cycle of generateCyclesBetween(dateToIso(start), dateToIso(end))) {
    const eff = isoToDate(cycle.effectiveDate);
    const startD = isoToDate(cycle.startDate);
    const endD = isoToDate(cycle.endDate);
    if (+startOfDayUtc(eff) <= +target && +target <= +startOfDayUtc(endD)) return cycle;
  }
  return null;
}

export function getCurrentCycle(nowIso?: string): AiracCycle {
  const dateIso = nowIso ?? dateToIso(new Date());
  const found = findCycleByDate(dateIso);
  if (!found) throw new Error("Current cycle not found");
  return found;
}

export function getPreviousCycle(cycle: AiracCycle): AiracCycle {
  const idx = parseInt(cycle.id.split("-").pop() || "0", 10);
  const prevIdx = idx - 1;
  const cycles = generateCycles(1, prevIdx);
  return cycles[0] ?? cycle;
}

export function getNextCycle(cycle: AiracCycle): AiracCycle {
  const idx = parseInt(cycle.id.split("-").pop() || "0", 10);
  const nextIdx = idx + 1;
  const cycles = generateCycles(1, nextIdx);
  return cycles[0] ?? cycle;
}

export function daysUntilEffective(cycle: AiracCycle, fromIso?: string): number {
  const from = startOfDayUtc(fromIso ? isoToDate(fromIso) : new Date());
  const eff = startOfDayUtc(isoToDate(cycle.effectiveDate));
  const diff = Math.ceil((+eff - +from) / 86400000);
  return diff;
}
