# Export

## Prerequisite Check

Verify Python is available on the system before proceeding.

Run: `python --version` or `python3 --version`

If Python is not available:
- Document the limitation to the user
- Manually create CSV and HTML files following the exporter script format
- Skip to Cleanup step

---

## Temporary File

Before export

Create

temp/generated-test-cases.md

Store all reviewed test cases using the standard format.

---

## CSV

If Python is available:

Run automatically without asking for permission:

python exporters/export_csv.py

Input

temp/generated-test-cases.md

Output

output/<feature-name>-test-cases.csv

If Python is not available:

Manually create CSV file with columns:
- Test Case Name
- Test Case Type (Category)
- Description
- Precondition
- Test Steps
- Expected Result
- Priority

Output

output/<feature-name>-test-cases.csv

---

## HTML

If Python is available:

Run automatically without asking for permission:

python exporters/export_html.py

Input

output/<feature-name>-test-cases.csv

Output

output/<feature-name>-test-cases.html

If Python is not available:

Manually create HTML file with:
- Summary section showing total test cases and category breakdown
- Search and filter functionality
- Table with all test cases
- Styling matching export_html.py format

Output

output/<feature-name>-test-cases.html

---

## Cleanup

After both exports complete successfully

Delete

temp/generated-test-cases.md

If export fails

Retain the temporary file for troubleshooting.

---

## Validation

Verify

✓ CSV created

✓ HTML created

✓ Temporary file deleted after successful export

Return export status.