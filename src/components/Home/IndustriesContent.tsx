/* eslint-disable react/no-unescaped-entities */
import React from "react";

const IndustriesContent = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center py-5">
      <div className="flex justify-center items-center h-full lg:w-1/2 p-4">
        <h1 className="text-2xl lg:text-5xl font-bold text-start uppercase gradient-text">
          Industries & Expertise
        </h1>
      </div>
      <div className="flex justify-center items-center h-full lg:w-1/2 p-4 ">
        <h5 className=" text-xl text-start ">
          Specializing in education, banks & fin-tech, e-commerce, medical,
          pharmaceutical, and furniture. Globally committed to excellence, we
          redefine success through innovative solutions in diverse industries.
        </h5>
      </div>
    </div>
  );
};

export default IndustriesContent;
