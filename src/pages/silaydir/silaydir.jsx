
import React, { useState, useEffect } from "react";
import hero1 from "../../assets/img/hero.png";
import hero2 from "../../assets/img/hero2.png";
import hero3 from "../../assets/img/hero.png";

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: hero1, title: "Apple Watch Series 6", subtitle: "уже в наличии" },
    { src: hero2, title: "Apple iPhone 13", subtitle: "новинка" },
    { src: hero3, title: "MacBook Pro", subtitle: "доступен сейчас" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="mt-5 relative w-full h-[500px]">
    
      {images.map((image, index) => (
        <div
          key={index}
          className={`${
            index === currentIndex ? "block" : "hidden"
          } w-full h-full transition-opacity duration-700 ease-in-out`}
        >
          <img
            src={image.src}
            alt="hero"
            className="w-full h-full object-cover block" 
          />
          <h1 className="absolute font-bold text-[48px] text-[#fff] w-[289px] top-[90px] left-[100px]">
            {image.title}
          </h1>
          <p className="absolute font-medium text-[32px] text-[#fff] top-[240px] left-[100px]">
            {image.subtitle}
          </p>
        </div>
      ))}
      <button
        onClick={() =>
          setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
        }
        className="absolute top-1/2 left-0 bg-black bg-opacity-50 text-white px-3 py-2"
      >
        Prev
      </button>
      <button
        onClick={() =>
          setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
        }
        className="absolute top-1/2 right-0 bg-black bg-opacity-50 text-white px-3 py-2"
      >
        Next
      </button>
    </div>
  );
};
