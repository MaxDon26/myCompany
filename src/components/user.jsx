import React from "react";
import Qualitie from "./qualities";
import Bookmark from "./bookmark";
const User = ({
  name,
  _id,
  profession,
  qualities,
  completedMeetings,
  rate,
  onDelete,
  onToggleBookmark,
  bookmark,
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

export default User;
