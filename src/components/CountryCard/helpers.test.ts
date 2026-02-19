import { describe, expect, test } from "vitest";

import type { Service } from "../../constants/emergency-services";

import { getServiceCardData } from "./helpers";

describe.skip("getCountryCardData method", () => {
  test("returns an array", () => {
    const services: Service[] = [
      { type: "Police", name: "Police", phoneNumber: "211" },
      { type: "Police", name: "Police", phoneNumber: "911" },
      { type: "Fire", name: "Fire", phoneNumber: "311" },
      { type: "Fire", name: "Fire", phoneNumber: "911" },
      { type: "Medical", name: "Medical", phoneNumber: "511" },
      { type: "Hazards", name: "Hazards", phoneNumber: "911" },
    ];
    const result = getServiceCardData(services);
    expect(result).toHaveLength(4);
  });
});
