import React, { createContext, useEffect, useState } from "react";
import { getData } from "../utils/LocalStorage";

export const Context = createContext(); // Update export name here

const AuthContext = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const { employees} = getData();
    setUserData( employees );
  }, []);

  return (
    <Context.Provider value={[userData, setUserData]}>
      {children}
    </Context.Provider>
  );
};

export default AuthContext;
