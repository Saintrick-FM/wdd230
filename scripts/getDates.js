// Dynamically update copyright year
let year = document.getElementById("year");
year.textContent = new Date().getFullYear();

// Get last modified date of the document
document.getElementById("lastModified").textContent =
  "Last modification: " + document.lastModified;

  document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.querySelector(".burger-menu");
    const navBoxes = document.querySelector(".nav-boxes");
    const box1 = document.querySelector(".box1");
    const box2 = document.querySelector(".box2");
    const box3 = document.querySelector(".box3");
    const box4 = document.querySelector(".box4");
    const mainTitle = document.querySelector("h1");
  
    burgerMenu.addEventListener("click", () => {
      navBoxes.classList.toggle("close");
      burgerMenu.classList.toggle("open");
      box1.classList.toggle("close");
      box2.classList.toggle("close");
      box3.classList.toggle("close");
      box4.classList.toggle("close");
      mainTitle.classList.toggle("go-up");
      
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const toggleTheme = document.getElementById('theme-toggle');
  
    toggleTheme.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme); // Save preference
    });
  
    // Load saved theme on page load
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  });
  