import PropTypes from "prop-types";

const Card = ({ title, description, image }) => {
  return (
    <div className="flex flex-col items-center px-11  h-[526px] w-[388px] shadow-card-shadow text-text-color rounded-[20px] hover:bg-primaryShade2  transition-colors delay-150 group">
      <img
        className="object-contain mb-11 w-[300px] h-[300px]"
        src={image}
        alt="Feature image"
      />
      <div className="w-[247px]">
        <h3 className="text-center heading3 mb-2 text-darkColors-grey group-hover:text-darkColors-lightestGrey transition-colors delay-150">
          {title}
        </h3>
        <p className="text-center bigBodyTextM text-darkColors-grey group-hover:text-darkColors-lightestGrey transition-colors delay-150">
          {description}
        </p>
      </div>
    </div>
  );
};

// Props Types

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Card;
