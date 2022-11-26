import { Link, NavLink } from "react-router-dom";
import { TbCalendar } from "react-icons/tb";
import { FaCloudSun } from "react-icons/fa";

export default function RightSideBar() {
  const SideBarIcon = ({ icon }) => {
    return <div className="sidebar-icon">{icon}</div>;
  };

  const handleClick = () => {
    console.log("click");
  };

  return (
    <div className=" h-screen w-16 ml-8 flex flex-col gap-6">
      <i>
        <NavLink>
          <SideBarIcon icon={<TbCalendar size="100" />} />
        </NavLink>
      </i>
      <i>
        <NavLink to="/calendar">
          <SideBarIcon icon={<TbCalendar size="100" />} />
        </NavLink>
      </i>
      <i>
        <NavLink to="/weather">
          <SideBarIcon icon={<FaCloudSun size="100" />} />
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
