/* eslint-disable @next/next/no-img-element */
"use client"
import React, {  useMemo } from "react";
import "./Hero.css";
import "react-slideshow-image/dist/styles.css";

const Hero: React.FC = () => {
  const plant1 = "/images/Home/Image/1.jpg";
  const plant2 = "/images/Home/Image/2.jpg";
  const plant3 = "/images/Home/Image/3.jpg";
  const plant4 = "/images/Home/Image/1.jpg";




  const images: string[] = useMemo(() => {
    return [plant1, plant2, plant3,plant4];
  }, []);

 

  return (
    <div>
    
      
      <section className="flex">
        {
          // loop through images array and display each image
          images.map((image, index) => (
            <img
              src={image}
              key={index}
              alt="plant"
              className={"images" + index}
              style={{ width: 300, height: 400 }}
            />
          ))
        }
       
      </section>
    </div>
  );
};

export default Hero;
