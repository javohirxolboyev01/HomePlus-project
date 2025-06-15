import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import ProductDetailes from "./components/Product_Details/ProductDetailes";
import Lyout from "./components/Lyout/Lyout";
import NotFound from "./components/NotFound/NotFound";
import Shop from "./page/Shop/Shop";
import Wishlist from "./components/Wishlist/Wishlist";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import CartCheck from "./components/cartCheck/CartCheck";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Lyout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetailes />} />
          <Route path="/cart" element={<CartCheck />} />
          <Route path="/wish" element={<Wishlist />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
