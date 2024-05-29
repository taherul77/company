"use client";
import Image from "next/image";
import React, { useMemo } from "react";
import "./IndustriesImageContent.css";
const IndustriesImageContent = () => {
  const image1 = "/images/Home/Image/1.jpg";
  const image3 = "/images/Home/Image/2.jpg";
  const image2 = "/images/Home/Image/3.jpg";
  const images: string[] = useMemo(() => {
    return [image1, image2, image3];
  }, []);
  return (
    <> 
   
    <div className="lg:hidden flex flex-col lg:flex-row justify-center items-center gap-5  ">
        {images.map((image, index) => (
          <Image
            src={image}
            key={index}
            width={400}
            height={350}
            alt="Image"
           className="p-1"
           
          />
        ))}
      </div>
    <div className="hidden lg:flex section1 flex flex-col md:flex-row justify-center items-center gap-5  ">
        {images.map((image, index) => (
          <Image
            src={image}
            key={index}
            width={400}
            height={350}
            alt="Image"
           className="p-1"
           
          />
        ))}
      </div>

      

      {/* <div className="flex justify-center items-center space-x-5 lg:hidden">
        <div
          className=" w-[400px] overflow-hidden mt-8"
          style={{ transform: "skewY(-5deg)" }}
        >
          <Image
            src={image1}
            height={300}
            width={400}
            alt="image1"
            className="skew-reset"
          />
        </div>
        <div className="w-[400px] overflow-hidden object-cover ">
          <Image src={image3} height={300} width={400} alt="image3" />
        </div>
        <div
          className=" w-[400px] overflow-hidden object-cover mt-8"
          style={{ transform: "skewY(5deg)" }}
        >
          <Image
            src={image2}
            height={300}
            width={400}
            alt="image2"
            className="skew-reset object-cover"
          />
        </div>
      </div> */}
    </>
  );
};

export default IndustriesImageContent;
