import { Link } from "react-router-dom";
import logo from "../../../../public/assets/icons/dashboard/logo-icon.png";
import searchIcon from "../../../../public/assets/icons/dashboard/search-icon.png";
const ProfileHeader = () => {
  return (
    <div className="wide h-32 flex items-center">
      <div className="logo">
        <Link to="/" className="flex items-center gap-x-12">
          <img src={logo} width={96} height={96} alt="charlie-logo" />
          <h1 className="text-7xl font-normal leading-[98.05] text-darkColors-grey font-openSans">
            Charlie
          </h1>
        </Link>
      </div>
      <div className="search-bar">
        <input type="text" />
        <img src={searchIcon} width={63} height={63} alt="search-icon" />
      </div>
    </div>
  );
};

export default ProfileHeader;
