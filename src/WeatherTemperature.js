import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature"> {Math.round(props.celsius)}</span>{" "}
        <span className="unit-celsius">°C</span>|
      </div>
    );
  } else {
    return "F";
  }
}
