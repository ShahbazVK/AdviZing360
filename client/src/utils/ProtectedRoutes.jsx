import React, { useContext, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const AuthenticatedRoutes = () => {
  const { User } = useContext(UserContext);
  return User === null ? <Navigate to={"/login"} /> : <Outlet />;
};

export const UnauthenticatedRoutes = () => {
  const { User } = useContext(UserContext);
  return User !== null ? <Navigate to={"/"} /> : <Outlet />;
};
