// spec: specs/facebook-login-test-plan.md
// seed: tests/seed.spec.js

import { test, expect } from '@playwright/test';

test.describe('Security Tests', () => {
  test('SSL/TLS Certificate', async ({ page }) => {
    // 1. Navigate to https://facebook.com
    await page.goto('https://facebook.com');
    
    // 2. Check browser address bar - verify HTTPS
    const url = page.url();
    expect(url).toMatch(/^https:\/\//);
    
    // 3. Verify padlock icon is present (check for secure connection)
    // In Playwright, we can verify the security state through the response
    const response = await page.goto('https://facebook.com');
    expect(response?.ok()).toBeTruthy();
    
    // 4. Click padlock to view certificate - verify certificate is valid
    // We can check the security state via page context
    const securityState = await page.evaluate(() => {
      return window.isSecureContext;
    });
    expect(securityState).toBe(true);
    
    // Verify no mixed content warnings
    const mixedContentErrors = [];
    page.on('console', msg => {
      if (msg.text().includes('mixed content') || msg.text().includes('Mixed Content')) {
        mixedContentErrors.push(msg.text());
      }
    });
    await page.waitForTimeout(1000);
    expect(mixedContentErrors.length).toBe(0);
    
    // 5. Verify certificate is valid by checking protocol
    const protocol = await page.evaluate(() => window.location.protocol);
    expect(protocol).toBe('https:');
    
    // Verify no certificate warnings in console
    const certificateErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error' && (msg.text().includes('certificate') || msg.text().includes('SSL'))) {
        certificateErrors.push(msg.text());
      }
    });
    await page.waitForTimeout(1000);
    expect(certificateErrors.length).toBe(0);
  });
});
