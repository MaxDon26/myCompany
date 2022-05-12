import React, { useState } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.css";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (UserId) => {
    setUsers(users.filter((user) => user._id !== UserId));
  };

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
    <>
      <h1>
        <span className={getClassesBadge(users.length)}>
          {users.length > 0
            ? `${renderPhrase(users.length)} тусанет с тобой сегдня`
            : "Никто с тобой не тусанет"}
        </span>
      </h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  {user.qualities.map((qual) => {
                    return (
                      <span
                        key={qual._id}
                        className={"badge  m-1 bg-" + qual.color}
                      >
                        {qual.name}
                      </span>
                    );
                  })}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>

                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-danger"
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Users;
