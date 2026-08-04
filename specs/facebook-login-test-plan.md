# Facebook Login Page Test Plan

## Overview
Comprehensive test plan for Facebook login page covering UI elements, default states, input validation, error handling, and successful authentication flows.

## Test Environment
- **URL**: https://facebook.com
- **Starting State**: Fresh page load, no cookies/sessions
- **Browser**: Chrome/Edge/Firefox (cross-browser testing)

---

## 1. UI Elements Default State Tests

### Test 1.1: Page Load and Element Visibility
**Title**: Verify all login form elements are visible on page load

**Steps**:
1. Navigate to https://facebook.com
2. Verify the following elements are visible:
   - Email/Phone input field
   - Password input field
   - Login button
   - "Forgot password?" link
   - "Create new account" button
   - Facebook logo
   - Page heading/title

**Expected Outcome**:
- All elements are visible and rendered correctly
- Elements are positioned in expected layout
- No broken images or missing icons

**Success Criteria**:
- All 7 elements are present and visible
- Page loads within 3 seconds
- No console errors

---

### Test 1.2: Input Field Default States
**Title**: Verify input fields are in correct default state

**Steps**:
1. Navigate to https://facebook.com
2. Check email/phone input field:
   - Field is empty
   - Placeholder text is visible ("Email or phone number")
   - Field is editable
   - No pre-filled values
3. Check password input field:
   - Field is empty
   - Placeholder text is visible ("Password")
   - Field is editable
   - Characters are masked (••••••)
   - No pre-filled values

**Expected Outcome**:
- Both fields are empty on page load
- Placeholder text is visible in both fields
- Password field masks input characters
- Fields accept keyboard input

**Success Criteria**:
- Fields are empty and editable
- Placeholder text displays correctly
- Password masking works immediately

---

### Test 1.3: Button Default States
**Title**: Verify button states on page load

**Steps**:
1. Navigate to https://facebook.com
2. Check Login button:
   - Button is visible
   - Button is disabled or enabled based on validation rules
   - Button text reads "Log In"
   - Button has correct styling (blue background typically)
3. Check "Create new account" button:
   - Button is visible
   - Button is enabled
   - Button has green background (typically)

**Expected Outcome**:
- Login button is in expected state (enabled/disabled based on implementation)
- Create account button is enabled
- Buttons have correct colors and styling

**Success Criteria**:
- Buttons render with correct colors
- Buttons are in correct enabled/disabled state
- Button text is accurate

---

### Test 1.4: Link Default States
**Title**: Verify navigation links are functional

**Steps**:
1. Navigate to https://facebook.com
2. Check "Forgot password?" link:
   - Link is visible
   - Link is clickable
   - Link has correct hover state
3. Check footer links (if present):
   - "About"
   - "Create ad"
   - "Create Page"
   - "Developers"
   - "Careers"
   - "Privacy"
   - "Cookies"
   - "Terms"

**Expected Outcome**:
- All links are visible and clickable
- Links have appropriate hover effects
- Links navigate to correct destinations

**Success Criteria**:
- All links respond to hover
- Links are not broken
- Navigation works correctly

---

## 2. State Change Tests for Invalid Inputs

### Test 2.1: Empty Field Validation
**Title**: Verify validation when fields are left empty

**Steps**:
1. Navigate to https://facebook.com
2. Leave email field empty
3. Leave password field empty
4. Click Login button
5. Observe button state and error messages

**Expected Outcome**:
- Login button may be disabled if client-side validation exists
- If button is clickable, error message appears
- Error message indicates required fields
- Fields may highlight in red

**Success Criteria**:
- Appropriate error message displayed
- User cannot proceed with empty fields
- Visual feedback indicates error state

---

### Test 2.2: Invalid Email Format
**Title**: Verify validation for invalid email formats

