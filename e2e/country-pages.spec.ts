import { test, expect, type Page } from "@playwright/test";
import { SERVICES } from "../src/constants/emergency-services";
import { COUNTRY_NAMES } from "../src/constants";

// Run serially so tests share a single page — avoids repeated full page loads.
test.describe.configure({ mode: "serial" });

type Service = { type: string; name: string; phoneNumber: string; description?: string };

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("/us/");
});

test.afterAll(async () => {
  await page.close();
});

test("navigating to /us/ shows US emergency numbers", async () => {
  await expect(page.getByRole("combobox", { name: "Country" })).toContainText(
    COUNTRY_NAMES["US"],
  );

  const serviceCard = page.getByLabel("Emergency Service");
  for (const service of SERVICES["US"] as Service[]) {
    await expect(
      serviceCard
        .filter({ hasText: service.description ?? service.type })
        .filter({ hasText: service.phoneNumber }),
    ).toBeVisible();
  }
});

// Phase 2: combobox navigates via pushState — no page reload needed.
test("selecting a country from combobox navigates to its URL", async () => {
  const testCountry = COUNTRY_NAMES["BR"];

  await page.getByRole("combobox", { name: "Country" }).click();
  await page.keyboard.type(testCountry);
  await page.getByRole("option", { name: testCountry }).click();
  await page.waitForURL(/\/br\//);

  await expect(page.getByRole("combobox", { name: "Country" })).toContainText(
    testCountry,
  );
});

test("navigating to /br/ shows Brazil emergency numbers", async () => {
  // Page is already at /br/ after the previous test.
  const serviceCard = page.getByLabel("Emergency Service");
  for (const service of SERVICES["BR"] as Service[]) {
    await expect(
      serviceCard
        .filter({ hasText: service.description ?? service.type })
        .filter({ hasText: service.phoneNumber }),
    ).toBeVisible();
  }
});

test("navigating to an unknown country code falls back to default", async () => {
  await page.goto("/xx/");

  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("combobox", { name: "Country" })).toBeVisible();
});
