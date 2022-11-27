import { Link, NavLink } from "react-router-dom";
import { TbCalendar } from "react-icons/tb";
import { FaCloudSun } from "react-icons/fa";
import {AiFillHome} from "react-icons/ai"

export default function RightSideBar() {
  const SideBarIcon = ({ icon , text='tooltip'}) => {
    return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
      </div>);
  };

  const handleClick = () => {
    // console.log("click");
  };

  return (
    <div className=" h-screen w-16 ml-8 flex flex-col gap-6">
      <i>
        <NavLink to="/">
          <SideBarIcon text="home" icon={<AiFillHome size="100" />} />
        </NavLink>
      </i>
      <i>
        <NavLink to="/calendar">
          <SideBarIcon icon={<TbCalendar size="100" />} />
        </NavLink>
      </i>
      <i>
        <NavLink to="/weather">
          <SideBarIcon text="weather" icon={<FaCloudSun size="100" />} />
        </NavLink>
      </i>
      <i>
        <NavLink>
          <SideBarIcon icon={<TbCalendar size="100" />} />
        </NavLink>
      </i>
    </div>
  );
}
