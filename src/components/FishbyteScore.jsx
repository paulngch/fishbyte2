import { Link } from "react-router-dom";
import { useState } from "react";
// import { DateTime } from "luxon";

export default function FishbyteScore({
  tempHour,
  todate,
  now,
  monthNames,
  today,
}) {
  return (
    <div className="flex-col">
      <div className="topBar flex justify-between font-Poiret One text-2xl">
        {now.day}
        <br />
        {monthNames[now.month]}
        <div>{tempHour}:00h</div>
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
