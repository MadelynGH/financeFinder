// Add the HTML
document.getElementById("tips-stats-div").innerHTML = document.getElementById("tips-stats-div").innerHTML +
`<h2 id="calculations-display"></h2>
<div class="break"></div>
<h2 id="notes-display"></h2>`;

window.addEventListener("DOMContentLoaded", function() {
    const calculationsDisplay = this.document.getElementById("calculations-display");
    const notesDisplay = this.document.getElementById("notes-display");

    let annualProfit;
    let annualSalaries = localStorage.getItem("salaryTotalCost") * 1;
    let annualAssets = localStorage.getItem("assetsTotalCost") * 1;
    let annualNeeds = localStorage.getItem("needsTotalCost") * 1;
    let annualWants = localStorage.getItem("wantsTotalCost") * 1;
    let annualIncome = annualSalaries + annualAssets * 1;
    let annualDebt = annualNeeds;
    let oneTimeDebt = annualWants * 1;

    annualProfit = annualIncome - annualDebt;

    let moneyString = `Your annual income is <b>$${annualIncome.toLocaleString("en-us")}</b>; your annual debt is <b>$${annualDebt.toLocaleString("en-us")}</b>; your annual profit is <b>$${annualProfit.toLocaleString("en-us")}</b>; and your one-time debt is <b>$${oneTimeDebt.toLocaleString("en-us")}</b>.`;
    let messageString;

    calculationsDisplay.innerHTML = moneyString;

    if (annualProfit > 25000) {
        messageString = "Congratulations! Your annual profit is more than <b>$25,000</b>!";
    } else if (annualProfit > 10000) {
        messageString = "Amazing! Your annual profit is more than <b>$10,000</b>!";
    } else if (annualProfit > 5000) {
        messageString = "Good. Your annual profit is more than <b>$5000</b>!";
    } else if (annualProfit > 1000) {
        messageString = "Your annual profit is more than <b>$1000</b> and less than <b>$5000</b>... You may be spending too much.";
    } else if (annualProfit > 500) {
        messageString = "Your annual profit is more than <b>$500</b> and less than <b>$1000</b>. Try lowering your debt!";
    } else if (annualProfit < 500 && annualProfit > 0) {
        messageString = "Your annual profit is less than <b>$500</b>. What happened?";
    } else if (annualProfit == 0) {
        messageString = "You're barely making enough money to keep buying the same stuff. Your annual profit is <b>$0</b>!";
    } else if (annualProfit < 0) {
        messageString = "You have less than <b>$0</b> annual profit! This means that you are are constantly in more debt and you must do something about it.";
    }

    notesDisplay.innerHTML = notesDisplay.innerHTML + messageString;
});