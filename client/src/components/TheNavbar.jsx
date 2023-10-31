import React from "react";
import { Link } from "react-router-dom";

const TheNavbar = () => {
  return (
    <div>
      <ul>
        <Link to={"/"}>Home</Link>
        <Link to={"/register"}>Register</Link>
        <Link to={"/login"}>Login</Link>
      </ul>
    </div>
  );
};

export default TheNavbar;
