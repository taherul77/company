"use client";

import React from "react";
import Image from "next/image";
import "./company.css";

const CompanyComponent = () => {
  // Image paths for the companies' main images and logos
  const images1 = "/images/creativematter.png";
  const images2 = "/images/atiusa.png";
  const creativeMatterLogo = "/images/creativeMatterLogo.png";
  const atiUsaLogo = "/images/atiUsaLogo.png";

  return (
    <>
      {/* Container to center the content */}
      <div className="container mx-auto">
        <div className="featured-item bg-fixed">
          {/* Flexbox to arrange items in a row on large screens and column on smaller screens */}
          <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
            {/* Container for the first company, Creative Matter */}
            <div className="image-container">
              {/* Main image for Creative Matter */}
              <Image
                src={images1}
                className="h-[450px] w-[500px]"
                height={500}
                width={500}
                alt=""
              />
              <div className="overlay">
                {/* Overlay content */}
                <div className="bg-white flex flex-col justify-center items-center border border-black h-[450px] ">
                  <div className="flex flex-col justify-center items-center text-md text-black ">
                    {/* Logo for Creative Matter */}
                    <Image
                      src={creativeMatterLogo}
                      className="h-full w-[110px] logo-img"
                      height={100}
                      width={100}
                      alt=""
                    />
                    {/* Description for Creative Matter */}
                    <p className="text-black px-10 text-md py-8 text-center">
                      A division of ATI Limited is transforming ideas into
                      remarkable marketing experiences. We specialize in
                      creating innovative and impactful strategies that help our
                      clients and connect with their target audience and achieve
                      their business goals.
                    </p>
                    {/* Button to visit the Creative Matter website */}
                    <button className="text-2xl hover:font-bold text-bold border hover:border-black rounded-full px-4 py-2">
                      Visit Website
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Container for the second company, ATI USA */}
            <div className="image-container">
              {/* Main image for ATI USA */}
              <Image
                src={images2}
                className="h-[450px] w-[500px]"
                height={500}
                width={500}
                alt=""
              />
              <div className="overlay">
                {/* Overlay content */}
                <div className="bg-white flex flex-col justify-center items-center border border-black h-[480px] md:h-[450px]">
                  <div className="flex flex-col justify-center items-center text-md text-black ">
                    {/* Logo for ATI USA */}
                    <Image
                      src={atiUsaLogo}
                      className="h-full w-[110px] logo-img"
                      height={100}
                      width={100}
                      alt=""
                    />
                    {/* Description for ATI USA */}
                    <p className="text-black px-10 text-md py-8 text-center">
                      ATI Limited is a leading software company effective in the fields of information technology for around 24 years now in Bangladesh. The company commenced has taken up some innovative tasks in Database programming & Multimedia programming. ATI Limited has extended business nicely locally & globally. ATI Limited has ISO certified 9001:2008, 2000:2005 (IT Service Management System).
                    </p>
                    {/* Button to visit the ATI USA website */}
                    <button className="text-2xl hover:font-bold text-bold border hover:border-black rounded-full px-6 py-2">
                      Visit Website
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyComponent;
