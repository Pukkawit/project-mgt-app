import PropTypes from "prop-types";

const InputField = ({ label, htmlFor, name, id }) => {
  return (
    <div className="flex flex-col gap-y-[10px]">
      <label
        htmlFor={htmlFor}
        className="mediumBodyTextM font-urbanist text-darkColors-grey cursor-pointer"
      >
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        className="smallBodyTextM inputField"
      />
    </div>
  );
};

// props validation

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default InputField;
