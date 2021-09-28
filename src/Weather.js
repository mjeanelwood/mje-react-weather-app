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
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-4">
          <h1>Paris</h1>
          <ul>
            <li>Date Time</li>
            <li>Description</li>
          </ul>
        </div>
        <div className="col-4">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
          75° c | f
        </div>
        <div className="col-4">
          <ul>
            <li>Wind: 5 km/h</li>
            <li>Humidity: 10 %</li>
            <li>Precipitaion: 3 %</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
