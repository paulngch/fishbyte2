import { Link } from "react-router-dom";
import { useState } from "react";
// import { DateTime } from "luxon";

export default function FishbyteScore({ todate, now, monthNames, today }) {

  console.log(now);
  return (
    <div className="flex-col">
      <div className="topBar flex justify-between font-Poiret One">
        {now.day}
        <br />
        {monthNames[now.month]}
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
