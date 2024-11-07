import { useState } from "react";
import PropTypes from "prop-types";
import closeEye from "../../assets/icons/close-eye.png";

const PasswordInputField = ({ label, name, id, htmlFor }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [value, setValue] = useState("");

  // Toggle between showing and hiding the actual text
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col gap-y-[10px]">
      <label
        htmlFor={htmlFor}
        className="mediumBodyTextM font-urbanist text-darkColors-grey cursor-pointer"
      >
        {label}
      </label>
      <div className="relative h-[60px] w-[499px]">
        {/* Hidden Input Field */}
        <input
          type="text"
          id={id}
          name={name}
          value={value}
          onChange={handleInputChange}
          className="inputField smallBodyTextM font-urbanist"
          style={{ opacity: isPasswordVisible ? 1 : 0 }}
        />

        {/* Masking Layer */}
        {!isPasswordVisible && (
          <div
            className="inputField absolute inset-0 pointer-events-none"
            style={{
              fontSize: "22px",
              letterSpacing: "-1px",
              color: "#5c5858",
              display: "flex",
              alignItems: "center",
              paddingLeft: "10px",
            }}
          >
            {"●".repeat(value.length)}
          </div>
        )}

        {/* Button to toggle password visibility */}
        <div
          onClick={togglePasswordVisibility}
          className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2"
        >
          {isPasswordVisible ? (
            <img src={closeEye} alt="Hide Password" />
          ) : (
            "Show Password"
          )}
        </div>
      </div>
    </div>
  );
};

// props validation
PasswordInputField.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default PasswordInputField;
