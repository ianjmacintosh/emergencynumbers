import { test, expect } from "@playwright/test";
import { SERVICES } from "../src/constants/emergency-services";
import { COUNTRY_NAMES } from "../src/constants";

const testPage = "/us/";

test("/foo/ returns a 404 response", async ({ page }) => {
  const response = await page.goto("/foo/");
  expect(response?.status()).toBe(404);
});

test("builds with dynamic page titles", async ({ page }) => {
  await page.goto(testPage);

  await expect(page).toHaveTitle(
    "Emergency Service Phone Numbers for United States",
  );

  await page.goto("/kp/");

  await expect(page).toHaveTitle(
    "Emergency Service Phone Numbers for North Korea",
  );
});

test("updates page titles as user changes country via dropdown", async ({
  page,
}) => {
  await page.goto(testPage);

  await expect(page).toHaveTitle(
    "Emergency Service Phone Numbers for United States",
  );

  await page.getByRole("combobox", { name: "Location" }).click();
  await page.keyboard.type("North Korea");
  await page.getByRole("option", { name: "North Korea" }).click();

  await expect(page).toHaveTitle(
    "Emergency Service Phone Numbers for North Korea",
  );
});

// Has the header, the dropdown, the service cards, and the footer

test("has a headline, the dropdown, the service cards, and the footer", async ({
  page,
}) => {
  await page.goto(testPage);

  // Heading
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  // Dropdown
  await expect(page.getByRole("combobox")).toBeVisible();

  // Expect at least one emergency service card to be visible
  await expect(page.getByRole("article").first()).toBeVisible();

  // Footer
  await expect(page.getByRole("contentinfo")).toBeVisible();
});

// Can open the dropdown and pick a country
test("can change countries", async ({ page }) => {
  // For testing, we will test Brazil
  const testCountryCode = "BR";
  const testCountry = COUNTRY_NAMES[testCountryCode];

  await page.goto(testPage);

  await page.getByRole("combobox", { name: "Location" }).click();
  await page.keyboard.type(testCountry);
  await page.getByRole("option", { name: testCountry }).click();

  await expect(page.getByRole("combobox", { name: "Location" })).toContainText(
    testCountry,
  );

  const serviceCard = page.getByRole("article");
  for (const service of SERVICES[testCountryCode]!) {
    await expect(
      serviceCard.filter({ hasText: service.description ?? service.type }),
    ).toBeVisible();
  }
});

test("can find United Kingdom by searching for an alternate name", async ({
  page,
}) => {
  await page.goto(testPage);

  await page.getByRole("combobox", { name: "Location" }).click();
  await page.keyboard.type("England");

  await expect(
    page.getByRole("option", { name: "United Kingdom" }),
  ).toBeVisible();

  await page.getByRole("option", { name: "United Kingdom" }).click();

  await expect(page.getByRole("combobox", { name: "Location" })).toContainText(
    "United Kingdom",
  );
});

test.skip("can copy phone numbers using the copy button", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/");

  const serviceCard = page.getByRole("article").first();

  const copyText = /^Copy (.+) to clipboard$/;

  const copyButton = serviceCard.getByRole("button", {
    name: copyText,
  });
  const buttonLabel = await copyButton.textContent();
  const phoneNumber = buttonLabel!.match(copyText)![1];

  await copyButton.click();

  const clipboardText = await page.evaluate(() =>
    navigator.clipboard.readText(),
  );
  expect(clipboardText).toBe(phoneNumber);

  await expect(serviceCard.getByRole("status")).toHaveText(/Copied/);
});

// This is kind of a weird behavior but it is OK; we shouldn't invite a user to go to an effectively useless page
test("does not show a banner when visiting a supported country and geolocated to an unsupported country", async ({
  page,
}) => {
  // AQ (Antarctica) is in COUNTRY_NAMES but has no entries in SERVICES
  await page.route("/api/geo", (route) =>
    route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({ country: "AQ" }),
    }),
  );

  const geoResponse = page.waitForResponse("/api/geo");
  await page.goto(testPage);
  await geoResponse;

  // The banner should never appear
  await expect(page.getByRole("complementary")).not.toBeVisible();

  // The default country should still be shown
  await expect(page.getByRole("combobox", { name: "Location" })).toContainText(
    "United States",
  );
});

test.skip("brings a user in an unsupported country to its 'No Info' page", async () => {
  // Untestable; we'd need to mock a 302 response, which IS the behavior
});

test("shows a banner and can dismiss it when geolocated to a different supported country", async ({
  page,
}) => {
  await page.route("/api/geo", (route) =>
    route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({ country: "EC" }),
    }),
  );

  const geoResponse = page.waitForResponse("/api/geo");
  await page.goto("/br/");
  await geoResponse;

  const banner = page.getByRole("complementary");
  await expect(banner).toBeVisible();
  await expect(banner).toContainText("Ecuador");

  await banner.getByRole("button", { name: /Close/i }).click();

  await expect(banner).not.toBeVisible();

  const serviceCard = page.getByRole("article");
  for (const service of SERVICES["BR"]!) {
    await expect(
      serviceCard.filter({ hasText: service.description ?? service.type }),
    ).toBeVisible();
  }
});

