"use client"
import { useState, useEffect } from 'react';

const HomeBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/images/homebanner1.jpg',
    '/images/homebanner2.jpg',
    '/images/homebanner3.jpg',
    '/images/homebanner4.jpg',
  ];

  const texts = [
    "Connecting opportunities and empowering careers",
    "Every device become  a storteller wehaving a narrative of connectivity and intelliafnce ",
   " Engineering the innovative future",
    "Amplifying potential, extending capabilities, and redefining future",
    "Supporting local and foreign brands enhances diversity and fosters global connections. A robust strategy involves understanding market dynamics and tailoring support to each brand's unique needs.",
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex w-full items-center justify-center bg-no-repeat h-[100vh]">
      <div
        className="w-full h-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className="absolute bottom-0 left-0 right-0 text-center ">
          <div className="bg-black bg-opacity-40 px-8 py-8">
            <h1 className="text-white text-2xl uppercase font-bold">
              {texts[currentImageIndex]}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
