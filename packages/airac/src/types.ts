export type ISODateString = string; // YYYY-MM-DD

export interface AiracCycle {
  id: string;
  year: number;
  sequence: number; // 1..13 within year
  effectiveDate: ISODateString;
  publicationDate: ISODateString;
  startDate: ISODateString;
  endDate: ISODateString;
}
