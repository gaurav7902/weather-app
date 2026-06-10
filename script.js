// require('dotenv').config();
// const apiKey = process.env.API_KEY;
// wont work because of CORS policy, so I have to hardcode the API key here

const apiKey = '7324ed68244a0bfb34a2b869b0543489'; // grab it! who cares about security in a project like this? :P

const searchButton = document.querySelector('button');

async function fetchWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);
    if (response.status === 404) {
        const errorElement = document.querySelector('.error');
        errorElement.style.display = 'block';
        const weatherElement = document.querySelector('.weather');
        weatherElement.style.display = 'none';
        return;
    } else {
        const errorElement = document.querySelector('.error');
        errorElement.style.display = 'none';
    }
    let data = await response.json();
    return data;
}

changeWeatherIcon = (weather) => {
    const weatherIcon = document.querySelector('.weather-icon');
    switch (weather) {
        case 'Clouds':
            weatherIcon.src = 'images/clouds.png';
            break;
        case 'Clear':
            weatherIcon.src = 'images/clear.png';
            break;
        case 'Rain':
            weatherIcon.src = 'images/rain.png';
            break;
        case 'Drizzle':
            weatherIcon.src = 'images/drizzle.png';
            break;
        case 'Mist':
            weatherIcon.src = 'images/mist.png';
            break;
        default:
            weatherIcon.src = '';
    }
};

changeStats = (data) => {
    const temperatureElement = document.querySelector('.temperature');
    const cityElement = document.querySelector('.city');
    const humidityElement = document.querySelector('.humidity');
    const windElement = document.querySelector('.wind');

    temperatureElement.innerHTML = `${Math.round(data.main.temp)}°C`;
    cityElement.innerHTML = data.name;
    humidityElement.innerHTML = `${data.main.humidity}%`;
    windElement.innerHTML = `${data.wind.speed} km/h`;

    const weatherElement = document.querySelector('.weather');
    weatherElement.style.display = 'block';
};

searchButton.addEventListener('click', async () => {
    const inputElement = document.querySelector(`input`);
    const data = await fetchWeather(inputElement.value);
    inputElement.value = ``;

    changeStats(data);
    changeWeatherIcon(data.weather[0].main);
});

const inputElement = document.querySelector(`input`);
inputElement.addEventListener('keypress', async (event) => {
    if (event.key === 'Enter') {
        const data = await fetchWeather(inputElement.value);
        inputElement.value = ``;

        changeStats(data);
        changeWeatherIcon(data.weather[0].main);
    }
});
