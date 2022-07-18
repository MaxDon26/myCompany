import { React, useEffect, useState } from "react";
// import query from "query-string";
import PropTypes from "prop-types";
import api from "../../../api";
import QualitiesList from "../../ui/qualities/qualitiesList";
import { useNavigate } from "react-router-dom";

const UserPage = ({ userId }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data));
  }, []);

  if (user) {
    return (
      <div className="p-3">
        <h1>{user.name}</h1>
        <h2>Профессия: {user.profession.name}</h2>
        <QualitiesList qualities={user.qualities} />
        <p>Проведено встреч: {user.completedMeetings}</p>
        <h2>Рейтинг: {user.rate}</h2>
        <button
          className="btn btn-dark"
          onClick={() => {
            navigate("/users");
          }}
        >
          Все пользователи
        </button>
      </div>
    );
  } else {
    return <h2>Loading</h2>;
  }
};

UserPage.propTypes = {
  userId: PropTypes.string.isRequired
};

export default UserPage;
