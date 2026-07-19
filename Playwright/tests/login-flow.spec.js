//const { test } = require('../fixtures/screenshot-fixture');
const { test,expect } = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByText('Username', { exact: true }).click();
  await page.getByText('Username', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'client brand banner' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.getByText('Dashboard Upgrademanda user').click();
  
});