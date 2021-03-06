import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="las Vegas" />
        <footer>
          Coded by M J Elwood | open-source on{" "}
          <a
            href="https://github.com/mjeanelwood/mje-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          | hosted on{" "}
          <a
            href="https://loving-mcnulty-81856b.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
