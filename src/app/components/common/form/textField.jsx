import { React, useState } from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, name, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const getInputClasses = () => {
    return "form-control " + (error ? "is-invalid" : "is-valid");
  };

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  const toogleShowPassword = () => {
    setShowPassword((prev) => (prev = !prev));
  };
  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <div className="input-group has-validation">
        <input
          type={showPassword === true ? "text" : type}
          id={name}
          value={value}
          onChange={handleChange}
          name={name}
          className={getInputClasses()}
        />
        {type === "password" && (
          <button
            className="btn btn-outline-secondary"
            onClick={toogleShowPassword}
            type="button"
          >
            {<i className={"bi bi-eye" + (showPassword ? "-slash" : "")}></i>}
          </button>
        )}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
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
