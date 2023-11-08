import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Roles } from "../utils/enums";

const TheNavbar = () => {
  const { User } = useContext(UserContext);
  if (User?.role === Roles.USER) {
    return (
      <ul>
        <Link to={"/"}>Home</Link>
        <Link to={"/switch-role"}>Switch</Link>
        <Link to={"/logout"}>Logout</Link>
      </ul>
    );
  } else if (User?.role === Roles.CONSULTANT) {
    return (
      <ul>
        <Link to={"/consultant"}>Home</Link>
        <Link to={"/switch-role"}>Switch</Link>
        <Link to={"/consultant-profile"}>Profile</Link>
        <Link to={"/logout"}>Logout</Link>
      </ul>
    );
  } else if (User === null) {
    return (
      <ul>
        <Link to={"/register"}>Register</Link>
        <Link to={"/login"}>Login</Link>
      </ul>
    );
  }
};

export default TheNavbar;
