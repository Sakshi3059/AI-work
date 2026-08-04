// spec: specs/facebook-login-test-plan.md
// seed: tests/seed.spec.js

import { test, expect } from '../fixtures/loginFixture';

test.describe('Valid Input and Successful Login Tests', () => {
  test.fixme('Valid Email and Password Login', async ({ page }) => {
    // 1. Navigate to https://facebook.com
    await page.goto('https://facebook.com');
    
    const emailInput = page.locator('input[name="email"]');
    const passwordInput = page.locator('input[name="pass"]');
    const loginButton = page.locator('a:has-text("Log in")');
    
    // 2. Enter valid registered email: [use test account]
    // Note: Replace with actual test credentials
    const testEmail = process.env.FACEWORK_TEST_EMAIL || 'test@example.com';
    await emailInput.fill(testEmail);
    
    // 3. Enter correct password for that account
    // Note: Replace with actual test password
    const testPassword = process.env.FACEWORK_TEST_PASSWORD || 'testpassword123';
    await passwordInput.fill(testPassword);
    
    // 4. Click Login button
    await loginButton.click();
    
    // 5. Observe navigation and page load
    // User is redirected to home page or profile
    await page.waitForURL(/facebook\.com/, { timeout: 10000 });
    
    // Verify we're no longer on the login page
    await expect(page.locator('input[name="email"]')).not.toBeVisible();
    
    // Verify login is successful - check for home page elements
    const homePageElement = page.locator('[aria-label="Facebook"], [role="navigation"], .x1he6a20');
    await expect(homePageElement).toBeVisible({ timeout: 10000 });
    
    // Verify no error messages displayed
    const errorMessage = page.locator('div[role="alert"], .error_message, [data-testid="error"]');
    await expect(errorMessage).not.toBeVisible();
    
    // Verify user session is established by checking cookies
    const cookies = await page.context().cookies();
    const sessionCookie = cookies.find(cookie => cookie.name.includes('session') || cookie.name.includes('c_user'));
    expect(sessionCookie).toBeDefined();
  });
});
