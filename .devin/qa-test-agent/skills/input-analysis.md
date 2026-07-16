# Skill: Input Analysis

## Objective

Analyze all available inputs and build a complete understanding of the feature before generating test cases.

Do NOT generate test cases.

Only identify what should be tested.

---

# Supported Inputs

The agent may receive one or more of the following.

• Figma (via MCP)

• Screenshot(s)

• Feature Description

• User Story

• Acceptance Criteria

• Business Rules

• Additional User Notes

Combine information from every source.

---

# Reading Input Files

## Feature Requirements

When requirement files are provided:
```
Read the requirement file from: feature-spec/<FeatureName>/requirements/<file-name>.txt
Use read_file tool with the absolute path to the requirement file
Example: feature-spec/Login/requirements/login-page.txt
```

## Screenshots

When screenshot files are provided:
```
Read screenshot files from: feature-spec/<FeatureName>/screen-shots/
Use read_file tool with the absolute path to each screenshot file
Supported formats: .png, .jpg, .jpeg, .gif, .webp, .svg
Example: feature-spec/Login/screen-shots/login-page.png
```

---

# Source Priority

When conflicting information exists use

1. Feature Requirements

2. Acceptance Criteria

3. Figma

4. Screenshot

If conflict still exists

Report it as an assumption.

---

# Figma Analysis

When Figma MCP is available:

## Invoke Figma MCP

Use the MCP server to access Figma data:

**To list available Figma resources:**
```
Call list_resources with ServerName="figma"
```

**To read a Figma file:**
```
Call read_resource with ServerName="figma" and Uri="figma://file/<file_key>"
```

**To read a specific Figma page:**
```
Call read_resource with ServerName="figma" and Uri="figma://page/<file_key>/<page_id>"
```

**URI Patterns:**
- File: `figma://file/{file_key}` where file_key is from Figma URL (e.g., ABC123)
- Page: `figma://page/{file_key}/{page_id}` where page_id is from Figma node structure

## Extract from Figma Data

## Page Information

- Page Name
- Feature Name
- Frame Name

## Components

Identify every visible component.

Examples

- Label
- Textbox
- Password
- Number Input
- Dropdown
- Date Picker
- Checkbox
- Radio Button
- Toggle
- Button
- Hyperlink
- Table
- Card
- Dialog
- Toast
- Tabs
- Search Field
- Text Area
- File Upload

## Component Details

Extract whenever available

- Label
- Placeholder
- Tooltip
- Default Value
- Required Indicator
- Read Only
- Disabled State
- Hidden State
- Variants
- Helper Text
- Error Text

## Navigation

Identify

- Navigation Targets
- Dialogs
- Popups
- Expand/Collapse
- Dynamic Sections

---

# Screenshot Analysis

Use screenshots only to verify visible implementation.

Identify

- Visible controls

- Default selections

- Text

- Labels

- Alignment issues

- Missing elements

- Spelling issues

Never infer hidden behaviour from screenshots.

---

# Requirement Analysis

Extract

## Feature Objective

What business problem is being solved?

## Exit Criteria

What defines successful completion?

## Business Rules

Examples

Allowed characters

Minimum Length

Maximum Length

Mandatory fields

Disabled conditions

Visibility rules

Validation rules

Navigation rules

## Out Of Scope

Examples

Session timeout

Performance

API

Notifications

MFA

Password reset

These should NOT generate test cases.

---

# Identify User Actions

List every possible interaction.

Examples

Enter text

Clear field

Select dropdown

Click button

Upload file

Toggle checkbox

Select radio button

Navigate

Cancel

Save

Delete

Search

Filter

Sort

---

# Identify Validations

Identify

Input validation

Mandatory validation

Business validation

State validation

Navigation validation

Visual validation

---

# Deliver To Next Skill

Pass

- Feature Name

- Exit Criteria

- User Actions

- UI Components

- Validations

- Business Rules

- Assumptions

Do not generate test cases.

Only provide analysis.