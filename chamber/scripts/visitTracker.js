// Set last visit message
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();
localStorage.setItem('lastVisit', now);

if (!lastVisit) {
    document.getElementById('visitMessage').textContent = 'Welcome! Let us know if you have any questions.';
} else {
    const daysSinceLastVisit = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    if (daysSinceLastVisit < 1) {
        document.getElementById('visitMessage').textContent = 'Back so soon! Awesome!';
    } else {
        document.getElementById('visitMessage').textContent = `You last visited ${daysSinceLastVisit} day${daysSinceLastVisit > 1 ? 's' : ''} ago.`;
    }
}

// Set current year
document.getElementById('currentyear').textContent = new Date().getFullYear();
