import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
  const renderPhrase = (number) => {
    if (number > 4 && number < 15) return number + " человек";
    const lastNumber = Number(number.toString().slice(-1));

    if ([2, 3, 4].indexOf(lastNumber) >= 0) {
      return number + " человека";
    } else {
      return number + " человек";
    }
  };

  const getClassesBadge = (number) => {
    let classes = "badge m-2 ";
    return (classes += number === 0 ? "bg-danger" : "bg-primary");
  };

  return (
    <h1>
      <span className={getClassesBadge(length)}>
        {length > 0
          ? `${renderPhrase(length)} тусанет с тобой сегодня`
          : "Никто с тобой не тусанет"}
      </span>
    </h1>
  );
};

SearchStatus.propTypes = {
  length: PropTypes.number.isRequired
};

export default SearchStatus;
