import { test, expect } from "@playwright/test";

const testPage = "/us/";

test("shows the disclaimer wall before agreeing", async ({ page }) => {
  await page.goto(testPage);

  const disclaimer = page.getByRole("main", {
    name: /legal disclaimer/i,
  });
  await expect(disclaimer).toBeVisible();
});

test("disclaimer contains key phrases", async ({ page }) => {
  await page.goto(testPage);

  const disclaimer = page.getByRole("main", {
    name: /legal disclaimer/i,
  });
  await expect(disclaimer).toContainText("not an official resource", {
    ignoreCase: true,
  });
  await expect(disclaimer).toContainText("not government-affiliated", {
    ignoreCase: true,
  });
  await expect(disclaimer).toContainText("not guaranteed to be accurate", {
    ignoreCase: true,
  });
});

test("can dismiss the disclaimer by clicking Agree", async ({ page }) => {
  await page.goto(testPage);

  const disclaimer = page.getByRole("main", {
    name: /legal disclaimer/i,
  });
  await expect(disclaimer).toBeVisible();

  await disclaimer.getByRole("button", { name: /agree/i }).click();

  await expect(disclaimer).not.toBeVisible();
  await expect(page.getByRole("combobox", { name: "Location" })).toBeVisible();
});

test("disclaimer stays dismissed after agreeing and reloading", async ({
  page,
}) => {
  await page.goto(testPage);
  await page
    .getByRole("main", { name: /legal disclaimer/i })
    .getByRole("button", { name: /agree/i })
    .click();

  await page.reload();

  await expect(
    page.getByRole("main", { name: /legal disclaimer/i }),
  ).not.toBeVisible();
  await expect(page.getByRole("combobox", { name: "Location" })).toBeVisible();
});
