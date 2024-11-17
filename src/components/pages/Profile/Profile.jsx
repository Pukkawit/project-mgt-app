import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import PropTypes from "prop-types";
import ProfileHeader from "./ProfileHeader";

const Profile = ({ isSidebarOpen }) => {
  return (
    <div className="profile relative container mx-auto h-screen overflow-hidden pb-24">
      <ProfileHeader />
      <Sidebar />

      <main
        className={`profile-main relative ${
          isSidebarOpen ? "ml-[70px]" : "ml-[291px]"
        } transition-all duration-300 px-8 pt-10 max-w-[1200px] h-full`}
      >
        <div className="scrollbar-thin h-full overflow-y-auto ">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

Profile.propTypes = {
  isSidebarOpen: PropTypes.bool,
};

export default Profile;
