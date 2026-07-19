import csv
from pathlib import Path
from collections import Counter

OUTPUT_DIR = Path("output")


def generate_html():

    csv_file = next(OUTPUT_DIR.glob("*-test-cases.csv"), None)

    if csv_file is None:
        raise FileNotFoundError("No CSV found inside output folder.")

    rows = []

    with open(csv_file, encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)

        for row in reader:
            rows.append(row)

    categories = Counter()

    # Filter out empty rows from CSV
    rows = [row for row in rows if row.get("Name", "").strip()]
    
    total = len(rows)
    
    for row in rows:
        categories[row["Category"]] += 1

    options = ""

    for category in sorted(categories):
        options += f'<option value="{category}">{category}</option>\n'

    html = f"""
<!DOCTYPE html>
<html>

<head>

<meta charset="UTF-8">

<title>QA Test Cases</title>

<style>

body {{
    font-family: Arial;
    margin:30px;
}}

table {{
    border-collapse: collapse;
    width:100%;
}}

th {{
    background:#2f74c0;
    color:white;
}}

td,th {{
    border:1px solid #ddd;
    padding:8px;
    vertical-align:top;
}}

tbody tr {{
    border-bottom: 2px solid #000;
}}

tbody tr:last-child {{
    border-bottom: none;
}}

input,select {{
    padding:8px;
    margin-right:10px;
}}

.summary {{
    background:#f5f5f5;
    padding:15px;
    margin-bottom:20px;
}}

</style>

<script>

function filterTable(){{

let search=document.getElementById("search").value.toLowerCase();

let category=document.getElementById("category").value;

let rows=document.querySelectorAll("#tcTable tbody tr");

rows.forEach(function(row){{

let text=row.innerText.toLowerCase();

let cat=row.dataset.category;

let visible=true;

if(search && !text.includes(search))
    visible=false;

if(category && cat!=category)
    visible=false;

row.style.display=visible?"":"none";

}});

}}

</script>

</head>

<body>

<h1>Feature Test Cases</h1>

<div class="summary">

<h2>Total Test Cases : {total}</h2>

<ul>
"""

    for c, count in categories.items():
        html += f"<li>{c} : {count}</li>"

    html += f"""

</ul>

<input
id="search"
type="text"
placeholder="Search..."
onkeyup="filterTable()">

<select
id="category"
onchange="filterTable()">

<option value="">All Categories</option>

{options}

</select>

</div>

<table id="tcTable">

<thead>

<tr>

<th>Name</th>

<th>Description</th>

<th>Priority</th>

<th>Category</th>

<th>Steps</th>

<th>Expected Result</th>

</tr>

</thead>

<tbody>

"""

    for row in rows:

        html += f"""

<tr data-category="{row['Category']}">

<td>{row['Name']}</td>

<td>{row['Description']}</td>

<td>{row['Priority']}</td>

<td>{row['Category']}</td>

<td><pre>{row['Steps']}</pre></td>

<td><pre>{row['Expected Result']}</pre></td>

</tr>

"""

    html += """

</tbody>

</table>

</body>

</html>

"""

    feature_name = csv_file.stem.replace("-test-cases", "")

    output_file = OUTPUT_DIR / f"{feature_name}-test-cases.html"

    output_file.write_text(html, encoding="utf-8")

    print(f"Generated {output_file}")


if __name__ == "__main__":
    generate_html()