**Steps**:
1. Navigate to https://facebook.com
2. Enter invalid email formats in email field:
   - "invalid" (no @ symbol)
   - "@invalid.com" (no username)
   - "invalid@" (no domain)
   - "invalid@.com" (invalid domain)
   - " " (only spaces)
   - Special characters only: "!@#$%"
3. Enter any password
4. Click Login button
5. Observe validation feedback

**Expected Outcome**:
- Real-time validation may trigger as user types
- Error message indicates invalid email format
- Field may highlight in red
- Login submission is blocked or returns error

**Success Criteria**:
- Invalid formats are rejected
- Clear error message provided
- User cannot submit with invalid email

---

### Test 2.3: Invalid Phone Format
**Title**: Verify validation for invalid phone number formats

**Steps**:
1. Navigate to https://facebook.com
2. Enter invalid phone formats:
   - "123" (too short)
   - "abcdefghij" (letters only)
   - "!@#$%^&*()" (special characters)
   - " " (spaces only)
3. Enter any password
4. Click Login button
5. Observe validation feedback

**Expected Outcome**:
- Invalid phone formats are rejected
- Error message indicates invalid phone number
- Field highlights in red if invalid

**Success Criteria**:
- Phone validation works correctly
- Clear error messages provided
- User guided to correct format

---

### Test 2.4: Empty Password Field
**Title**: Verify validation when password is empty

**Steps**:
1. Navigate to https://facebook.com
2. Enter valid email or phone number
3. Leave password field empty
4. Click Login button
5. Observe error message

**Expected Outcome**:
- Error message indicates password is required
- Password field may highlight in red
- Login is prevented

**Success Criteria**:
- Password requirement enforced
- Clear error message displayed
- User cannot proceed without password

---

### Test 2.5: Short Password Validation
**Title**: Verify validation for passwords that are too short

**Steps**:
1. Navigate to https://facebook.com
2. Enter valid email or phone number
3. Enter short password (1-5 characters)
4. Click Login button
5. Observe validation feedback

**Expected Outcome**:
- May show warning about short password
- Or may allow submission and fail server-side
- Error message indicates password is incorrect

**Success Criteria**:
- Appropriate validation feedback
- User informed of password requirements

---

### Test 2.6: Whitespace-Only Inputs
**Title**: Verify validation for whitespace-only inputs

**Steps**:
1. Navigate to https://facebook.com
2. Enter only spaces in email field: "     "
3. Enter only spaces in password field: "     "
4. Click Login button
5. Observe validation

**Expected Outcome**:
- Whitespace-only inputs are treated as empty
- Error message indicates required fields
- Fields highlight as invalid

**Success Criteria**:
- Whitespace inputs rejected
- Clear error message provided

---

### Test 2.7: Field Focus States
**Title**: Verify field focus and blur states

**Steps**:
1. Navigate to https://facebook.com
2. Click on email field
3. Verify focus state (border color change, outline)
4. Click outside field (blur)
5. Verify field returns to normal state
6. Repeat for password field
7. Tab between fields and verify focus order

**Expected Outcome**:
- Fields show clear visual feedback on focus
- Focus order is logical (email → password → login)
- Blur state returns to normal appearance

**Success Criteria**:
- Focus indicators are visible
- Tab navigation works correctly
- Visual states change appropriately

---

## 3. Error Message Validation Tests

### Test 3.1: Invalid Credentials Error
**Title**: Verify error message for incorrect email/phone and password combination

**Steps**:
1. Navigate to https://facebook.com
2. Enter valid email format: "test@example.com"
3. Enter incorrect password: "wrongpassword123"
4. Click Login button
5. Observe error message

**Expected Outcome**:
- Error message appears: "The password you've entered is incorrect. Forgotten password?" or similar
- Error message is clearly visible
- Fields may remain populated for correction
- Error message is dismissible or auto-dismisses

**Success Criteria**:
- Error message is accurate and helpful
- User can retry after seeing error
- Error message doesn't persist inappropriately

---

