import PropTypes from "prop-types";

const RightItems = ({ title, description }) => {
  return (
    <div className="flex flex-col w-[380px] max-w-[380px] items-end gap-2 ">
      <h3 className="heading3 text-darkColors-grey text-right">{title}</h3>
      <p className="mediumBodyTextM text-darkColors-grey text-justify">
        {description}
      </p>
    </div>
  );
};

RightItems.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RightItems;
