import { RevolutionBannerProps } from "@/types";
import Image from "next/image";
import React from "react";

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
            <Image src={img} height={320} width={320} alt=""></Image>
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
