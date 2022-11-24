import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Weather({
  forecastOneDay,
  tempHour,
  weatherCode,
  setWeatherCode,
}) {
  //For condition, i.e Clear / Shower/ Overcast

  const conditionCheck = forecastOneDay?.hourly?.weathercode[0]
    ? "Condition"
    : "Error";
  console.log("CONDITION CHECK", conditionCheck);

  const [condition, setCondition] = useState("");
  console.log(tempHour);

  //Try shifting url and fetches down to individual components =====
  //rethink about changing state and useeffect
  useEffect(() => {
    switch (forecastOneDay?.hourly?.weathercode[0]) {
      case 3:
        setCondition("Overcast");
        break;
      case 80:
        setCondition("Slight Showers");
        break;
      case undefined:
        setCondition("error");
        break;
    }
  }, []);

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
