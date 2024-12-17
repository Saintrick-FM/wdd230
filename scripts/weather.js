import { OPENWEATHER_API_KEY } from '../../config.js'; 
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
        console.error('Error fetching weather data:', error);
    }
}
function updateWeatherCard(data) {
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    document.getElementById('temperature').innerText = `😍 ${temperature} °C, ${description}`;
    document.getElementById('weather-icon').src = `http://openweathermap.org/img/w/${icon}.png`;
}
fetchWeather();