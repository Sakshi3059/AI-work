# Skill: Test Case Review

## Objective

Review all generated test cases before export.

Improve quality.

Remove duplicates.

Fix inconsistencies.

Do not create unnecessary new test cases.

---

# Review Checklist

Review every testcase independently.

Verify

✓ Category

✓ Test Case Name

✓ Description

✓ Precondition

✓ Priority

✓ Test Steps

✓ Expected Result

---

# Test Case Name

Every testcase MUST follow

Validate <Expected Result> when <Condition or Action>

Examples

✔ Validate Login button is disabled when Login page loads

✔ Validate Username accepts valid characters when supported values are entered

✔ Validate validation message is displayed when Username is empty

Reject

Verify Login

Check Username

Login Validation

Test Login

---

# Description

Verify

• Clearly explains objective

• Mentions important business rule if applicable

• Concise

• No duplicate information from title

---

# Preconditions

Verify

• Only setup activities are included

• No execution steps

• No expected results

---

# Test Steps

Verify

• Numbered correctly

• One action per step

• Logical execution order

• No validation statements

Reject

Enter Username and verify...

Click Login and Dashboard opens...

---

# Expected Results

Verify

• One expected result per step

• Observable

• Measurable

• Matches the corresponding step

Reject

Works correctly

Expected behaviour

Validation succeeds

Application behaves correctly

Replace with measurable outcomes.

---

# Priority

Allowed values

High

Medium

Low

No other values are permitted.

---

# Category Validation

Allowed values

Default State & Visibility

State Change

Boundary Value Analysis

Error Scenarios

Positive Scenarios

Reject any unknown category.

---

# Boundary Review

Only generate boundary tests when boundaries are defined.

If limits are not specified

Do not invent values.

---

# Duplicate Review

Remove duplicate

• Test Case Name

• Validation

• Intent

Retain the clearest version.

---

# Coverage Review

Verify every editable element has

✓ Default State

✓ Positive

✓ Error

✓ Boundary (if applicable)

Verify every interactive control has

✓ State Change

Only create missing tests if coverage is incomplete.

---

# Assumption Review

Verify assumptions

• Clearly documented

• Reasonable

• Do not replace business requirements

---

# Export Readiness

Before export verify

✓ No duplicate names

✓ No duplicate validations

✓ All mandatory sections exist

✓ Steps and Expected Results align

✓ Categories are valid

✓ Priority assigned

✓ Naming convention followed

✓ Ready for qTest import

If issues exist

Automatically repair them before export.