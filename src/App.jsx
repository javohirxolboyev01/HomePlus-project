import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Contact from "./page/Contact/Contact";
import Header from "./components/Header/Header";
import ProductDetailes from "./components/Product_Details/ProductDetailes";
import Lyout from "./components/Lyout/Lyout";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Lyout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetailes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />                     
        </Route>
      </Routes>
    </>
  );
};

export default App;
