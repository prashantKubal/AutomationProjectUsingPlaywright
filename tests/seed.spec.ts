import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://corpapps.hareandturtle.ai/HNT/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/HNT | Login/);
});
