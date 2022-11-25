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

  const [condition, setCondition] = useState("");
  const [temperature,setTemperature]=useState("");
  useEffect(() => {
    switch (forecastOneDay.hourly.weathercode[tempHour]) {
      case 0:
        setCondition("Clear Sky");
        break;
      case 1:
        setCondition("Mainly Clear");
        break;
      case 2:
        setCondition("Partly Cloudy");
        break;
      case 3:
        setCondition("Overcast");
        break;
      case 45:
        setCondition("Fog");
        break;
      case 48:
        setCondition("Depositing Rime Fog");
        break;
      case 51:
        setCondition("Light Drizzle");
        break;
      case 53:
        setCondition("Moderate Drizzle");
        break;
      case 55:
        setCondition("Dense Drizzle");
        break;
      case 56:
        setCondition("Light, Freezing Drizzle");
        break;
      case 57:
        setCondition("Dense, Freezing Drizzle");
        break;
      case 61:
        setCondition("Slight Rain");
        break;
      case 63:
        setCondition("Moderate Rain");
        break;
      case 65:
        setCondition("Intense Rain");
        break;
      case 66:
        setCondition("Light,Freezing Rain");
        break;
      case 67:
        setCondition("Intense, FreezingRain");
        break;
      case 71:
        setCondition("Slight Snow");
        break;
      case 73:
        setCondition("Moderate Snow");
        break;
      case 75:
        setCondition("Heavy Snow");
        break;
      case 77:
        setCondition("Snow Grains");
        break;
      case 80:
        setCondition("Slight Showers");
        break;
      case 81:
        setCondition("Moderate Showers");
        break;
      case 82:
        setCondition("Violent Showers");
        break;
      case 85:
        setCondition("Slight Snow Showers");
        break;
      case 86:
        setCondition("Heavy Snow Showers");
        break;
      case 95:
        setCondition("Thunderstorm");
        break;
      case 96:
        setCondition("Thunderstorm w/ Slight Hail");
        break;
      case 99:
        setCondition("Thunderstorm w/ Heavy Hail");
        break;
      case undefined:
        setCondition("NOT SINGAPORE's WEATHER");
        break;
    }
  }, []);

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
