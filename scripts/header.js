document.head.innerHTML = document.head.innerHTML + `<link rel="stylesheet" type="text/css" href="/styles/header.css" />`

document.body.innerHTML =
`<div id="header">
<a href="/">
    <h3 id="logo">FINANCE <br /> FINDER</h3>
</a>
<a href="/" class="header-link">Home</a>
<a href="/about" class="header-link">About</a>
<a href="/research" class="header-link">Research</a>
<a href="/Finance Finder Presentation.pdf" class="header-link" target="_blank">Presentation</a>
</div>`
+ document.body.innerHTML;