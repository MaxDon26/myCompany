import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const setActive = (item) => {
    const elements = document.querySelectorAll(".nav-link");
    elements.forEach((el) => {
      el.classList.remove("active");
    });
    item.className += " active";
  };
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          className="nav-link active"
          onClick={(e) => {
            setActive(e.target);
          }}
          aria-current="page"
          to="/"
        >
          Main
        </Link>
      </li>
      <li className="nav-item">
        <Link
          onClick={(e) => {
            setActive(e.target);
          }}
          className="nav-link"
          to="/login"
        >
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link
          onClick={(e) => {
            setActive(e.target);
          }}
          className="nav-link"
          to="/users"
        >
          Users
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
