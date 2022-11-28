import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
}) {
  sunRise = forecastOneDay.daily.sunrise[0].slice(-5);
  sunSet = forecastOneDay.daily.sunset[0].slice(-5);
  temperature = forecastOneDay.hourly["temperature_2m"][tempHour];

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
