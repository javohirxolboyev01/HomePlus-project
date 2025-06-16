import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/feature/cartSlice";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/feature/cartSlice";

const ProductDetailes = () => {
  const { id } = useParams();
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(1);
  const { datas } = useFetch(`/products/${id}`);
  const ProductCart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    scrollTo(0, 0);
  }, [id]);

  const INC = () => setCount(count + 1);
  const DEC = () => setCount(Math.max(count - 1, 1));

  const originalPrice = datas?.discountPercentage
    ? Math.round(datas.price / (1 - datas.discountPercentage / 100))
    : null;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <div className="bg-white border rounded-lg shadow-sm p-4">
            <img
              src={datas?.images?.[index]}
              alt="product"
              className="w-full h-[400px] object-contain"
            />
          </div>
          <div className="flex gap-2 mt-4 overflow-x-auto">
            {datas?.images?.map((img, i) => (
              <div
                key={i}
                className={`w-20 h-20 border rounded cursor-pointer p-1 ${
                  i === index ? "border-blue-500" : "border-gray-300"
                }`}
                onClick={() => setIndex(i)}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-5">
          <h1 className="text-2xl font-bold text-gray-800">{datas?.title}</h1>

          <div className="space-y-1">
            <div className="text-3xl font-bold text-blue-600">
              {datas?.price?.toLocaleString()} so'm
            </div>
            {originalPrice && (
              <div className="text-gray-400 line-through text-sm">
                {originalPrice.toLocaleString()} so'm
              </div>
            )}
          </div>

          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <span className="bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded">
              ★ {datas?.rating}
            </span>
            <span>{datas?.stock} ta mavjud</span>
          </div>

          <p className="text-sm text-gray-700">{datas?.description}</p>

          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium">Soni:</span>
            <div className="flex items-center border rounded overflow-hidden">
              <button
                onClick={DEC}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
              >
                -
              </button>
              <span className="w-10 text-center">{count}</span>
              <button
                onClick={INC}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={() => dispatch(addToCart(datas))}
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold"
            >
              Savatga qo‘shish
            </button>
            <button className="flex-1 border border-blue-500 text-blue-500 hover:bg-blue-50 py-3 rounded-lg font-semibold">
              Hoziroq xarid qilish
            </button>
          </div>

          <div className="pt-6 border-t mt-6">
            <p className="text-sm font-medium text-gray-600 mb-2">
              To‘lov usullari:
            </p>
            <div className="flex items-center gap-3">
              <img
                src="/images/humo.png"
                className="h-8 w-auto object-contain"
              />
              <img
                src="/images/click.png"
                className="h-8 w-auto object-contain rounded"
              />
              <img
                src="/images/payme.png"
                className="h-8 w-auto object-contain"
              />
              <img
                src="/images/uzum.png"
                className="h-8 w-auto object-contain rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Additional info */}
      <div className="mt-10 bg-white border rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Maxsulot tafsilotlari</h2>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <p className="font-medium text-gray-500">Brand:</p>
            <p>{datas?.brand}</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">Kategoriya:</p>
            <p className="capitalize">{datas?.category}</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">Kafolat:</p>
            <p>1 yil</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">Yetkazib berish:</p>
            <p>Rocket tezligida</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailes;
