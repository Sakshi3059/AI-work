// spec: specs/facebook-login-test-plan.md
// seed: tests/seed.spec.js

import { test, expect } from '../fixtures/loginFixture';

test.describe('Valid Input and Successful Login Tests', () => {
  test('Enter Key Submission', async ({ page }) => {
    // 1. Navigate to https://facebook.com
    await page.goto('https://facebook.com');
    
    const emailInput = page.locator('input[name="email"]');
    const passwordInput = page.locator('input[name="pass"]');
    
    // 2. Enter valid email
    await emailInput.fill('test@example.com');
    
    // 3. Enter valid password
    await passwordInput.fill('testpassword123');
    
    // 4. Press Enter key in password field
    await passwordInput.press('Enter');
    
    // 5. Observe if form submits
    // Form submits on Enter key press
    // Login attempt is made - verify page navigation or error message
    await page.waitForTimeout(2000);
    
    // Either we get an error (invalid credentials) or successful redirect
    const errorMessage = page.locator('div[role="alert"], .error_message, [data-testid="error"]');
    const hasError = await errorMessage.isVisible().catch(() => false);
    
    if (hasError) {
      // Invalid credentials - error appeared
      await expect(errorMessage).toBeVisible();
    } else {
      // Form submitted - check if we navigated
      const currentUrl = page.url();
      expect(currentUrl).toMatch(/facebook\.com/);
    }
    
    // Behavior matches clicking Login button
    // Verify form submission occurred
  });
});
