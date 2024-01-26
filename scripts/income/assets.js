// Add the HTML
document.getElementById("income-div").innerHTML = document.getElementById("income-div").innerHTML = document.getElementById("income-div").innerHTML +
`<div class="salary-asset-div" id="asset-div">
<h1 id="assets-display">
    Assets
    <ul id="assets-list"></ul>
</h1>
<div class="break"></div>
<form id="assets-form">
    <label for="asset-input">Asset: </label>
    <input type="text" id="asset-input" autocomplete="off" />
    <div class="break"></div>
    <label for="asset-cost-input">Income (per year): </label>
    <input type="number" id="asset-cost-input" autocomplete="off" />
    <div class="break"></div>
    <input type="submit" id="asset-add-button" value="Add" />
</form>
<h2 id="total-asset-cost"></h2>
</div>`;

window.addEventListener("DOMContentLoaded", function() {
    // Get the HTML elements that are needed
    const assetsListElement = this.document.getElementById("assets-list");
    const assetsForm = this.document.getElementById("assets-form");
    const assetInput = this.document.getElementById("asset-input");
    const assetCostInput = this.document.getElementById("asset-cost-input");
    const totalAssetCost = this.document.getElementById("total-asset-cost");

    // We will be using the tilde(~) to separate the name and cost.

    let assetsList = new Array();
    let totalCost = 0;

    if (this.localStorage.getItem("assets")) { // If the user has added assets yet...
        assetsList = JSON.parse(this.localStorage.getItem("assets")); // Make a local list and parse the stringified localStorage list.
        for (asset in assetsList) {
            let assetElement = document.createElement("li");
            // Get the asset and make the cost be green with a $ in front.
            assetElement.innerHTML = assetsList[asset].replaceAll("~", " <span style='color: green;'>$<span class='formatted-num'>") + "</span></span>";
            totalCost += assetsList[asset].split("~").slice(1) * 1;

            // Add the list item
            assetsListElement.appendChild(assetElement);
        }

        // The function that formats the prices is in wants.js.
    } else {
        totalCost = 0;
    }

    totalAssetCost.innerHTML = "Total: $" + totalCost.toLocaleString("en-us") + "/year";
    localStorage.setItem("assetsTotalCost", totalCost);

    assetsForm.addEventListener("submit", function(event) { // When the form is submitted...
        event.preventDefault();

        if (assetInput.value !== "" && assetCostInput.value !== "") { // If neither input is empty...
             // Add to the local list
            assetsList.push(assetInput.value + "~" + assetCostInput.value);

            let assetElement = document.createElement("li");
            // Put the title in the list item (this will be sliced later)
            assetElement.innerHTML = assetInput.value + "~" + assetCostInput.value;

            assetsListElement.appendChild(assetElement);

            // Add to the localStorage list
            localStorage.setItem("assets", JSON.stringify(assetsList));

            location.reload();
        }
    });
});