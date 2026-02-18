import { describe, expect, test } from "vitest";

import { getServiceCardData } from "./helpers";

describe("getCountryCardData method", () => {
  test("returns an array", () => {
    const services = [
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
