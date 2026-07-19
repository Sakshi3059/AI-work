# Skill: Test Case Generation

## Objective

Generate high-quality UI manual test cases from the analyzed feature.

Generate only meaningful test cases.

Avoid unnecessary or duplicate test cases.

---

# Testing Categories

Generate test cases only under the following categories.

1. Default State & Visibility

2. State Change

3. Boundary Value Analysis

4. Error Scenarios

5. Positive Scenarios

Do not create additional categories.

---

# Category Guidelines

## Default State & Visibility

Validate

- Element visibility
- Label text (extracted from screenshots/Figma)
- Button text (extracted from screenshots/Figma)
- Placeholder text (extracted from screenshots/Figma)
- Default value
- Default selection
- Disabled state
- Read-only state
- Required indicator
- Icons
- Tooltips
- Spellings

---

## State Change

Validate UI behaviour after user interaction.

Examples

- Dropdown selection
- Radio selection
- Checkbox selection
- Toggle switch
- Button enable/disable
- Dynamic visibility
- Value update
- Navigation
- Expand / Collapse

---

## Boundary Value Analysis

Generate only when boundaries are available.

Examples

Minimum

Maximum

Minimum - 1

Maximum + 1

Empty value

Maximum length

Minimum length

Valid boundary

Invalid boundary

Never invent boundaries.

---

## Error Scenarios

Generate negative test cases.

Examples

Unsupported characters

Mandatory validation

Invalid format

Invalid range

Duplicate value

Invalid date

Unsupported file

Invalid selection

---

## Positive Scenarios

Generate happy path scenarios.

Examples

Valid input

Valid selection

Successful save

Successful search

Successful navigation

Successful update

Data retention

---

# Test Case Naming

Every testcase title MUST follow

Validate <Expected Result> when <Condition or Action>

Examples

Validate Username field is visible when Login page loads

Validate Login button is enabled when mandatory fields are populated

Validate validation message is displayed when Username is empty

Validate Country dropdown value is updated when a different option is selected

Never use

Verify

Check

Test

Validate Login

Login Validation

---

# Description

Description should explain

- Objective of validation

- Important business rule

- Input condition

Maximum 2-3 lines.

---

# Precondition

Only include required setup.

Examples

Navigate to Login page.

User is logged in.

Record exists.

Application is launched.

---

# Test Steps

Generate numbered manual steps.

Each step should contain one action only.

Good

1. Navigate to Login page.

2. Enter valid Username.

3. Enter valid Password.

4. Click Login.

Bad

Enter Username and Password then click Login.

---

# Expected Result

Every step should have a matching validation.

Example

Step

Enter Username.

Expected

Username is accepted.

---

Step

Click Login.

Expected

Dashboard page is displayed.

---

Never write

Works correctly

Expected behaviour

Application behaves correctly

Validation succeeds

---

# Priority

Assign

High

Medium

Low

Suggested rules

High

Critical business flow

Mandatory field

Navigation

Core functionality

Medium

Validation

Boundary

Negative

Low

Visual

Optional field

Informational

---

# Coverage Rules

Every editable field should have

✓ Default State

✓ Positive

✓ Error

✓ Boundary (if applicable)

Every interactive control should have

✓ State Change

Every button should have

✓ Default

✓ State Change

✓ Positive

Every navigation action should have

✓ Positive

✓ Error (if applicable)

---

# Duplication Rules

Do not generate duplicate test cases.

Merge similar scenarios.

One validation = One testcase.

---

# Assumptions

If business information is missing

Document assumptions separately.

Do not invent business rules.

---

# Output Format

Generate every testcase using the following format.

--------------------------------------------------

Name:

Description:

Priority:

Category:

Steps:

1.

2.

3.

Expected Result:

1.

2.

3.

--------------------------------------------------

Repeat for every testcase.

This format is mandatory because it will be parsed by the CSV and HTML exporters.