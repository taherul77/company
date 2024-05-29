"use client";
import { useState, useEffect } from 'react';
import styles from './HomeBanner.module.css';

const HomeBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageAnimationClass, setImageAnimationClass] = useState(styles.blur);
  const [textAnimationClass, setTextAnimationClass] = useState(styles.zoom);
  const images = [
    '/images/homebanner1.jpg',
    '/images/homebanner2.jpg',
    '/images/homebanner3.jpg',
    '/images/homebanner4.jpg',
  ];

  const texts = [
    "Connecting opportunities and empowering careers",
    "Every device become a storyteller we having a narrative of connectivity and intelligence",
    "Engineering the innovative future",
    "Amplifying potential, extending capabilities, and redefining future",
    "Supporting local and foreign brands enhances diversity and fosters global connections. A robust strategy involves understanding market dynamics and tailoring support to each brand's unique needs.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setImageAnimationClass('');
      setTextAnimationClass(''); 
      setTimeout(() => {
        setImageAnimationClass(styles.blur);
        setTextAnimationClass(styles.zoom); 
      }, 50); 
    }, 6000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative flex w-full items-center justify-center bg-no-repeat h-[100vh] overflow-hidden">
      <div
        className={`absolute w-full h-full bg-cover bg-center ${imageAnimationClass}`}
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>
      <div className="absolute bottom-0 left-0 right-0 text-center">
        <div className="bg-black bg-opacity-60 px-8 py-12">
          <h1 className={`text-white text-2xl uppercase font-bold ${textAnimationClass}`}>
            {texts[currentImageIndex]}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
