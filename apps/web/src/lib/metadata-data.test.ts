import { describe, expect, it } from "vitest";

import {
  buildSourceCatalogFromRows,
  classifySourceAccess,
  isRetainedAiracCycle,
  parseAipLinksCsv,
} from "./metadata-data";

describe("metadata data helpers", () => {
  it("parses the AIP links CSV into structured rows", () => {
    const csv = `Country,eAIP,Region/Continent\nALBANIA (LA),https://ais.albcontrol.al/,EUROPE\n`;

    const rows = parseAipLinksCsv(csv);

    expect(rows).toHaveLength(1);
    expect(rows[0]).toMatchObject({
      country: "ALBANIA (LA)",
      officialAipUrl: "https://ais.albcontrol.al/",
      region: "EUROPE",
    });
  });

  it("classifies public official sources as free or likely free", () => {
    expect(classifySourceAccess("https://ais.albcontrol.al/")).toBe("FREE (Verified)");
    expect(classifySourceAccess("https://shop.aeropath.aero/collections/samoa")).toBe(
      "LIKELY FREE",
    );
    expect(classifySourceAccess("https://onedrive.live.com/")).toBe("RESTRICTED");
  });

  it("builds a rollout catalog from the parsed source rows", () => {
    const rows = [
      {
        country: "ALBANIA (LA)",
        officialAipUrl: "https://ais.albcontrol.al/",
        region: "EUROPE",
      },
      {
        country: "AUSTRALIA (YX)",
        officialAipUrl: "https://www.airservicesaustralia.com/publications/aip.asp",
        region: "ASIA & PACIFIC",
      },
    ];

    const catalog = buildSourceCatalogFromRows(rows);

    expect(catalog).toHaveLength(2);
    expect(catalog[0]).toMatchObject({
      country: "ALBANIA (LA)",
      accessType: "FREE (Verified)",
      statesCovered: 1,
      connectorStatus: "ACTIVE",
    });
  });

  it("retains the current and previous AIRAC cycles by default", () => {
    expect(isRetainedAiracCycle(202408, 202408, 2)).toBe(true);
    expect(isRetainedAiracCycle(202407, 202408, 2)).toBe(true);
    expect(isRetainedAiracCycle(202406, 202408, 2)).toBe(false);
  });
});
