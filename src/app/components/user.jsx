import React from "react";
import Qualitie from "./qualities";
import Bookmark from "./bookmark";
import PropTypes from "prop-types";

const User = ({
  name,
  _id,
  profession,
  qualities,
  completedMeetings,
  rate,
  onDelete,
  onToggleBookmark,
  bookmark
}) => {
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>
        {qualities.map((qual) => (
          <Qualitie key={qual._id} {...qual} />
        ))}
      </td>
      <td>{profession.name}</td>

      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td>
        <Bookmark onClick={() => onToggleBookmark(_id)} status={bookmark} />
      </td>
      <td>
        <button onClick={() => onDelete(_id)} className="btn btn-danger">
          delete
        </button>
      </td>
    </tr>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  profession: PropTypes.object,
  qualities: PropTypes.array.isRequired,
  completedMeetings: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleBookmark: PropTypes.func.isRequired,
  bookmark: PropTypes.bool.isRequired
};

export default User;
