import Nav from "./Nav";
/* import SiteLogo from "../../../../../public/assets/icons/dashboard/SiteLogo"; */
/* import addIcon from "../../../../../public/assets/icons/dashboard/add-icon.svg"; */
/* import dashboardUser from "../../../../../public/assets/images/Avatars/dashboard-user.png";
import dotsMore from "../../../../../public/assets/icons/dashboard/dots-more.png"; */
import { useNavigate } from "react-router-dom";

const SiteLogo = "/assets/icons/dashboard/site-logo.svg";
const addIcon = "/assets/icons/dashboard/add-icon.svg";
const dashboardUser = "/assets/images/Avatars/dashboard-user.png";
const dotsMore = "/assets/icons/dashboard/dots-more.png";
const Sidebar = () => {
  const Navigate = useNavigate();

  const handleAddNew = () => {
    Navigate("/profile/tasks/create-task");
  };
  return (
    <aside className="flex  flex-col top-0 left-0 absolute  h-screen min-h-screen w-[291px] border rounded-[10px] bg-white border-dashboardLightGray overflow-y-auto z-10">
      <header className="h-20 flex items-center p-4">
        <div className="logo text-primary hover:text-[#1883FB] cursor-pointer transition-colors duration-200 ease-in-out">
          <svg className="w-52 h-8">
            <use href={`${SiteLogo}#site-logo`}></use>
          </svg>
        </div>
      </header>
      <main className="grow relative font-inter px-1 py-4 flex flex-col justify-between">
        <Nav />
        <div className="flex flex-col gap-5  ml-5 justify-center ">
          <div className="add-tasks flex flex-col items-center gap-3 bg-darkColors-lightestGrey p-3 rounded-lg smallBodyTextM text-darkColors-gray">
            <img
              src={addIcon}
              alt="add-icon"
              className="cursor-pointer hover:bg-primaryShade5 transition-colors duration-150 ease-in-out rounded-full"
              onClick={handleAddNew}
            />
            <p>Add New Project</p>
          </div>
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-3">
              <div className="img w-8 h-8">
                <img
                  src={dashboardUser}
                  alt="dashboard-user"
                  className="object-cover h-full w-full object-center rounded-full"
                />
              </div>
              <p className="mediumBodyTextM text-dashboardDarkBlue">Username</p>
            </div>
            <img src={dotsMore} alt="dots-more" />
          </div>
        </div>
      </main>
    </aside>
  );
};

export default Sidebar;
