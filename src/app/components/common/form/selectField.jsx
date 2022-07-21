/* eslint-disable indent */
import React from "react";
import PropTypes from "prop-types";

const SelectField = ({
  label,
  value,
  onChange,
  defaultOption,
  options,
  error
}) => {
  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.keys(options).map((optionName) => ({
          name: options[optionName].name,
          value: options[optionName]._id
        }))
      : options;

  const getInputClasses = () => {
    return "form-select " + (error ? "is-invalid" : "is-valid");
  };

  return (
    <div className="mb-4">
      <label htmlFor="validationCustom04" className="form-label">
        {label}
      </label>
      <select
        className={getInputClasses()}
        id="validationCustom04"
        name="profession"
        value={value}
        onChange={onChange}
      >
        <option disabled selected value="">
          {defaultOption}
        </option>
        {optionsArray &&
          optionsArray.map((option) => {
            return (
              <option key={option._id} value={option._id}>
                {option.name}
              </option>
            );
          })}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

SelectField.propTypes = {
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
  defaultOption: PropTypes.string,
  error: PropTypes.string
};

export default SelectField;
