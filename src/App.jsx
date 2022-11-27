import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import { DateTime } from "luxon";
import SharedLayout from "./pages/SharedLayout";
import Weather from "./pages/Weather";
import axios from "axios";
import Forecasts from "./components/Forecasts";

function App() {
  //============================================
  //Variables:
  //exactDateNow=(today in yyyy-mm-dd format), && used for setTodate to query API for 1-day
  //toDay=(today's Weekday in string) && used for setToday to display weekday in String
  //now=(object) && hourNow=(0-23) && used as INDEX for querying API.hourly["temperature_2m"][hourNow]

  const monthNames = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const now = DateTime.now().toObject();
  // console.log("NOW", now)
  const hourNow = now.hour;

  // console.log("MONTH NOW", monthNames[now.month]);

  // console.log(now);
  const exactDateNow = DateTime.now().toFormat("yyyy-MM-dd");

  const toDay = DateTime.now()
    .toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)
    .slice(0, 3);

  // console.log(DateTime.now().toObject());

  const [today, setToday] = useState(toDay);
  // const [todate, setTodate] = useState(exactDateNow);
  const [tempHour, setTempHour] = useState(DateTime.now().toObject().hour);
  const [tempDate, setTempDate] = useState(exactDateNow);
  const [forecastOneDay, setForecastOneDay] = useState();
  const [timeState, setTimeState] = useState(new Date());

  let currentMonthFishbyte = tempDate.slice(5, 7);

  const [toMonth, setToMonth] = useState(monthNames[currentMonthFishbyte]);
  // console.log("TOMONTH", toMonth);

  // let openMeteoUrlSevenDays = `https://api.open-meteo.com/v1/forecast?latitude=1.37&longitude=103.80&hourly=temperature_2m&daily=sunrise,sunset&timezone=Asia%2FSingapore`;
  let openMeteoUrlOneDay = `https://api.open-meteo.com/v1/forecast?latitude=1.37&longitude=103.80&hourly=temperature_2m,precipitation,rain,weathercode&daily=weathercode,sunrise,sunset&current_weather=true&timezone=Asia%2FSingapore&start_date=${tempDate}&end_date=${tempDate}`;

  useEffect(() => {
    async function getData() {
      const response = await fetch(openMeteoUrlOneDay);
      const data = await response.json();
      setForecastOneDay(data);
    }
    getData();
  }, [tempDate]);


  const [temperature, setTemperature] = useState("");
  const [sunRise, setSunRise] = useState("");
  const [sunSet, setSunSet] = useState("");
  const [condition, setCondition] = useState("");

  //============================================
  return (
    <div className="flex flex-col">
      {forecastOneDay ? (
        <div className="h-screen">
          <img
            src="/fishinglake.jpg"
            className="bg-cover absolute mix-blend-overlay"
          />
          <div className="flex justify-center left-80 mt-14">
            <BrowserRouter>
              <Routes>
                <Route
                  path="/"
                  element={
                    <SharedLayout
                      today={today}
                      tempHour={tempHour}
                      timeState={timeState}
                      setTimeState={setTimeState}
                      tempDate={tempDate}
                      toMonth={toMonth}
                      setToMonth={setToMonth}
                      sunRise={sunRise}
                      sunSet={sunSet}
                      temperature={temperature}
                      condition={condition}
                      setForecastOneDay={setForecastOneDay}
                    />
                  }
                >
                  <Route
                    index
                    element={
                      <Home now={now} monthNames={monthNames} today={today} />
                    }
                  />
                  <Route
                    path="/weather"
                    element={
                      <Weather
                        forecastOneDay={forecastOneDay}
                        tempHour={tempHour}
                        setTempHour={setTempHour}
                        tempDate={tempDate}
                        setTempDate={setTempDate}
                        condition={condition}
                        setCondition={setCondition}
                        temperature={temperature}
                        setTemperature={setTemperature}
                        sunRise={sunRise}
                        setSunRise={setSunRise}
                        sunSet={sunSet}
                        setSunSet={setSunSet}
                        monthNames={monthNames}
                      />
                    }
                  />
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default App;
