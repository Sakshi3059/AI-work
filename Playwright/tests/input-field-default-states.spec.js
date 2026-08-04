// spec: specs/facebook-login-test-plan.md
// seed: tests/seed.spec.js

import { test, expect } from '../fixtures/loginFixture';

test.describe('UI Elements Default State Tests', () => {
  test('Input Field Default States', async ({ page }) => {
    // 1. Navigate to https://facebook.com
    await page.goto('https://facebook.com');
    
    // 2. Check email/phone input field:
    const emailInput = page.locator('input[name="email"]');
    
    // - Field is empty
    await expect(emailInput).toHaveValue('');
    
    // - Placeholder text is visible ("Email or phone number")
    await expect(emailInput).toHaveAttribute('placeholder', /email|mobile/i);
    
    // - Field is editable
    await emailInput.fill('test');
    await expect(emailInput).toHaveValue('test');
    await emailInput.fill('');
    
    // - No pre-filled values
    await expect(emailInput).toHaveValue('');
    
    // 3. Check password input field:
    const passwordInput = page.locator('input[name="pass"]');
    
    // - Field is empty
    await expect(passwordInput).toHaveValue('');
    
    // - Placeholder text is visible ("Password")
    const placeholder = await passwordInput.getAttribute('placeholder');
    expect(placeholder).toBeTruthy();
    
    // - Field is editable
    await passwordInput.fill('test123');
    await expect(passwordInput).toHaveValue('test123');
    await passwordInput.fill('');
    
    // - Characters are masked (••••••)
    await expect(passwordInput).toHaveAttribute('type', 'password');
    
    // - No pre-filled values
    await expect(passwordInput).toHaveValue('');
    
    // Verify fields accept keyboard input
    await emailInput.fill('test@example.com');
    await expect(emailInput).toHaveValue('test@example.com');
    await passwordInput.fill('password123');
    await expect(passwordInput).toHaveValue('password123');
  });
});