test("shows a banner and can switch to the geolocated country", async ({
  page,
}) => {
  await page.route("/api/geo", (route) =>
    route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({ country: "ES" }),
    }),
  );

  const geoResponse = page.waitForResponse("/api/geo");
  await page.goto(testPage);
  await geoResponse;

  const banner = page.getByRole("complementary");
  await expect(banner).toBeVisible();

  await banner.getByRole("button", { name: /Go/i }).click();

  await page.waitForURL(/\/es\//);
  await expect(page.getByRole("combobox", { name: "Location" })).toContainText(
    "Spain",
  );

  const serviceCard = page.getByRole("article");
  for (const service of SERVICES["ES"]!) {
    await expect(
      serviceCard.filter({ hasText: service.description ?? service.type }),
    ).toBeVisible();
  }
});

test("does not show a banner after the user manually selects a country", async ({
  page,
}) => {
  // Geolocated to Ecuador, viewing the default (US) — banner appears
  await page.route("/api/geo", (route) =>
    route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({ country: "EC" }),
    }),
  );

  const geoResponse = page.waitForResponse("/api/geo");
  await page.goto(testPage);
  await geoResponse;

  const banner = page.getByRole("complementary");
  await expect(banner).toBeVisible();
  await expect(banner).toContainText("Ecuador");

  await banner.getByRole("button", { name: /Go/i }).click();

  // User deliberately picks Brazil — this should clear the banner
  const combobox = page.getByRole("combobox", { name: "Location" });
  await combobox.click();
  await page.keyboard.type(COUNTRY_NAMES["BR"]);
  await page.getByRole("option", { name: COUNTRY_NAMES["BR"] }).click();
  await page.waitForURL(/\/br\//);

  await expect(page.getByRole("complementary")).not.toBeVisible();
});

test("does not show a banner after the user navigates away from their geolocated page", async ({
  page,
}) => {
  // Geolocated to Ecuador, viewing Ecuador — no banner
  await page.route("/api/geo", (route) =>
    route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({ country: "EC" }),
    }),
  );

  const geoResponse = page.waitForResponse("/api/geo");
  await page.goto("/ec/");
  await geoResponse;

  await expect(page.getByRole("complementary")).not.toBeVisible();

  // User deliberately navigates away to Brazil — banner should stay gone
  const combobox = page.getByRole("combobox", { name: "Location" });
  await combobox.click();
  await page.keyboard.type(COUNTRY_NAMES["BR"]);
  await page.getByRole("option", { name: COUNTRY_NAMES["BR"] }).click();
  await page.waitForURL(/\/br\//);

  await expect(page.getByRole("complementary")).not.toBeVisible();
});

test("Antarctica appears in the dropdown and indicates no information is available", async ({
  page,
}) => {
  await page.goto(testPage);

  await page.getByRole("combobox", { name: "Location" }).click();

  await expect(
    page.getByRole("option", { name: /Antarctica.*no information available/i }),
  ).toBeVisible();
});

test("Navigating directly to Antarctica page shows 'No info' message", async ({
  page,
}) => {
  await page.goto("/aq/");

  await expect(
    page.getByRole("heading", {
      name: /no information available/i,
    }),
  ).toBeVisible();
});

test("selecting Antarctica shows the no information message", async ({
  page,
}) => {
  await page.goto(testPage);

  await page.getByRole("combobox", { name: "Location" }).click();
  await page.keyboard.type("Antarctica");
  await page.getByRole("option", { name: /Antarctica/i }).click();

  await expect(
    page.getByRole("heading", {
      name: /no information available/i,
    }),
  ).toBeVisible();
});

test("country dropdown lists Afghanistan before United Arab Emirates", async ({
  page,
}) => {
  await page.goto(testPage);
  await page.getByRole("combobox", { name: "Location" }).click();

  const allTexts = await page.getByRole("option").allTextContents();

  const afghIndex = allTexts.findIndex((text) => text.includes("Afghanistan"));
  const uaeIndex = allTexts.findIndex((text) =>
    text.includes("United Arab Emirates"),
  );

  expect(afghIndex).toBeGreaterThanOrEqual(0);
  expect(uaeIndex).toBeGreaterThanOrEqual(0);
  expect(afghIndex).toBeLessThan(uaeIndex);
});

test("searching 'no information available' does not surface countries without data", async ({
  page,
}) => {
  await page.goto(testPage);

  await page.getByRole("combobox", { name: "Location" }).click();
  await page.keyboard.type("no information available");

  await expect(page.getByText(/no(.*)match/i)).toBeVisible();
});

test("can select the default country after loading a different country", async ({
  page,
}) => {
  // Simulate geo detecting a country different from the default (US)
  await page.route("/api/geo", (route) =>
    route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({ country: "AL" }),
    }),
  );

  await page.goto("/al/");

  const combobox = page.getByRole("combobox", { name: "Location" });

  // Wait for the geo response to take effect
  await expect(combobox).toContainText("Albania");

  // Now try to select the original default country (United States)
  await combobox.click();
  await page.keyboard.type("United States");
  await page
    .getByRole("option", { name: "United States", exact: true })
    .click();
  await page.waitForURL(/\/us\//);
  await page.waitForLoadState("domcontentloaded");

  await expect(combobox).toContainText("United States");
});
