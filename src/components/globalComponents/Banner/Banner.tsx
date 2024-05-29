import { BannerProps } from "@/types";
import React from "react";

// Define Banner component which accepts img and heading as props
export default function Banner({ img, heading }: BannerProps) {
  return (
    // Container div for the banner section with relative positioning and overflow hidden
    <div className="relative flex justify-center text-center items-center p-5 px-20 py-32 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div
        style={{ "--image-url": `url(${img})` } as React.CSSProperties} // Set background image dynamically using inline styles
        className="absolute inset-0 bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat filter blur-[3px]" // Background image styling with blur effect
      ></div>
      {/* Content */}
      <div className="relative text-white md:px-10 lg:px-48 lg:py-20">
        <div className="flex justify-center text-center items-center">
          {/* Heading */}
          <h3 className="uppercase font-bold text-3xl md:text-4xl lg:text-8xl lg:mb-5 text-nowrap">
            {heading}
          </h3>
        </div>
      </div>
    </div>
  );
}
