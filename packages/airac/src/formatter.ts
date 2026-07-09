import { AiracCycle } from "./types";

export function formatAiracShort(c: AiracCycle): string {
  return `${c.year}-${String(c.sequence).padStart(2, "0")}`;
}

export function formatAiracHuman(c: AiracCycle): string {
  return `AIRAC ${formatAiracShort(c)} (effective ${c.effectiveDate})`;
}
