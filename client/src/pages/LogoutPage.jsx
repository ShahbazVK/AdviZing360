import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { delete_cookie } from "sfcookies";
import Get from "../utils/Get";
import { LOGOUT } from "../config/ApiRoutes";

const LogoutPage = () => {
  const { setUser } = useContext(UserContext);
  //   await setUser({});
  const logout = async () => {
    await Get(LOGOUT);
  };
  useEffect(() => {
    setUser({});
    delete_cookie("User");
    logout();
    window.location.href = "http://localhost:5173/login";
  }, []);
};

export default LogoutPage;
