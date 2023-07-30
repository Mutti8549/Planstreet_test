
document.addEventListener("DOMContentLoaded", function () {

    fetch("nav.html")
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, "text/html");
            const navBar = doc.querySelector("nav");
            document.body.prepend(navBar);
        })
        .catch(error => {
            console.error("Failed to fetch navigation bar:", error);
        });

    // Fetch the CSS content
    fetch("nav.css")
        .then(response => response.text())
        .then(cssData => {
            const styleElement = document.createElement("style");
            styleElement.textContent = cssData;
            document.head.appendChild(styleElement);
        })
        .catch(error => {
            console.error("Failed to fetch CSS:", error);
        });
});


