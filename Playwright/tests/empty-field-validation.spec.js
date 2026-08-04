// spec: specs/facebook-login-test-plan.md
// seed: tests/seed.spec.js

import { test, expect } from '../fixtures/loginFixture';

test.describe('State Change Tests for Invalid Inputs', () => {
  test('Empty Field Validation', async ({ page }) => {
    // 1. Navigate to https://facebook.com
    await page.goto('https://facebook.com');
    
    const emailInput = page.locator('input[name="email"]');
    const passwordInput = page.locator('input[name="pass"]');
    const loginButton = page.locator('a:has-text("Log in")');
    
    // 2. Leave email field empty
    await expect(emailInput).toHaveValue('');
    
    // 3. Leave password field empty
    await expect(passwordInput).toHaveValue('');
    
    // 4. Click Login button
    await loginButton.click();
    
    // 5. Observe button state and error messages
    // Check if button is disabled (client-side validation)
    const isDisabled = await loginButton.isDisabled();
    if (isDisabled) {
      // Button is disabled due to client-side validation
      await expect(loginButton).toBeDisabled();
    } else {
      // Button is clickable, check for error message
      // Look for error message indicating required fields
      const errorMessage = page.locator('div[role="alert"], .error_message, [data-testid="error"]');
      await expect(errorMessage).toBeVisible();
      await expect(errorMessage).toContainText(/email|password|required/i);
      
      // Check if fields highlight in red
      const emailBorderColor = await emailInput.evaluate(el => window.getComputedStyle(el).borderColor);
      const passwordBorderColor = await passwordInput.evaluate(el => window.getComputedStyle(el).borderColor);
      
      // Red color check (rgb values for red)
      const isRed = color => color.includes('255, 0, 0') || color.includes('red') || color.includes('rgb(255');
      expect(isRed(emailBorderColor) || isRed(passwordBorderColor)).toBeTruthy();
    }
    
    // Verify user cannot proceed with empty fields
    // Check that we're still on the login page
    await expect(page).toHaveURL(/facebook\.com/);
  });
});
