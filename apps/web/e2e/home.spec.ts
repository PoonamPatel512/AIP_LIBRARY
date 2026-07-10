import { expect, test } from "@playwright/test";

test("home page renders the foundation", async ({ page }) => {
  await page.goto("/dashboard");

  await expect(
    page.getByRole("heading", { name: /A trusted aviation metadata platform/i }),
  ).toBeVisible();
  await expect(page.getByText("Phase 1 foundation")).toBeVisible();
});
