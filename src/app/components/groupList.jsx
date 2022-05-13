import React from "react";
import PropTypes from "prop-types";

const GroupList = ({ items }) => {
  return (
    <ul className="list-group">
      <li className="list-group-item">123 </li>
    </ul>
  );
};

GroupList.propTypes = {
  items: PropTypes.object.isRequired
};
export default GroupList;
