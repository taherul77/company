"use client"
import { RevolutionBannerProps } from "@/types";
import Image from "next/image";
import React from "react";
import Lottie from "lottie-react";
import Animation from "@/assests/Astronaut floating lottie/data.json";
const RevolutionBanner = ({
  img,
  heading,
  backgroundImage,
}: RevolutionBannerProps) => {
  return (
    <div
      className="w-full h-[100vh] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-white px-20  py-16">
        <div className=" text-center">
          <div className="flex justify-center items-center py-14">
          <Lottie animationData={Animation} loop={true} style={{ width: 320, height: 320 }} />
         
          </div>

          <h3 className="uppercase font-bold text-3xl  md:text-4xl  lg:text-6xl mb-10">
            {heading}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default RevolutionBanner;