### Test 3.2: Non-Existent Account Error
**Title**: Verify error message for email/phone not associated with any account

**Steps**:
1. Navigate to https://facebook.com
2. Enter email that doesn't exist: "nonexistent12345@example.com"
3. Enter any password
4. Click Login button
5. Observe error message

**Expected Outcome**:
- Error message indicates account not found
- Message may suggest creating an account
- Error is clear and actionable

**Success Criteria**:
- Appropriate error message displayed
- User guided to next steps (create account)
- No security-sensitive information leaked

---

### Test 3.3: Account Disabled/Locked Error
**Title**: Verify error message for disabled or locked accounts

**Steps**:
1. Navigate to https://facebook.com
2. Enter email of disabled/locked account (if available for testing)
3. Enter correct password
4. Click Login button
5. Observe error message

**Expected Outcome**:
- Error message indicates account is disabled or temporarily locked
- Message may provide steps to unlock
- Error is clear and not confusing

**Success Criteria**:
- Clear error message provided
- Recovery steps suggested
- No misleading information

---

### Test 3.4: Too Many Failed Attempts
**Title**: Verify error handling after multiple failed login attempts

**Steps**:
1. Navigate to https://facebook.com
2. Enter invalid credentials
3. Click Login button
4. Repeat steps 2-3 for 5-10 times
5. Observe if rate limiting or CAPTCHA appears
6. Note any error message changes

**Expected Outcome**:
- After several attempts, may show CAPTCHA
- May temporarily block login attempts
- Error message may change to indicate too many attempts
- May suggest waiting before retrying

**Success Criteria**:
- Rate limiting protects against brute force
- Clear message when blocked
- CAPTCHA appears when appropriate
- User can recover after waiting

---

### Test 3.5: Error Message Styling and Positioning
**Title**: Verify error messages are properly styled and positioned

**Steps**:
1. Trigger various error messages (empty fields, invalid credentials, etc.)
2. Verify error message:
   - Is clearly visible (red text or background)
   - Is positioned near the relevant field
   - Has appropriate contrast
   - Is readable on all screen sizes
   - Dismisses appropriately

**Expected Outcome**:
- Error messages are visually distinct
- Messages are positioned logically
- Styling is consistent across error types
- Messages are accessible (screen reader compatible)

**Success Criteria**:
- All error messages follow consistent styling
- Messages are clearly visible
- Positioning is intuitive
- Accessibility standards met

---

### Test 3.6: Error Message Dismissal
**Title**: Verify error messages dismiss correctly

**Steps**:
1. Trigger an error message
2. Start typing in the field
3. Verify if error message dismisses
4. Click outside the field
5. Verify error message state
6. Correct the error and verify message dismissal

**Expected Outcome**:
- Error message dismisses when user starts correcting
- Or message dismisses on successful correction
- Message doesn't persist inappropriately

**Success Criteria**:
- Error messages dismiss at appropriate times
- User experience is not cluttered with old errors
- Dismissal behavior is consistent

---

## 4. Valid Input and Successful Login Tests

### Test 4.1: Valid Email and Password Login
**Title**: Verify successful login with valid email and password

**Steps**:
1. Navigate to https://facebook.com
2. Enter valid registered email: [use test account]
3. Enter correct password for that account
4. Click Login button
5. Observe navigation and page load

**Expected Outcome**:
- User is redirected to home page or profile
- Login is successful
- User session is established
- No error messages displayed

**Success Criteria**:
- Successful login completes
- Redirect to expected page
- User authenticated correctly
- Session cookies set

---

### Test 4.2: Valid Phone Number and Password Login
**Title**: Verify successful login with valid phone number and password

**Steps**:
1. Navigate to https://facebook.com
2. Enter valid registered phone number
3. Enter correct password for that account
4. Click Login button
5. Observe navigation and page load

**Expected Outcome**:
- User is redirected to home page or profile
- Login is successful
- Phone number accepted as valid identifier

