import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <img
        src="https://image7.coupangcdn.com/image/coupang/common/logo_coupang_w350.png"
        alt="Coupang Logo"
        className="w-48 mx-auto mb-6"
      />
      <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-4">
        Sahifa topilmadi
      </h1>
      <p className="text-gray-600 text-lg mb-6">
        Kechirasiz, siz so‘ragan sahifani topib bo‘lmadi..
      </p>
      <a
        href="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition duration-200"
      >
        Shopping
      </a>
    </div>
  );
};

export default NotFound;
