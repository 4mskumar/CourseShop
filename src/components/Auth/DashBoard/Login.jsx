import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");



  const handle = (e) => {
    // setpass = e.target.value
    e.preventDefault();
    handleLogin(email,pass)
    setemail("");
    setpass("");
    
    
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="border-2 border-gray-700 px-12 py-12 rounded-2xl shadow-lg bg-gray-800">
        <h2 className="text-2xl font-semibold text-white mb-6">Sign in</h2>
        <form className="flex flex-col gap-5" onSubmit={(e) => handle(e)}>
          <input
            type="email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
            value={email}
            placeholder="Enter your email"
            className="placeholder:text-gray-400 text-white border-2 border-gray-600 bg-transparent px-6 py-3 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
          />
          <input
            type="password"
            value={pass}
            onChange={(e) => {
              setpass(e.target.value);
            }}
            placeholder="Enter your password"
            className="placeholder:text-gray-400 text-white border-2 border-gray-600 bg-transparent px-6 py-3 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
          />
          <button className="font-semibold text-gray-900 bg-blue-500 py-3 rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out mt-4">
            Log in
          </button>
        </form>
        <p className="text-sm mt-3 text-gray-300">
          Dont have an account?{" "}
          <span className="text-blue-400 cursor-pointer">sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
