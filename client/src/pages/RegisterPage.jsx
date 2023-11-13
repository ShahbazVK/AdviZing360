import React, { useEffect, useState } from "react";
import UIInput from "../components/UI/UIInput";
import UIInputSubmit from "../components/UI/UIInputSubmit";
import Post from "../utils/Post";
import { useNavigate } from "react-router-dom";
import { REGISTER } from "../config/ApiRoutes";
import UIInputImage from "../components/UI/UIInputImage";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [registerData, setregisterData] = useState({
    username: "",
    email: "",
    password: "",
    profileImg: null,
  });

  const register = async () => {
    const resp = await Post(REGISTER, registerData);
    if (resp?.statusText === "OK") navigate("/login");
  };

  return (
    <div>
      <UIInput
        type={"text"}
        placeholder={"username"}
        name={"username"}
        value={registerData.username}
        setVar={setregisterData}
      />
      <UIInput
        type={"email"}
        placeholder={"someone@email.com"}
        name={"email"}
        value={registerData.email}
        setVar={setregisterData}
      />
      <UIInput
        type={"password"}
        placeholder={"********"}
        name={"password"}
        value={registerData.password}
        setVar={setregisterData}
      />
      <UIInputImage
        name={"profileImg"}
        value={registerData.profileImg}
        setValue={setregisterData}
      />
      <UIInputSubmit callback={register} />
    </div>
  );
};

export default RegisterPage;
