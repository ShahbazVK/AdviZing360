import React, { useContext, useEffect, useState } from "react";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";
import UIInput from "../components/UI/UIInput";
import UIInputSubmit from "../components/UI/UIInputSubmit";
import Post from "../utils/Post";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../config/ApiRoutes";
import { UserContext } from "../context/UserContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [loginData, setloginData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const login = async () => {
    const resp = await Post(LOGIN, loginData);
    if (resp?.statusText === "OK") {
      setUser({ ...resp.data, role: "user" });
      bake_cookie("User", { ...resp.data, role: "user" });
      navigate("/");
    }
  };

  return (
    <div>
      <UIInput
        type={"email"}
        placeholder={"someone@email.com"}
        name={"email"}
        value={loginData.email}
        setVar={setloginData}
      />
      <UIInput
        type={"password"}
        placeholder={"********"}
        name={"password"}
        value={loginData.password}
        setVar={setloginData}
      />
      <UIInputSubmit callback={login} />
    </div>
  );
};

export default LoginPage;
