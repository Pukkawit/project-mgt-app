import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

function CustomSelect({ widthInputField }) {
  const [selectedOption, setSelectedOption] = useState("Product Manager");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    "Product Manager",
    "Product Team Lead",
    "Data Analyst",
    "UI/UX Designer",
    "Technical Product Manager",
    "Product Marketing Manager",
    "Agile Coach",
    "Software Engineer",
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={`relative w-[${widthInputField}]`}>
      {/* Select Input */}
      <button
        type="button"
        className="w-full smallBodyTextM rounded-bl-none rounded-br-none inputField text-left mb-0 bg-white flex items-center justify-between hover:border-gray-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption}</span>
        <svg
          width="9"
          height="5"
          viewBox="0 0 9 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <path
            d="M0.424683 0.0136719L4.4325 4.02148L8.44031 0.0136719L0.424683 0.0136719Z"
            fill="black"
          />
        </svg>
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <ul className="absolute z-10 w-full smallBodyTextM text-darkColors-grey border border-darkColors-grey bg-white rounded-ee-md shadow-lg max-h-48 overflow-y-auto mb-6">
          {options.map((option) => (
            <li
              key={option}
              className="font-normal flex items-center pl-4 py-2 justify-between hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              <span>{option}</span>
              <input
                type="radio"
                className="form-radio text-blue-600 h-4 w-4 mr-2"
                checked={selectedOption === option}
                readOnly
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Props validation
CustomSelect.propTypes = {
  widthInputField: PropTypes.string,
};

export default CustomSelect;
