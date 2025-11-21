document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const icon = themeToggle.querySelector("i");
    const body = document.body;

    // Check saved theme
    const savedTheme = localStorage.getItem("tema");

    if (savedTheme === "oscuro") {
        body.classList.add("dark-mode");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        body.classList.remove("dark-mode");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

    themeToggle.addEventListener("click", () => {
        const isDarkMode = body.classList.toggle("dark-mode");

        if (isDarkMode) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
            localStorage.setItem("tema", "oscuro");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
            localStorage.setItem("tema", "claro");
        }

        // Animation
        themeToggle.style.transform = "rotate(180deg)";
        setTimeout(() => {
            themeToggle.style.transform = "rotate(0deg)";
        }, 300);
    });
});