**Success Criteria**:
- Phone number login works
- Redirect to expected page
- User authenticated correctly

---

### Test 4.3: Remember Me Functionality
**Title**: Verify "Remember me" or persistent login functionality

**Steps**:
1. Navigate to https://facebook.com
2. Enter valid credentials
3. Check "Remember me" checkbox if present
4. Click Login button
5. Close browser
6. Reopen browser and navigate to facebook.com
7. Verify if user remains logged in

**Expected Outcome**:
- If "Remember me" checked: user stays logged in
- If not checked: user must log in again
- Session persistence works as expected

**Success Criteria**:
- Remember me functionality works correctly
- Session persistence is predictable
- User can control session duration

---

### Test 4.4: Login Button State Change
**Title**: Verify login button state changes during valid input

**Steps**:
1. Navigate to https://facebook.com
2. Start typing valid email
3. Observe login button state (may enable)
4. Start typing valid password
5. Observe login button state
6. Verify button is clickable when both fields have valid input

**Expected Outcome**:
- Button may enable when fields have valid input
- Button provides visual feedback
- Button is clickable when ready

**Success Criteria**:
- Button state reflects form validity
- Visual feedback is clear
- User knows when form can be submitted

---

### Test 4.5: Enter Key Submission
**Title**: Verify form submission with Enter key

**Steps**:
1. Navigate to https://facebook.com
2. Enter valid email
3. Enter valid password
4. Press Enter key in password field
5. Observe if form submits

**Expected Outcome**:
- Form submits on Enter key press
- Login attempt is made
- Behavior matches clicking Login button

**Success Criteria**:
- Enter key submits form
- No need to click button
- Standard form behavior

---

### Test 4.6: Password Visibility Toggle
**Title**: Verify password show/hide functionality if available

**Steps**:
1. Navigate to https://facebook.com
2. Enter password
3. Click eye icon or visibility toggle if present
4. Verify password becomes visible
5. Click toggle again
6. Verify password is masked again

**Expected Outcome**:
- Password toggles between visible and masked
- Toggle icon changes state
- User can verify password before submission

**Success Criteria**:
- Toggle works correctly
- Visibility state is clear
- Icon indicates current state

---

### Test 4.7: Successful Login Redirect
**Title**: Verify redirect destination after successful login

**Steps**:
1. Navigate to https://facebook.com
2. Enter valid credentials
3. Click Login button
4. Observe redirect destination
5. Verify URL changes to expected page

**Expected Outcome**:
- Redirect to home feed or profile page
- URL changes appropriately
- Page loads completely
- User is authenticated

**Success Criteria**:
- Correct redirect destination
- Smooth transition
- No intermediate errors

---

## 5. Additional Edge Cases

### Test 5.1: Copy/Paste in Fields
**Title**: Verify copy/paste functionality in input fields

**Steps**:
1. Navigate to https://facebook.com
2. Copy email from clipboard
3. Paste into email field
4. Copy password from clipboard
5. Paste into password field
6. Verify pasted content is correct

**Expected Outcome**:
- Copy/paste works in both fields
- Pasted content is accurate
- No formatting issues

**Success Criteria**:
- Paste functionality works
- Content is preserved correctly

---

### Test 5.2: Special Characters in Password
**Title**: Verify passwords with special characters are accepted

**Steps**:
1. Navigate to https://facebook.com
2. Enter valid email
3. Enter password with special characters: "P@ssw0rd!#$%"
4. Click Login button
5. Verify special characters are accepted

**Expected Outcome**:
- Special characters in password are accepted
- No validation errors for special characters
- Login attempt proceeds normally

**Success Criteria**:
- Special characters handled correctly
- No unexpected errors
- Password complexity supported

---

### Test 5.3: Very Long Inputs
**Title**: Verify handling of very long input strings

**Steps**:
1. Navigate to https://facebook.com
2. Enter very long email (200+ characters)
3. Enter very long password (200+ characters)
4. Click Login button
5. Observe behavior

