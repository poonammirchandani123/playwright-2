// HomePageTest.spec.js
const { test, expect } = require('@playwright/test');

test('Home Page', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');

  const pageTitle = await page.title(); // Correctly awaiting title
  console.log('Page title is:', pageTitle);

  await expect(page).toHaveTitle('STORE');

  const pageURL = page.url(); // Corrected URL retrieval
  console.log('Page URL is:', pageURL);

  await expect(page).toHaveURL('https://demoblaze.com/index.html');

  await page.close();
});
