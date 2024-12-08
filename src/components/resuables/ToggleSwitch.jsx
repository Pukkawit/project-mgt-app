import PropTypes from "prop-types";
import { useState } from "react";

const ToggleSwitch = ({ title, description }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Toggle Button */}
      <div
        className={`relative w-[53px] h-[30px] rounded-full cursor-pointer transition-colors duration-300 ${
          isToggled ? "bg-primary" : "bg-darkColors-grey"
        }`}
        onClick={handleToggle}
      >
        <div
          className={`absolute top-0 w-8 h-8 rounded-full bg-white shadow-xl transition-transform duration-300 ${
            isToggled ? "translate-x-6" : "translate-x-0"
          }`}
        ></div>
      </div>

      {/* Text Description */}
      <div className="flex flex-col gap-2">
        <p className="bigBodyTextM text-darkColors-grey">{title}</p>
        <p className="bigBodyTextM text-darkColors-lightGrey">{description}</p>
      </div>
    </div>
  );
};

ToggleSwitch.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ToggleSwitch;
