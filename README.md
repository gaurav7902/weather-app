# Weather App

This is a simple weather application that allows users to search for the current weather conditions in any city. The app fetches data from the OpenWeatherMap API and displays it in a user-friendly interface.

## Features

- Search for weather by city name
- Display current temperature, weather conditions, humidity, and wind speed
- Responsive design for mobile and desktop devices

## Technologies Used

- HTML
- CSS
- JavaScript
- OpenWeatherMap API

## Installation

1. Clone the repository:

```bash
git clone https://github.com/gaurav7902/weather-app.git
```

2. Navigate to the project directory:

```bash
cd weather-app
```

3. Open `index.html` in your web browser to use the app.

## Usage

1. Enter the name of a city in the search bar and click the "Search" button.
2. The app will display the current weather conditions for the specified city, including temperature, weather description, humidity, and wind speed.
3. You can search for multiple cities by repeating the process.

## API Key

If the hardcoded API key doesn't work, you need to set your API key.
To use the OpenWeatherMap API, you need to obtain an API key. You can sign up for a free account at [OpenWeatherMap](https://openweathermap.org/) and generate an API key. Once you have the key, replace the placeholder in the `script.js` file with your actual API key:

```javascript
const apiKey = 'YOUR_API_KEY';
```

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please feel free to create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details
