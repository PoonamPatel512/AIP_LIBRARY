import { describe, it, expect } from "vitest";
import { lookupByAiracNumber, lookupByEffectiveDate } from "../src/lookup";
import { isValidAiracNumber, isValidEffectiveDate } from "../src/validator";
import { generateCycles } from "../src/generator";
import { formatAiracHuman } from "../src/formatter";

describe("lookup/validator/formatter", () => {
  it("lookup by airac number returns cycle", () => {
    const c = generateCycles(1, 30)[0];
    const short = `${c.year}${String(c.sequence).padStart(2, "0")}`;
    const found = lookupByAiracNumber(short);
    expect(found).not.toBeNull();
    expect(isValidAiracNumber(short)).toBeTruthy();
    expect(formatAiracHuman(found!)).toContain("AIRAC");
  });

  it("lookup by effective date", () => {
    const c = generateCycles(1, 40)[0];
    const found = lookupByEffectiveDate(c.effectiveDate);
    expect(found).not.toBeNull();
    expect(isValidEffectiveDate(c.effectiveDate)).toBeTruthy();
  });
});