**Expected Outcome**:
- Either truncates to max length
- Or rejects with error message
- Or accepts and processes normally
- No application crash or hang

**Success Criteria**:
- Graceful handling of long inputs
- Clear error if rejected
- No performance issues

---

### Test 5.4: Browser Back Button After Failed Login
**Title**: Verify browser back button behavior after failed login

**Steps**:
1. Navigate to https://facebook.com
2. Enter invalid credentials
3. Click Login button
4. Observe error message
5. Click browser back button
6. Verify page state

**Expected Outcome**:
- May return to login page
- Form may be cleared or retain values
- Error message may persist or clear
- Behavior is consistent

**Success Criteria**:
- Back button works predictably
- No unexpected page states
- User can navigate back safely

---

### Test 5.5: Page Refresh During Login
**Title**: Verify behavior when page is refreshed during login

**Steps**:
1. Navigate to https://facebook.com
2. Enter partial information (email only)
3. Refresh page (F5 or Ctrl+R)
4. Verify form state

**Expected Outcome**:
- Form may be cleared
- Or values may be retained (if browser autofill)
- No errors or crashes
- Page loads correctly

**Success Criteria**:
- Refresh handled gracefully
- Form state is predictable
- No data loss issues

---

## 6. Accessibility Tests

### Test 6.1: Keyboard Navigation
**Title**: Verify full keyboard navigation support

**Steps**:
1. Navigate to https://facebook.com
2. Use Tab key to navigate through all elements
3. Verify focus order: email → password → login → forgot password → create account
4. Use Enter/Space to activate buttons
5. Use Shift+Tab for reverse navigation

**Expected Outcome**:
- All interactive elements are keyboard accessible
- Focus order is logical
- Visual focus indicators are clear
- All actions can be performed via keyboard

**Success Criteria**:
- Full keyboard navigation works
- Focus indicators visible
- Logical tab order

---

### Test 6.2: Screen Reader Compatibility
**Title**: Verify screen reader announces elements correctly

**Steps**:
1. Enable screen reader (NVDA, JAWS, or VoiceOver)
2. Navigate to https://facebook.com
3. Verify screen reader announces:
   - Form labels
   - Input field purposes
   - Button labels
   - Error messages
   - Link destinations

**Expected Outcome**:
- All elements have proper ARIA labels
- Screen reader announces meaningful information
- Error messages are announced
- Form structure is clear

**Success Criteria**:
- Screen reader compatible
- Proper labels present
- Meaningful announcements

---

### Test 6.3: Color Contrast
**Title**: Verify color contrast meets accessibility standards

**Steps**:
1. Navigate to https://facebook.com
2. Check color contrast of:
   - Text on buttons
   - Placeholder text
   - Error messages
   - Link text
3. Use contrast checker tool
4. Verify WCAG AA compliance (4.5:1 for normal text)

**Expected Outcome**:
- All text meets contrast requirements
- Error messages are clearly visible
- No low-contrast issues

**Success Criteria**:
- WCAG AA compliant
- Text is readable
- No accessibility violations

---

## 7. Cross-Browser and Responsive Tests

### Test 7.1: Chrome Browser
**Title**: Verify login page works correctly in Chrome

**Steps**:
1. Open Chrome browser
2. Navigate to https://facebook.com
3. Perform all critical test scenarios:
   - Valid login
   - Invalid credentials
   - Empty field validation
   - Error messages

**Expected Outcome**:
- All functionality works in Chrome
- No browser-specific issues
- Rendering is correct

**Success Criteria**:
- Chrome compatibility verified
- All tests pass

---

### Test 7.2: Firefox Browser
**Title**: Verify login page works correctly in Firefox

**Steps**:
1. Open Firefox browser
2. Navigate to https://facebook.com
3. Perform all critical test scenarios

**Expected Outcome**:
- All functionality works in Firefox
- No browser-specific issues
- Rendering is correct

