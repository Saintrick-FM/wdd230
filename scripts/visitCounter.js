// Get the visit count element
const visitDisplay = document.getElementById("visitCount");

// Get the stored visit count from localStorage or initialize to 0
let numVisits = Number(localStorage.getItem("numVisits")) || 0;

// Increment the visit count
numVisits++;

// Display the visit count
visitDisplay.textContent = numVisits.toLocaleString();

// Store the new visit count
localStorage.setItem("numVisits", numVisits);
