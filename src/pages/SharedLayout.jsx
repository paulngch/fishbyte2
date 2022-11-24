import { Link, Outlet } from "react-router-dom";
import RightSideBar from "../components/RightSideBar";
import FishbyteScore from "../components/FishbyteScore";
import { DateTime } from "luxon";

export default function SharedLayout({ todate, now, monthNames, today }) {
  return (
    <>
      <FishbyteScore
        className="leftNav relative m-2 bg"
        todate={todate}
        now={now}
        monthNames={monthNames}
        today={today}
      />
      <Outlet />
      <RightSideBar />
    </>
  );
}
