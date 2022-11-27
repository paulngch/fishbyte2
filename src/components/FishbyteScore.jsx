import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { DateTime } from "luxon";
import Meter from "./Meter";

export default function FishbyteScore({
  tempHour,
  today,
  tempDate,
  toMonth,
  setToMonth,
  timeState,
  sunRise,
  sunSet,
  temperature,
  condition,
  setForecastOneDay
}) {
  useEffect(() => {
    switch (tempDate.slice(5, 7)) {
      case "1":
        setToMonth("Jan");
        break;
      case "2":
        setToMonth("Feb");
        break;
      case "3":
        setToMonth("Mar");
        break;
      case "4":
        setToMonth("Apr");
        break;
      case "5":
        setToMonth("May");
        break;
      case "6":
        setToMonth("Jun");
        break;
      case "7":
        setToMonth("Jul");
        break;
      case "8":
        setToMonth("Aug");
        break;
      case "9":
        setToMonth("Sep");
        break;
      case "10":
        setToMonth("Oct");
        break;
      case "11":
        setToMonth("Nov");
        break;
      case "12":
        setToMonth("Dec");
        break;
      case undefined:
        setToMonth("Alien Month");
        break;
    }
  }, [tempDate]);

  const currentWeekday = DateTime.fromISO(tempDate)
    .toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)
    .slice(0, 3);

  return (
    <div className="flex-col">
      <div className="flex justify-center text-2xl m-1 p-2">FORECAST</div>
      <div className="topBar flex justify-between font-Poiret One text-2xl">
        {tempDate.slice(-2)}
        <br />
        {toMonth}
        <div>{tempHour}:00h</div>
        <div className="day">{currentWeekday}</div>
      </div>
      <div className="fishbyteMeter m-4 p-20">
        <Meter
          timeState={timeState}
          tempHour={tempHour}
          sunRise={sunRise}
          sunSet={sunSet}
          temperature={temperature}
          condition={condition}
          setForecastOneDay={setForecastOneDay}
        />
      </div>
      <div className="leftBottomRow flex justify-between">
        <div className="meterText">Fishbyte Meter</div>
        <div className="favButton">
          <button>Favourite</button>
        </div>
      </div>
    </div>
  );
}
