import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <h1>Paris</h1>
          <p>Date Time</p>
        </div>
        <div className="col-4">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
          <br />
          <span className="temperature">75°</span>{" "}
          <span className="unit-celsius">C</span>|
          <span className="unit-fahrenheit">F</span>
        </div>
        <div className="col-4">
          <ul>
            <li>Wind: 5 km/h</li>
            <li>Humidity: 10 %</li>
            <li>Precipitaion: 3 %</li>
            <li>Description: Partly Cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
