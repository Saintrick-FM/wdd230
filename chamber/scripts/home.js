// OpenWeatherMap API configuration
const CITY_ID = '2260535'; // Brazzaville city ID
const WEATHER_API_URL = (apiKey) => `https://api.openweathermap.org/data/2.5/weather?id=${CITY_ID}&appid=${apiKey}&units=metric`;
const FORECAST_API_URL = (apiKey) => `https://api.openweathermap.org/data/2.5/forecast?id=${CITY_ID}&appid=${apiKey}&units=metric`;

// Banner display logic
function handleBanner() {
    const banner = document.getElementById('meet-greet-banner');
    const closeButton = document.getElementById('close-banner');
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, etc.

    // Show banner only on Monday (1), Tuesday (2), and Wednesday (3)
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        banner.style.display = 'block';
    }

    closeButton.addEventListener('click', () => {
        banner.style.display = 'none';
    });
}

// Weather functions
async function initWeather(apiKey) {
    try {
        const response = await fetch(WEATHER_API_URL(apiKey));
        if (!response.ok) throw new Error('Weather data not available');
        const data = await response.json();
        
        // Update current weather
        document.getElementById('current-temp').textContent = `${Math.round(data.main.temp)}°C`;
        document.getElementById('weather-desc').textContent = data.weather[0].description;
        document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        
        const forecastResponse = await fetch(FORECAST_API_URL(apiKey));
        if (!forecastResponse.ok) throw new Error('Forecast data not available');
        const forecastData = await forecastResponse.json();
        
        // Get one forecast per day for next 3 days
        const dailyForecasts = forecastData.list.filter((forecast, index) => index % 8 === 0).slice(0, 3);
        
        const forecastContainer = document.getElementById('forecast-container');
        if (!forecastContainer) return;
        
        forecastContainer.innerHTML = '';

        dailyForecasts.forEach(forecast => {
            const date = new Date(forecast.dt * 1000);
            const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
            const temp = Math.round(forecast.main.temp);
            
            const forecastDay = document.createElement('div');
            forecastDay.className = 'forecast-day';
            forecastDay.innerHTML = `
                <h4>${dayName}</h4>
                <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png" alt="Weather icon">
                <p>${temp}°C</p>
            `;
            forecastContainer.appendChild(forecastDay);
        });
    } catch (error) {
        displayError('weather');
    }
}

// Display error message in the weather container
function displayError(type) {
    const container = document.querySelector(type === 'weather' ? '#current-weather' : '.card-container');
    if (container) {
        const errorMessage = document.createElement('p');
        errorMessage.className = 'error-message';
        errorMessage.textContent = `Unable to load ${type} data. Please try again later.`;
        container.innerHTML = '';
        container.appendChild(errorMessage);
    }
}

// Business spotlight functions
async function loadMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) throw new Error('Member data not available');
        const data = await response.json();
        
        // Filter for silver and gold members
        const eligibleMembers = data.members.filter(member => 
            member.membership === 'silver' || member.membership === 'gold'
        );
        
        // Randomly select 3 members
        const selectedMembers = [];
        while (selectedMembers.length < 3 && eligibleMembers.length > 0) {
            const randomIndex = Math.floor(Math.random() * eligibleMembers.length);
            selectedMembers.push(eligibleMembers.splice(randomIndex, 1)[0]);
        }
        
        // Update spotlight cards
        const cardContainer = document.querySelector('.card-container');
        if (!cardContainer) return;
        
        cardContainer.innerHTML = '';
        
        selectedMembers.forEach(member => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;
            cardContainer.appendChild(card);
        });
    } catch (error) {
        displayError('member');
    }
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Your OpenWeatherMap API key
    const WEATHER_API_KEY = '5fd55e0656da9f70aa984baf55c53a94'; // Replace this with your actual API key
    
    handleBanner();
    initWeather(WEATHER_API_KEY);
    loadMembers();
});
