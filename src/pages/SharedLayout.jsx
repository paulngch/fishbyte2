import { Link, Outlet } from "react-router-dom";
import RightSideBar from "../components/RightSideBar";
import FishbyteScore from "../components/FishbyteScore";
import { DateTime } from "luxon";
import { useState, useEffect } from "react";

export default function SharedLayout({
  tempHour,
  todate,
  now,
  monthNames,
  today,
  timeState,
  setTimeState,
}) {
  useEffect(() => {
    setInterval(() => {
      setTimeState(new Date());
    }, 30000);
  }, []);
  return (
    <div className="flex">
      <div className="">
        <FishbyteScore
          className="leftNav relative m-2"
          todate={todate}
          now={now}
          monthNames={monthNames}
          today={today}
          tempHour={tempHour}
        />
      </div>
      <div className=" ml-14">
        <div className="flex justify-center my-9">
          <div className="flex text-2xl my-auto mx-auto">now: </div>
          <div className="text-4xl">
            {timeState.toLocaleDateString("en-SG", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
            <br />
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
