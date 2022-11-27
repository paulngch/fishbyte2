import { Link } from "react-router-dom";
import { DateTime } from "luxon";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useState, useEffect } from "react";

export default function Calendar({
  tempDate,
  setTempDate,
  tempHour,
  setTempHour,
  monthNames
}) {
  let arrOfHours = [];
  for (let i = 0; i < 24; i++) {
    arrOfHours.push(i);
  }
  //=======================================
  //Added in index 0 and last item is repeat
  //in order for calendar to work properly in December
  //=======================================
  const daysInMonth = [
    { 0: 0 },
    { month: "Jan", days: 30 },
    { month: "Feb", days: 28 },
    { month: "Mar", days: 31 },
    { month: "Apr", days: 30 },
    { month: "May", days: 31 },
    { month: "Jun", days: 30 },
    { month: "Jul", days: 31 },
    { month: "Aug", days: 31 },
    { month: "Sep", days: 30 },
    { month: "Oct", days: 31 },
    { month: "Nov", days: 30 },
    { month: "Dec", days: 31 },
    { month: "Jan", days: 30 },
  ];

  let currentMonth = DateTime.now().toObject().month;
  let currentDay = DateTime.now().toObject().day;
  //=====================================
  //Logic for printing Array of Days=====
  //=====================================
  let arrOfDays = [];
  for (let i = 0; i < 7; i++) {
    if (currentDay + i <= daysInMonth[currentMonth].days) {
      arrOfDays.push(`${daysInMonth[currentMonth].month} ${currentDay + i}`);
    } else {
      arrOfDays.push(
        `${daysInMonth[currentMonth + 1].month} ${
          currentDay + i - daysInMonth[currentMonth].days
        }`
      );
    }
  }
  // console.log(arrOfDays);

  //==========================
  //Logic for scrolling=======
  //==========================
  const centerScrollDays = (value) => {
    const center = document.getElementById(value);
    center.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    console.log(value)
    console.log(value.slice(0, 3));
    if (currentMonth === 12 && arrOfDays[6] <= 7 && value.slice(-2) <= 7) {
      setTempDate(
        `${DateTime.now().toObject().year + 1}-01-${value.slice(-2)}`
      );
    } else if (value.slice(-2, -1)===" ") {
      setTempDate(
        `${DateTime.now().toObject().year}-${monthNames.findIndex(
          (element) => element === value.slice(0, 3)
        )}-0${value.slice(-1)}`
      );
    } else {setTempDate(
      `${DateTime.now().toObject().year}-${monthNames.findIndex(
        (element) => element === value.slice(0, 3)
      )}-${value.slice(-2)}`
    );}
  };
  // console.log(tempDate);

  const centerScrollHour = (value) => {
    // document.getElementsByClassName(`.timeButtons`).style.fontSize= '20px';
    const center = document.getElementById(value);
    center.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    setTempHour(value);
  };
  // console.log(tempHour);

  let dayButtons = arrOfDays.map((ele, index) => (
    <button
      onClick={(e) => {
        centerScrollDays(e.target.value);
      }}
      key={ele}
      value={ele}
      id={ele}
      className="dayButtons m-2 inline-block cursor-pointer hover:scale-150 ease-in-out duration-300"
    >
      {ele}
    </button>
  ));

  let hourButtons = arrOfHours.map((ele, index) => (
    <button
      onClick={(e) => {
        centerScrollHour(e.target.value);
      }}
      key={index}
      value={index}
      id={index}
      className="timeButtons m-2 inline-block cursor-pointer hover:scale-150 ease-in-out duration-300"
    >
      {ele}:00
    </button>
  ));
// console.log("TEMPDATE", tempDate)
// console.log("TEMPHOUR", tempHour)
  // console.log(arrOfHours);

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 150;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 150;
  };
    const slideDayLeft = () => {
      const slider = document.getElementById("sliderDay");
      slider.scrollLeft = slider.scrollLeft - 150;
    };

    const slideDayRight = () => {
      const slider = document.getElementById("sliderDay");
      slider.scrollLeft = slider.scrollLeft + 150;
    };

  return (
    <>
      <div className="mx-auto my-auto ">
        <div className="relative flex item-center font-Poiret One mx-auto mb-4 mt-8 max-w-[300px]">
          <MdChevronLeft onClick={slideDayLeft} size={40} />
          <div
            id="sliderDay"
            className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {dayButtons}
          </div>
          <MdChevronRight onClick={slideDayRight} size={40} />
        </div>
        <div className="relative flex item-center font-Poiret One mx-auto mb-4 mt-8 max-w-[300px]">
          <MdChevronLeft onClick={slideLeft} size={40} />
          <div
            id="slider"
            className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {hourButtons}
          </div>
          <MdChevronRight onClick={slideRight} size={40} />
        </div>
      </div>
    </>
  );
}
