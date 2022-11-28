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
  sunRise,
  sunSet,
  temperature,
  condition,
  monthNames,
  // condition,
  // setCondition,
  // sunRise,
  // setSunRise,
  // sunSet,
  // setSunSet,
  // temperature,
  // setTemperature,
}) {
  // let condition = "";
  // switch (forecastOneDay.hourly.weathercode[tempHour]) {
  //     case 0:
  //       condition = "Clear Sky"
  //       break;
  //     case 1:
  //       condition = "Mainly Clear"
  //       break;
  //     case 2:
  //       condition = "Partly Cloudy"
  //       break;
  //     case 3:
  //       condition = "Overcast"
  //       break;
  //     case 45:
  //       condition = "Fog"
  //       break;
  //     case 48:
  //       condition = "Depositing Rime Fog"
  //       break;
  //     case 51:
  //       condition = "Light Drizzle"
  //       break;
  //     case 53:
  //       condition = "Moderate Drizzle"
  //       break;
  //     case 55:
  //       condition = "Dense Drizzle"
  //       break;
  //     case 56:
  //       condition = "Light, Freezing Drizzle"
  //       break;
  //     case 57:
  //       condition = "Dense, Freezing Drizzle"
  //       break;
  //     case 61:
  //       condition = "Slight Rain"
  //       break;
  //     case 63:
  //       condition = "Moderate Rain"
  //       break;
  //     case 65:
  //       condition = "Intense Rain"
  //       break;
  //     case 66:
  //       condition = "Light,Freezing Rain"
  //       break;
  //     case 67:
  //       condition = "Intense, FreezingRain"
  //       break;
  //     case 71:
  //       condition = "Slight Snow"
  //       break;
  //     case 73:
  //       condition = "Moderate Snow"
  //       break;
  //     case 75:
  //       condition = "Heavy Snow"
  //       break;
  //     case 77:
  //       condition = "Snow Grains"
  //       break;
  //     case 80:
  //       condition = "Slight Showers"
  //       break;
  //     case 81:
  //       condition = "Moderate Showers"
  //       break;
  //     case 82:
  //       condition = "Violent Showers"
  //       break;
  //     case 85:
  //       condition = "Slight Snow Showers"
  //       break;
  //     case 86:
  //       condition = "Heavy Snow Showers"
  //       break;
  //     case 95:
  //       condition = "Thunderstorm"
  //       break;
  //     case 96:
  //       condition = "Thunderstorm"
  //       break;
  //     case 99:
  //       condition = "Thunderstorm"
  //       break;
  //     case undefined:
  //       condition = "Alien Weather"
  //       break;
  //   }
    
    sunRise = forecastOneDay.daily.sunrise[0].slice(-5);
    sunSet = forecastOneDay.daily.sunset[0].slice(-5);
    temperature = forecastOneDay.hourly["temperature_2m"][tempHour]


  // useEffect(() => {
  //   setTemperature(forecastOneDay.hourly["temperature_2m"][tempHour]);
  //   setSunRise(forecastOneDay.daily.sunrise[0].slice(-5));
  //   setSunSet(forecastOneDay.daily.sunset[0].slice(-5));

  //   switch (forecastOneDay.hourly.weathercode[tempHour]) {
  //     case 0:
  //       setCondition("Clear Sky");
  //       break;
  //     case 1:
  //       setCondition("Mainly Clear");
  //       break;
  //     case 2:
  //       setCondition("Partly Cloudy");
  //       break;
  //     case 3:
  //       setCondition("Overcast");
  //       break;
  //     case 45:
  //       setCondition("Fog");
  //       break;
  //     case 48:
  //       setCondition("Depositing Rime Fog");
  //       break;
  //     case 51:
  //       setCondition("Light Drizzle");
  //       break;
  //     case 53:
  //       setCondition("Moderate Drizzle");
  //       break;
  //     case 55:
  //       setCondition("Dense Drizzle");
  //       break;
  //     case 56:
  //       setCondition("Light, Freezing Drizzle");
  //       break;
  //     case 57:
  //       setCondition("Dense, Freezing Drizzle");
  //       break;
  //     case 61:
  //       setCondition("Slight Rain");
  //       break;
  //     case 63:
  //       setCondition("Moderate Rain");
  //       break;
  //     case 65:
  //       setCondition("Intense Rain");
  //       break;
  //     case 66:
  //       setCondition("Light,Freezing Rain");
  //       break;
  //     case 67:
  //       setCondition("Intense, FreezingRain");
  //       break;
  //     case 71:
  //       setCondition("Slight Snow");
  //       break;
  //     case 73:
  //       setCondition("Moderate Snow");
  //       break;
  //     case 75:
  //       setCondition("Heavy Snow");
  //       break;
  //     case 77:
  //       setCondition("Snow Grains");
  //       break;
  //     case 80:
  //       setCondition("Slight Showers");
  //       break;
  //     case 81:
  //       setCondition("Moderate Showers");
  //       break;
  //     case 82:
  //       setCondition("Violent Showers");
  //       break;
  //     case 85:
  //       setCondition("Slight Snow Showers");
  //       break;
  //     case 86:
  //       setCondition("Heavy Snow Showers");
  //       break;
  //     case 95:
  //       setCondition("Thunderstorm");
  //       break;
  //     case 96:
  //       setCondition("Thunderstorm");
  //       break;
  //     case 99:
  //       setCondition("Thunderstorm");
  //       break;
  //     case undefined:
  //       setCondition("Alien Weather");
  //       break;
  //   }
  // }, [forecastOneDay,tempHour]);

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
