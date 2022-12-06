import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <footer>
          <em>
            This project was coded by Mariia and is{" "}
            <a
              href="https://github.com/MariiaAmbr/weather-react-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-soursed on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://delicate-medovik-fa5a7a.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </em>
        </footer>
      </div>
    </div>
  );
}
