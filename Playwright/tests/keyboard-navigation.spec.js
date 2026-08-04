// spec: specs/facebook-login-test-plan.md
// seed: tests/seed.spec.js

import { test, expect } from '@playwright/test';

test.describe('Accessibility Tests', () => {
  test('Keyboard Navigation', async ({ page }) => {
    // 1. Navigate to https://facebook.com
    await page.goto('https://facebook.com');
    
    const emailInput = page.locator('input[name="email"]');
    const passwordInput = page.locator('input[name="pass"]');
    const loginButton = page.locator('a:has-text("Log in")');
    const forgotPasswordLink = page.locator('a:has-text("Forgot password?")');
    const createAccountButton = page.locator('a:has-text("Sign up")');
    
    // 2. Use Tab key to navigate through all elements
    // 3. Verify focus order: email → password → login → forgot password → create account
    
    // Tab to email field
    await page.keyboard.press('Tab');
    await expect(emailInput).toBeFocused();
    
    // Tab to password field
    await page.keyboard.press('Tab');
    await expect(passwordInput).toBeFocused();
    
    // Tab to login button
    await page.keyboard.press('Tab');
    await expect(loginButton).toBeFocused();
    
    // Tab to forgot password link
    await page.keyboard.press('Tab');
    await expect(forgotPasswordLink).toBeFocused();
    
    // Tab to create account button
    await page.keyboard.press('Tab');
    await expect(createAccountButton).toBeFocused();
    
    // 4. Use Enter/Space to activate buttons
    // Navigate back to login button
    await page.keyboard.press('Shift+Tab');
    await page.keyboard.press('Shift+Tab');
    await page.keyboard.press('Shift+Tab');
    await expect(loginButton).toBeFocused();
    
    // Press Enter to activate
    await page.keyboard.press('Enter');
    // Form should submit (will show error since fields are empty)
    
    // 5. Use Shift+Tab for reverse navigation
    await page.goto('https://facebook.com');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Shift+Tab back
    await page.keyboard.press('Shift+Tab');
    await expect(passwordInput).toBeFocused();
    
    await page.keyboard.press('Shift+Tab');
    await expect(emailInput).toBeFocused();
    
    // Verify focus indicators are visible
    const emailBorderColor = await emailInput.evaluate(el => window.getComputedStyle(el).outlineColor);
    expect(emailBorderColor).not.toBe('rgba(0, 0, 0, 0)');
  });
});
