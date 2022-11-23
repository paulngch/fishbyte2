import { Link } from "react-router-dom";
import { useState } from "react";
import { DateTime } from "luxon";

export default function FishbyteScore() {
  //============================================
  //Variables:
  //exactDateNow=(today in yyyy-mm-dd format), && used for setTodate to query API for 1-day
  //toDay=(today's Weekday in string) && used for setToday to display weekday in String
  //now=(object) && hourNow=(0-23) && used as INDEX for querying API.hourly["temperature_2m"][hourNow]

  //   let date = DateTime.utc().toISO();
  //   console.log(date);
  const monthNames = [
    "",
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "june",
    "july",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const now = DateTime.now().toObject();
  const hourNow = now.hour;

  console.log("MONTH NOW", monthNames[now.month]);

  console.log(now);
  const exactDateNow = DateTime.now().toFormat("yyyy-MM-dd");

  const toDay = DateTime.now()
    .toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)
    .slice(0, 3);

  const [today, setToday] = useState(toDay);
  const [todate, setTodate] = useState(exactDateNow);

  let openMeteoUrlSevenDays = `ttps://api.open-meteo.com/v1/forecast?latitude=1.37&longitude=103.80&hourly=temperature_2m&daily=sunrise,sunset&timezone=Asia%2FSingapore`;
  let openMeteoUrlOneDay = `https://api.open-meteo.com/v1/forecast?latitude=1.37&longitude=103.80&hourly=temperature_2m&daily=sunrise,sunset&timezone=Asia%2FSingapore&start_date=${todate}&end_date=${todate}`;

  return (
    <div className="flex-col">
      <div className="topBar flex justify-between">
        {now.day} <br /> {monthNames[now.month]}
        <div className="day">{today}</div>
      </div>
      <div className="fishbyteMeter m-4 p-20">METER</div>
      <div className="leftBottomRow flex justify-between">
        <div className="meterText">Fishbyte Meter</div>
        <div className="favButton">
          <button>Favourite</button>
        </div>
      </div>
    </div>
  );
}