**Success Criteria**:
- Firefox compatibility verified
- All tests pass

---

### Test 7.3: Mobile Responsive Design
**Title**: Verify login page is responsive on mobile devices

**Steps**:
1. Use browser dev tools to simulate mobile viewports
2. Test at various screen sizes:
   - iPhone SE (375x667)
   - iPhone 12 Pro (390x844)
   - Pixel 5 (393x851)
   - iPad (768x1024)
3. Verify:
   - Elements are properly sized
   - Text is readable
   - Buttons are tappable
   - No horizontal scrolling
   - Layout adapts correctly

**Expected Outcome**:
- Page is fully responsive
- All elements accessible on mobile
- Touch targets are adequate (min 44x44px)
- No layout breaks

**Success Criteria**:
- Responsive design works
- Mobile-friendly
- No horizontal scroll
- Touch targets adequate

---

## 8. Security Tests

### Test 8.1: Password Masking
**Title**: Verify password is always masked in input field

**Steps**:
1. Navigate to https://facebook.com
2. Type password
3. Verify characters appear as bullets or dots
4. Copy password from field
5. Paste to notepad
6. Verify pasted content is masked or empty

**Expected Outcome**:
- Password is always masked visually
- Cannot copy masked password
- Clipboard doesn't contain plain text password

**Success Criteria**:
- Password never visible in plain text
- Copy protection works
- Security maintained

---

### Test 8.2: Autocomplete Prevention
**Title**: Verify autocomplete behavior for password field

**Steps**:
1. Navigate to https://facebook.com
2. Check if password field has autocomplete="off" or similar
3. Test browser password manager behavior
4. Verify if browser offers to save password

**Expected Outcome**:
- Password field may have autocomplete disabled
- Or may allow password manager (user choice)
- Security settings are appropriate

**Success Criteria**:
- Autocomplete behavior is intentional
- Security not compromised
- User experience balanced

---

### Test 8.3: SSL/TLS Certificate
**Title**: Verify page is served over HTTPS

**Steps**:
1. Navigate to https://facebook.com
2. Check browser address bar
3. Verify padlock icon is present
4. Click padlock to view certificate
5. Verify certificate is valid

**Expected Outcome**:
- Page loads over HTTPS
- Valid SSL certificate
- No certificate warnings
- Connection is secure

**Success Criteria**:
- HTTPS enforced
- Valid certificate
- Secure connection

---

## Test Execution Priority

### High Priority (Must Pass)
- Test 1.1: Page Load and Element Visibility
- Test 1.2: Input Field Default States
- Test 2.1: Empty Field Validation
- Test 3.1: Invalid Credentials Error
- Test 4.1: Valid Email and Password Login
- Test 8.3: SSL/TLS Certificate

### Medium Priority (Should Pass)
- Test 1.3: Button Default States
- Test 2.2: Invalid Email Format
- Test 2.4: Empty Password Field
- Test 3.2: Non-Existent Account Error
- Test 4.2: Valid Phone Number and Password Login
- Test 4.5: Enter Key Submission
- Test 6.1: Keyboard Navigation
- Test 7.1: Chrome Browser

### Low Priority (Nice to Have)
- Test 1.4: Link Default States
- Test 2.3: Invalid Phone Format
- Test 3.4: Too Many Failed Attempts
- Test 4.3: Remember Me Functionality
- Test 5.1-5.5: Edge Cases
- Test 6.2-6.3: Accessibility
- Test 7.2-7.3: Cross-Browser and Responsive

## Assumptions
- Test account with valid credentials is available for testing
- Facebook login page structure remains consistent during testing
- No major UI changes occur during test execution
- Testing environment has stable internet connection
- Browser pop-up blockers are disabled for testing

## Success Criteria Summary
- All high-priority tests pass
- No critical bugs blocking login functionality
- Error messages are clear and helpful
- UI elements are accessible and responsive
- Security measures are in place and working
