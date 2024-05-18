import React from "react";
import IndustriesContent from "./IndustriesContent";
import Wrapper from "../globalComponents/Wrapper/Wrapper";
import Image from "next/image";
import IndustriesImageContent from "./IndustriesImageContent";

const Industries = () => {
  return (
    <>
      <Wrapper>
        <div className="mx-auto text-center">
          <div className="flex justify-center items-center gap-3">
            <hr className="border-none w-[8rem] bg-[#A50D12] h-[4px] rounded-full"></hr>
            <h1 className="text-3xl font-bold uppercase">
              {" "}
              History <span className="text-[#A50D12]"> Maker </span> of ATi
            </h1>
            <hr className="border-none w-[8rem] bg-[#A50D12] h-[4px] rounded-full"></hr>
          </div>
        </div>
      </Wrapper>
      <IndustriesImageContent></IndustriesImageContent>
      <Wrapper>
        <IndustriesContent></IndustriesContent>
      </Wrapper>
    </>
  );
};

export default Industries;
