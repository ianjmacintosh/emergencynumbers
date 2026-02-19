import { describe, expect, test } from "vitest";

import type { Service } from "../../constants/emergency-services";

import { getServiceCardData } from "./helpers";

describe.skip("getCountryCardData method", () => {
  test("returns an array", () => {
    const services: Service[] = [
      { type: "Police", name: "Police", phoneNumber: "211" },
      { type: "Police", name: "Police", phoneNumber: "911" },
      { type: "Fire Department", name: "Fire Department", phoneNumber: "311" },
      { type: "Fire Department", name: "Fire Department", phoneNumber: "911" },
      { type: "Ambulance", name: "Ambulance", phoneNumber: "511" },
      { type: "Hazards", name: "Hazards", phoneNumber: "911" },
    ];
    const result = getServiceCardData(services);
    expect(result).toHaveLength(4);
  });
});
