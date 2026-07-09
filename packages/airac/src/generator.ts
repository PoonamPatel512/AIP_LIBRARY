import { addDaysUtc, dateToIso, isoToDate, startOfDayUtc } from "./utils";
import { AiracCycle } from "./types";
import { CYCLE_LENGTH_DAYS, EPOCH_EFFECTIVE_UTC, PUBLICATION_LEAD_DAYS } from "./constants";

function createCycle(index: number): AiracCycle {
  const epoch = isoToDate(EPOCH_EFFECTIVE_UTC);
  const effective = addDaysUtc(epoch, index * CYCLE_LENGTH_DAYS);
  const start = effective;
  const end = addDaysUtc(effective, CYCLE_LENGTH_DAYS - 1);
  const publication = addDaysUtc(effective, -PUBLICATION_LEAD_DAYS);
  const year = effective.getUTCFullYear();
  // sequence within year: count cycles with effective date in same year
  // sequence = floor((dayOfYear(effective) - 1) / 28) + 1
  const startOfYear = new Date(Date.UTC(year, 0, 1));
  const seq =
    Math.floor(
      Math.floor((+startOfDayUtc(effective) - +startOfDayUtc(startOfYear)) / 86400000) /
        CYCLE_LENGTH_DAYS,
    ) + 1;

  return {
    id: `${year}-${String(seq).padStart(2, "0")}-${index}`,
    year,
    sequence: seq,
    effectiveDate: dateToIso(effective),
    publicationDate: dateToIso(publication),
    startDate: dateToIso(start),
    endDate: dateToIso(end),
  };
}

export function* generateCyclesBetween(startIso: string, endIso: string) {
  const start = isoToDate(startIso);
  const end = isoToDate(endIso);
  const epoch = isoToDate(EPOCH_EFFECTIVE_UTC);
  // compute start index
  const idxStart = Math.ceil(
    (+startOfDayUtc(start) - +startOfDayUtc(epoch)) / (CYCLE_LENGTH_DAYS * 86400000),
  );
  const idxEnd = Math.floor(
    (+startOfDayUtc(end) - +startOfDayUtc(epoch)) / (CYCLE_LENGTH_DAYS * 86400000),
  );
  for (let i = idxStart; i <= idxEnd; i++) {
    yield createCycle(i);
  }
}

export function generateCycles(count = 52, startIndex = 0) {
  const out: AiracCycle[] = [];
  for (let i = startIndex; i < startIndex + count; i++) out.push(createCycle(i));
  return out;
}
