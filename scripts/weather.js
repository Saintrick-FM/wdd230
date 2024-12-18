const OPENWEATHER_API_KEY = '5fd55e0656da9f70aa984baf55c53a94';
const city = 'Brazzaville'; // City for weather data
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric`;

async function fetchWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (!response.ok) {
            throw new Error('Weather data not available');
        }
        const data = await response.json();
        updateWeatherCard(data);
    } catch (error) {
        displayWeatherError('Unable to load weather data. Please try again later.');
    }
}

function updateWeatherCard(data) {
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    document.getElementById('temperature').innerText = `😍 ${temperature} °C, ${description}`;
    document.getElementById('weather-icon').src = `http://openweathermap.org/img/w/${icon}.png`;
}

function displayWeatherError(message) {
    document.getElementById('temperature').innerText = message;
}

fetchWeather();