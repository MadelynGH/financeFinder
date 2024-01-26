// Add the HTML
document.getElementById("debt-div").innerHTML = document.getElementById("debt-div").innerHTML +
`<div class="need-want-div" id="need-div">
<h1 id="needs-display">
    Needs
    <ul id="needs-list"></ul>
</h1>
<div class="break"></div>
<form id="needs-form">
    <label for="need-input">Need: </label>
    <input type="text" id="need-input" autocomplete="off" />
    <div class="break"></div>
    <label for="need-cost-input">Cost (per year): </label>
    <input type="number" id="need-cost-input" autocomplete="off" />
    <div class="break"></div>
    <input type="submit" id="need-add-button" value="Add" />
</form>
<h2 id="total-need-cost"></h2>
</div>
<div class="break"></div>`;

window.addEventListener("DOMContentLoaded", function() {
    // Get the HTML elements that are needed
    const needsListElement = this.document.getElementById("needs-list");
    const needsForm = this.document.getElementById("needs-form");
    const needInput = this.document.getElementById("need-input");
    const needCostInput = this.document.getElementById("need-cost-input");
    const totalNeedCost = this.document.getElementById("total-need-cost");

    // We will be using the tilde(~) to separate the name and cost.

    let needsList = new Array();
    let totalCost = 0;

    if (this.localStorage.getItem("needs")) { // If the user has added needs yet...
        needsList = JSON.parse(this.localStorage.getItem("needs")); // Make a local list and parse the stringified localStorage list.
        for (need in needsList) {
            let needElement = document.createElement("li");
            // Get the need and make the cost be red with a $ in front.
            needElement.innerHTML = needsList[need].replaceAll("~", " <span style='color: red;'>$<span class='formatted-num'>") + "</span></span>";
            totalCost += needsList[need].split("~").slice(1) * 1;

            // Add the list item
            needsListElement.appendChild(needElement);
        }

        // The function that formats the prices is in wants.js.
    } else {
        totalCost = 0;
    }

    totalNeedCost.innerHTML = "Total: $" + totalCost.toLocaleString("en-us") + "/year";
    localStorage.setItem("needsTotalCost", totalCost);

    needsForm.addEventListener("submit", function(event) { // When the form is submitted...
        event.preventDefault();

        if (needInput.value !== "" && needCostInput.value !== "") { // If neither input is empty...
             // Add to the local list
            needsList.push(needInput.value + "~" + needCostInput.value);

            let needElement = document.createElement("li");
            // Put the title in the list item (this will be sliced later)
            needElement.innerHTML = needInput.value + "~" + needCostInput.value;

            needsListElement.appendChild(needElement);

            // Add to the localStorage list
            localStorage.setItem("needs", JSON.stringify(needsList));

            location.reload();
        }
    });
});