import { Link } from "react-router-dom";
import { TbCalendar } from "react-icons/tb";

export default function RightSideBar() {
    const SideBarIcon = ({icon}) => {
        return(
            <div className="sidebar-icon">
                {icon}
            </div>
        )

    }
  return (
    <div className="fixed top-0 right-0 h-screen w-16 m-20 flex flex-col gap-6">
      <i>
        <SideBarIcon icon={<TbCalendar size="100" />} />
      </i>
      <i>
        <SideBarIcon icon={<TbCalendar size="100" />} />
      </i>
      <i>
        <SideBarIcon icon={<TbCalendar size="100" />} />
      </i>
      <i>
        <SideBarIcon icon={<TbCalendar size="100" />} />
      </i>
    </div>
  );
}
