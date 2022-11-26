import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Calendar from "./Calendar";

export default function Weather({
  forecastOneDay,
  tempDate,
  setTempDate,
  tempHour,
  setTempHour,
  condition,
  setCondition,
  sunRise,
  setSunRise,
  sunSet,
  setSunSet,
  temperature,
  setTemperature,
  monthNames
}) {
  useEffect(() => {
    setTemperature(forecastOneDay.hourly["temperature_2m"][tempHour]);
    setSunRise(forecastOneDay.daily.sunrise[0].slice(-5));
    setSunSet(forecastOneDay.daily.sunset[0].slice(-5));

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
        setCondition("Alien Weather");
        break;
    }
  }, [forecastOneDay, tempHour]);

  // console.log("CONDITION", condition);

  return (
    <div className="flex flex-col pl-8 ">
      <div>
        <Calendar
          setTempHour={setTempHour}
          tempHour={tempHour}
          tempDate={tempDate}
          setTempDate={setTempDate}
          monthNames={monthNames}
        />
      </div>
      <div className="mx-auto text-2xl font-extralight flex items-center">
        <div className="flex">Condition:</div>
        <div className="text-4xl">{condition}</div>
      </div>
      <div className="mx-auto my-2 p-2 text-2xl font-extralight flex">
        <div>Temp:</div>
        <div className="text-4xl"> {temperature} °C</div>
      </div>
      <div className="mx-auto my-2 p-2 text-2xl font-extralight flex">
        <div className="flex flex-col">
          <div className="flex p-2">
            <div>Sunrise:</div>
            <div className="text-3xl">{sunRise} h</div>
          </div>
          <div className="flex p-2">
            <div>Sunset:</div>
            <div className="text-3xl">{sunSet} h</div>
          </div>
        </div>
      </div>
    </div>
  );
}
