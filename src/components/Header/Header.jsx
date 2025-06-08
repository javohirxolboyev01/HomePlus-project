import React from "react";
import Logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="sticky top-0 bg-gradient-to-r from-black to-gray-900 text-white shadow-md py-4 ">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <img className="w-22" src={Logo} alt="Logo" />
        <div className="flex space-x-8 text-lg">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
