function getWeather() {
  const apiKey = "ac5b3f4e5ab0d9ede81d98b11c5aabef";
  const city = document.getElementById("city-input").value;

  if (!city) {
    alert("Please enter a city");
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      const weatherInfo = document.getElementById("weather-info");
      const temperature = (data.main.temp - 273.15).toFixed(2); // Convert Kelvin to Celsius
      const description = data.weather[0].description;
      const cityName = data.name;

      weatherInfo.innerHTML = `
          <h2>${cityName}</h2>
          <p>Temperature: ${temperature} &#8451;</p>
          <p>Description: ${description}</p>
        `;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      alert("Error fetching weather data. Please try again.");
    });
}
