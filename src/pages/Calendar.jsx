import { Link } from "react-router-dom";
import { DateTime } from "luxon";
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import {useEffect} from 'react'

export default function Calendar({ timeState, setTimeState, hourNow, tempHour,setTempHour }) {
  let arrOfHours = [];
  for (let i = 0; i < 24; i++) {
    arrOfHours.push(i);
  }

//  useEffect(() => {
//    setInterval(() => setTimeState(new Date()), 30000);
//  }, []);

  const centerScroll = (value) => {
    // document.getElementsByClassName(`.timeButtons`).style.fontSize= '20px';
    const center = document.getElementById(value)
    center.scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
    setTempHour(value)
  }
  console.log(tempHour)

  let hourButtons = arrOfHours.map((ele, index) => (
    <button onClick={(e)=>{centerScroll(e.target.value)}} key={index} value={index} id={index} className="timeButtons m-2 inline-block cursor-pointer hover:scale-150 ease-in-out duration-300">{ele}:00</button>
  ));

  console.log(arrOfHours);

  const slideLeft= () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft -150;
  }

  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft +150;
  };

  return (
    <>
      <div className="mx-auto my-auto ">
        <div>
          <button>Minus</button>
          <button>Plus</button>
        </div>
        <div className="mx-auto mt-4 mb-8 font-Poiret One">{}</div>
        <div className="relative flex item-center font-Poiret One mx-auto mb-4 mt-8 max-w-[300px]">
          <MdChevronLeft onClick={slideLeft} size={40} />
          <div
            id="slider"
            className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
          >
            {hourButtons}
          </div>
          <MdChevronRight onClick={slideRight} size={40} />
        </div>
        {/* <div>
          time now: <span className="text-2xl">
          {timeState.toLocaleString("en-SG", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
          </span>
        </div> */}
      </div>
    </>
  );
}
