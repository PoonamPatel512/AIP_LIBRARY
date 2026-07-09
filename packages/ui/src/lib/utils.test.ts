import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("merges class names deterministically", () => {
    expect(cn("px-2", false && "hidden", "px-4", "text-slate-950")).toBe("px-4 text-slate-950");
  });
});
