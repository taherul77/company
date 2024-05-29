"use client";
import { BrandImageProps } from "@/types";
import Image from "next/image";
import React, { useState } from "react";

const BrandImage = ({ hoverImage,normalImage }: BrandImageProps) => {
  const [hovered, setHovered] = useState(false);

  return (

    <>
    
    <div
      className="flex justify-center items-center border border-gray-300 hover:border-black"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative "
        style={{ width: "180px", height: "180px", overflow: "hidden" }}
      >
        <Image
          src={hovered ? hoverImage : normalImage}
          fill
          alt="Brand Logo"
          
        />
      </div>
    </div>
    
    
    {/* <div
      className="flex justify-center items-center border border-gray-300 hover:border-black"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative cursor-pointer"
        style={{ width: "150px", height: "150px", overflow: "hidden" }}
      >
        <Image
          src={image}
          fill
          className={`absolute inset-0 grayscale transition duration-300 ${
            hovered ? "grayscale-0" : "grayscale "
          }`}
          alt={""}
        />
      </div>
    </div> */}
    </>
  
  );
};

export default BrandImage;
