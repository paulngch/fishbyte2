import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Weather({
  forecastOneDay,
  tempHour,
  weatherCode,
  setWeatherCode,
  setForecastOneDay,
  todate,
}) {
  //For condition, i.e Clear / Shower/ Overcast
  //Try shifting url and fetches down to individual components =====
  //rethink about changing state and useeffect
  const [temperature, setTemperature] = useState("");

  let condition = "";
  switch (forecastOneDay.hourly.weathercode[tempHour]) {
    case 0:
      condition = "Clear Sky";
      break;
    case 1:
      condition = "Mainly Clear";
      break;
    case 2:
      condition = "Partly Cloudy";
      break;
    case 3:
      condition = "Overcast";
      break;
    case 45:
      condition = "Fog";
      break;
    case 48:
      condition = "Depositing Rime Fog";
      break;
    case 51:
      condition = "Light Drizzle";
      break;
    case 53:
      condition = "Moderate Drizzle";
      break;
    case 55:
      condition = "Dense Drizzle";
      break;
    case 56:
      condition = "Light, Freezing Drizzle";
      break;
    case 57:
      condition = "Dense, Freezing Drizzle";
      break;
    case 61:
      condition = "Slight Rain";
      break;
    case 63:
      condition = "Moderate Rain";
      break;
    case 65:
      condition = "Intense Rain";
      break;
    case 66:
      condition = "Light,Freezing Rain";
      break;
    case 67:
      condition = "Intense, FreezingRain";
      break;
    case 71:
      condition = "Slight Snow";
      break;
    case 73:
      condition = "Moderate Snow";
      break;
    case 75:
      condition = "Heavy Snow";
      break;
    case 77:
      condition = "Snow Grains";
      break;
    case 80:
      condition = "Slight Showers";
      break;
    case 81:
      condition = "Moderate Showers";
      break;
    case 82:
      condition = "Violent Showers";
      break;
    case 85:
      condition = "Slight Snow Showers";
      break;
    case 86:
      condition = "Heavy Snow Showers";
      break;
    case 95:
      condition = "Thunderstorm";
      break;
    case 96:
      condition = "Thunderstorm w/ Slight Hail";
      break;
    case 99:
      condition = "Thunderstorm w/ Heavy Hail";
      break;
    case undefined:
      condition = "NOT SINGAPORE's WEATHER";
      break;
  }

  console.log("CONDITION", condition);

  return (
    <div className="flex flex-col mx-auto p-6">
      <div className="mx-auto my-2 p-2 text-3xl font-extralight">
        Condition: {condition}
      </div>
      <div className="mx-auto my-2 p-2 text-3xl font-extralight">Temp </div>
      <div className="mx-auto my-2 p-2 text-3xl font-extralight">
        Air Pressure{" "}
      </div>
      <div className="mx-auto my-2 p-2 text-3xl font-extralight">
        <div>Sunrise </div>
        <div>Sunset </div>
      </div>
    </div>
  );
}
