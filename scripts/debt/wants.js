// Add the HTML
document.getElementById("debt-div").innerHTML = document.getElementById("debt-div").innerHTML = document.getElementById("debt-div").innerHTML +
`<div class="need-want-div" id="want-div">
<h1 id="wants-display">
    Wants
    <ul id="wants-list"></ul>
</h1>
<div class="break"></div>
<form id="wants-form">
    <label for="want-input">Want: </label>
    <input type="text" id="want-input" autocomplete="off" />
    <div class="break"></div>
    <label for="want-cost-input">Cost (one time): </label>
    <input type="number" id="want-cost-input" autocomplete="off" />
    <div class="break"></div>
    <input type="submit" id="want-add-button" value="Add" />
</form>
<h2 id="total-want-cost"></h2>
</div>`;

window.addEventListener("DOMContentLoaded", function() {
    // Get the HTML elements that are needed
    const wantsListElement = this.document.getElementById("wants-list");
    const wantsForm = this.document.getElementById("wants-form");
    const wantInput = this.document.getElementById("want-input");
    const wantCostInput = this.document.getElementById("want-cost-input");
    const totalWantCost = this.document.getElementById("total-want-cost");

    // We will be using the tilde(~) to separate the name and cost.

    let wantsList = new Array();
    let totalCost = 0;

    if (this.localStorage.getItem("wants")) { // If the user has added wants yet...
        wantsList = JSON.parse(this.localStorage.getItem("wants")); // Make a local list and parse the stringified localStorage list.
        for (want in wantsList) {
            let wantElement = document.createElement("li");
            // Get the want and make the cost be red with a $ in front.
            wantElement.innerHTML = wantsList[want].replaceAll("~", " <span style='color: red;'>$<span class='formatted-num'>") + "</span></span>";
            totalCost += wantsList[want].split("~").slice(1) * 1;

            // Add the list item
            wantsListElement.appendChild(wantElement);
        }
    } else {
        totalCost = 0;
    }

    totalWantCost.innerHTML = "Total: $" + totalCost.toLocaleString("en-us");
    localStorage.setItem("wantsTotalCost", totalCost);

    for (i in document.getElementsByClassName("formatted-num")) {
        let num = document.getElementsByClassName("formatted-num")[i].innerHTML * 1;
        document.getElementsByClassName("formatted-num")[i].innerHTML = num.toLocaleString("en-us");
    }

    wantsForm.addEventListener("submit", function(event) { // When the form is submitted...
        event.preventDefault();

        if (wantInput.value !== "" && wantCostInput.value !== "") { // If neither input is empty...
             // Add to the local list
            wantsList.push(wantInput.value + "~" + wantCostInput.value);

            let wantElement = document.createElement("li");
            // Put the title in the list item (this will be sliced later)
            wantElement.innerHTML = wantInput.value + "~" + wantCostInput.value;

            wantsListElement.appendChild(wantElement);

            // Add to the localStorage list
            localStorage.setItem("wants", JSON.stringify(wantsList));

            location.reload();
        }
    });
});