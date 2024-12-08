import PropTypes from "prop-types";

const InputField = ({
  type,
  label,
  htmlFor,
  value,
  name,
  id,
  width,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-y-[10px]">
      <label
        htmlFor={htmlFor}
        className="mediumBodyTextM font-urbanist text-darkColors-grey cursor-pointer"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="smallBodyTextM inputField"
        value={value}
        onChange={onChange}
        style={{ width: width }}
      />
    </div>
  );
};

// props validation
InputField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  width: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
