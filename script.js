// script.js

// เช็คสถานะตอนโหลดหน้า
document.addEventListener("DOMContentLoaded", function() {
    const currentTheme = localStorage.getItem("theme");
    
    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
});