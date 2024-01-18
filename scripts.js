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
      const temperature = (data.main.temp - 273.15).toFixed(2);
      const description = data.weather[0].description;
      const windSpeed = data.wind.speed;
      const humidity = data.main.humidity;
      const cityName = data.name;

      let temperatureIcon = "fas fa-thermometer-half";
      let descriptionIcon = "fas fa-sun";
      let windIcon = "fas fa-wind";
      let humidityIcon = "fas fa-tint";

      if (temperature < 10) {
        temperatureIcon = "fas fa-snowflake";
      } else if (temperature > 30) {
        temperatureIcon = "fas fa-sun";
      }

      if (description.includes("rain")) {
        temperatureIcon = "fas fa-cloud-showers-heavy";
      } else if (description.includes("cloud")) {
        temperatureIcon = "fas fa-cloud";
      }

      if (humidity > 80) {
        humidityIcon = "fas fa-water";
      } else {
        humidityIcon = "fas fa-tint";
      }

      weatherInfo.innerHTML = `
          <h3>${cityName}</h3>
          <p><i class="${temperatureIcon}"></i> ${temperature} &#8451;</p>
          <p><i class="${descriptionIcon}"></i> ${description}</p>
          <p><i class="${windIcon}"></i> ${windSpeed} m/s</p>
          <p><i class="${humidityIcon}"></i> ${humidity}%</p>
        `;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      alert("Error fetching weather data. Please try again.");
    });
}
