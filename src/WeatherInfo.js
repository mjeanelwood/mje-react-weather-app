import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-4">
        <div className="col-4">
          <h1>{props.data.city}</h1>

          <ul>
            <li>
              <CurrentDate date={props.data.date} />
            </li>
          </ul>
        </div>
        <div className="col-4">
          <WeatherIcon code={props.data.icon} />
          <span className="temperature">
            {Math.round(props.data.temperature)}°
          </span>{" "}
          <span className="unit-celsius">C</span>|
          <span className="unit-fahrenheit">F</span>
        </div>
        <div className="col-4">
          <ul>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
            <li>Humidity: {Math.round(props.data.humidity)} %</li>
            <li className="text-capitalize">
              Description: {props.data.description}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
