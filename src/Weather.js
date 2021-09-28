import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="row mt-4">
          <div className="col-4">
            <h1>{weatherData.city}</h1>
            <p>Date Time</p>
          </div>
          <div className="col-4">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly Cloudy"
            />
            <br />
            <span className="temperature">
              {Math.round(weatherData.temperature)}°
            </span>{" "}
            <span className="unit-celsius">C</span>|
            <span className="unit-fahrenheit">F</span>
          </div>
          <div className="col-4">
            <ul>
              <li>Feels like: 3°</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
              <li>Humidity: {Math.round(weatherData.humidity)}%</li>
              <li>Description: {weatherData.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "da8bebb3e3f08446cad530447d5543ae";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
