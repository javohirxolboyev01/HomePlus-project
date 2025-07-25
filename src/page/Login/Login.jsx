import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    const user = {
      username: e.target[0].value,
      password: e.target[1].value,
    };

    let res = await axios.post(
      "https://nt-shopping-list.onrender.com/api/auth",
      user
    );
    localStorage.setItem("token", res.data.token);
    console.log(res);
    if (localStorage.getItem("token")) {
      return navigate("/");
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 sm:p-10 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Sign in to your account to continue
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 text-sm mb-1">Username</label>
            <div className="flex items-center px-3 py-2 border rounded-xl bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Enter username"
                className="w-full bg-transparent outline-none text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Password</label>
            <div className="flex items-center px-3 py-2 border rounded-xl bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Enter password"
                className="w-full bg-transparent outline-none text-sm"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2.5 rounded-xl font-semibold text-sm shadow hover:from-blue-600 hover:to-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <NavLink
            to="/register"
            className="text-blue-600 underline font-medium"
          >
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
