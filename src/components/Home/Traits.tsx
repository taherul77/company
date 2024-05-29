import Image from "next/image";
import React from "react";
import image from "@/assests/Home/leadership.svg";
import image1 from "@/assests/Home/Execution.svg";
import image2 from "@/assests/Home/Progression.svg";
import image3 from "@/assests/Home/Results.svg";
export default function Traits() {
  return (
    <>
      <div className="container flex justify-center flex-col items-center mx-auto ">
        <div
          className="flex flex-col justify-center w-full divide-y md:flex-row md:divide-y-0 md:divide-x 
           sm:px-8 lg:px-12 xl:px-32 "
        >
          <div className="flex flex-col justify-center w-full divide-y ">
            <div className="flex flex-col w-full justify-center items-center text-center  text-white font-bold py-8">
              <Image
                className="white-image"
                height={50}
                width={50}
                alt="Rectangle"
                src={image}
              />
              <h5 className="text-xl uppercase md:mx-5 py-2">Leadership</h5>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full divide-y ">
            <div className="flex flex-col w-full justify-center items-center text-center text-white font-bold py-8">
              <Image
                className="white-image"
                height={50}
                width={50}
                alt="Rectangle"
                src={image2}
              />
              <h5 className="text-xl uppercase md:mx-5 py-2">Progression</h5>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full divide-y ">
            <div className="flex flex-col w-full justify-center items-center text-center text-white font-bold py-8">
              <Image
                className="white-image"
                height={50}
                width={50}
                alt="Rectangle"
                src={image1}
              />
              <h5 className="text-xl uppercase py-2 md:mx-5">Execution</h5>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full divide-y ">
            <div className="flex flex-col w-full justify-center items-center text-center text-white font-bold py-8">
              <Image
                className="white-image"
                height={50}
                width={50}
                alt="Rectangle"
                src={image3}
              />
              <h5 className="text-xl uppercase md:mx-5 py-2">Results</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
