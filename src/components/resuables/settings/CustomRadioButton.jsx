import PropTypes from "prop-types";
import { useState } from "react";

const CustomRadioButton = ({ options, title }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="heading3 text-darkColors-grey">{title}</h3>
      {options.map((option) => (
        <label
          key={option}
          className={`flex items-center cursor-pointer bigBodyTextM ${
            selectedOption === option
              ? "text-blue-600 font-bold"
              : "text-darkColors-lightGrey"
          }`}
        >
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={handleChange}
            className="hidden"
          />
          <div
            className={`w-5 h-5 rounded-full border-2 ${
              selectedOption === option ? "border-blue-600" : "border-gray-400"
            } flex items-center justify-center`}
          >
            {selectedOption === option && (
              <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
            )}
          </div>
          <span className="ml-3">{option}</span>
        </label>
      ))}
    </div>
  );
};

CustomRadioButton.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};
export default CustomRadioButton;

/*  
      <CustomRadioButton
        title="Start of the calendar week"
        options={["Sunday", "Monday", "Tuesday", "Wednesday"]}
      />
      
*/
