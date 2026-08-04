import { test as base, expect } from '@playwright/test';

// /**
//  * @typedef {import('@playwright/test').Page} Page
//  * @typedef {import('@playwright/test').TestArgs} TestArgs
//  */

class LoginPage {
    // /**
    //  * @param {Page} page
    //  */
    constructor(page) {
        this.page = page;
    }
}

export const test = base.extend({
    // Use a @type function description instead of FixtureType wrapping
    /** @type {import('@playwright/test').FixtureFunction<{}, {loginPage: LoginPage}>} */
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await page.goto('https://facebook.com');
        await use(loginPage);
    }
});

export { expect };
