import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/DashBoard/Login";
import EmpDash from "./components/Auth/DashBoard/EmpDash";
import AdminDash from "./components/Auth/DashBoard/AdminDash";
import { getData, setData } from "./utils/LocalStorage";
import { Context } from "./context/AuthContext";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [userData, setUserData] = useContext(Context);
  const [failedCount, setFailedCount] = useState(0); // New state for failed count

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const newUserData = JSON.parse(storedUser);
      setUser(newUserData.role);
      if (newUserData.role === "employee") {
        setLoggedInUser(newUserData);
        setFailedCount(newUserData.taskCounts.failed); // Set failed count from local storage data
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const emp = userData.find(
        (emp) => emp.email === email && emp.password === password
      );

      if (emp) {
        setUser("employee");
        setLoggedInUser(emp);
        setFailedCount(emp.taskCounts.failed); // Set failed count from the user data
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", ...emp }));
      } else {
        alert("Invalid credentials");
      }
    }
  };

  const incrementFailedCount = () => {
    setFailedCount((prevCount) => prevCount + 1);
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser");
  };

  useEffect(() => {
    if (!getData().employees || !getData().admin) {
      setData();
    }
  }, []);

  

  return (
    <div>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDash user={user} changeUser={setUser} handleLogout={handleLogout} />
      ) : user === "employee" ? (
        <EmpDash 
          changeUser={setUser} 
          failed={failedCount} // Pass failedCount as a prop
          incrementFailedCount={incrementFailedCount} // Pass increment function as a prop
          data={loggedInUser} 
          handleLogout={handleLogout} 
        />
      ) : null}
    </div>
  );
};

export default App;
