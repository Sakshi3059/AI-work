// spec: specs/facebook-login-test-plan.md
// seed: tests/seed.spec.js

import { test, expect } from '../fixtures/loginFixture';

test.describe('State Change Tests for Invalid Inputs', () => {
  test('Empty Password Field', async ({ page }) => {
    // 1. Navigate to https://facebook.com
    await page.goto('https://facebook.com');
    
    const emailInput = page.locator('input[name="email"]');
    const passwordInput = page.locator('input[name="pass"]');
    const loginButton = page.locator('a:has-text("Log in")');
    
    // 2. Enter valid email or phone number
    await emailInput.fill('test@example.com');
    
    // 3. Leave password field empty
    await expect(passwordInput).toHaveValue('');
    
    // 4. Click Login button
    await loginButton.click();
    
    // 5. Observe error message
    // Error message indicates password is required
    const errorMessage = page.locator('div[role="alert"], .error_message, [data-testid="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText(/password|required/i);
    
    // Password field may highlight in red
    const passwordBorderColor = await passwordInput.evaluate(el => window.getComputedStyle(el).borderColor);
    const isRed = color => color.includes('255, 0, 0') || color.includes('red') || color.includes('rgb(255');
    expect(isRed(passwordBorderColor)).toBeTruthy();
    
    // Login is prevented - verify still on login page
    await expect(page).toHaveURL(/facebook\.com/);
    await expect(emailInput).toBeVisible();
  });
});
