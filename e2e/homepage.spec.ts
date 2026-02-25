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

test("can copy phone numbers using the copy button", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/");

  const serviceCard = page.getByLabel("Emergency Service").first();

  const copyButton = serviceCard.getByRole("button", {
    name: /^Copy .+ to Clipboard$/,
  });
  const buttonLabel = await copyButton.textContent();
  const phoneNumber = buttonLabel!.match(/^Copy (.+) to Clipboard$/)![1];

  await copyButton.click();

  const clipboardText = await page.evaluate(() =>
    navigator.clipboard.readText(),
  );
  expect(clipboardText).toBe(phoneNumber);

  await expect(serviceCard.getByRole("status")).toHaveText("Copied");
});

test("The country selector dropdown covers the copy icons and the 'Copied!' notification", async ({
  page,
}) => {
  await page.goto("/");

  // Trigger a "Copied!" notification before opening the dropdown
  await page.getByRole("button", { name: /^Copy .+ to Clipboard$/ }).first().click();

  await page.getByRole("combobox", { name: "Country" }).click();

  const listbox = page.getByRole("listbox");
  await expect(listbox).toBeVisible();

  // Compute the full bounds of the open dropdown (search input + options list)
  const listboxBox = await listbox.boundingBox();
  const searchInputBox = await page.locator('input[role="combobox"]').boundingBox();
  expect(listboxBox).not.toBeNull();
  expect(searchInputBox).not.toBeNull();

  const dropdownBox = {
    top: Math.min(listboxBox!.y, searchInputBox!.y),
    bottom: Math.max(
      listboxBox!.y + listboxBox!.height,
      searchInputBox!.y + searchInputBox!.height,
    ),
    left: Math.min(listboxBox!.x, searchInputBox!.x),
    right: Math.max(
      listboxBox!.x + listboxBox!.width,
      searchInputBox!.x + searchInputBox!.width,
    ),
  };

  // Returns the number of elements that were checked (i.e. overlapped with the dropdown)
  async function assertCoveredByDropdown(
    locator: ReturnType<typeof page.getByRole>,
  ) {
    const count = await locator.count();
    let checkedCount = 0;

    for (let i = 0; i < count; i++) {
      const el = locator.nth(i);
      const box = await el.boundingBox();
      if (!box) continue;

      const centerX = box.x + box.width / 2;
      const centerY = box.y + box.height / 2;

      if (
        centerX < dropdownBox.left ||
        centerX > dropdownBox.right ||
        centerY < dropdownBox.top ||
        centerY > dropdownBox.bottom
      )
        continue;

      checkedCount++;

      const isCovered = await el.evaluate((node, [x, y]) => {
        const topEl = document.elementFromPoint(x, y);
        return topEl !== null && topEl !== node && !node.contains(topEl);
      }, [centerX, centerY] as [number, number]);

      expect(isCovered).toBe(true);
    }

    return checkedCount;
  }

  const coveredButtons = await assertCoveredByDropdown(
    page.getByRole("button", { name: /^Copy .+ to Clipboard$/ }),
  );
  expect(
    coveredButtons,
    "Expected at least one copy button to be covered by the open dropdown",
  ).toBeGreaterThan(0);

  // Check any visible "Copied!" notifications too
  await assertCoveredByDropdown(page.getByRole("status"));
});
