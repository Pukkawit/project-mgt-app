import PropTypes from "prop-types";

const SelectInputField = ({
  name,
  id,
  border,
  options,
  width,
  value,
  onChange,
  required,
}) => {
  return (
    <select
      name={name}
      id={id}
      className="inputField font-urbanist text-[1rem] text-[#5C5858] font-medium"
      style={{ width, border }}
      value={value}
      onChange={onChange}
      required={required}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

SelectInputField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  border: PropTypes.string,
  width: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SelectInputField;
