document.head.innerHTML = document.head.innerHTML + `<link rel="stylesheet" type="text/css" href="/styles/header.css" />
<link rel="icon" type="image/x-icon" href="/favicon.png" /> <meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="description" content="Manage your finances and budget in a smarter way, with Finance Finder." />`;

document.body.innerHTML =
`<div id="background-image"></div>
<div id="header">
<a href="/">
    <h3 id="logo">FINANCE<br>FINDER</h3>
</a>
<div id="header-link-div">
    <a href="/" class="header-link" id="home-link">Home</a>
    <a href="/problem" class="header-link" id="problem-link">Problem</a>
    <a href="/solutions" class="header-link" id="solutions-link">Solutions</a>
    <a href="/desktop" class="header-link" id="desktop-link">Desktop</a>
    <a href="/mobile" class="header-link" id="mobile-link">Mobile</a>
    <a href="/process" class="header-link" id="process-link">Process</a>
    <a href="/reflection-questions" class="header-link" id="reflection-questions-link">Reflection Questions</a>
    <a href="/about" class="header-link" id="about-link">About</a>
</div>
<button id="hamburger-button">&#9776;</button>
</div>` + document.body.innerHTML;

document.getElementById(document.currentScript.getAttribute("link")).style.color = "rgb(204, 0, 163)";

document.getElementById("header").style.transitionDuration = "0s"
document.getElementById("header").addEventListener("mouseleave", function() {
    document.getElementById("header").style.transitionDuration = ".4s";
    setTimeout(document.getElementById("header").style.transitionDuration = "0", 400);
});

let blockOrNone;
document.getElementById("hamburger-button").addEventListener("click", function() {
    if (document.querySelector(".header-link").style.display == "block") {
        blockOrNone = "none";
    } else {
        blockOrNone = "block";
    }

    for (let i = 0; i < document.getElementsByClassName("header-link").length; i++) {
        document.getElementsByClassName("header-link")[i].style.display = blockOrNone;
    }
});