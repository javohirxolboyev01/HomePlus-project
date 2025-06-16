import axios from "axios";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    let newUser = {
      name: e.target[0].value,
      username: e.target[1].value,
      password: e.target[2].value,
    };
    let res = await axios.post(
      "https://nt-shopping-list.onrender.com/api/users",
      newUser
    );
    localStorage.setItem("token", res.data.token);
    console.log(res);
    if (localStorage.getItem("token")) {
      return navigate("/");
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 sm:p-10 space-y-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Create an account
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Please fill in the form to continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 text-sm mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Username</label>
            <input
              type="text"
              placeholder="e.g. johndoe123"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2.5 rounded-lg font-semibold shadow hover:from-green-600 hover:to-green-700 transition"
          >
            Register
          </button>
        </form>

        {/* Redirect to Login */}
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <NavLink to="/login" className="text-green-600 underline font-medium">
            Sign In
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
