import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import User from "./user";
import GroupList from "./groupList";

import { paginate } from "../../utils/paginate.js";
import api from "../api";
import PropTypes from "prop-types";

const Users = ({ users, ...rest }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProf, setSelectedProf] = useState();
  const [professions, setProfessions] = useState();
  const count = users.length;
  const pageSize = 4;
  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data));
  }, []);

  const handleProfessionSelect = (params) => {
    setSelectedProf(params);
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const filteredUsers = selectedProf
    ? users.filter((user) => user.profession === selectedProf)
    : users;

  const userCrop = paginate(filteredUsers, currentPage, pageSize);

  return (
    <>
      {professions && (
        <GroupList
          items={professions}
          onItemSelect={handleProfessionSelect}
          selectedItem={selectedProf}
        />
      )}
      {count > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {userCrop.map((user) => (
              <User key={user._id} {...user} {...rest} />
            ))}
          </tbody>
        </table>
      )}
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired
};

export default Users;
