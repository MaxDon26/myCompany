/* eslint-disable indent */
import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const MultiSelectField = ({ options, onChange, name }) => {
  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.keys(options).map((optionName) => ({
          value: options[optionName]._id,
          label: options[optionName].name
        }))
      : options;

  const handleChange = (target) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div className="mb-4">
      <Select
        isMulti
        options={optionsArray}
        className="basiс-multi-select"
        classNamePrefix="select"
        onChange={handleChange}
        name={name}
      />
    </div>
  );
};

MultiSelectField.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onChange: PropTypes.func,
  name: PropTypes.string
};

export default MultiSelectField;
