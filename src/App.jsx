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

  let sunRise = forecastOneDay?.daily.sunrise[0].slice(-5);
  let sunSet = forecastOneDay?.daily.sunset[0].slice(-5);
  let temperature = forecastOneDay?.hourly["temperature_2m"][tempHour];
  let condition = "";
  switch (forecastOneDay?.hourly.weathercode[tempHour]) {
    case 0:
      condition = "Clear Sky";
      break;
    case 1:
      condition = "Mainly Clear";
      break;
    case 2:
      condition = "Partly Cloudy";
      break;
    case 3:
      condition = "Overcast";
      break;
    case 45:
      condition = "Fog";
      break;
    case 48:
      condition = "Depositing Rime Fog";
      break;
    case 51:
      condition = "Light Drizzle";
      break;
    case 53:
      condition = "Moderate Drizzle";
      break;
    case 55:
      condition = "Dense Drizzle";
      break;
    case 56:
      condition = "Light, Freezing Drizzle";
      break;
    case 57:
      condition = "Dense, Freezing Drizzle";
      break;
    case 61:
      condition = "Slight Rain";
      break;
    case 63:
      condition = "Moderate Rain";
      break;
    case 65:
      condition = "Intense Rain";
      break;
    case 66:
      condition = "Light,Freezing Rain";
      break;
    case 67:
      condition = "Intense, FreezingRain";
      break;
    case 71:
      condition = "Slight Snow";
      break;
    case 73:
      condition = "Moderate Snow";
      break;
    case 75:
      condition = "Heavy Snow";
      break;
    case 77:
      condition = "Snow Grains";
      break;
    case 80:
      condition = "Slight Showers";
      break;
    case 81:
      condition = "Moderate Showers";
      break;
    case 82:
      condition = "Violent Showers";
      break;
    case 85:
      condition = "Slight Snow Showers";
      break;
    case 86:
      condition = "Heavy Snow Showers";
      break;
    case 95:
      condition = "Thunderstorm";
      break;
    case 96:
      condition = "Thunderstorm";
      break;
    case 99:
      condition = "Thunderstorm";
      break;
    case undefined:
      condition = "Alien Weather";
      break;
  }

  // const [temperature, setTemperature] = useState("");
  // const [sunRise, setSunRise] = useState("");
  // const [sunSet, setSunSet] = useState("");
  // const [condition, setCondition] = useState("");

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
                        monthNames={monthNames}
                        sunRise={sunRise}
                        sunSet={sunSet}
                        temperature={temperature}
                        condition={condition}
                        // condition={condition}
                        // setCondition={setCondition}
                        // temperature={temperature}
                        // setTemperature={setTemperature}
                        // sunRise={sunRise}
                        // setSunRise={setSunRise}
                        // sunSet={sunSet}
                        // setSunSet={setSunSet}
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
