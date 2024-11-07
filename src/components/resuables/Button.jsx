import PropTypes from "prop-types";

const Button = ({ text, width }) => {
  return (
    <button
      className={`px-[26px] py-[18px] bg-primary text-darkColors-lightestGrey font-medium text-base rounded-md w-[${{
        width,
      }}] transition-colors ease-in-out delay-150 hover:bg-primaryShade2`}
    >
      {text}
    </button>
  );
};

// props validation

Button.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
};

export default Button;
