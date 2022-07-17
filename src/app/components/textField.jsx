import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, name, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const getInputClasses = () => {
    return "form-control " + (error ? "is-invalid" : "is-valid");
  };

  const toogleShowPassword = () => {
    setShowPassword((prev) => (prev = !prev));
  };
  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        value={value}
        onChange={onChange}
        name={name}
        className={getInputClasses()}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextField.defaultProps = {
  type: "text"
};
TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
};

export default TextField;
