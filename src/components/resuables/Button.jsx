import PropTypes from "prop-types";

const Button = ({
  text,
  width,
  color,
  bg,
  hoverBg,
  hoverText,
  border,
  borderColor,
  fontFamily,
}) => {
  return (
    <button
      className={`px-[26px] py-[18px] bg-${bg} text-${color} mediumBodyTextM ${border} border-${borderColor} font-${fontFamily}  rounded-md w-[${{
        width,
      }}] transition-colors ease-in-out delay-150 hover:bg-${hoverBg} hover:text-${hoverText}`}
    >
      {text}
    </button>
  );
};

// props validation

Button.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
  color: PropTypes.string,
  bg: PropTypes.string,
  hoverBg: PropTypes.string,
  hoverText: PropTypes.string,
  border: PropTypes.string,
  borderColor: PropTypes.string,
  fontFamily: PropTypes.string,
};

export default Button;
