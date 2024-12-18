// Dynamically update copyright year
let year = document.getElementById("year");
year.textContent =new Date().getFullYear();

// Get last modified date of the document
document.getElementById("lastModified").textContent =
  "Last modification: " + document.lastModified;

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const burgerMenu = document.querySelector(".burger-menu");
  
  // Get the burger menu and navigation elements
  const navbar = document.querySelector('.navbar');

  burgerMenu.addEventListener("click", () => {
    nav.classList.toggle("close");
    burgerMenu.classList.toggle("open");

    if (nav.classList.contains("close")) {
      nav.style.display = "flex";
    } else {
      nav.style.display = "none";
    }

    // Toggle menu when burger is clicked
    burgerMenu.classList.toggle('active');
    navbar.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!burgerMenu.contains(e.target) && !navbar.contains(e.target)) {
      burgerMenu.classList.remove('active');
      navbar.classList.remove('active');
    }
  });
});
