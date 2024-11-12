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
  /* px = "[26px]",
  py = "[18px]", */
}) => {
  return (
    <button
      className={`mb-6 px-[26px] py-[18px]  bg-${bg} text-${color} mediumBodyTextM ${border} border-${borderColor} font-${fontFamily}  rounded-md w-${width}  transition-colors ease-in-out delay-150 hover:bg-${hoverBg} hover:text-${hoverText}`}
      onClick={onClick}
    >
      <div className="flex w-full items-center justify-center gap-[10px]">
        {img && <img src={imgSrc} alt={imgAlt} />}

        {text}
      </div>
    </button>
  );
};

// props validation

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
  px: PropTypes.string,
  py: PropTypes.string,
};

export default Button;
