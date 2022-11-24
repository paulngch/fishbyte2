import { Link } from "react-router-dom";

export default function Calendar() {
  return (
    <>
      <div className="dateTabs mx-auto my-auto ">
        <div>
          <button>Minus</button>
          <button>Plus</button>
        </div>
        <div className="mx-auto mt-4 mb-8 font-Poiret One">DATE+MONTH</div>
        <div className="mx-auto mb-4 mt-8 font-Poiret One">DAY</div>
        <div>
          <button>Minus</button>
          <button>Plus</button>
        </div>
      </div>
    </>
  );
}
