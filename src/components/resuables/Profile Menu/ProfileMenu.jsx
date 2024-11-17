import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const ProfileMenu = ({ menuItems }) => {
  return (
    <div className="grow">
      <div
        className={`px-8  h-16 flex items-center border-0 border-b-4 border-darkColors-lightestGrey w-full`}
      >
        <div className="w-full flex gap-8 items-center h-full text-[#5F6D7E] text-[15px] font-medium font-inter tracking-[-0.1px]">
          {menuItems.map((menuItem, index) => (
            <NavLink key={index} to={menuItem.path} className="cursor-pointer">
              {({ isActive }) => (
                <p
                  className={`mediumBodyTextM ${
                    isActive ? " text-dashboardBlue" : " text-darkColors-gray"
                  } group-hover:text-dashboardBlue`}
                >
                  {menuItem.label}
                </p>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

ProfileMenu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProfileMenu;
