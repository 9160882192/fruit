const weatherData = {
    city: "New York",
    temperature: 22,
    condition: "Sunny"
};

function displayWeather() {
    console.log(`Weather in ${weatherData.city}:`);
    console.log(`Temperature: ${weatherData.temperature}°C`);
    console.log(`Condition: ${weatherData.condition}`);
}

displayWeather();
