import React, { useState, useEffect } from "react";

export const Soat = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const formattedTime = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
      }`;
      setCurrentTime(formattedTime);
    };

    updateTime(); 
    const intervalId = setInterval(updateTime, 60000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <a className="font-medium text-gray-500 text-[16px]" href="#">
      Пн-вс: с {currentTime} до 21:00
    </a>
  );
};
