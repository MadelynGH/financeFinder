document.head.innerHTML = document.head.innerHTML + `<link rel="stylesheet" type="text/css" href="/styles/header.css" />`;

document.body.innerHTML =
`<div id="header">
<a href="/">
    <h3 id="logo">FINANCE <br /> FINDER</h3>
</a>
<a href="/" class="header-link" id="home-link">Home</a>
<a href="/about" class="header-link" id="about-link">About</a>
<a href="/research" class="header-link" id="research-link">Research</a>
<a href="/reflection-questions" class="header-link" id="reflection-questions-link">Reflection Questions</a>
<a href="/Finance Finder Presentation.pdf" class="header-link" target="_blank">Presentation</a>
</div>`
+ document.body.innerHTML;

document.getElementById(document.currentScript.getAttribute("link")).style.borderBottom = "4px solid rgb(93, 0, 255)";