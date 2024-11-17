import PropTypes from "prop-types";
import SiteLogo from "../../../../public/assets/icons/dashboard/SiteLogo";
import ProfileMenu from "../../resuables/Profile Menu/ProfileMenu";
import {
  dashboardMenuItems,
  myTasksMenuItems,
} from "../../../../public/constants/profileMenuItems";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const ProfileHeader = (/* { isSidebarOpen } */) => {
  const [menuItems, setMenuItems] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("dashboard")) {
      setMenuItems(dashboardMenuItems);
    } else if (location.pathname.includes("tasks")) {
      setMenuItems(myTasksMenuItems);
    } else if (
      location.pathname.includes("inbox") ||
      location.pathname.includes("analyse") ||
      location.pathname.includes("members") ||
      location.pathname.includes("settings")
    ) {
      setMenuItems(dashboardMenuItems);
    }
  }, [location.pathname]);

  return (
    <div className="h-16 w-full flex items-center">
      <div className="flex items-center justify-center h-full w-[291px] border-0 border-b-4 border-r-2 border-darkColors-lightestGrey">
        <SiteLogo stroke="#0177FB" fill="#0177FB" />
      </div>
      <ProfileMenu menuItems={menuItems} />
    </div>
  );
};

ProfileHeader.propTypes = {
  isSidebarOpen: PropTypes.bool,
};

export default ProfileHeader;
