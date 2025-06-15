import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
// import { removeFromCart } from "../redux/feature/cartSlice";
const CartCheck = () => {
  const CartItem = useSelector((state) => state.cart.cart);
  return (
    <div className="p-6 min-h-screen bg-gray-100">
      {CartItem.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {CartItem.map((item) => (
            <div
              key={item.id}
              className="max-w-xs mx-auto bg-white rounded-lg shadow hover:shadow-md transition-all duration-300 border border-gray-200 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-56 object-contain p-4 bg-gray-50"
                />

                <button
                  onClick={() => dispatch(removeFromCart(item))}
                  className="absolute top-2 right-2 bg-white p-1 rounded-full text-gray-600 hover:text-blue-500 shadow"
                >
                  <FaShoppingCart className="text-2xl" />
                </button>

                <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  Tez yetkazish
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-800 leading-snug line-clamp-2">
                  {item.title}
                </h3>

                <div className="mt-2 flex items-end justify-between">
                  <span className="text-xl font-bold text-gray-900">
                    {item.price}so'm
                  </span>
                  <span className="text-xs text-gray-400 line-through">
                    {(item.price * 1.2).toFixed(0)}so'm
                  </span>
                </div>

                <div className="mt-1 text-green-600 text-xs font-semibold">
                  Yetkazib berish mavjud
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg">
          Whislistda Hech narsa yo 😔
        </div>
      )}
    </div>
  );
};

export default CartCheck;
