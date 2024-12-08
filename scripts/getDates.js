// Main initialization function
document.addEventListener("DOMContentLoaded", () => {
    // Initialize date elements
    initializeDateElements();
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize theme
    initializeTheme();
});

function initializeDateElements() {
    try {
        const year = document.getElementById("year");
        if (year) {
            year.textContent = new Date().getFullYear();
        }

        const lastModified = document.getElementById("lastModified");
        if (lastModified) {
            lastModified.textContent = "Last modification: " + document.lastModified;
        }
    } catch (error) {
        // Silently handle errors in production
    }
}

function initializeNavigation() {
    try {
        const burgerMenu = document.querySelector(".burger-menu");
        const navBoxes = document.querySelector(".nav-boxes");
        const boxes = document.querySelectorAll(".box1, .box2, .box3, .box4");
        const mainTitle = document.querySelector("h1");

        if (burgerMenu && navBoxes) {
            burgerMenu.addEventListener("click", () => {
                navBoxes.classList.toggle("close");
                burgerMenu.classList.toggle("open");
                boxes.forEach(box => box.classList.toggle("close"));
                if (mainTitle) {
                    mainTitle.classList.toggle("go-up");
                }
                
                // Update ARIA attributes
                const isExpanded = burgerMenu.classList.contains("open");
                burgerMenu.setAttribute("aria-expanded", isExpanded.toString());
            });
        }
    } catch (error) {
        // Silently handle errors in production
    }
}

function initializeTheme() {
    try {
        const toggleTheme = document.getElementById('checkbox');
        if (!toggleTheme) return;

        // Load saved theme
        const savedTheme = getSavedTheme();
        applyTheme(savedTheme);
        
        // Set initial checkbox state
        toggleTheme.checked = savedTheme === 'dark';

        // Add event listener for theme toggle
        toggleTheme.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(newTheme);
            saveTheme(newTheme);
        });
    } catch (error) {
        // Silently handle errors in production
    }
}

function getSavedTheme() {
    try {
        return localStorage.getItem('theme') || 'light';
    } catch (error) {
        return 'light';
    }
}

function saveTheme(theme) {
    try {
        localStorage.setItem('theme', theme);
    } catch (error) {
        // Silently handle errors in production
    }
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.classList.toggle('dark', theme === 'dark');
}