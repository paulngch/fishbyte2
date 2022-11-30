import { DateTime } from "luxon";
import { useState, useEffect } from "react";

export default function Meter({
  timeState,
  tempHour,
  sunRise,
  sunSet,
  temperature,
  condition,
  setForecastOneDay,
  meterScore,
  setMeterScore,
}) {
  useEffect(() => {
    let sunRiseInt = parseInt(sunRise.slice(0, 2), 10);
    let sunSetInt = parseInt(sunSet.slice(0, 2), 10);
    let tempHourInt = parseInt(tempHour, 10);
    let sunScore = 0;

    if (
      //1h before sunrise
      tempHourInt + 1 === sunRiseInt ||
      //3h after sunrise
      tempHourInt - 3 === sunRiseInt ||
      //2h before sunset
      tempHourInt + 2 === sunSetInt
    ) {
      sunScore = 1;
    } else if (
      //2h after sunrise
      tempHourInt - 2 === sunRiseInt ||
      //1h after sunset
      tempHourInt - 1 === sunSetInt
    ) {
      sunScore = 2;
    } else if (
      //@sunrise
      tempHourInt === sunRiseInt ||
      //1h after sunrise
      tempHourInt - 1 === sunRiseInt ||
      //1h before sunset
      tempHourInt + 1 === sunSetInt ||
      //@sunSet
      tempHourInt === sunSetInt
    ) {
      sunScore = 3;
    }

    //====================
    //TemperatureScore Logic = higher temp = up to 2 points
    let temperatureScore = 0;
    if (temperature >= 28) {
      temperatureScore = 2;
    } else if (temperature >= 26) {
      temperatureScore = 1;
    }
    // console.log("TEMPERATURE SCORE", temperatureScore)

    let conditionScore = 0;
    if (
      condition === "Clear Sky" ||
      condition === "Mainly Clear" ||
      condition === "Partly Cloudy" ||
      condition === "Overcast"
    ) {
      conditionScore = 1;
    }

    setMeterScore(sunScore + temperatureScore + conditionScore);
  }, [sunRise, sunSet, tempHour]);

  let meterImg = "";
  if (meterScore === 0) {
    meterImg = "/zerosixthgreen.png";
  } else if (meterScore === 1) {
    meterImg = "/onesixthgreen.png";
  } else if (meterScore === 2) {
    meterImg = "/twosixthgreen.png";
  } else if (meterScore === 3) {
    meterImg = "/threesixthgreen.png";
  } else if (meterScore === 4) {
    meterImg = "/foursixthgreen.png";
  } else if (meterScore === 5) {
    meterImg = "/fivesixthgreen.png";
  } else if (meterScore === 6) {
    meterImg = "/sixsixthgreen.png";
  }

  return (
    <div className="flex justify-center text-5xl text-slate-600 font-extrabold">
      {setForecastOneDay ? (
        <img className=" relative scale-50 max-w-[400px]" src={meterImg} />
      ) : (
        ""
      )}
    </div>
  );
}
