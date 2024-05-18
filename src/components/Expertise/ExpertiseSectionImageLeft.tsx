import { ExpertiseSectionImageLeftProps } from "@/types";
import Image from "next/image";
import React from "react";

const ExpertiseSectionImageLeft = ({ img }: ExpertiseSectionImageLeftProps) => {
  return (
    <div style={{ position: "relative", width: "320px", height: "320px" }}>
      <h1 className="h-[320px] w-[320px] relative  rounded rounded-ss-3xl bg-red-700"></h1>
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          className="h-[320px] w-[320px] rounded rounded-ss-3xl absolute top-3 ml-6 object-cover"
          width={320}
          height={320}
          src={img}
          alt=""
        />
      </div>
    </div>
  );
};

export default ExpertiseSectionImageLeft;
