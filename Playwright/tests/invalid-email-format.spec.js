// spec: specs/facebook-login-test-plan.md
// seed: tests/seed.spec.js

import { test, expect } from '../fixtures/loginFixture';

test.describe('State Change Tests for Invalid Inputs', () => {
  test('Invalid Email Format', async ({ page }) => {
    // 1. Navigate to https://facebook.com
    await page.goto('https://facebook.com');
    
    const emailInput = page.locator('input[name="email"]');
    const passwordInput = page.locator('input[name="pass"]');
    const loginButton = page.locator('a:has-text("Log in")');
    
    // 2. Enter invalid email formats in email field:
    const invalidEmails = [
      'invalid',           // no @ symbol
      '@invalid.com',      // no username
      'invalid@',         // no domain
      'invalid@.com',     // invalid domain
      '     ',             // only spaces
      '!@#$%'             // special characters only
    ];
    
    for (const invalidEmail of invalidEmails) {
      await emailInput.fill(invalidEmail);
      
      // 3. Enter any password
      await passwordInput.fill('testpassword123');
      
      // 4. Click Login button
      await loginButton.click();
      
      // 5. Observe validation feedback
      // Check for error message or field highlighting
      const errorMessage = page.locator('div[role="alert"], .error_message, [data-testid="error"]');
      
      // Real-time validation may trigger as user types
      // Error message indicates invalid email format
      // Field may highlight in red
      const emailBorderColor = await emailInput.evaluate(el => window.getComputedStyle(el).borderColor);
      const isRed = color => color.includes('255, 0, 0') || color.includes('red') || color.includes('rgb(255');
      
      // Either error message appears or field highlights
      const hasError = await errorMessage.isVisible().catch(() => false) || isRed(emailBorderColor);
      expect(hasError).toBeTruthy();
      
      // Clear for next iteration
      await emailInput.fill('');
      await passwordInput.fill('');
    }
    
    // Verify invalid formats are rejected
    // Clear password field
    await passwordInput.fill('');
  });
});
