import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { DateTime } from "luxon";
import Meter from "./Meter";
import { RiHeartFill } from "react-icons/ri";
import { RiHeartLine } from "react-icons/ri";

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
  setForecastOneDay,
  setFavArray,
  favArray,
}) {
  const [meterScore, setMeterScore] = useState(0);

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

  const favClickHandler = () => {
    setFavArray([
      ...favArray,
      { id:`${tempDate}T${tempHour}`, hour: tempHour, date: tempDate, score: meterScore },
    ]);
  };

  const FavIcon = ({ icon, text = "tooltip" }) => {
    return (
      <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
      </div>
    );
  };

  return (
    <div className="flex-col">
      <div className="flex justify-center text-2xl m-1 p-2">FORECAST</div>
      <div className="topBar flex justify-between text-2xl">
        <div className="flex">
          {tempDate.slice(-2)}
          <br />
          {toMonth}
        </div>
        <div>{tempHour}:00h</div>
        <div className="day">{currentWeekday}</div>
      </div>

      <div className="fishbyteMeter mt-[-100px]">
        <Meter
          timeState={timeState}
          tempHour={tempHour}
          sunRise={sunRise}
          sunSet={sunSet}
          temperature={temperature}
          condition={condition}
          setForecastOneDay={setForecastOneDay}
          meterScore={meterScore}
          setMeterScore={setMeterScore}
        />
      </div>

      <div className="meterText flex justify-center mt-[-20px] text-2xl font-extrabold text-slate-600">
        Fishbyte Meter
      </div>
      <div className="favButton flex justify-end mt-2 pt-4">
        <FavIcon
          text="Favourite"
          icon={<RiHeartLine onClick={favClickHandler} size="35" />}
        />
      </div>
    </div>
  );
}
