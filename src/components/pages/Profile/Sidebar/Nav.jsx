import { NavLink } from "react-router-dom";
import { sideBarMenuitems } from "../../../../../public/constants/profileMenuItems";
import addIcon from "../../../../../public/assets/icons/dashboard/sidebarIcons.svg";

const Nav = () => {
  return (
    <nav className="flex flex-col">
      {sideBarMenuitems.map((item, index) => (
        <NavLink key={index} to={item.path} className="cursor-pointer">
          {({ isActive }) => (
            <div
              className={`flex items-center gap-x-3 px-6 min-h-12 transition-colors duration-300 ease-in-out group hover:bg-primaryShade4 hover:border-l-[3px] hover:border-dashboardBlue ${
                isActive
                  ? "bg-primaryShade4 border-l-[3px] border-dashboardBlue text-dashboardBlue"
                  : "border-l-[3px] border-transparent text-darkColors-gray"
              }`}
            >
              <svg className="group-hover:text-blue-700 h-6 w-8 flex items-center justify-center">
                <use href={`${addIcon}${item.icon}`}></use>
              </svg>
              <div className="w-full flex justify-between items-center">
                <p className="mediumBodyTextM group-hover:text-dashboardBlue">
                  {item.label}
                </p>
                {item.inbox && (
                  <div
                    className={`smallBodyTextM ${
                      item.inbox.length >= 1
                        ? "text-red-600"
                        : "text-darkColors-gray"
                    } bg-[#EFEFF1] flex items-center justify-center rounded-full p-2 min-h-8 min-w-8 cursor-pointer`}
                  >
                    {item.inbox.length}
                  </div>
                )}
              </div>
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
