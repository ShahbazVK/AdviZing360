import React, { createContext, useEffect, useState } from "react";
import { read_cookie } from "sfcookies";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [User, setUser] = useState({});
  useEffect(() => {
    setUser(read_cookie("User"));
  }, []);

  return (
    <UserContext.Provider value={{ User, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
