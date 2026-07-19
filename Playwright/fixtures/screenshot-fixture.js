// const path = require('path');
// const { test } = require('@playwright/test');


// tests/my-test-fixtures.js
const { test: baseTest } = require('@playwright/test');
const path = require('path');

// Extend the base test to add custom teardown logic to the 'page' fixture
const test = baseTest.extend({
  page: async ({ page }, use, testInfo) => {
    
    // 1. Tell Playwright to let the actual test run normally
    await use(page);

    // 2. This code runs AUTOMATICALLY right after the test case finishes (Teardown)
    const specName = path.basename(testInfo.file);
    const cleanTitle = testInfo.title.replace(/[^a-zA-Z0-9]/g, '_');
    const screenshotName = `${specName}_${cleanTitle}.png`;

   const screenshot= await page.screenshot({ 
      path: `test-results/screenshots/${screenshotName}` 
    });

    // Attach it to HTML report
    await testInfo.attach('Final Screenshot', {
      body: screenshot,
      contentType: 'image/png'
    });
  }
});

module.exports = { test }; 

// test.afterEach(async ({ page }, testInfo) => {
//     const specName = path.baseName(testInfo.file);
//     /**
//      * 1. path.basename (Method)What it is: A built-in method (function) belonging to Node.js's native path module.
//      * Where it comes from: It is a core library feature of Node.js. It is not created by Playwright or by you.
//      * What it does: It extracts the final file name portion out of an absolute system file path (e.g., it converts C:/Users/project/tests/login.spec.js into just login.spec.js).
//      * Note: JavaScript is case-sensitive. It must be written as lowercase .basename(), not .baseName().
//      */

//     const cleanTitle = testInfo.title.replace(/[^a-zA-Z0-9]/g, '_');

//     /**
//      *  testInfo (Object Instance)What it is: A default Playwright argument object passed automatically to your hooks and tests.
//      * Where it comes from: Playwright automatically generates and populates this object for every single test execution. 
//      * It contains metadata about the currently running test.
//      *  */
//     // 3. Combine them: spec-name_test_case_name.png
//     const screenshotName = `${specName}_${cleanTitle}.png`;
//     // 4. Save inside your existing "test-results" directory
//     await page.screenshot({
//         path: `test-results/screenshots/${screenshotName}`
//     });


// })

/**
 * 3. testInfo.file (Property)What it is: A default, read-only property (a string variable inside the object) of testInfo.
 * Where it comes from: It is pre-defined by Playwright.What it contains: The absolute, full file system path to the current spec file being executed.
 * 
 * 4. testInfo.title (Property)What it is: A default, read-only property (a string variable) of testInfo.
 * Where it comes from: It is pre-defined by Playwright, but its value is derived directly from what you wrote.
 * What it contains: The exact text string you typed as the first argument of your test() function (e.g., if you wrote test('successful login', ...) then testInfo.title equals "successful login").
 */