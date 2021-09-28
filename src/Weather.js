import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import CurrentDate from "./CurrentDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
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

            <ul>
              <li>
                <CurrentDate date={weatherData.date} />
              </li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
          <div className="col-4">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
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
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "da8bebb3e3f08446cad530447d5543ae";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
