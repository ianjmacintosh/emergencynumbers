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
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

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

test("can copy phone numbers using the copy button", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/");

  const serviceCard = page.getByLabel("Emergency Service").first();

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

test("can select the default country after geo resolves to a different country", async ({
  page,
}) => {
  // Simulate geo detecting a country different from the default (US)
  await page.route("/api/geo", (route) =>
    route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({ country: "AL" }),
    }),
  );

  await page.goto("/");

  const combobox = page.getByRole("combobox", { name: "Country" });

  // Wait for the geo response to take effect
  await expect(combobox).toContainText("Albania");

  // Now try to select the original default country (United States)
  await combobox.click();
  await page.keyboard.type("United States");
  await page.getByRole("option", { name: "United States" }).click();

  await expect(combobox).toContainText("United States");
});
