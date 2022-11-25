import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import { DateTime } from "luxon";
import SharedLayout from "./pages/SharedLayout";
import Weather from "./pages/Weather";
import axios from "axios";
import Forecasts from './components/Forecasts'

function App() {
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

  // console.log("MONTH NOW", monthNames[now.month]);

  // console.log(now);
  const exactDateNow = DateTime.now().toFormat("yyyy-MM-dd");

  const toDay = DateTime.now()
    .toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)
    .slice(0, 3);

  const [today, setToday] = useState(toDay);
  const [todate, setTodate] = useState(exactDateNow);
  const [tempHour, setTempHour] = useState(DateTime.now().toObject().hour);
  const [forecastOneDay, setForecastOneDay] = useState();
  const [weatherCode, setWeatherCode] = useState("");


  let openMeteoUrlSevenDays = `ttps://api.open-meteo.com/v1/forecast?latitude=1.37&longitude=103.80&hourly=temperature_2m&daily=sunrise,sunset&timezone=Asia%2FSingapore`;
  let openMeteoUrlOneDay = `https://api.open-meteo.com/v1/forecast?latitude=1.37&longitude=103.80&hourly=temperature_2m,precipitation,rain,weathercode&daily=weathercode,sunrise,sunset&current_weather=true&timezone=Asia%2FSingapore&start_date=${todate}&end_date=${todate}`;


    useEffect(() => {
      async function getData() {
        const response = await fetch(openMeteoUrlOneDay);
        const data = await response.json();
        setForecastOneDay(data);
      }

      getData();
      // eslint-disable-next-line
    }, []);
  
  // useEffect(() => {
  //   axios
  //     .get(openMeteoUrlOneDay)
  //     .then((response) => setForecastOneDay(response.data))
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);
  // console.log(forecastOneDay);

  //============================================
  return (
    <>{forecastOneDay ?(
      <div className="flex m-20">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <SharedLayout
                  todate={todate}
                  now={now}
                  monthNames={monthNames}
                  today={today}
                />
              }
            >
              <Route
                index
                element={
                  <Home
                    todate={todate}
                    now={now}
                    monthNames={monthNames}
                    today={today}
                  />
                }
              />
              <Route path="/calendar" element={<Calendar />} />
              {/* <Route path="/forecasts" element={<Forecasts today={today}/>} /> */}

              <Route
                path="/weather"
                element={
                  <Weather
                    forecastOneDay={forecastOneDay}
                    tempHour={tempHour}
                    weatherCode={weatherCode}
                    setWeatherCode={setWeatherCode}
                    setForecastOneDay={setForecastOneDay}
                    todate={todate}
                  />
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
        <div></div>
      </div>):("")}
    </>
  );
}
export default App;
