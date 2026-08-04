// spec: specs/facebook-login-test-plan.md
// seed: tests/seed.spec.js

import { test, expect } from '../fixtures/loginFixture';

test.describe('Error Message Validation Tests', () => {
  test('Non-Existent Account Error', async ({ page }) => {
    // 1. Navigate to https://facebook.com
    await page.goto('https://facebook.com');
    
    const emailInput = page.locator('input[name="email"]');
    const passwordInput = page.locator('input[name="pass"]');
    const loginButton = page.locator('a:has-text("Log in")');
    
    // 2. Enter email that doesn't exist: "nonexistent12345@example.com"
    await emailInput.fill('nonexistent12345@example.com');
    
    // 3. Enter any password
    await passwordInput.fill('testpassword123');
    
    // 4. Click Login button
    await loginButton.click();
    
    // 5. Observe error message
    // Error message indicates account not found
    const errorMessage = page.locator('div[role="alert"], .error_message, [data-testid="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText(/not found|no account|create/i);
    
    // Message may suggest creating an account
    const createAccountLink = page.locator('a:has-text("Sign up")');
    await expect(createAccountLink).toBeVisible();
    
    // Error is clear and actionable
    await expect(errorMessage).toBeVisible();
    
    // No security-sensitive information leaked
    const errorText = await errorMessage.textContent();
    expect(errorText).not.toMatch(/user exists|registered|valid/i);
  });
});
