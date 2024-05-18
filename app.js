async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '5af099d47cc73f1019dc7587ce0a7c42'; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById('cityName').textContent = data.name;
      document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
      document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
    } else {
      document.getElementById('weatherInfo').innerHTML = `<p>City not found. Please try again.</p>`;
    }
  } catch (error) {
    document.getElementById('weatherInfo').innerHTML = `<p>There was an error fetching the weather data. Please try again later.</p>`;
  }
}
