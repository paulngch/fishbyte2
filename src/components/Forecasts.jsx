import { Link } from "react-router-dom";
import Weather from "../pages/Weather";
export default function Forecasts({ today }) {
  console.log("FORECAST", today);

  //pass setState to forecasts, set the state, pass the state to shared layout ->fishbytescore

  return;

  <>
    <Weather
      forecastOneDay={forecastOneDay}
      tempHour={tempHour}
      weatherCode={weatherCode}
      setWeatherCode={setWeatherCode}
      setForecastOneDay={setForecastOneDay}
      todate={todate}
    />
  </>;
}
