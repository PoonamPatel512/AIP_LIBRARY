import { describe, it, expect } from "vitest";
import { generateCycles, generateCyclesBetween } from "../src/generator";
import { formatAiracShort } from "../src/formatter";

describe("generator", () => {
  it("generates deterministic cycles", () => {
    const cycles = generateCycles(3, 0);
    expect(cycles.length).toBe(3);
    expect(cycles[0].effectiveDate).toBeDefined();
    expect(formatAiracShort(cycles[0])).toMatch(/^\d{4}-\d{2}$/);
  });

  it("generates cycles between dates", () => {
    const list = Array.from(generateCyclesBetween("2000-01-01", "2000-12-31"));
    expect(list.length).toBeGreaterThan(0);
    const years = new Set(list.map((c) => c.year));
    expect(years.has(2000)).toBeTruthy();
  });
});
