import React, { createContext, useEffect, useState } from "react";
import { read_cookie } from "sfcookies";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [User, setUser] = useState({});
  const userCookie = read_cookie("User");
  useEffect(() => {
    if (userCookie.username) setUser(userCookie);
    else if (!userCookie.length) setUser(null);
  }, []);

  return (
    <UserContext.Provider value={{ User, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
