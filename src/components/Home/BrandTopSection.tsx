/* eslint-disable react/no-unescaped-entities */
import React from "react";
import './BrandTopSection.css';
const BrandTopSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center py-5">
      <div className="flex justify-center items-center h-full lg:w-1/2 p-4">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-start uppercase gradient-text">
          Supported Brand Local & Foreign
        </h1>
      </div>
      <div className="flex justify-center items-center h-full lg:w-1/2 p-4 ">
        <h5 className=" text-xl text-start ">
          Supporting local and foreign brands enhances diversity and fosters
          global connections. A robust strategy involves understanding market
          dynamics and tailoring support to each brand's unique needs.
        </h5>
      </div>
    </div>
  );
};

export default BrandTopSection;
