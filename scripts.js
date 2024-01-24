// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    // Toggle video catalog visibility
    const toggleButton = document.getElementById("toggle-catalog-button");
    const videoCatalog = document.getElementById("video-catalog");

    if (toggleButton && videoCatalog) {
        toggleButton.addEventListener("click", function () {
            videoCatalog.classList.toggle("hidden");
        });
    }
});
