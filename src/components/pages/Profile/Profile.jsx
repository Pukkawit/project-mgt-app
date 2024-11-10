import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import PropTypes from "prop-types";
/* import { useState } from "react"; */
const Profile = ({ isSidebarOpen }) => {
  /* const [sideBarOpen, setSideBarOpen] = useState();
   */

  /*   const handleToggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  }; */
  return (
    <div className="relative max-container h-screen">
      <Sidebar />
      <main
        className={`relative ${
          isSidebarOpen ? "ml-70px]" : "ml-[291px]"
        } transition-all duration-300 px-8 py-10 max-w-[1200px]`}
      >
        <Outlet />
      </main>
    </div>
  );
};

Profile.propTypes = {
  isSidebarOpen: PropTypes.string,
};
export default Profile;

{
  /* <button
className="text-white font-bold text-sm rounded-full focus:outline-none"
onClick={handleToggleSideBar}
>
<svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M6 18L18 6M6 6l12 12"
  />
</svg>
</button> */
}
