/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const IndustriesContent = () => {
  const images = [
    { url: "/images/Home/Icon/Education.svg", title: "Education" },
    { url: "/images/Home/Icon/Banks & Fintech.svg", title: "Banks & Fintech" },
    { url: "/images/Home/Icon/E-Commerce.svg", title: "E-Commerce" },
    { url: "/images/Home/Icon/Medical.svg", title: "Medical" },
    { url: "/images/Home/Icon/Pharmaceutical.svg", title: "Pharmaceutical" },
    { url: "/images/Home/Icon/Furniture.svg", title: "Furniture" },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center ">
      <div className="flex justify-center items-center h-full lg:w-1/2 mb-5 lg:mb-0 ">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-start uppercase gradient-text">
          Industries & Expertise
        </h1>
      </div>
      <div className="flex flex-col  h-full lg:w-1/2  ">
        <div className="flex justify-center gap-2 flex-wrap py-4 lg:py-0">
          {images.map((image, index) => (
            <div key={index} className="flex flex-col flex-wrap justify-center items-center text-[#15656A] ">
              <div className="m-2 rounded-full overflow-hidden  border-2 border-[#15656A]">
                <Image
                  className="p-2"
                  src={image.url}
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
              <h5 className="text-sm font-bold">{image.title}</h5>
            </div>
          ))}
        </div>
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
