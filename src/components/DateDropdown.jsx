import { useState } from "react";
import { DateTime } from "luxon";

export default function DateDropdown({
  setTempDate,
  setTempHour,
  tempDate,
  tempHour,
}) {
  const [pickedDate, setPickedDate] = useState("");

  const changeHandlerDate = (value) => {
    setTempDate(value);
  };
  const changeHandlerTime = (value) => {
    setTempHour(value);
  };

  return (
    <div>
      <input
        type="date"
        id="start"
        className=" bg-gray-300 text-black"
        defaultValue={tempDate}
        min={DateTime.now().toFormat("yyyy-MM-dd")}
        max={DateTime.now().plus({ days: 6 }).toISODate()}
        onChange={(e) => changeHandlerDate(e.target.value)}
      />

      <select
        className="bg-gray-300 text-black"
        id="from"
        defaultValue={tempHour}
        onChange={(e) => changeHandlerTime(e.target.value)}
      >
        <option value="0">0:00</option>
        <option value="1">1:00</option>
        <option value="2">2:00</option>
        <option value="3">3:00</option>
        <option value="4">4:00</option>
        <option value="5">5:00</option>
        <option value="6">6:00</option>
        <option value="7">7:00</option>
        <option value="8">8:00</option>
        <option value="9">9:00</option>
        <option value="10">10:00</option>
        <option value="11">11:00</option>
        <option value="12">12:00</option>
        <option value="13">13:00</option>
        <option value="14">14:00</option>
        <option value="15">15:00</option>
        <option value="16">16:00</option>
        <option value="17">17:00</option>
        <option value="18">18:00</option>
        <option value="19">19:00</option>
        <option value="20">20:00</option>
        <option value="21">21:00</option>
        <option value="22">22:00</option>
        <option value="23">23:00</option>
      </select>
    </div>
  );
}
