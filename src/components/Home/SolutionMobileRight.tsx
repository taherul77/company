import { ExpertiseSectionImageLeftProps } from "@/types";
import Image from "next/image";
import React from "react";

const SolutionMobileRight = ({ img }: ExpertiseSectionImageLeftProps) => {
  return (
    <div style={{ position: "relative", width: "350px", height: "350px" }}>
      <h1 className="h-[350px] w-[350px] relative rounded rounded-se-3xl  bg-white"></h1>
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          className="h-[350px] w-[350px] rounded rounded-se-3xl absolute top-3 "
          width={350}
          height={350}
          src={img}
          alt=""
        />
      </div>
    </div>
  );
};

export default SolutionMobileRight;
