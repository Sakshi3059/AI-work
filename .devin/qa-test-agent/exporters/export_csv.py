import os
import re
from pathlib import Path

TEMP_FILE = Path("temp/generated-test-cases.md")
OUTPUT_DIR = Path("output")


def parse_test_cases(file_path):
    if not file_path.exists():
        raise FileNotFoundError(file_path)

    text = file_path.read_text(encoding="utf-8")

    blocks = re.split(r"=+\n", text)

    testcases = []

    for block in blocks:

        block = block.strip()

        if not block:
            continue

        tc = {}

        patterns = {
            "Name": r"Name:\s*(.*?)\n(?=\w|$)",
            "Description": r"Description:\s*(.*?)\n(?=Priority:)",
            "Priority": r"Priority:\s*(.*?)\n(?=Category:)",
            "Category": r"Category:\s*(.*?)\n(?=Steps:)",
            "Steps": r"Steps:\s*(.*?)\n(?=Expected Result:)",
            "Expected Result": r"Expected Result:\s*(.*)",
        }

        for key, pattern in patterns.items():
            match = re.search(pattern, block, re.S)
            tc[key] = match.group(1).strip() if match else ""

        testcases.append(tc)

    return testcases


def build_summary(testcases):
    summary = {}

    for tc in testcases:
        category = tc["Category"]
        summary[category] = summary.get(category, 0) + 1

    html = f"<h2>Total Test Cases : {len(testcases)}</h2>"

    html += "<ul>"

    for k, v in summary.items():
        html += f"<li><b>{k}</b> : {v}</li>"

    html += "</ul>"

    return html


def generate_cards(testcases):

    cards = ""

    for index, tc in enumerate(testcases):

        cards += f"""
<div class="card"
     data-category="{tc['Category']}"
     data-priority="{tc['Priority']}">

<div class="header"
     onclick="toggle('body{index}')">

<h3>{tc['Feature']} : {tc['Test Case Name']}</h3>

<span>{tc['Category']} | {tc['Priority']}</span>

</div>

<div class="body" id="body{index}">

<h4>Description</h4>

<pre>{tc['Description']}</pre>

<h4>Precondition</h4>

<pre>{tc['Precondition']}</pre>

<h4>Steps</h4>

<pre>{tc['Test Steps']}</pre>

<h4>Expected Result</h4>

<pre>{tc['Expected Result']}</pre>

</div>

</div>

"""

    return cards


def create_csv(testcases):

    OUTPUT_DIR.mkdir(exist_ok=True)

    feature = testcases[0]["Name"].lower().replace(" ", "-")
    
    outfile = OUTPUT_DIR / f"{feature}-test-cases.csv"

    import csv

    with open(outfile, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f, quoting=csv.QUOTE_ALL)
        
        # Write header
        writer.writerow(["Name", "Description", "Priority", "Category", "Steps", "Expected Result"])
        
        # Write test cases with empty rows between them
        for tc in testcases:
            writer.writerow([
                tc["Name"],
                tc["Description"],
                tc["Priority"],
                tc["Category"],
                tc["Steps"],
                tc["Expected Result"]
            ])
            

    print(f"CSV Generated : {outfile}")

    if TEMP_FILE.exists():
        os.remove(TEMP_FILE)
        print("Temporary file removed.")


def main():

    testcases = parse_test_cases(TEMP_FILE)

    create_csv(testcases)


if __name__ == "__main__":
    main()