import React from "react";
import { Link } from "react-router-dom";

const TheNavbar = () => {
  return (
    <div>
      <ul>
        <Link to={"/"}>Home</Link>
        <Link to={"/register"}>Register</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/switch-role"}>Switch </Link>
        <Link to={"/logout"}>Logout</Link>
      </ul>
    </div>
  );
};

export default TheNavbar;
