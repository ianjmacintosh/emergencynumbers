import { test, expect } from "@playwright/test";
import { SERVICES } from "../src/constants/emergency-services";
import { COUNTRY_NAMES } from "../src/constants";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Emergency Service Phone Numbers");
});

// Has the header, the dropdown, the service cards, and the footer

test("has a headline, the dropdown, the service cards, and the footer", async ({
  page,
}) => {
  await page.goto("/");

  // Heading
  await expect(page.getByRole("heading")).toBeVisible();

  // Dropdown
  await expect(page.getByRole("combobox")).toBeVisible();

  // Expect at least one emergency service card to be visible
  await expect(page.getByLabel("Emergency Service").first()).toBeVisible();

  // Footer
  await expect(page.getByRole("contentinfo")).toBeVisible();
});

// Can open the dropdown and pick a country
test("can change countries", async ({ page }) => {
  // For testing, we will test Brazil
  const testCountryCode = "BR";
  const testCountry = COUNTRY_NAMES[testCountryCode];

  await page.goto("/");

  await page.getByRole("combobox", { name: "Country" }).click();
  await page.keyboard.type(testCountry);
  await page.getByRole("option", { name: testCountry }).click();

  await expect(page.getByRole("combobox", { name: "Country" })).toContainText(
    testCountry,
  );

  const serviceCard = page.getByLabel("Emergency Service");
  for (const service of SERVICES[testCountryCode]) {
    await expect(
      serviceCard
        .filter({ hasText: service.description ?? service.type })
        .filter({ hasText: service.phoneNumber }),
    ).toBeVisible();
  }
});
