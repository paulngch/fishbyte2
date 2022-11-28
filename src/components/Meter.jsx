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
}) {
  // const [meterScore, setMeterScore] = useState(0);
  let meterScore = 0;
  // console.log("CONDITION", condition);
  // console.log("TEMPERATURE", temperature);
  // console.log("MeterScore b4", meterScore);

  // useEffect(() => {
  let sunRiseInt = parseInt(sunRise.slice(0, 2), 10);
  let sunSetInt = parseInt(sunSet.slice(0, 2), 10);
  let tempHourInt = parseInt(tempHour, 10);

  // console.log(typeof sunRiseInt);
  // console.log("SUNRISE INT", sunRiseInt);
  // console.log(typeof tempHou rInt);
  // console.log(tempHourInt);
  //=================
  //sunScore Logic = (out of 3 points)
  //sunrise -1h,+3h && sunset -2h = 1point
  //sunrise +2h && sunset +1h = 2points
  //sunrises & sr +1h  && sunset * ss-1 = 3points
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

  // console.log("SUN SCORE", sunScore);
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
  meterScore = sunScore + temperatureScore + conditionScore;
  // console.log("SUNSCORE", sunScore);
  // console.log("temperatureScore", temperatureScore);
  // console.log("CONDITION SCORE", conditionScore);
  // console.log("MeterScore after", meterScore);

  // setMeterScore(sunScore + temperatureScore + conditionScore);
  // }, [tempHour, temperature, condition]);

  return <div className="text-5xl">{setForecastOneDay ? meterScore : ""}</div>;
  // return {meterScore}
}
