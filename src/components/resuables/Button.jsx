import PropTypes from "prop-types";

const Button = ({
  text,
  width = "auto",
  color,
  bg,
  hoverBg,
  hoverText,
  border,
  borderColor,
  fontFamily,
  onClick,
  imgSrc,
  imgAlt,
  img,
  type,
}) => {
  return (
    <button
      type={type}
      className={`mb-6 px-[26px] py-[18px] font-medium rounded-md transition-colors ease-in-out delay-150 ${
        border ? `border ${border}` : ""
      }`}
      onClick={onClick}
      style={{
        backgroundColor: bg || "transparent",
        color: color || "inherit",
        width: width,
        borderColor: borderColor,
        fontFamily: fontFamily,
      }}
      onMouseEnter={(e) => {
        if (hoverBg) e.target.style.backgroundColor = hoverBg;
        if (hoverText) e.target.style.color = hoverText;
      }}
      onMouseLeave={(e) => {
        if (bg) e.target.style.backgroundColor = bg;
        if (color) e.target.style.color = color;
      }}
    >
      <div className="flex w-full items-center justify-center gap-[10px]">
        {img && <img src={imgSrc} alt={imgAlt} />}
        {text}
      </div>
    </button>
  );
};

// PropTypes validation
Button.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  bg: PropTypes.string,
  hoverBg: PropTypes.string,
  hoverText: PropTypes.string,
  border: PropTypes.string,
  borderColor: PropTypes.string,
  fontFamily: PropTypes.string,
  img: PropTypes.bool,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default Button;
