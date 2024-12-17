import { OPENWEATHER_API_KEY } from '../../config.js'; // Import the API key from the config file

const lat = '49.75'; // Latitude for Trier, Germany
const lon = '6.64'; // Longitude for Trier, Germany

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${OPENWEATHER_API_KEY}`;

async function fetchWeather() {
  
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            updateWeatherCard(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function updateWeatherCard(data) {
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    document.getElementById('weather-icon').src = `http://openweathermap.org/img/w/${icon}.png`;
    document.getElementById('current-temp').innerText = `😍 ${temperature} °C, ${description}`;
}

fetchWeather(); // Invoke the function to test it
