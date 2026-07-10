import { ISODateString } from "./types";

export function isoToDate(iso: ISODateString): Date {
  const parts = iso.split("-");
  const year = Number.parseInt(parts[0] ?? "2000", 10);
  const month = Number.parseInt(parts[1] ?? "1", 10);
  const day = Number.parseInt(parts[2] ?? "1", 10);
  const safeYear = Number.isNaN(year) ? 2000 : year;
  const safeMonth = Number.isNaN(month) ? 1 : month;
  const safeDay = Number.isNaN(day) ? 1 : day;
  return new Date(Date.UTC(safeYear, safeMonth - 1, safeDay));
}

export function dateToIso(d: Date): ISODateString {
  return d.toISOString().slice(0, 10);
}

export function addDaysUtc(d: Date, days: number): Date {
  const out = new Date(d.getTime());
  out.setUTCDate(out.getUTCDate() + days);
  return out;
}

export function startOfDayUtc(d: Date): Date {
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
}
