// Dynamically update copyright year
let year = document.getElementById("year");
year.textContent =new Date().getFullYear();

// Get last modified date of the document
document.getElementById("lastModified").textContent =
  "Last modification: " + document.lastModified;

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const burgerMenu = document.querySelector(".burger-menu");

  burgerMenu.addEventListener("click", () => {
    nav.classList.toggle("close");
    burgerMenu.classList.toggle("open");

    if (nav.classList.contains("close")) {
      nav.style.display = "flex";
    } else {
      nav.style.display = "none";
    }
  });
});
