/*npm install chart.js react-chartjs-2*/
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "d85dfdd245a1ffc23d6d62576f6867d5"; // replace

  const getWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    setWeather(data);
  };

  // Chart data
  const chartData = weather && weather.main ? {
    labels: ["Temperature", "Humidity"],
    datasets: [
      {
        label: "Weather Data",
        data: [weather.main.temp, weather.main.humidity],
        backgroundColor: ["red", "blue"]
      },
    ],
  } : null;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App</h2>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Get Weather</button>

      {weather && weather.main && (
        <div>
          <h3>{weather.name}</h3>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Condition: {weather.weather[0].description}</p>

          {/* ✅ Graph */}
          <div style={{ width: "300px", margin: "auto" }}>
            <Bar data={chartData} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;