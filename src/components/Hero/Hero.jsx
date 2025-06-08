import React from "react";
import Apple from "../../assets/Apple.png";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-black to-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Discover
            <br /> Most Suitable
            <br /> Watches
          </h1>
          <p className="text-gray-300">
            Find the best, reliable, and cheap smart watches here. We focus on
            product quality. Here you can find smart watches of almost all
            brands. So why you are waiting? Just order now!
          </p>
          <div className="flex items-center mt-4 bg-white rounded-full p-2 w-full max-w-md">
            <input
              type="text"
              placeholder="Find the best brands"
              className="flex-grow px-4 py-2 rounded-l-full text-gray-800 outline-none"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Search
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src={Apple}
            alt="WatchLogo"
            className="w-full max-w-sm transition-transform duration-500 "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
