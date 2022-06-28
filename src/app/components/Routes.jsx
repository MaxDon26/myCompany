import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../layouts/main";
import Login from "../layouts/login";
import Users from "../layouts/users";
// import User from "./user";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" index element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:userId" element={<Users />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
};

export default RoutesComponent;
