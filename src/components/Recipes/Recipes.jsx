import { useNavigate } from "react-router-dom";
import useFetch from "../hook/useFetch";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist, wishlist } from "../redux/feature/wishlistSlice";
import { addToCart } from "../redux/feature/cartSlice";
const Recipas = () => {
  const dispatch = useDispatch();
  const { datas, loading } = useFetch("/products");
  const navigate = useNavigate();
  const wishlistItem = useSelector((state) => state.wishlist.item);
  console.log(wishlistItem);

  return (
    <div className="mt-10 px-4 sm:px-10 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {datas?.products?.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition duration-300 overflow-hidden relative"
          >
            <button className="absolute top-2 right-2 bg-white p-1 rounded-full text-gray-500 hover:text-red-600 shadow">
              {wishlistItem.some((wish) => wish.id === item.id) ? (
                <FaHeart
                  className="text-red-500"
                  onClick={() => dispatch(removeFromWishlist(item))}
                />
              ) : (
                <CiHeart onClick={() => dispatch(wishlist(item))} />
              )}
            </button>

            <button
              onClick={() => dispatch(addToCart(item))}
              className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-0.5 rounded cursor-pointer"
            >
              Tez yetkazish
            </button>

            <img
              onClick={() => navigate(`/product/${item.id}`)}
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-52 object-contain p-4 bg-gray-50 cursor-pointer"
            />
            <div className="p-3">
              <h3 className="text-sm font-medium text-gray-800 leading-snug line-clamp-2 min-h-[3.5rem]">
                {item.title}
              </h3>

              <div className="mt-2">
                <span className="text-lg font-bold text-gray-900">
                  {item.price.toLocaleString()}so'm
                </span>
                <span className="text-xs text-gray-400 line-through ml-2">
                  {(item.price * 1.2).toFixed(0).toLocaleString()}so'm
                </span>
              </div>

              <p className="text-xs text-green-600 font-medium mt-1">
                Tez yetkazib berish mavjud
              </p>
            </div>
          </div>
        ))}
      </div>

      {loading && (
        <div className="text-center text-2xl text-gray-500 mt-6">
          ...Loading
        </div>
      )}
    </div>
  );
};

export default Recipas;
