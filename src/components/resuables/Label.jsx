import PropTypes from "prop-types";

const Label = ({ htmlFor, label, component }) => {
  return (
    <div className="flex flex-col gap-y-[10px]">
      <label
        htmlFor={htmlFor}
        className="mediumBodyTextM font-urbanist text-darkColors-grey"
      >
        {label}
      </label>
      {component}
    </div>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  component: PropTypes.element,
};

export default Label;
