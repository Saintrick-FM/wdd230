const apiKey = '85844fb356d82120c1bfd34ef46da3b5'; // OpenWeatherMap API key
const city = 'Brazzaville'; // City for weather data

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

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
    document.getElementById('weather-description').innerText = description;
    document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${icon}.png`;
}

fetchWeather();
