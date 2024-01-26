// Add the HTML
document.getElementById("income-div").innerHTML = document.getElementById("income-div").innerHTML = document.getElementById("income-div").innerHTML +
`<div class="salary-asset-div" id="salary-div">
<h1 id="salaries-display">
    Salaries
    <ul id="salaries-list"></ul>
</h1>
<div class="break"></div>
<form id="salaries-form">
    <label for="salary-input">Job: </label>
    <input type="text" id="salary-input" autocomplete="off" />
    <div class="break"></div>
    <label for="salary-cost-input">Income (per year): </label>
    <input type="number" id="salary-cost-input" autocomplete="off" />
    <div class="break"></div>
    <input type="submit" id="salary-add-button" value="Add" />
</form>
<h2 id="total-salary-cost"></h2>
</div>`;

window.addEventListener("DOMContentLoaded", function() {
    // Get the HTML elements that are needed
    const salariesListElement = this.document.getElementById("salaries-list");
    const salariesForm = this.document.getElementById("salaries-form");
    const salaryInput = this.document.getElementById("salary-input");
    const salaryCostInput = this.document.getElementById("salary-cost-input");
    const totalsalaryCost = this.document.getElementById("total-salary-cost");

    // We will be using the tilde(~) to separate the name and cost.

    let salariesList = new Array();
    let totalCost = 0;

    if (this.localStorage.getItem("salaries")) { // If the user has added salaries yet...
        salariesList = JSON.parse(this.localStorage.getItem("salaries")); // Make a local list and parse the stringified localStorage list.
        for (salary in salariesList) {
            let salaryElement = document.createElement("li");
            // Get the salary and make the cost be green with a $ in front.
            salaryElement.innerHTML = salariesList[salary].replaceAll("~", " <span style='color: green;'>$<span class='formatted-num'>") + "</span></span>";
            totalCost += salariesList[salary].split("~").slice(1) * 1;

            // Add the list item
            salariesListElement.appendChild(salaryElement);
        }

        // The function that formats the prices is in wants.js.

    } else {
        totalCost = 0;
    }

    totalsalaryCost.innerHTML = "Total: $" + totalCost.toLocaleString("en-us") + "/year";
    localStorage.setItem("salaryTotalCost", totalCost);

    salariesForm.addEventListener("submit", function(event) { // When the form is submitted...
        event.preventDefault();

        if (salaryInput.value !== "" && salaryCostInput.value !== "") { // If neither input is empty...
             // Add to the local list
            salariesList.push(salaryInput.value + "~" + salaryCostInput.value);

            let salaryElement = document.createElement("li");
            // Put the title in the list item (this will be sliced later)
            salaryElement.innerHTML = salaryInput.value + "~" + salaryCostInput.value;

            salariesListElement.appendChild(salaryElement);

            // Add to the localStorage list
            localStorage.setItem("salaries", JSON.stringify(salariesList));

            location.reload();
        }
    });
});