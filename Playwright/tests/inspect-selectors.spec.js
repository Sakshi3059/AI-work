import { test } from '@playwright/test';

test('Inspect Facebook login page selectors', async ({ page }) => {
  await page.goto('https://facebook.com');
  
  // Take a snapshot to see the page structure
  const content = await page.content();
  console.log('Page HTML length:', content.length);
  
  // Try to find email input
  const emailInputs = await page.$$('input[type="text"], input[type="email"]');
  console.log('Text/email inputs found:', emailInputs.length);
  
  for (const input of emailInputs) {
    const id = await input.getAttribute('id');
    const name = await input.getAttribute('name');
    const placeholder = await input.getAttribute('placeholder');
    console.log('Input:', { id, name, placeholder });
  }
  
  // Try to find password input
  const passwordInputs = await page.$$('input[type="password"]');
  console.log('Password inputs found:', passwordInputs.length);
  
  for (const input of passwordInputs) {
    const id = await input.getAttribute('id');
    const name = await input.getAttribute('name');
    console.log('Password input:', { id, name });
  }
  
  // Try to find login button
  const buttons = await page.$$('button, input[type="submit"], input[type="button"]');
  console.log('Buttons found:', buttons.length);
  
  for (const btn of buttons) {
    const text = await btn.textContent();
    const type = await btn.getAttribute('type');
    const name = await btn.getAttribute('name');
    const value = await btn.getAttribute('value');
    const id = await btn.getAttribute('id');
    const className = await btn.getAttribute('class');
    const innerHTML = await btn.innerHTML();
    console.log('Button:', { text, type, name, value, id, className, innerHTML });
  }
  
  // Look for form elements
  const forms = await page.$$('form');
  console.log('Forms found:', forms.length);
  
  for (const form of forms) {
    const formId = await form.getAttribute('id');
    const formName = await form.getAttribute('name');
    const formAction = await form.getAttribute('action');
    console.log('Form:', { formId, formName, formAction });
    
    // Get all inputs in form
    const formInputs = await form.$$('input, button');
    console.log('Form inputs/buttons:', formInputs.length);
  }
  
  // Look for elements with "Log In" text anywhere
  const logInElements = await page.$$('*:has-text("Log In"), *:has-text("log in"), *:has-text("LOGIN")');
  console.log('Log In text elements found:', logInElements.length);
  
  for (const el of logInElements) {
    const tagName = await el.evaluate(e => e.tagName);
    const text = await el.textContent();
    console.log('Log In element:', { tagName, text });
  }
  
  // Look for forgot password link
  const forgotPasswordElements = await page.$$('*:has-text("Forgot"), *:has-text("forgot")');
  console.log('Forgot password elements found:', forgotPasswordElements.length);
  
  for (const el of forgotPasswordElements) {
    const tagName = await el.evaluate(e => e.tagName);
    const text = await el.textContent();
    const href = await el.getAttribute('href');
    console.log('Forgot element:', { tagName, text, href });
  }
  
  // Look for create account link
  const createAccountElements = await page.$$('*:has-text("Create"), *:has-text("create"), *:has-text("Sign up"), *:has-text("sign up")');
  console.log('Create account elements found:', createAccountElements.length);
  
  for (const el of createAccountElements) {
    const tagName = await el.evaluate(e => e.tagName);
    const text = await el.textContent();
    const href = await el.getAttribute('href');
    console.log('Create element:', { tagName, text, href });
  }
  
  // Wait for manual inspection
  await page.waitForTimeout(10000);
});
