// spec: specs/facebook-login-test-plan.md
// seed: tests/seed.spec.js

import { test, expect } from '../fixtures/loginFixture';

test.describe('UI Elements Default State Tests', () => {
  test('Page Load and Element Visibility', async ({ page }) => {
    // 1. Navigate to https://facebook.com
    await page.goto('https://facebook.com');
    
    // 2. Verify the following elements are visible:
    // - Email/Phone input field
    const emailInput = page.locator('input[name="email"]');
    await expect(emailInput).toBeVisible();
    
    // - Password input field
    const passwordInput = page.locator('input[name="pass"]');
    await expect(passwordInput).toBeVisible();
    
    // - Login button
    const loginButton = page.locator('a:has-text("Log in")');
    await expect(loginButton).toBeVisible();
    
    // - "Forgot password?" link (not visible on main page, may be in modal)
    // const forgotPasswordLink = page.locator('a:has-text("Forgot password?")');
    // await expect(forgotPasswordLink).toBeVisible();
    
    // - "Create new account" button (now "Sign up")
    const createAccountButton = page.locator('a:has-text("Sign up")');
    await expect(createAccountButton).toBeVisible();
    
    // - Facebook logo
    const facebookLogo = page.locator('svg');
    await expect(facebookLogo).toBeVisible();
    
    // - Page heading/title
    const pageTitle = page.locator('h2');
    await expect(pageTitle).toBeVisible();
    
    // Verify page loads within 3 seconds
    const loadTime = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0];
      return navigation.loadEventEnd - navigation.fetchStart;
    });
    expect(loadTime).toBeLessThan(3000);
    
    // Verify no console errors
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    await page.reload();
    expect(errors.length).toBe(0);
  });
});
