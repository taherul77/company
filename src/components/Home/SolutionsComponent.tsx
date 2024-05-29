import Image from "next/image";
import React from "react";
import "./solutioncomponent.css";
import MobileSolution from "./MobileSolution";
import Link from "next/link";
import { useLocale } from "next-intl";

const SolutionsComponent = () => {
  const locale = useLocale();
  return (
    <div className="container  flex justify-center ">
      <div className="h-[36rem] w-96 relative my-10 hidden lg:flex">
        <Link href={`/${locale}/solutions`}>
          <div className="relative">
            <div className="absolute top-0 left-0 duration-500 hover:z-40">
              <div className="hover-trigger cursor-pointer absolute top-[490px] left-[27rem]">
                <h3 className="text-2xl font-bold text-container">
                  University
                </h3>
                <h3 className="text-2xl font-bold text-container">
                  Management System
                </h3>
              </div>
              <svg
                width="280"
                height="79"
                viewBox="0 0 245 79"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[29rem] left-[10rem]"
              >
                <path
                  d="M244 78H121L1.5 1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              <div className="hex8 absolute top-[24rem] left-28 m-2 flex flex-col p-2">
                <div className="hex-inner8">
                  <Image
                    src="/images/Home/Icon/UMS.svg"
                    alt="solutions"
                    layout="intrinsic"
                    width={100}
                    height={100}
                    className="solution-image8"
                  />

                  <Image
                    src="/images/Home/GIF/UMS.gif"
                    alt="solutions"
                    layout="intrinsic"
                    width={100}
                    height={100}
                    className="solution-image-hover8"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href={`/${locale}/solutions`}>
          <div className="relative">
            <div className="absolute top-0 duration-500 hover:z-40">
              <div className="hover-trigger cursor-pointer absolute top-[27rem] -left-[22rem] ">
                <h3 className="text-2xl font-bold text-container">Hospital</h3>
                <h3 className="text-2xl font-bold text-container">
                  Management System
                </h3>
              </div>
              <svg
                width="175"
                height="44"
                viewBox="0 0 175 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[442px] -left-[7rem]"
              >
                <path
                  d="M1 43H124L174 1"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

              <div className="hex7 top-[20rem] left-4 m-2 flex flex-col fixed  p-2 absulute">
                <div className="hex-inner7">
                  <Image
                    src="/images/Home/Icon/HMS.svg"
                    alt={"solutions"}
                    layout="intrinsic"
                    width={100}
                    height={100}
                    className="solution-image7"
                  />
                  <Image
                    src="/images/Home/GIF/HMS.gif"
                    alt="solutions"
                    layout="intrinsic"
                    width={100}
                    height={100}
                    className="solution-image-hover7"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href={`/${locale}/solutions`}>
          <div className="relative">
            <div className="absolute top-0 left-0  duration-500 hover:z-40">
              <div className="hover-trigger cursor-pointer absolute top-[338px] -left-[25rem] ">
                <h3 className="text-2xl font-bold text-container">
                  Medical College
                </h3>
                <h3 className="text-2xl font-bold text-container">
                  Management System
                </h3>
              </div>
              <svg
                width="175"
                height="44"
                viewBox="0 0 175 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[348px] -left-[156px]"
              >
                <path
                  d="M1 43H124L174 1"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

              <div className="hex6 top-[17rem] left-0 m-2 flex flex-col fixed  p-2 absulute">
                <div className="hex-inner6">
                  <Image
                    src="/images/Home/Icon/MCMS.svg"
                    alt={"solutions"}
                    layout="intrinsic"
                    width={100}
                    height={100}
                    className="solution-image6"
                  />
                  <Image
                    src="/images/Home/GIF/MCMS.gif"
                    alt="solutions"
                    layout="intrinsic"
                    width={100}
                    height={100}
                    className="solution-image-hover6"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href={`/${locale}/solutions`}>
          <div className="relative">
            <div className="absolute top-0 z-10 left-0  duration-500 hover:z-40">
              <div className="hover-trigger cursor-pointer absolute top-60 left-[35rem] ">
                <h3 className="text-2xl font-bold text-container">
                  Vat Automatic
                </h3>
              </div>
              <svg
                width="170"
                height="2"
                viewBox="0 0 180 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-64 left-[24rem]"
              >
                <path
                  d="M178.5 1H55.5L1 1"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <div className="hex5 top-[12rem] left-[18rem]  m-2 flex flex-col fixed  p-2 absulute">
                <div className="hex-inner5">
                  <Image
                    src="/images/Home/Icon/VAT.svg"
                    alt={"solutions"}
                    layout="intrinsic"
                    width={100}
                    height={100}
                    className="solution-image5"
                  />
                  <Image
                    src="/images/Home/GIF/VAT.gif"
                    alt="solutions"
                    layout="intrinsic"
                    width={100}
                    height={100}
                    className="solution-image-hover5"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href={`/${locale}/solutions`}>
          <div className="relative">
            <div className="absolute top-0 z-10 left-0 hover:h-48 hover:w-48 hover:inset-0 duration-500 hover:z-40">
              <div className="hover-trigger cursor-pointer absolute top-[284px] left-[29rem] ">
                <h3 className="text-2xl font-bold text-container">Radiology</h3>
                <h3 className="text-2xl font-bold text-container">
                  Information System
                </h3>
              </div>
              <svg
                width="280"
                height="79"
                viewBox="0 0 245 79"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[16rem] left-[12rem]"
              >
                <path
                  d="M244 78H121L1.5 1"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

              <div className="hex4 top-[10rem] left-[8rem] m-2 flex flex-col fixed  p-2 absulute">
                <div className="hex-inner4">
                  <Image
                    src="/images/Home/Icon/RIS.svg"
                    alt={"solutions"}
                    layout="intrinsic"
                    width={100}
                    height={100}
                    className="solution-image4"
                  />
                  <Image
                    src="/images/Home/GIF/RIS.gif"
                    alt="solutions"
                    layout="intrinsic"
                    width={100}
                    height={100}
                    className="solution-image-hover4"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href={`/${locale}/solutions`}>
          <div className="relative">
            <div className="absolute top-0 left-0 z-10 duration-500">
              <div className="hover-trigger cursor-pointer absolute -top-1 -left-80">
                <h2 className="text-2xl font-bold text-container">
                  Laboratory
                </h2>
                <h2 className="text-2xl font-bold text-container">
                  Information System
                </h2>
              </div>
              <svg
                width="200"
                height="110"
                viewBox="0 0 200 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-12 -left-24"
              >
                <path
                  d="M1 1H124L247.5 109"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

              <div className="hex3 top-[7rem] left-[3rem] m-2 flex flex-col fixed p-2 absolute">
                <div className="hex-inner3">
                  <Image
                    src="/images/Home/Icon/LIS.svg"
                    alt="solutions"
                    layout="intrinsic"
                    width={100}
                    height={100}
                    className="solution-image3"
                  />
                  <Image
                    src="/images/Home/GIF/LIS.gif"
                    alt="solutions"
                    layout="intrinsic"
                    width={100}
                    height={100}
                    className="solution-image-hover3"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href={`/${locale}/solutions`}>
          <div className="relative">
            <div className="absolute top-0 left-0  duration-500 hover:z-40">
              <div className="hover-trigger cursor-pointer absolute top-[76px] -left-[26rem] ">
                <h3 className="text-2xl font-bold text-container">
                  Enterprise
                </h3>
                <h3 className="text-2xl font-bold text-container">
                  Resource Planning
                </h3>
              </div>
              <svg
                width="190"
                height="44"
                viewBox="0 0 175 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-32 -left-[13rem]"
              >
                <path
                  d="M1 1H124L174 43"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

              <div className="hex2 top-[9rem] left-[-4rem] m-2 flex flex-col fixed  p-2 absulute">
                <div className="hex-inner2">
                  <Image
                    src="/images/Home/Icon/ERP.svg"
                    alt={"solutions"}
                    layout="intrinsic"
                    width={100}
                    height={100}
                    className="solution-image2"
                  />
                  <Image
                    src="/images/Home/GIF/ERP.gif"
                    alt="solutions"
                    layout="intrinsic"
                    width={100}
                    height={100}
                    className="solution-image-hover2"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href={`/${locale}/solutions`}>
          <div className="relative">
            <div className="absolute top-0 left-0  duration-500 hover:z-40">
              <div className="hover-trigger cursor-pointer absolute top-20 left-[36rem] ">
                <h3 className="text-2xl font-bold text-container">Accounts</h3>
                <h3 className="text-2xl font-bold text-container">
                  Information System
                </h3>
              </div>
              <svg
                width="170"
                height="2"
                viewBox="0 0 180 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-32 left-[25rem]"
              >
                <path
                  d="M178.5 1H55.5L1 1"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

              <div className="hex1 top-3 left-32 m-2 flex flex-col fixed  p-2 absulute">
                <div className="hex-inner1">
                  <Image
                    src="/images/Home/Icon/AIS.0.svg"
                    alt={"solutions"}
                    layout="intrinsic"
                    width={100}
                    height={100}
                    className="solution-image1"
                  />
                  <Image
                    src="/images/Home/GIF/AIS.gif"
                    alt="solutions"
                    layout="intrinsic"
                    width={100}
                    height={100}
                    className="solution-image-hover1"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href={`/${locale}/solutions`}>
          <div className="relative">
            <div className="absolute top-0 left-0 duration-500 hover:z-40">
              <div className="hover-trigger cursor-pointer absolute -top-28 left-[23rem] ">
                <h3 className="text-2xl font-bold text-container">
                  Human Resource
                </h3>
                <h3 className="text-2xl font-bold text-container">
                  Management System
                </h3>
              </div>
              <svg
                width="204"
                height="66"
                viewBox="0 0 204 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -top-16 left-40"
              >
                <path
                  d="M203 1H80L1.5 65"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

              <div className="hex top-0 z-20  left-20 m-2 flex flex-col fixed  p-2 absulute">
                <div className="hex-inner">
                  <Image
                    src="/images/Home/Icon/HRM.svg"
                    alt={"solutions"}
                    layout="intrinsic"
                    width={100}
                    height={100}
                    className="solution-image"
                  />
                  <Image
                    src="/images/Home/GIF/HRM.gif"
                    alt="solutions"
                    layout="intrinsic"
                    width={100}
                    height={100}
                    className="solution-image-hover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <MobileSolution></MobileSolution>
    </div>
  );
};

export default SolutionsComponent;
