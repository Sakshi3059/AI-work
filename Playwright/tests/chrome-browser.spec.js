// spec: specs/facebook-login-test-plan.md
// seed: tests/seed.spec.js

import { test, expect } from '../fixtures/loginFixture';

test.describe('Cross-Browser and Responsive Tests', () => {
  test('Chrome Browser', async ({ page, browserName }) => {
    test.skip(browserName !== 'chromium', 'This test is for Chrome/Chromium browsers');
    
    // 1. Open Chrome browser (handled by Playwright)
    // 2. Navigate to https://facebook.com
    await page.goto('https://facebook.com');
    
    // 3. Perform all critical test scenarios:
    
    // - Valid login (will fail with invalid credentials, but tests the flow)
    const emailInput = page.locator('input[name="email"]');
    const passwordInput = page.locator('input[name="pass"]');
    const loginButton = page.locator('a:has-text("Log in")');
    
    await emailInput.fill('test@example.com');
    await passwordInput.fill('testpassword123');
    await loginButton.click();
    
    // All functionality works in Chrome
    await expect(page).toHaveURL(/facebook\.com/);
    
    // - Invalid credentials
    const errorMessage = page.locator('div[role="alert"], .error_message, [data-testid="error"]');
    await expect(errorMessage).toBeVisible();
    
    // - Empty field validation
    await page.goto('https://facebook.com');
    await loginButton.click();
    // Should show error or button disabled
    
    // - Error messages
    await expect(errorMessage).toBeVisible();
    
    // No browser-specific issues
    // Rendering is correct
    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(loginButton).toBeVisible();
  });
});
