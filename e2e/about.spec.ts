import { test, expect } from "@playwright/test";

const testPage = "/about/";

test("Goes away from the 'About' page when it's the first page visited", async ({
  page,
}) => {
  await page.goto(testPage);

  await expect(page.url()).toContain("about");
  await page
    .getByRole("button", { name: /directory/g })
    .first()
    .click();
  await expect(page.url()).not.toContain("about");
});

test("Goes back to the previous page", async ({ page }) => {
  await page.goto("/kp/");

  await page.getByRole("link", { name: /about/gi }).click();

  await expect(page.url()).toContain("about");
  await page
    .getByRole("button", { name: /directory/gi })
    .first()
    .click();
  await expect(page.url()).toContain("/kp/");
});
