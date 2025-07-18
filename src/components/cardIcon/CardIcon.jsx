import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const cartItems = useSelector((state) => state.cart.cart || []);

  return (
    <Link to="/cart" className="relative block">
      <div className="relative">
        <FaShoppingCart className="text-[22px] text-gray-800 hover:text-[#0074e9]" />
        {cartItems.length > 0 && (
          <span className="absolute -top-1.5 -right-2 bg-[#ff4444] text-white text-[11px] leading-none w-[18px] h-[18px] rounded-full flex items-center justify-center font-semibold">
            {cartItems.length}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartIcon;
