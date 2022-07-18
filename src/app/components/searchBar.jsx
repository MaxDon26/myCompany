import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ handleNameChange, value }) => {
  return (
    <input
      type="text"
      placeholder="Введите имя..."
      onChange={handleNameChange}
      className=""
      value={value}
    />
  );
};

SearchBar.propTypes = {
  handleNameChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default SearchBar;
