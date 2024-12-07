import PropTypes from "prop-types";
import SiteLogo from "../../../../public/assets/icons/dashboard/SiteLogo";
import ProfileMenu from "../../resuables/Profile Menu/ProfileMenu";
import {
  dashboardMenuItems,
  myTasksMenuItems,
} from "../../../../public/constants/profileMenuItems";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderMembers from "./Members/HeaderMembers";

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
      location.pathname.includes("settings")
    ) {
      setMenuItems(dashboardMenuItems);
    }
  }, [location.pathname]);

  return (
    <div className="h-auto w-full flex items-center">
      {!location.pathname.includes("members") ? (
        <>
          <div className="flex items-center justify-center h-16 w-[291px] border-0 border-b-4 border-r-2 border-darkColors-lightestGrey">
            <SiteLogo stroke="#0177FB" fill="#0177FB" />
          </div>
          <ProfileMenu menuItems={menuItems} />
        </>
      ) : (
        <div className="flex items-center  min-w-full w-full">
          <div className="flex items-center w-[291px] bg-slate-200 ">
            <SiteLogo stroke="#0177FB" fill="#0177FB" />
          </div>
          <HeaderMembers />
        </div>
      )}
    </div>
  );
};
/* location.pathname.includes("members") */
ProfileHeader.propTypes = {
  isSidebarOpen: PropTypes.bool,
};

export default ProfileHeader;
