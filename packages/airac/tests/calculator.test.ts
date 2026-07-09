import { describe, it, expect } from "vitest";
import { generateCycles } from "../src/generator";
import {
  getPreviousCycle,
  getNextCycle,
  daysUntilEffective,
  findCycleByDate,
  getCurrentCycle,
} from "../src/calculator";

describe("calculator", () => {
  it("prev/next cycle arithmetic", () => {
    const c = generateCycles(1, 10)[0];
    const prev = getPreviousCycle(c);
    const next = getNextCycle(c);
    expect(prev.id).not.toBe(c.id);
    expect(next.id).not.toBe(c.id);
  });

  it("find cycle by date and days until", () => {
    const c = generateCycles(1, 100)[0];
    const found = findCycleByDate(c.effectiveDate);
    expect(found).not.toBeNull();
    const days = daysUntilEffective(c, c.publicationDate);
    // publication date is before effective => days positive
    expect(days).toBeGreaterThan(0);
  });

  it("get current cycle falls back to today", () => {
    const cur = getCurrentCycle();
    expect(cur).toHaveProperty("effectiveDate");
  });
});
