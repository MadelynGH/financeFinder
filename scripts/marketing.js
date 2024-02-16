const heroImageContainer = document.getElementById("hero-image-container");
const heroImage = document.getElementById("hero-image");

heroImage.style.height = "75vh";
heroImageContainer.style.width = heroImage.offsetWidth + "px";
heroImage.style.height = "70vh";
heroImage.style.transitionDuration = ".3s";

heroImage.addEventListener("mouseenter", function() {
    heroImage.style.height = "75vh";
});

heroImage.addEventListener("mouseleave", function() {
    heroImage.style.height = "70vh";
});