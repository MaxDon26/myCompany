import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());

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

  return (
    <div>
      <SearchStatus length={users.length} />
      <Users
        onDelete={handleDelete}
        users={users}
        onToggleBookmark={handleToggleBookMark}
      />
    </div>
  );
}

export default App;
