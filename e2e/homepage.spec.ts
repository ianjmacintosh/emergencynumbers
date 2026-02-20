import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Emergency Service Phone Numbers");
});

test("has 'Call' text at least once", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Call").first()).toBeVisible();
});
