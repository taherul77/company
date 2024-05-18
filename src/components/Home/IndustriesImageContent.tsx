import Image from "next/image";
import React from "react";

const IndustriesImageContent = () => {
  const image1 = "/images/Home/Image/1.jpg";
  const image2 = "/images/Home/Image/2.jpg";
  const image3 = "/images/Home/Image/3.jpg";

  return (
  
      <div className="flex justify-center items-center space-x-5">
        <div
          className=" w-[400px] overflow-hidden mt-8"
          style={{ transform: "skewY(-5deg)" }}
        >
          <Image src={image1} height={300} width={400} objectFit="cover" alt="image1" className="skew-reset" />
        </div>
        <div className="w-[400px] overflow-hidden object-cover ">
          <Image src={image3} height={300} width={400} objectFit="cover" alt="image3" />
        </div>
        <div
          className=" w-[400px] overflow-hidden object-cover mt-8"
          style={{ transform: "skewY(5deg)" }}
        >
          <Image src={image2} height={300} width={400} objectFit="cover" alt="image2" className="skew-reset object-cover" />
        </div>
      </div>
  
  );
};

export default IndustriesImageContent;
