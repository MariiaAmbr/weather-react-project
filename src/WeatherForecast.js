import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "3ef05a16171b60ea065a0ce29b7252a6";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Tue</div>
          <WeatherIcon code="01d" size={24} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°C</span>
            <span className="WeatherForecast-temperature-min">10°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
