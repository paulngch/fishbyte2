import { Link } from "react-router-dom";
import FishbyteScore from "../components/FishbyteScore";
import RightSideBar from "../components/RightSideBar";

export default function Homepage() {
  return (
    <>
      <div className="flex m-20">
        <div className="leftNav fixed m-2">
          <FishbyteScore />
        </div>
        <div className="pageTabs mx-4 p-60 fixed">
          <div>
            <button>Calender</button>
          </div>
          <div>
            <button>Chart</button>
          </div>
          <RightSideBar/>
        </div>
      </div>
    </>
  );
}
