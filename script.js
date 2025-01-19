const toggle = document.getElementById("dark-mode-toggle");
const root = document.documentElement;

toggle.addEventListener("click", () => {
    if (root.style.getPropertyValue("--bg-color") === "#ffffff") {
        root.style.setProperty("--bg-color", "#181818");
        root.style.setProperty("--text-color", "#ffffff");
        root.style.setProperty("--secondary-bg", "#242424");
        toggle.classList.replace("bx-sun", "bx-moon");
    } else {
        root.style.setProperty("--bg-color", "#ffffff");
        root.style.setProperty("--text-color", "#000000");
        root.style.setProperty("--secondary-bg", "#f5f5f5");
        toggle.classList.replace("bx-moon", "bx-sun");
    }
});
