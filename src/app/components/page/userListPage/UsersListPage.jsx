/* eslint-disable indent */
import React, { useState, useEffect } from "react";
import Pagination from "../../common/pagination";
import UserTable from "../../ui/usersTable";
import _ from "lodash";
import api from "../../../api";
import PropTypes from "prop-types";
import SearchBar from "../../ui/searchBar";
import GroupList from "./../../common/groupList";
import SearchStatus from "./../../ui/searchStatus";
import { paginate } from "./../../../../utils/paginate";

const UsersListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProf, setSelectedProf] = useState();
  const [professions, setProfessions] = useState();
  const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });
  const pageSize = 8;
  const [searchQuery, setSearchQuery] = useState("");

  const [users, setUsers] = useState();

  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data));
  }, []);

  const handleDelete = (UserId) => {
    setUsers(users.filter((user) => user._id !== UserId));
  };

  const handleToggleBookMark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark };
        }
        return user;
      })
    );
  };

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProf, searchQuery]);

  const handleProfessionSelect = (item) => {
    setSelectedProf(item);
    setSearchQuery("");
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleSort = (item) => {
    setSortBy(item);
  };

  if (users) {
    const filteredUsers = searchQuery
      ? users.filter((user) =>
          user.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : selectedProf
      ? users.filter(
          (user) =>
            JSON.stringify(user.profession) === JSON.stringify(selectedProf)
        )
      : users;

    const count = filteredUsers.length;

    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
    const userCrop = paginate(sortedUsers, currentPage, pageSize);
    const clearFilter = () => {
      setSelectedProf();
    };

    const handleSearchChange = ({ target }) => {
      setSearchQuery(target.value);
      clearFilter();
    };

    return (
      <div className="d-flex">
        {professions && (
          <div className="d-flex flex-column flex-shrink-0 p-3">
            <GroupList
              items={professions}
              onItemSelect={handleProfessionSelect}
              selectedItem={selectedProf}
            />
            <button onClick={clearFilter} className="btn btn-secondary m-2">
              Очистить
            </button>
          </div>
        )}
        <div className="d-flex flex-column">
          <SearchStatus length={count} />
          <SearchBar
            handleNameChange={handleSearchChange}
            value={searchQuery}
          />
          {count > 0 && (
            <UserTable
              users={userCrop}
              selectedSort={sortBy}
              onSort={handleSort}
              onDelete={handleDelete}
              onToggleBookmark={handleToggleBookMark}
            />
          )}
          <div className="d-flex justify-content-center">
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
  return "Loading";
};

UsersListPage.propTypes = {
  users: PropTypes.array
};

export default UsersListPage;
