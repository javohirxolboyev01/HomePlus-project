import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaSearch, FaUser, FaHeart } from "react-icons/fa";

import CartIcon from "../cardIcon/CardIcon";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 w-full z-50">
      <div className="flex items-center justify-between px-4 md:px-10 lg:px-20 py-3">
        {/* Logo & Menu Icon */}
        <div className="flex items-center space-x-4">
          <button className="md:hidden">
            <FaBars className="text-xl text-gray-600 cursor-pointer" />
          </button>
          <Link to="/">
            <img
              src="//static.coupangcdn.com/image/static/login/logo-coupang.x2.20201201.png"
              alt="Coupang"
              className="w-[120px] h-auto"
            />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-4 relative max-w-xl w-full hidden sm:block">
          <form>
            <input
              type="text"
              placeholder="Search for items"
              className="w-full border-2 border-[#4285f4] focus:outline-none py-2 px-4 pr-10 rounded-md text-sm"
            />
            <FaSearch className="absolute top-2.5 right-3 text-[#4285f4]" />
          </form>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <Link to="/wish">
            <FaHeart className="text-lg text-gray-600 hover:text-red-500" />
          </Link>

          <CartIcon />

          <div className="hidden md:block">
            <NavLink
              to="/login"
              className="text-sm text-gray-700 hover:underline"
            >
              Sign In | Register
            </NavLink>
          </div>

          <div className="md:hidden">
            <FaUser className="text-lg text-gray-600" />
          </div>
        </div>
      </div>

      {/* Bottom Menu - Responsive */}
      <div className="bg-gray-50 border-t border-gray-100 text-sm font-medium text-gray-700 hidden md:flex">
        <div className="flex justify-center items-center space-x-6 py-3 w-full">
          <NavLink to="/" className="hover:text-blue-600">
            Home
          </NavLink>
          <NavLink to="/product" className="hover:text-blue-600">
            Product
          </NavLink>
          <NavLink to="/fresh" className="hover:text-blue-600">
            Rocket Fresh
          </NavLink>
          <NavLink to="/global" className="hover:text-blue-600">
            Global
          </NavLink>
          <NavLink to="/offers" className="hover:text-blue-600">
            Today's Deals
          </NavLink>
          <NavLink to="/help" className="hover:text-blue-600">
            Customer Center
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
