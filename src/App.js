import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Las Vegas" />
        <footer>
          Coded by M J Elwood | open-source on{" "}
          <a
            href="https://github.com/mjeanelwood/mje-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          | hosted on Netlify
        </footer>
      </div>
    </div>
  );
}
