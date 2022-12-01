import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Mariia and is{" "}
          <a href="https://github.com/MariiaAmbr/weather-react-project">
            open-soursed on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
