import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Users from "./components/users";

import api from "./api";

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data));
  }, []);

  console.log(users);

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
    users && (
      <div>
        <Users
          onDelete={handleDelete}
          users={users}
          onToggleBookmark={handleToggleBookMark}
        />
      </div>
    )
  );
}

export default App;
