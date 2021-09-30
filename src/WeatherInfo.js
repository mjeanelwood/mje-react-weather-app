import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-4">
        <div className="col-4">
          <h1>{props.data.city}</h1>
          <p>
            <CurrentDate date={props.data.date} />
          </p>
        </div>
        <div className="col-4">
          <WeatherIcon code={props.data.icon} />
          <WeatherTemperature celsius={props.data.temperature} />
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
