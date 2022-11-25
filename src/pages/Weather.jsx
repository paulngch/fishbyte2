import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Weather({
  forecastOneDay,
  tempHour,
  weatherCode,
  setWeatherCode,
  setForecastOneDay,
  todate,
}) {
  //For condition, i.e Clear / Shower/ Overcast

  let openMeteoUrlOneDay = `https://api.open-meteo.com/v1/forecast?latitude=1.37&longitude=103.80&hourly=temperature_2m,precipitation,rain,weathercode&daily=weathercode,sunrise,sunset&current_weather=true&timezone=Asia%2FSingapore&start_date=${todate}&end_date=${todate}`;

  const [loading, setLoading] = useState("");
  const [error,setError] = useState(false)
  useEffect(()=>{
    setLoading("loading");
    axios
    .get(openMeteoUrlOneDay)
    .then((response) => {
        setLoading("success");
        setForecastOneDay(response.data)
      })
      .catch((err)=>{
        console.error('Error:',err);
        setLoading("error");
        setError(err);

      });
  },[]);

  if (loading==="error") {
    return(console.log(error.toString()))
  }
  console.log(forecastOneDay?.hourly?.weathercode[0]);




  // useEffect(() => {
  //   axios
  //     .get(openMeteoUrlOneDay)
  //     .then((response) => {
  //       setForecastOneDay(response.data);
  //       console.log("test response", response.data);
  //       console.log("WEATHERCODE", forecastOneDay?.hourly?.weathercode[0]);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);
  // console.log(forecastOneDay);

  const conditionCheck = forecastOneDay?.hourly?.weathercode[0]
    ? "Condition"
    : "Error";
  console.log("CONDITION CHECK", conditionCheck);

  const [condition, setCondition] = useState("");
  console.log(tempHour);

  //Try shifting url and fetches down to individual components =====
  //rethink about changing state and useeffect
  // useEffect(() => {
  //   switch (forecastOneDay?.hourly?.weathercode[0]) {
  //     case 3:
  //       setCondition("Overcast");
  //       break;
  //     case 80:
  //       setCondition("Slight Showers");
  //       break;
  //     case undefined:
  //       setCondition("error");
  //       break;
  //   }
  // }, []);

  console.log("CONDITION", condition);
  //       case 1:
  //         day = "Monday";
  //         break;
  //       case 2:
  //         day = "Tuesday";
  //         break;
  //       case 3:
  //         day = "Wednesday";
  //         break;
  //       case 4:
  //         day = "Thursday";
  //         break;
  //       case 5:
  //         day = "Friday";
  //         break;
  //       case 6:
  //         day = "Saturday";
  //     }
  // console.log("F1D", forecastOneDay)
  // console.log("WEATHERCODE", weatherCode)
  //   console.log(forecastOneDay.hourly?.weathercode[hourNow]);

  return (
    <div className="flex flex-col mx-auto p-6">
      <div className="mx-auto my-2 p-2 text-3xl font-extralight">
        Condition: {condition}
      </div>
      <div className="mx-auto my-2 p-2 text-3xl font-extralight">Temp </div>
      <div className="mx-auto my-2 p-2 text-3xl font-extralight">
        Air Pressure{" "}
      </div>
      <div className="mx-auto my-2 p-2 text-3xl font-extralight">
        <div>Sunrise </div>
        <div>Sunset </div>
      </div>
    </div>
  );
}
