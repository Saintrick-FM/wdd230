// Initialize visit counter when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeVisitCounter);

function initializeVisitCounter() {
    try {
        const visitDisplay = document.getElementById("visitCount");
        if (!visitDisplay) return;

        const numVisits = getVisitCount();
        updateVisitCount(numVisits + 1);
        updateDisplay(visitDisplay, numVisits + 1);
    } catch (error) {
        // Silently handle errors in production
    }
}

function getVisitCount() {
    try {
        return Number(localStorage.getItem("numVisits")) || 0;
    } catch (error) {
        return 0;
    }
}

function updateVisitCount(count) {
    try {
        localStorage.setItem("numVisits", count);
    } catch (error) {
        // Silently handle errors in production
    }
}

function updateDisplay(element, count) {
    try {
        element.textContent = count.toLocaleString();
    } catch (error) {
        // Silently handle errors in production
    }
}
