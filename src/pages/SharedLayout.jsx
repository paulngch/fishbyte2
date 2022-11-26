import { Link, Outlet } from "react-router-dom";
import RightSideBar from "../components/RightSideBar";
import FishbyteScore from "../components/FishbyteScore";
import { DateTime } from "luxon";
import { useState, useEffect } from "react";

export default function SharedLayout({
  tempHour,
  // todate,
  now,
  monthNames,
  today,
  timeState,
  setTimeState,
  tempDate
}) {
  useEffect(() => {
    setInterval(() => {
      setTimeState(new Date());
    }, 60000);
  }, []);
  return (
    <div className="flex">
      <div className="">
        <FishbyteScore
          className="leftNav relative m-2"
          // todate={todate}
          now={now}
          monthNames={monthNames}
          today={today}
          tempHour={tempHour}
          tempDate={tempDate}
        />
      </div>
      <div className=" ml-14">
        <div className="flex justify-center mt-2 mb-5">
          <div className="flex text-l my-auto mx-2">present: </div>
          <div className="text-xl">
            {timeState.toLocaleDateString("en-SG", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
            {` , `}
            {timeState.toLocaleString("en-SG", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </div>
        </div>
        <Outlet />
      </div>
      <RightSideBar />
    </div>
  );
}
