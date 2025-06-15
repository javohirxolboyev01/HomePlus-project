import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
  const onSubmit = async (e) => {
    e.preventDefault();
    let user = {
      username: e.target[0].value,
      password: e.target[1].value,
    };
    let res = await axios.post(
      "https://nt-shopping-list.onrender.com/api/auth",
      user
    );
    setToken(res.data.token);
    localStorage.setItem("token", res.data.token);
    console.log(res);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-md px-10 py-12">
        <div className="text-center mb-8">
          <img
            src="https://static.coupangcdn.com/image/static/login/logo-coupang.x2.20201201.png"
            alt="Coupang Logo"
            className="mx-auto w-40"
          />
          <h2 className="mt-4 text-2xl font-bold text-gray-800">Login</h2>
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1 text-sm">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 text-sm">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0078ff] hover:bg-[#005fd1] text-white py-2 rounded-md font-semibold transition"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-sm text-center text-gray-600">
          계정이 없으신가요?{" "}
          <NavLink to="/register" className="text-blue-600 hover:underline">
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
