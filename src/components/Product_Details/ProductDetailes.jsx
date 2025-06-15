import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist, wishlist } from "../redux/feature/wishlistSlice";

const ProductDetailes = () => {
  const { id } = useParams();
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const { datas } = useFetch(`/products/${id}`);
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.item);
  console.log(wishlistItems);

  useEffect(() => {
    scrollTo(0, 0);
  }, [id]);

  const INC = () => {
    setCount(count + 1);
  };
  const DEC = () => {
    setCount(count - 1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <div className="relative bg-white rounded-xl border border-gray-200 shadow p-4 mb-4">
            <img
              src={datas?.images[index]}
              alt={datas?.title}
              className="w-full h-[400px] object-contain"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {datas?.images?.map((item, inx) => (
              <div
                key={inx}
                onClick={() => setIndex(inx)}
                className={`w-16 h-16 border-2 rounded-lg cursor-pointer flex items-center justify-center ${
                  index === inx ? "border-blue-500" : "border-gray-200"
                }`}
              >
                <img src={item} className="w-full h-full object-contain p-1" />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-3">
              {datas?.title}
            </h1>

            <div className="flex items-end space-x-3 mb-4">
              <span className="text-3xl font-bold text-blue-600">
                {datas?.price} so'm
              </span>
              {datas?.discountPercentage && (
                <span className="text-sm line-through text-gray-400">
                  {Math.round(
                    datas?.price / (1 - datas?.discountPercentage / 100)
                  )}{" "}
                  so'm
                </span>
              )}
            </div>

            <div className="flex items-center mb-4">
              <div className="bg-yellow-50 px-2 py-1 rounded-full flex items-center gap-1">
                <span className="text-yellow-400">★</span>
                <span className="text-sm font-medium text-yellow-600">
                  {datas?.rating}
                </span>
              </div>
              <span className="ml-3 text-gray-500 text-sm">
                ({datas?.stock} left in stock)
              </span>
            </div>

            <p className="text-gray-600 text-sm mb-6">{datas?.description}</p>

            <div className="flex items-center mb-4">
              <span className="mr-3 font-medium">Quantity:</span>
              <div className="flex items-center border rounded">
                <button
                  onClick={DEC}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 text-xl"
                >
                  -
                </button>
                <span className="w-10 text-center">{count}</span>
                <button
                  onClick={INC}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 text-xl"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg w-full">
                Add to Cart
              </button>
              <button className="border border-blue-500 text-blue-500 hover:bg-blue-50 font-semibold py-3 rounded-lg w-full">
                Buy Now
              </button>
            </div>
          </div>

          {/* Product Details */}
          <div className="bg-white border border-gray-200 rounded-xl shadow p-6 mt-4">
            <h3 className="text-lg font-semibold mb-4">Product Details</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Brand</p>
                <p className="font-medium">{datas?.brand || "Unknown"}</p>
              </div>
              <div>
                <p className="text-gray-500">Category</p>
                <p className="font-medium capitalize">
                  {datas?.category || "알 수 없음"}
                </p>
              </div>
              <div>
                <p className="text-gray-500">Warranty</p>
                <p className="font-medium">1 yil kafolat</p>
              </div>
              <div>
                <p className="text-gray-500">yetkazib berish</p>
                <p className="font-medium">
                  Roketa tezligida yetkazish (Rocket Delivery Available)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailes;
