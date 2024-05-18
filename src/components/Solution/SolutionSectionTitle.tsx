import { SolutionSectionTitleProps } from "@/types";
import React from "react";
import SectionEnimation from "./SectionEnimation";

const SolutionSectionTitle = ({
  title,
  subSubTitle,
  className,
  className2,translateX
}: SolutionSectionTitleProps) => {
  return (
    <>
      <div className="flex flex-col px-5 py-2">
        <h1 className={`uppercase ${className}`}>
          <span className="text-white font-bold text-2xl">{title}</span>{" "}
        </h1>
        
          <SectionEnimation translateX={translateX} className2={className2}>{subSubTitle}</SectionEnimation>
       
      </div>
    </>
  );
};

export default SolutionSectionTitle;
