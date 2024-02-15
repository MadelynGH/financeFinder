document.head.innerHTML = document.head.innerHTML + `<link rel="stylesheet" type="text/css" href="/styles/header.css" />
<link rel="icon" type="image/x-icon" href="/favicon.png" /> <meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="description" content="Manage your finances and budget in a smarter way, with Finance Finder." />`;

document.body.innerHTML =
`<div id="header">
<a href="/">
    <h3 id="logo">FINANCE<br>FINDER</h3>
</a>
<a href="/" class="header-link" id="home-link">Home</a>
<a href="/problem" class="header-link" id="problem-link">Problem</a>
<a href="/solutions" class="header-link" id="solutions-link">Solutions</a>
<a href="/desktop" class="header-link" id="desktop-link">Desktop</a>
<a href="/mobile" class="header-link" id="mobile-link">Mobile</a>
<a href="/process" class="header-link" id="process-link">Process</a>
<a href="/reflection-questions" class="header-link" id="reflection-questions-link">Reflection Questions</a>
<a href="/about" class="header-link" id="about-link">About</a>
</div>`
+ document.body.innerHTML;

document.getElementById(document.currentScript.getAttribute("link")).style.borderBottom = "3.5px solid rgb(93, 0, 255)";