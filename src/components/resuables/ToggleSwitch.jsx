import { useState } from "react";

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Toggle Button */}
      <div
        className={`relative w-10 h-6 rounded-full cursor-pointer transition-colors duration-300 ${
          isToggled ? "bg-blue-500" : "bg-gray-300"
        }`}
        onClick={handleToggle}
      >
        <div
          className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-md transition-transform duration-300 ${
            isToggled ? "translate-x-4" : "translate-x-0"
          }`}
        ></div>
      </div>

      {/* Text Description */}
      <div>
        <p className="font-medium text-gray-900">Text Message (SMS)</p>
        <p className="text-sm text-gray-600">
          Receive a one-time passcode via SMS each time you log in.
        </p>
      </div>
    </div>
  );
};

export default ToggleSwitch;
