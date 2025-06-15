import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    let newUsers = {
      name: e.target[0].value,
      username: e.target[1].value,
      password: e.target[2].value,
    };
    let res = await axios.post(
      "https://nt-shopping-list.onrender.com/api/users",
      newUsers
    );
    localStorage.setItem("token", res.data.token);
    console.log(res);
    if (localStorage.getItem("token")) {
      return navigate("/");
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-md px-10 py-12">
        <div className="text-center mb-8">
          <img
            src="https://static.coupangcdn.com/image/static/login/logo-coupang.x2.20201201.png"
            alt="Coupang Logo"
            className="mx-auto w-40"
          />
          <h2 className="mt-4 text-2xl font-bold text-gray-800">Sign Up</h2>
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Choose a username"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0078ff] hover:bg-[#005fd1] text-white py-2 rounded-md font-semibold transition"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-sm text-center text-gray-600">
          이미 계정이 있으신가요?{" "}
          <NavLink to="/login" className="text-blue-600 hover:underline">
            Sign In
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Register;
