import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { bake_cookie, read_cookie } from "sfcookies";
import { Roles } from "../utils/enums";
import { useNavigate } from "react-router-dom";

const SwitchRolePage = () => {
  const navigate = useNavigate();
  const { User, setUser } = useContext(UserContext);
  const user = read_cookie("User");
  let role = "";

  if (user.role === Roles.USER) role = Roles.CONSULTANT;
  else if (user.role === Roles.CONSULTANT) role = Roles.USER;

  useEffect(() => {
    setUser({ ...user, role });
    User.username && bake_cookie("User", { ...user, role });
    if (role === Roles.USER) navigate("/");
    if (role === Roles.CONSULTANT) navigate("/consultant");
  }, []);

  return <div>SwitchRolePage</div>;
};

export default SwitchRolePage;
