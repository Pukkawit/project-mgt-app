import { NavLink } from "react-router-dom";
import { dashboardMenuITems } from "../../../../../public/constants/dashboardMenuITems";

const DashboardNav = () => {
  return (
    <div className="flex gap-x-20">
      {dashboardMenuITems.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) =>
            isActive
              ? "text-primary transition-colors ease-in-out delay-150 mediumBodyTextM font-urbanist font-normal"
              : "font-urbanist font-normal text-darkColors-grey mediumBodyTextM"
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardNav;
