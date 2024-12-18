// Weather API configuration
const CITY_NAME = 'Brazzaville';
const COUNTRY_CODE = 'CG';
const UNITS = 'metric';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Get current weather data
async function getCurrentWeather(apiKey) {
    try {
        const response = await fetch(
            `${BASE_URL}/weather?q=${CITY_NAME},${COUNTRY_CODE}&units=${UNITS}&appid=${apiKey}`
        );
        if (!response.ok) throw new Error('Weather data not available');
        return await response.json();
    } catch (error) {
        console.error('Error fetching current weather:', error);
        return null;
    }
}

// Get forecast data
async function getForecast(apiKey) {
    try {
        const response = await fetch(
            `${BASE_URL}/forecast?q=${CITY_NAME},${COUNTRY_CODE}&units=${UNITS}&appid=${apiKey}`
        );
        if (!response.ok) throw new Error('Forecast data not available');
        return await response.json();
    } catch (error) {
        console.error('Error fetching forecast:', error);
        return null;
    }
}

// Update current weather display
function displayCurrentWeather(data) {
    const currentTemp = document.getElementById('current-temp');
    const weatherDesc = document.getElementById('weather-desc');
    const weatherIcon = document.getElementById('weather-icon');

    if (!data) {
        currentTemp.innerHTML = '<p class="weather-error">Weather data temporarily unavailable</p>';
        return;
    }

    currentTemp.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDesc.textContent = capitalizeFirstLetter(data.weather[0].description);
    weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}@2x.png`;
    weatherIcon.alt = data.weather[0].description;
}

// Update forecast display
function displayForecast(data) {
    const forecastContainer = document.getElementById('forecast-container');

    if (!data) {
        forecastContainer.innerHTML = '<p class="weather-error">Forecast data temporarily unavailable</p>';
        return;
    }

    // Get one forecast per day for next 3 days
    const dailyForecasts = data.list
        .filter(forecast => {
            const date = new Date(forecast.dt * 1000);
            return date.getHours() === 12;
        })
        .slice(0, 3);

    forecastContainer.innerHTML = '';

    dailyForecasts.forEach(forecast => {
        const date = new Date(forecast.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        const temp = Math.round(forecast.main.temp);
        
        const forecastDay = document.createElement('div');
        forecastDay.className = 'forecast-day';
        forecastDay.innerHTML = `
            <h4>${dayName}</h4>
            <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png" 
                 alt="${forecast.weather[0].description}">
            <p>${temp}°C</p>
            <p class="forecast-desc">${capitalizeFirstLetter(forecast.weather[0].description)}</p>
        `;
        forecastContainer.appendChild(forecastDay);
    });
}

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Main function to update weather
async function updateWeather(apiKey) {
    const currentWeather = await getCurrentWeather(apiKey);
    displayCurrentWeather(currentWeather);

    const forecast = await getForecast(apiKey);
    displayForecast(forecast);
}

// Initialize weather updates
function initWeather(apiKey) {
    // Update weather immediately and then every 30 minutes
    updateWeather(apiKey);
    setInterval(() => updateWeather(apiKey), 30 * 60 * 1000);
}
