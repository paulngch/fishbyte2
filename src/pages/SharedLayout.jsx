import { Link, Outlet } from "react-router-dom";
import RightSideBar from "../components/RightSideBar";
import FishbyteScore from "../components/FishbyteScore";
import { DateTime } from "luxon";
import { useState, useEffect } from "react";
import HeaderBar from "../components/HeaderBar";

export default function SharedLayout({
  tempHour,
  today,
  timeState,
  setTimeState,
  tempDate,
  toMonth,
  setToMonth,
  sunRise,
  sunSet,
  temperature,
  condition,
  setForecastOneDay,
}) {
  useEffect(() => {
    setInterval(() => {
      setTimeState(new Date());
    }, 60000);
  }, []);
  return (
    <div className="flex flex-col mt-20 font-serif">
      <HeaderBar />
      <div className="flex">
        <FishbyteScore
          className="leftNav relative m-2"
          today={today}
          tempHour={tempHour}
          tempDate={tempDate}
          toMonth={toMonth}
          setToMonth={setToMonth}
          timeState={timeState}
          sunRise={sunRise}
          sunSet={sunSet}
          temperature={temperature}
          condition={condition}
          setForecastOneDay={setForecastOneDay}
        />
      
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
    </div>
  );
}
