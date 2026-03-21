import { test, expect, type Page } from "@playwright/test";
import { SERVICES } from "../src/constants/emergency-services";
import { COUNTRY_NAMES } from "../src/constants";

// Run serially so tests share a single page — avoids repeated full page loads.
test.describe.configure({ mode: "serial" });

type Service = {
  type: string;
  name: string;
  phoneNumber: string;
  description?: string;
};

let page: Page;

test.beforeAll(async ({ browser, baseURL }) => {
  const context = await browser.newContext();
  await context.addCookies([
    { name: "agreedToTerms", value: "1234567890", url: baseURL },
  ]);
  page = await context.newPage();
  await page.goto("/us/");
});

test.afterAll(async () => {
  await page.close();
});

test("navigating to /us/ shows US emergency numbers", async () => {
  await expect(page.getByRole("combobox", { name: "Location" })).toContainText(
    COUNTRY_NAMES["US"],
  );

  const serviceCard = page.getByRole("article");
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

  await page.getByRole("combobox", { name: "Location" }).click();
  await page.keyboard.type(testCountry);
  await page.getByRole("option", { name: testCountry }).click();
  await page.waitForURL(/\/br\//);

  await expect(page.getByRole("combobox", { name: "Location" })).toContainText(
    testCountry,
  );
});

test("navigating to /br/ shows Brazil emergency numbers", async () => {
  // Page is already at /br/ after the previous test.
  const serviceCard = page.getByRole("article");
  for (const service of SERVICES["BR"] as Service[]) {
    await expect(
      serviceCard
        .filter({ hasText: service.description ?? service.type })
        .filter({ hasText: service.phoneNumber }),
    ).toBeVisible();
  }
});

test("navigating to /aq/ shows Antarctica with no information message", async () => {
  await page.goto("/aq/");

  await expect(page.getByRole("combobox", { name: "Location" })).toContainText(
    COUNTRY_NAMES["AQ"],
  );
  await expect(
    page.getByRole("heading", { name: /no information available/i }),
  ).toBeVisible();
});
