import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";

const Lyout = () => {
  const wishlistItemCount = useSelector(
    (state) => state.wishlist?.items?.length || 0
  );
  return (
    <div>
      <Navbar wishlistItemCount={wishlistItemCount} />;
      <Outlet />
      <Footer />
    </div>
  );
};

export default Lyout;
