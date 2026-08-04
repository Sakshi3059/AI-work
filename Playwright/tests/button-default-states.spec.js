// spec: specs/facebook-login-test-plan.md
// seed: tests/seed.spec.js

import { test, expect } from '../fixtures/loginFixture';

test.describe('UI Elements Default State Tests', () => {
  test('Button Default States', async ({ page }) => {
    // 1. Navigate to https://facebook.com
    await page.goto('https://facebook.com');
    
    // 2. Check Login button:
    const loginButton = page.locator('a:has-text("Log in")');
    
    // - Button is visible
    await expect(loginButton).toBeVisible();
    
    // - Button is disabled or enabled based on validation rules
    const isEnabled = await loginButton.isEnabled();
    // Note: Facebook typically keeps button enabled, validation happens on submit
    
    // - Button text reads "Log In"
    const buttonText = await loginButton.textContent();
    expect(buttonText).toMatch(/log in/i);
    
    // - Button has correct styling (blue background typically)
    const backgroundColor = await loginButton.evaluate(el => window.getComputedStyle(el).backgroundColor);
    // Check for blue color (rgb values for blue)
    const isBlue = backgroundColor.includes('0, 0, 255') || backgroundColor.includes('rgb(24, 119, 242)') || backgroundColor.includes('#1877f2');
    expect(isBlue).toBeTruthy();
    
    // 3. Check "Create new account" button (now "Sign up"):
    const createAccountButton = page.locator('a:has-text("Sign up")');
    
    // - Button is visible
    await expect(createAccountButton).toBeVisible();
    
    // - Button is enabled
    await expect(createAccountButton).toBeEnabled();
    
    // - Button has green background (typically)
    const createAccountBgColor = await createAccountButton.evaluate(el => window.getComputedStyle(el).backgroundColor);
    // Check for green color
    const isGreen = createAccountBgColor.includes('0, 128, 0') || createAccountBgColor.includes('rgb(42, 167, 52)') || createAccountBgColor.includes('#42b72a');
    expect(isGreen).toBeTruthy();
  });
});
