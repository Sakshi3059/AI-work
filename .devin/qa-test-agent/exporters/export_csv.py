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
            "Feature": r"Feature:\s*(.*?)\n(?=\w|$)",
            "Category": r"Category:\s*(.*?)\n(?=\w|$)",
            "Test Case Name": r"Test Case Name:\s*(.*?)\n(?=\w|$)",
            "Description": r"Description:\s*(.*?)\n(?=Precondition:)",
            "Precondition": r"Precondition:\s*(.*?)\n(?=Priority:)",
            "Priority": r"Priority:\s*(.*?)\n(?=Test Steps:)",
            "Test Steps": r"Test Steps:\s*(.*?)\n(?=Expected Result:)",
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


def create_html(testcases):

    OUTPUT_DIR.mkdir(exist_ok=True)

    feature = testcases[0]["Feature"].lower().replace(" ", "-")

    outfile = OUTPUT_DIR / f"{feature}-test-cases.html"

    categories = sorted(set(tc["Category"] for tc in testcases))
    priorities = sorted(set(tc["Priority"] for tc in testcases))

    category_options = "".join(
        f'<option value="{c}">{c}</option>' for c in categories
    )

    priority_options = "".join(
        f'<option value="{p}">{p}</option>' for p in priorities
    )

    html = f"""
<!DOCTYPE html>

<html>

<head>

<meta charset="utf-8">

<title>{feature} Test Cases</title>

<style>

body {{
font-family: Arial;
margin:40px;
background:#f4f4f4;
}}

.card {{
background:white;
border-radius:8px;
padding:20px;
margin-bottom:20px;
box-shadow:0 0 6px rgba(0,0,0,.15);
}}

.header {{
cursor:pointer;
}}

.body {{
display:none;
margin-top:15px;
}}

pre {{
white-space:pre-wrap;
}}

input,select {{
padding:8px;
margin-right:10px;
margin-bottom:20px;
}}

</style>

<script>

function toggle(id){{
var x=document.getElementById(id);

if(x.style.display=="block")
x.style.display="none";

else
x.style.display="block";
}}

function filterCards(){{

let text=document.getElementById("search").value.toLowerCase();

let cat=document.getElementById("category").value;

let pri=document.getElementById("priority").value;

let cards=document.getElementsByClassName("card");

for(let c of cards){{

let show=true;

let title=c.innerText.toLowerCase();

if(text && !title.includes(text))
show=false;

if(cat && c.dataset.category!=cat)
show=false;

if(pri && c.dataset.priority!=pri)
show=false;

c.style.display=show?"block":"none";

}}

}}

</script>

</head>

<body>

<h1>{testcases[0]["Feature"]} Test Cases</h1>

{build_summary(testcases)}

<input
id="search"
placeholder="Search..."
onkeyup="filterCards()">

<select
id="category"
onchange="filterCards()">

<option value="">All Categories</option>

{category_options}

</select>

<select
id="priority"
onchange="filterCards()">

<option value="">All Priorities</option>

{priority_options}

</select>

{generate_cards(testcases)}

</body>

</html>
"""

    outfile.write_text(html, encoding="utf-8")

    print(f"HTML Generated : {outfile}")

    if TEMP_FILE.exists():
        os.remove(TEMP_FILE)
        print("Temporary file removed.")


def main():

    testcases = parse_test_cases(TEMP_FILE)

    create_html(testcases)


if __name__ == "__main__":
    main()