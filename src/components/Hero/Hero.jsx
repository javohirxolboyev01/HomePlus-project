import React from "react";
import Image1 from "../../assets/hero/Image1.png";
import Image2 from "../../assets/hero/Image2.png";
import Image3 from "../../assets/hero/Image3.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image2,
    title: "Up to 58% Off on All Men's Wear",
    description:
      "Find the latest trends at unbeatable prices. Limited time only!",
  },
  {
    id: 2,
    img: Image1,
    title: "30% Off on All Women's Wear",
    description: "Style, comfort, and savings all in one place. Shop now!",
  },
  {
    id: 3,
    img: Image3,
    title: "Mega Sale! 70% Off Everything",
    description: "Don’t miss out on our biggest sale of the season. Hurry up!",
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className="relative bg-gradient-to-r from-orange-50 to-orange-100 min-h-[600px] flex justify-center items-center dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-[-100px] right-[-100px] w-[700px] h-[700px] bg-orange-300 opacity-20 rounded-full z-0"></div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10">
        <Slider {...settings}>
          {ImageList.map((item) => (
            <div key={item.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center py-10">
                {/* Text Content */}
                <div className="text-center sm:text-left space-y-6 px-2 sm:px-0">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-orange-500 leading-tight">
                    {item.title}
                  </h1>
                  <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg max-w-xl mx-auto sm:mx-0">
                    {item.description}
                  </p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition-all shadow-md">
                    Shop Now
                  </button>
                </div>

                {/* Image */}
                <div className="flex justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-[250px] sm:w-[400px] h-auto object-contain transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
