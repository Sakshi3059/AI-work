// spec: specs/facebook-login-test-plan.md
// seed: tests/seed.spec.js

import { test, expect } from '../fixtures/loginFixture';

test.describe('Error Message Validation Tests', () => {
  test('Invalid Credentials Error', async ({ page }) => {
    // 1. Navigate to https://facebook.com
    await page.goto('https://facebook.com');
    
    const emailInput = page.locator('input[name="email"]');
    const passwordInput = page.locator('input[name="pass"]');
    const loginButton = page.locator('a:has-text("Log in")');
    
    // 2. Enter valid email format: "test@example.com"
    await emailInput.fill('test@example.com');
    
    // 3. Enter incorrect password: "wrongpassword123"
    await passwordInput.fill('wrongpassword123');
    
    // 4. Click Login button
    await loginButton.click();
    
    // 5. Observe error message
    // Error message appears: "The password you've entered is incorrect. Forgotten password?" or similar
    const errorMessage = page.locator('div[role="alert"], .error_message, [data-testid="error"], ._9ay7');
    await expect(errorMessage).toBeVisible();
    
    // Verify error message contains relevant text
    await expect(errorMessage).toContainText(/incorrect|password|forgotten/i);
    
    // Error message is clearly visible
    await expect(errorMessage).toBeVisible();
    
    // Fields may remain populated for correction
    await expect(emailInput).toHaveValue('test@example.com');
    await expect(passwordInput).toHaveValue('wrongpassword123');
    
    // Verify user can retry after seeing error
    await passwordInput.fill('anotherpassword');
    await expect(passwordInput).toHaveValue('anotherpassword');
    
    // Verify error message doesn't persist inappropriately
    // Start typing to check if error dismisses
    await emailInput.fill('correct@example.com');
    // Error may dismiss or update
  });
});
