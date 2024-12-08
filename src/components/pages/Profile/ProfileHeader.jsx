import PropTypes from "prop-types";
import SiteLogo from "../../../../public/assets/icons/dashboard/SiteLogo";
import ProfileMenu from "../../resuables/Profile Menu/ProfileMenu";
import {
  dashboardMenuItems,
  myTasksMenuItems,
} from "../../../constants/profileMenuItems";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderMembers from "./Members/HeaderMembers";
import SettingsHeader from "./Settings/SettingsHeader";

const ProfileHeader = (/* { isSidebarOpen } */) => {
  const [menuItems, setMenuItems] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // Determine menu items based on the current route
    if (
      location.pathname.includes("dashboard") ||
      location.pathname.includes("analyse")
    ) {
      setMenuItems(dashboardMenuItems);
    } else if (location.pathname.includes("tasks")) {
      setMenuItems(myTasksMenuItems);
    }
  }, [location.pathname]);

  const renderHeaderContent = () => {
    // Dynamically render the header based on the route
    if (location.pathname.includes("members")) {
      return <HeaderMembers />;
    }
    if (location.pathname.includes("settings")) {
      return <SettingsHeader />;
    }
    if (location.pathname.includes("inbox")) {
      return null;
    }
    return null;
  };

  const isHeaderPage = ["members", "settings", "inbox"].some((path) =>
    location.pathname.includes(path)
  );

  return (
    <div className="h-auto w-full flex items-center">
      {!isHeaderPage ? (
        // Render default profile menu and logo for non-header pages
        <>
          <div className="flex items-center justify-center h-16 w-[291px] border-0 border-b-4 border-r-2 border-darkColors-lightestGrey">
            <SiteLogo stroke="#0177FB" fill="#0177FB" />
          </div>
          <ProfileMenu menuItems={menuItems} />
        </>
      ) : (
        // Render header-specific content
        <div className="flex items-center min-w-full w-full">
          <div className="flex items-center min-w-[291px] bg-slate-200">
            <SiteLogo stroke="#0177FB" fill="#0177FB" />
          </div>
          {renderHeaderContent()}
        </div>
      )}
    </div>
  );
};

ProfileHeader.propTypes = {
  isSidebarOpen: PropTypes.bool,
};

export default ProfileHeader;
