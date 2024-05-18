import { BannerProps } from "@/types";
import React from "react";

export default function Banner({ img, heading }: BannerProps) {
  return (
    <div className="relative p-5 px-20 py-24 overflow-hidden">
      <div
        style={{ "--image-url": `url(${img})` } as React.CSSProperties}
        className="absolute inset-0 bg-[image:var(--image-url)] bg-cover bg-no-repeat filter blur-sm"
      ></div>
      <div className="relative text-white px-20 py-20 md:px-10 lg:px-48 lg:py-20">
        <div className="text-center">
          <h3 className="uppercase font-bold text-3xl md:text-4xl lg:text-6xl mb-5">
            {heading}
          </h3>
        </div>
      </div>
    </div>
  );
}