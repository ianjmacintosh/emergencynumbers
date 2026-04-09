import { describe, expect, test } from "vitest";
import { COUNTRY_NAMES, type ValidCountryCode } from "../../constants";

describe("CountrySelect", () => {
  test("sorts countries alphabetically, placing Afghanistan before United Arab Emirates", () => {
    const sortedIds = (
      Object.keys(COUNTRY_NAMES) as Array<ValidCountryCode>
    ).sort((a, b) => {
      const nameA = COUNTRY_NAMES[a];
      const nameB = COUNTRY_NAMES[b];
      return nameA > nameB ? 1 : -1;
    });

    const afghIndex = sortedIds.indexOf("AF");
    const uaeIndex = sortedIds.indexOf("AE");

    expect(afghIndex).toBeLessThan(uaeIndex);
  });
});
