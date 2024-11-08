// Dynamically update copyright year
let year = document.getElementById("year");
year.textContent = new Date().getFullYear();

// Get last modified date of the document
document.getElementById("lastModified").textContent =
  "Last modification: " + document.lastModified;